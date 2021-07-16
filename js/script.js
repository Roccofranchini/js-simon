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

while (randomNumbers.length < 5) {
    var randomNumber = getRandomNumber(1, 100);

    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
    }
}

console.log(randomNumbers);


























// funzione che genere numeri casuali

function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}