//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numero1 = 50
const numero2 = 100

if (numero1 > numero2) {
  console.log(`${numero1} e' maggiore di ${numero2}`)
} else {
  console.log(`${numero2} e' maggiore di ${numero1}`)
}



/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

const numero = 1
if (numero < 5) {
  console.log("Tiny")
} else if (numero < 10) {
  console.log("Small")
} else if (numero < 15) {
  console.log("Medium")
} else if (numero < 20) {
  console.log("Large")
} else if (numero >= 20) {
  console.log("Huge")
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let numeri = 0; numeri <= 10; numeri++) {
  if (numeri === 3 || numeri === 8) {
    continue
  }
  else console.log(numeri)
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let numeri = 0; numeri <= 15; numeri++) {
  if (numeri % 2 === 0) {
    console.log(numeri, "Il numero è pari")
  } else console.log(numeri, "Il numero è dispari")
}
