"use strict"

//Он входа и регистрации
const openWindow = document.getElementById('text__button');
const closeWindow = document.getElementById('window__close')
const window2 = document.getElementById('window')

openWindow.addEventListener('click', function(e){
    e.preventDefault();
    window2.classList.add('active');
});
closeWindow.addEventListener('click', () =>{
    window2.classList.remove('active');
});

const form2reg = document.getElementById('form2reg');
const form2 = document.getElementById('form2');
const form = document.getElementById('form');
const body_text = document.getElementById('window__body__text');
const formlog = document.getElementById('formlog');
const body_text2 = document.getElementById('window__body__text2');

form2reg.addEventListener('click', ()=>{
    form2.classList.add('active');
    form.classList.add('active');
    body_text.classList.add('active');
    body_text2.classList.add('active');
});

formlog.addEventListener('click', function(){
    form2.classList.remove('active');
    form.classList.remove('active');
    body_text.classList.remove('active');
    body_text2.classList.remove('active');
});

//Выпадающий список
document.addEventListener('DOMContentLoaded', () =>{
//  1. По клику на пункты верхнего меню открывать dropdown
//  2. По клюку (повторному) на эти пункты - закрывать dropdown
//  3. По клюку на любое место сайта, кроме меню - закрывать dropdown

    const menuBtns = document.querySelectorAll('.menu__btn');
    const drops = document.querySelectorAll('.dropdown');
    
    menuBtns.forEach(el => {
        el.addEventListener('click', (e) =>{
            let currentBtn = e.currentTarget;
            let drop = currentBtn.closest('.menu__item').querySelector('.dropdown'); 

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
            currentBtn.classList.add('menu__btn--active');
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