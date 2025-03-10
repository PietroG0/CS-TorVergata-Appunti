#Web 
# Cos'è Javascript
Javascript è un linguaggio di programmazione nato come linguaggio semplice per i non sviluppatori.
## Ruolo di js
*Client side*: praticamente monopolista;
*Server side*: NodeJs.
## Cosa fa JS
- *Cambiare elementi e stili in una pagina*
- *Comunicazione asincrona*
	- Invio dati senza ricaricare la pagina o senza interazione con l'utente
- *Altro*
	- Test browser capabilities ed adattamente
### Cosa fa e cosa non fa
>[!important]- Cosa fa
>- Modifica elementi della pagina
>- Interagisce con un server remoto
>- Reagisce ad azioni dell'utente
>- Imposta cookie e contenuti locali ( file storage )
>- Disegna sulla pagina

>[!warning]- Cosa non fa ( nei browser )
>- Accede ai file locali del computer
>- Interagisce con qualunque server remoto

### JS lato server: NodeJS
Si tratta di un *back-end* javascript runtime environment, permettendo di utilizzare uno stesso linguaggio sia client-side che server-side.
#### Framework famosi (client side)
- ExtJS
- Knockout
- Backbone
- Angular
- React
- Vue.js
# Hello World!
## Aggiungere Js ad una pagina web
```HTML
<script>
	//codice
</script>
```
$\Uparrow$ METODO BRUTTO $\Uparrow$
$\Downarrow$METODO GIUSTO $\Downarrow$
```HTML
<script src="myscript.js"></script>
```
# Lavorare con le variabili
```Javascript
// commento
let myName = "Giovanni"; //variabile con stringa
let myNumber = 5; //variabile con intero
let myVar; //variabile non inizializzata
myVar = myNumber; //assegnazione
console.log(myVar); //stampa del risultato
```
## Tipi di dato
Ogni dato appartiene ad un *tipo*:

| Codice               | Spiegazione                                        |
| -------------------- | -------------------------------------------------- |
| `let test = 5;`      | La variabile è un *numero*. Operazioni: + - * / %  |
| `let test = "ciao";` | La variabile è una *stringa*. Concatenazione con + |
| `let test = true;`   | La variabile è *Booleana*. Inverso con !           |
| `let test;`          | La variabile è *undefined*                         |
| `let test = null`    | La variabile è *null*                              |
### Conversioni - funzioni utili
>`parseInt()`
>- *Descrizione* : Analizza l'argomento di una stringa e restituisce un intero del raggio specifico.
>- *Sintassi*: `parseInt(string, radix)`

>`parseFloat()`
>- *Descrizione* : Analizza l'argomento di una stringa e restituisce un numero a virgola mobile.
>- *Sintassi*: `parseInt(string)`

- Conversione di un numero in una stringa: `num.toString();`
- Regolazione del numero di cifre decimali
	- `let pi = (3,141592).toFixed(2)`
	- `> 3.14`

> Costanti
> `const prefix = 06; //read only`

# Interazione base
- `alert`:
![[Pasted image 20240423151652.png|center|500]]
- `prompt`
![[Pasted image 20240423151723.png|center|500]]
- `confirm`
![[Pasted image 20240423151815.png|center|500]]
# Istruzioni di base
	branch and loop
## Operazioni di comparazione

| Operazione              | Significato                                              |
| ----------------------- | -------------------------------------------------------- |
| `==` e `!=`             | *Uguale* e *non uguale*                                  |
| `>` e `>=` e `<` e `<=` | *Maggiore*, *maggiore-uguale*, *minore*, *minore-uguale* |
| `===` e `!==`           | *Identico* o *non identico* (stesso dato e tipo)         |
## Operatori logici

| Operatore | Logico |
| --------- | ------ |
| `&&`      | AND    |
| \|\|      | OR     |
| !         | NOT    |
## Funzioni
Sono un modo pratico per *raggruppare* dei comandi e per *richiamare* più volte lo stesso codice.
```js
// Dichiarazione
function calcolatrice(){
	let n1, n2, somma;
	n1 = prompt("Primo numero");
	n2 = prompt("Secondo numero");
	alert("La somma è "+(Number(n1)+Number(n2)));
}
// Invocazione
calcolatrice();
```

Le funzioni possono accettare dei parametri di ingresso e ritornare un valore in uscita:
```js
function somma(a, b){
	let sum = a + b;
	return sum;
}
```

