
//_______________________________Функция отслежиния при наведении товара___________________________________________________________________
window.addEventListener('mouseover', function func(event){
    if(event.type == 'click'){
        if(event.target.closest('.goods__block')){
            window.removeEventListener('mouseover', func);
            btnBasket.setAttribute('class', 'btnBasket');
        }
    }
    if(event.target.closest('.goods__block')){
        let goods__block = event.target.closest('.goods__block');
        let btnBasket = goods__block.querySelector('.btnBasket');
        btnBasket.setAttribute('class', 'btnBasket_hover');
    }
});
//_______________________________Функция отслежиния при потери товара___________________________________________________________________
window.addEventListener('mouseout', function func2(event){
    if(event.target.closest('.goods__block')){
        let goods__block = event.target.closest('.goods__block');
        let btnBasket = goods__block.querySelector('.btnBasket_hover');
        btnBasket.setAttribute('class', 'btnBasket');
    }
});