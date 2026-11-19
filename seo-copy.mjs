export function applyPageSEO(body, settings) {
 let result = body;
 if (settings.h1) result = result.replace(/<h1>.*?<\/h1>/s, `<h1>${settings.h1}</h1>`);
 if (settings.reference) {
  result = result.replace(/\b(the|The|your|Your|an|An) assistant\b/g, (match, article) => {
   const needsAn = /^[aeiou]/i.test(settings.reference);
   const prefix = article.toLowerCase() === 'an' ? (needsAn ? 'an' : 'a') : article;
   return `${article === 'An' ? prefix[0].toUpperCase() + prefix.slice(1) : prefix} ${settings.reference}`;
  });
 }
 let sectionIndex = 0;
 result = result.replace(/<div class="section-intro"><h2>(.*?)<\/h2>(?:<p class="lead">(.*?)<\/p>)?<\/div>/gs, (match, title, originalCopy) => {
  const heading = title === 'Frequently Asked Questions'
    ? title
    : settings.headings.find(([index]) => index === sectionIndex)?.[1] || title;
  const copy = settings.sectionCopy[sectionIndex];
  sectionIndex += 1;
  // Keep the scenario details in worked examples alongside the revised introduction.
  const scenario = originalCopy && /fictional|two-week pilot|In this example|sample record/i.test(originalCopy) ? ` ${originalCopy}` : '';
  return `<div class="section-intro"><h2>${heading}</h2><p class="lead">${copy}${scenario}</p></div>`;
 });
 if (sectionIndex !== settings.sectionCopy.length) throw new Error(`Section copy count does not match for ${settings.page}`);
 for (const [before, after] of settings.textEdits || []) {
  if (!result.includes(before)) throw new Error(`Missing copy to update for ${settings.page}: ${before}`);
  result = result.replaceAll(before, after);
 }
 return result;
}
