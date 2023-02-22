"use strict"
//Выпадающий список
document.addEventListener('DOMContentLoaded', () =>{
    //  1. По клику на пункты верхнего меню открывать dropdown
    //  2. По клюку (повторному) на эти пункты - закрывать dropdown
    //  3. По клюку на любое место сайта, кроме меню - закрывать dropdown
    
        const menuBtns = document.querySelectorAll('.menu__btn');
        const drops = document.querySelectorAll('.dropdown');
        
        menuBtns.forEach(el => {
            el.addEventListener('click', (e) =>{
                const currentBtn = e.currentTarget;
                const drop = currentBtn.closest('.menu__item').querySelector('.dropdown'); 
    
                menuBtns.forEach(el => {
                    if(el !== currentBtn){
                        el.classList.remove('menu__btn--active');
                    }
                });
    
                drops.forEach(el =>{
                    if(el !== drop){
                        el.classList.remove('dropdown--active');
                    }
                });
    
                drop.classList.toggle('dropdown--active');
                currentBtn.classList.toggle('menu__btn--active');
                // console.log(currentBtn);
                // console.log(drop);
            });
        });
        document.addEventListener('click', (e) => {
            if(!e.target.closest('.menu')){
                menuBtns.forEach(el => {
                    el.classList.remove('menu__btn--active');
                });
    
                drops.forEach(el =>{
                    el.classList.remove('dropdown--active');
                });
            }
        });
    });


    const all__goods = document.querySelector('.all__goods');
    let goods = [
        {src: '/category/assets/img/Футболка_1.png', name: 'VERSACE JEANS COUTURE', catigories: 'Фуфайка (Футболка)', price:'14 590 ₽', class: 'goods__block tshirts'},
        {src: '/category/assets/img/Футболка_2.png', name: 'Guess Jeans', catigories: 'Хлопковая футболка', price:'6 890 ₽', class: 'goods__block tshirts'},
        {src: '/category/assets/img/Футболка_3.png', name: 'Guess Jeans', catigories: 'Хлопковая футболка', price:'6 290 ₽', class: 'goods__block tshirts'},
        {src: '/category/assets/img/Футболка_4.png', name: 'HUGO', catigories: 'Хлопковая футболка', price:'6 790 ₽', class: 'goods__block tshirts'},
        {src: '/category/assets/img/Футболка_5.png', name: 'Guess Jeans', catigories: 'Хлопковая футболка', price:'5 690 ₽', class: 'goods__block tshirts'},
        {src: '/category/assets/img/Футболка_6.png', name: `Marc O'Polo`, catigories: 'Фуфайка (Футболка)', price:'10 590 ₽', class: 'goods__block tshirts'},
        {src: '/category/assets/img/Футболка_7.png', name: 'Esprit Edc', catigories: 'Фуфайка (Футболка)', price:'2 990 ₽', class: 'goods__block tshirts'},
        {src: '/category/assets/img/Футболка_8.png', name: `Marc O'Polo`, catigories: 'Хлопковая футболка', price:'5 490 ₽', class: 'goods__block tshirts'},
        {src: '/category/assets/img/Футболка_9.png', name: 'BOSS', catigories: 'Фуфайка (Футболка)', price:'8 790 ₽', class: 'goods__block tshirts'},

        {src: '/category/assets/img/Куртка_1.png', name: 'VARSITY NYLON BOMBER JACKET', catigories: 'Куртка', price:'16 200 ₽', class: 'goods__block jacket'},
        {src: '/category/assets/img/Куртка_2.png', name: 'VARSITY LOGO BOMBER JACKET', catigories: 'Куртка', price:'23 100 ₽', class: 'goods__block jacket'},
        {src: '/category/assets/img/Куртка_3.png', name: 'VERSACE ALLOVER BOMBER JACKET', catigories: 'Куртка', price:'16 200 ₽', class: 'goods__block jacket'},
        {src: '/category/assets/img/Куртка_4.png', name: 'BAROCCO 660 WINDBREAKER JACKET', catigories: 'Куртка', price:'12 800 ₽', class: 'goods__block jacket'},
        {src: '/category/assets/img/Куртка_5.png', name: 'BAROCCO 660 QUILTED BLOUSON JACKET', catigories: 'Куртка', price:'25 500 ₽', class: 'goods__block jacket'},
        {src: '/category/assets/img/Куртка_6.png', name: 'NYLON GRAPHIC LOGO BLOUSON JACKET', catigories: 'Куртка', price:'19 600 ₽', class: 'goods__block jacket'},
        {src: '/category/assets/img/Куртка_7.png', name: 'MEDUSA BLOUSON PUFFER JACKET', catigories: 'Куртка', price:'23 000 ₽', class: 'goods__block jacket'},
        {src: '/category/assets/img/Куртка_8.png', name: 'LA GRECA PUFFER JACKET', catigories: 'Куртка', price:'15 300 ₽', class: 'goods__block jacket'},
        {src: '/category/assets/img/Куртка_9.png', name: 'LOGO WINDBREAKER JACKET', catigories: 'Куртка', price:'21 300 ₽', class: 'goods__block jacket'},

        {src: '/category/assets/img/Толстовка_1.png', name: 'VARSITY LOGO SWEATSHIRT', catigories: 'Толстовки', price:'6 400 ₽', class: 'goods__block hoodies'},
        {src: '/category/assets/img/Толстовка_2.png', name: 'STUDDED VARSITY LOGO HOODIE', catigories: 'Толстовки', price:'10 200 ₽', class: 'goods__block hoodies'},
        {src: '/category/assets/img/Толстовка_3.png', name: 'MEDUSA HOODIE', catigories: 'Толстовки', price:'7 200 ₽', class: 'goods__block hoodies'},
        {src: '/category/assets/img/Толстовка_4.png', name: 'BAROQUE CRYSTAL GRID HOODIE', catigories: 'Толстовки', price:'12 800 ₽', class: 'goods__block hoodies'},
        {src: '/category/assets/img/Толстовка_5.png', name: 'SAFETY PIN GRAPHIC SWEATSHIRT', catigories: 'Толстовки', price:'5 800 ₽', class: 'goods__block hoodies'},
        {src: '/category/assets/img/Толстовка_6.png', name: 'MEDUSA GRAPHIC SWEATSHIRT', catigories: 'Толстовки', price:'6 400 ₽', class: 'goods__block hoodies'},
        {src: '/category/assets/img/Толстовка_7.png', name: 'MEDUSA LOGO SWEATSHIRT', catigories: 'Толстовки', price:'8 400 ₽', class: 'goods__block hoodies'},
        {src: '/category/assets/img/Толстовка_8.png', name: 'LA MASCHERA LOGO SWEATSHIRT', catigories: 'Толстовки', price:'6 700 ₽', class: 'goods__block hoodies'},
        {src: '/category/assets/img/Толстовка_9.png', name: 'MEDUSA HOODIE', catigories: 'Толстовки', price:'7 200 ₽', class: 'goods__block hoodies'},

        {src: '/category/assets/img/Джинсы_1.png', name: 'VERSACE WIDE-LEG JEANS', catigories: 'Джинсы', price:'5 500 ₽', class: 'goods__block jeans'},
        {src: '/category/assets/img/Джинсы_2.png', name: 'MEDUSA SLIM-FIT JEANS', catigories: 'Джинсы', price:'4 600 ₽', class: 'goods__block jeans'},
        {src: '/category/assets/img/Джинсы_3.png', name: 'MEDUSA JEANS', catigories: 'Джинсы', price:'5 000 ₽', class: 'goods__block jeans'},
        {src: '/category/assets/img/Джинсы_4.png', name: 'LA GRECA LASERED JEANS', catigories: 'Джинсы', price:'7 500 ₽', class: 'goods__block jeans'},
        {src: '/category/assets/img/Джинсы_5.png', name: 'LA MEDUSA SLIM-FIT JEANS', catigories: 'Джинсы', price:'4 200 ₽', class: 'goods__block jeans'},
        {src: '/category/assets/img/Джинсы_6.png', name: 'STUDDED MEDUSA JEANS', catigories: 'Джинсы', price:'5 800 ₽', class: 'goods__block jeans'},
        {src: '/category/assets/img/Джинсы_7.png', name: 'VERSACE ALLOVER JEANS', catigories: 'Джинсы', price:'10 600 ₽', class: 'goods__block jeans'},
        {src: '/category/assets/img/Джинсы_8.png', name: 'SLIM FIT BLACK JEANS', catigories: 'Джинсы', price:'4 200 ₽', class: 'goods__block jeans'},
        {src: '/category/assets/img/Джинсы_9.png', name: 'MEDUSA TWISTED JEANS', catigories: 'Джинсы', price:'2 900 ₽', class: 'goods__block jeans'},

        {src: '/category/assets/img/Дом_одежда_1.png', name: 'BAROCCO 660 SILK PAJAMA TOP', catigories: 'Домашняя одежда', price:'9 800 ₽', class: 'goods__block homclot'},
        {src: '/category/assets/img/Дом_одежда_2.png', name: 'BAROCCO 660 SILK PAJAMA BOTTOMS', catigories: 'Домашняя одежда', price:'7 600 ₽', class: 'goods__block homclot'},
        {src: '/category/assets/img/Дом_одежда_3.png', name: 'MASCHERA BAROQUE PYJAMA TOP', catigories: 'Домашняя одежда', price:'11 000 ₽', class: 'goods__block homclot'},
        {src: '/category/assets/img/Дом_одежда_4.png', name: 'MASCHERA BAROQUE PYJAMA TOP', catigories: 'Домашняя одежда', price:'8 400 ₽', class: 'goods__block homclot'},
        {src: '/category/assets/img/Дом_одежда_5.png', name: 'MEDUSA UNDERSHIRT 2-PACK', catigories: 'Домашняя одежда', price:'900 ₽', class: 'goods__block homclot'},
        {src: '/category/assets/img/Дом_одежда_6.png', name: 'EDUSA UNDERSHIRT 2-PACK', catigories: 'Домашняя одежда', price:'900 ₽', class: 'goods__block homclot'},
        {src: '/category/assets/img/Дом_одежда_7.png', name: 'MEDUSA SLEEVELESS UNDERSHIRT', catigories: 'Домашняя одежда', price:'500 ₽', class: 'goods__block homclot'},
        {src: '/category/assets/img/Дом_одежда_8.png', name: 'BAROCCO SILK ROBE', catigories: 'Домашняя одежда', price:'11 900 ₽', class: 'goods__block homclot'},
        {src: '/category/assets/img/Дом_одежда_9.png', name: 'LA GRECA SILK PAJAMA TOP', catigories: 'Домашняя одежда', price:'4 900 ₽', class: 'goods__block homclot'},

        {src: '/category/assets/img/Обувь_1.png', name: 'ODISSEA SNEAKERS', catigories: 'Обувь', price:'6 100 ₽', class: 'goods__block shoes'},
        {src: '/category/assets/img/Обувь_2.png', name: 'CRYSTAL ODISSEA SNEAKERS', catigories: 'Обувь', price:'15 200 ₽', class: 'goods__block shoes'},
        {src: '/category/assets/img/Обувь_3.png', name: 'GRECA ODISSEA SNEAKERS', catigories: 'Обувь', price:'5 000 ₽', class: 'goods__block shoes'},
        {src: '/category/assets/img/Обувь_4.png', name: 'ODISSEA SNEAKERS', catigories: 'Обувь', price:'6 100 ₽', class: 'goods__block shoes'},
        {src: '/category/assets/img/Обувь_5.png', name: 'GRECA ODISSEA SNEAKERS', catigories: 'Обувь', price:'5 000 ₽', class: 'goods__block shoes'},
        {src: '/category/assets/img/Обувь_6.png', name: 'TRIGRECA SNEAKERS', catigories: 'Обувь', price:'6 900 ₽', class: 'goods__block shoes'},
        {src: '/category/assets/img/Обувь_7.png', name: 'TRIGRECA SNEAKERS', catigories: 'Обувь', price:'6 700 ₽', class: 'goods__block shoes'},
        {src: '/category/assets/img/Обувь_8.png', name: 'TRIGRECA SNEAKERS', catigories: 'Обувь', price:'6 700 ₽', class: 'goods__block shoes'},
        {src: '/category/assets/img/Обувь_9.png', name: 'VERSACE ALLOVER LA GRECA SNEAKERS', catigories: 'Обувь', price:'4 100 ₽', class: 'goods__block shoes'},

        {src: '/category/assets/img/Брюки_1.png', name: 'MEDUSA LA GRECA CARGO TROUSERS', catigories: 'Брюки', price:'7 500 ₽', class: 'goods__block pants'},
        {src: '/category/assets/img/Брюки_2.png', name: 'VERSACE ALLOVER TERRY SWEATPANTS', catigories: 'Брюки', price:'6 700 ₽', class: 'goods__block pants'},
        {src: '/category/assets/img/Брюки_3.png', name: 'MEDUSA SLIM-FIT PANTS', catigories: 'Брюки', price:'5 500 ₽', class: 'goods__block pants'},
        {src: '/category/assets/img/Брюки_4.png', name: 'LA GRECA PANTS', catigories: 'Брюки', price:'6 700 ₽', class: 'goods__block pants'},
        {src: '/category/assets/img/Брюки_5.png', name: 'LOGO SWEATPANTS', catigories: 'Брюки', price:'6 400 ₽', class: 'goods__block pants'},
        {src: '/category/assets/img/Брюки_6.png', name: 'NYLON CARGO PANTS', catigories: 'Брюки', price:'9 300 ₽', class: 'goods__block pants'},
        {src: '/category/assets/img/Брюки_7.png', name: 'SUIT TROUSERS', catigories: 'Брюки', price:'3 200 ₽', class: 'goods__block pants'},
        {src: '/category/assets/img/Брюки_8.png', name: 'MEDUSA BIGGIE LOGO SWEATPANTS', catigories: 'Брюки', price:'2 900 ₽', class: 'goods__block pants'},
        {src: '/category/assets/img/Брюки_9.png', name: 'PASTEL PINSTRIPE FLANNEL WOOL PANTS', catigories: 'Брюки', price:'6 600 ₽', class: 'goods__block pants'},
    ];

