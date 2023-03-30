
for(let elem in allGoodsTest){
    if(window.location.href.endsWith("/menCategory.html")){
        const men__goods = document.querySelector('.men__goods');
        if(allGoodsTest[elem]['dataCatigories'] == 'men'  && allGoodsTest[elem]['dataType'] != 'discount'){
            
            
            const div = document.createElement('div');
            div.setAttribute('class', 'goods__block');
            div.setAttribute('data-id', elem);
            
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'img__btnBasket');
        
            const img = document.createElement('img');
            img.setAttribute('class', 'block__img');
            img.src = allGoodsTest[elem]['src'];
        
            const div3 = document.createElement('div');
            div3.setAttribute('class', 'btnBasket');
            div3.setAttribute('data-art', elem);
            div3.textContent = 'Добавить в корзину';
            
            const p = document.createElement('p');
            p.textContent = allGoodsTest[elem]['name'];
            p.setAttribute('class', 'block__text_goods');
            
            const p2 = document.createElement('p');
            p2.textContent = allGoodsTest[elem]['catigories'];
            p2.setAttribute('class', 'block__text_categories');
            
            const span = document.createElement('span');
            span.textContent = allGoodsTest[elem]['price'];
            span.setAttribute('class', 'block__text_price');
        
            const span2 = document.createElement('span');
            span2.textContent = ' ₽';
            span2.setAttribute('class', 'block__text_price_ruble');
            
            div.setAttribute('class', allGoodsTest[elem]['class']);
            men__goods.appendChild(div);
            div.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div.appendChild(p);
            div.appendChild(p2);
            div.appendChild(span2);
            span2.prepend(span);
        }

        if(allGoodsTest[elem]['dataCatigories'] == 'men' && allGoodsTest[elem]['dataType'] == 'discount'){
            const div = document.createElement('div');
            div.setAttribute('class', 'discount__block');
            div.setAttribute('data-id', elem);
            
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'img__btnBasket');
            
            const img = document.createElement('img');
            img.setAttribute('class', 'block__img');
            img.src = allGoodsTest[elem]['src'];
            
            const div3 = document.createElement('div');
            div3.setAttribute('class', 'btnBasket');
            div3.setAttribute('data-art', elem);
            div3.textContent = 'Добавить в корзину';
                
            const p = document.createElement('p');
            p.textContent = allGoodsTest[elem]['name'];
            p.setAttribute('class', 'block__text_goods');
                
            const p2 = document.createElement('p');
            p2.textContent = allGoodsTest[elem]['catigories'];
            p2.setAttribute('class', 'block__text_categories');
                
            const p3 = document.createElement('p');
            p3.textContent = allGoodsTest[elem]['oldprice'];
            p3.setAttribute('class', 'discount__items__oldprice');
    
            const span = document.createElement('span');
            span.textContent = allGoodsTest[elem]['price'];
            span.setAttribute('class', 'block__text_price');
            
            const span2 = document.createElement('span');
            span2.textContent = ' ₽';
            span2.setAttribute('class', 'block__text_price_ruble discount-price');
                
            div.setAttribute('class', allGoodsTest[elem]['class']);
            men__goods.appendChild(div);
            div.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div.appendChild(p);
            div.appendChild(p2);
            div.appendChild(span2);
            div.appendChild(p3);
            span2.prepend(span);
        }
    }

    if(window.location.href.endsWith("womenCategory.html")){
        const women__goods = document.querySelector('.women__goods');
        if(allGoodsTest[elem]['dataCatigories'] == 'women'  && allGoodsTest[elem]['dataType'] != 'discount'){
            const div = document.createElement('div');
            div.setAttribute('class', 'goods__block');
            div.setAttribute('data-id', elem);
        
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'img__btnBasket');
        
            const img = document.createElement('img');
            img.setAttribute('class', 'block__img');
            img.src = allGoodsTest[elem]['src'];
        
            const div3 = document.createElement('div');
            div3.setAttribute('class', 'btnBasket');
            div3.setAttribute('data-art', elem);
            div3.textContent = 'Добавить в корзину';
            
            const p = document.createElement('p');
            p.textContent = allGoodsTest[elem]['name'];
            p.setAttribute('class', 'block__text_goods');
            
            const p2 = document.createElement('p');
            p2.textContent = allGoodsTest[elem]['catigories'];
            p2.setAttribute('class', 'block__text_categories');
            
            const span = document.createElement('span');
            span.textContent = allGoodsTest[elem]['price'];
            span.setAttribute('class', 'block__text_price');
        
            const span2 = document.createElement('span');
            span2.textContent = ' ₽';
            span2.setAttribute('class', 'block__text_price_ruble');
            
            div.setAttribute('class', allGoodsTest[elem]['class']);
            women__goods.appendChild(div);
            div.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div.appendChild(p);
            div.appendChild(p2);
            div.appendChild(span2);
            span2.prepend(span);
        }

        if(allGoodsTest[elem]['dataCatigories'] == 'women' && allGoodsTest[elem]['dataType'] == 'discount'){
            const div = document.createElement('div');
            div.setAttribute('class', 'discount__block');
            div.setAttribute('data-id', elem);
            
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'img__btnBasket');
            
            const img = document.createElement('img');
            img.setAttribute('class', 'block__img');
            img.src = allGoodsTest[elem]['src'];
            
            const div3 = document.createElement('div');
            div3.setAttribute('class', 'btnBasket');
            div3.setAttribute('data-art', elem);
            div3.textContent = 'Добавить в корзину';
                
            const p = document.createElement('p');
            p.textContent = allGoodsTest[elem]['name'];
            p.setAttribute('class', 'block__text_goods');
                
            const p2 = document.createElement('p');
            p2.textContent = allGoodsTest[elem]['catigories'];
            p2.setAttribute('class', 'block__text_categories');
                
            const p3 = document.createElement('p');
            p3.textContent = allGoodsTest[elem]['oldprice'];
            p3.setAttribute('class', 'discount__items__oldprice');
    
            const span = document.createElement('span');
            span.textContent = allGoodsTest[elem]['price'];
            span.setAttribute('class', 'block__text_price');
            
            const span2 = document.createElement('span');
            span2.textContent = ' ₽';
            span2.setAttribute('class', 'block__text_price_ruble discount-price');
                
            div.setAttribute('class', allGoodsTest[elem]['class']);
            women__goods.appendChild(div);
            div.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div.appendChild(p);
            div.appendChild(p2);
            div.appendChild(span2);
            div.appendChild(p3);
            span2.prepend(span);
        }
        }

    if(window.location.href.endsWith("index.html")){
        const new_models__all = document.querySelector('.new_models__all');
        if(elem == "800" || elem == "801"  || elem == "802" || elem == "803"){

            const div = document.createElement('div');
            div.setAttribute('class', 'new_models__block');
            div.setAttribute('data-id', elem);
        
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'img__btnBasket');
        
            const img = document.createElement('img');
            img.setAttribute('class', 'block__img');
            img.src = allGoodsTest[elem]['src'];
        
            const div3 = document.createElement('div');
            div3.setAttribute('class', 'btnBasket');
            div3.setAttribute('data-art', elem);
            div3.textContent = 'Добавить в корзину';
            
            const p = document.createElement('p');
            p.textContent = allGoodsTest[elem]['name'];
            p.setAttribute('class', 'block__text_goods');
            
            const p2 = document.createElement('p');
            p2.textContent = allGoodsTest[elem]['catigories'];
            p2.setAttribute('class', 'block__text_categories');
            
            const span = document.createElement('span');
            span.textContent = allGoodsTest[elem]['price'];
            span.setAttribute('class', 'block__text_price');
        
            const span2 = document.createElement('span');
            span2.textContent = ' ₽';
            span2.setAttribute('class', 'block__text_price_ruble');
            
            div.setAttribute('class', allGoodsTest[elem]['class']);
            new_models__all.appendChild(div);
            div.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div.appendChild(p);
            div.appendChild(p2);
            div.appendChild(span2);
            span2.prepend(span);
        }

        const discount__all = document.querySelector('.discount__all');
        if(elem == "1200" || elem == "1201"  || elem == "1202" || elem == "1203"){
            const div = document.createElement('div');
            div.setAttribute('class', 'discount__block');
            div.setAttribute('data-id', elem);
            
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'img__btnBasket');
            
            const img = document.createElement('img');
            img.setAttribute('class', 'block__img');
            img.src = allGoodsTest[elem]['src'];
            
            const div3 = document.createElement('div');
            div3.setAttribute('class', 'btnBasket');
            div3.setAttribute('data-art', elem);
            div3.textContent = 'Добавить в корзину';
                
            const p = document.createElement('p');
            p.textContent = allGoodsTest[elem]['name'];
            p.setAttribute('class', 'block__text_goods');
                
            const p2 = document.createElement('p');
            p2.textContent = allGoodsTest[elem]['catigories'];
            p2.setAttribute('class', 'block__text_categories');
                
            const p3 = document.createElement('p');
            p3.textContent = allGoodsTest[elem]['oldprice'];
            p3.setAttribute('class', 'discount__items__oldprice');
    
            const span = document.createElement('span');
            span.textContent = allGoodsTest[elem]['price'];
            span.setAttribute('class', 'block__text_price');
            
            const span2 = document.createElement('span');
            span2.textContent = ' ₽';
            span2.setAttribute('class', 'block__text_price_ruble discount-price');
                
            div.setAttribute('class', allGoodsTest[elem]['class']);
            discount__all.appendChild(div);
            div.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div.appendChild(p);
            div.appendChild(p2);
            div.appendChild(span2);
            div.appendChild(p3);
            span2.prepend(span);
        }

        
    }
}