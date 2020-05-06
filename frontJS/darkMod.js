console.log('run darkMod.js');

//localStorage.setItem('darkMod', 'true');
let darkMod = localStorage.getItem('darkMod');

const darken = (i) => {
  if (i === 'true') {
    console.log('Dark mod activated');
    if (document.title === 'Oricam | Caméras Vintage') { // Une condition pour repérer la page sur laquelle on se trouve et addapter l'url vers le CSS Dark
      var urlDarkCss = 'css/darkMod.min.css';
    } else {
      var urlDarkCss = '../css/darkMod.min.css'
    }
    let darkCss = document.createElement('link'); // Création de la variable pour stocker le lien vers la surcouche css
    darkCss.setAttribute('rel', 'stylesheet');
    darkCss.setAttribute('href', urlDarkCss);
    document.getElementsByTagName('head')[0].appendChild(darkCss);
  } else {
    console.log('Dark mod disabled');
  }
}


darken(darkMod);
