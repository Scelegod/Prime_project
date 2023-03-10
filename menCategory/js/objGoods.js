"use strict"
let goods = { 
    "1" : {src: '/menCategory/assets/img/Футболка_1.png', name: 'VERSACE JEANS COUTURE', catigories: 'Фуфайка (Футболка)', price:'14590', class: 'goods__block tshirts_men'},
    "2" : {src: '/menCategory/assets/img/Футболка_2.png', name: 'Guess Jeans',           catigories: 'Хлопковая футболка', price:'6890',  class: 'goods__block tshirts_men'},
    "3" : {src: '/menCategory/assets/img/Футболка_3.png', name: 'Guess Jeans',           catigories: 'Хлопковая футболка', price:'6290',  class: 'goods__block tshirts_men'},
    "4" : {src: '/menCategory/assets/img/Футболка_4.png', name: 'HUGO',                  catigories: 'Хлопковая футболка', price:'6790',  class: 'goods__block tshirts_men'},
    "5" : {src: '/menCategory/assets/img/Футболка_5.png', name: 'Guess Jeans',           catigories: 'Хлопковая футболка', price:'5690',  class: 'goods__block tshirts_men'},
    "6" : {src: '/menCategory/assets/img/Футболка_6.png', name: `Marc O'Polo`,           catigories: 'Фуфайка (Футболка)', price:'10590', class: 'goods__block tshirts_men'},
    "7" : {src: '/menCategory/assets/img/Футболка_7.png', name: 'Esprit Edc',            catigories: 'Фуфайка (Футболка)', price:'2990',  class: 'goods__block tshirts_men'},
    "8" : {src: '/menCategory/assets/img/Футболка_8.png', name: `Marc O'Polo`,           catigories: 'Хлопковая футболка', price:'5490',  class: 'goods__block tshirts_men'},
    "9" : {src: '/menCategory/assets/img/Футболка_9.png', name: 'BOSS',                  catigories: 'Фуфайка (Футболка)', price:'8790',  class: 'goods__block tshirts_men'},

    "10" : {src: '/menCategory/assets/img/Куртка_1.png', name: 'VARSITY NYLON BOMBER JACKET',        catigories: 'Куртка', price:'16200', class: 'goods__block jacket_men'},
    "11" : {src: '/menCategory/assets/img/Куртка_2.png', name: 'VARSITY LOGO BOMBER JACKET',         catigories: 'Куртка', price:'23100', class: 'goods__block jacket_men'},
    "12" : {src: '/menCategory/assets/img/Куртка_3.png', name: 'VERSACE ALLOVER BOMBER JACKET',      catigories: 'Куртка', price:'16200', class: 'goods__block jacket_men'},
    "13" : {src: '/menCategory/assets/img/Куртка_4.png', name: 'BAROCCO 660 WINDBREAKER JACKET',     catigories: 'Куртка', price:'12800', class: 'goods__block jacket_men'},
    "14" : {src: '/menCategory/assets/img/Куртка_5.png', name: 'BAROCCO 660 QUILTED BLOUSON JACKET', catigories: 'Куртка', price:'25500', class: 'goods__block jacket_men'},
    "15" : {src: '/menCategory/assets/img/Куртка_6.png', name: 'NYLON GRAPHIC LOGO BLOUSON JACKET',  catigories: 'Куртка', price:'19600', class: 'goods__block jacket_men'},
    "16" : {src: '/menCategory/assets/img/Куртка_7.png', name: 'MEDUSA BLOUSON PUFFER JACKET',       catigories: 'Куртка', price:'23000', class: 'goods__block jacket_men'},
    "17" : {src: '/menCategory/assets/img/Куртка_8.png', name: 'LA GRECA PUFFER JACKET',             catigories: 'Куртка', price:'15300', class: 'goods__block jacket_men'},
    "18" : {src: '/menCategory/assets/img/Куртка_9.png', name: 'LOGO WINDBREAKER JACKET',            catigories: 'Куртка', price:'21300', class: 'goods__block jacket_men'},

    "19" : {src: '/menCategory/assets/img/Толстовка_1.png', name: 'VARSITY LOGO SWEATSHIRT',       catigories: 'Толстовки', price:'6400', class: 'goods__block hoodies_men'},
    "20" : {src: '/menCategory/assets/img/Толстовка_2.png', name: 'STUDDED VARSITY LOGO HOODIE',   catigories: 'Толстовки', price:'10200', class: 'goods__block hoodies_men'},
    "21" : {src: '/menCategory/assets/img/Толстовка_3.png', name: 'MEDUSA HOODIE',                 catigories: 'Толстовки', price:'7200', class: 'goods__block hoodies_men'},
    "22" : {src: '/menCategory/assets/img/Толстовка_4.png', name: 'BAROQUE CRYSTAL GRID HOODIE',   catigories: 'Толстовки', price:'12800', class: 'goods__block hoodies_men'},
    "23" : {src: '/menCategory/assets/img/Толстовка_5.png', name: 'SAFETY PIN GRAPHIC SWEATSHIRT', catigories: 'Толстовки', price:'5800', class: 'goods__block hoodies_men'},
    "24" : {src: '/menCategory/assets/img/Толстовка_6.png', name: 'MEDUSA GRAPHIC SWEATSHIRT',     catigories: 'Толстовки', price:'6400', class: 'goods__block hoodies_men'},
    "25" : {src: '/menCategory/assets/img/Толстовка_7.png', name: 'MEDUSA LOGO SWEATSHIRT',        catigories: 'Толстовки', price:'8400', class: 'goods__block hoodies_men'},
    "26" : {src: '/menCategory/assets/img/Толстовка_8.png', name: 'LA MASCHERA LOGO SWEATSHIRT',   catigories: 'Толстовки', price:'6700', class: 'goods__block hoodies_men'},
    "27" : {src: '/menCategory/assets/img/Толстовка_9.png', name: 'MEDUSA HOODIE',                 catigories: 'Толстовки', price:'7200', class: 'goods__block hoodies_men'},

    "28" : {src: '/menCategory/assets/img/Джинсы_1.png', name: 'VERSACE WIDE-LEG JEANS',   catigories: 'Джинсы', price:'5500',  class: 'goods__block jeans_men'},
    "29" : {src: '/menCategory/assets/img/Джинсы_2.png', name: 'MEDUSA SLIM-FIT JEANS',    catigories: 'Джинсы', price:'4600',  class: 'goods__block jeans_men'},
    "30" : {src: '/menCategory/assets/img/Джинсы_3.png', name: 'MEDUSA JEANS',             catigories: 'Джинсы', price:'5000',  class: 'goods__block jeans_men'},
    "31" : {src: '/menCategory/assets/img/Джинсы_4.png', name: 'LA GRECA LASERED JEANS',   catigories: 'Джинсы', price:'7500',  class: 'goods__block jeans_men'},
    "32" : {src: '/menCategory/assets/img/Джинсы_5.png', name: 'LA MEDUSA SLIM-FIT JEANS', catigories: 'Джинсы', price:'4200',  class: 'goods__block jeans_men'},
    "33" : {src: '/menCategory/assets/img/Джинсы_6.png', name: 'STUDDED MEDUSA JEANS',     catigories: 'Джинсы', price:'5800',  class: 'goods__block jeans_men'},
    "34" : {src: '/menCategory/assets/img/Джинсы_7.png', name: 'VERSACE ALLOVER JEANS',    catigories: 'Джинсы', price:'10600', class: 'goods__block jeans_men'},
    "35" : {src: '/menCategory/assets/img/Джинсы_8.png', name: 'SLIM FIT BLACK JEANS',     catigories: 'Джинсы', price:'4200',  class: 'goods__block jeans_men'},
    "36" : {src: '/menCategory/assets/img/Джинсы_9.png', name: 'MEDUSA TWISTED JEANS',     catigories: 'Джинсы', price:'2900',  class: 'goods__block jeans_men'},

    "37" : {src: '/menCategory/assets/img/Дом_одежда_1.png', name: 'BAROCCO 660 SILK PAJAMA TOP',     catigories: 'Домашняя одежда', price:'9800',  class: 'goods__block homclot_men'},
    "38" : {src: '/menCategory/assets/img/Дом_одежда_2.png', name: 'BAROCCO 660 SILK PAJAMA BOTTOMS', catigories: 'Домашняя одежда', price:'7600',  class: 'goods__block homclot_men'},
    "39" : {src: '/menCategory/assets/img/Дом_одежда_3.png', name: 'MASCHERA BAROQUE PYJAMA TOP',     catigories: 'Домашняя одежда', price:'11000', class: 'goods__block homclot_men'},
    "40" : {src: '/menCategory/assets/img/Дом_одежда_4.png', name: 'MASCHERA BAROQUE PYJAMA TOP',     catigories: 'Домашняя одежда', price:'8400',  class: 'goods__block homclot_men'},
    "41" : {src: '/menCategory/assets/img/Дом_одежда_5.png', name: 'MEDUSA UNDERSHIRT 2-PACK',        catigories: 'Домашняя одежда', price:'900',   class: 'goods__block homclot_men'},
    "42" : {src: '/menCategory/assets/img/Дом_одежда_6.png', name: 'EDUSA UNDERSHIRT 2-PACK',         catigories: 'Домашняя одежда', price:'900',   class: 'goods__block homclot_men'},
    "43" : {src: '/menCategory/assets/img/Дом_одежда_7.png', name: 'MEDUSA SLEEVELESS UNDERSHIRT',    catigories: 'Домашняя одежда', price:'500',   class: 'goods__block homclot_men'},
    "44" : {src: '/menCategory/assets/img/Дом_одежда_8.png', name: 'BAROCCO SILK ROBE',               catigories: 'Домашняя одежда', price:'11900', class: 'goods__block homclot_men'},
    "45" : {src: '/menCategory/assets/img/Дом_одежда_9.png', name: 'LA GRECA SILK PAJAMA TOP',        catigories: 'Домашняя одежда', price:'4900',  class: 'goods__block homclot_men'},
    
    "46" : {src: '/menCategory/assets/img/Обувь_1.png', name: 'ODISSEA SNEAKERS',                  catigories: 'Обувь', price:'6100',  class: 'goods__block shoes_men'},
    "47" : {src: '/menCategory/assets/img/Обувь_2.png', name: 'CRYSTAL ODISSEA SNEAKERS',          catigories: 'Обувь', price:'15200', class: 'goods__block shoes_men'},
    "48" : {src: '/menCategory/assets/img/Обувь_3.png', name: 'GRECA ODISSEA SNEAKERS',            catigories: 'Обувь', price:'5000',  class: 'goods__block shoes_men'},
    "49" : {src: '/menCategory/assets/img/Обувь_4.png', name: 'ODISSEA SNEAKERS',                  catigories: 'Обувь', price:'6100',  class: 'goods__block shoes_men'},
    "50" : {src: '/menCategory/assets/img/Обувь_5.png', name: 'GRECA ODISSEA SNEAKERS',            catigories: 'Обувь', price:'5000',  class: 'goods__block shoes_men'},
    "51" : {src: '/menCategory/assets/img/Обувь_6.png', name: 'TRIGRECA SNEAKERS',                 catigories: 'Обувь', price:'6900',  class: 'goods__block shoes_men'},
    "52" : {src: '/menCategory/assets/img/Обувь_7.png', name: 'TRIGRECA SNEAKERS',                 catigories: 'Обувь', price:'6700',  class: 'goods__block shoes_men'},
    "53" : {src: '/menCategory/assets/img/Обувь_8.png', name: 'TRIGRECA SNEAKERS',                 catigories: 'Обувь', price:'6700',  class: 'goods__block shoes_men'},
    "54" : {src: '/menCategory/assets/img/Обувь_9.png', name: 'VERSACE ALLOVER LA GRECA SNEAKERS', catigories: 'Обувь', price:'4100',  class: 'goods__block shoes_men'},

    "55" : {src: '/menCategory/assets/img/Брюки_1.png', name: 'MEDUSA LA GRECA CARGO TROUSERS',      catigories: 'Брюки', price:'7500', class: 'goods__block pants_men'},
    "56" : {src: '/menCategory/assets/img/Брюки_2.png', name: 'VERSACE ALLOVER TERRY SWEATPANTS',    catigories: 'Брюки', price:'6700', class: 'goods__block pants_men'},
    "57" : {src: '/menCategory/assets/img/Брюки_3.png', name: 'MEDUSA SLIM-FIT PANTS',               catigories: 'Брюки', price:'5500', class: 'goods__block pants_men'},
    "58" : {src: '/menCategory/assets/img/Брюки_4.png', name: 'LA GRECA PANTS',                      catigories: 'Брюки', price:'6700', class: 'goods__block pants_men'},
    "59" : {src: '/menCategory/assets/img/Брюки_5.png', name: 'LOGO SWEATPANTS',                     catigories: 'Брюки', price:'6400', class: 'goods__block pants_men'},
    "60" : {src: '/menCategory/assets/img/Брюки_6.png', name: 'NYLON CARGO PANTS',                   catigories: 'Брюки', price:'9300', class: 'goods__block pants_men'},
    "61" : {src: '/menCategory/assets/img/Брюки_7.png', name: 'SUIT TROUSERS',                       catigories: 'Брюки', price:'3200', class: 'goods__block pants_men'},
    "62" : {src: '/menCategory/assets/img/Брюки_8.png', name: 'MEDUSA BIGGIE LOGO SWEATPANTS',       catigories: 'Брюки', price:'2900', class: 'goods__block pants_men'},
    "63" : {src: '/menCategory/assets/img/Брюки_9.png', name: 'PASTEL PINSTRIPE FLANNEL WOOL PANTS', catigories: 'Брюки', price:'6600', class: 'goods__block pants_men'},
};