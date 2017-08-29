$(document).ready(function(){

  $('div' ).hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );

  $('div').dblclick(function() {
        $(this).fadeOut('slow');
  });

});
