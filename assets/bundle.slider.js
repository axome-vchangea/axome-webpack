(()=>{"use strict";var e={4:(e,i,t)=>{t.d(i,{Z:()=>s});const s=class extends HTMLElement{constructor(){super(),this.slider=this.querySelector('[id^="Swiper-"]'),this.slides=this.querySelectorAll(".swiper-slide"),this.sliderLength=this.slides.length,this.prevButtonEl=this.querySelector(".swiper-button-prev"),this.nextButtonEl=this.querySelector(".swiper-button-next"),this.paginationEl=this.querySelector(".swiper-pagination"),this.config=JSON.parse(this.slider.dataset.options),this.swiperInstance=null,this.init()}init(){this.swiperInstance=new window.Swiper(this.slider,{loop:this.config.loop,effect:this.config.effect,grabCursor:this.config.grabCursor,speed:this.config.speed,pagination:{el:this.paginationEl},breakpoints:{0:{slidesPerView:1.5,slidesPerGroup:1,navigation:!1},768:{slidesPerView:2,navigation:!1},1200:{slidesPerView:this.config.slideInView,slidesPerGroup:this.config.slidesToMove,navigation:{prevEl:this.prevButtonEl,nextEl:this.nextButtonEl}},2e3:{slidesPerView:4===this.config.slideInView||3===this.config.slideInView?this.sliderLength>=5?this.config.slideInView+1:this.sliderLength:this.config.slideInView,slidesPerGroup:this.config.slidesToMove,navigation:{prevEl:this.prevButtonEl,nextEl:this.nextButtonEl}}}})}}}},i={};function t(s){var n=i[s];if(void 0!==n)return n.exports;var o=i[s]={exports:{}};return e[s](o,o.exports,t),o.exports}t.d=(e,i)=>{for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},t.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e=t(4);class i extends e.Z{constructor(){super()}init(){let e=this.config.random_slide&&this.config.loop?Math.floor(Math.random()*this.config.slider_length):0;this.swiperInstance=new window.Swiper(this.slider,{loop:this.config.loop,slidesPerView:this.config.slideInView,slidesPerGroup:this.config.slidesToMove,autoplay:this.config.autoplay,speed:this.config.speed,effect:this.config.effect,freeMode:this.config.freemode_mobile,initialSlide:e,pagination:{el:this.paginationEl},navigation:{prevEl:this.prevButtonEl,nextEl:this.nextButtonEl},breakpoints:{1200:{grabCursor:this.config.grabCursor,freeMode:!1}}}),this.swiperInstance.el.addEventListener("mouseenter",(()=>{let e=JSON.parse(decodeURIComponent(escape(window.atob(this.swiperInstance.el.dataset.otherSlides))));this.swiperInstance.appendSlide(e),this.swiperInstance.el.removeAttribute("data-other-slides")}),{once:!0})}}customElements.get("swiper-slider")||customElements.define("swiper-slider",i)})()})();