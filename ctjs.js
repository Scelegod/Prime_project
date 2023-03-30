"use strict"
//____________________________________Выпадающий список___________________________________
// document.addEventListener('DOMContentLoaded', () =>{
//     //  1. По клику на пункты верхнего меню открывать dropdown
//     //  2. По клюку (повторному) на эти пункты - закрывать dropdown
//     //  3. По клюку на любое место сайта, кроме меню - закрывать dropdown
    
//         const menuBtns = document.querySelectorAll('.menu__btn');
//         const drops = document.querySelectorAll('.dropdown');
        
//         menuBtns.forEach(el => {
//             el.addEventListener('click', (e) =>{
//                 const currentBtn = e.currentTarget;
//                 const drop = currentBtn.closest('.menu__item').querySelector('.dropdown'); 
    
//                 menuBtns.forEach(el => {
//                     if(el !== currentBtn){
//                         el.classList.remove('menu__btn--active');
//                     }
//                 });
    
//                 drops.forEach(el =>{
//                     if(el !== drop){
//                         el.classList.remove('dropdown--active');
//                     }
//                 });
    
//                 drop.classList.toggle('dropdown--active');
//                 currentBtn.classList.toggle('menu__btn--active');
//             });
//         });
//         document.addEventListener('click', (e) => {
//             if(!e.target.closest('.menu')){
//                 menuBtns.forEach(el => {
//                     el.classList.remove('menu__btn--active');
//                 });
    
