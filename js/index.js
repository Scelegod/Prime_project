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

document.addEventListener('DOMContentLoaded', () =>{
    let number = localStorage.getItem('basket__number');
    let number2 = JSON.parse(number);
    let basket__number = document.querySelector('.basket__number');
    basket__number.textContent = number2;
});