export default function acordeon(acordeonList, svgClass) {
	const openAccordeon = (item) => {
		const textTarget = item.nextElementSibling;
		const image = item.querySelector(`${svgClass} .svgAccordeonLine:first-of-type`);

		image.classList.add('svgAccordeonLine-active');
		textTarget.style.maxHeight = textTarget.scrollHeight + 'px';
	};

	const closeAccordeon = (item) => {
		const textTarget = item.nextElementSibling;
		const image = item.querySelector(`${svgClass} .svgAccordeonLine:first-of-type`);

		image.classList.remove('svgAccordeonLine-active');
		textTarget.style.maxHeight = null;
	};

	acordeonList.forEach((item) => {
		item.addEventListener('click', () => {
			if (item.nextElementSibling.style.maxHeight) {
				closeAccordeon(item);
			} else {
				acordeonList.forEach((item) => closeAccordeon(item));
				openAccordeon(item);
			}
		});
	});

	openAccordeon(acordeonList[0]);
}
