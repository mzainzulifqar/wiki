(function($){
	$(document).ready(function() {	

		checkScroll();
		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		//click-more-news

		jQuery('.more-news button').click(function(){
			jQuery('.more-news-item').slideToggle()

		})


		//owlCarousel page-2-hero-area

		$("#owl-csel1").owlCarousel({
			items: 1,
			nav: false,
			dots: true,
			dotsData: true,
			autoplay: true,
			autoplayTimeout: 3000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			// center:true,
			// stagePadding: 2,
			navText: [
						'<i class="fa fa-angle-left" aria-hidden="true"></i>',
						'<i class="fa fa-angle-right" aria-hidden="true"></i>'
					],
			navContainer: '.main-content .custom-nav',
			responsive:{
				0: {
					items: 1,						
				},
				767: {
					items: 1,						
				},
				1200: {
					items: 1,						
				}
			}

		});


		//owlCarousel page-2-hero-area
		$('.myslider').owlCarousel({
			items: 1,
			nav: true,
			dots: true,
			dotsData: true,
			loop:true,
			navClass: ['owlprev', 'owlnext'],
			navText: ['', ''],
		
		});
		//owlCarousel page-3-hero-area
		$('.myslider2').owlCarousel({
			items: 1,
			nav: true,
			dots: true,
			dotsData: true,
			loop:true,
			navClass: ['owlprev', 'owlnext'],
			navText: ['', ''],
		
		});


		//tab
		$(document).ready(function() {
            $(".first_tab").champ();         

        });

		function checkScroll() {
			var imageContainers = document.querySelectorAll('img');
			var textContainers = document.querySelectorAll('p');
		  
			textContainers.forEach(function(textContainer) {
			  if (isElementInViewport(textContainer) || isElementAtScrollHeight(textContainer)) {
				textContainer.classList.add('slide-in');
			  }
			});
		  
			imageContainers.forEach(function(imageContainer) {
			  if (isElementInViewport(imageContainer) || isElementAtScrollHeight(imageContainer)) {
				imageContainer.classList.add('fade-in');
			  }
			});
		  }
		  
		function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50 &&
			rect.left >= 0 &&
			rect.bottom >= 50 &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
		}
		  
		function isElementAtScrollHeight(el) {
		var rect = el.getBoundingClientRect();
		return (rect.top <= window.innerHeight && rect.bottom >= 0);
		}
		  
		window.addEventListener('scroll', checkScroll);		  
		  
		});
})(jQuery);