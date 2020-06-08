console.log('run myFunctions.js');

// La fonction pour récupérer les parametres dans l'url (= "$_GET" en php)
const urlParam = (myParam) => {
  let allParamsOfUrl = new URLSearchParams(window.location.search);
  return allParamsOfUrl.get(myParam);
}

/////////////////////////Un code pour faire des liens en JS sur une div par exemple ///////////////////////////////

const link = () => {
  let url = window.location.protocol + "//" + window.location.host + window.location.pathname;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Afficher "panier vide" sur la page cart.html
const emptyCart = () => {
  // Fermer le formulaire
  let page = document.getElementById('page');                            //Page
  let boxForm = document.getElementById('boxForm');                      //Formulaire à Fermer
  page.removeChild(boxForm);

  // Ouvrire le gif
  let myCart = document.getElementById('myCart');
  let eltCart = document.createElement("div");                           // Création de la div eltCart
  eltCart.classList.add("center");                                       // Ajout de la class="eltCart" à la div
  let numberGif = integerRandom(1, 1);
  eltCart.innerHTML = '<h3 class="nameOnCart" > Votre panier est vide !</h3><img src="../images/gifs/emptyCarts' + numberGif +'.webp" alt="Panier Vide"><a href="../index.html">Retournez faire des achats.</a>';
  document.querySelector(".myCart").appendChild(eltCart);
}

////////////////////Add To Cart//////////////////////////////
const addToCart = () => {
  let id = urlParam('id');
  let _id = urlParam('_id');
  let name = urlParam('name');
  let price = urlParam('price');

  let cart = JSON.parse(localStorage.getItem('cart'));
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

}
/////////////////////////////////////////////////////////////

// supprimer Bouton pour tout retirer du Panier
const noneRemoveAllBtn = () => {
  let myCart = document.getElementById('myCart')
  let btn = document.getElementById('removeAll');
  myCart.removeChild(btn);
}

///////////////////////////////////////////////////

///////////////////Supprimer un article du Panier////////////////////
const removeProductOfCart = (idProduct) => {
  let cart = document.getElementById('myCart');
  console.log(cart);
  let removeProduct = document.getElementById(idProduct);
  console.log(removeProduct);
  cart.removeChild(removeProduct);    // Supprime l'élément removeProduct de l'élément cart


   //Supprimer l'élément dans localStorage
  let cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
  for (var i = 0; i < cartLocalStorage.products.length; i++) {

    if (cartLocalStorage.products[i]._id === idProduct) {
      let thisPrice = cartLocalStorage.products[i].price;
      cartLocalStorage.products.splice(i, 1);
      localStorage.setItem('cart', JSON.stringify(cartLocalStorage));


      // Recalculer le total du panier
      sumCart = sumCart - thisPrice;
      console.log(sumCart);
      if (sumCart === 0) {
        localStorage.removeItem('cart') //Supprétion du localStorage en cas de valeur = à 0 pour l'affichage du "Panier vide"
        emptyCart(); // Afficher le message "panier vide"
        noneRemoveAllBtn();
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
///////////////////////////////////////////////////////////////////

/////////////////////////////Small Cart////////////////////////////
      }
      const smallCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart !== null) {
          console.log(cart);
          let myCart = document.getElementById('cartId');
          console.log(myCart);

          if (cart.products.length > 0) {

            // une variable pour le pluriel de "article(s)".
            if (cart.products.length > 1) {
              var s = 's';
            } else {
              var s = ' ';
            }


            let h3 = document.createElement('h3');
            h3.innerText = 'Votre panier contient ' + cart.products.length + ' article' + s;
            document.querySelector("#cartId").appendChild(h3);
            let hr = document.createElement('hr');
            document.querySelector("#cartId").appendChild(hr);

            for (let i = 0; i < cart.products.length; i++) {
              var eltCart = document.createElement("div");                            // Création de la div eltCart
              eltCart.classList.add('list')
              eltCart.innerHTML = '<div class="row"><ul><li >' + cart.products[i].name + '</li><li>' + cart.products[i].price + ' €</li></ul></div>';
              document.querySelector("#cartId").appendChild(eltCart);

            }

            // Calcul du total du panier
            let sumCart = 0;
            for (let i = 0; i < cart.products.length; i++) {
              let unitPrice = parseInt(cart.products[i].price, 10);
              sumCart = sumCart + unitPrice;
            }


            let total =document.createElement('h3');
            total.innerText = 'Total: ' + sumCart + ' €';
            document.querySelector('#cartId').appendChild(total);

            cartId.removeChild(titleCart);
            cartId.removeChild(hrCart);
            cartId.removeChild(imgCart);
            cartId.removeChild(sum);
          }

        }

      }
/////////////////////////////////////////////////////////////

// Envoi d'infos à l'API
const sendToApi = (object) => {
  let request = new XMLHttpRequest();
  request.open("POST", "http://localhost:3000/api/cameras/order");
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(object));
}

////////////////////////Nombre aléatoir///////////////////////
const integerRandom = (min, max) => {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
