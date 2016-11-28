$(document).ready(function() {

	(function() {
		$('.js-idea-slider').slick({
			dots: true,
			arrows: false
		});
	})();

	(function() {
		var nav = $('.js-menu');

		nav.onePageNav({
			currentClass: 'is-active',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
			begin: function() {
				//I get fired when the animation is starting
			},
			end: function() {
				//I get fired when the animation is ending
			},
			scrollChange: function($currentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});
	})();

	(function() {
		var toggleBtn = $('.js-hamburger'),
			nav = $('.js-nav'),
			scrollBtn = $('.js-scroll-btn');

		toggleBtn.on('click', function() {
			$(this).toggleClass('is-active');
			nav.toggleClass('is-active');
		});

		initNavTransition();

		$(window).resize(function() {
			initNavTransition();
			toggleBtn.removeClass('is-active');
			nav.removeClass('is-active');
		});

		function initNavTransition() {
			if ($(window).width() <= 479) {
				nav.css('transition', 'all 0.5s');
			} else {
				nav.css('transition', 'none');
			}
		}

		scrollBtn.on('click', function() {
			$('html, body').animate({
				scrollTop: $('#install').offset().top
			}, 2000);
			return false;
		});
	})();

	(function() {

		var yt_frame = document.querySelector('iframe'),
			video_placeholder = $('.js-init-video'),
			speed = 400;

		video_placeholder.on('click', function(e) {
			e.preventDefault();
			var _this = $(this);

			_this.siblings('iframe').slideDown(speed, function() {
				play();
			});
			setTimeout(function() {
				_this.fadeOut(speed).siblings('img').fadeOut(speed);
			}, speed / 5);

		});

		function play() {
			yt_frame.contentWindow.postMessage(JSON.stringify({
				'event': 'command',
				'func': 'playVideo',
				'args': []
			}), '*');
		}
	})();

});
