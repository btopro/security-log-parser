if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const c=e=>i(e,r),d={module:{uri:r},exports:s,require:c};t[r]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(o(...e),s)))}}define(["./workbox-919adfb7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"9d72b26b.js",revision:"4011dee1c5f35fe97244898b283eeacd"},{url:"index.html",revision:"34c259c502c8f0fd6505d4cd4a45446f"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
