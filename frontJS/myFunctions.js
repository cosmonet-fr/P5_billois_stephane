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

// Afficher "panier vide" sur la page cart.html
const emptyCart = () => {
  let myCart = document.getElementById('myCart');
  let eltCart = document.createElement("div");                            // Création de la div eltCart
  eltCart.classList.add("eltCart");                                       // Ajout de la class="eltCart" à la div
  eltCart.innerHTML = '<h3 class="nameOnCart" > Votre panier est vide !</h3>';
  document.querySelector(".myCart").appendChild(eltCart);
}

///////////////////////////////////////////////////
//Supprimer De localStorage uniquement !
// Supprimer l'élément dans localStorage



//////////////////////////////////////////////////


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
      var thisPrice = cartLocalStorage.products[i].price;
      cartLocalStorage.products.splice(i, 1);
      localStorage.setItem('cart', JSON.stringify(cartLocalStorage));

      // Recalculer le total du panier
      sumCart = sumCart - thisPrice;
      console.log(sumCart);
      if (sumCart === 0) {
        localStorage.removeItem('cart') //Supprétion du localStorage en cas de valeur = à 0 pour l'affichage du "Panier vide"
        emptyCart(); // Afficher le message "panier vide"
        console.log(cart);
        let totalBox = document.getElementById('totalBox')
        console.log(totalBox);
        cart.removeChild(totalBox);

      }

      let txtSumCart = document.getElementById('sum');
      txtSumCart.innerText = sumCart + ' €'




    } else {
      console.error('NADA !!!');
    }

  }


      }
// Envoi d'infos à l'API
const sendToApi = (object) => {
  let request = new XMLHttpRequest();
  request.open("POST", "http://localhost:3000/api/cameras/order");
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(object));
}
