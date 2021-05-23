/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
var body = document.getElementsByTagName('body')
var menuToggle = () => body[0].classList.toggle("is-menu-visible");
(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});
// $('div.modal').on('show.bs.modal', function() {
// 	var modal = this;
// 	var hash = modal.id;
// 	window.location.hash = hash;
// 	window.onhashchange = function() {
// 		if (!location.hash){
// 			$(modal).modal('hide');
// 		}
// 	}

// });

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
			var close = document.getElementsByClassName('close')
			close[0].addEventListener('click', menuToggle, false)
				// .panel({
				// 	delay: 500,
				// 	hideOnClick: true,
				// 	hideOnSwipe: true,
				// 	resetScroll: true,
				// 	resetForms: true,
				// 	side: 'right',
				// 	target: $body,
				// 	visibleClass: 'is-menu-visible'
				// });

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});



})(jQuery);



$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// var modal = document.getElementsByClassName("modal-open");

// Get the button that opens the modal
// var btn = document.getElementById("btn");
//
// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close-modal")[0];
//
// When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
//
// // // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// 	history.replaceState(null, "", window.location.pathname)
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
function ago(date) {
    function render(n, unit) {
        return n + " " + unit + ((n == 1) ? "" : "s") + " ago";
    }

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / (60 * 60 * 24 * 365));
    if (Math.floor(seconds / (60 * 60 * 24 * 30 * 365)) >= 1) {
        return render(interval, "year");
    }
    interval = Math.floor(seconds / (60 * 60 * 24 * 30));
    if (interval >= 1) {
        return render(interval, "month");
    }
    interval = Math.floor(seconds / (60 * 60 * 24));
    if (interval >= 1) {
        return render(interval, "day");
    }
    interval = Math.floor(seconds / (60 * 60));
    if (interval >= 1) {
        return render(interval, "hour");
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return render(interval, "minute");
    }
    interval = Math.floor(seconds);
    return render(interval, "second");
}

var menu = document.getElementById('nav')


menu.addEventListener('click', menuToggle, false)


var date = Date.parse(document.getElementById("postedon").getAttribute("datetime"));
document.getElementById("postedago").innerHTML = ago(date);

var backbutton = document.getElementsByClassName("back")[0]; 
backbutton.addEventListener("click", ()=>window.history.back());
