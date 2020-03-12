$(function () {
  $('#menu-btn').click(function () {
    var slideTime = 400;
    $(this).toggleClass('open');
    $('body').toggleClass('open');
    if ($(this).hasClass('open')) {
      $('#menu-show').css('display', 'block');
      var width = document.getElementById('menu-show').clientWidth;
      $('body').css('overflow', 'hidden');
      $('#SP').css('overflow', 'visible');
      $('#menu').animate({ 'left': 0 }, slideTime);
    } else {
      var width = document.getElementById('menu-show').clientWidth;
      $('body').css('overflow', 'visible');
      setTimeout(() => {
        $('#SP').css('overflow', 'hidden');
      }, slideTime);
      $('#menu').animate({ 'left': width }, slideTime);
      setTimeout(function () {
        $('#menu-show').css('display', 'none');
      }, slideTime)
    }
  });
});