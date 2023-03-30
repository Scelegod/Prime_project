//_____________________________Суммирование цен товаров в корзине_________________________________________
function calcGoodsPrice(){
    let goods__block__basket = document.querySelectorAll('.goods__block__basket');
    let sum__price__number = document.querySelector('.sum__price__number');
    let basket__number = document.querySelector('.basket__number');
    let basket__num = document.querySelector('.basket__num');

    let totalAmount = 0;
    let totalPrice = 0;

    goods__block__basket.forEach(function(item){
        let amountEl = item.querySelector('.basket__amoynt__number');
        let priceEl = item.querySelector('.basket__text_price');
        let currentPrice = +amountEl.textContent * +priceEl.textContent;
        totalPrice += currentPrice;

        let currentAmount = +amountEl.textContent;
        totalAmount += currentAmount;
    })
    sum__price__number.textContent = totalPrice;
    basket__number.textContent = totalAmount;
    basket__num.textContent = totalAmount;
    localStorage.setItem('basket__number', JSON.stringify(basket__number.textContent));
}