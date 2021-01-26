$(document).ready(function(){
    $(window).on('load', function () {
        if ($('#preloader').length) {
          $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
          });
        }
    });

    const responsive = {
        0:{
            items: 1
        },
        320:{
            items: 1
        },
        560:{
            items: 2
        },
        960: {
            items: 3
        }
    }

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],
        responsive: responsive
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });
      $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
        return false;
    });

    AOS.init();
});