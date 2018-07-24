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
    arrows: false,
    dots: true
  });
});
