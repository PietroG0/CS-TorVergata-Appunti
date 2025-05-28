#Web 

#### Cos'è Javascript

>[!info] Definizione
>Javascript è un linguaggio di programmazione nato come linguaggio semplice per i non sviluppatori.
>
>**Ruolo di JS**
>Client side: praticamente monopolista; Server side: NodeJs


#### Cosa fa JS
- Cambiare elementi e stili in una pagina
- Comunicazione asincrona
	- Invio dati senza ricaricare la pagina o senza interazione con l'utente

- Altro
	- Test browser capabilities ed adattamente


>[!important] Cosa fa
>- Modifica elementi della pagina
>- Interagisce con un server remoto
>- Reagisce ad azioni dell'utente
>- Imposta cookie e contenuti locali ( file storage )
>- Disegna sulla pagina


>[!warning] Cosa non fa ( nei browser )
>- Accede ai file locali del computer
>- Interagisce con qualunque server remoto


#### Aggiungere Js ad una pagina web

**Metodo brutto**
``` JS
<script>
	//codice
</script>
```

**Metodo giusto**
``` JS
<script src = "myscript.js"></script>
```


#### Lavorare con le variabili

``` JS
//commento
let myName = "Giovanni"; //variabile con stringa
let myNumber = 5; //variabile con intero
let myVar; //variabile non inizializzata
myVar = myNumber; //assegnazione
console.log(myVar); //stampa del risultato
```


#### Tipo di dato
Ogni dato appartiene ad un tipo

| Codice             | Spiegazione                                        |
| ------------------ | -------------------------------------------------- |
| let test = 5;      | La variabile è un *numero*. Operazioni: + - * / %  |
| let test = "ciao"; | La variabile è una *stringa*. Concatenazione con + |
| let test = true;   | La variabile è Booleana. Inverso con !             |
| let test;          | La variabile è undefined                           |
| let test = null    | La variabile è null                                |


#### Conversioni - funzioni utili

**parseInt()**
- Descrizione: Analizza l'argomento di una stringa e restituisce un intero del raggio specifico
- Sintassi: parseInt(string, radix)


**parseFloat()**
- Descrizione: Analizza l'argomento di una stringa e restituisce un numero a virgola mobile
- Sintassi: parseInt(string)

**Conversione di un numero in una stringa** $\rightarrow$ num.toString();

**Regolazione del numero di cifre decimali**
- let pi = (3,141592).toFixed(2)
- > 3.14



#### Interazione base

