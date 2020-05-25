const firstName = urlParam('firstName');
document.title = 'Merci ' + firstName + ' | Orinoco'; // changement de la valeur en <title> nomModel </title>
const contact = {
  firstName: firstName,
  lastName: urlParam('lastName'),
  address: urlParam('address'),
  city: urlParam('code') + ' ' + urlParam('city'),
  email: urlParam('email')
};
let cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
let products = [];

for (let i = 0; i < cartLocalStorage.products.length; i++) {
  products.push(cartLocalStorage.products[i]._id);
}


// Envoie des infos au serveur de l'api
sendToApi(contact);
sendToApi(products);



// Afichage de la page_confirm

// Remerciment
let page_confirm_confirm = document.getElementById('page_confirm');
console.log(page_confirm);
let confirm = document.createElement('div');
confirm.classList.add('confirm');
document.querySelector('#page_confirm').appendChild(confirm);
let text = document.createElement('p');
text.innerText = 'Merci ' + firstName + ', d\'avoir choisi Orinoco pour votre commande. À bientôt. :-)'
document.querySelector('.confirm').appendChild(text);

fetch('http://localhost:3000/api/cameras')
  .then(response => response.json())
    .then(orderData => {
      console.log(orderData);
    });
