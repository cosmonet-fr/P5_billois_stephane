console.log('run readCart.js');

fetch('http://localhost:3000/api/cameras')
  .then(response => response.json())
    .then(apiData =>{
      if (localStorage.length > 0) {

        console.log('Dans mon panier, il ya donc : ');
        let total = 0;
        for (let indexCart = 0; indexCart < localStorage.length; indexCart++) {

          if (localStorage.key(indexCart) != 'darkMod' ) {

            console.log(localStorage.key(indexCart));
            let eltCart = document.createElement("div");                 // Création de la div eltCart
            eltCart.classList.add("eltCart");                            // Ajout de la class="eltCart" à la div
            eltCart.setAttribute('id', apiData[localStorage.key(indexCart)]._id);                            // Ajout de la class="pour identifier le produit" à la div
            let id = "'" + apiData[localStorage.key(indexCart)]._id + "'";
            eltCart.innerHTML = '<div id"nameCart" class="nameCart"><h2 class="nameOnCart" >' + apiData[localStorage.key(indexCart)].name +'</h2></div><div class="infosCart"><p id="priceOnCart" class="price" >' + apiData[localStorage.key(indexCart)].price + ' € </p> <i class="far fa-trash-alt fa-2x" onclick="removeProductOfCart(' + id + ');"></i></div>'
            document.querySelector(".myCart").appendChild(eltCart);

          } else {
            console.log("Ce localStorage est réservé au mod sombre !");
          }

        }
        // Affichage du total
        //var eltCart = document.createElement("div");
        //eltCart.classList.add("eltCart");
        //eltCart.innerHTML = '<div class="nameCart"><h2 id="nameOnCart" >Total :</h2></div><p id="priceOnCart" class="price" >' + 'total' + '</p>';
        //document.querySelector(".page").appendChild(eltCart);

      }




    });
