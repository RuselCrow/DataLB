import '../../components/main'
import './brend.less';
import '../../components/header/header'
import '../../components/footer/footer'
import '../../components/UI/currLocation.less'
import '../../components/UI/uiMixins.less'
import '../../components/UI/listNav.less'

import createMenu from '../../components/menu/menu';
import createLi from '../../components/menu/createLi';

var liSales=[createLi('Все','#','active'),
    createLi('Сантехника','#',''),createLi('Электроинструмент','#',''),
    createLi('Расходные материалы','#',''),createLi('Электрика','#',''),
    createLi('Ручной инструмент','#','')];
var salesMenu = createMenu(liSales,'');

$(".listNav").append(salesMenu);
