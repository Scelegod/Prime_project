
//_______________________________________Суммирование товаров по категориям____________________________________________
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