//                 drops.forEach(el =>{
//                     el.classList.remove('dropdown--active');
//                 });
//             }
//         });
//     });
    
    
    //____________________________________Нахождение блока для отображение товаров____________________________________________________________________________
    //___________________________________________Массив с объектами - товарами________________________________________________________________________________
    // let goods = [
    //     {src: '/category/assets/img/Футболка_1.png', name: 'VERSACE JEANS COUTURE', catigories: 'Фуфайка (Футболка)', price:'14590', class: 'goods__block tshirts'},
    //     {src: '/category/assets/img/Футболка_2.png', name: 'Guess Jeans',           catigories: 'Хлопковая футболка', price:'6890',  class: 'goods__block tshirts'},
    //     {src: '/category/assets/img/Футболка_3.png', name: 'Guess Jeans',           catigories: 'Хлопковая футболка', price:'6290',  class: 'goods__block tshirts'},
    //     {src: '/category/assets/img/Футболка_4.png', name: 'HUGO',                  catigories: 'Хлопковая футболка', price:'6790',  class: 'goods__block tshirts'},
    //     {src: '/category/assets/img/Футболка_5.png', name: 'Guess Jeans',           catigories: 'Хлопковая футболка', price:'5690',  class: 'goods__block tshirts'},
    //     {src: '/category/assets/img/Футболка_6.png', name: `Marc O'Polo`,           catigories: 'Фуфайка (Футболка)', price:'10590', class: 'goods__block tshirts'},
    //     {src: '/category/assets/img/Футболка_7.png', name: 'Esprit Edc',            catigories: 'Фуфайка (Футболка)', price:'2990',  class: 'goods__block tshirts'},
    //     {src: '/category/assets/img/Футболка_8.png', name: `Marc O'Polo`,           catigories: 'Хлопковая футболка', price:'5490',  class: 'goods__block tshirts'},
    //     {src: '/category/assets/img/Футболка_9.png', name: 'BOSS',                  catigories: 'Фуфайка (Футболка)', price:'8790',  class: 'goods__block tshirts'},

    //     {src: '/category/assets/img/Куртка_1.png', name: 'VARSITY NYLON BOMBER JACKET',        catigories: 'Куртка', price:'16200', class: 'goods__block jacket'},
    //     {src: '/category/assets/img/Куртка_2.png', name: 'VARSITY LOGO BOMBER JACKET',         catigories: 'Куртка', price:'23100', class: 'goods__block jacket'},
    //     {src: '/category/assets/img/Куртка_3.png', name: 'VERSACE ALLOVER BOMBER JACKET',      catigories: 'Куртка', price:'16200', class: 'goods__block jacket'},
    //     {src: '/category/assets/img/Куртка_4.png', name: 'BAROCCO 660 WINDBREAKER JACKET',     catigories: 'Куртка', price:'12800', class: 'goods__block jacket'},
    //     {src: '/category/assets/img/Куртка_5.png', name: 'BAROCCO 660 QUILTED BLOUSON JACKET', catigories: 'Куртка', price:'25500', class: 'goods__block jacket'},
    //     {src: '/category/assets/img/Куртка_6.png', name: 'NYLON GRAPHIC LOGO BLOUSON JACKET',  catigories: 'Куртка', price:'19600', class: 'goods__block jacket'},
    //     {src: '/category/assets/img/Куртка_7.png', name: 'MEDUSA BLOUSON PUFFER JACKET',       catigories: 'Куртка', price:'23000', class: 'goods__block jacket'},
    //     {src: '/category/assets/img/Куртка_8.png', name: 'LA GRECA PUFFER JACKET',             catigories: 'Куртка', price:'15300', class: 'goods__block jacket'},
    //     {src: '/category/assets/img/Куртка_9.png', name: 'LOGO WINDBREAKER JACKET',            catigories: 'Куртка', price:'21300', class: 'goods__block jacket'},

    //     {src: '/category/assets/img/Толстовка_1.png', name: 'VARSITY LOGO SWEATSHIRT',       catigories: 'Толстовки', price:'6400', class: 'goods__block hoodies'},
    //     {src: '/category/assets/img/Толстовка_2.png', name: 'STUDDED VARSITY LOGO HOODIE',   catigories: 'Толстовки', price:'10200', class: 'goods__block hoodies'},
    //     {src: '/category/assets/img/Толстовка_3.png', name: 'MEDUSA HOODIE',                 catigories: 'Толстовки', price:'7200', class: 'goods__block hoodies'},
    //     {src: '/category/assets/img/Толстовка_4.png', name: 'BAROQUE CRYSTAL GRID HOODIE',   catigories: 'Толстовки', price:'12800', class: 'goods__block hoodies'},
    //     {src: '/category/assets/img/Толстовка_5.png', name: 'SAFETY PIN GRAPHIC SWEATSHIRT', catigories: 'Толстовки', price:'5800', class: 'goods__block hoodies'},
    //     {src: '/category/assets/img/Толстовка_6.png', name: 'MEDUSA GRAPHIC SWEATSHIRT',     catigories: 'Толстовки', price:'6400', class: 'goods__block hoodies'},
    //     {src: '/category/assets/img/Толстовка_7.png', name: 'MEDUSA LOGO SWEATSHIRT',        catigories: 'Толстовки', price:'8400', class: 'goods__block hoodies'},
    //     {src: '/category/assets/img/Толстовка_8.png', name: 'LA MASCHERA LOGO SWEATSHIRT',   catigories: 'Толстовки', price:'6700', class: 'goods__block hoodies'},
    //     {src: '/category/assets/img/Толстовка_9.png', name: 'MEDUSA HOODIE',                 catigories: 'Толстовки', price:'7200', class: 'goods__block hoodies'},
    
    //     {src: '/category/assets/img/Джинсы_1.png', name: 'VERSACE WIDE-LEG JEANS',   catigories: 'Джинсы', price:'5500',  class: 'goods__block jeans'},
    //     {src: '/category/assets/img/Джинсы_2.png', name: 'MEDUSA SLIM-FIT JEANS',    catigories: 'Джинсы', price:'4600',  class: 'goods__block jeans'},
    //     {src: '/category/assets/img/Джинсы_3.png', name: 'MEDUSA JEANS',             catigories: 'Джинсы', price:'5000',  class: 'goods__block jeans'},
    //     {src: '/category/assets/img/Джинсы_4.png', name: 'LA GRECA LASERED JEANS',   catigories: 'Джинсы', price:'7500',  class: 'goods__block jeans'},
    //     {src: '/category/assets/img/Джинсы_5.png', name: 'LA MEDUSA SLIM-FIT JEANS', catigories: 'Джинсы', price:'4200',  class: 'goods__block jeans'},
    //     {src: '/category/assets/img/Джинсы_6.png', name: 'STUDDED MEDUSA JEANS',     catigories: 'Джинсы', price:'5800',  class: 'goods__block jeans'},
    //     {src: '/category/assets/img/Джинсы_7.png', name: 'VERSACE ALLOVER JEANS',    catigories: 'Джинсы', price:'10600', class: 'goods__block jeans'},
    //     {src: '/category/assets/img/Джинсы_8.png', name: 'SLIM FIT BLACK JEANS',     catigories: 'Джинсы', price:'4200',  class: 'goods__block jeans'},
    //     {src: '/category/assets/img/Джинсы_9.png', name: 'MEDUSA TWISTED JEANS',     catigories: 'Джинсы', price:'2900',  class: 'goods__block jeans'},
    
    //     {src: '/category/assets/img/Дом_одежда_1.png', name: 'BAROCCO 660 SILK PAJAMA TOP',     catigories: 'Домашняя одежда', price:'9800',  class: 'goods__block homclot'},
    //     {src: '/category/assets/img/Дом_одежда_2.png', name: 'BAROCCO 660 SILK PAJAMA BOTTOMS', catigories: 'Домашняя одежда', price:'7600',  class: 'goods__block homclot'},
    //     {src: '/category/assets/img/Дом_одежда_3.png', name: 'MASCHERA BAROQUE PYJAMA TOP',     catigories: 'Домашняя одежда', price:'11000', class: 'goods__block homclot'},
    //     {src: '/category/assets/img/Дом_одежда_4.png', name: 'MASCHERA BAROQUE PYJAMA TOP',     catigories: 'Домашняя одежда', price:'8400',  class: 'goods__block homclot'},
    //     {src: '/category/assets/img/Дом_одежда_5.png', name: 'MEDUSA UNDERSHIRT 2-PACK',        catigories: 'Домашняя одежда', price:'900',   class: 'goods__block homclot'},
    //     {src: '/category/assets/img/Дом_одежда_6.png', name: 'EDUSA UNDERSHIRT 2-PACK',         catigories: 'Домашняя одежда', price:'900',   class: 'goods__block homclot'},
    //     {src: '/category/assets/img/Дом_одежда_7.png', name: 'MEDUSA SLEEVELESS UNDERSHIRT',    catigories: 'Домашняя одежда', price:'500',   class: 'goods__block homclot'},
    //     {src: '/category/assets/img/Дом_одежда_8.png', name: 'BAROCCO SILK ROBE',               catigories: 'Домашняя одежда', price:'11900', class: 'goods__block homclot'},
    //     {src: '/category/assets/img/Дом_одежда_9.png', name: 'LA GRECA SILK PAJAMA TOP',        catigories: 'Домашняя одежда', price:'4900',  class: 'goods__block homclot'},
        
    //     {src: '/category/assets/img/Обувь_1.png', name: 'ODISSEA SNEAKERS',                  catigories: 'Обувь', price:'6100',  class: 'goods__block shoes'},
    //     {src: '/category/assets/img/Обувь_2.png', name: 'CRYSTAL ODISSEA SNEAKERS',          catigories: 'Обувь', price:'15200', class: 'goods__block shoes'},
    //     {src: '/category/assets/img/Обувь_3.png', name: 'GRECA ODISSEA SNEAKERS',            catigories: 'Обувь', price:'5000',  class: 'goods__block shoes'},
    //     {src: '/category/assets/img/Обувь_4.png', name: 'ODISSEA SNEAKERS',                  catigories: 'Обувь', price:'6100',  class: 'goods__block shoes'},
    //     {src: '/category/assets/img/Обувь_5.png', name: 'GRECA ODISSEA SNEAKERS',            catigories: 'Обувь', price:'5000',  class: 'goods__block shoes'},
    //     {src: '/category/assets/img/Обувь_6.png', name: 'TRIGRECA SNEAKERS',                 catigories: 'Обувь', price:'6900',  class: 'goods__block shoes'},
    //     {src: '/category/assets/img/Обувь_7.png', name: 'TRIGRECA SNEAKERS',                 catigories: 'Обувь', price:'6700',  class: 'goods__block shoes'},
    //     {src: '/category/assets/img/Обувь_8.png', name: 'TRIGRECA SNEAKERS',                 catigories: 'Обувь', price:'6700',  class: 'goods__block shoes'},
    //     {src: '/category/assets/img/Обувь_9.png', name: 'VERSACE ALLOVER LA GRECA SNEAKERS', catigories: 'Обувь', price:'4100',  class: 'goods__block shoes'},

    //     {src: '/category/assets/img/Брюки_1.png', name: 'MEDUSA LA GRECA CARGO TROUSERS',      catigories: 'Брюки', price:'7500', class: 'goods__block pants'},
    //     {src: '/category/assets/img/Брюки_2.png', name: 'VERSACE ALLOVER TERRY SWEATPANTS',    catigories: 'Брюки', price:'6700', class: 'goods__block pants'},
    //     {src: '/category/assets/img/Брюки_3.png', name: 'MEDUSA SLIM-FIT PANTS',               catigories: 'Брюки', price:'5500', class: 'goods__block pants'},
    //     {src: '/category/assets/img/Брюки_4.png', name: 'LA GRECA PANTS',                      catigories: 'Брюки', price:'6700', class: 'goods__block pants'},
    //     {src: '/category/assets/img/Брюки_5.png', name: 'LOGO SWEATPANTS',                     catigories: 'Брюки', price:'6400', class: 'goods__block pants'},
    //     {src: '/category/assets/img/Брюки_6.png', name: 'NYLON CARGO PANTS',                   catigories: 'Брюки', price:'9300', class: 'goods__block pants'},
    //     {src: '/category/assets/img/Брюки_7.png', name: 'SUIT TROUSERS',                       catigories: 'Брюки', price:'3200', class: 'goods__block pants'},
    //     {src: '/category/assets/img/Брюки_8.png', name: 'MEDUSA BIGGIE LOGO SWEATPANTS',       catigories: 'Брюки', price:'2900', class: 'goods__block pants'},
    //     {src: '/category/assets/img/Брюки_9.png', name: 'PASTEL PINSTRIPE FLANNEL WOOL PANTS', catigories: 'Брюки', price:'6600', class: 'goods__block pants'},
    // ];
