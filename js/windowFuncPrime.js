//_______________________________Функция отслежиния при наведении товара___________________________________________________________________
window.addEventListener('mouseover', function func(event){
    if(event.target.closest('.new_models__block')){
        let goods__block = event.target.closest('.new_models__block');
        let btnBasket = goods__block.querySelector('.btnBasket');
        btnBasket.setAttribute('class', 'btnBasket_hover');
    }
    if(event.target.closest('.discount__block')){
        let goods__block = event.target.closest('.discount__block');
        let btnBasket = goods__block.querySelector('.btnBasket');
        btnBasket.setAttribute('class', 'btnBasket_hover');
    }
});
//_______________________________Функция отслежиния при потери товара___________________________________________________________________
window.addEventListener('mouseout', function func(event){
    // console.log(event.target.closest('.goods__block'));
    if(event.target.closest('.new_models__block')){
        let goods__block = event.target.closest('.new_models__block');
        let btnBasket = goods__block.querySelector('.btnBasket_hover');
        btnBasket.setAttribute('class', 'btnBasket');
    }
    if(event.target.closest('.discount__block')){
        let goods__block = event.target.closest('.discount__block');
        let btnBasket = goods__block.querySelector('.btnBasket_hover');
        btnBasket.setAttribute('class', 'btnBasket');
    }
});