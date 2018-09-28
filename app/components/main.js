import './fonts/fonts.less'
import '../libs/bootstrap/bootstrap-grid-3.3.1.min.css'
import '../libs/particleground-master/jquery.particleground.js'
import '../libs/particleground-master/demo/js/jquery-1.11.1.min.js'
//import 'bootstrap'


document.getElementById('toggle-hamburger').onclick=function(){
    onHamburger();
}
function onHamburger() {
    const hamburger = document.getElementById('toggle-hamburger');
    const menu = document.getElementById('side-menu');

    console.log(this, 'sandwich clicked', menu);
    if (!hamburger.classList.contains('is-active')) {
      hamburger.classList.add('is-active');
      menu.classList.add('active');
    } else {
      hamburger.classList.remove('is-active');
      menu.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: 'white',
    lineColor: 'white',
    directionY: 'up',
    particleRadius: '20',
    lineWidth:'7',
    maxSpeedY:'0',
    offsetY:'3000',
    density:'10000'

  });
}, false);

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles1'), {
    dotColor: '#333333',
    lineColor: '#333333',
    directionY: 'up',
    particleRadius: '30',
    lineWidth:'8',
    maxSpeedY:'0',
    offsetY:'4000',
    density:'10000'

  });
}, false);