//___________________________________________Создание блока и запихивание его на страницу___________________________________
// const all__goods = document.querySelector('.all__goods');
// let goodsInfo = {};
// let i = 0;

// for(let elem of goods){
//     i += 1;
//     const div = document.createElement('div');
//     div.setAttribute('class', 'goods__block');
//     div.setAttribute('data-id', i);
//     const div2 = document.createElement('div');
//     div2.setAttribute('class', 'img__btnBasket');

//     const img = document.createElement('img');
//     img.src = elem.src;
//     img.setAttribute('class', '.block__img');

//     const div3 = document.createElement('div');
//     div3.setAttribute('class', 'btnBasket');
//     div3.textContent = 'Добавить в корзину';
    
//     const p = document.createElement('p');
//     p.textContent = elem.name;
//     p.setAttribute('class', 'block__text_goods');
    
//     const p2 = document.createElement('p');
//     p2.textContent = elem.catigories;
//     p2.setAttribute('class', 'block__text_categories');
    
//     const span = document.createElement('span');
//     span.textContent = elem.price;
//     span.setAttribute('class', 'block__text_price');

//     const span2 = document.createElement('span');
//     span2.textContent = ' ₽';
//     span2.setAttribute('class', 'block__text_price_ruble');
    
//     div.setAttribute('class', elem.class);
//     all__goods.appendChild(div);
//     div.appendChild(div2);
//     div2.appendChild(img);
//     div2.appendChild(div3);
//     div.appendChild(p);
//     div.appendChild(p2);
//     div.appendChild(span2);
//     span2.prepend(span);
//     div.addEventListener('mouseover', function(){
//         div3.setAttribute('class', 'btnBasket_hover');
//     });
//     div.addEventListener('mouseout', function(){
//         div3.setAttribute('class', 'btnBasket');
//     });
//     div3.addEventListener('click', function(){
//         // собираем данные
//         goodsInfo = {
//             id: div.dataset.id,
//             imgSrc: img.getAttribute('src'), 
//             title: p.textContent,
//             categories: p2.textContent,
//             price: span.textContent,
//             counter: '1'
//         }
        
