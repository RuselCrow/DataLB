import '../../components/main'
import './personal.less';
import '../../components/header/header'
import '../../components/footer/footer'
import '../../components/UI/currLocation.less'
import '../../components/UI/uiMixins.less'
import '../../components/UI/geometry.less';

import '../../components/UI/uiMixins'


$('.brend_title').click(function(e){
    var toggleText=e.currentTarget;
    var toggledElement = toggleText.parentNode.getElementsByClassName('filter_container')[0];
    toggleClasses(toggledElement,'visible','invisible');
    //toggleClasses(toggleText,'up','down');
});
function toggleClasses(elem,class1,class2){
    if(elem.classList.contains(class1)){
        elem.classList.remove(class1);
        elem.classList.add(class2);

    }
    else if(elem.classList.contains(class2)){
        elem.classList.remove(class2);
        elem.classList.add(class1);
    }

}