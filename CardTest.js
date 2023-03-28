const goods__basket = document.querySelector('.goods__basket');
const cartStorage = JSON.parse(localStorage.getItem('cart') || "[]");

if(cartStorage.length){
    cartStorage.forEach(el => {
        const { id, img, title, catigories, price, counter} = el;
        console.log(el.id);
        if(el.id != el.id){
            el.counter += 1;
        }else{

            let cartItemHTML = `<div class="goods__block__basket" data-id="${id}">
            <div class="basket__img__text">
            <img src="${img}" class="basket__img">
            <div class="basket__text">
            <p class="basket__text_categories">${catigories}</p>
            <p class="basket__text_goods">${title}</p>
            </div>
            </div>
            <div class="basket__amoynt">
            <p class="basket__amoynt__text">Количество: </p>
            <button class="basket__amoynt__btn" data-action="minus">-</button>
            <p class="basket__amoynt__number" data-count="${id}">${counter}</p>
            <button class="basket__amoynt__btn" data-action="plus">+</button>
            </div>
            <span class="basket__text_price_ruble"><span class="basket__text_price">${price}</span> ₽</span>
            <p class="basket__icons"><i class="bi bi-x-circle" data-del="${id}"></i></p>
            </div>`;
            goods__basket.insertAdjacentHTML('beforeend', cartItemHTML);
        }
    });
    toggleGoodsStatus();
}