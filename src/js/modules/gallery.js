import image1 from '../../assets/images/waranont-joe-qZkMKG3JcRM-unsplash.jpg';
import image2 from '../../assets/images/bernardo-lorena-ponte-F_kWH1L1pc8-unsplash.jpg';
import image3 from '../../assets/images/grant-ritchie-_-gToenDbXg-unsplash.jpg';
import image4 from '../../assets/images/kenrick-baksh-36gdME6KUn0-unsplash.jpg';
import image5 from '../../assets/images/scott-webb-qGAQ5b8dt88-unsplash.jpg';

export default function gallery(wrapper, loadBut) {
	let currIndex = 0;
	const maxLoad = 5;

	const galleryItems = {
		item_1: {
			img: image1,
			header: 'Elevated Building heights',
		},
		item_2: {
			img: image2,
			header: 'Elevated Building heights',
		},
		item_3: {
			img: image3,
			header: 'Elevated Building heights',
		},
		item_4: {
			img: image4,
			header: 'Elevated Building heights',
		},
		item_5: {
			img: image5,
			header: 'Elevated Building heights',
		},
		item_6: {
			img: image1,
			header: 'Elevated Building heights',
		},
		item_7: {
			img: image2,
			header: 'Elevated Building heights',
		},
		item_8: {
			img: image3,
			header: 'Elevated Building heights',
		},
		item_9: {
			img: image4,
			header: 'Elevated Building heights',
		},
		item_10: {
			img: image5,
			header: 'Elevated Building heights',
		},
	};

	const loadNewItems = () => {
		const itemsArr = Object.getOwnPropertyNames(galleryItems);

		itemsArr.forEach((key, index) => {
			if (index >= currIndex && index <= currIndex + maxLoad - 1) {
				console.log(key, currIndex + maxLoad);
				wrapper.insertAdjacentHTML(
					'beforeend',
					`<div class="ourWorksGalleryItem ourWorksGalleryItem-appear">
						<div class="ourWorksGalleryHover">
							<div class="ourWorksGalleryHoverContainer">
								<h4>${galleryItems[key].header}</h4>
								<button>View Details</button>
							</div>
						</div>
						<img src=${galleryItems[key].img} alt="galleryImage" />
					</div>`
				);
			}
		});

		wrapper.querySelectorAll('.ourWorksGalleryItem-appear').forEach((item) => {
			setTimeout(() => item.classList.remove('ourWorksGalleryItem-appear'), 0.3);
		});

		currIndex += maxLoad;
		if (currIndex >= itemsArr.length) {
			return;
		}
		loadBut.classList.remove('activeLoad');
	};

	loadBut.addEventListener('click', () => {
		loadBut.classList.add('activeLoad');
		setTimeout(() => {
			loadNewItems();
		}, 1000);
	});
}
