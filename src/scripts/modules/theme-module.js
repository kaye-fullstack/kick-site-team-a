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
    
    const elem = $('.scroll-active-js');
    const scrolled = () => {
      const threshold = $(document).scrollTop() > 50;
        elem.toggleClass('scrolled', threshold);
      };
    $(window).on({ scroll: scrolled });
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
