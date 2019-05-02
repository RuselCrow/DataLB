import '../../components/main'
import './product.less';
import '../../components/header/header'
import '../../components/footer/footer'
import '../../components/UI/currLocation.less'
import '../../components/UI/uiMixins.less'
import '../../components/UI/geometry.less';
import '../../components/UI/listNav.less';

import '../../components/UI/uiMixins'
import createMenu from '../../components/menu/menu';
import createLi from '../../components/menu/createLi';

var liElements=[createLi('Описание','#','active'),createLi('Характеристики','#',''),
    createLi('Отзывы','#','')];
var menu = createMenu(liElements,'');

$(".listNav").append(menu);