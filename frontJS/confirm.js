let cart = JSON.parse(localStorage.getItem('cart'));
let contact = JSON.parse(localStorage.getItem('contact'));
if (cart === null || contact === null) { //Condition : Si il n'y a pas d'infos contact ou cart, l'utilisateur sera redirigé
  window.location.href='../index.html';
} else {
  document.title = 'Merci ' + contact.firstName + ' | Orinoco'; // changement de la valeur en <title> nomModel </title>
  let products = [];
  for (let i = 0; i < cart.products.length; i++) {
    products.push(cart.products[i]._id);
  }
  console.log(products);
  console.log(contact);

  // Envoie des infos au serveur de l'api
  sendToApi(contact);
  sendToApi(products);

  localStorage.removeItem('cart');
  // Afichage de la page_confirm

  // Remerciment
  let page_confirm = document.getElementById('page_confirm');
  let confirm = document.createElement('div');
  confirm.classList.add('confirm');
  document.querySelector('#page_confirm').appendChild(confirm);
  let text = document.createElement('p');
  text.innerText = 'Votre commande est validée !\n Merci ' + contact.firstName + ', d\'avoir choisi Orinoco pour votre commande ! À bientôt ! :-)'
  document.querySelector('.confirm').appendChild(text);
}
