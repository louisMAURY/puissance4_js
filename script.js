'use strict'

Boolean kase = false // Pour savoir si la case est occupé (true) ou non (false)
let jaune = "url(jetons/jaune.png)" // variable pour l'image du jeton jaune
let rouge = "url(jetons/rouge.png)" // variable pour l'image du jeton rouge

var premireLigne = document.getElementById("A"); // Selectionne la première ligne du plateau

// Au survole de la ligne
premireLigne.addEventListener("mouseover", function(event) {   
    event.target.style.backgroundImage = "url(jetons/jaune.png)";

    setTimeout(function() {
      event.target.style.backgroundImage = "url(jetons/vide.png)";
    }, 500);
  }, false);

// Cette partie s'occupe du tour du joueur
premireLigne.addEventListener("click", event => {
  if (kase == false) {
    // remplie la case avec un jeton
  } else {
    // Passe a la case au dessus
  }
})