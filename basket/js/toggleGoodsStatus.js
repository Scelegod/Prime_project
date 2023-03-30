//_______________________________Функция отслежиния есть ли товар в корзине___________________________________________________________________
function toggleGoodsStatus(){
    let making__order = document.querySelector('.making__order');
    let goods__basket = document.querySelector('.goods__basket');
    let basket__empty__text = document.querySelector('.basket__empty__text');
    
    if(goods__basket.children.length > 0){
        // console.log(goods__basket.children);
        goods__basket.style.height = "auto";
        basket__empty__text.classList.add('dispNone');
        making__order.classList.remove('dispNone');
    }else{
        goods__basket.style.height = "140px";
        basket__empty__text.classList.remove('dispNone');
        making__order.classList.add('dispNone');
    }
    calcGoodsPrice()
}