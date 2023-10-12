(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c="/assets/javascript-8dac5379.svg",a="/vite.svg";function l(r){let o=0;const s=n=>{o=n,r.innerHTML=`count is ${o}`};r.addEventListener("click",()=>s(o+1)),s(0)}const u=`
<h3 id='super' class="bg-blue-500 text-xl font-black">This is header</h3>
`;function d(r){return`
      <nav class='navbar'>
        <h1>Hello Template</h1>
        <a id="linkee" href="www.google.com">Go To Google</a>
        <h3>${r}</h3>
      </nav>
    `}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${a}" class="logo" alt="Vite logo" />
    </a>
    <a id="js_logo" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${c}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more ${d("Heeeeeeeeeeeeeeeeeeeee!")}
    </p>
  </div>
`;document.querySelector("#app2").innerHTML=u;l(document.querySelector("#counter"));
