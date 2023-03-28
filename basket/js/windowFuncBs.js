window.addEventListener('click', function(event){
    checkCart();

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
            for(let i of cartStorage){
                // console.log(i);
                if(counti.dataset.count == i.id){
                    for (let j = cartStorage.length; j--; ) {
                        if (cartStorage[j].id === i.id) {
                            cartStorage.splice(j, 1);
                        }
                      }
                }
            }
            toggleGoodsStatus();
            calcGoodsPrice();
            saveCartToLs();
        }
        if(+counter.textContent > 1 ){
            counter.textContent = --counter.textContent;
            let gbb = event.target.closest('.goods__block__basket');
            let counti = gbb.querySelector('[data-count="'+gbb.dataset.id+'"]');
            for(let i of cartStorage){
                console.log(i);
                if(counti.dataset.count == i.id){
                    i.counter--;
                }
            }
            calcGoodsPrice();
            saveCartToLs();
        }
    }
    //_______________________________Условия нажатия по...___________________________________________________________________
    if(event.target.dataset.action === 'plus'){
        counter.textContent = ++counter.textContent;
        let gbb = event.target.closest('.goods__block__basket');
        let counti = gbb.querySelector('[data-count="'+gbb.dataset.id+'"]');
        for(let i of cartStorage){
            if(counti.dataset.count == i.id){
                i.counter++;
            }
        }
        calcGoodsPrice()
        saveCartToLs();
    }
    
    //_______________________________Функция отслежиния есть ли товар в корзине___________________________________________________________________
    if(event.target.closest('.bi-x-circle')){
        event.target.closest('.goods__block__basket').remove();
        let gbb = event.target.closest('.goods__block__basket');
            let del = gbb.querySelector('[data-del="'+gbb.dataset.id+'"]');
            for(let i of cartStorage){
                if(del.dataset.del == i.id){
                    for (let j = cartStorage.length; j--; ) {
                        if (cartStorage[j].id === i.id) {
                            cartStorage.splice(j, 1);
                        }
                      }
                }
            }
        toggleGoodsStatus();
        calcGoodsPrice();
        saveCartToLs();

    }
});