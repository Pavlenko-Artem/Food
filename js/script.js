import tabs from './modules/tabs';
import modals from './modules/modals';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import sliders from './modules/sliders';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {

	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	modals('[data-modal]', '.modal', modalTimerId);
	cards();
	calc();
	forms('form', modalTimerId);
	sliders({
		prevArrow: '.offer__slider-prev',
		nextArrow: '.offer__slider-next',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner',
		totalCounter: '#total',
		currentCounter: '#current',
		slide: '.offer__slide',
		container: '.offer__slider'
	});
	timer('.timer', '2022-04-16');

});