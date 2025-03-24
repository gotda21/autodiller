


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
	
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	// allDefautAnim();
	// burgerMobile();
	scrollNav();
	if(windowWidth > mediaPoint1) {
		popup('14px', '.trigger-sale', '.popup_sale');
		popup('14px', '.trigger-call', '.popup_call');
		popup('14px', '.trigger-price', '.popup_price');
	} else {
		popup('0', '.trigger-sale', '.popup_sale');
		popup('0', '.trigger-call', '.popup_call');
		popup('0', '.trigger-price', '.popup_price');
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
		setTimeout(function() {
			$(closes).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: transparent'].join(';');
var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';
console.info('%c%s', styles, message);

// const reviewsSlider = new Swiper('.reviews_slider ', {
// 	// centeredSlides: true,
// 	// centeredSlidesBounds: true,
// 	allowTouchMove: true,
// 	loop: true,
// 	grabCursor: true,
// 	a11y: true,
// 	keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
// 	breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 50,
// 			freeMode: false,
//     },
//     480: {
//       slidesPerView: 1,
//       spaceBetween: 50,
// 			freeMode: false,
//     },
//     640: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     }
// 	}
// });




const btnSubmit = document.querySelectorAll('input[type="submit"]')
Array.from(btnSubmit).map((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		close('.close')
	})
})




function popup(style, btn, popups) {

	let trigger = document.querySelectorAll(btn);
	let pop = document.querySelector(popups)
	let remove = pop.querySelectorAll('.remove')

	trigger.forEach(item => {
		item.addEventListener('click', () => {
			pop.classList.add('active')
			win.style.overflow = "hidden";
			win.style.paddingRight = style; 
		})
	});

	remove.forEach(item => {
		item.addEventListener('click', () => {
			pop.classList.remove('active')
			win.style.overflow = "";
			win.style.paddingRight = ""; 
		})
	});
}


$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})

// https://twitter.com/uixmat

function scrollNav() {
  $('.smooth_scroll').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 160
    }, 600);
    return false;
  });
}

$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if( scrolled > 50 ) {
			$('.header').addClass('fixed');
	}   
	if( scrolled <= 50 ) {     
			$('.header').removeClass('fixed');
	}
});




function burgerMobile() {
	const burger = document.querySelector('.header_nav')
	const burgerTrigger = document.querySelector('.header_burger')
	const header = document.querySelector('.header')
	const burgerRemove = document.querySelectorAll('header_nav_list li')

	burgerRemove.forEach(item => {
		item.addEventListener('click', function() {
			burgerTrigger.classList.remove('active')
			burger.classList.remove('active')
			header.classList.remove('active')
		})
	});

	burgerTrigger.addEventListener('click', () => {
		burgerTrigger.classList.toggle('active')
		burger.classList.toggle('active')
		header.classList.toggle('active')
	})

}











































