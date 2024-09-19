import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper = new Swiper('.card-rainbow-slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 53,
	modules: [Navigation, Pagination],

	navigation: {
		nextEl: '.rainbow-next',
		prevEl: '.rainbow-prev',
	},
	pagination: {
		el: '.rainbow-pagination',
		type: 'bullets',
		clickable: true,
	},
})

const swiper2 = new Swiper('.master-classes-slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 2,
	spaceBetween: 153,
	modules: [Navigation, Pagination],

	navigation: {
		nextEl: '.rainbow-next',
		prevEl: '.rainbow-prev',
	},
	pagination: {
		el: '.rainbow-pagination',
		type: 'bullets',
		clickable: true,
	},
})

const swiper3 = new Swiper('.sale-slider', {
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 20,
	modules: [Navigation, Pagination],

	navigation: {
		nextEl: '.rainbow-next',
		prevEl: '.rainbow-prev',
	},
	pagination: {
		el: '.rainbow-pagination',
		type: 'bullets',
		clickable: true,
	},
})
