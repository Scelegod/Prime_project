"use strict"
// //____________________________________Выпадающий список___________________________________
// document.addEventListener('DOMContentLoaded', () =>{
//     //  1. По клику на пункты верхнего меню открывать dropdown
//     //  2. По клюку (повторному) на эти пункты - закрывать dropdown
//     //  3. По клюку на любое место сайта, кроме меню - закрывать dropdown
    
//     const menuBtns = document.querySelectorAll('.menu__btn');
//     const drops = document.querySelectorAll('.dropdown');
    
//     menuBtns.forEach(el => {
//         el.addEventListener('click', (e) =>{
//             const currentBtn = e.currentTarget;
//             const drop = currentBtn.closest('.menu__item').querySelector('.dropdown'); 

//             menuBtns.forEach(el => {
//                 if(el !== currentBtn){
//                     el.classList.remove('menu__btn--active');
//                 }
//             });

//             drops.forEach(el =>{
//                 if(el !== drop){
//                     el.classList.remove('dropdown--active');
//                 }
//             });

//             drop.classList.toggle('dropdown--active');
//             currentBtn.classList.toggle('menu__btn--active');
//         });
//     });
//     document.addEventListener('click', (e) => {
//         if(!e.target.closest('.menu')){
//             menuBtns.forEach(el => {
//                 el.classList.remove('menu__btn--active');
//             });

//             drops.forEach(el =>{
//                 el.classList.remove('dropdown--active');
//             });
//         }
//     });
// });
