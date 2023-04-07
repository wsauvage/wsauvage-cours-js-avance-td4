(()=>{"use strict";var e,t={586:(e,t,r)=>{function n(e){e.classList.add("is-active")}function a(e){e.classList.remove("is-active")}var o=r(737),s=r.n(o),c=r(861);const l={headers:{"Content-Type":"application/json",Accept:"application/json"}},d=class{constructor(){}static async search(e,t){return c.Z.get("https://api-adresse.data.gouv.fr/search",{...l,method:"get",params:{q:e.replace(" ","+")},...t}).then((e=>e.data)).then((e=>e&&e.features)).catch((e=>{console.log(e)})).finally((()=>{}))}};window.onload=()=>{(document.querySelectorAll(".js-modal-trigger")||[]).forEach((e=>{const t=e.dataset.target,r=document.getElementById(t);e.addEventListener("click",(()=>{n(r)}))})),(document.querySelectorAll(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button")||[]).forEach((e=>{const t=e.closest(".modal");e.addEventListener("click",(()=>{a(t)}))})),document.addEventListener("keydown",(e=>{27===(e||window.event).keyCode&&(document.querySelectorAll(".modal")||[]).forEach((e=>{a(e)}))}));let e=document.querySelector("#searchInput"),t=document.querySelector("#searchButton"),r=document.querySelector("#output"),o=document.querySelector("#saveButton");t.addEventListener("click",(async t=>{let n=e.value;r.innerHTML="";let a=await d.search(n);a.map((e=>{i(e,r)})),0===a.length&&(r.innerHTML='\n                <article class="message is-info">\n                    <div class="message-body">\n                        Aucune adresse à afficher.\n                    </div>\n                </article>\n                ')})),o.addEventListener("click",(e=>{const t=document.getElementById("modalSaveAddress");let r=t.querySelector('input[name="name"]'),n=t.querySelector('textarea[name="description"]');const a=r.value,o=n.value;let c={...JSON.parse(localStorage.getItem("selectedAddress")),name:a,description:o},l=localStorage.getItem("savedPois")?JSON.parse(localStorage.getItem("savedPois")):[];0===l.filter((e=>e.label===c.label)).length?(l=[...l,c],localStorage.setItem("savedPois",JSON.stringify(l)),s()({title:"Good job!",text:"Point d'intérêt ajouté",icon:"success"})):s()({title:"Oups !",text:"Le point d'intérêt existe déjà",icon:"error"}),r.value="",n.value=""}))};const i=(e,t)=>{let r=document.createElement("div");r.innerHTML=`\n    <div class="column is-4-on-widescreen">\n        <div class="card">\n            <header class="card-header">\n                <p class="card-header-title">${e.properties.label}</p>\n            </header>\n            <div class="card-content">\n                <div class="content">\n                    <ul>\n                        <li>City : ${e.properties.city}</li>\n                        <li>PostCode : ${e.properties.postcode}</li>\n                        <li>Context : ${e.properties.context}</li>\n                    </ul>\n                </div>\n            </div>\n            <footer class="card-footer">\n                <a class="card-footer-item has-text-white has-background-success" id="saveButton">Ajouter</a>\n            </footer>\n        </div>\n    </div>\n    `;let a=r.querySelector("#saveButton"),o=r.querySelector(".content");a.addEventListener("click",(t=>{const r=document.getElementById("modalSaveAddress");let a=r.querySelector(".modal-card-title"),s=r.querySelector(".address-details");a.innerHTML=e.label,s.innerHTML=o.innerHTML,n(r),localStorage.setItem("selectedAddress",JSON.stringify(e))})),t.appendChild(r)}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var s=1/0;for(i=0;i<e.length;i++){for(var[r,a,o]=e[i],c=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(c=!1,o<s&&(s=o));if(c){e.splice(i--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[s,c,l]=r,d=0;if(s.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(l)var i=l(n)}for(t&&t(r);d<s.length;d++)o=s[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(i)},r=self.webpackChunkcours_js_avance_td2=self.webpackChunkcours_js_avance_td2||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[737,861],(()=>n(586)));a=n.O(a)})();