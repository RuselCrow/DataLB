import './index.less';
import '../../components/main'
import '../../components/header/header'
import '../../components/footer/footer';
import '../../libs/jquery-ui-1.12.1.custom/jquery-ui'
import '../../libs/jquery-ui-1.12.1.custom/jquery-ui.css'

var lefftFoot = document.getElementById('left-foot');
var footAnim = false;
setInterval(() => {
    if (footAnim) {
        lefftFoot.classList.add('active');
    } else {
        if (lefftFoot.classList.contains('active')) {
            lefftFoot.classList.remove('active');
        }
    }
    footAnim = !footAnim;
}, 6000);

// var mySVG = document.getElementById('svg');
// mySVG.setAttribute("viewBox", "0 `0 8 29");
// console.log($("#svg"));

// $("#svg").animate({
//     viewBox: "0 10 8 29"
// })



// function animViewbox (elements, complete, remaining, start, tweenValue) {
//      elements[0].setAttribute('viewBox', '0 0 ' + tweenValue + ' ' + tweenValue);  
// }

