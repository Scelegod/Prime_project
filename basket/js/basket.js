"use strict"

function saveCartToLs(){
    localStorage.setItem('arr', JSON.stringify(goodsInfo2))
}
let str = localStorage.getItem('arr');
let goodsInfo2 = JSON.parse(str);
console.log(goodsInfo2);

function checkCart(){
    //Проверяю наличие корзины в localStorage
    if(localStorage.getItem('arr') != null){
        goodsInfo2 = JSON.parse(localStorage.getItem('arr'));
    }
}
checkCart();
document.addEventListener('DOMContentLoaded', function(){
let basket__number = document.querySelector('.basket__number');
    
    if(goodsInfo2 == null){

    }else{

        for(let elem of goodsInfo2){
            const goods__basket = document.querySelector('.goods__basket');
            let cartItemHTML = `<div class="goods__block__basket" data-id="${elem.id}">
            <div class="basket__img__text">
            <img src="${elem.imgSrc}" class="basket__img">
                <div class="basket__text">
                <p class="basket__text_categories">${elem.categories}</p>
                <p class="basket__text_goods">${elem.title}</p>
                </div>
                </div>
            <div class="basket__amoynt">
            <p class="basket__amoynt__text">Количество: </p>
            <button class="basket__amoynt__btn" data-action="minus">-</button>
            <p class="basket__amoynt__number" data-count="${elem.id}">${elem.counter}</p>
            <button class="basket__amoynt__btn" data-action="plus">+</button>
            </div>
            <span class="basket__text_price_ruble"><span class="basket__text_price">${elem.price}</span> ₽</span>
            <p class="basket__icons"><i class="bi bi-x-circle" data-del="${elem.id}"></i></p>
            </div>`;
            goods__basket.insertAdjacentHTML('beforeend', cartItemHTML);
        }
    }
toggleGoodsStatus();
});