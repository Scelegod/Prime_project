"use strict"
let goods2 = [
    {src: '/womenCategory/assets/img/Футболка_1.png', name: 'VERSACE GODDESS OVERSIZED T-SHIRT', catigories: 'Фуфайка (Футболка)', price:'5600', class: 'goods__block tshirts'},
    {src: '/womenCategory/assets/img/Футболка_2.png', name: 'CRYSTAL MEDUSA LOGO T-SHIRT',       catigories: 'Хлопковая футболка', price:'10400',  class: 'goods__block tshirts'},
    {src: '/womenCategory/assets/img/Футболка_3.png', name: 'SPRING FESTIVAL RABBIT T-SHIRT',    catigories: 'Хлопковая футболка', price:'7700',  class: 'goods__block tshirts'},
    {src: '/womenCategory/assets/img/Футболка_4.png', name: 'CRYSTAL VERSACE ALLOVER T-SHIRT',   catigories: 'Хлопковая футболка', price:'11700',  class: 'goods__block tshirts'},
    {src: '/womenCategory/assets/img/Футболка_5.png', name: 'SPRING FESTIVAL RABBIT T-SHIRT',    catigories: 'Хлопковая футболка', price:'5600',  class: 'goods__block tshirts'},
    {src: '/womenCategory/assets/img/Футболка_6.png', name: `DISTRESSED LOGO T-SHIRT`,           catigories: 'Фуфайка (Футболка)', price:'5600', class: 'goods__block tshirts'},
    {src: '/womenCategory/assets/img/Футболка_7.png', name: 'STUDDED MEDUSA CROP TOP',           catigories: 'Фуфайка (Футболка)', price:'7700',  class: 'goods__block tshirts'},
    {src: '/womenCategory/assets/img/Футболка_8.png', name: `CRYSTAL MEDUSA T-SHIRT`,            catigories: 'Хлопковая футболка', price:'7700',  class: 'goods__block tshirts'},
    {src: '/womenCategory/assets/img/Футболка_9.png', name: '"TI AMO" T-SHIRT',                  catigories: 'Фуфайка (Футболка)', price:'3900',  class: 'goods__block tshirts'},

    {src: '/womenCategory/assets/img/Куртка_1.png', name: 'VERSACE ALLOVER DENIM JACKET',        catigories: 'Куртка', price:'14700', class: 'goods__block jacket'},
    {src: '/womenCategory/assets/img/Куртка_2.png', name: 'BAROCCO REVERSIBLE BOMBER JACKET',    catigories: 'Куртка', price:'20000', class: 'goods__block jacket'},
    {src: '/womenCategory/assets/img/Куртка_3.png', name: 'SPRING FESTIVAL RABBIT BOMBER JACKET',catigories: 'Куртка', price:'19100', class: 'goods__block jacket'},
    {src: '/womenCategory/assets/img/Куртка_4.png', name: 'MEDUSA WINDBREAKER JACKET',           catigories: 'Куртка', price:'16100', class: 'goods__block jacket'},
    {src: '/womenCategory/assets/img/Куртка_5.png', name: 'LOGO PUFFER JACKET',                  catigories: 'Куртка', price:'13000', class: 'goods__block jacket'},
    {src: '/womenCategory/assets/img/Куртка_6.png', name: 'MEDUSA LEATHER BIKER JACKET',         catigories: 'Куртка', price:'30400', class: 'goods__block jacket'},
    {src: '/womenCategory/assets/img/Куртка_7.png', name: 'MEDUSA LONG WOOL COAT',               catigories: 'Куртка', price:'26000', class: 'goods__block jacket'},
    {src: '/womenCategory/assets/img/Куртка_8.png', name: 'REVERSIBLE MEDUSA ORCHID JACKET',     catigories: 'Куртка', price:'24300', class: 'goods__block jacket'},
    {src: '/womenCategory/assets/img/Куртка_9.png', name: 'VERSACE GODDESS CROP BOMBER JACKET',  catigories: 'Куртка', price:'19100', class: 'goods__block jacket'},

    {src: '/womenCategory/assets/img/Толстовка_1.png', name: 'VERSACE GODDESS HOODIE',              catigories: 'Толстовки', price:'8600', class: 'goods__block hoodies'},
    {src: '/womenCategory/assets/img/Толстовка_2.png', name: 'LOGO HOODIE',                         catigories: 'Толстовки', price:'8600', class: 'goods__block hoodies'},
    {src: '/womenCategory/assets/img/Толстовка_3.png', name: 'DISTRESSED SLASHED OVERSIZED HOODIE', catigories: 'Толстовки', price:'13500', class: 'goods__block hoodies'},
    {src: '/womenCategory/assets/img/Толстовка_4.png', name: 'STUDDED DISTRESSED LOGO HOODIE',      catigories: 'Толстовки', price:'11700', class: 'goods__block hoodies'},
    {src: '/womenCategory/assets/img/Толстовка_5.png', name: 'VERSACE GODDESS STUDDED CROP HOODIE', catigories: 'Толстовки', price:'10800', class: 'goods__block hoodies'},
    {src: '/womenCategory/assets/img/Толстовка_6.png', name: 'STUDDED DISTRESSED LOGO HOODIE',      catigories: 'Толстовки', price:'11700', class: 'goods__block hoodies'},
    {src: '/womenCategory/assets/img/Толстовка_7.png', name: 'SPRING FESTIVAL RABBIT KNIT SWEATERS',catigories: 'Толстовки', price:'10000', class: 'goods__block hoodies'},
    {src: '/womenCategory/assets/img/Толстовка_8.png', name: 'LA GRECA MEDUSA JACQUARD SWEATER',    catigories: 'Толстовки', price:'6000', class: 'goods__block hoodies'},
    {src: '/womenCategory/assets/img/Толстовка_9.png', name: 'SLASHED KNIT SWEATER',                catigories: 'Толстовки', price:'10800', class: 'goods__block hoodies'},

    {src: '/womenCategory/assets/img/Джинсы_1.png', name: 'CRYSTAL VERSACE ALLOVER JEANS',   catigories: 'Джинсы', price:'10000',  class: 'goods__block jeans'},
    {src: '/womenCategory/assets/img/Джинсы_2.png', name: 'SLASHED WIDE-LEG JEANS',          catigories: 'Джинсы', price:'8200',  class: 'goods__block jeans'},
    {src: '/womenCategory/assets/img/Джинсы_3.png', name: 'VERSACE ALLOVER FLARED JEANS',    catigories: 'Джинсы', price:'10000',  class: 'goods__block jeans'},
    {src: '/womenCategory/assets/img/Джинсы_4.png', name: 'MEDUSA PANELLED SKINNY JEANS',    catigories: 'Джинсы', price:'6900',  class: 'goods__block jeans'},
    {src: '/womenCategory/assets/img/Джинсы_5.png', name: 'MEDUSA STUDDED SKINNY JEANS',     catigories: 'Джинсы', price:'8200',  class: 'goods__block jeans'},
    {src: '/womenCategory/assets/img/Джинсы_6.png', name: 'VERSACE ALLOVER WIDE-LEG JEANS',  catigories: 'Джинсы', price:'10000',  class: 'goods__block jeans'},
    {src: '/womenCategory/assets/img/Джинсы_7.png', name: 'VERSACE ALLOVER DENIM MINI SKIRT',catigories: 'Джинсы', price:'7700', class: 'goods__block jeans'},
    {src: '/womenCategory/assets/img/Джинсы_8.png', name: 'MEDUSA DENIM SHORTS',             catigories: 'Джинсы', price:'5600',  class: 'goods__block jeans'},
    {src: '/womenCategory/assets/img/Джинсы_9.png', name: 'VERSACE ALLOVER FLARED JEANS',    catigories: 'Джинсы', price:'10000',  class: 'goods__block jeans'},

    {src: '/womenCategory/assets/img/Дом_одежда_1.png', name: 'BAROCCO SILK PYJAMA SLIP DRESS',    catigories: 'Домашняя одежда', price:'5000',  class: 'goods__block homclot'},
    {src: '/womenCategory/assets/img/Дом_одежда_2.png', name: 'BAROCCO PRINT SILK PYJAMA BOTTOMS', catigories: 'Домашняя одежда', price:'7800',  class: 'goods__block homclot'},
    {src: '/womenCategory/assets/img/Дом_одежда_3.png', name: 'BAROCCO JACQUARD CROP PYJAMA TOP',  catigories: 'Домашняя одежда', price:'6000', class: 'goods__block homclot'},
    {src: '/womenCategory/assets/img/Дом_одежда_4.png', name: 'BAROCCO PRINT SILK PYJAMA SHIRT',   catigories: 'Домашняя одежда', price:'10000',  class: 'goods__block homclot'},
    {src: '/womenCategory/assets/img/Дом_одежда_5.png', name: 'BAROCCO PRINT SILK PYJAMA SHORTS',  catigories: 'Домашняя одежда', price:'3800',   class: 'goods__block homclot'},
    {src: '/womenCategory/assets/img/Дом_одежда_6.png', name: 'BAROCCO PRINT SILK UNDERSHIRT',     catigories: 'Домашняя одежда', price:'3200',   class: 'goods__block homclot'},
    {src: '/womenCategory/assets/img/Дом_одежда_7.png', name: 'GRECA BORDER BAROCCO PYJAMA SHORTS',catigories: 'Домашняя одежда', price:'3400',   class: 'goods__block homclot'},
    {src: '/womenCategory/assets/img/Дом_одежда_8.png', name: 'GRECA BORDER SPORTS BRA',           catigories: 'Домашняя одежда', price:'600', class: 'goods__block homclot'},
    {src: '/womenCategory/assets/img/Дом_одежда_9.png', name: 'CRYSTAL I ♡ BAROQUE BATHROBE',      catigories: 'Домашняя одежда', price:'5900',  class: 'goods__block homclot'},

    {src: '/womenCategory/assets/img/Обувь_1.png', name: 'GRECA CHELSEA BOOTS',                   catigories: 'Обувь', price:'8200',  class: 'goods__block shoes'},
    {src: '/womenCategory/assets/img/Обувь_2.png', name: 'TRIGRECA SNEAKERS',                     catigories: 'Обувь', price:'6800', class: 'goods__block shoes'},
    {src: '/womenCategory/assets/img/Обувь_3.png', name: 'TRIGRECA SNEAKERS',                     catigories: 'Обувь', price:'6800',  class: 'goods__block shoes'},
    {src: '/womenCategory/assets/img/Обувь_4.png', name: 'GRECA SNEAKERS',                        catigories: 'Обувь', price:'4700',  class: 'goods__block shoes'},
    {src: '/womenCategory/assets/img/Обувь_5.png', name: 'ODISSEA',                               catigories: 'Обувь', price:'6200',  class: 'goods__block shoes'},
    {src: '/womenCategory/assets/img/Обувь_6.png', name: 'GRECA BAROCCO PRINT SNEAKERS',          catigories: 'Обувь', price:'4200',  class: 'goods__block shoes'},
    {src: '/womenCategory/assets/img/Обувь_7.png', name: 'CRYSTAL VERSACE ALLOVER GRECA TRAINERS',catigories: 'Обувь', price:'5600',  class: 'goods__block shoes'},
    {src: '/womenCategory/assets/img/Обувь_8.png', name: 'VERSACE GODDESS GRECA SNEAKERS',        catigories: 'Обувь', price:'5600',  class: 'goods__block shoes'},
    {src: '/womenCategory/assets/img/Обувь_9.png', name: 'GRECA MAZE CRYSTAL FLAT SANDALS',       catigories: 'Обувь', price:'6800',  class: 'goods__block shoes'},

    {src: '/womenCategory/assets/img/Штаны_1.png', name: 'VERSACE ALLOVER LEGGINGS',    catigories: 'Брюки', price:'5600', class: 'goods__block pants'},
    {src: '/womenCategory/assets/img/Штаны_2.png', name: 'MEDUSA BIGGIE PANTS',         catigories: 'Брюки', price:'10800', class: 'goods__block pants'},
    {src: '/womenCategory/assets/img/Штаны_3.png', name: 'FLARED FORMAL PANTS',         catigories: 'Брюки', price:'6800', class: 'goods__block pants'},
    {src: '/womenCategory/assets/img/Штаны_4.png', name: 'VERSACE ALLOVER VELVET PANTS',catigories: 'Брюки', price:'10800', class: 'goods__block pants'},
    {src: '/womenCategory/assets/img/Штаны_5.png', name: 'WIDE CARGO PANTS',            catigories: 'Брюки', price:'11700', class: 'goods__block pants'},
    {src: '/womenCategory/assets/img/Штаны_6.png', name: 'BAROCCO LEGGINGS',            catigories: 'Брюки', price:'7400', class: 'goods__block pants'},
    {src: '/womenCategory/assets/img/Штаны_7.png', name: 'PLEATED WIDE-LEG PANTS',      catigories: 'Брюки', price:'10800', class: 'goods__block pants'},
    {src: '/womenCategory/assets/img/Штаны_8.png', name: 'LOGO CARGO PANTS',            catigories: 'Брюки', price:'11700', class: 'goods__block pants'},
    {src: '/womenCategory/assets/img/Штаны_9.png', name: 'LATEX LEGGINGS',              catigories: 'Брюки', price:'13000', class: 'goods__block pants'},
];