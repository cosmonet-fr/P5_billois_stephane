console.log('run addToCart.js');

fetch ('http://localhost:3000/api/cameras')
  .then(response => response.json())
    .then(apiData => {
      console.log(apiData[id]._id);
      localStorage.setItem('_idOf' + id, apiData[id]._id);
      localStorage.setItem('nameOf' + id, apiData[id].name);
      localStorage.setItem('priceOf' + id, apiData[id].price);

    });
