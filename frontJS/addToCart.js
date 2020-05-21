console.log('run addToCart.js');

let id = urlParam('id');
let _id = urlParam('_id');
let name = urlParam('name');
let price = urlParam('price');

let cart = JSON.parse(localStorage.getItem('cart'));
console.log('La variable "carte" contient: ' + cart);
if (id != null || _id != null || name != null || price != null)
{
  console.log('Il y a un objet qui est dans les parametres de l\'url');

  //Vérifier si il y a quelque chose dans le panier
  if (cart === null)
  {
    console.log('Cart null Je peux le créer.');
    cart = {createdAt: new Date(), products : [
      {
        id: id,
        _id: _id,
        name: name,
        price: price
      }
    ]};



  } else if (cart != null) {
    let isAlreadyInCart = false;
    for (var i = 0; i < cart.products.length; i++) {
      if (cart.products[i]._id === _id) {
        isAlreadyInCart = true;

      }
    }
    if (isAlreadyInCart === false) {
      cart.products.push({
        id: id,
        _id: _id,
        name: name,
        price: price
      });

    } else {
      console.error('Un article ne peut être ajouté qu\'un seul fois dans votre panier');
    }

    }




localStorage.setItem('cart', JSON.stringify(cart));

} else {
  if (cart === null) {
    console.error('Il n\'y a pas d\'objet dans les parametres de l\'url');


    emptyCart();


  }

}