for(let elem of goods){
    const div = document.createElement('div');
    div.setAttribute('class', 'goods__block');

    const img = document.createElement('img');
    img.src = elem.src;
    img.setAttribute('class', '.block__img');
    
    const p = document.createElement('p');
    p.textContent = elem.name;
    p.setAttribute('class', 'block__text_goods');
    
    const p2 = document.createElement('p');
    p2.textContent = elem.catigories;
    p2.setAttribute('class', 'block__text_categories');
    
    const p3 = document.createElement('p');
    p3.textContent = elem.price;
    p3.setAttribute('class', 'block__text_price');

    div.setAttribute('class', elem.class);
    all__goods.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);

}


let num = 0;
sumObject('shoes', 'number_shoes');
sumObject('pants', 'number_pants');
sumObject('jacket', 'number_jacket');
sumObject('jeans', 'number_jeans');
sumObject('hoodies', 'number_hoodies');
sumObject('homclot', 'number_homclot');
sumObject('tshirts', 'number_tshirts');


function sumObject(selector, span){
    let elem = document.querySelectorAll('.' + selector);
    let span2 = document.querySelector('.' + span);
    let sum = 0;
    for(let i of elem){
        sum += 1;
    }
    span2.textContent = sum;
}
    
function allSum(selector, span){
    let allGoods = document.querySelectorAll('.' + selector);
    let all_number = document.querySelector('.' + span);
    let sum = 0;
    for(let i of allGoods){
        sum += +i.textContent;
        // console.log(i.textContent);
    }
    all_number.textContent = sum; 
}
allSum('category__number','all_number');


