$(function () {
  $('#menu-btn').click(function () {
    var win_wid = $(window).width();
    var width = Math.min($(window).width(),414);
    var slideTime = 400;
    $(this).toggleClass('open')
    $('body').toggleClass('open');
    if ($(this).hasClass('open')) {
      $('body').css('overflow', 'hidden');
      $('#SP').css('overflow', 'visible');
      $('#menu').animate({ 'left': win_wid - width }, slideTime);
    } else {
      $('body').css('overflow', 'visible');
      setTimeout(() => {
        $('#SP').css('overflow', 'hidden');
      }, slideTime);
      $('#menu').animate({ 'left': win_wid }, slideTime);
    }
  });
  // $('.menu-samepage').click(function () {
  //   var width = $(window).width();
  //   $('#menu-btn').removeClass('open');
  //   $('#menu').css('left', width);
  //   $('body').removeClass('open');
  //   $('body').css('overflow', 'visible');
  // });
});