console.log('run addToCart.js');

let id = urlParam('id');
let _id = urlParam('_id');
let name = urlParam('name');
let price = urlParam('price');

//let ifExist = false;
let cart = JSON.parse(localStorage.getItem('cart'));
console.log('La variable "carte" contient: ' + cart);
if (id != null && _id != null && name != null && price != null) {
  console.log('Il y a un objet qui est dans les parametres de l\'url');

if (cart === null) {
  cart = {createdAt: new Date(), products : [
    {
      id: id,
      _id: _id,
      name: name,
      price: price
    }
  ]};



}


  //Vérifier si il y a quelque chose dans le panier


for (let i in cart.products) {
  console.log(cart.products[i]._id === _id);
  console.log(cart.products[i]._id, _id);
  if (cart.products[i]._id === _id) {
    continue;


  }
  console.debug('000')
  cart.products.push({
    id: id,
    _id: _id,
    name: name,
    price: price
  });
}


localStorage.setItem('cart', JSON.stringify(cart));

} else {
  console.error('Il n\'y a pas d\'objet dans les parametres de l\'url');

}