let btnTshirts = document.querySelector('.btnTshirts');
let btnPants = document.querySelector('.btnPants');
let btnJacket = document.querySelector('.btnJacket');
let btnHoodies = document.querySelector('.btnHoodies');
let btnJeans = document.querySelector('.btnJeans');
let btnHomclot = document.querySelector('.btnHomclot');
let btnShoes = document.querySelector('.btnShoes');


let tshirts = document.querySelectorAll('.tshirts');
let jacket = document.querySelectorAll('.jacket');
let hoodies = document.querySelectorAll('.hoodies');
let jeans = document.querySelectorAll('.jeans');
let homclot = document.querySelectorAll('.homclot');
let shoes = document.querySelectorAll('.shoes');
let pants = document.querySelectorAll('.pants');

let allBtn = document.querySelectorAll('.category__text');
let arr = [];
function arrGoods(selector){
    for(let i of selector){
        arr.push(i);
    }
}
arrGoods(tshirts);
arrGoods(jacket);
arrGoods(hoodies);
arrGoods(jeans);
arrGoods(homclot);
arrGoods(shoes);
arrGoods(pants);
console.log(arr);
console.log(allBtn);

for(let btn of allBtn){
    btn.addEventListener('click', function func(e){
        console.log(e.currentTarget);
        if(e.currentTarget == btnPants){
            btn.classList.add('btnColor');
            for(let i of arr){
                if(i.getAttribute('class') !== 'goods__block pants'){
                    i.classList.add('dispNone');
                }
                
                if(i.getAttribute('class') == 'goods__block pants dispNone'){
                    btn.classList.remove('btnColor');
                    i.classList.remove('dispNone');
                }
            }
        }
        if(e.currentTarget == btnJacket){
            for(let i of arr){
                if(i.getAttribute('class') !== 'goods__block jacket'){
                    i.classList.add('dispNone');
                    btn.classList.add('btnColor');
                }
                
                if(i.getAttribute('class') == 'goods__block jacket dispNone'){
                    btn.classList.remove('btnColor');
                    i.classList.remove('dispNone');
                }
            }
        }
        if(e.currentTarget == btnHoodies){
            for(let i of arr){
                if(i.getAttribute('class') !== 'goods__block hoodies'){
                    i.classList.add('dispNone');
                    btn.classList.add('btnColor');
                }
                if(i.getAttribute('class') == 'goods__block hoodies dispNone'){
                    btn.classList.remove('btnColor');
                    i.classList.remove('dispNone');
                }
            }
        }
        if(e.currentTarget == btnJeans){
            for(let i of arr){
                if(i.getAttribute('class') !== 'goods__block jeans'){
                    i.classList.add('dispNone');
                    btn.classList.add('btnColor');
                }

                if(i.getAttribute('class') == 'goods__block jeans dispNone'){
                    i.classList.remove('dispNone');
                    btn.classList.remove('btnColor');

                }
            }
        }
        if(e.currentTarget == btnHomclot){
            for(let i of arr){
                if(i.getAttribute('class') !== 'goods__block homclot'){
                    i.classList.add('dispNone');
                    btn.classList.add('btnColor');
                }

                if(i.getAttribute('class') == 'goods__block homclot dispNone'){
                        btn.classList.remove('btnColor');
                    i.classList.remove('dispNone');
                }
            }
        }
        if(e.currentTarget == btnTshirts){
            for(let i of arr){
                if(i.getAttribute('class') !== 'goods__block tshirts'){
                    i.classList.add('dispNone');
                    btn.classList.add('btnColor');
                }

                if(i.getAttribute('class') == 'goods__block tshirts dispNone'){
                    btn.classList.remove('btnColor');
                    i.classList.remove('dispNone');
                }
            }
        }
        if(e.currentTarget == btnShoes){
            for(let i of arr){
                if(i.getAttribute('class') !== 'goods__block shoes'){
                    i.classList.add('dispNone');
                }

                if(i.getAttribute('class') == 'goods__block shoes dispNone'){
                    i.classList.remove('dispNone');
                }
            }
        }
        // btn.removeEventListener('click', func);
    });
}