// $(window).resize(logScreenSize);

$(function(){
  resizeElements(['.my-button-people-name', '.my-button-jump-to-people'])
  // logScreenSize();
  $(".my-button-people-name").on('click', function(){
    //$(this).removeClass('btn-secondary').addClass('btn-danger');
    $(this).toggleClass('btn-secondary btn-danger');
    var $button =  $(this).closest('div').find('.my-button-jump-to-people');
      $button.toggleClass('d-none');

      resizeElements(['.my-button-people-name', '.my-button-jump-to-people'])


    var id = $button.find('a').attr('href');
      $(id).toggleClass('d-none');
  });
  if(!modernizr.mq('(min-width:576px)')){
    $('.my-button-people-name').css('width', '180px');
  }
});
