// CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO E GENERAZIONE BIGLIETTO 

//selezione dei tre input, dei bottoni e del costo del biglietto

const nomeCognome = document.querySelector("#name-surname");

const distanzaKm = document.querySelector("#km");

const etaUser = document.querySelector("#years");

const generaTicket = document.querySelector("#genera")

const costoBiglietto = document.querySelector("#ticket-cost");

const rate = Number( 0.21 );

//log in consol dei tre input, dei bottoni e del costo del biglietto

console.log(nomeCognome);

console.log(distanzaKm);

console.log(etaUser);

console.log(generaTicket);

console.log(costoBiglietto);

//calcolo del prezzo del biglietto

let price = parseInt(rate * distanzaKm);

console.log("The cost of your ticket is " + price + "€");




