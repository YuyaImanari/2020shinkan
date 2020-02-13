$(function () {
  $('#menu-btn').click(function () {
    var width = $(window).width();
    $(this).toggleClass('open')
    $('body').toggleClass('open');
    if ($(this).hasClass('open')) {
      $('body').css('overflow', 'hidden');
      $('#menu').animate({'left': 0}, 300);
    } else {
      $('#menu').animate({'left': width}, 300);
      $('body').css('overflow', 'visible');
    }
  });
});