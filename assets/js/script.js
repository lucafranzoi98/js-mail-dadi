//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

const diceButtonEl = document.getElementById("dice-button");
const resultEl = document.querySelector(".result");

diceButtonEl.addEventListener("click", function(){

   resultEl.innerHTML = " "

   const numberUser = Math.round(Math.random() * 5) + 1;
   const numberComputer = Math.round(Math.random() * 5) + 1;

   resultEl.insertAdjacentHTML("beforeend", `<div>Il tuo numero:${numberUser}</div>`);
   resultEl.insertAdjacentHTML("beforeend", `<div>Il numero del computer:${numberComputer}</div>`);

   if(numberUser > numberComputer) {
      resultEl.insertAdjacentHTML("beforeend", `<div>Hai vinto!</div>`);
   }  else if (numberUser < numberComputer) {
      resultEl.insertAdjacentHTML("beforeend", `<div>Hai perso :(</div>`);
   } else if (numberUser == numberComputer) {
      resultEl.insertAdjacentHTML("beforeend", `<div>Pareggio!</div>`);
   }
}
)