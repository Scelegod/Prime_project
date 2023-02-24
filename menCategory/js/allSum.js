
//__________________________________Суммирование чисел всех объектов___________________________________________________
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