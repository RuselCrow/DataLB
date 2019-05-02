import './menu.less';

/*export default function (array, className) {
    var menu = document.createElement("ul");
    menu.className = className;
    var listIems = '';
    array.forEach(function(item){
        listIems += '<li>' + item + '</li>';
    });
    menu.innerHTML = listIems;
    return menu;
};*/

export default function (array, className) {
    var menu = document.createElement("ul");
    menu.className = className;
    var listIems = '';
    array.forEach(function(item){
        listIems += item;
    });
    menu.innerHTML = listIems;
    return menu;
};
