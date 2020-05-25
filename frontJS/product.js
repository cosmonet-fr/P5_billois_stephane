console.log('run product.js');
smallCart(); //fonction pour l'aperçu du chariot à droite
link();
let cart = JSON.parse(localStorage.getItem('cart'));
//Changgement du <title> de la page
let model = urlParam('model'); // Récupération de la valeur en parametre dans l'url [voir urlParam.je]
document.title = model + ' sur Orinoco'; // changement de la valeur en <title> nomModel </title>

//let nameTop = document.getElementById('nameTop');
let name = document.getElementById('name');
let price = document.getElementById('price');
let description = document.getElementById('description');
let img = document.getElementById('img');
let listLenses = document.getElementById('listLenses')
let addToCartBtn = document.getElementById('addToCart')


// Récupérer les parametres de l'url
let id = urlParam('id');


// Vérifier le support de fetch
if (window.fetch) {
    console.log('Fetch est supporté par votre navigateur.');
} else {
    console.error('Fetch n\'est pas supporté par votre navigateur.');
}

fetch('http://localhost:3000/api/cameras')
  .then(response => response.json())
    .then(apiData => {

      // Ajout des valeures de l'API sur la page

      name.innerHTML = apiData[id].name;
      price.innerHTML = apiData[id].price + ' €';
      description.innerHTML = apiData[id].description;
      img.setAttribute('src', apiData[id].imageUrl);

      // Création d'une boucle pour ajouter tous les objectifs sur la liste du menu déroulant
      for (let i = 0; i < apiData[id].lenses.length; i++) {
        let newLenses = document.createElement('option');
        newLenses.innerText = 'Objectif ' + apiData[id].lenses[i];
        newLenses.setAttribute('value', apiData[id].lenses[i]);
        document.querySelector('#listLenses').appendChild(newLenses);


      }

      //Bouton ajout au panier, ou supprimer du panier
      addToCartBtn.setAttribute('onclick', "window.location.href='cart.html?id=" + id + "&_id=" + apiData[id]._id + "&name=" + apiData[id].name + "&price=" + apiData[id].price + "'" )
      addToCartBtn.innerHTML = '<p><i class="fas fa-cart-plus"></i> Ajouter '+ apiData[id].name +' au panier</p>';

      for (let i = 0; i < cart.products.length; i++) {
        if (apiData[id]._id === cart.products[i]._id) {

          //addToCartBtn.setAttribute('onclick', "window.location.href='cart.html?remove=" + apiData[id]._id + "'" )
          //addToCartBtn.innerHTML = '<p><i class="far fa-trash-alt"></i> Retirer '+ apiData[id].name +' du panier</p>';
          addToCartBtn.setAttribute('onclick', "window.location.href='cart.html'" )
          addToCartBtn.innerHTML = '<p><i class="fas fa-check"></i> ' + apiData[id].name +' est déjà dans votre panier</p>';

        }
      }



    })
