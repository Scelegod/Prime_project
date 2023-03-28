const goods__basket = document.querySelector('.goods__basket');
// const cartStorage = JSON.parse(localStorage.getItem('cart') || "[]");
let cartData = getCartData(), // вытаскиваем все данные корзины
    cartItemHTML = '';
      
    // if(cartData !== null){
    //     let { id, img, title, catigories, price, counter} = items;

    //     for(let items in cartData){
    //         let cartItemHTML = `<div class="goods__block__basket" data-id="${items.id}">
    //         <div class="basket__img__text">
    //         <img src="${items.img}" class="basket__img">
    //         <div class="basket__text">
    //         <p class="basket__text_categories">${items.catigories}</p>
    //         <p class="basket__text_goods">${items.title}</p>
    //         </div>
    //         </div>
    //         <div class="basket__amoynt">
    //         <p class="basket__amoynt__text">Количество: </p>
    //         <button class="basket__amoynt__btn" data-action="minus">-</button>
    //         <p class="basket__amoynt__number" data-count="${items.id}">${items.counter}</p>
    //         <button class="basket__amoynt__btn" data-action="plus">+</button>
    //         </div>
    //         <span class="basket__text_price_ruble"><span class="basket__text_price">${items.price}</span> ₽</span>
    //         <p class="basket__icons"><i class="bi bi-x-circle" data-del="${items.id}"></i></p>
    //         </div>`;
    //         goods__basket.insertAdjacentHTML('beforeend', cartItemHTML);
    //     }
    // }
    if(cartData !== null){
        totalItems = '';
        for(var items in cartData){
            totalItems += `<div class="goods__block__basket" data-id="${items}">
                    <div class="basket__img__text">
                    <img src="${cartData[items][4]}" class="basket__img">
                    <div class="basket__text">
                    <p class="basket__text_categories">${cartData[items][3]}</p>
                    <p class="basket__text_goods">${cartData[items][0]}</p>
                    </div>
                    </div>
                    <div class="basket__amoynt">
                    <p class="basket__amoynt__text">Количество: </p>
                    <button class="basket__amoynt__btn" data-action="minus">-</button>
                    <p class="basket__amoynt__number" data-count="${items}">${cartData[items][2]}</p>
                    <button class="basket__amoynt__btn" data-action="plus">+</button>
                    </div>
                    <span class="basket__text_price_ruble"><span class="basket__text_price">${cartData[items][1]}</span> ₽</span>
                    <p class="basket__icons"><i class="bi bi-x-circle" data-del="${items}"></i></p>
                    </div>`;
        }
        goods__basket.innerHTML = totalItems;
      }

      toggleGoodsStatus(+basket__number.textContent);
    // if(cartData.length){
    // const { id, img, title, catigories, price, counter} = el;
    // cartData.forEach(el => {
        // console.log(el.id);
            // let cartItemHTML = `<div class="goods__block__basket" data-id="${id}">
            // <div class="basket__img__text">
            // <img src="${img}" class="basket__img">
            // <div class="basket__text">
            // <p class="basket__text_categories">${catigories}</p>
            // <p class="basket__text_goods">${title}</p>
            // </div>
            // </div>
            // <div class="basket__amoynt">
            // <p class="basket__amoynt__text">Количество: </p>
            // <button class="basket__amoynt__btn" data-action="minus">-</button>
            // <p class="basket__amoynt__number" data-count="${id}">${counter}</p>
            // <button class="basket__amoynt__btn" data-action="plus">+</button>
            // </div>
            // <span class="basket__text_price_ruble"><span class="basket__text_price">${price}</span> ₽</span>
            // <p class="basket__icons"><i class="bi bi-x-circle" data-del="${id}"></i></p>
            // </div>`;
            // goods__basket.insertAdjacentHTML('beforeend', cartItemHTML);
    // });
    // toggleGoodsStatus();
// }