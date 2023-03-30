let goods__block = document.querySelectorAll('.goods__block');
let basket__number = document.querySelector('.basket__number');

let number = localStorage.getItem('basket__number');
    let number2 = JSON.parse(number);
    basket__number.textContent = number2;

goods__block.forEach((el, idx) => {
    const btn = el.childNodes[0].childNodes[1];
    let id = el.dataset.id;
    btn.addEventListener('click', (e) =>{
        let cartData = getCartData() || {},
        el = e.target.parentNode.parentNode,
        id = el.getAttribute('data-id'),
        title = el.childNodes[1].innerText,
        price = el.childNodes[3].childNodes[0].innerText,
        catigories = el.childNodes[2].innerText,
        img = el.childNodes[0].childNodes[0].src;
        if(cartData.hasOwnProperty(id)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
          cartData[id][2] += 1;
        } else { // если товара в корзине еще нет, то добавляем в объект
            cartData[id] = [title, price, 1, catigories, img];
        }
        if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
            let sum = 0;
            for(let i in cartData){
                sum = sum + cartData[i][2];
                basket__number.textContent = sum;
                localStorage.setItem('basket__number', JSON.stringify(basket__number.textContent));

            }
        }
    });
});


function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
  }
  
  // Записываем данные в LocalStorage
  function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
  }