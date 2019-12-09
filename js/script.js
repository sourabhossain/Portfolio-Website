$(function() {
	'use strick'

	/*========== Start Preloader ==========*/

	$('.preloader').delay(500).fadeOut('slow');

	/*========== End Preloader ==========*/
	/*========== Start Navbar ==========*/

	$('nav a').on('click', function() {
		$('nav a').removeClass('active');
		$(this).addClass('active')
	});

	$(window).on('scroll', function(){
		if ($(window).scrollTop() > 50) {
			$('nav',).addClass('sticky');
		} else {
			$('nav',).removeClass('sticky');
		}
	});

	$('body').scrollspy({
		offset: 80
	});

	/*========== End Navbar ==========*/
	/*========== Start Smooth Scroll ==========*/

	$('a[href*="#"]').on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - 0
			}, 1000, 'linear');
		});

	/*========== End Smooth Scroll ==========*/
	/*========== Start EasyPieChart ==========*/

	$(window).on('scroll', function (){
		$('.chart').easyPieChart({
			animate: 3500,
			barColor: '#ff206e',
			lineWidth: 12,
			size: 175,
			scaleColor: false,
			trackColor: '#111'
		});
	});

	/*========== End EasyPieChart ==========*/
	/*========== Start Counter ==========*/

	$('.counter').countUp({
		delay: 5,
		time: 2000
	});

	/*========== End Counter ==========*/
	/*========== Start Portfolio (Isotope) ==========*/

	$('.filter span').on('click', function() {
		$('.filter span').removeClass('active');
		$(this).addClass('active')
	});

	$('.portfolio-container').isotope({
		itemSelector: '.portfolio-box',
	});

	var $gallery = $('.portfolio-container').isotope();

	$('.filter span').on( 'click', function() {
		var filterValue = $(this).attr('data-filter');
		$gallery.isotope({ filter: filterValue });
	});

	/*========== End Portfolio (Isotope) ==========*/
	/*========== Start Magnific Popup ==========*/

	$('.item-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		gallery: {
			enabled: true,
			preload: [0, 1]
		},
	});

	$('.item-video').magnificPopup({
		type: 'iframe',
		closeOnContentClick: true,
		gallery: {
			enabled: true,
			preload: [0, 1]
		},
	});

	/*========== End Magnific Popup ==========*/
	/*========== Start Price Carousel ==========*/

	$('.price .owl-carousel').owlCarousel({
		autoplay: true,
		dots: false,
		loop: true,
		smartSpeed: 450,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});

	/*========== End Price Carousel ==========*/
	/*========== Start Clients Carousel ==========*/

	$('.client .owl-carousel').owlCarousel({
		autoplay: true,
		loop: true,
		items: 1,
		smartSpeed: 450
	});

	/*========== End Clients Carousel ==========*/
	/*========== Start Company Carousel ==========*/

	$('.company .owl-carousel').owlCarousel({
		autoplay: true,
		dots: false,
		loop: true,
		smartSpeed: 450,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	});

	/*========== End Company Carousel ==========*/
	/*========== Start Blog Carousel ==========*/

	$('.blog .owl-carousel').owlCarousel({
		autoplay: true,
		dots: false,
		loop: true,
		smartSpeed: 450,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			766: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});

	/*========== End Blog Carousel ==========*/
	/*========== Start Ajax Contact Form ==========*/

	$('#form').on('submit', function() {
		$.ajax({
			type: 'POST',
			url: 'mail.php', // default 'mail.php'. Can be change to 'telegram.php' for using Telegram
			data: $(this).serialize(),
			success: function (data)
			{
				$(this).find('input').val('');
				alert('Thank you for your request! Soon we will contact you.');
				$('#form').trigger('reset');
			}
		});
		return false;
	});

	/*========== End Ajax Contact Form ==========*/

});

/*========== Start Particles ==========*/

particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 50,
			"density": {
				"enable": true,
				"value_area": 1420.4657549380909
			}
		},
		"color": {
			"value": "#fff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#fff"
			},
			"polygon": {
				"nb_sides": 5
			},
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 10,
				"size_min": 0.25,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 150,
			"color": "#fff",
			"opacity": 0.75,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 2,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});

/*========== End Particles ==========*/

$(document).ready(function(){
	var typed = $(".typed");

	$(function () {
	  typed.typed({
		strings: ["Sourav Hossain.", "Web Designer.", "Web Developer.", "Freelancer.", "Photographer"],
		typeSpeed: 100,
		loop: true,
	  });
	});

	$('.venobox').venobox(); 

	wow = new WOW({
		boxClass:     'wow', 
		animateClass: 'animated', 
		offset: 0,  
		mobile: true, 
		live:  true
	  })
	  wow.init();

	  $(window).scroll(function() {
		if ($(this).scrollTop() > 50 ) {
			$('.scrolltop:hidden').stop(true, true).fadeIn();
		} else {
			$('.scrolltop').stop(true, true).fadeOut();
		}
	});
	
	$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})

  });