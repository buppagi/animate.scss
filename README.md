# Animate.scss #

이것은 Dan Eden의 [Animate.css](http://daneden.github.io/animate.css/) 와 Geoff Graham의 [Animate.scss](https://github.com/geoffgraham/animate.scss) 기반으로 만든 Sass입니다.

추가적으로 애니메이션을 좀 더 추가 했습니다.

## 추가 리스트 정리 ##
+ swing(basic, in, out) 추가하기

## Scss에 추가한 애니메이션 ##
### 2017.07.31 ###
+ Scale Exits 추가
+ rotating 추가

### 2017.07.28 ###
+ Scale Entrances 추가

### 2017.07.18 ###
+ Rotate 추가

### 2017.07.17 ###
+ Scale Up, Scale Down 추가

### 2017.07.13 ###
+ *attention-seekers > headShake* 추가
+ *specials > jackInTheBox* 추가
+ *background* 추가


## 설치
기본 가져오기에는 모든 애니메이션이 포함됩니다.
```scss
@import "animate.scss";
```


## 사용방법

### Animate.scss
파일이 프로젝트에 추가되고`@ imports`를 커스터마이징하면, 클래스에 직접 애니메이션을 포함시킬 수 있습니다.
```scss
.your-class-name {
  @include bounceIn();
}
```
mixin에는 애니메이션의 `delay`,`count`, `duration`,`function`과 `fill-mode`를 커스터마이징 할 수있는 설정 옵션이 있습니다.
```scss
.your-class-name {
  @include bounceIn(
    $count: 2,
    $duration: 1s,
    $delay: .2s,
    $function: ease,
    $fill: both
  );
}
```

### Animate.css
[Animate.css](http://daneden.github.io/animate.css/)만을 사용하시는 분들은 이것을 참고하시면 됩니다.
1. html 문서의`<head>`에 스타일시트에 포함시키면 됩니다.
```html
<head>
  <link rel="stylesheet" href="animate.min.css" />
</head>
```
또는 [CDNJS](https://cdnjs.com/libraries/animate.css)에서 불러올 수 있다.
```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
</head>
```
2. 애니메이션으로하려는 요소에 animated 클래스를 추가하십시오.
또한 무한 루프에 무한 클래스를 포함시킬 수도 있습니다.

3. 마지막으로 다음 클래스 중 하나를 추가해야 합니다.

| ﻿Class Name |
|--------------------|
| `bounce` |
| `flash` |
| `pulse` |
| `rubberBand` |
| `shake` |
| `headShake` |
| `swing` |
| `tada` |
| `wobble` |
| `jello` |
| `bounceIn` |
| `bounceInDown` |
| `bounceInLeft` |
| `bounceInRight` |
| `bounceInUp` |
| `bounceOut` |
| `bounceOutDown` |
| `bounceOutLeft` |
| `bounceOutRight` |
| `bounceOutUp` |
| `fadeIn` |
| `fadeInDown` |
| `fadeInDownBig` |
| `fadeInLeft` |
| `fadeInLeftBig` |
| `fadeInRight` |
| `fadeInRightBig` |
| `fadeInUp` |
| `fadeInUpBig` |
| `fadeOut` |
| `fadeOutDown` |
| `fadeOutDownBig` |
| `fadeOutLeft` |
| `fadeOutLeftBig` |
| `fadeOutRight` |
| `fadeOutRightBig` |
| `fadeOutUp` |
| `fadeOutUpBig` |
| `flipInX` |
| `flipInY` |
| `flipOutX` |
| `flipOutY` |
| `lightSpeedIn` |
| `lightSpeedOut` |
| `rotateIn` |
| `rotateInDownLeft` |
| `rotateInDownRight` |
| `rotateInUpLeft` |
| `rotateInUpRight` |
| `rotateOut` |
| `rotateOutDownLeft` |
| `rotateOutDownRight` |
| `rotateOutUpLeft` |
| `rotateOutUpRight` |
| `hinge` |
| `jackInTheBox` |
| `rollIn` |
| `rollOut` |
| `zoomIn` |
| `zoomInDown` |
| `zoomInLeft` |
| `zoomInRight` |
| `zoomInUp` |
| `zoomOut` |
| `zoomOutDown` |
| `zoomOutLeft` |
| `zoomOutRight` |
| `zoomOutUp` |
| `slideInDown` |
| `slideInLeft` |
| `slideInRight` |
| `slideInUp` |
| `slideOutDown` |
| `slideOutLeft` |
| `slideOutRight` |
| `slideOutUp` |
전체 예제:
```html
<h1 class="animated infinite bounce">예제</h1>
```
[모든 애니메이션 확인하기!](https://daneden.github.io/animate.css/)


jQuery를 사용하여 애니메이션을 쉽게 추가할 수 있습니다.
```javascript
$('#yourElement').addClass('animated bounceOutLeft');
```
애니메이션이 끝나는 시점을 감지 할 수도 있습니다.
```javascript
$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
```
jQuery와 함께 Animate.css 사용하는 방법에 대한 [비디오 영상](https://www.youtube.com/watch?v=CBQGl6zokMs)을 보실 수 있습니다.

jQuery를 확장시켜 모든 것을 수행하는 함수를 추가 할 수 있다.
```javascript
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});
```
그리고 아래와 같이 사용하면 됩니다.
```javascript
$('#yourElement').animateCss('bounce');
```
애니메이션의 재생 시간을 변경하거나 지연을 추가하거나 재생 횟수를 변경할 수 있습니다.
```css
#yourElement {
  -vendor-animation-duration: 3s;
  -vendor-animation-delay: 2s;
  -vendor-animation-iteration-count: infinite;
}
```
*참고: CSS의 "vendor"를 해당 공급 업체 접두어로 바꾸시면 됩니다.(webkit, moz, ms 등)*


**Note:** `jQuery.one()` 이벤트 처리기를 *한 번만* 실행하려는 경우에 사용된다. 자세한 내용은 [여기](http://api.jquery.com/one/)를 참조하세요.

감사합니다!
