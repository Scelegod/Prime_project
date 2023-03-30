
//_______________________________________Суммирование товаров по категориям____________________________________________
sumObject('shoes_women', 'number_shoes',     'sidenav__number_shoes');
sumObject('pants_women', 'number_pants',     'sidenav__number_pants');
sumObject('jacket_women', 'number_jacket',   'sidenav__number_jacket');
sumObject('jeans_women', 'number_jeans',     'sidenav__number_jeans');
sumObject('hoodies_women', 'number_hoodies', 'sidenav__number_hoodies');
sumObject('homclot_women', 'number_homclot', 'sidenav__number_homclot');
sumObject('tshirts_women', 'number_tshirts', 'sidenav__number_tshirts');
sumObject('new_models', 'number_new_models', 'sidenav__number_new_models');
sumObject('discount', 'number_discounts',    'sidenav__number_discounts');

function sumObject(selector, span, span3){
    let elem = document.querySelectorAll('.' + selector);
    let span2 = document.querySelector('.' + span);
    let span4 = document.querySelector('.' + span3);
    let sum = 0;
    for(let i of elem){
        sum += 1;
    }
    span2.textContent = sum;
    span4.textContent = sum;
}