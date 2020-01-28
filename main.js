/* "use strict"; */
const cards = document.querySelectorAll(".memory-card");

//Saber qué tarjeta ha sido clickada. Crear la lógica del juego.

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

//Listener de las cartas y darles la vuelta con la clase flip

function cardClickHandler() {
  if (lockBoard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    //firs click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  //second click
  hasFlippedCard = false;
  secondCard = this;
  checkIfCardsMatched();
}

function checkIfCardsMatched() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", cardClickHandler);
  secondCard.removeEventListener("click", cardClickHandler);
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1500);
}

cards.forEach(card => {
  card.addEventListener("click", cardClickHandler);
});