Una funzione deve avere un nome descrittivo ( es. getName, runCalculator, fillResults, checkIsOnline ecc..), ma soprattutto una funzione deve fare *esattamente una* cosa, cioè l'operazione descritta nel suo nome. Se fa più cose, probabilmente è utile suddividere il codice in due funzioni.
### Passare funzioni a funzioni
```js
function ask(question, yes, no){
	if(confirm(question)) yes()
	else no();
}
// Funzione di callback
ask(
	"Do you agree?",
	function() { alert("You agreed.");},
	function() { alert("You canceled the operation".);}
);
```
### Arrow functions
Si tratta di un sistema più sintetico di specificare una funzione
```js
let somma = (a, b) => a + b;
```
## Oggetti
Un **oggetto** è una *lista di coppie proprietà-valore* racchiuse in parentesi angolati. Le proprietà possono essere solo stringhe o simboli. Un valore può essere un tipo primitivo, un altro oggetto o una funzione.
Da qui *JSON* (JavaScript Object Notation)
```js
let studente = {
	name: "Pierpaolo",
	age: 80,
	scores: [1,2,3],
	classes: {pw: 30, fi: 18}
};
```
Non esistono valori privati.
```js
let studente = {}; //oggetto vuoto
studente = new Object(); // stessa cosa

studente.voto = 30; //aggiungo proprietà e valore

console.log(studente.voto); //30

delete studente.voto;//elimino proprietà con annesso valore
console.log(studente.voto) //undefined
```
### Copiare un oggetto
```js
let a = {nome; "pippo"};
let b = a;
```
![[Pasted image 20240424153942.png|center|500]]

`a` e `b` sono dei riferimenti allo stesso oggetto:
- Copiando `a` in `b`, copiamo solo il riferimento;
- Se facciamo `a.nome = "pluto"`, otterremo anche che `b.nome` è "pluto".
### Garbage collection
Tutte le variabili che creiamo occupano memoria, che viene allocata dinamicamente. Un algoritmo ( *garbage collector* ) capisce gli oggetti non più raggiungibili dallo script e rilascia la memoria.
### Metodi
Un oggetto può avere tra le sue proprietà anche delle funzioni che chiameremo *metodi*.
```js
let a = {"name": "pippo"};
a.saluta = function(){
	alert("Ciao sono pippo");
}
a.saluta()
```
#### This
può essere utile nei metodi riferirci ad altre proprietà nell'oggetto:
```js
let a = {"name": "pippo"};
a.saluta = function(){
	alert("Ciao sono "+this.name);
}
```
### Costruttori
Per creare oggetti uguali o simili possiamo usare delle funzioni:
```js
// Costruttore
function User(name){
	this.name = name;
	this.isAdmin = false;
	//ritorna implicitamente this
}
let user = new User("Pippo");
alert(user.name);// Pippo
alert(user.isAdmin); //false
```

Quando viene chiamato un costruttore con `new`:
- Viene creato un oggetto vuoto e assignato a `this`.
- Viene eseguita la funzione.
- Viene ritornato `this`.
### Altri metodi
![[Pasted image 20240424155051.png|center|600]]
## Array
Si tratta di contenitori di variabili, anche con tipi diversi. Sono oggetti con proprietà numeriche e metodi/attributi per "maneggiarli".
Ogni *elemento* di un array ha un *indice* che parte da 0.
![[Pasted image 20240424155229.png|center|500]]

```js
let arr = [el0, el1, el2]; // Creazione
myFirstArr[0] = "nuovo valore" // Modifica
myFirstArr.push("ciao") // Aggiunge alla fine
myFirstArr.unshift("ueue") // Aggiunge all'inizio
myFirstArr[10] = "ciao" //aggiunge al decimo posto
myFirstArr.pop() // Rimuove l'ultimo elemento
myFirstArr.shift() // Rimuove il primo elemento
delete myFirstArr[10] // Rimuove l'elemento ma non sposta gli indici dell'array
myFirstArr.length // Lunghezza dell'array
// Svuotare l'array:
myFirstArr = []
myFirstArr.length = 0
```
### Slicing
```js
let myArr = ["a", "b", "c", "d", "e"];
myArr = myArr.slice(1, 4); // ["b", "c", "d"]
myArr.splice(3,2); //ritorna ["d","e"]
// Ora l'array è ["a", "b", "c"]
```
### Loop, join e search
```js
let colori =["rosso","verde","blu"];

//loop
colori.forEach(function(colore){
	console.log(colore);
});

//join
let list = colori.join(" - "); // "rosso - verde - blu"

//search
let a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); //1
```
### Map
Metodo che serve a "convertire" (mappare) un array in un altro. Esempio: dato un array di stringhe, generiamo un array che contiene la lunghezza delle stringhe
```js
let a = ["pippo", "pluto", "paperino"];
a.map((item, index, array) => item.lenght);
// Ritorna [5, 5, 8]
```
### Reduce
Metodo che serve a calcolare un singolo valore dell'array.
```js
[1,2,3].reduce((ac, item) => ac + item); //6
```

