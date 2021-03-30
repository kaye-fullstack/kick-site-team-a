AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
    
<<<<<<< HEAD
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".scroll-active-js").addClass("active");
      } else {
         $(".scroll-active-js").removeClass("active");
      }
  });
=======
    const elem = $('.scroll-active-js');
    const scrolled = () => {
      const threshold = $(document).scrollTop() > 50;
        elem.toggleClass('scrolled', threshold);
      };
    $(window).on({ scroll: scrolled });
>>>>>>> 417fa9b (header-resubale/section-testimonial-reusable)
  };


  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();
