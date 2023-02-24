
let goodsInfo = {};
let goodsInfo2 = [];

//_____________________________Клик по странице сайта________________________________________________________________________
window.addEventListener('click', function(event){
    if(event.target.closest('.btnBasket_hover')){
        let goods__block = event.target.closest('.goods__block');
        
        // console.log(goods__block);
        goodsInfo = {
            id: goods__block.dataset.id,
            imgSrc: goods__block.querySelector('.block__img').getAttribute('src'),
            title: goods__block.querySelector('.block__text_goods').textContent,
            categories: goods__block.querySelector('.block__text_categories').textContent,
            price: goods__block.querySelector('.block__text_price').textContent,
            counter: '1'
        }
        goodsInfo2.push(goodsInfo);
        // console.log(goodsInfo2.length);
        // basket__number.textContent = goodsInfo2.length;
        localStorage.setItem('arr', JSON.stringify(goodsInfo2));
        let basket__number = document.querySelector('.basket__number');
        let str = localStorage.getItem('arr');
        goodsInfo2 = JSON.parse(str);
        console.log(goodsInfo2);
        basket__number.textContent = goodsInfo2.length;
    }
    // console.log(goodsInfo2);
});
//_______________________________Функция отслежиния при наведении товара___________________________________________________________________
window.addEventListener('mouseover', function func(event){
    // console.log(event.target.closest('.goods__block'));
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