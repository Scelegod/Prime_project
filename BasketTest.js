let goods__block = document.querySelectorAll('.goods__block');

goods__block.forEach((el, idx) => {
    const btn = el.childNodes[0].childNodes[1];
    
    const img = el.childNodes[0].childNodes[0].src;
    const title = el.childNodes[1].innerText;
    const catigories = el.childNodes[2].innerText;
    const price = el.childNodes[3].childNodes[0].innerText;
    const id = el.dataset.id;
    btn.addEventListener('click', () =>{
        const cartStorage = localStorage.getItem('cart') || "[]";
        const cart = JSON.parse(cartStorage);
        localStorage.setItem("cart", JSON.stringify([...cart, card]));

        const card = { id, img, title, catigories, price, counter: 1};

        console.log([...cart]);
    });
});