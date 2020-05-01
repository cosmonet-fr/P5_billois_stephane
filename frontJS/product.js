console.log('run product.js');

let nameTop = document.getElementById('nameTop');
let name = document.getElementById('name');
let price = document.getElementById('price');
let description = document.getElementById('description');
let img = document.getElementById('img');
console.log(img);


// Récupérer les parametres de l'url
let id = urlParam('id');
console.log(id);

// Vérifier le support de fetch
if (window.fetch) {
    console.log('Fetch est supporté par votre navigateur.');
} else {
    console.error('Fetch n\'est pas supporté par votre navigateur.');
}

fetch('http://localhost:3000/api/cameras')
  .then(response => response.json())
    .then(json => {
      console.log(json[id].name)
      nameTop.innerHTML = json[id].name;
      name.innerHTML = json[id].name;
      price.innerHTML = json[id].price + ' €';
      description.innerHTML = json[id].description;
      img.setAttribute("src", json[id].imageUrl); // = json[2].imageUrl;

    })
