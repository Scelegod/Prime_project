
let goodsInfo = {};
let goodsInfo2 = [];
let str2 = localStorage.getItem('arr');
        
checkCart();
document.addEventListener('DOMContentLoaded', () =>{
    let number = localStorage.getItem('basket__number');
    let number2 = JSON.parse(number);
    let basket__number = document.querySelector('.basket__number');
    basket__number.textContent = number2;
});
        //_____________________________Клик по странице сайта________________________________________________________________________
window.addEventListener('click', function(event){
    if(event.target.closest('.btnBasket_hover')){
        let goods__block = event.target.closest('.goods__block');
        
        goodsInfo = {
            id: goods__block.dataset.id,
            imgSrc: goods__block.querySelector('.block__img').getAttribute('src'),
            title: goods__block.querySelector('.block__text_goods').textContent,
            categories: goods__block.querySelector('.block__text_categories').textContent,
            price: goods__block.querySelector('.block__text_price').textContent,
            counter: '1'
        }
        let goods__basket = document.querySelector('.goods__basket');

        let itemInCart = goods__basket.querySelector('[data-id="' + goodsInfo.id + '"]');
        if(itemInCart){
            // console.log(itemInCart.dataset.id);
            counterElem = itemInCart.querySelector('.basket__amoynt__number');
            // counterElem.textContent = +counterElem.textContent + +goodsInfo.counter;
            for(let i of goodsInfo2){
                if(itemInCart.dataset.id == i.id){
                    i.counter++;
                }
            }
        }else{
            let cartItemHTML = `<div class="goods__block__basket dispNone" data-id="${goodsInfo.id}">
                                    <div class="basket__img__text">
                                        <img src="${goodsInfo.imgSrc}" class="basket__img">
                                        <div class="basket__text">
                                            <p class="basket__text_categories">${goodsInfo.categories}</p>
                                            <p class="basket__text_goods">${goodsInfo.title}</p>
                                        </div>
                                    </div>
                                    <div class="basket__amoynt">
                                        <p class="basket__amoynt__text">Количество: </p>
                                        <button class="basket__amoynt__btn" data-action="minus">-</button>
                                        <p class="basket__amoynt__number">${goodsInfo.counter}</p>
                                        <button class="basket__amoynt__btn" data-action="plus">+</button>
                                    </div>
                                    <span class="basket__text_price_ruble"><span class="basket__text_price">${goodsInfo.price}</span> ₽</span>
                                    <p class="basket__icons"><i class="bi bi-x-circle"></i></p>
                                </div>`;
            goods__basket.insertAdjacentHTML('beforeend', cartItemHTML);
            goodsInfo2.push(goodsInfo);
        }
        localStorage.setItem('arr', JSON.stringify(goodsInfo2));
        let str = localStorage.getItem('arr');
        goodsInfo2 = JSON.parse(str);

        let baskeNumber = 0;
        let basket__number = document.querySelector('.basket__number');
        for(let counter of goodsInfo2){
            baskeNumber = baskeNumber + +counter.counter; 
            basket__number.textContent = baskeNumber;
        }
    }
});
//_______________________________Функция отслежиния при наведении товара___________________________________________________________________
window.addEventListener('mouseover', function func(event){
    if(event.target.closest('.goods__block')){
        let goods__block = event.target.closest('.goods__block');
        let btnBasket = goods__block.querySelector('.btnBasket');
        btnBasket.setAttribute('class', 'btnBasket_hover');
    }
});
//_______________________________Функция отслежиния при потери товара___________________________________________________________________
window.addEventListener('mouseout', function func(event){
    // console.log(event.target.closest('.goods__block'));
    if(event.target.closest('.goods__block')){
        let goods__block = event.target.closest('.goods__block');
        let btnBasket = goods__block.querySelector('.btnBasket_hover');
        btnBasket.setAttribute('class', 'btnBasket');
    }
});
    function checkCart(){
        //Проверяю наличие корзины в localStorage
        if(localStorage.getItem('arr') != null){
            goodsInfo2 = JSON.parse(localStorage.getItem('arr'));
        }
    }