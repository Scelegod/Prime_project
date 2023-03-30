window.addEventListener('click', function(event){

    let counter;
    //_______________________________Условия нажатия по...___________________________________________________________________
    if(event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus'){
        let basket__amoynt = event.target.closest('.basket__amoynt');
        counter = basket__amoynt.querySelector('.basket__amoynt__number');

    }

    if(event.target.dataset.action === 'minus'){
        if(+counter.textContent === 1 ){
            event.target.closest('.goods__block__basket').remove();
            let gbb = event.target.closest('.goods__block__basket');
            let counti = gbb.querySelector('[data-count="'+gbb.dataset.id+'"]');
            for(let i in cartData){
                if(counti.dataset.count == i){
                    delete cartData[i];
                }
            }
            toggleGoodsStatus();
            calcGoodsPrice();
            setCartData(cartData);
        }
        if(+counter.textContent > 1 ){
            counter.textContent = --counter.textContent;
            let gbb = event.target.closest('.goods__block__basket');
            let counti = gbb.querySelector('[data-count="'+gbb.dataset.id+'"]');
            for(let i in cartData){
                if(counti.dataset.count == i){
                    cartData[i][2]--;
                }
            }
            calcGoodsPrice();
            setCartData(cartData);
        }
    }
    //_______________________________Условия нажатия по...___________________________________________________________________
    if(event.target.dataset.action === 'plus'){
        counter.textContent = ++counter.textContent;
        let gbb = event.target.closest('.goods__block__basket');
        let counti = gbb.querySelector('[data-count="'+gbb.dataset.id+'"]');
        for(let i in cartData){
            if(counti.dataset.count == i){
                cartData[i][2]++;
            }
        }
        calcGoodsPrice()
        setCartData(cartData);
    }
    
    //_______________________________Функция отслежиния есть ли товар в корзине___________________________________________________________________
    if(event.target.closest('.basket__icons__cancel')){
        event.target.closest('.goods__block__basket').remove();
        let gbb = event.target.closest('.goods__block__basket');
            let del = gbb.querySelector('[data-del="'+gbb.dataset.id+'"]');
            for(let i in cartData){
                if(del.dataset.del == i){
                    delete cartData[i];
                }
            }
        toggleGoodsStatus();
        calcGoodsPrice();
        setCartData(cartData);

    }
});