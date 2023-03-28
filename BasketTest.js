let goods__block = document.querySelectorAll('.goods__block');
console.log(goods__block);

goods__block.forEach((el, idx) => {
    console.dir(el);
    const btn = el.childNodes[0].childNodes[1];
    console.log(btn);
});