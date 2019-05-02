import '../../components/main'
import './category.less';
import '../../components/header/header';
import '../../components/footer/footer';
import '../../components/UI/currLocation.less';
import '../../components/UI/uiMixins.less';
import '../../components/UI/listNav.less';
import '../../components/UI/geometry.less';

import '../../components/UI/uiMixins'
import '../../libs/jquery-ui-1.12.1.custom/jquery-ui'
import '../../libs/jquery-ui-1.12.1.custom/jquery-ui.css'

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

$(function(){
    $('#price_slider').slider({
        range: true,
        min: 0,
        max: 500000,
        valies: [1000,5000],
        slide: function(event,ui){
            $('#price_min').val(ui.values[0]);
            $('#price_max').val(ui.values[1]);
        }
    });
    //$('#price_min').val($('#price_slider').slider("values",0));
    //$('#price_max').val($('#price_slider').slider("values",1));
    $('#price_min').change(function(){
        var val1=$('#price_min').val();
        var val2=$('#price_min').val();
        if(parseInt(val1)<parseInt(val2)){
            val1=val2;
            $('#price_max').val(val1);
        }
        $('price_slider').slider("values",0,val1);
    });
    $('#price_max').change(function(){
        var val1=$('#price_min').val();
        var val2=$('#price_min').val();
        if(parseInt(val1)<parseInt(val2)){
            val1=val2;
            $('#price_max').val(val1);
        }
        $('price_slider').slider("values",1,val2);
    });
    $('#price_min, #price_max').keypress(function(event){
        //alert('asdd');
        var key, keyChar;
        if (!event) var event = window.event;

        if (event.keyCode) key = event.keyCode;
        else if (event.which) key=event.which;
        if (key==null || key==0
            || key==8
            || key==13
            || key==9
            || key==46
            || key==37
            || key==39) return true;
        keyChar=String.fromCharCode(key);
        if (!/\d/.test(keyChar)) return false;
    });
});
