window.addEventListener('scroll', function (e) {
	let scrolled = window.pageYOffset;
	let background = document.querySelector('.img-cover');
	let coords = '0% ' + (-(scrolled * 0.3) + 'px');
	background.style.backgroundPosition = coords;
});

$(function () {
	$(document).scroll(function () {
		let $nav = $('.navbar');
		let $page = $('.page-1');
		$nav.toggleClass('scrolled', $(this).scrollTop() > $page.height() - 150);
		console.log($(this).scrollTop());
	});
});
