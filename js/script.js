console.log('JS OK');

//  Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//  Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

    /*
       // il prezzo del biglietto è definito in base ai km (0.21 € al km)
       // va applicato uno sconto del 20% per i minorenni
       // va applicato uno sconto del 40% per gli over 65.
       // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
    */

//  STEPS
    /*
    1 - PRENDO GLI ELEMENTI DALLA PAGINA.
    2 - CHIEDERE ALL'UTENTE IL NUMERO DI KM CHE VUOLE PERCORRERE.
    3 - CHIEDERE ALL'UTENTE LA SUA ETA'.
    4 - CREARE UNA VARIABILE CHE INDICHI IL COSTO DEL BIGLIETTO AL KM.
    5 - STABILIRE QUANTO COSTA ALL'UTENTE IL SUO BIGLIETTO IN BASE AI KM INSERITI.
    6 - APPLICARE UNO SCONTO SE SI VERIFICHINO LE CONDIZIONI CITATE NELLA TRACCIA.
    7 - STAMPARE SU PAGINA IL COSTO DEL BIGLIETTO DELL'UTENTE.
    */

    
// PRENDO GLI ELEMENTI DALLA PAGINA.
const targetElement = document.getElementById('target');
console.log('target');

const ageElement = document.getElementById('age');
console.log('age');

const kmElement = document.getElementById('km');
console.log('km');

const ticketprizeElement = document.getElementById('ticket-prize');
console.log('ticket-prize');

// CHIEDERE ALL'UTENTE IL NUMERO DI KM CHE VUOLE PERCORRERE.
const userKm = parseInt(prompt('Quanti km vuoi percorrere?', '10').trim());
console.log('Userkm ' + userKm);

// CHIEDERE ALL'UTENTE LA SUA ETA'.
const userAge = parseInt(prompt('Quanti anni hai?', '18').trim());
console.log('userAge ' + userAge);

// CREO VARIABILE COSTO BILGIETTO AL KM
const ticketPrizePerKm = 0.21;
console.log('ticketPrizePerKm €' + ticketPrizePerKm);

// STABILIRE QUANTO COSTA ALL'UTENTE IL SUO BIGLIETTO IN BASE AI KM INSERITI.
const userTicketPrize = userKm * ticketPrizePerKm ;
console.log('userTicketPrize €' + userTicketPrize);


// CREO VARIABILI SCONTI
const discountUnder18 = 20;
const discountOver65 = 40;

// COSTO BILGIETTO UNDER18
const userTicketPrizeUnder18 = userTicketPrize - (userTicketPrize * discountUnder18 / 100);
console.log('Il tuo sconto under 18 sarà di €' + userTicketPrizeUnder18);

// COSTO BILGIETTO OVER65
const userTicketPrizeOver65 = userTicketPrize - (userTicketPrize * discountOver65 / 100);
console.log('Il tuo sconto over 65 sarà di €' + userTicketPrizeOver65);

// STAMPO IN PAGINA L'ETA',I KM DELL'UTENTE E IL PREZZO NON SCONTATO IN CASO LO SCONTO CI SIA
ageElement.innerText = `La tua età: ${userAge} anni`;
kmElement.innerText = `Chilometraggio: ${userKm} Km`;
if (userAge < 18 || userAge > 65) {
    ticketprizeElement.innerText = 'Il biglietto non scontato costa €' + userTicketPrize.toFixed(2);
}


// STABILISCO QUALE SCONTO APPLICARE IN BASE ALL'ETA' DATA DALL'UTENTE E LO STAMPO IN PAGINA
if(userAge >= 18 && userAge <= 65) {
    targetElement.innerText = `Il costo del tuo biglietto sarà di € ${userTicketPrize.toFixed(2)}`;
}   else if (userAge < 18) {
        targetElement.innerText = `Il costo del tuo biglietto under 18 è di € ${userTicketPrizeUnder18.toFixed(2)}`;
    } else if (userAge > 65) {
        targetElement.innerText = `Il costo del tuo biglietto over 65 è di € ${userTicketPrizeOver65.toFixed(2)}`;
    }

//CONTROLLO SE LA PAROLA INSERITA NON SIA UN NUMERO
if(isNaN(userKm) || userKm == '' || userKm ===null) {
    alert("Per favore inserisci un numero valido nel campo ' Quanti km vuoi percorrere? '.");
}

if(isNaN(userAge) || userKm == '' || userKm ===null) {
    alert("Per favore inserisci un numero valido nel campo ' Quanti anni hai? '.");
}
