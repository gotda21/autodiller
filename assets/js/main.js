let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === "development";
const win = document.body;

$(document).ready(function ($) {
	$body = $("body");
});

$(window).on("load", function () {
	updateSizes();
	loadFunc();
	// allDefautAnim();
	burgerMobile();
	toggleSwitchImg();
	scrollNav();
	if (windowWidth > mediaPoint1) {
		popup("14px", ".trigger-sale", ".popup_sale");
		popup("14px", ".trigger-call", ".popup_call");
		popup("14px", ".trigger-price", ".popup_price");
	} else {
		popup("0", ".trigger-sale", ".popup_sale");
		popup("0", ".trigger-call", ".popup_call");
		popup("0", ".trigger-price", ".popup_price");
	}
});

$(window).on("resize", function () {
	resizeFunc();
});

$(window).on("scroll", function () {
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
		document.documentElement.style.setProperty("--vh", vh + "px");
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ("objectFit" in document.documentElement.style === false) {
	document.addEventListener("DOMContentLoaded", function () {
		Array.prototype.forEach.call(
			document.querySelectorAll("img[data-object-fit]"),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle["object-fit"]
						: image.getAttribute("data-object-fit"));

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
	$(success).toggleClass("active");
	setTimeout(function () {
		$(success).removeClass("active");
	}, 3000);
}

function close(closes) {
	$(closes).toggleClass("active");
	setTimeout(function () {
		$(closes).removeClass("active");
	}, 3000);
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ["color: red", "background: transparent"].join(";");
var message =
	"Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0";
console.info("%c%s", styles, message);

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

const btnSubmit = document.querySelectorAll('input[type="submit"]');
Array.from(btnSubmit).map((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();
		close(".close");
	});
});

function popup(style, btn, popups) {
	let trigger = document.querySelectorAll(btn);
	let pop = document.querySelector(popups);
	let remove = pop.querySelectorAll(".remove");
	let title = pop.querySelector("h3");

	trigger.forEach((item) => {
		item.addEventListener("click", () => {
			pop.classList.add("active");
			win.style.overflow = "hidden";
			win.style.paddingRight = style;
			title.innerText = item.dataset.popup;
		});
	});

	remove.forEach((item) => {
		item.addEventListener("click", () => {
			pop.classList.remove("active");
			win.style.overflow = "";
			win.style.paddingRight = "";
		});
	});
}

$(document).ready(function () {
	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		mask: "+7 (999) 999-99-99",
		showMaskOnHover: false,
	}).mask(inputsTel);
});

// https://twitter.com/uixmat

function scrollNav() {
	$(".smooth_scroll").click(function () {
		$(".active").removeClass("active");
		$(this).addClass("active");

		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $($(this).attr("href")).offset().top - 160,
				},
				600
			);
		return false;
	});
}

$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if (scrolled > 50) {
		$(".header").addClass("fixed");
	}
	if (scrolled <= 50) {
		$(".header").removeClass("fixed");
	}
});

function burgerMobile() {
	const burger = document.querySelector(".popup_burger");
	const burgerTrigger = document.querySelector(".header_burger");
	const header = document.querySelector(".header");

	burgerTrigger.addEventListener("click", () => {
		burgerTrigger.classList.toggle("active");
		burger.classList.toggle("active");
		header.classList.toggle("active");
	});
}

// document.addEventListener('DOMContentLoaded', () => {
// 	// Установите конечную дату
// 	const deadline = new Date('2025-12-31T23:59:59');
	
// 	// Найдите элементы DOM
// 	const elDays = document.querySelector('.timer__days');
// 	const elHours = document.querySelector('.timer__hours');
// 	const elMinutes = document.querySelector('.timer__minutes');
// 	const elSeconds = document.querySelector('.timer__seconds');
	
// 	// Функция склонения числительных
// 	const declensionNum = (num, words) => {
// 	  return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
// 	};
  
// 	// Функция обновления таймера
// 	const updateTimer = () => {
// 	  const now = new Date();
// 	  const diff = Math.max(0, deadline - now);
  
// 	  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
// 	  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
// 	  const minutes = Math.floor((diff / (1000 * 60)) % 60);
// 	  const seconds = Math.floor((diff / 1000) % 60);
  
	//   elDays.textContent = String(days).padStart(2, '0');
	//   elHours.textContent = String(hours).padStart(2, '0');
	//   elMinutes.textContent = String(minutes).padStart(2, '0');
	//   elSeconds.textContent = String(seconds).padStart(2, '0');
  
	//   elDays.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
	//   elHours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
	//   elMinutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
	//   elSeconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  
// 	  if (diff === 0) {
// 		clearInterval(timerId);
// 	  }
// 	};
  
// 	// Запустите таймер
// 	updateTimer();
// 	const timerId = setInterval(updateTimer, 1000);
//   });

function getLabel(unit) {
    return unit === 'days' ? 'дней' : 
           unit === 'hours' ? 'часов' : 
           unit === 'minutes' ? 'минут' : 
           'секунд';
}

  function startTimer(duration) {
    const endTime = Date.now() + duration * 1000;

    function updateTimer() {
        const now = Date.now();
        const remaining = Math.max(0, (endTime - now) / 1000);

        const days = Math.floor(remaining / 86400);
        const hours = Math.floor((remaining % 86400) / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = Math.floor(remaining % 60);

        document.querySelector(".timer__days").textContent = String(days).padStart(2, "0");
        document.querySelector(".timer__hours").textContent = String(hours).padStart(2, "0");
        document.querySelector(".timer__minutes").textContent = String(minutes).padStart(2, "0");
        document.querySelector(".timer__seconds").textContent = String(seconds).padStart(2, "0");

        updateCircle(".timer__progress[data-unit='days']", days, 30);
        updateCircle(".timer__progress[data-unit='hours']", hours, 24);
        updateCircle(".timer__progress[data-unit='minutes']", minutes, 60);
        updateCircle(".timer__progress[data-unit='seconds']", seconds, 60);

        if (remaining > 0) {
            requestAnimationFrame(updateTimer);
        }
    }

    function updateCircle(selector, value, max) {
        const circle = document.querySelector(selector);
        if (circle) {
            const circumference = 2 * Math.PI * 45;
            const offset = circumference - (value / max) * circumference;
            circle.style.strokeDashoffset = offset;
        }
    }

    updateTimer();
}

startTimer(3 * 24 * 60 * 60 + 6 * 60 * 60 + 14 * 60 + 55);


const toggleSwitchImg = () => {
	const imageWrapper = document.querySelector('.tank300Img'); // Select the actual image inside the wrapper
	const imageSwitchBtns = document.querySelectorAll('.change_color__item button');

	imageSwitchBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			// Remove 'active' class from all buttons
			imageSwitchBtns.forEach(button => button.classList.remove('active'));

			// Add 'active' class to the clicked button
			e.target.classList.add('active');


			// Change the image source
			if (imageWrapper) {
				imageWrapper.src = e.target.dataset.src;
			}
		});
	});
};