## Built-in Objects
### Date
L'oggetto built-in *Date* ha metodi e costanti per le date ( js non ha il tipo primitivo "data").
```js
today = new Date() // data di oggi
var Xmas95 = new Date("December 25, 1995 13:30:00”)
Xmas95 = new Date(1995, 11, 25)
var Xmas95 = new Date(1995, 11, 25, 9, 30, 0)

Xmas95.getMonth() // ritorna 11
Xmas95.getFullYear() //ritorna 1995.
getTime() // ritorna i millisecondi dal 1-1-1970
```
### Typeof e Instanceof
- `typeof true;` Restituisce `boolean`.
- `typeof 62;` Restituisce `number`.

- `let theDay = new Date(1995, 12, 17);`
- `theDay instanceof Date;` Restituisce `true`.
### Math
L'oggetto built-in *Math* ha metodi e costanti per operazioni matematiche.

![[Pasted image 20240503114412.png|center|500]]

```js
Math.random() // 0.9485474
```

### JSON
È utile convertire oggetti in stringhe ( e viceversa ), ad esempio per importare/passare dati ad un server.
```js
JSON.stringify(obj);
JSON.parse(objString);
```
### Window
L'oggetto `window` rappresenta la finestra del browser.
![[Pasted image 20240503114736.png|center|600]]
#### Funzioni dell'oggetto window
Oltre ad `alert`, `prompt` e `confirm`, l'oggetto "window" ha altre funzioni ("metodi") utili:
- `setTimeout(funz_da_chiamare, time)`: Richiama la funzione scelta dopo `time` millisecondi.
- `setInterval(funz_da_chiamare, time)`: Richiama la funzione *ciclicamente* dopo `time` millisecondi
- `clearTimeout` e `clearInterval` interrompono le funzioni precedenti.
# Eccezioni: a che servono?
Indicano che qualcosa è andato storto...
`es. rgbygiiygiu();//ReferenceError: rgbygiiygiu is not defined`
Un'eccezione può essere un qualunque tipo di dato.
Il frammento di codice "lancia" un'eccezione (*throw*) che può essere gestita (*catch*)
1. Interrompe la normale esecuzione;
2. Cerca una routine in grado di risolvere il problema (catch);
3. Se "gestita", il flusso continua da dopo il blocco "catch".
ES:
```js
function getMonthName(monthId) {
if (monthId == 1) { return “Gennaio”;}
else if (monthId == 2) { return “Febbraio”;}
/* … */
else if (monthId == 12) { return “Dicembre”;}
else {
throw “Il mese non e’ valido”;
}
//C'è un problema, lancio l'eccezione

}
function f(myMonth) {
try {
monthName = getMonthName(myMonth);
}
catch (e) {
monthName = "unknown”;
}
finally {
// eseguita in ogni caso (ad es. chiudi un file)
}
}
// Gestisco l'eccezione
```
## Error Object
Si tratta di una struttura dati "errore generico" per l'eccezione. Ha due proprietà:
1. `name`: Errore sintetico ("DOMException");
2. `message`: Descrizione verbosa dell'errore.
`throw ( new Error("The message"));`
# Approfondiamo le funzioni
## Closure
### Var e Let
- Lo *scope* di `var` è il *functional block* più vicino
- Lo *scope* di `let` è l'*enclosing block* più vicino
![[Pasted image 20240503121622.png|center|500]]

>[!danger]- Se dimentichiamo di dimenticare una variabile, diventerà una proprietà dell'oggetto `window`

## Funzioni e oggetti
Possiamo definire le funzioni *dentro* altre funzioni.
La funzione `nested` può accedere allo scope della funzione che la include (oltre che allo scope globale).
![[Pasted image 20240503121809.png|center|500]]
### Scope e funzioni nested
```js
function molto_fuori() {
	let a = 5;
	function fuori() {
		let b = 6;
		function dentro() {
			let c = 7;
			console.log(a,b,c);
			}
		return dentro();
	}
	return fuori();
}
molto_fuori();
```
![[Pasted image 20240503121943.png|center|200]]

