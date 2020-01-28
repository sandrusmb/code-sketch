"use strict";

//Saber qué tarjeta ha sido clickada. Crear la lógica del juego.

let hasFlippedCard = false;
let firstCard;
let secondCard;

//Listener de las cartas y darles la vuelta

const cards = document.querySelectorAll(".memory-card");

function cardClickHandler() {
  this.classList.add("flip");

  if (!hasFlippedCard) {
    //primer click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    //segundo click
    hasFlippedCard = false;
    secondCard = this;

    //do cards match?

    if (firstCard.dataset.name === secondCard.dataset.name) {
      //It's a match!
      firstCard.removeEventListener;
      "click", cardClickHandler;
      secondCard.removeEventListener;
      "click", cardClickHandler;
    } else {
      //not a match
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }, 1500);
    }
  }
}

cards.forEach(card => {
  card.addEventListener("click", cardClickHandler);
});
