import './footer.less';

import createMenu from '../../components/menu/menu';
import createLi from '../../components/menu/createLi';

var liElements=[createLi('О магазине','#','active'),
    createLi('Акции','#'),
    createLi('Документы','#'),
    createLi('Доставка','#'),
    createLi('Оплата','#'),
    createLi('Политика','#'),
    createLi('Контакты','#')];
var menu = createMenu(liElements,'');
$('.footer_nav1').append(menu);

var liElements2=[createLi('Бензоинструмент','#','active'),
    createLi('Электрика','#'),
    createLi('Ручной инструмент','#'),
    createLi('Электроинструмент','#'),
    createLi('Садовая техника и инструмент','#'),
    createLi('Сантехника','#'),
    createLi('Хозяйственные товары','#'),
    createLi('Расходные материалы','#')];
var menu2 = createMenu(liElements2,'');
$('.footer_nav2').append(menu2);
