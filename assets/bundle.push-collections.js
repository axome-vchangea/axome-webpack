(()=>{"use strict";var e={4:(e,i,s)=>{s.d(i,{Z:()=>t});const t=class extends HTMLElement{constructor(){super(),this.slider=this.querySelector('[id^="Swiper-"]'),this.slides=this.querySelectorAll(".swiper-slide"),this.sliderLength=this.slides.length,this.prevButtonEl=this.querySelector(".swiper-button-prev"),this.nextButtonEl=this.querySelector(".swiper-button-next"),this.paginationEl=this.querySelector(".swiper-pagination"),this.config=JSON.parse(this.slider.dataset.options),this.swiperInstance=null,this.init()}init(){this.swiperInstance=new window.Swiper(this.slider,{loop:this.config.loop,effect:this.config.effect,grabCursor:this.config.grabCursor,speed:this.config.speed,pagination:{el:this.paginationEl},breakpoints:{0:{slidesPerView:1.5,slidesPerGroup:1,navigation:!1},768:{slidesPerView:2,navigation:!1},1200:{slidesPerView:this.config.slideInView,slidesPerGroup:this.config.slidesToMove,navigation:{prevEl:this.prevButtonEl,nextEl:this.nextButtonEl}},2e3:{slidesPerView:4===this.config.slideInView||3===this.config.slideInView?this.sliderLength>=5?this.config.slideInView+1:this.sliderLength:this.config.slideInView,slidesPerGroup:this.config.slidesToMove,navigation:{prevEl:this.prevButtonEl,nextEl:this.nextButtonEl}}}})}}}},i={};function s(t){var n=i[t];if(void 0!==n)return n.exports;var o=i[t]={exports:{}};return e[t](o,o.exports,s),o.exports}s.d=(e,i)=>{for(var t in i)s.o(i,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},s.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e=s(4);class i extends e.Z{constructor(){super()}init(){this.swiperInstance=new window.Swiper(this.slider,{loop:this.config.loop,slidesPerView:this.config.slideInView,slidesPerGroup:this.config.slidesToMove,autoplay:this.config.autoplay,speed:this.config.speed,effect:this.config.effect,spaceBetween:20,freeMode:this.config.freemode_mobile,init:!this.config.stackMobile,navigation:{prevEl:this.prevButtonEl,nextEl:this.nextButtonEl},breakpoints:{0:{slidesPerView:1.2,slidesPerGroup:1,navigation:!1},768:{slidesPerView:2.5,navigation:!1},1200:{grabCursor:this.config.grabCursor,freeMode:!1,spaceBetween:50,slidesPerView:this.config.slideInView,slidesPerGroup:this.config.slidesToMove,navigation:{prevEl:this.prevButtonEl,nextEl:this.nextButtonEl}},2e3:{grabCursor:this.config.grabCursor,freeMode:!1,spaceBetween:50,slidesPerView:4===this.config.slideInView||3===this.config.slideInView?this.sliderLength>=5?this.config.slideInView+1:this.sliderLength:this.config.slideInView,slidesPerGroup:this.config.slidesToMove,navigation:{prevEl:this.prevButtonEl,nextEl:this.nextButtonEl}}}}),this.config.stackMobile&&window.innerWidth>768&&this.swiperInstance.init()}}customElements.get("push-collections")||customElements.define("push-collections",i)})()})();