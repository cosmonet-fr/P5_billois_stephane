console.log("run product.js");

let nameTop = document.getElementById('nameTop');
let name = document.getElementById('name');
let price = document.getElementById('price');
let description = document.getElementById('description');
let img = document.getElementById('img');
console.log(img);

// Vérifier le support de fetch
if (window.fetch) {
    console.log('Fetch est supporté par votre navigateur.');
} else {
    console.error('Fetch n\'est pas supporté par votre navigateur.');
}

fetch('http://localhost:3000/api/cameras')
  .then(response => response.json())
    .then(json => {
      console.log(json[0].name)
      nameTop.innerHTML = json[0].name;
      name.innerHTML = json[0].name;
      price.innerHTML = json[0].price + ' €';
      description.innerHTML = json[0].description;
      img.setAttribute("src", json[0].imageUrl); // = json[2].imageUrl;

    })