//         let goods__basket = document.querySelector('.goods__basket');
//         // Проверка есть ли такой товар 
//         let itemInCart = goods__basket.querySelector('[data-id="' + goodsInfo.id + '"]');
//         //Есть ли товар в корзине
//         let counterElem;
//         if(itemInCart){
//             counterElem = itemInCart.querySelector('.basket__amoynt__number');
//             counterElem.textContent = +counterElem.textContent + +goodsInfo.counter;
//         }else{
//             // Подставляем собранные данные
//             // Если товара нет в корзине
//             let cartItemHTML = `<div class="goods__block__basket" data-id="${goodsInfo.id}">
//                                     <div class="basket__img__text">
//                                         <img src="${goodsInfo.imgSrc}" class="basket__img">
//                                         <div class="basket__text">
//                                             <p class="basket__text_categories">${goodsInfo.categories}</p>
//                                             <p class="basket__text_goods">${goodsInfo.title}</p>
//                                         </div>
//                                     </div>
//                                     <div class="basket__amoynt">
//                                         <p class="basket__amoynt__text">Количество: </p>
//                                         <button class="basket__amoynt__btn" data-action="minus">-</button>
//                                         <p class="basket__amoynt__number">${goodsInfo.counter}</p>
//                                         <button class="basket__amoynt__btn" data-action="plus">+</button>
//                                     </div>
//                                     <span class="basket__text_price_ruble"><span class="basket__text_price">${goodsInfo.price}</span> ₽</span>
//                                     <p class="basket__icons"><i class="bi bi-x-circle"></i></p>
//                                 </div>`;
//             goods__basket.insertAdjacentHTML('beforeend', cartItemHTML);
//         }
//         toggleGoodsStatus();

