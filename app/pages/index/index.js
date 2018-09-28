import './index.less';
import '../../components/main'
import '../../components/header/header'
import '../../components/footer/footer'

import createMenu from '../../components/menu/menu';
import createLi from '../../components/menu/createLi';

var liElements=[createLi('Сантехника','#','active'),createLi('Электрика','#'),
    createLi('Садовая техника','#')];
var menu = createMenu(liElements,'');

var liSales=[createLi('Все','#','active'),
    createLi('Сантехника','#'),createLi('Электроинструмент','#'),
    createLi('Расходные материалы','#'),createLi('Электрика','#'),
    createLi('Ручной инструмент','#')];
var salesMenu = createMenu(liSales,'');
