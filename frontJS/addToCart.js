console.log('run addToCart.js');

let id = urlParam('id');
let _id = urlParam('_id');
let name = urlParam('name');
let price = urlParam('price');


let oldCart = JSON.parse(localStorage.getItem('cart'));
console.log(oldCart);

let cart = {createdAt: new Date(), products : []};

if (id != 'null' && _id != 'null' && name != 'null' && price != 'null') {
  console.log('Yo !!!');

  //Vérifier si il y a quelque chose dans le panier
  if (oldCart !== null) {
    let nbOldProducts = oldCart.products.length;
    console.log('COMPTEUR : ' + nbOldProducts );
    //Si il n'est pas vide, Ajout des produit actuels dans l'objet JS
    for (let i = 0; i < nbOldProducts; i++) {
      console.log('BOUCLE !!!!');
      console.log(i);
      console.log(oldCart.products[i].id);
      console.log(oldCart.products[i]._id);
      console.log(oldCart.products[i].name);
      console.log(oldCart.products[i].price);
      cart.products.push({
        id: oldCart.products[i].id,
        _id: oldCart.products[i]._id,
        name: oldCart.products[i].name,
        price: oldCart.products[i].price
      });
    }

  }

  cart.products.push({
    id: id,
    _id: _id,
    name: name,
    price: price
});

localStorage.setItem('cart', JSON.stringify(cart));

} else {
  console.error('NO !!!');

}
