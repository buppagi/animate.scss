# Animate.scss
> _비공개([비트버킷에서](https://bitbucket.org))로 진행하다가 공개로 변경하였습니다._

> _이것은 Dan Eden의 [Animate.css](http://daneden.github.io/animate.css/) 와 Geoff Graham의 [Animate.scss](https://github.com/geoffgraham/animate.scss) 기반으로 만든 한글버전 Sass입니다._

[Animate.scss](https://github.com/geoffgraham/animate.scss) 애니메이션을 추가를 많이 하였습니다. 추가한 애니메이션은  [아래테이블](#animations)에 나와있습니다.

## 추가 리스트 정리

## SCSS에 추가한 애니메이션
### 2017.07.31
+ Scale Exits 추가
+ rotating 추가
### 2017.07.28
+ Scale Entrances 추가
### 2017.07.18
+ Rotate 추가
### 2017.07.17
+ Scale Up, Scale Down 추가
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
`mixin`에는 애니메이션의 `delay`,`count`, `duration`,`function`과 `fill-mode`를 커스터마이징 할 수있는 설정 옵션이 있습니다.
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
>_**참고**: CSS의 "vendor"를 해당 공급 업체 접두어로 바꾸시면 됩니다.(webkit, moz, ms 등)_

### Animate.css
[Animate.css](https://daneden.github.io/animate.css/)만을 사용하시는 분들은 이것을 참고하시면 됩니다.
1. html 문서의`<head>`에 스타일시트에 포함시키면 됩니다.
```html
<head>
  <link rel="stylesheet" href="animate.min.css" />
</head>
```
또는 [CDNJS](https://cdnjs.com/libraries/animate.css)에서 불러올 수 있다.
```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
</head>
```
### Animations

요소에 애니메이션 효과를 적용하려면 요소에 `animated` 클래스를 추가합니다. 무한 루프에 `infinite` 클래스를 포함 할 수 있습니다. 마지막으로 요소에 다음 클래스 중 하나를 추가해야합니다.

#### 기존 애니메이션
> _Dan Eden의 [animate.css](https://github.com/daneden/animate.css#animations) 테이블_

| Class Name        |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `bounce`          | `flash`            | `pulse`             | `rubberBand`         |
| `shake`           | `headShake`        | `swing`             | `tada`               |
| `wobble`          | `jello`            | `bounceIn`          | `bounceInDown`       |
| `bounceInLeft`    | `bounceInRight`    | `bounceInUp`        | `bounceOut`          |
| `bounceOutDown`   | `bounceOutLeft`    | `bounceOutRight`    | `bounceOutUp`        |
| `fadeIn`          | `fadeInDown`       | `fadeInDownBig`     | `fadeInLeft`         |
| `fadeInLeftBig`   | `fadeInRight`      | `fadeInRightBig`    | `fadeInUp`           |
| `fadeInUpBig`     | `fadeOut`          | `fadeOutDown`       | `fadeOutDownBig`     |
| `fadeOutLeft`     | `fadeOutLeftBig`   | `fadeOutRight`      | `fadeOutRightBig`    |
| `fadeOutUp`       | `fadeOutUpBig`     | `flipInX`           | `flipInY`            |
| `flipOutX`        | `flipOutY`         | `lightSpeedIn`      | `lightSpeedOut`      |
| `rotateIn`        | `rotateInDownLeft` | `rotateInDownRight` | `rotateInUpLeft`     |
| `rotateInUpRight` | `rotateOut`        | `rotateOutDownLeft` | `rotateOutDownRight` |
| `rotateOutUpLeft` | `rotateOutUpRight` | `hinge`             | `jackInTheBox`       |
| `rollIn`          | `rollOut`          | `zoomIn`            | `zoomInDown`         |
| `zoomInLeft`      | `zoomInRight`      | `zoomInUp`          | `zoomOut`            |
| `zoomOutDown`     | `zoomOutLeft`      | `zoomOutRight`      | `zoomOutUp`          |
| `slideInDown`     | `slideInLeft`      | `slideInRight`      | `slideInUp`          |
| `slideOutDown`    | `slideOutLeft`     | `slideOutRight`     | `slideOutUp`         |
| `heartBeat`       |

#### 추가한 애니메이션

| Class Name             |                            |                           |                            |
| ---------------------  | ------------------------   | ------------------------- | -------------------------  |
| `rotateBottom`         | `rotateBottomLeft`         | `rotateBottomRight`       | `rotateCenter`             |
| `rotateDiagonal1`      | `rotateDiagonal2`          | `rotateDiagonalBottomLeft`| `rotateDiagonalBottomRight`|
| `rotateDiagonalTopLeft`| `rotateDiagonalTopRight`   | `rotateHorBottom`         | `rotateHorCenter`          |
| `rotateHorTop`         | `rotateLeft`               | `rotateRight`             | `rotateTop`                |
| `rotateTopLeft`        | `rotateTopRight`           | `rotateVerCenter`         | `rotateVerLeft`            |
| `rotateVerRight`       | `BackgroundColorBottom`    | `BackgroundColorLeft`     | `scaleDownVerTop`          |
| `BackgroundColorRight` | `BackgroundColorTop`       | `scaleDownTopLeft`        | `scaleDownTopRight`        |
| `scaleDownBottom`      | `scaleDownBottomLeft`      | `scaleDownBottomRight`    | `scaleDownCenter`          | 
| `scaleDownHorCenter`   | `scaleDownHorLeft`         | `scaleDownHorRight`       | `scaleDownLeft`            |
| `scaleDownRight`       | `scaleDownTop`             | `BackgroundMoveBottom`    | `BackgroundMoveBottomRight`|
| `BackgroundMoveRight`  | `BackgroundMoveBottomLeft` | `BackgroundMoveTop`       | `BackgroundMoveTopRight`   |
| `BackgroundMoveLeft`   | `BackgroundMoveTopLeft`    | `scaleInBottom`           | `scaleInBottomLeft`        |
| `scaleInBottomRight`   | `scaleInCenter`            | `scaleInHorCenter`        | `scaleInHorLeft`           |
| `scaleInHorRight`      | `scaleInLeft`              | `scaleInRight`            | `scaleInTop`               |
| `scaleInTopLeft`       | `scaleInTopRight`          | `scaleInVerBottom`        | `scaleInVerCenter`         |
| `scaleInVerTop`        | `scaleDownVerBottom`       | `scaleDownVerCenter`      | `scaleUpBottom`            |
| `scaleUpBottomLeft`    | `scaleUpBottomRight`       | `scaleUpCenter`           | `scaleUpHorCenter`         |
| `scaleUpHorLeft`       | `scaleUpHorRight`          | `scaleUpLeft`             | `scaleUpRight`             |
| `scaleUpTop`           | `scaleUpTopLeft`           | `scaleUpTopRight`         | `scaleUpVerBottom`         |
| `scaleUpVerCenter`     | `scaleUpVerTop`            | `scaleOutBottom`          | `scaleOutBottomLeft`       |
| `scaleOutBottomRight`  | `scaleOutCenter`           | `scaleOutHor`             | `scaleOutHorLeft`          |
| `scaleOutHorRight`     | `scaleOutLeft`             | `scaleOutRight`           | `scaleOutTop`              |
| `scaleOutTopLeft`      | `scaleOutTopRight`         | `scaleOutVer`             | `scaleOutVerBottom`        |
| `scaleOutVerTop`       |


전체 Class 예제:
```html
<h1 class="animated infinite bounce delay-2s">Example</h1>
```
[모든 애니메이션 확인하기!](https://buppagi.github.io/animate.scss/)


### JavaScript 사용하기
animate.css에 자바스크립트와 더 하면 많은 것들이 가능해집니다. 간단한 예:
```javascript
const element =  document.querySelector('.my-element')
element.classList.add('animated', 'bounceOutLeft')
```
애니메이션이 끝나는 시점을 감지 할 수도 있습니다.

```javascript
const element =  document.querySelector('.my-element')
element.classList.add('animated', 'bounceOutLeft')

element.addEventListener('animationend', function() { doSomething() })
```
아래의 함수를 사용하여 애니메이션을 추가하거나 제거 할 수 있습니다.
```javascript
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}
```

다음처럼 사용하면 됩니다.
```javascript
animateCSS('.my-element', 'bounce')

// or
animateCSS('.my-element', 'bounce', function() {
  // 애니메이션 후 추가 작업 가능.
})
```
위 예에서는 ES6의 `const` 선언을 사용하였습니다. 원하는 경우 `const`를 `var` 선언으로 전환하면 IE10과 일부 오래된 브라우저가 지원이 가능합니다. (여전히 classList 지원을 제공해야하므로 연구를 수행해야합니다).


ES6지원이 안되는 브라우저를 위해 jQuery 예입니다.
### jQuery 사용하기
jQuery를 사용하여 애니메이션을 쉽게 추가할 수 있습니다.
```javascript
$('.your-element').addClass('animated bounceOutLeft');
```
애니메이션이 끝나는 시점을 감지 할 수도 있습니다.
```javascript
$('.your-element').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
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
>_**노트:** `jQuery.one()` 이벤트 처리기를 *한 번만* 실행하려는 경우에 사용됩니다. 자세한 내용은 [여기](http://api.jquery.com/one/)를 참조하세요._


## 지연 및 속도 설정
### Delay 클래스
다음과 같이 요소의 클래스 속성에 직접 지연을 추가 할 수 있습니다.
```html
<div class="animated bounce delay-2s">Example</div>
```
| Class Name | Delay Time |
| ---------- | ---------- |
| `delay-1s` | `1s`       |
| `delay-2s` | `2s`       |
| `delay-3s` | `3s`       |
| `delay-4s` | `4s`       |
| `delay-5s` | `5s`       |
> _**노트** : 기본 지연은 1초에서 5초까지입니다. 추가 지연이 필요한 경우, 직접 자신의 CSS코드에 추가하시면 됩니다._

### Slow, Slower, Fast, and Faster 클래스
아래 예제처럼 클래스를 추가하여 애니메이션의 속도를 제어 할 수 있습니다.

```html
<div class="animated bounce faster">Example</div>
```

| Class Name | Speed Time |
| ---------- | ---------- |
| `slow`     | `2s`       |
| `slower`   | `3s`       |
| `fast`     | `800ms`    |
| `faster`   | `500ms`    |
> _**노트** : 애니메이션 클래스의 기본 속도는 `1초`입니다. 추가 시간이 필요한 경우 직접 자신의 CSS코드에 추가하시면 됩니다._

## 라이센스
Animate.css와 Animate.scss는 모두 MIT 라이센스에 따라 라이센스가 부여됩니다. (http://opensource.org/licenses/MIT)


감사합니다!
