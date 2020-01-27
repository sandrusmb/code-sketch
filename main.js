"use strict";

const cards = document.querySelectorAll(".memory-card");

function cardClickHandler() {
  this.classList.toggle("flip");
}

cards.forEach(card => {
  card.addEventListener("click", cardClickHandler);
});
