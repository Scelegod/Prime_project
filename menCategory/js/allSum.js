
//__________________________________Суммирование чисел всех объектов___________________________________________________
function allSum(selector, span, span2){
    let allGoods = document.querySelectorAll('.' + selector);
    let all_number = document.querySelector('.' + span);
    let sidenav__all_number = document.querySelector('.' + span2);
    let sum = 0;
    for(let i of allGoods){
        sum += +i.textContent;
        // console.log(i.textContent);
    }
    all_number.textContent = sum; 
    sidenav__all_number.textContent = sum; 
}
allSum('category__number','all_number','sidenav__all_number');