"use strict"

function saveCartToLs(){
    localStorage.setItem('cart', JSON.stringify(cartData))
}

function checkCart(){
    //Проверяю наличие корзины в localStorage
    if(localStorage.getItem('arr') != null){
        goodsInfo2 = JSON.parse(localStorage.getItem('arr'));
    }
}
checkCart();