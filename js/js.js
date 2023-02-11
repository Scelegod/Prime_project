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
let intervalId;

document.querySelectorAll('.dropdown').forEach(e => {
    e.addEventListener('click', e =>{
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown_menu').forEach(e => {
            if(!document.querySelector(`[data-target=${menu}]`).classList.contains('open')){
                // e.classList.remove('dropdown_menu.active');
                // e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('dropdown_menu.active');
                document.querySelector(`[data-target=${menu}]`).classList.remove('dropdown_menu');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open');
                },1);
            }

            if(document.querySelector(`[data-target=${menu}]`).classList.contains('open')){
                document.querySelector(`[data-target=${menu}]`).classList.add('dropdown_menu');
                document.querySelector(`[data-target=${menu}]`).classList.remove('dropdown_menu.active');
                clearTimeout(intervalId);   
                intervalId = setTimeout(()=>{
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                },1);
            }
        });
    });
});