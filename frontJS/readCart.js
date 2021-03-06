console.log('run readCart.js');
addToCart();
link();

let cart = JSON.parse(localStorage.getItem('cart'));

let myList = document.getElementById('myList');
let myTotal = document.getElementById('myTotal');

for (let i = 0; i < cart.products.length; i++) {
  fetch('http://localhost:3000/api/cameras/' + cart.products[i]._id) //utilisation des data de l'API plutot que param de l'url, pour éviter faille XSS
  .then(response => response.json())
  .then(apiData => {

    ///////////////////////
    let eltCart = document.createElement("div");                            // Création de la div eltCart
    eltCart.classList.add("eltCart");                                       // Ajout de la class="eltCart" à la div
    eltCart.setAttribute("id", cart.products[i]._id);                 // Ajout de l'id pour la fermeture de la div au clique sur la poubelle
    eltCart.innerHTML = '<h3 class="nameOnCart" ><a href="product.html?_id=' + apiData._id + '">' + apiData.name + '</a></h3>  <p class="price" >' + apiData.price + ' € <i class="far fa-trash-alt" onclick="removeProductOfCart(' + '\'' + apiData._id + '\', ' + '\'' + i + '\'' + ')"></i></p>';
    document.querySelector(".myList").appendChild(eltCart);


  })

}

// Calcul du total du panier
let sumCart = 0;
for (let i = 0; i < cart.products.length; i++) {
  let unitPrice = parseInt(cart.products[i].price, 10);
  sumCart = sumCart + unitPrice;
}

let totalCart = document.createElement("div");
totalCart.classList.add("totalCart");
totalCart.setAttribute('id', 'totalBox');
totalCart.innerHTML = '<h2>Total :</h2><p id="sum" class="price">' + sumCart + ' €</p>';
document.querySelector(".myTotal").appendChild(totalCart);

let removeAll = document.createElement("div");
removeAll.classList.add('removeAll');
removeAll.setAttribute('id', 'removeAll');
removeAll.innerHTML = '<div class ="btn" onclick="localStorage.removeItem(\'cart\'); window.location.href=\'../index.html\'" ><p><i class="far fa-trash-alt"></i> Tout retirer<em> du panier !</em></p></div>';
document.querySelector(".myTotal").appendChild(removeAll);


///////////////////////// Form avec POST /////////////////////////
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let formData = new FormData(form);

  const contactData = {
    "name": null
  };

  formData.forEach((value, key) => {formData[key] = value});
  localStorage.setItem('contact', JSON.stringify(formData));
  window.location.href='confirm.html';

});
