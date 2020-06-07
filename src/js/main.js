import $ from './core';
import './modules/display';
import './modules/classes';
import './modules/handlers';
import './modules/actions';
import './modules/effects';
import './components/dropdown';
import './components/tabs';

export default $;


// window.onload = function () {
// 	var menuElem = document.getElementById('dropdown-menu'),
// 		titleElem = menuElem.querySelector('.dashed');
// 	document.onclick = function (event) {
// 		var target = event.target,
// 			elem = target;
// 		while (target != this) {
// 			if (target == menuElem) {
// 				if (elem.tagName == 'A') {
// 					titleElem.innerHTML = elem.textContent;
// 				}
// 				menuElem.classList.toggle('open');
// 				return;
// 			}
// 			target = target.parentNode;
// 		}
// 		menuElem.classList.remove('open');
// 	};
// };