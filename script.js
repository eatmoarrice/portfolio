// window.addEventListener('scroll', function (e) {
// 	let scrolled = window.pageYOffset;
// 	let background = document.querySelector('.img-cover');
// 	let coords = '0% ' + (-(scrolled * 0.3) + 'px');
// 	background.style.backgroundPosition = coords;
// });

$(function () {
	$(document).scroll(function () {
		let $nav = $('.navbar');
		let $page = $('.page-1');
		$nav.toggleClass('scrolled', $(this).scrollTop() > $page.height() - 150);
	});
});

$('a').click(function () {
	var pageId = $(this).attr('data-page');
	$('html, body').animate({ scrollTop: $('#' + pageId).offset().top }, 750);
});

AOS.init();

// Random Stars
var generateStars = function () {
	var $galaxy = $('.galaxy');
	var iterator = 0;

	while (iterator <= 100) {
		var xposition = Math.random();
		var yposition = Math.random();
		var star_type = Math.floor(Math.random() * 3 + 1);
		var position = {
			x: $galaxy.width() * xposition,
			y: $galaxy.height() * yposition,
		};

		$('<div class="star star-type' + star_type + '"></div>')
			.appendTo($galaxy)
			.css({
				top: position.y,
				left: position.x,
			});

		iterator++;
	}
};

generateStars();
