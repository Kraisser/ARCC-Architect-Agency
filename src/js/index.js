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

const accordeonList = document.querySelectorAll('.dropListHeaderWrapper');
acordeon(accordeonList, '.svgAccordeon');

const videoSrc = document.querySelector('#aboutArcPlayer');
const playBut = document.querySelector('.aboutArcVideo .playerPlayBut');
videoPlayer(videoSrc, playBut);

$('#textSliderWrapper').slick({
	dots: true,
	adaptiveHeight: true,
	arrows: false,
	cssEase: 'ease',
	dotsClass: 'textSliderDots',
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
});

const headerLogo = $('.logoWrapper');

headerSlider.on('beforeChange', (e, slick, curSlide, nextSlide) => {
	console.log('slick: ', slick);
	console.log('curSlide: ', curSlide);
	console.log('nextSlide: ', nextSlide);

	if (nextSlide === 0) {
		console.log('homePage');
		headerLogo.addClass('logoWrapper-black');
		$('.slideNext').detach().removeClass('inline').appendTo($('header'));
		$('.slidePrev').detach().removeClass('inline').appendTo($('header'));
	} else {
		console.log('inline');
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
