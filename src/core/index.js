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
        if (list != undefined) {
            type === 'add' ? list.add('card-modal') : list.remove('card-modal');
        }
    }
}