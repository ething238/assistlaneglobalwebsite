import assert from 'node:assert/strict';
import { test } from 'node:test';
import { sendEnquiry, deliveryFailure, deliveryUnconfirmed } from '../dist/form-delivery.js';

const lead = {name:'Preview QA',email:'qa@example.com',service:'Bookkeeping',description:'Delivery test'};
const key = 'public-test-key';

test('accepts only a confirmed API success and sends the correct recipient key', async () => {
  let sent;
  const result = await sendEnquiry(lead,key,{fetchImpl:async (url,options)=>{
    sent={url,options,body:JSON.parse(options.body)};
    return new Response(JSON.stringify({success:true}),{status:200});
  }});
  assert.deepEqual(result,{success:true});
  assert.equal(sent.url,'https://api.web3forms.com/submit');
  assert.equal(sent.options.method,'POST');
  assert.equal(sent.body.access_key,key);
  assert.equal(sent.body.email,lead.email);
  assert.equal(sent.body.subject,'AssistLane Global enquiry: Bookkeeping');
  assert.equal(sent.body.botcheck,false);
});

for (const [name,status,result] of [
  ['HTTP 200 with provider rejection',200,{success:false}],
  ['HTTP failure despite a success body',500,{success:true}],
  ['missing success flag',200,{}],
  ['string success flag',200,{success:'true'}],
  ['array response',200,[{success:true}]]
]) test(`does not claim delivery on ${name}`, async () => {
  await assert.rejects(sendEnquiry(lead,key,{fetchImpl:async()=>new Response(JSON.stringify(result),{status})}),{message:deliveryFailure});
});

test('handles non-JSON and network failures without claiming delivery', async () => {
  await assert.rejects(sendEnquiry(lead,key,{fetchImpl:async()=>new Response('<html>error</html>',{status:502})}),{message:deliveryFailure});
  await assert.rejects(sendEnquiry(lead,key,{fetchImpl:async()=>{throw new Error('offline');}}),{message:deliveryFailure});
});

test('does not make a request without a configured access key', async () => {
  let called=false;
  await assert.rejects(sendEnquiry(lead,' ',{fetchImpl:async()=>{called=true;}}),{message:deliveryFailure});
  assert.equal(called,false);
});

test('aborts a slow request and reports that delivery is unconfirmed', async () => {
  await assert.rejects(sendEnquiry(lead,key,{timeoutMs:5,fetchImpl:async (url,{signal})=>new Promise((resolve,reject)=>{
    signal.addEventListener('abort',()=>reject(new Error('aborted')),{once:true});
  })}),{message:deliveryUnconfirmed});
});

test('keeps the configured key and safe subject when input includes reserved fields', async () => {
  let sent;
  await sendEnquiry({...lead,access_key:'untrusted',service:'Bookkeeping\r\nBcc: elsewhere'},key,{fetchImpl:async(url,options)=>{
    sent=JSON.parse(options.body);
    return new Response(JSON.stringify({success:true}),{status:200});
  }});
  assert.equal(sent.access_key,key);
  assert.ok(!/[\r\n]/.test(sent.subject));
});
