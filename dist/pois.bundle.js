(()=>{"use strict";var e,t={312:(e,t,r)=>{var n=r(737),o=r.n(n);window.onload=()=>{a()};const a=()=>{let e=document.querySelector("#output");e.innerHTML="";let t=localStorage.getItem("savedPois")?JSON.parse(localStorage.getItem("savedPois")):[];t.map((t=>{i(t,e)})),0===t.length&&(e.innerHTML='\n        <article class="message is-info">\n            <div class="message-body">\n                Aucune point d\'intérêt à afficher.\n            </div>\n        </article>\n        ')},i=(e,t)=>{let r=document.createElement("div");r.innerHTML=`\n    <div class="card mt-4 poi-item" data-poi-id="${e.properties.id}">\n        <header class="card-header has-background-dark">\n            <p class="card-header-title has-text-white">${e.name}</p>\n        </header>\n        <div class="card-content">\n            <div class="content">\n                <div class="mt-3 mb-3">\n                    <p>${e.description}</p>\n                </div>\n                <h6 class="title">Adresse</h6>\n                <ul>\n                    <li>City : ${e.properties.city}</li>\n                    <li>PostCode : ${e.properties.postcode}</li>\n                    <li>Context : ${e.properties.context}</li>\n                </ul>\n            </div>\n        </div>\n        <footer class="card-footer ">\n            <a class="card-footer-item has-background-danger has-text-white" id="removeButton">Delete</a>\n        </footer>\n    </div>\n    `,r.querySelector("#removeButton").addEventListener("click",(t=>{let r=localStorage.getItem("savedPois")?JSON.parse(localStorage.getItem("savedPois")):[];r=r.filter((t=>t.id!==e.id)),localStorage.setItem("savedPois",JSON.stringify(r)),o()({title:"Good job!",text:"Point d'intérêt supprimé",icon:"success"}),a()})),t.appendChild(r)}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={947:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,s,l]=r,d=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(t&&t(r);d<i.length;d++)a=i[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self.webpackChunkcours_js_avance_td2=self.webpackChunkcours_js_avance_td2||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[737],(()=>n(312)));o=n.O(o)})();