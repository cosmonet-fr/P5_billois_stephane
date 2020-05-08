console.log('run readCart');
console.error('GO !!!');

let v = localStorage.length;

for (let indLocalStorage = 0; indLocalStorage < v; indLocalStorage++) {
  console.log(indLocalStorage);
  console.log(localStorage.key(indLocalStorage));
  console.log('Nom du produit ' + localStorage.key(indLocalStorage));

}


console.error('Stop !!!');

//console.error('Stop');














/////////////////////////////////////////////////////////////////////////

//let productsToCart = [];
//let indexCart = localStorage.length - 1;



//productsToCart.push(localStorage.getItem('productAdding' + id));
//console.log('Panier : ' + productsToCart[indexCart]);




//console.log('Index de l\'objet ajoué au panier ' + indexCart);
//console.log('Le tableau contien ' + localStorage.key(indexCart));
