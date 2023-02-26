window.addEventListener('click', function(event){
    checkCart();

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
            let gbb = event.target.closest('.goods__block__basket');
            // console.log(gbb.dataset.id);
            let counti = gbb.querySelector('[data-count="'+gbb.dataset.id+'"]');
            // console.log(counti.dataset.count);
            for(let i of goodsInfo2){
                // console.log(i);
                if(counti.dataset.count == i.id){
                    for (let j = goodsInfo2.length; j--; ) {
                        if (goodsInfo2[j].id === i.id) {
                            goodsInfo2.splice(j, 1);
                        }
                      }
                }
            }
            console.log(goodsInfo2);
            toggleGoodsStatus();
            calcGoodsPrice();
            saveCartToLs();
        }
        if(+counter.textContent > 1 ){
            counter.textContent = --counter.textContent;
            let gbb = event.target.closest('.goods__block__basket');
            let counti = gbb.querySelector('[data-count="'+gbb.dataset.id+'"]');
            for(let i of goodsInfo2){
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
        for(let i of goodsInfo2){
            if(counti.dataset.count == i.id){
                i.counter++;
            }
        }
        calcGoodsPrice()
        // toggleGoodsStatus();
        saveCartToLs();
    }
    
    //_______________________________Функция отслежиния есть ли товар в корзине___________________________________________________________________
    // console.log(event.target);
    if(event.target.closest('.bi-x-circle')){
        event.target.closest('.goods__block__basket').remove();
        let gbb = event.target.closest('.goods__block__basket');
            // console.log(gbb.dataset.id);
            let del = gbb.querySelector('[data-del="'+gbb.dataset.id+'"]');
            // console.log(del.dataset.del);
            for(let i of goodsInfo2){
                // console.log(i);
                if(del.dataset.del == i.id){
                    for (let j = goodsInfo2.length; j--; ) {
                        if (goodsInfo2[j].id === i.id) {
                            goodsInfo2.splice(j, 1);
                        }
                      }
                }
            }
        toggleGoodsStatus();
        calcGoodsPrice();
        saveCartToLs();

    }
});