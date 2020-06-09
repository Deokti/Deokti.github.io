const buttonCalculate = $All('.button_buy');
const calculateItemClose = $All('.calculate-item__close');

buttonCalculate.forEach(event => {
    event.addEventListener('click', function ({target}) {
        let dataAttribute = target.getAttribute('data-calculate');
        
        $All('.calculate-item').forEach(del => {
            del.style.display = 'none';
        });
        $(`.calculate-item[data-calculate="${dataAttribute}"]`).style.display = 'block';
        
    });
});

calculateItemClose.forEach(event => {
    event.addEventListener('click', function() {
        $All('.calculate-item').forEach(del => {
            del.style.display = 'none';
        });
    });
});


function calculate() {
    /* SIMPLE */
    let amountSimle = $('.calculate-item_london-dekstop .calculate-item__number');
    const plusSimple = $('.calculate-item_london-dekstop .plus_simple');
    const minusSimple = $('.calculate-item_london-dekstop .minus_simple');
    /* SIMPLE */
    /* VIP */
    let amountVip = $('.calculate-item_london-dekstop .calculate-item__number_vip');
    const plusVip = $('.calculate-item_london-dekstop .plus_vip');
    const minusVip = $('.calculate-item_london-dekstop .minus_vip');
    console.log(plusVip, minusVip, amountVip)
    /* VIP */

    let finallyPrice = $('.calculate-item_london-dekstop .calculate-item__price');

    plusSimple.addEventListener('click', event => {
        if (amountSimle.textContent < 10) {
            amountSimle.textContent;
            let sumOne = amountSimle.textContent++ * 70;
            finallyPrice.textContent = `${sumOne + 70}$`;
        }
    });
    minusSimple.addEventListener('click', event => {
        if (amountSimle.textContent > 0) {
            amountSimle.textContent;
            let sumOne = amountSimle.textContent-- * 70;
            finallyPrice.textContent = `${sumOne - 70}$`;
        }
    });
    plusVip.addEventListener('click', event => {
        if (amountVip.textContent < 10) {
            amountVip.textContent;
            let sumTwo = amountVip.textContent++ * 143.5;
            finallyPrice.textContent = `${sumTwo + 143.5}$`;
        }
    });
    minusVip.addEventListener('click', event => {
        if (amountVip.textContent > 0) {
            amountVip.textContent;
            let sumTwo = amountVip.textContent-- * 143.5;
            finallyPrice.textContent = `${sumTwo - 143.5}$`;
        }
    });
}
calculate();
