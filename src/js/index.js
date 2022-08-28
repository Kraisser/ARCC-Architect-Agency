import 'normalize.css';

import '../scss/common.scss';
import '../scss/header.scss';
import '../scss/main.scss';

import $ from 'jquery';
import slick from 'slick-carousel';

import acordeon from './modules/accordeon';
import videoPlayer from './modules/videoPlayer';
import gallery from './modules/gallery';
import smoothScroll from './modules/smooth-scroll';
import burger from './modules/burger-menu';

const accordeonList = document.querySelectorAll('.dropListHeaderWrapper');
acordeon(accordeonList, '.svgAccordeon');

const videoSrc = document.querySelector('#aboutArcPlayer');
const playBut = document.querySelector('.aboutArcVideo .playerPlayBut');
videoPlayer(videoSrc, playBut);

const textSlider = $('#textSliderWrapper');
const textSliderWrapper = $('.textSliderSection .contentSize');

textSlider.slick({
	dots: true,
	adaptiveHeight: true,
	arrows: false,
	cssEase: 'ease',
	dotsClass: 'textSliderDots',
	responsive: [
		{
			breakpoint: 800,
			settings: {
				appendDots: textSliderWrapper,
			},
		},
	],
});

const galleryBut = document.querySelector('.ourWorksGalleryButton button');
const galleryWrapper = document.querySelector('.ourWorksGalleryWrapper');
gallery(galleryWrapper, galleryBut);

const smoothLinks = document.querySelectorAll('.menuItem a');
smoothScroll(smoothLinks);

const headerSlider = $('.slidesWrapper').slick({
	cssEase: 'ease',
	lazyLoad: 'progressive',
	prevArrow: $('.slidePrev'),
	nextArrow: $('.slideNext'),
	adaptiveHeight: true,
});

const headerLogo = $('.logoWrapper');

headerSlider.on('beforeChange', (e, slick, curSlide, nextSlide) => {
	if (nextSlide === 0) {
		headerLogo.addClass('logoWrapper-black');
		$('.slideNext').detach().removeClass('inline').appendTo($('header'));
		$('.slidePrev').detach().removeClass('inline').appendTo($('header'));
	} else {
		$('.slidePrev')
			.detach()
			.addClass('inline')
			.appendTo($(`#slideItem${nextSlide + 1} .slideButWrapper`));
		$('.slideNext')
			.detach()
			.addClass('inline')
			.appendTo($(`#slideItem${nextSlide + 1} .slideButWrapper`));
		headerLogo.removeClass('logoWrapper-black');
	}
});

const burgerBut = $('.menuIconWrapper .burgerIcon');
const burgerWrapper = $('.burgerList');

burger(burgerBut, burgerWrapper);
