import Store from "../components/Modal/Store";
import History from '../components/Modal/History';
import Stats from '../components/Modal/Stats';

export const modalFunctions = (modal) => {
    const body = document.getElementsByClassName('global')[0];
    const cards = document.getElementsByClassName('card');

    if (modal.enable) {
        body.classList.add('global-modal');
        cardModalStyle(cards, 'add');
    } else {
        body.classList.remove('global-modal');
        cardModalStyle(cards, 'remove');
    }
}

const cardModalStyle = (cards, type) => {
    for (const item in cards) {
        const list = cards[item].classList;
        if (list !== undefined) {
            type === 'add' ? list.add('card-modal') : list.remove('card-modal');
        }
    }
}

export const defaultConfig = [
    {
        name: 'Compras',
        icon: <i className="fas fa-shopping-bag"></i>,
        type: 'store',
        component: <Store />
    },
    {
        name: 'Histórico',
        icon: <i className="fas fa-history"></i>,
        type: 'history',
        component: <History />
    },
    {
        name: 'Estatísticas',
        icon: <i className="far fa-chart-bar"></i>,
        type: 'stats',
        component: <Stats />
    }
];

export const formatToMoney = (number) => {
    let maxDecimal = 2, decSeparator = ',', thoSeperator = '.';
    let sign = number < 0 ? '-' : '';
    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(maxDecimal)));
    var j = (j = i.length) > 3 ? j % 3 : 0; // eslint-disable-line no-use-before-define
  
    return sign + 
      (j ? i.substr(0, j) + thoSeperator : '') +
      i.substr(j).replace(/(\decSeparator{3})(?=\decSeparator)/g, "$1" + thoSeperator) +
      (maxDecimal ? decSeparator + Math.abs(number - i).toFixed(maxDecimal).slice(2) : '');
  }