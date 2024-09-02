import Swiper from 'swiper'
import 'swiper/css'

const swiper = new Swiper('.card-rainbow-slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 53,

	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
})
console.log(swiper)