**Alert**
![[Immagine Pasted Apr 23 2024.png#center|500]]

**Prompt**

![[Pasted Image Apr 23 2024.png#center | 500]]

**Confirm**

![[CS-TorVergata-Appunti/Obsidian Vault/Immagini/Immagini/Pasted image 20240423151815.png#center | 500]]



#### Operazioni di comparazione

| Operazione      | Significato                                      |
| --------------- | ------------------------------------------------ |
| == e !=         | Uguale e non uguale                              |
| > e >= e < e <= | Maggiore, maggiore-uguale, minore, minore-uguale |
| === e !==       | Identico o non identico (stesso dato e tipo)     |

#### Operatori logici

| Operatore | Logico |
| --------- | ------ |
| &&        | AND    |
| \|\|      | OR     |
| !         | NOT    |


#### Funzioni
Sono un modo pratico per raggruppare dei comandi e per *richiamare* più volte lo stesso codice

```JS
//Dichiarazione
function calcolatrice(){
	let n1, n2, somma;
	n1 = prompt("Primo numero");
	n2 = prompt("Secondo numero");
	alert("la somma è " +(Number(n1)+Number(n2)));
}

//Invocazione
calcolatrice();
```

Le funzioni possono accettare dei parametri di ingresso e ritornare un valore in uscita

```JS
function somma(a, b){
	let sum = a + b;
	return sum;
}
```

Una funzione deve avere un nome descrittivo (es. getName, runCalculator, fillResults, chechIsOnline ecc...), ma soprattutto una funzione deve fare *esattamente* una cosa, cioè l'operazione descritta nel suo nome. Se fa più cose, probabilmente è utile suddividere il codice in due funzioni


#### Passare funzioni a funzioni

```JS
function ask(question, yes, no){
	if(confirm(question)) yes()
	else no();
}

//Funzione di callback
ask(
	"Do you agree?",
	function() { alert("You agreed.");},
	function() { alert("You canceled the operation".);}
);
```


#### Arrow functions
Si tratta di un sistema più sintetico di specificare una funzione

```JS
let somma = (a, b) => a + b;
```


#### Oggetti
Un **oggetto** è una *lista di coppie proprietà-valore* racchiuse in parentesi angolate. Le proprietà possono essere solo stringhe o simboli. Un valore può essere un tipo primitivo, un altro oggetto o una funzione. Da qui JSON (JavaScript Object Notation)

```JS
let studente = {
	name: "Pierpaolo",
	age: 80,
	scores: [1,2,3],
	classes: {pw:30, fi:18}
}
```

Non esistono valori privati.

```JS
let studente = {}; //oggetto vuoto
studente = new Object(); //stessa cosa

studente.voto = 30; //aggiungo proprietà e valore

console.log(studente.voto); //30

delete studente.voto; //elimino proprietà con annesso valore
console.log(studente.voto) //undefined
```

#### Copiare un oggetto

```JS
let a = {nome; "pippo"};
let b = a;
```

![[Immagine Pasted Apr 24 2024.png#center | 500]]

*a* e *b* sono dei riferimenti allo stesso oggetto:
- Copiando *a* in *b*, copiamo solo il riferimento;
- Se facciamo a.nome = "pluto", otterremo anche che b.nome è "pluto"


#### Garbage collection
Tutte le variabili che creiamo occupano memoria, che viene allocata dinamicamente. Un algoritmo (garbage collector) capisce gli oggetti non più raggiungibili dallo script e rilascia la memoria.


#### Metodi
Un oggetto può avere tra le sue proprietà anche delle funzioni che chiameremo **metodi**

```JS
let a = {"name", "pippo"};
a.saluta = function(){
	alert("Ciao sono pippo");
}
a.saluta()
```


**This**
Può essere utile nei metodi riferirci ad altre proprietà nell'oggetto

```JS
let a = {"name": "pippo"};
a.saluta = function(){
	alert("Ciao sono " +this.name);
}
```


#### Costruttori
Per creare oggetti uguali o simili possiamo usare delle funzioni

```JS
//Costruttore
function User(name){
	this.name = name;
	this.isAdmin = false;
	//ritorna implicitamente this
}

let user = new User("Pippo");
alert(user.name); //Pippo
alert(user.isAdmin); //false
```

Quando viene chiamato un costruttore con **new**:
- Viene creato un oggetto vuoto e assignato a *this*
- Viene eseguita la funzione
- Viene ritornato *this*


#### Array
Si tratta di **contenitori di variabili**, anche con tipi diversi. Sono oggetti con proprietà numeriche e metodi/attributi per "maneggiarli". Ogni elemento di un array ha un **indice** che parte da 0.

``` JS
let arr = [el0, el1, el2]; //Creazione
myFirstArr[0] = "nuovo valore" //Modifica
myFirstArr.push("ciao") //Aggiunge alla fine
myFirstArr.unshift("ueue") //Aggiunge all'inizio
myFirstArr[10] = "ciao" //Aggiunge al decimo posto
myFirstArr.pop() //Rimuove l'ultimo elemento
myFirstArr.shift() //Rimuove il primo elemento
delete myFirstArr[10] //Rimuove l'elemento ma non sposta gli indici dell'array
myFirstArr.lenght //Lunghezza dell'array

//Svuotare l'array:
myFirstArr = []
myFirstArr.lenght = 0
```

**Slicing**

```JS
let myArr = ["a", "b", "c", "d", "e"];
myArr = myArr.slice(1, 4); //["b", "c", "d"]
myArr.splice(3,2) //ritorna ["d", "e"]

//Ora l'array è ["a", "b", "c"]
```

**Loop, join e search**

```JS
let colori = ["rosso", "verde", "blu"];

//loop
colori.forEach(function(colore)) {
	console.log(colore);
}

//join 
let list = colori.join(" - "); //"rosso - verde - blu"

//search
let a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); //1
```


**Map**
Metodo che serve a "convertire" (mappare) un array in un altro. Esempio: dato un array di stringhe, generiamo un array che contiene la lunghezza delle stringhe

```JS
let a = ["pippo", "pluto", "paperino"];
a.map((item, index, array) => item.lenght);
// Ritorna [5, 5, 8]
```

**Reduce**
Metodo che serve a calcolare un singolo valore dell'array

```JS
[1,2,3].reduce((ac, item) => ac + item); //6
```


#### Built-in Objexts

**Date**
L'oggetto built-in *Date* ha metodi e costanti per le date (js non ha il tipo primitivo "data")

```JS
today = new Date() //data di oggi
var Xmas95 = new Date("December 25, 1995 13:30:00")
Xmas95 = new Date(1995, 11, 25)
var Xmas95 = new Date(1995, 11, 25, 9, 30, 0)

Xmas95.getMonth() //ritorna 11
Xmas95.getFullYear() //ritorna 1995
getTime() //ritorna i millisecondi dal 1-1-1970
```

**Typeog e Instanceof**
- *Typeof true;* Restituisce boolean
- *typeof 62;* Restituisce number
- *let theDay = new Date(1995, 12, 17);* 
- *theDay instanceof Date;* Restituisce true


**Math**
L'oggetto built-In *Math* ha metodi e costanti per operazioni matematiche

![[Pasted Image 2024-05-03.png#center | 500]]

```JS
Math.random() //0.9485474
```


**JSON**
E' utile convertire gli oggetti in stringhe (e viceversa), ad esempio per importare/passare dati ad un server

```JS
JSON.stringfy(obj);
JSON.parse(objString);
```


**Window**
L'oggetto *Window* rappresenta la finestra del browser

![[CS-TorVergata-Appunti/Obsidian Vault/Immagini/Immagini/Pasted image 20240503114736.png#center | 500]]

*Funzioni dell'oggetto window*
Oltre ad alert, prompt e confirm, l'oggetto "window" ha altre funzioni utili:
- setTimeout(funz_da_chiamare, time): Richiama la funzione scelta dopo *time* millisecondi
- setInterval(funz_da_chiamare, time): Richiama la funzione *ciclicamente* dopo *time* millisecondi
- clearTimeout e clearInterval interrompono le funzioni precedenti

