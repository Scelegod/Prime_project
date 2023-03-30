

const all__goods = document.querySelector('.all__goods');
// let j = 0;

for(let elem in goods){
    // j += 1;
    const div = document.createElement('div');
    div.setAttribute('class', 'goods__block');
    div.setAttribute('data-id', elem);

    const div2 = document.createElement('div');
    div2.setAttribute('class', 'img__btnBasket');

    const img = document.createElement('img');
    img.setAttribute('class', 'block__img');
    img.src = goods[elem]['src'];

    const div3 = document.createElement('div');
    div3.setAttribute('class', 'btnBasket');
    div3.setAttribute('data-art', elem);
    div3.textContent = 'Добавить в корзину';
    
    const p = document.createElement('p');
    p.textContent = goods[elem]['name'];
    p.setAttribute('class', 'block__text_goods');
    
    const p2 = document.createElement('p');
    p2.textContent = goods[elem]['catigories'];
    p2.setAttribute('class', 'block__text_categories');
    
    const span = document.createElement('span');
    span.textContent = goods[elem]['price'];
    span.setAttribute('class', 'block__text_price');

    const span2 = document.createElement('span');
    span2.textContent = ' ₽';
    span2.setAttribute('class', 'block__text_price_ruble');
    
    div.setAttribute('class', goods[elem]['class']);
    all__goods.appendChild(div);
    div.appendChild(div2);
    div2.appendChild(img);
    div2.appendChild(div3);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(span2);
    span2.prepend(span);

    // div3.addEventListener('click', addToCart);
}
// document.addEventListener('DOMContentLoaded', function(){
//     checkCart();
//     showMiniCart();
// });
// // let goods__basket = document.querySelector('.goods__basket');
// // function addToCart(){
// //     // Лобавляем товар в корзину
// //     let articul = this.getAttribute('data-art');
// //     if(goodsInfo[articul] != undefined){
// //         goodsInfo[articul]++;
// //     }else{
// //         goodsInfo[articul] = 1;
// //     }
// //     localStorage.setItem('goodsInfo', JSON.stringify(goodsInfo))
// //     console.log(goodsInfo);
// //     showMiniCart();
// // }

// // function checkCart(){
// //     //Проверяю наличие корзины в localStorage
// //     if(localStorage.getItem('goodsInfo') != null){
// //         goodsInfo = JSON.parse(localStorage.getItem('goodsInfo'));
// //     }
// //     console.log(goodsInfo);
// // }

// // function showMiniCart(){
// //     //Показываю содержиое корзины
// //     let out = '';
// //     for(let w in goodsInfo){
// //         out += w + '---' +goodsInfo[w]+ '<br>';
// //     }
// //     goods__basket.append(out);
// // }