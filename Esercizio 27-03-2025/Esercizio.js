/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

Datatype: Number, String, Boolean, Undefined, Null, Bigint, Symbol

Number: Tipo di valore numerico, intero e decimale
String: Tipo di valore stringa, tra due apici, es: let ciao = "ciao"
Boolean: Tipo di valore booleano, determina se il valore in una variabile è di tipo logica vero o falso
Undefined: Tipo di dato che determina una variabile non definita, es: let ciao;
Null: tipo di dato che determina una variaible priva di valore, es: let ciao = "ciao", let ciao = null, console.log(ciao) -----------> null
Bigint: Tipo di dato numerico ma con valore molto alto, es let numero = 1.999.999.999.999.999.999
Symbol: Tipo di dato con un simbolo, es let ciao = *

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

Un linguaggio di programmazione a oggetto come Javascript, ci permette di creare, con l'uso di più variabili un determinato "oggetto", una determinata cosa che può prendere vita durante la nostra creazione.
Es: let persona ={
    nome:"Mario",
    cognome:"Rossi",
    eta: 32,
    nazionalita:"Italiana",
    anno_di_nascita = 1992
}

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let addizione = 12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Andrea"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"
let differenze = name1 === name2
console.log(differenze)

name1 = "John"
let differenze = name1 === name2
console.log(differenze)
