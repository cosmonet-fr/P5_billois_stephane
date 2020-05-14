console.log('run addToCart.js');

let id = urlParam('id');
let _id = urlParam('_id');
let name = urlParam('name');
let price = urlParam('price');


const curentProducts = JSON.parse(localStorage.getItem('cart.products'));
console.log(curentProducts);

let cart = {createdAt: new Date(), products : []};

if (id != 'null' && _id != 'null' && name != 'null' && price != 'null') {
  console.log('Yo !!!');
  //Ajout des produit actuels dans l'objet JS
  let oldCart = JSON.parse(localStorage.getItem('cart'));
  for (let i = 0; i <= localStorage.length; i++) {
    cart.products.push({
      id: oldCart.products[i].id,
      _id: oldCart.products[i]._id,
      name: oldCart.products[i].name,
      price: oldCart.products[i].price
  });
  }

  cart.products.push({
    id: id,
    _id: _id,
    name: name,
    price: price
});


localStorage.setItem('cart', JSON.stringify(cart));

//console.log('Dans l\'autre sens !!!!!');


//console.log(localStorage.getItem('cart'));

//const fin = JSON.parse(localStorage.getItem('cart'));

//console.log('fin = ' + fin.products[1].name);



} else {
  console.error('NO !!!');

}
