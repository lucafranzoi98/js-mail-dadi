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

//Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

const emailList = ["lucafranzoi98@gmail.com", "micheledifede98@gmail.com", "stefanbencina98@gmail.com"];
const emailButtonEl = document.getElementById("email-button");
const accessEl = document.querySelector(".access");


emailButtonEl.addEventListener("click", function() {

   accessEl.innerHTML = " ";

   const emailInputEl = document.getElementById("email-input").value;
   let j = 0;

   for (let i = 0; i < emailList.length; i++) {
   const emailUser = emailList[i];
   
   if (emailUser == emailInputEl) {
      j = 1;
   } else {

   }
   }

   if (j == 1) {
      accessEl.insertAdjacentHTML("beforeend", `<div>Accesso consentito!</div>`);
   } else {
      accessEl.insertAdjacentHTML("beforeend", `<div>Accesso negato!</div>`);
   }
   
})
