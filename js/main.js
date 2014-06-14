$(document).ready(function() {
	initUTL();
	hideNav();
});

$(window).resize(function() {
	resizeUTL();
});

function initUTL() {
	$.localScroll();
	resizeUTL();
}

function resizeUTL() {
	$('.fitvids').fitVids();
}


function hideNav() {

	if ($(window).width() >= 768) {
		var lastScrollTop = 0;
		$(window).scroll(function(event){
			var st = $(this).scrollTop();

			if (st > lastScrollTop && st > 60){
				$('.navbar').addClass('navbar-hide');
			} else {
				$('.navbar').removeClass('navbar-hide');
			}

			lastScrollTop = st;
		});

		$('.navbar').hover(function() {
			$(this).removeClass('navbar-hide');
		});
	}
	
}