//         calcGoodsPrice();
//     });
// }
//_____________________________________________________________________________________________________________________
//_____________________________Клик по странице сайта________________________________________________________________________
// window.addEventListener('click', function(event){
//     let counter;
//     //_______________________________Условия нажатия по...___________________________________________________________________
//     if(event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus'){
//         let basket__amoynt = event.target.closest('.basket__amoynt');
//         counter = basket__amoynt.querySelector('.basket__amoynt__number');
        
//     }

//     //_______________________________Условия нажатия по...___________________________________________________________________
//     if(event.target.dataset.action === 'minus'){
//         if(+counter.textContent === 1 ){
//             event.target.closest('.goods__block__basket').remove();
//             toggleGoodsStatus();
//             calcGoodsPrice()
//         }
//         if(+counter.textContent > 1 ){
//             counter.textContent = --counter.textContent;
//             calcGoodsPrice()
//         }
//     }
//     //_______________________________Условия нажатия по...___________________________________________________________________
//     if(event.target.dataset.action === 'plus'){
//         counter.textContent = ++counter.textContent;
//         calcGoodsPrice()
//     }
    
//     //_______________________________Функция отслежиния есть ли товар в корзине___________________________________________________________________
//     // console.log(event.target);
//     if(event.target.closest('.bi-x-circle')){
//         event.target.closest('.goods__block__basket').remove();
//         toggleGoodsStatus();
//         calcGoodsPrice()

//     }
// });

//_______________________________________Суммирование товаров по категориям____________________________________________
// sumObject('shoes', 'number_shoes');
// sumObject('pants', 'number_pants');
// sumObject('jacket', 'number_jacket');
// sumObject('jeans', 'number_jeans');
// sumObject('hoodies', 'number_hoodies');
// sumObject('homclot', 'number_homclot');
// sumObject('tshirts', 'number_tshirts');

// function sumObject(selector, span){
//     let elem = document.querySelectorAll('.' + selector);
//     let span2 = document.querySelector('.' + span);
//     let sum = 0;
//     for(let i of elem){
//         sum += 1;
//     }
//     span2.textContent = sum;
// }

//__________________________________Суммирование чисел всех объектов___________________________________________________
// function allSum(selector, span){
//     let allGoods = document.querySelectorAll('.' + selector);
//     let all_number = document.querySelector('.' + span);
//     let sum = 0;
//     for(let i of allGoods){
//         sum += +i.textContent;
//         // console.log(i.textContent);
//     }
//     all_number.textContent = sum; 
// }
// allSum('category__number','all_number');
//_____________________________________________________________________________________________________________________

//__________________________________Поиск кнопок категорий_____________________________________________________________
// let btnTshirts = document.querySelector('.btnTshirts');
// let btnPants = document.querySelector('.btnPants');
// let btnJacket = document.querySelector('.btnJacket');
// let btnHoodies = document.querySelector('.btnHoodies');
// let btnJeans = document.querySelector('.btnJeans');
// let btnHomclot = document.querySelector('.btnHomclot');
// let btnShoes = document.querySelector('.btnShoes');
// //_____________________________________________________________________________________________________________________

