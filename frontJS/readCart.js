console.log('run readCart.js');
let myProducts = JSON.parse(localStorage.getItem('cart'));
console.log(myProducts);
let myCart = document.getElementById('myCart');
console.log(myCart);

for (let i = 0; i < myProducts.products.length; i++) {
  let eltCart = document.createElement("div");                            // Création de la div eltCart
  eltCart.classList.add("eltCart");                                       // Ajout de la class="eltCart" à la div
  eltCart.setAttribute("id", myProducts.products[i]._id);                 // Ajout de l'id pour la fermeture de la div au clique sur la poubelle
  eltCart.innerHTML = '<h3 class="nameOnCart" ><a href="product.html?id=' + myProducts.products[i].id + '&model=' + myProducts.products[i].name + '">' + myProducts.products[i].name + '</a></h3>  <p class="price" >' + myProducts.products[i].price + ' € <i class="far fa-trash-alt" onclick="removeProductOfCart(' + '\'' + myProducts.products[i]._id + '\', ' + '\'' + i + '\'' + ')"></i></p>';
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
totalCart.setAttribute('id', 'totalBox');
totalCart.innerHTML = '<h2>Total :</h2><p id="sum" class="price">' + sumCart + ' €</p>';
document.querySelector(".myCart").appendChild(totalCart);

let removeAll = document.createElement("div");
removeAll.classList.add('removeAll');
removeAll.setAttribute('id', 'removeAll');
removeAll.innerHTML = '<div class ="btn" onclick="localStorage.removeItem(\'cart\'); window.location.href=\'../index.html\'" ><p><i class="far fa-trash-alt"></i> Tout retirer du panier !</p></div>';
document.querySelector(".myCart").appendChild(removeAll);
