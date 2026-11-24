import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

// Execute the actual shared controller with a small DOM boundary and a mocked
// delivery dependency. These tests do not launch a browser or send enquiries.
const controller=(await readFile(new URL('../dist/site.js',import.meta.url),'utf8'))
  .replace(/^import \{ sendEnquiry \} from '\.\/form-delivery\.js';\s*/, '');
const dist=new URL('../dist/',import.meta.url);
const pages=[];
for(const file of await readdir(dist)) {
  if(!file.endsWith('.html')) continue;
  const html=await readFile(new URL(file,dist),'utf8');
  const form=html.match(/<form\b[^>]*data-enquiry-form[\s\S]*?<\/form>/)?.[0];
  if(form) pages.push({file,form});
}

function element(value='') {
  const classes=new Set();
  return {value,textContent:'',disabled:false,customValidity:'',
    classList:{add:(...names)=>names.forEach(name=>classes.add(name)),remove:(...names)=>names.forEach(name=>classes.delete(name)),contains:name=>classes.has(name)},
    setCustomValidity(message){this.customValidity=message;}};
}

function harness(page=pages[0], send=async()=>{}) {
  const fields=new Map();
  for(const match of page.form.matchAll(/<(input|textarea|select)\b([^>]*)(?:>([\s\S]*?)<\/\1>)?/g)) {
    const attrs=Object.fromEntries(Array.from(match[2].matchAll(/([\w-]+)="([^"]*)"/g),m=>[m[1],m[2]]));
    if(!attrs.name) continue;
    const selected=match[1]==='select' ? (match[3]?.match(/<option selected>([^<]+)</)?.[1] || match[3]?.match(/<option>([^<]+)</)?.[1]) : null;
    fields.set(attrs.name,element(selected || attrs.value || ''));
  }
  for(const [name,value] of Object.entries({name:'Form QA',email:'qa@example.com',phone:'',description:'Please help organise our recurring work.',company:'',startDate:'',timeZone:'',consent:'agreed',botcheck:''})) {
    fields.get(name).value=value;
  }
  const status=element(),fieldset=element(),button=element();
  const listeners={},attributes=new Map(),calls=[];
  const form={nativeValid:true,resetCount:0,validityChecks:0,
    querySelector(selector){
      if(selector==='.enquiry-status') return status;
      if(selector==='fieldset') return fieldset;
      if(selector==='button[type="submit"]') return button;
      const name=selector.match(/^\[name="([^"]+)"\]$/)?.[1];
      if(name) return fields.get(name);
      throw new Error(`Unexpected form selector: ${selector}`);
    },
    addEventListener(type,listener){listeners[type]=listener;},
    setAttribute(name,value){attributes.set(name,value);},
    removeAttribute(name){attributes.delete(name);},
    reportValidity(){this.validityChecks++;return this.nativeValid && !Array.from(fields.values()).some(input=>input.customValidity);},
    reset(){this.resetCount++;}
  };
  runInNewContext(controller,{
    document:{querySelector:()=>null,querySelectorAll:selector=>selector==='[data-enquiry-form]'?[form]:[],addEventListener(){}},
    window:{addEventListener(){},location:{origin:'https://assistlaneglobal.com',pathname:page.file==='index.html'?'/':'/'+page.file.slice(0,-5),search:'?utm_source=quality-check&unrelated=ignored',hash:''}},
    matchMedia:()=>({matches:true,addEventListener(){}}),URLSearchParams,
    FormData:class {constructor(){return Array.from(fields,([name,input])=>[name,input.value]);}},
    sendEnquiry:async(payload,key)=>{calls.push({payload,key});return send(payload,key);}
  });
  const submit=()=>listeners.submit({preventDefault(){}});
  const input=name=>listeners.input({target:fields.get(name)});
  return {fields,status,fieldset,button,form,attributes,calls,submit,input};
}

test('finds all 28 enquiry pages',()=>assert.equal(pages.length,28));

for(const page of pages) test(`${page.file}: sends the configured form, source and consent, then restores the controls`,async()=>{
  const h=harness(page);
  await h.submit();
  assert.equal(h.calls.length,1);
  assert.equal(h.calls[0].key,h.fields.get('access_key').value);
  assert.equal(h.calls[0].payload.consent,'agreed');
  assert.equal(h.calls[0].payload.source_page,'https://assistlaneglobal.com'+(page.file==='index.html'?'/':'/'+page.file.slice(0,-5)));
  assert.equal(h.calls[0].payload.utm_source,'quality-check');
  assert.ok(!('unrelated' in h.calls[0].payload));
  assert.equal(h.form.resetCount,1);
  assert.equal(h.fieldset.disabled,false);
  assert.equal(h.attributes.has('aria-busy'),false);
  assert.equal(h.status.classList.contains('is-success'),true);
  assert.equal(h.button.textContent,'Send another enquiry');
});

test('honours native required-field validation',async()=>{
  const h=harness();h.form.nativeValid=false;
  await h.submit();
  assert.equal(h.form.validityChecks,1);
  assert.equal(h.calls.length,0);
});

test('rejects whitespace-only requirements and recovers after correction',async()=>{
  const h=harness();h.fields.get('description').value='  \n  ';
  await h.submit();
  assert.equal(h.calls.length,0);
  assert.match(h.fields.get('description').customValidity,/describe/);
  h.fields.get('description').value='A daily inbox summary';h.input('description');
  await h.submit();assert.equal(h.calls.length,1);
});

test('rejects malformed or out-of-range phone numbers, while allowing an empty phone',async()=>{
  for(const value of ['123','1234567890123456','+91 abcdefgh','---....']) {
    const h=harness();h.fields.get('phone').value=value;
    await h.submit();assert.equal(h.calls.length,0,value);
    assert.match(h.fields.get('phone').customValidity,/valid phone/);
    h.fields.get('phone').value='';h.input('phone');
    await h.submit();assert.equal(h.calls.length,1);
  }
});

test('prevents duplicate submissions while a request is pending',async()=>{
  let finish;
  const h=harness(pages[0],()=>new Promise(resolve=>{finish=resolve;}));
  const pending=h.submit();
  assert.equal(h.fieldset.disabled,true);
  assert.equal(h.attributes.get('aria-busy'),'true');
  assert.equal(h.button.textContent,'Sending your enquiry…');
  await h.submit();assert.equal(h.calls.length,1);
  finish();await pending;
  assert.equal(h.fieldset.disabled,false);
});

test('preserves entries on delivery failure and clears the error when editing',async()=>{
  const h=harness(pages[0],async()=>{throw new Error('Delivery could not be confirmed.');});
  await h.submit();
  assert.equal(h.form.resetCount,0);
  assert.equal(h.fields.get('description').value,'Please help organise our recurring work.');
  assert.equal(h.status.classList.contains('is-error'),true);
  assert.equal(h.status.textContent,'Delivery could not be confirmed.');
  assert.equal(h.button.textContent,'Try again');
  assert.equal(h.fieldset.disabled,false);
  assert.equal(h.attributes.has('aria-busy'),false);
  h.input('description');
  assert.equal(h.status.textContent,'');
  assert.equal(h.status.classList.contains('is-error'),false);
});

test('does not deliver a honeypot submission',async()=>{
  const h=harness();h.fields.get('botcheck').value='automated content';
  await h.submit();assert.equal(h.calls.length,0);
});

test('does not deliver when the key is absent at initialization',async()=>{
  const page={...pages[0],form:pages[0].form.replace(/(name="access_key" value=")[^"]+/, '$1')};
  const h=harness(page);await h.submit();assert.equal(h.calls.length,0);
});
