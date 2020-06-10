console.log('run readCart.js');
addToCart();
link();

let cart = JSON.parse(localStorage.getItem('cart'));

let myCart = document.getElementById('myCart');

if (cart !== null) { // Si le panier  n'est pas vide
  for (let i = 0; i < cart.products.length; i++) {
    let eltCart = document.createElement("div");                            // Création de la div eltCart
    eltCart.classList.add("eltCart");                                       // Ajout de la class="eltCart" à la div
    eltCart.setAttribute("id", cart.products[i]._id);                 // Ajout de l'id pour la fermeture de la div au clique sur la poubelle
    eltCart.innerHTML = '<h3 class="nameOnCart" ><a href="product.html?_id=' + cart.products[i]._id + '">' + cart.products[i].name + '</a></h3>  <p class="price" >' + cart.products[i].price + ' € <i class="far fa-trash-alt" onclick="removeProductOfCart(' + '\'' + cart.products[i]._id + '\', ' + '\'' + i + '\'' + ')"></i></p>';
    document.querySelector(".myCart").appendChild(eltCart);

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
  document.querySelector(".myCart").appendChild(totalCart);

  let removeAll = document.createElement("div");
  removeAll.classList.add('removeAll');
  removeAll.setAttribute('id', 'removeAll');
  removeAll.innerHTML = '<div class ="btn" onclick="localStorage.removeItem(\'cart\'); window.location.href=\'../index.html\'" ><p><i class="far fa-trash-alt"></i> Tout retirer<em> du panier !</em></p></div>';
  document.querySelector(".myCart").appendChild(removeAll);

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
}
