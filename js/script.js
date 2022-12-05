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
    1 - PRENDO L'ELEMENTO DALLA PAGINA.
    2 - CHIEDERE ALL'UTENTE IL NUMERO DI KM CHE VUOLE PERCORRERE.
    3 - CHIEDERE ALL'UTENTE LA SUA ETA'.
    4 - CREARE UNA VARIABILE CHE INDICHI IL COSTO DEL BIGLIETTO AL KM.
    5 - STABILIRE QUANTO COSTA ALL'UTENTE IL SUO BIGLIETTO IN BASE AI KM INSERITI.
    6 - APPLICARE UNO SCONTO SE SI VERIFICHINO LE CONDIZIONI CITATE NELLA TRACCIA.
    7 - STAMPARE SU PAGINA IL COSTO DEL BIGLIETTO DELL'UTENTE.
    */

    
// PRENDO L'ELEMENTO DALLA PAGINA.
const targetElement = document.getElementById('target');
console.log('target');

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

// STABILISCO QUALE SCONTO APPLICARE IN BASE ALL'ETA' DATA DALL'UTENTE
if(userAge >= 18 && userAge <= 65) {
    targetElement.innerText = `Il costo del tuo biglietto sarà di € ${userTicketPrize}`;
}   else if (userAge < 18) {
        targetElement.innerText = `Il costo del tuo biglietto under18 è di € ${userTicketPrizeUnder18}`;
    } else if (userAge > 65) {
        targetElement.innerText = `Il costo del tuo biglietto over65 è di € ${userTicketPrizeOver65}`;
    }



