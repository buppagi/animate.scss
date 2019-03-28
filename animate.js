(function($){
  var $window = $(window),
    $document = $(document),
    $html = $('html'),
    $body = $('body'),
    $header = $('#header');

  $.fn.extend({
    animateCss: function (animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
      });
      return this;
    }
  });
  $.fn.extend({
    animateNotCss: function (animationName) {
      this.addClass('animated ' + animationName);
      return this;
    }
  });

  $.fn.extend({
    animateReverseCss: function (animationName, element) {
      this.removeClass('animated ' + animationName);
      setTimeout(function(){
        element.addClass('animated ' + animationName);
      }, 100);
      return this;
    }
  });

  $(document).ready(function(){
    var sWing = '<div id="CardBox">';
      sWing += '<div class="front face"><span class="text">앞면</span></div>';
      sWing += '<div class="back face"><span class="text">뒷면</span></div>';
      sWing += '</div>';

    $('body').append('<div class="ani-obj"></div>').find('.site_header').append(sWing);
    var _bgObject = '.ani-obj';
    var $cardbox = $('#CardBox');

    var $sandbox = $('#animationSandbox');
    $('.js-triggerAnimation').on('click', function(e){
      e.preventDefault();
      var $select = $('.js-animations');
      var ani = $select.val();
      if (!$body.hasClass('background')) {
        $sandbox.animateCss(ani);
      } else {
        $(_bgObject).removeClass('delay-1s').animateCss(ani);
      }

      if( ani.indexOf('Swing') !=-1 ) {
        $cardbox.animateReverseCss(ani, $cardbox);
      }
    });

    $('.js-animations').on('change', function(){
      var $this = $(this),
        ani = $this.val();

      // 배경이미지
      if( ani.indexOf('BackgroundMove') != -1) {
        if( !$body.hasClass('background') ) {
          $body.addClass('background').find(_bgObject).addClass('background-move active delay-1s').animateCss(ani);
        } else {
          // move => move or color => move
          if ( !$(_bgObject).hasClass('background-move')) {
            $(_bgObject).removeClass('background-color hor ver').addClass('background-move active delay-1s').animateCss(ani);
          } else {
            $(_bgObject).removeClass('delay-1s').animateCss(ani);
          }
        }
        
        if( !$header.find('.wrap .source').length ) {
          var addHtml = '<p class="source" title="서울 야경 배경이미지"><small>이미지 출처 - 근로복지공단 블로그 너나들이</small></p>';
          $header.find('.wrap').append(addHtml);
        }
      } else if (ani.indexOf('BackgroundColor') != -1) {
        if ($header.find('.wrap .source').length) {
          $header.find('.source').remove();
        }
        if (ani.match(/(Left|Right)/)) {
          $(_bgObject).removeClass('ver').addClass('hor');
        } else if (ani.match(/(Top|Bottom)/)) {
          $(_bgObject).removeClass('hor').addClass('ver');
        }
        if ( !$body.hasClass('background')) {
          $body.addClass('background').find(_bgObject).addClass('background-color active').animateCss(ani);
        } else {
          // move => color or color => color
          if ( !$(_bgObject).hasClass('background-color') ) {
            $(_bgObject).removeClass('background-move delay-1s').addClass('background-color active').animateCss(ani);
          } else {
            $(_bgObject).animateCss(ani);
          }
        }
      } else if( ani.indexOf('Swing') !=-1 ) {
        //swing
        var swing = $this.find(':selected').data('swing');
        $header.addClass('swing-actived').find('.wrap').css('display', 'none');
        $cardbox.removeClass().addClass(swing).animateNotCss(ani);
      } else {
        $body.removeClass('background').find(_bgObject).removeClass('background-move background-color hor ver active');
        $header.removeClass('swing-actived').find('.wrap').css('display', 'block').find('.source').remove();
        $cardbox.removeClass(); // cardbox 숨김 및 클래스 삭제
        $sandbox.animateCss(ani); //기본 애니메이션 실행
      }
    });

  });
})(jQuery);