L'inner function *può* accedere allo scope delle outer functions, mentre non è possibile il viceversa.
### Funzioni che ritornano funzioni
```js
function multisum(p1, a, b) {
	let x = p1;
	function sum(a, b) {
		return x * (a + b);
	}
	return sum(a,b);
}
/*
multisum(10, 1,2) <- torna 30
La funzione "multisum" ritorna l'output di "sum", ovvero ritorna un numero*/
function multisum(p1) {
	let x = p1;
	return function sum(a, b) {
		return x * (a + b);
	}
}
/*
multisum(10); <- torna una funzione
multisum(10)(1,2) <- torna 30
*/
```
## Closure
![[Pasted image 20240503122439.png|center|500]]
### Esempio di closure
```js
function salutatore(name) {
	let text = ’Ciao' + name; // Local variable
	let diCiao = function() { alert(text); }
	return diCiao;
}

let s = salutatore(’Lorenzo');
s(); // alerts ”Ciao Lorenzo"
```
"s" non memorizza solo il return della funzione "salutatore" (che è una funzione), ma anche le variabili appartenenti al suo scope (ad es. la variabile "text").
### Perché le closure sono utili?
![[Pasted image 20240503122709.png|center|600]]
# Approfondiamo gli oggetti
## Costruttori, prototipi ed ereditarietà
### This
Un oggetto può avere come proprietà una funzione. La parola chiave `this` usata dentro la funzione indica l'oggetto che la contiene ( dipende dal contesto, la stessa funzione può indicare come `this` oggetti diversi ).
Es.
```js
var studente = {
	name: “pippo”,
	getName : function() {
		return this.name;
	}
}
```

Attenzione al contesto!

```js
let x = 9;
let module = {
	x: 81,
	getX: function() { return this.x; }
};

module.getX(); // 81

let getX = module.getX;
getX(); // quanto ritorna?
```

## Prototipi di oggetto
In JS gli oggetti hanno un prototipo, che è un altro oggetto da cui eredita tutte le proprietà:
![[Pasted image 20240507150254.png|center|600]]

### Oggetti: Proprietà di base e ereditate
Quando chiamiamo una proprietà di un oggetto:
- Prima si cerca tra le proprietà dell'oggetto;
- Poi tra le proprietà del prototipo;
- Poi tra le propriettà del prototipo del prototipo `[Prototype chain]`
Es.
```js
pippo.name //trova la proprietà nell'oggetto
pippo.university //trova la proprietà nel prototipo
```
Possiamo vedere se la proprietà è dell'oggetto o del prototipo con:
```js
pippo.hasOwnProperty("university");//false
pippo.__proto__.hasOwnProperty("university");//true
```
Quindi possiamo ridefinire (override) alcune proprietà del prototipo.
### Prototipi di funzione
*Ogni funzione* ha la proprietà `prototype` il cui valore è un oggetto.
Scrivendo `student.prototype.university = "Tor Vergata"` assegniamo una proprietà a quell'oggetto.
**Tutti gli oggetti creati con questo costruttore avranno come prototipo il prototipo della funzione.**
### Costruttori, prototipi e proprietà
![[Pasted image 20240507151018.png|center|600]]
```js
function Student(name, age) {
	this.name = name;
	this.age = age;
}
Student.prototype.university = "Tor Vergata";
let pippo = new Student("Pippo", 20);
```
Cosa succede?
1. Viene creato un nuovo oggetto vuoto;
2. Viene passato al costruttore (`function Student`), in modo che ci possa riferire con “this”;
3. Il costruttore setta le proprietà dell’oggetto;
4. Il costruttore imposta: prototipo dell’oggetto creato = prototipo della funzione
`Student.prototype` $\rightarrow$ `pippo.__proto__`.
## Prototipi

>[!important]- Prototipi di funzione
>È l'istanza di un oggetto che diventerà il prototipo per tutti gli oggetti creati usando la funzione come costruttore.
>`NomeFunzione.prototype`

>[!important]- Prototipi di oggetto
>È l'istanza dell'oggetto dal quale l'oggetto è ereditato.
>`NomeOggetto.__proto__`

