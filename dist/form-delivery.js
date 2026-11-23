export const deliveryFailure = 'Your enquiry was not sent. Please try again, email support@assistlaneglobal.com or call +91 7011956780.';
export const deliveryUnconfirmed = 'We could not confirm whether your enquiry was sent. Please email support@assistlaneglobal.com or call +91 7011956780.';

export async function sendEnquiry(lead, accessKey, { fetchImpl = globalThis.fetch, timeoutMs = 25000 } = {}) {
  if (!accessKey?.trim()) throw new Error(deliveryFailure);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  const service = String(lead.service || 'Website enquiry').replace(/[\r\n]/g, ' ').slice(0, 100);
  try {
    const response = await fetchImpl('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...lead, access_key: accessKey.trim(), from_name: 'AssistLane Global website', subject: `AssistLane Global enquiry: ${service}`, botcheck: false }),
      signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || !result || typeof result !== 'object' || Array.isArray(result) || result.success !== true) throw new Error(deliveryFailure);
    return { success: true };
  } catch {
    throw new Error(controller.signal.aborted ? deliveryUnconfirmed : deliveryFailure);
  } finally {
    clearTimeout(timeout);
  }
}
