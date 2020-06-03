
//const form = document.getElementById('form');
form.addEventListener('submit', function(event){

  console.log(event);
  let formData = new FormData(document.getElementById('form'));
  console.log(formData.entries());

});

formData = new FormData(document.getElementById('form'));
console.log(formData.entries());

for(data of formData.entries()){console.log(data)}
