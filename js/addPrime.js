const new_models__all = document.querySelector('.new_models__all');
const discount__all = document.querySelector('.discount__all');
// let j = 0;

for(let elem in newModels){
    if(elem == "200" || elem == "201"  || elem == "202" || elem == "203"){
        // for(let i = 0; i < 2; i++){
            const div = document.createElement('div');
            div.setAttribute('class', 'new_models__block');
            div.setAttribute('data-id', elem);
        
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'img__btnBasket');
        
            const img = document.createElement('img');
            img.setAttribute('class', 'block__img');
            img.src = newModels[elem]['src'];
        
            const div3 = document.createElement('div');
            div3.setAttribute('class', 'btnBasket');
            div3.setAttribute('data-art', elem);
            div3.textContent = 'Добавить в корзину';
            
            const p = document.createElement('p');
            p.textContent = newModels[elem]['name'];
            p.setAttribute('class', 'block__text_goods');
            
            const p2 = document.createElement('p');
            p2.textContent = newModels[elem]['catigories'];
            p2.setAttribute('class', 'block__text_categories');
            
            const span = document.createElement('span');
            span.textContent = newModels[elem]['price'];
            span.setAttribute('class', 'block__text_price');
        
            const span2 = document.createElement('span');
            span2.textContent = ' ₽';
            span2.setAttribute('class', 'block__text_price_ruble');
            
            div.setAttribute('class', newModels[elem]['class']);
            new_models__all.appendChild(div);
            div.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div.appendChild(p);
            div.appendChild(p2);
            div.appendChild(span2);
            span2.prepend(span);
        
            // div3.addEventListener('click', addToCart);

        // }

    }
    // j += 1;

}

for(let elem in discount){
    if(elem == "300" || elem == "301"  || elem == "302" || elem == "303"){
        // for(let i = 0; i < 2; i++){
            const div = document.createElement('div');
            div.setAttribute('class', 'discount__block');
            div.setAttribute('data-id', elem);
        
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'img__btnBasket');
        
            const img = document.createElement('img');
            img.setAttribute('class', 'block__img');
            img.src = discount[elem]['src'];
        
            const div3 = document.createElement('div');
            div3.setAttribute('class', 'btnBasket');
            div3.setAttribute('data-art', elem);
            div3.textContent = 'Добавить в корзину';
            
            const p = document.createElement('p');
            p.textContent = discount[elem]['name'];
            p.setAttribute('class', 'block__text_goods');
            
            const p2 = document.createElement('p');
            p2.textContent = discount[elem]['catigories'];
            p2.setAttribute('class', 'block__text_categories');
            
            const p3 = document.createElement('p');
            p3.textContent = discount[elem]['oldprice'];
            p3.setAttribute('class', 'discount__items__oldprice');

            const span = document.createElement('span');
            span.textContent = discount[elem]['price'];
            span.setAttribute('class', 'block__text_price');
        
            const span2 = document.createElement('span');
            span2.textContent = ' ₽';
            span2.setAttribute('class', 'block__text_price_ruble discount-price');
            
            div.setAttribute('class', discount[elem]['class']);
            discount__all.appendChild(div);
            div.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div.appendChild(p);
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(span2);
            span2.prepend(span);
        
            // div3.addEventListener('click', addToCart);

        // }

    }
    // j += 1;

}