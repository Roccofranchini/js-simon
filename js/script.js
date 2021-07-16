/*

Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da 
indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.)

1- genero un array vuoto
2- riempio l'array vuoto con 5 numeri casuali
3- mostro questi numeri con un alert
4- parte un timer di 30 secondi al cui termine vengonp chiesti i numeri all'utente uno alla volta
4- attraverso un alert comunichiamo quanti e quali numeri sono stati individuati


*/

// creo array con 5 numeri casuali

var randomNumbers = [];
var userChoices = [];

var titleDisplay = document.getElementById('title-display');
var display = document.getElementById('display');

var titleDisplay2 = document.getElementById('title-display2');
var display2 = document.getElementById('display2');

var scoreDisplay = document.getElementById('score');



while (randomNumbers.length < 5) {
    var randomNumber = getRandomNumber(1, 100);
    
    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
    }
}

// mostriamo i numeri estratti

alert(randomNumbers);

// impostiamo 30 secondi di timer per chiedere i numeri all'utente

setTimeout (function(){
    
    var score = 0;
    var i = 1;

    while (userChoices.length < 5) {
        var userChoice = parseInt(prompt(i + '/5: digita un numero'));
        if (!userChoices.includes(userChoice)) {
            userChoices.push(userChoice);
            i++;
        }
        
        if (randomNumbers.includes(userChoice)) {
            score = score + 1;
            console.log(score);
    }

}

console.log(userChoices)

// grazie ad un for inseriamo i 5 numeri casuali in un UL -- posso fare una funzione

var listElement = '';

for (var i = 0; i < randomNumbers.length; i++) {

    console.log(listElement);

    listElement += '<li>' + randomNumbers[i] + '</li>';
}

display.innerHTML = listElement;

// grazie ad un for inseriamo i 5 numeri dell'utente in un UL

var urListElement = '';

for (var i = 0; i < userChoices.length; i++) {

    console.log(urListElement);

    urListElement += '<li>' + userChoices[i] + '</li>';
}

display.innerHTML = listElement;
display2.innerHTML = urListElement;
titleDisplay.innerHTML = 'I numeri estratti sono: ';
titleDisplay2.innerHTML = 'I tuoi numeri  sono: ';
scoreDisplay.innerHTML = score;



}, 30 );





















/** 
 * 
 * @param {number} min 
 * @param {*number max 
 * @returns randomNumber 
 */

function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}