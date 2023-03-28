"use strict"

function saveCartToLs(){
    localStorage.setItem('cart', JSON.stringify(cartData))
}
let str = localStorage.getItem('arr');
let goodsInfo2 = JSON.parse(str);

function checkCart(){
    //Проверяю наличие корзины в localStorage
    if(localStorage.getItem('arr') != null){
        goodsInfo2 = JSON.parse(localStorage.getItem('arr'));
    }
}
checkCart();