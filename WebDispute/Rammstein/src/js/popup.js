// (function() {
//     let amount = document.querySelector('.buy-popup__price');
//     const plus = document.querySelector('.buy-popup__plus');
//     const minus = document.querySelector('.buy-popup__minus');
//     let finallyPrice = document.querySelector('.buy-popup__final-price');
//     let sum = 120;

//     let mountInner = Number(amount.textContent);
//     plus.addEventListener('click', event => {
//         amount.textContent++
//         let sum2 = mountInner++ * sum;
//         finallyPrice.innerHTML = `${sum2 + 120}$`;
//     });
//     minus.addEventListener('click', event => {
//         if (amount.textContent >= 1) {
//             amount.textContent--;
//             let sum2 = mountInner-- * sum;
//             console.log(sum2);
//             finallyPrice.innerHTML = `${sum2 - 120}$`;
//         }
//     });
// })();

