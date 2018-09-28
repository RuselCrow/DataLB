$('.charact').click(function(e){
    var toggleText=e.target;
    var toggledElement = toggleText.parentNode.getElementsByClassName('product_description')[0];
    toggleClasses(toggledElement,'visible','invisible');
    //toggleClasses(toggleText,'up','down');
});
$('.down').click(function(e){
    toggleClasses(e.currentTarget,'up','down')
});

$('.up').click(function(e){
    toggleClasses(e.currentTarget,'up','down');
});
$('.down_before').click(function(e){
    toggleClasses(e.currentTarget,'up_before','down_before')
});

$('.up_before').click(function(e){
    toggleClasses(e.currentTarget,'up_before','down_before');
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
