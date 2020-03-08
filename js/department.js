$(function () {
  var ua = navigator.userAgent;
  var bg = document.getElementById('background');
  var prevent = function (e) {
    e.preventDefault();
  };
  // イベ局
  $('#ev-btn').click(function () {
    $('#modal-ev').fadeIn();
    $('body').css('overflow', 'hidden');
    var wH = $(window).height() * 0.948;
    var mH = $('#modal-wrapper_ev').innerHeight();
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0) {
      if (mH > wH) {
        bg.addEventListener('touchmove', prevent, {
          passive: false
        });
      } else {
        window.addEventListener('touchmove', prevent, {
          passive: false
        });
      }
    } else {
      bg.addEventListener('touchmove', prevent, {
        passive: false
      });
    }
  });
  $('.close-ev').click(function () {
    $('#modal-ev').fadeOut();
    $('body').css('overflow', 'visible');
    bg.removeEventListener('touchmove', prevent, {
      passive: false
    });
    window.removeEventListener('touchmove', prevent, {
      passive: false
    });
  });
  // 渉外局
  $('#sh-btn').click(function () {
    $('#modal-sh').fadeIn();
    $('body').css('overflow', 'hidden');
    var wH = $(window).height() * 0.948;
    var mH = $('#modal-wrapper_sh').innerHeight();
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0) {
      if (mH > wH) {
        bg.addEventListener('touchmove', prevent, {
          passive: false
        });
      } else {
        window.addEventListener('touchmove', prevent, {
          passive: false
        });
      }
    } else {
      bg.addEventListener('touchmove', prevent, {
        passive: false
      });
    }
  });
  $('.close-sh').click(function () {
    $('#modal-sh').fadeOut();
    $('body').css('overflow', 'visible');
    bg.removeEventListener('touchmove', prevent, {
      passive: false
    });
    window.removeEventListener('touchmove', prevent, {
      passive: false
    });
  });
  // 広報局
  $('#pr-btn').click(function () {
    $('#modal-pr').fadeIn();
    $('body').css('overflow', 'hidden');
    var wH = $(window).height() * 0.948;
    var mH = $('#modal-wrapper_pr').innerHeight();
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0) {
      if (mH > wH) {
        bg.addEventListener('touchmove', prevent, {
          passive: false
        });
      } else {
        window.addEventListener('touchmove', prevent, {
          passive: false
        });
      }
    } else {
      bg.addEventListener('touchmove', prevent, {
        passive: false
      });
    }
  });
  $('.close-pr').click(function () {
    $('#modal-pr').fadeOut();
    $('body').css('overflow', 'visible');
    bg.removeEventListener('touchmove', prevent, {
      passive: false
    });
    window.removeEventListener('touchmove', prevent, {
      passive: false
    });
  });
  // フリペ局
  $('#fp-btn').click(function () {
    $('#modal-fp').fadeIn();
    $('body').css('overflow', 'hidden');
    var wH = $(window).height() * 0.948;
    var mH = $('#modal-wrapper_fp').innerHeight();
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0) {
      if (mH > wH) {
        bg.addEventListener('touchmove', prevent, {
          passive: false
        });
      } else {
        window.addEventListener('touchmove', prevent, {
          passive: false
        });
      }
    } else {
      bg.addEventListener('touchmove', prevent, {
        passive: false
      });
    }
  });
  $('.close-fp').click(function () {
    $('#modal-fp').fadeOut();
    $('body').css('overflow', 'visible');
    bg.removeEventListener('touchmove', prevent, {
      passive: false
    });
    window.removeEventListener('touchmove', prevent, {
      passive: false
    });
  });
  // ウェブマガ局
  $('#wm-btn').click(function () {
    $('#modal-wm').fadeIn();
    $('body').css('overflow', 'hidden');
    var wH = $(window).height() * 0.948;
    var mH = $('modal-wrapper_wm').innerHeight();
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0) {
      if (mH > wH) {
        bg.addEventListener('touchmove', prevent, {
          passive: false
        });
      } else {
        window.addEventListener('touchmove', prevent, {
          passive: false
        });
      }
    } else {
      bg.addEventListener('touchmove', prevent, {
        passive: false
      });
    }
  });
  $('.close-wm').click(function () {
    $('#modal-wm').fadeOut();
    $('body').css('overflow', 'visible');
    bg.removeEventListener('touchmove', prevent, {
      passive: false
    });
    window.removeEventListener('touchmove', prevent, {
      passive: false
    });
  });
  // 総務局
  $('#ga-btn').click(function () {
    $('#modal-ga').fadeIn();
    $('body').css('overflow', 'hidden');
    var wH = $(window).height() * 0.948;
    var mH = $('#modal-wrapper_ga').innerHeight();
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0) {
      if (mH > wH) {
        bg.addEventListener('touchmove', prevent, {
          passive: false
        });
      } else {
        window.addEventListener('touchmove', prevent, {
          passive: false
        });
      }
    } else {
      bg.addEventListener('touchmove', prevent, {
        passive: false
      });
    }
  });
  $('.close-ga').click(function () {
    $('#modal-ga').fadeOut();
    $('body').css('overflow', 'visible');
    bg.removeEventListener('touchmove', prevent, {
      passive: false
    });
    window.removeEventListener('touchmove', prevent, {
      passive: false
    });
  });
});