```js
function Student(name, age) {
	this.name = name;
	this.age = age;
}
Student.prototype.university = "TV";
let pippo = new Student("Pippo", 20);
let pluto = new Student("Pluto", 21);

pippo.university;
pluto. university;
```
![[Pasted image 20240507152923.png|center|500]]
```js
Student.prototype.university = "La Sapienza";
pippo.color;
pluto.color;
```
![[Pasted image 20240507152952.png|center|500]]
```js
Student.prototype = {university: "La terza"};
pippo.color;
pluto.color;
```
![[Pasted image 20240507153023.png|center|500]]
## Bind
Il metodo `bind` ci permette di definire chi è il "this" per una funzione.
- Metodo di una funzione $\rightarrow$ la funzione è un oggetto ! 
```js
let a = {id: 10};
let x = function() {return this.id}
let w = x.bind(a);
x(); // ritorna undefined
w(); //ritorna 10
```
### Apply e Call: Impostare il "this"
> `apply` per chiamare una funzione impostando un certo "this" e passando gli argomenti come array;
> `call` come apply, ma gli argomenti sono passati esplicitamente.

![[Pasted image 20240507153459.png|center|500]]
### New e Apply
```js
function Car(maker, model, year) {
	this.maker = maker;
	this.model = model;
	this.year = year;
}
let mycar = new Car(”FIAT", ”500", 1936);
// oppure …
let new_car = new Object()
Car.apply(new_car, [”FIAT", ”500", 1936]);
```
# Manipolazione del DOM
## Document Object Model
È un'*interfaccia di programmazione* per HTML ( e XML ). Fornisce una mappa strutturata del documento ed i metodi per interfacciarsi con gli elementi.
![[Pasted image 20240507153736.png|center|500]]
- Ogni elemento della pagina è un nodo
- L'elemento radice è "document"
- "document" ha una serie di proprietà standard
Es. 
```js
let foo = document.getElementById("miodiv").innerHTML;
```
foo contiene il contenuto HTML del div con id "miodiv"
## Selezionare un elemento
```js
document.getElementById("miodiv")
// Ritorna il node associato al div con id “miodiv”
document.getElementsByTagName("p")
// Ritorna una NodeList degli elementi “p”
document.getElementsByClassName(“myclass”)
// Ritorna una NodeList degli elementi con classe “myclass”
document.querySelectorAll("p .warning")
// Permette di usare selettori css e ritorna una NodeList
```
Una NodeList è simile a un’array. Esempio:
```js
let paragraphs = document.getElementsByTagName("p");
paragraphs[0]; paragraphs.length
```
## Eventi
![[Pasted image 20240507154321.png|center|500]]
### Associare un evento ad un elemento
1. con un attributo HTML
– `<body onclick="myFunction();”>`
2. con un metodo
–`window.onclick = myFunction;`
–`document.getElementById(”miodiv”).onclick = …`
3. con `addEventListener`
–` window.addEventListener("click", myFunction);` $\Leftarrow$ METODO CORRETTO
## Caricamento degli script
Il browser quando legge`<script ...>` interrompe la creazione della pagina: scarica lo script e lo esegue. Se mettiamo gli script in cima alla pagina...
-  Gli script possono non vedere gli elementi della pagina
-  GLi script possono rallentare il rendering
Mettiamo gli script in fondo?
- Se il documento HTML è lungo potremmo attendere troppo
L'attributo `defer` dice al browser di NON aspettare lo script che verrà scaricato in  background ed eseguito quando il DOM è costruito.
`async` è come defer, ma lo script viene eseguito appena è pronto.
![[Pasted image 20240507154636.png|center|500]]
## Manipolare un nodo
```js
let myImage = document.getElementById("someimage");
let oldSrc = myImage.getAttribute("src");
myImage.setAttribute("src", "otherimage.jpg2);
//Leggere attributi di un nodo
//Scrivere attributi di un nodo
let myP = document.getElementById("someparagraph");
myP.innerHTML = "<p>New text</p>";
//Leggere/Modificare HTML
myP.style.color = "#fff";
myP.style.backgroundColor = "#fff"
```
### Creare un nodo
```js
// crea un nodo ma non lo visualizza (non gli abbiamo detto dove "metterlo"!)
var newDiv = document.createElement("div");
// come il precedente ma crea un nodo contenente del testo
var ourText = document.createTextNode(”Ciao!");
// mettiamoli dentro un elemento della pagina
var ourDiv = document.getElementById(”mydiv");
newDiv.appendChild(ourText);
ourDiv.appendChild(newDiv)
ourDiv.insertBefore( newHeading, para );
// Inserisci il nodo “newHeading” prima del nodo“para”. Entrambi sono contenuti nel nodo genitore “ourDiv”.
ourDiv.replaceChild( newImg, oldImg );
// Sostituisce newImg al posto di oldImg
parentDiv.removeChild( removeMe );
// Rimuove il nodo removeMe dal suo genitore (parentDiv)
```
# Comunicazione asincrona
DA FARE A LEZIONE