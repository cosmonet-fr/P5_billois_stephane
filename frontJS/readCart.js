console.log('run readCart.js');
let myProducts = JSON.parse(localStorage.getItem('cart'));
console.log(myProducts);
let myCart = document.getElementById('myCart');
console.log(myCart);

for (let i = 0; i < myProducts.products.length; i++) {
  let eltCart = document.createElement("div");                            // Création de la div eltCart
  eltCart.classList.add("eltCart");                                       // Ajout de la class="eltCart" à la div
  eltCart.innerHTML = '<h2 class="nameOnCart" >' + myProducts.products[i].name + '</h2>  <p class="price" >' + myProducts.products[i].price + ' € <i class="far fa-trash-alt"></i></p>';
  document.querySelector(".myCart").appendChild(eltCart);

}
// Calcul du total du panier
let sumCart = 0;
for (let i = 0; i < myProducts.products.length; i++) {
  let unitPrice = parseInt(myProducts.products[i].price, 10);
  sumCart = sumCart + unitPrice;
}
console.log(sumCart);
let totalCart = document.createElement("div"); 
totalCart.classList.add("totalCart");
totalCart.innerHTML = '<h2>Total :</h2><p class="price">' + sumCart + ' €</p>';
document.querySelector(".myCart").appendChild(totalCart);
