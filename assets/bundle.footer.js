(()=>{"use strict";var t={24:(t,e,o)=>{o.d(e,{Z:()=>s});const s=class{constructor(t,e,o){this.parent=t,this.title=e,this.content=o,this.accordions=document.querySelectorAll(this.parent),this.init()}closeOtherAccordions(){this.accordions.forEach((t=>{let e=t.querySelector(this.title),o=t.querySelector(this.content);o.classList.contains("active")&&o.classList.remove("active"),e.classList.contains("active")&&e.classList.remove("active")}))}init(){this.accordions.forEach((t=>{let e=t.querySelector(this.title),o=t.querySelector(this.content);e.addEventListener("click",(()=>{!o.classList.contains("active")&&this.closeOtherAccordions(),o.classList.toggle("active"),e.classList.toggle("active")}))}))}}}},e={};function o(s){var c=e[s];if(void 0!==c)return c.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),new(o(24).Z)(".footer-block.footer-block--menu",".footer-block__heading",".footer-block__details-content")})();