//__________________________________Поиск кнопок категорий_____________________________________________________________
let btnTshirts = document.querySelector('.btnTshirts');
let btnPants = document.querySelector('.btnPants');
let btnJacket = document.querySelector('.btnJacket');
let btnHoodies = document.querySelector('.btnHoodies');
let btnJeans = document.querySelector('.btnJeans');
let btnHomclot = document.querySelector('.btnHomclot');
let btnShoes = document.querySelector('.btnShoes');
//_____________________________________________________________________________________________________________________

//__________________________________Поиск товаров по категория_________________________________________________________
let tshirts_men = document.querySelectorAll('.tshirts_men');
let jacket_men = document.querySelectorAll('.jacket_men');
let hoodies_men = document.querySelectorAll('.hoodies_men');
let jeans_men = document.querySelectorAll('.jeans_men');
let homclot_men = document.querySelectorAll('.homclot_men');
let shoes_men = document.querySelectorAll('.shoes_men');
let pants_men = document.querySelectorAll('.pants_men');


//__________________________________Добавление товаров в единный массив_______________________________________________
let arr = [];
function arrGoods(selector){
    for(let i of selector){
        arr.push(i);
    }
}
arrGoods(tshirts_men);
arrGoods(jacket_men);
arrGoods(hoodies_men);
arrGoods(jeans_men);
arrGoods(homclot_men);
arrGoods(shoes_men);
arrGoods(pants_men);
//__________________________________Поиск кнопок из списка____________________________________________________________
let allBtn = document.querySelectorAll('.category__text');
//__________________________________Нахождение главной кнопки одежды_______________________________________________
let btn__clothes = document.querySelector('.btn__clothes');
//__________________________________Удаление display none из блока класса товара___________________________________
btn__clothes.addEventListener('click', function(e){
    for(let i of arr){
        i.classList.remove('dispNone');
        for(let iBtn of allBtn){
            iBtn.classList.remove('btnColor');
        }
    }
});

// __________________________________Фильтрация товаров по категориям___________________________________
for(let btn of allBtn){
    btn.addEventListener('click', function func(e){
        // console.log(e.currentTarget);
        ulBtn(btnPants, 'goods__block pants_men', 'dispNone', e);
        ulBtn(btnJacket, 'goods__block jacket_men', 'dispNone', e);
        ulBtn(btnHoodies, 'goods__block hoodies_men', 'dispNone', e);
        ulBtn(btnJeans, 'goods__block jeans_men', 'dispNone', e);
        ulBtn(btnHomclot, 'goods__block homclot_men', 'dispNone', e);
        ulBtn(btnTshirts, 'goods__block tshirts_men', 'dispNone', e);
        ulBtn(btnShoes, 'goods__block shoes_men', 'dispNone', e);
    });
}

function ulBtn(button, class1, classNone, e){
    if(e.currentTarget == button){
        for(let iBtn of allBtn){
                iBtn.classList.remove('btnColor');
            }
            button.classList.add('btnColor');
        for(let i of arr){
            if(i.getAttribute('class') !== class1){
                i.classList.add(classNone);
            }
            
            if(i.getAttribute('class') == class1 + ' ' + classNone){
                i.classList.remove(classNone);
            }
        }
    }
}
