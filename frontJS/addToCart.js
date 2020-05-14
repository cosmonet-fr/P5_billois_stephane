console.log('run addToCart.js');

let id = urlParam('id');
let _id = urlParam('_id');
let name = urlParam('name');
let price = urlParam('price');

if (id != 'null' && _id != 'null' && name != 'null' && price != 'null') {
  console.log('Yo !!!');

  localStorage.setItem(id, _id);
  console.log('Le ' + name + ' à été ajouté dans votre panier.');

} else {
  console.error('NO !!!');

}
