console.log('run addToCart.js');

let id = urlParam('id');
let _id = urlParam('_id');
let name = urlParam('name');
let price = urlParam('price');


//let curentProducts = JSON.parse(localStorage.getItem('cart'));
//console.log(curentProducts);

let cart = {createdAt: new Date(), products : []};

if (id != 'null' && _id != 'null' && name != 'null' && price != 'null') {
  console.log('Yo !!!');
  //Ajout des produit actuels dans l'objet JS
  let oldCart = JSON.parse(localStorage.getItem('cart'));
  for (let i = 0; i <= cart.products.length; i++) {
    console.log('BOUCLE !!!!');
    cart.products.push({
      id: oldCart.products[i].id,
      _id: oldCart.products[i]._id,
      name: oldCart.products[i].name,
      price: oldCart.products[i].price    // Problème avec cette BOUCLE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });
  }

  cart.products.push({
    id: id,
    _id: _id,
    name: name,
    price: price
});

cart.products.push({
  id: 44,
  _id: 44,
  name: 44,
  price: 44
});


localStorage.setItem('cart', JSON.stringify(cart));

} else {
  console.error('NO !!!');

}
