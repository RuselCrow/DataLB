import './fonts/fonts.less'
import '../libs/bootstrap/bootstrap-grid-3.3.1.min.css'
import '../libs/particleground-master/jquery.particleground.js'
import '../libs/particleground-master/demo/js/jquery-1.11.1.min.js'

//import 'bootstrap'



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

function emitEvent(name){
  if (yaCounter50530423 && (typeof yaCounter50530423.reachGoal === 'function')) {
      yaCounter50530423.reachGoal(name);
    }
}
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('button1').onclick=()=>{emitEvent('button1');changeTexts('"ИППОДРОМ МАНЕЖ"',"20:00-22:00");};
  document.getElementById('button2').onclick=()=>{emitEvent('button2');changeTexts('"ВАТАН"',"19:00-21:00");};
  document.getElementById('button3').onclick=()=>{emitEvent('button3');changeTexts('"ТАСМА"',"18:30-20:30");};
  document.getElementById('submit').onclick=()=>{emitEvent('send');};
});
function changeTexts(name,time){
  var nameElem=document.getElementById("modal-name");
  nameElem.innerText=name;
  var timeElem=document.getElementById("modal-time");
  timeElem.innerText=time;
}