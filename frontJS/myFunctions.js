console.log('run myFunctions.js');

//La fonction pour ce connecter à l'api et récupérer ses données.


//const connectToApi = (product) => {
//  // Vérifier le support de fetch
//  if (window.fetch) {
//    console.log('Fetch est supporté par votre navigateur.');
//  } else {
//    console.error('Fetch n\'est pas supporté par votre navigateur.');
//    window.alert('Votre navigateur n\'est pas suffisamment récent pour ce site web.');
//  }
//
//
//  // Se connecter à l'api
//  fetch('http://localhost:3000/api/cameras')
//    .then(response => response.json())
//      .then(apiData => {
//        console.log(apiData[product]);
//        return apiData[product];
//      })
//
//}





// La fonction pour récupérer les parametres dans l'url (= "$_GET" en php)
const urlParam = (myParam) => {
  let allParamsOfUrl = new URLSearchParams(window.location.search);
  return allParamsOfUrl.get(myParam);
}


// Supprimer un article du Panier
const removeProductOfCart = (idProduct) => {
  let cart = document.getElementById('myCart');
  console.log(cart);
  let removeProduct = document.getElementById(idProduct);
  console.log(removeProduct);
  cart.removeChild(removeProduct);    // Supprime l'élément removeProduct de l'élément cart


  // Supprimer l'élément dans localStorage
  let cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
  for (var i = 0; i < cartLocalStorage.products.length; i++) {
    //let toDelete = false;
    if (cartLocalStorage.products[i]._id === idProduct) {
      cartLocalStorage.products.splice(i, 1);
      localStorage.setItem('cart', JSON.stringify(cartLocalStorage));

      // Recalculer le total du panier (A REFAIRE DANS UNE FONCTION)



    } else {
      console.error('NADA !!!');
    }

  }


      }
