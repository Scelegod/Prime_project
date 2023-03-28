//__________________________________Поиск кнопок категорий_____________________________________________________________
let btnTshirts = document.querySelector('.btnTshirts');
let btnPants = document.querySelector('.btnPants');
let btnJacket = document.querySelector('.btnJacket');
let btnHoodies = document.querySelector('.btnHoodies');
let btnJeans = document.querySelector('.btnJeans');
let btnHomclot = document.querySelector('.btnHomclot');
let btnShoes = document.querySelector('.btnShoes');
let btnNewModels = document.querySelector('.btnNewModels');
let btnDiscounts = document.querySelector('.btnDiscounts');
//_____________________________________________________________________________________________________________________

//__________________________________Поиск товаров по категория_________________________________________________________
let tshirts = document.querySelectorAll('.tshirts_women');
let jacket = document.querySelectorAll('.jacket_women');
let hoodies = document.querySelectorAll('.hoodies_women');
let jeans = document.querySelectorAll('.jeans_women');
let homclot = document.querySelectorAll('.homclot_women');
let shoes = document.querySelectorAll('.shoes_women');
let pants = document.querySelectorAll('.pants_women');
let new_models = document.querySelectorAll('.new_models');
let discount = document.querySelectorAll('.discount');


//__________________________________Добавление товаров в единный массив_______________________________________________
let arr = [];
function arrGoods(selector){
    for(let i of selector){
        arr.push(i);
    }
}
arrGoods(tshirts);
arrGoods(jacket);
arrGoods(hoodies);
arrGoods(jeans);
arrGoods(homclot);
arrGoods(shoes);
arrGoods(pants);
arrGoods(new_models);
arrGoods(discount);
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
        ulBtn(btnPants,   'goods__block pants_women',   "new_models", "discount", 'dispNone', e);
        ulBtn(btnJacket,  'goods__block jacket_women',  "new_models", "discount", 'dispNone', e);
        ulBtn(btnHoodies, 'goods__block hoodies_women', "new_models", "discount", 'dispNone', e);
        ulBtn(btnJeans,   'goods__block jeans_women',   "new_models", "discount", 'dispNone', e);
        ulBtn(btnHomclot, 'goods__block homclot_women', "new_models", "discount", 'dispNone', e);
        ulBtn(btnTshirts, 'goods__block tshirts_women', "new_models", "discount", 'dispNone', e);
        ulBtn(btnShoes,   'goods__block shoes_women',   "new_models", "discount", 'dispNone', e);
        ulBtn(btnNewModels,'goods__block', "new_models", "discount", 'dispNone', e);
        ulBtn(btnDiscounts,'goods__block', "new_models", "discount", 'dispNone', e);
    });
}

function ulBtn(button, class1, class2, class3, classNone, e){
    if(e.currentTarget == button){
        for(let iBtn of allBtn){
                iBtn.classList.remove('btnColor');
            }
            button.classList.add('btnColor');
        for(let i of arr){
            if(i.getAttribute('class') !== class1 || i.getAttribute('class') !== class1 + ' ' + class2 || i.getAttribute('class') !== class1 + ' ' + class3){
                i.classList.add(classNone);
            }
            
            if(i.getAttribute('class') == class1 + ' ' + classNone || i.getAttribute('class') == class1 + ' ' + class2 + ' ' + classNone || i.getAttribute('class') == class1 + ' ' + class3 + ' ' + classNone){
                i.classList.remove(classNone);
            }
        }
    }
    if(e.currentTarget == button && button == btnNewModels){
        for(let i of arr){
            if(i.classList.contains('new_models')){
                i.classList.remove(classNone);
            }
        }
    }
    if(e.currentTarget == button && button == btnDiscounts){
        for(let i of arr){
            if(i.classList.contains('discount')){
                i.classList.remove(classNone);
            }
        }
    }
}