// //__________________________________Поиск товаров по категория_________________________________________________________
// let tshirts = document.querySelectorAll('.tshirts');
// let jacket = document.querySelectorAll('.jacket');
// let hoodies = document.querySelectorAll('.hoodies');
// let jeans = document.querySelectorAll('.jeans');
// let homclot = document.querySelectorAll('.homclot');
// let shoes = document.querySelectorAll('.shoes');
// let pants = document.querySelectorAll('.pants');


// //__________________________________Добавление товаров в единный массив_______________________________________________
// let arr = [];
// function arrGoods(selector){
//     for(let i of selector){
//         arr.push(i);
//     }
// }
// arrGoods(tshirts);
// arrGoods(jacket);
// arrGoods(hoodies);
// arrGoods(jeans);
// arrGoods(homclot);
// arrGoods(shoes);
// arrGoods(pants);


// //__________________________________Поиск кнопок из списка____________________________________________________________
// let allBtn = document.querySelectorAll('.category__text');
// //__________________________________Нахождение главной кнопки одежды_______________________________________________
// let btn__clothes = document.querySelector('.btn__clothes');
// //__________________________________Удаление display none из блока класса товара___________________________________
// btn__clothes.addEventListener('click', function(e){
//     for(let i of arr){
//         i.classList.remove('dispNone');
//         for(let iBtn of allBtn){
//             iBtn.classList.remove('btnColor');
//         }
//     }
// });

// // __________________________________Фильтрация товаров по категориям___________________________________
// for(let btn of allBtn){
//     btn.addEventListener('click', function func(e){
//         console.log(e.currentTarget);
//         ulBtn(btnPants, 'goods__block pants', 'dispNone', e);
//         ulBtn(btnJacket, 'goods__block jacket', 'dispNone', e);
//         ulBtn(btnHoodies, 'goods__block hoodies', 'dispNone', e);
//         ulBtn(btnJeans, 'goods__block jeans', 'dispNone', e);
//         ulBtn(btnHomclot, 'goods__block homclot', 'dispNone', e);
//         ulBtn(btnTshirts, 'goods__block tshirts', 'dispNone', e);
//         ulBtn(btnShoes, 'goods__block shoes', 'dispNone', e);
//     });
// }

// function ulBtn(button, class1, classNone, e){
//     if(e.currentTarget == button){
//         for(let iBtn of allBtn){
//                 iBtn.classList.remove('btnColor');
//             }
//             button.classList.add('btnColor');
//         for(let i of arr){
//             if(i.getAttribute('class') !== class1){
//                 i.classList.add(classNone);
//             }
            
//             if(i.getAttribute('class') == class1 + ' ' + classNone){
//                 i.classList.remove(classNone);
//             }
//         }
//     }
// }

//Сделать функцию которая добавляет товары в корзину
//Счетчик товаров в корзине
//При возможности добавить модальное окно для товаров

// //_______________________________Функция отслежиния есть ли товар в корзине___________________________________________________________________
// function toggleGoodsStatus(){
//     let making__order = document.querySelector('.making__order');
//     let goods__basket = document.querySelector('.goods__basket');
//     let basket__empty__text = document.querySelector('.basket__empty__text');

//     if(goods__basket.children.length > 0){
//         // console.log('full');
//         basket__empty__text.classList.add('dispNone');
//         making__order.classList.remove('dispNone');
//     }else{
//         basket__empty__text.classList.remove('dispNone');
//         making__order.classList.add('dispNone');
//         // console.log('empty');
//     }
// }

// //_____________________________Суммирование цен товаров в корзине_________________________________________
// function calcGoodsPrice(){
//     let goods__block__basket = document.querySelectorAll('.goods__block__basket');
//     let sum__price__number = document.querySelector('.sum__price__number');
//     let basket__number = document.querySelector('.basket__number');

//     let totalAmount = 0;
//     let totalPrice = 0;

//     goods__block__basket.forEach(function(item){
//         let amountEl = item.querySelector('.basket__amoynt__number');
//         let priceEl = item.querySelector('.basket__text_price');
//         let currentPrice = +amountEl.textContent * +priceEl.textContent;
//         totalPrice += currentPrice;

//         let currentAmount = +amountEl.textContent;
//         totalAmount += currentAmount;
//     })
//     sum__price__number.textContent = totalPrice;
    
//     basket__number.textContent = totalAmount;
// }