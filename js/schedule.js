$(function () {
  $('#spring').click(function () {
    var width = $(window).width();
    var slideTime = 400;
    $('body').animate({
      backgroundColor: '#FCD'
    }, slideTime);
    $('#season-list').removeClass('summer automn winter', slideTime);
    $('#season-list').addClass('spring', slideTime);
    $('#season-list-window').animate({
      scrollLeft: 0,
    }, slideTime);
    $('#season-contents').animate({
      'left': - 0 * width
    }, slideTime);
  });
  $('#summer').click(function () {
    var width = $(window).width();
    var slideTime = 400;
    $('body').animate({
      backgroundColor: '#9FB'
    }, slideTime);
    $('#season-list').removeClass('spring automn winter', slideTime);
    $('#season-list').addClass('summer', slideTime);
    $('#season-list-window').animate({
      scrollLeft: 0.4 * width
    }, slideTime);
    $('#season-contents').animate({
      'left': - 1 * width
    }, slideTime);
  });
  $('#automn').click(function () {
    var width = $(window).width();
    var slideTime = 400;
    $('body').animate({
      backgroundColor: '#FDB'
    }, slideTime);
    $('#season-list').removeClass('spring summer winter', slideTime);
    $('#season-list').addClass('automn', slideTime);
    $('#season-list-window').animate({
      scrollLeft: 0.8 * width
    }, slideTime);
    $('#season-contents').animate({
      'left': - 2 * width
    }, slideTime);
  });
  $('#winter').click(function () {
    var width = $(window).width();
    var slideTime = 400;
    $('body').animate({
      backgroundColor: '#9FF'
    }, slideTime);
    $('#season-list').removeClass('spring summer automn', slideTime);
    $('#season-list').addClass('winter', slideTime);
    $('#season-list-window').animate({
      scrollLeft: 1.2 * width
    }, slideTime);
    $('#season-contents').animate({
      'left': - 3 * width
    }, slideTime);
  });
});