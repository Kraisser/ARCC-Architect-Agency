import 'normalize.css';

import '../scss/common.scss';
import '../scss/header-sass.scss';
import '../scss/main.scss';

import $ from 'jquery';
import slick from 'slick-carousel';

import acordeon from './modules/accordeon';
import videoPlayer from './modules/videoPlayer';

const accordeonList = document.querySelectorAll('.dropListHeaderWrapper');
acordeon(accordeonList, '.svgAccordeon');

const videoSrc = document.querySelector('#aboutArcPlayer');
const playBut = document.querySelector('.aboutArcVideo .playerPlayBut');
videoPlayer(videoSrc, playBut);

$('#textSliderWrapper').slick({
	dots: true,
	infinite: true,
	adaptiveHeight: true,
	arrows: false,
	cssEase: 'ease',
	dotsClass: 'textSliderDots',
});
