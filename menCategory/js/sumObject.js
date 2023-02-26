
//_______________________________________Суммирование товаров по категориям____________________________________________
sumObject('shoes_men', 'number_shoes');
sumObject('pants_men', 'number_pants');
sumObject('jacket_men', 'number_jacket');
sumObject('jeans_men', 'number_jeans');
sumObject('hoodies_men', 'number_hoodies');
sumObject('homclot_men', 'number_homclot');
sumObject('tshirts_men', 'number_tshirts');

function sumObject(selector, span){
    let elem = document.querySelectorAll('.' + selector);
    let span2 = document.querySelector('.' + span);
    let sum = 0;
    for(let i of elem){
        sum += 1;
    }
    span2.textContent = sum;
}

