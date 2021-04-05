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

  const _activeListItem = () => {
    $('.faq-navigation .list-item').click(function() {
      $(this).addClass("active-js")
      $(this).siblings().removeClass("active-js")
    });
  };
  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _scrollHeader();
    _activeListItem();
  };

  return {
    init: init,
  };
})();