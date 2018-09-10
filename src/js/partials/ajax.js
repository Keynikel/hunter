$(document).ready(function(){
  $('.invitation__form').submit(function(e) {
     var $form = $(this);
     $.ajax({
       type: 'POST',
       url: 'send.php',

       data: $form.serialize()
     }).done(function(result) {
       if (result) {
         $('.modal-mask').addClass('modal-mask--visible');
       }

     }).fail(function() {
       console.log(result);
     });
     //отмена действия по умолчанию для кнопки submit
     e.preventDefault();
       });

   $('.feedback__form').submit(function(e) {
      var $form = $(this);
      $.ajax({
        type: 'POST',
        url: 'send--feedback.php',
        data: $form.serialize()
      }).done(function(result) {
        if (result) {
          $('.modal-mask').addClass('modal-mask--visible');
        }

      }).fail(function() {
        console.log(result);
      });
      //отмена действия по умолчанию для кнопки submit
      e.preventDefault();
        });

  $('.modal__close').on('click', function() {
    $('.modal-mask').removeClass('modal-mask--visible');
  })
});
