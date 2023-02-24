window.addEventListener('click', function(event){
    let counter;
    //_______________________________Условия нажатия по...___________________________________________________________________
    if(event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus'){
        let basket__amoynt = event.target.closest('.basket__amoynt');
        counter = basket__amoynt.querySelector('.basket__amoynt__number');
        
    }

    //_______________________________Условия нажатия по...___________________________________________________________________
    if(event.target.dataset.action === 'minus'){
        if(+counter.textContent === 1 ){
            event.target.closest('.goods__block__basket').remove();
            toggleGoodsStatus();
            calcGoodsPrice()
        }
        if(+counter.textContent > 1 ){
            counter.textContent = --counter.textContent;
            calcGoodsPrice()
        }
    }
    //_______________________________Условия нажатия по...___________________________________________________________________
    if(event.target.dataset.action === 'plus'){
        counter.textContent = ++counter.textContent;
        calcGoodsPrice()
        // toggleGoodsStatus();
    }
    
    //_______________________________Функция отслежиния есть ли товар в корзине___________________________________________________________________
    // console.log(event.target);
    if(event.target.closest('.bi-x-circle')){
        event.target.closest('.goods__block__basket').remove();
        toggleGoodsStatus();
        calcGoodsPrice()

    }
});