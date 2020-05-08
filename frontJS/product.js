console.log('run product.js');
//Changgement du <title> de la page
let model = urlParam('model'); // Récupération de la valeur en parametre dans l'url [voir urlParam.je]
document.title = model + ' sur Orinoco'; // changement de la valeur en <title> nomModel </title>

//let nameTop = document.getElementById('nameTop');
let name = document.getElementById('name');
let price = document.getElementById('price');
let description = document.getElementById('description');
let img = document.getElementById('img');
let listLenses = document.getElementById('listLenses')


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
    .then(apiData => {
      console.log(apiData[id].name);
      // Ajout des valeures de l'API sur la page
      //nameTop.innerHTML = apiData[id].name;
      name.innerHTML = apiData[id].name;
      price.innerHTML = apiData[id].price + ' €';
      description.innerHTML = apiData[id].description;
      img.setAttribute("src", apiData[id].imageUrl);

      // Création d'une boucle pour ajouter tous les objectifs sur la liste du menu déroulant
      for (let i = 0; i < apiData[id].lenses.length; i++) {
        console.log(apiData[id].lenses[i]);
        let newLenses = document.createElement('option');
        console.log(newLenses);
        newLenses.innerText = 'Objectif ' + apiData[id].lenses[i];
        newLenses.setAttribute('value', apiData[id].lenses[i]);
        console.log(document.querySelector('#listLenses'));
        document.querySelector('#listLenses').appendChild(newLenses);

      }

    })
