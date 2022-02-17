let sliderContent = document.getElementsByClassName('picture');
let textContent = document.getElementsByClassName('word')
let counter = -1;

let numberOfSlide = sliderContent.length;

function hideContent() {
	for(let i = 0; i < numberOfSlide ; i++) {
		textContent[i].classList.remove('visible');
		sliderContent[i].classList.remove('opacity');
	}
};

setInterval(function () {
	counter++;
	if(counter >= numberOfSlide) {
		counter = 0;
	}
	hideContent();
	textContent[counter].classList.add('visible');
	sliderContent[counter].classList.add('opacity');
}, 4000)

