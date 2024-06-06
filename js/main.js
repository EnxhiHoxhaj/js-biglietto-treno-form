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

console.log (distanzaKm.value);

console.log(etaUser);

console.log(generaTicket);

console.log(costoBiglietto);

//calcolo del prezzo del biglietto

let price = parseInt(rate * distanzaKm.value);

var sale20 = price - ( price * .2);

var sale40 = price - ( price * .4);

let finale = price;

console.log(finale);


// calcolo del prezzo delle tariffe scontate

console.log( "You have a 20% discount, so the cost of your ticket is: " + sale20 + "€");

console.log( "You have a 40% discount, so the cost of your ticket is: " + sale40 + "€");

if (etaUser == "minorenne" ) {
    finale = "You have a 20% discount, so the cost of your ticket is: " + sale20 + " €";
} else if(etaUser == className = ".minorenne") {
    finale = "You have a 40% discount, so the cost of your ticket is: " + sale40 + " €";
} else {
    finale = "The cost of your ticket is " + price + " €";
}

// click del bottone

generaTicket.addEventListener("click",
    function () {

    }
)