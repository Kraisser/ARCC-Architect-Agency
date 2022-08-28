import $ from 'jquery';
import debounce from './debounce';

export default function burger(burgerBut, burgerWrapper) {
	const toggleMenu = () => {
		if (window.innerWidth > 700) {
			return;
		}

		if (burgerBut.hasClass('burger-open')) {
			burgerClose();
		} else {
			burgerOpen();
		}
	};

	const burgerOpen = () => {
		burgerBut.addClass('burger-open');
		burgerBut.removeClass('burger-close');
		burgerWrapper.removeClass('hidden');
	};

	const burgerClose = () => {
		burgerBut.addClass('burger-close');
		burgerBut.removeClass('burger-open');
		burgerWrapper.addClass('hidden');
	};

	burgerBut.on('click', toggleMenu);
	$(window).on('resize', debounce(burgerClose, 500));
}
