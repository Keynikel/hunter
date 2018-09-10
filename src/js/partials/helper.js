//Так приятней :)
window.log = function(param){
    console.log(param);
};

$(document).ready(function(){
  $('.slider__items').slick({
    arrows: false,
    dots: true
  });

  $('.quote__items').slick({
    arrows: false,
    dots: true
  });

  $('.blog__items').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1.1,
    responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1.3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.7
      }
    }
  ]

  });
});


/* begin Scroll Down Button */
(function() {
  'use strict';

  var btnScrollDown = document.querySelector('#section-control');

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();
/* end Scroll Down Button */
