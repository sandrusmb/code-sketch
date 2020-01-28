"use strict";

//Saber qué tarjeta ha sido clickada. Crear la lógica del juego.

let hasFlippedCard = false;
let firstCard;
let secondCard;

//Listener de las cartas y darles la vuelta con la clase flip

const cards = document.querySelectorAll(".memory-card");

function cardClickHandler() {
  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    hasFlippedCard = false;
    secondCard = this;
    checkIfCardsMatched();
  }
}

function checkIfCardsMatched() {
  if (firstCard.dataset.name === secondCard.dataset.name) {
    //Las cartas coinciden, ya no se darán la vuelta más y no se puede hacer click sobre ellas
    disableCards();
  } else {
    //Las cartas no coinciden y se dan la vuelta solas
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", cardClickHandler);
  secondCard.removeEventListener("click", cardClickHandler);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1500);
}

cards.forEach(card => {
  card.addEventListener("click", cardClickHandler);
});
