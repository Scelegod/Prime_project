
//_______________________________________Суммирование товаров по категориям____________________________________________
sumObject('shoes_women', 'number_shoes');
sumObject('pants_women', 'number_pants');
sumObject('jacket_women', 'number_jacket');
sumObject('jeans_women', 'number_jeans');
sumObject('hoodies_women', 'number_hoodies');
sumObject('homclot_women', 'number_homclot');
sumObject('tshirts_women', 'number_tshirts');
sumObject('new_models', 'number_new_models');
sumObject('discount', 'number_discounts');

function sumObject(selector, span){
    let elem = document.querySelectorAll('.' + selector);
    let span2 = document.querySelector('.' + span);
    let sum = 0;
    for(let i of elem){
        sum += 1;
    }
    span2.textContent = sum;
}