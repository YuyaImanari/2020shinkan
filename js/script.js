$(function () {
  $('#menu-btn').click(function () {
    var width = $(window).width();
    var slideTime = 400;
    $(this).toggleClass('open')
    $('body').toggleClass('open');
    if ($(this).hasClass('open')) {
      $('body').css('overflow', 'hidden');
      $('#SP').css('overflow', 'visible');
      $('#menu').animate({ 'left': 0 }, slideTime);
    } else {
      $('body').css('overflow', 'visible');
      setTimeout(() => {
        $('#SP').css('overflow', 'hidden');
      }, slideTime);
      $('#menu').animate({ 'left': width }, slideTime);
    }
  });
});