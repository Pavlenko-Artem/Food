function sliders({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {

	const slides = document.querySelectorAll(slide),
		slider = document.querySelector(container),
		prev = document.querySelector(prevArrow),
		next = document.querySelector(nextArrow),
		total = document.querySelector(totalCounter),
		current = document.querySelector(currentCounter),
		slidesWrapper = document.querySelector(wrapper),
		slidesField = document.querySelector(field),
		width = window.getComputedStyle(slidesWrapper).width;

	let slideIndex = 1,
		offset = 0;

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';

	slides.forEach(slide => {
		slide.style.width = width
	})

	slider.style.position = 'relative';

	const indicators = document.createElement('ol'),
		dots = [];
	indicators.classList.add('carousel-indicators');
	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.classList.add('dot');
		dot.setAttribute('data-slide-to', i + 1);
		if (i == 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);
	}

	function deleteNotDigits(str) {
		return +str.replace(/\D/g, '')
	}

	next.addEventListener('click', (e) => {
		e.preventDefault();
		if (offset == deleteNotDigits(width) * (slides.length - 1)) {
			offset = 0;
			slideIndex -= slides.length - 1;
		} else {
			offset += deleteNotDigits(width);
			slideIndex += 1;
		}

		dotIndex();

		slidesField.style.transform = `translateX(-${offset}px)`;
		showIndex(slideIndex);
	});

	prev.addEventListener('click', (e) => {
		e.preventDefault();
		if (offset == 0) {
			offset = deleteNotDigits(width) * (slides.length - 1);
			slideIndex = slides.length
		} else {
			offset -= deleteNotDigits(width);
			slideIndex -= 1;
		}

		dotIndex();

		slidesField.style.transform = `translateX(-${offset}px)`;
		showIndex(slideIndex);
	});

	function showIndex(n) {
		if (n < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = `${slideIndex}`;
		}
	}

	function dotIndex() {
		dots.forEach(item => item.style.opacity = '0.5');
		dots[slideIndex - 1].style.opacity = '1'
	}

	dots.forEach((item, i) => {
		item.addEventListener('click', (e) => {
			// const slideTo = e.target.getAttribute('data-slide-to');

			// slideIndex = slideTo;
			// offset = deleteNotDigits(width) * (slideTo - 1);
			// slidesField.style.transform = `translateX(-${offset}px)`;
			// showIndex(slideIndex);
			// dotIndex();


			offset = deleteNotDigits(width) * i;
			slidesField.style.transform = `translateX(-${offset}px)`;
			slideIndex = i + 1;
			showIndex(slideIndex);
			dotIndex();
		});
	});
}

export default sliders;