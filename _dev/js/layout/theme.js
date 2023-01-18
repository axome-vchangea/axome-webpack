import SectionObserver from "../components/observer";
import AxSwiper from "../components/swiper-element";
import 'swiper/css/bundle';
import "Styles/layout/theme.scss";
import "../components/obfuscations";

import('swiper/bundle').then(() => {
	window.Swiper = require('swiper/bundle').default
	customElements.get('swiper-component') || customElements.define('swiper-component', AxSwiper);
	new SectionObserver('[data-ax-section]', 0);
})

/* Cart product */

let cartProductMiniatures = document.querySelectorAll('.product-miniature .card__content [data-img]');
cartProductMiniatures.forEach(miniature => {
	let imgBlock = miniature.closest('.product-miniature').querySelector('.media img');
	let miniatureUrl = miniature.dataset.img;
	let originalImgUrl = imgBlock.src;

	miniature.addEventListener('mouseenter', () => {
		imgBlock.srcset = miniatureUrl;
	})
	miniature.addEventListener('mouseleave', () => {
		imgBlock.srcset = originalImgUrl;
	})
})

/* ------------ */