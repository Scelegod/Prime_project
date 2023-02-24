"use strict"
document.addEventListener('DOMContentLoaded', function(){
    
    let str = localStorage.getItem('arr');
    let goodsInfo2 = JSON.parse(str);
    console.log(goodsInfo2);
    
    for(let elem of goodsInfo2){
    const goods__basket = document.querySelector('.goods__basket');
        let cartItemHTML = `<div class="goods__block__basket" data-id="${elem.id}">
        <div class="basket__img__text">
                <img src="${elem.imgSrc}" class="basket__img">
                <div class="basket__text">
                    <p class="basket__text_categories">${elem.categories}</p>
                    <p class="basket__text_goods">${elem.title}</p>
                </div>
            </div>
            <div class="basket__amoynt">
                <p class="basket__amoynt__text">Количество: </p>
                <button class="basket__amoynt__btn" data-action="minus">-</button>
                <p class="basket__amoynt__number">${elem.counter}</p>
                <button class="basket__amoynt__btn" data-action="plus">+</button>
            </div>
            <span class="basket__text_price_ruble"><span class="basket__text_price">${elem.price}</span> ₽</span>
            <p class="basket__icons"><i class="bi bi-x-circle"></i></p>
        </div>`;
        goods__basket.insertAdjacentHTML('beforeend', cartItemHTML);
    }

// for(let elem of goodsInfo2){
//     let div = document.createElement('div');
//     div.setAttribute('class', 'goods__block__basket')
//     div.setAttribute('data-id', elem.id);
    
//     let div2 = document.createElement('div');
//     div2.setAttribute('class', 'basket__img__text');

//     let img = document.createElement('img');
//     img.setAttribute('class', 'basket__img');
//     img.src = elem.imgSrc;
    
//     let div3 = document.createElement('div');
//     div3.setAttribute('class', 'basket__text');

//     let p = document.createElement('p');
//     p.setAttribute('class', 'basket__text_categories');
//     p.textContent = elem.categories;

//     let p2 = document.createElement('p');
//     p2.setAttribute('class', 'basket__text_goods');
//     p2.textContent = elem.title;

//     let div4 = document.createElement('div');
//     div4.setAttribute('class', 'basket__amoynt');

//     let p3 = document.createElement('p');
//     p3.setAttribute('class', 'basket__amoynt__text');
//     p3.textContent = 'Количество:'  ;

//     let button = document.createElement('button');
//     button.setAttribute('class', 'basket__amoynt__btn');
//     button.setAttribute('data-action', 'minus');
//     button.textContent = '-';

//     let p4 = document.createElement('p');
//     p4.setAttribute('class', 'basket__amoynt__number');
//     p4.textContent = elem.counter;

//     let button2 = document.createElement('button');
//     button2.setAttribute('class', 'basket__amoynt__btn');
//     button2.setAttribute('data-action', 'plus');
//     button2.textContent = '+';

//     let span = document.createElement('span');
//     span.setAttribute('class', 'basket__text_price_ruble');
    
//     let span2 = document.createElement('span');
//     span2.setAttribute('class', 'basket__text_price');
//     span2.textContent = elem.price;
    
//     let p5 = document.createElement('p');
//     p5.setAttribute('class', 'basket__icons');

//     let i = document.createElement('i');
//     i.setAttribute('class', 'bi bi-x-circle');

//     goods__basket.appendChild(div);
//     div.appendChild(img);
//     div.appendChild(div3);
//     div3.appendChild(p);
//     div3.appendChild(p2);
//     div.appendChild(div4);
//     div4.appendChild(p3);
//     div4.appendChild(button);
//     div4.appendChild(p4);
//     div4.appendChild(button2);
//     div.appendChild(span);
//     span.appendChild(span2);
//     span.append('₽');
//     div.appendChild(p5);
//     p5.appendChild(i);
    
// }

toggleGoodsStatus();

});