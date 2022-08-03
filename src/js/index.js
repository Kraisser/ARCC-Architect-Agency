import 'normalize.css';

import '../css/common.css';
import '../css/variables.css';
import '../css/header.css';
import '../css/main.css';

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
