const prefaceText = document.querySelector("#preface");
const prefacePicture = document.querySelector("#pic-preface");

const bioText = document.querySelector("#pic-bio");
const bioPicture = document.querySelector("#bio");

const projectDescriptionText = document.querySelector("#project");
const projectDescriptionPicture = document.querySelector("#example");

const currentScrollPosition = window.scrollY;
let lastKnowScrollPosition = 0;



// function scrollingEffect(e) {
// 	if (currentScrollPosition > lastKnowScrollPosition) {
// 		prefaceText.classList.add('to-left');
// 		prefacePicture.classList.add('to-right');
// 		lastKnowScrollPosition = currentScrollPosition;
// 	} else {
// 		lastKnowScrollPosition = currentScrollPosition;
// 	}
// };

// function f(e) {
// 	console.log(currentScrollPosition);
// };

// window.addEventListener('scroll', f);