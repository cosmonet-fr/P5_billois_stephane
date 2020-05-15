console.log('run smallCart.js');

let myProducts = JSON.parse(localStorage.getItem('cart'));
console.log(myProducts);
let myCart = document.getElementById('cart');
console.log(myCart);

if (myProducts.products.length > 0) {

  // une variable pour le pluriel de "article(s)".
  if (myProducts.products.length > 1) {
    var s = 's';
  } else {
    var s = ' ';
  }


  let h3 = document.createElement('h3');
  h3.innerText = 'Votre panier contient ' + myProducts.products.length + ' article' + s;
  document.querySelector("#cart").appendChild(h3);
  let hr = document.createElement('hr');
  document.querySelector("#cart").appendChild(hr);

  for (let i = 0; i < myProducts.products.length; i++) {
    var eltCart = document.createElement("div");                            // Création de la div eltCart
    eltCart.classList.add('list')
    eltCart.innerHTML = '<div class="row"><ul><li >' + myProducts.products[i].name + '</li><li>' + myProducts.products[i].price + ' €</li></ul></div>';
    document.querySelector("#cart").appendChild(eltCart);

  }

  // Calcul du total du panier
  let sumCart = 0;
  for (let i = 0; i < myProducts.products.length; i++) {
    let unitPrice = parseInt(myProducts.products[i].price, 10);
    sumCart = sumCart + unitPrice;
  }


  let total =document.createElement('h3');
  total.innerText = 'Total: ' + sumCart + ' €';
  document.querySelector('#cart').appendChild(total);

  cart.removeChild(titleCart);
  cart.removeChild(hrCart);
  cart.removeChild(imgCart);
  cart.removeChild(sum);
}
