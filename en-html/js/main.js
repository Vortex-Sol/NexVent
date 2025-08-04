(function($) {

	'use strict';

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

$('.home-slider').owlCarousel({
  loop: false,          // döngüyü kapat
  autoplay: false,      // otomatik kaydırmayı kapat
  margin: 0,
  nav: true,
  autoplayHoverPause: false,
  items: 1,
  mouseDrag: false,     // fare ile sürüklemeyi kapat
  touchDrag: false,     // dokunmatik sürüklemeyi kapat
  pullDrag: false,      // çekiş sürüklemeyi kapat
  navText: ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true
    }
  }
});

  $('.nonloop-block-11').owlCarousel({
      center: false,
      items: 1,
      loop: false,
      stagePadding: 20,
      margin:50,
      nav: true,
      smartSpeed: 1000,
      navText: ['<span class="ion-chevron-left">', '<span class="ion-chevron-right">'],
      responsive:{
        600:{
          stagePadding: 20,
          items:1
        },
        800:{
          stagePadding: 20,
          items:1
        },
        1000:{
          // stagePadding: 200,
          items:1
        }
      }
    });

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});


	var contentWayPoint = function() {
		var i = 0;
		$('.element-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .element-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn element-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft element-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight element-animated');
							} else {
								el.addClass('fadeInUp element-animated');
							}
							el.removeClass('item-animate');
						},  k * 100);
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

   $('.navbar .dropdown > a').click(function(){
    location.href = this.href;
  });


  // Flag değiştiren fonksiyon
  function changeLanguage(flagSrc, altText) {
    const flagImg = document.getElementById("currentFlag");
    flagImg.src = flagSrc;
    flagImg.alt = altText;
  }

  // Linklere olay dinleyici ekle
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-item").forEach(function (item) {
      item.addEventListener("click", function () {
        const img = item.querySelector("img");
        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt");
        changeLanguage(src, alt);
      });
    });
  });


document.addEventListener("DOMContentLoaded", function () {
  var backToTopBtn = document.getElementById("backToTopBtn");

  if (!backToTopBtn) return; // Buton bulunamazsa çık

  window.addEventListener("scroll", function () {
    if (
      window.innerWidth <= 768 &&
      (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    ) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});



})(jQuery);