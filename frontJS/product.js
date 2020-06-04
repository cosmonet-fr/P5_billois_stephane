console.log('run product.js');


smallCart(); //fonction pour l'aperçu du chariot à droite
link();

let cart = JSON.parse(localStorage.getItem('cart')); // Pour Btn addToCart ou remove



let name = document.getElementById('name');
let price = document.getElementById('price');
let description = document.getElementById('description');
let img = document.getElementById('img');
let listLenses = document.getElementById('listLenses')
let addToCartBtn = document.getElementById('addToCart')


// Récupérer les parametres de l'url
let id = urlParam('_id');


// Vérifier le support de fetch
if (window.fetch) {
    console.log('Fetch est supporté par votre navigateur.');
} else {
    console.error('Fetch n\'est pas supporté par votre navigateur.');
}

fetch('http://localhost:3000/api/cameras/' + id)
  .then(response => response.json())
    .then(apiData => {
      //Changgement du <title> de la page
      document.title = apiData.name + ' sur Orinoco'; // changement de la valeur en <title> nomModel </title>

      if (apiData.name === undefined) {
        console.error("404");
        let thisProduct = document.getElementById('thisProduct');
        let block1 = document.getElementById('block1')
        block1.removeChild(thisProduct);

        // Afichage 404

        let eltCart = document.createElement("div");                           // Création de la div eltCart
        eltCart.classList.add("center");                                       // Ajout de la class="eltCart" à la div
        let numberGif = integerRandom(1, 3);
        eltCart.innerHTML = '<h3 class="nameOnCart" > Cette page n\'existe pas</h3><img src="../images/gifs/404_' + numberGif +'.webp" alt="404"><a href="../index.html">Retournez faire des achats.</a>';
        document.querySelector(".block1").appendChild(eltCart);


      } else {

        // Ajout des valeures de l'API sur la page
        var this_id = apiData._id;
        var thisName = apiData.name;
        var thisPrice = apiData.price;

        name.innerHTML = apiData.name;
        price.innerHTML = apiData.price + ' €';
        description.innerHTML = apiData.description;
        img.setAttribute('src', apiData.imageUrl);

        // Création d'une boucle pour ajouter tous les objectifs sur la liste du menu déroulant
        for (let i = 0; i < apiData.lenses.length; i++) {
          let newLenses = document.createElement('option');
          newLenses.innerText = 'Objectif ' + apiData.lenses[i];
          newLenses.setAttribute('value', apiData.lenses[i]);
          document.querySelector('#listLenses').appendChild(newLenses);


        }

        //Bouton ajout au panier, ou supprimer du panier

        addToCartBtn.setAttribute('onclick', "window.location.href='cart.html?id=" + id + "&_id=" + apiData._id + "&name=" + apiData.name + "&price=" + apiData.price + "'" )
        addToCartBtn.innerHTML = '<p><i class="fas fa-cart-plus"></i> Ajouter<em> '+ apiData.name +' au panier</em></p>';

        if (cart !== null) {
          for (let i = 0; i < cart.products.length; i++) {
            if (apiData._id === cart.products[i]._id) {

              //addToCartBtn.setAttribute('onclick', "window.location.href='cart.html?remove=" + apiData._id + "'" )
              //addToCartBtn.innerHTML = '<p><i class="far fa-trash-alt"></i> Retirer '+ apiData.name +' du panier</p>';
              addToCartBtn.setAttribute('onclick', "window.location.href='cart.html'" )
              addToCartBtn.innerHTML = '<p><i class="fas fa-check"></i><em> ' + apiData.name +' est déjà </em>dans votre panier</p>';

            }
          }

        }

        //let btnDirect = document.getElementById('directAdd'); // Pour directAdd
        //btnDirect.setAttribute('onclick', "directAddToLocalStorage(" + id + ", '" + this_id + "', '" + thisName + "', '" + thisPrice + "');"); // Pour directAdd




      }


    })
