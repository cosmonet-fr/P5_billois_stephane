console.log("run allProducts.js");
smallCart(); //fonction pour l'aperçu du chariot à droit
link();
let newProduct = document.getElementById("listeProduct");
let loadingImg = document.getElementById("loading");

let products = new XMLHttpRequest();

products.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      console.log("Ça marche ! Serveur : " + this.status + " | Ready State : " + this.readyState);
      let responseProducts = JSON.parse(this.responseText);


      loadingImg.classList.replace("open", "close");// Fermer l'annimation de chargement par le remplacement de la class open par close



      for (let i = 0; i < responseProducts.length; i++) {
        //responseProducts[i]
        let newDivOfProduct = document.createElement("div");                 // Création de la div Produit
        newDivOfProduct.classList.add("product");                            // Ajout de la class="product" à la div
        newDivOfProduct.innerHTML = ' <div class="picture" onclick="window.location.href=\'pages/product.html?_id=' + responseProducts[i]._id + '\'">  <img src="' + responseProducts[i].imageUrl + '" alt=""> <h2><a href="pages/product.html?_id=' + responseProducts[i]._id + '">' + responseProducts[i].name + '</a></h2> <p class="price" >' + responseProducts[i].price + ' €</p></div>' // Ajout du code HTML pour le produit
        document.querySelector(".allProducts").appendChild(newDivOfProduct); // Ajout de la div "product" comme enfant de la div "allProducts"

      }


    } else {
      console.error("Ça na marche pas, serveur : " + this.status + " | Ready State : " + this.readyState);
    }
};


products.open("GET", "http://localhost:3000/api/cameras" );
products.send();



//'<div class="product"><div class="picture"> <img src="' + responseProducts[i].imageUrl + '" alt=""><p class="price" >' + responseProducts[i].price + ' €</p></div><div class="description"><h2>' + responseProducts[i].name + '</h2><p>' + responseProducts[i].description + '</p></div></div><hr />'
