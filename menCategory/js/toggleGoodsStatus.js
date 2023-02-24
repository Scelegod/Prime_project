//_______________________________Функция отслежиния есть ли товар в корзине___________________________________________________________________
function toggleGoodsStatus(){
    let making__order = document.querySelector('.making__order');
    let goods__basket = document.querySelector('.goods__basket');
    let basket__empty__text = document.querySelector('.basket__empty__text');
    
    if(goods__basket.children.length > 0){
        // console.log(goods__basket.children);
        basket__empty__text.classList.add('dispNone');
        making__order.classList.remove('dispNone');
    }else{
        basket__empty__text.classList.remove('dispNone');
        making__order.classList.add('dispNone');
        // console.log('empty');
    }
    calcGoodsPrice()
}