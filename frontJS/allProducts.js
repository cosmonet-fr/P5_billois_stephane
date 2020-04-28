console.log("test");
let products = new XMLHttpRequest();

products.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let responseProducts = JSON.parse(this.responseText);
      console.log(products);


    } else {
      console.error("Ça na marche pas");
    }
};


products.open("GET", "http://localhost:3000/api/cameras" );
products.send();
