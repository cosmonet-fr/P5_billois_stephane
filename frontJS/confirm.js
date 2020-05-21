const firstName = urlParam('firstName');
const lastName = urlParam('lastName');
const contact = {
  firstName: urlParam('firstName'),
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

//Numéro de commande
order_id = lastName + '-' + Math.random();



// Envoie des infos au serveur de l'api
sendToApi(contact);
sendToApi(products);
sendToApi(order_id);



// Afichage de la page
let page = document.getElementsByClassName('page');
let confirm = document.createElement('div');
let text = document.createElement('p');
confirm.classList.add('confirm');
document.querySelector('page').appendChild(confirm);
text.innerText = 'Merci ' + firstName + ' d\'avoir choisi Orinoco pour votre commande. À bientôt. :-)'
document.querySelector('confirm').appendChild(text);
