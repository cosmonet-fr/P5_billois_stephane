console.log("test");

let newProduct = document.getElementById('listeProducts')
let products = new XMLHttpRequest();

products.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      console.log("Ça marche ! Serveur : " + this.status + " | Ready State : " + this.readyState);
      let responseProducts = JSON.parse(this.responseText);

      for (var i = 0; i < responseProducts.length; i++) {
        responseProducts[i]
        console.log(responseProducts[i].name);
        newProduct.innerHTML = '<div class="product"><div class="picture"> <img src="' + responseProducts[i].imageUrl + '" alt=""><p class="price" >' + responseProducts[i].price + ' €</p></div><div class="description"><h2>' + responseProducts[i].name + '</h2><p>' + responseProducts[i].description + '</p></div></div><hr />'
      }


    } else {
      console.error("Ça na marche pas, serveur : " + this.status + " | Ready State : " + this.readyState);
    }
};


products.open("GET", "http://localhost:3000/api/cameras" );
products.send();
