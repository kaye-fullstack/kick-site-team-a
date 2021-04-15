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
    
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".scroll-active-js").addClass("active");
      } else {
         $(".scroll-active-js").removeClass("active");
      }
  });
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
