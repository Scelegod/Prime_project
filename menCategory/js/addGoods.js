

const men__all__goods = document.querySelector('.men__all__goods');
let j = 0;

for(let elem of goods){
    j += 1;
    const div = document.createElement('div');
    div.setAttribute('class', 'goods__block');
    div.setAttribute('data-id', j);
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'img__btnBasket');

    const img = document.createElement('img');
    img.setAttribute('class', 'block__img');
    img.src = elem.src;

    const div3 = document.createElement('div');
    div3.setAttribute('class', 'btnBasket');
    div3.textContent = 'Добавить в корзину';
    
    const p = document.createElement('p');
    p.textContent = elem.name;
    p.setAttribute('class', 'block__text_goods');
    
    const p2 = document.createElement('p');
    p2.textContent = elem.catigories;
    p2.setAttribute('class', 'block__text_categories');
    
    const span = document.createElement('span');
    span.textContent = elem.price;
    span.setAttribute('class', 'block__text_price');

    const span2 = document.createElement('span');
    span2.textContent = ' ₽';
    span2.setAttribute('class', 'block__text_price_ruble');
    
    div.setAttribute('class', elem.class);
    men__all__goods.appendChild(div);
    div.appendChild(div2);
    div2.appendChild(img);
    div2.appendChild(div3);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(span2);
    span2.prepend(span);
}