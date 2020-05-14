console.log('run readCart.js');
let myProducts = JSON.parse(localStorage.getItem('cart'));
console.log(myProducts);
let myCart = document.getElementById('myCart');
console.log(myCart);

//for (var i = 0; i <= myProducts.products.length; i++) {
  let eltCart = document.createElement("div");                            // Création de la div eltCart
  eltCart.classList.add("eltCart");                                       // Ajout de la class="eltCart" à la div
  eltCart.innerHTML = '<p>' + myProducts.products[0].name + '</p>';
  document.querySelector(".myCart").appendChild(eltCart);

//}
