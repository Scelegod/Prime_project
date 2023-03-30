const goods__basket = document.querySelector('.goods__basket');
let cartData = getCartData(); // вытаскиваем все данные корзины
      
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
              <button class="basket__amoynt__btn" data-action="minus"><img data-action="minus" class="basket__icons__minus" src="./icon/minus.svg"></button>
              <p class="basket__amoynt__number" data-count="${items}">${cartData[items][2]}</p>
              <button class="basket__amoynt__btn" data-action="plus"><img data-action="plus" class="basket__icons__plus" src="./icon/plus.svg"></button>
              </div>
              <span class="basket__text_price_ruble"><span class="basket__text_price">${cartData[items][1]}</span> ₽</span>
              <p class="basket__icons"><img class="basket__icons__cancel" src="./icon/cancel.svg" data-del="${items}"></p>
              </div>`;
  }
  goods__basket.innerHTML = totalItems;
}
toggleGoodsStatus(+basket__number.textContent);