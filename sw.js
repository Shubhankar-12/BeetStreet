if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>s(e,o),c={module:{uri:o},exports:t,require:l};i[o]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-62436337.css",revision:null},{url:"assets/index-dc25be3a.js",revision:null},{url:"google0959062411918485.html",revision:"3b7116674b81515dd1bda0bc1617e42e"},{url:"index.html",revision:"2047fa013aff4210b0c7a6778efe15a2"},{url:"registerSW.js",revision:"2c36a82892abd1c3b4a96c1782b180db"},{url:"images/logo-192.png",revision:"48ce755f800f7812dd635c8491d91023"},{url:"images/logo-512.png",revision:"fff4b33d55698c911481722c1efc997d"},{url:"images/maskable_icon.png",revision:"527f31689a30703fbb168ae307029788"},{url:"manifest.webmanifest",revision:"34182f5d5c53bfb008cc62348b63bc24"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
