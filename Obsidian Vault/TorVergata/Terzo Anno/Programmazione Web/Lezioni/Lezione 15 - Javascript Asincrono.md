#Web 

![[Pasted image 20240509145750.png|center|500]]

> Codice sincrono:

```js
const modal = document.querySelector(".modal");
let val = confirm("Show modal?");
if(val) modal.classList.add("show");
```

- Il codice è eseguito linea dopo linea;
- Ogni linea aspetta che finisce l'esecuzione della precedente;
- Le operazioni lunghe bloccano l'esecuzione del programma.

> Codice Asincrono

```js
const modal = document.querySelector(".modal");
setTimeout(function(){
	modal.classList.add("show");
}, 2000);
modal.style.backgroundColor = "red";
```

- La funzione è eseguita alla fine dell'esecuzione del task;
- Il codice sincrono continua la sua esecuzione.
**Le callback non rendono un codice asincrono**:
```js
const buttons = document.querySelectorAll(".btn");
buttons.forEach((el) => el.style.backgroundColor = "white"));
```

```js
const image = document.querySelector(".my-img");
image.src = "mountain.jpg";
image.addEventListener("load", function(){
	image.classList.add("fadeIn");
});
modal.style.backgroundColor = "white";
```
# Event Loop
![[Pasted image 20240509151241.png|center|600]]

>Esempio

```js
function main(){
	console.log("A");
	setTimeout(function display(){
		console.log("B");
	}, 0);
	console.log("C");
}
main();
```
![[Pasted image 20240509151505.png|center|300]]
![[Pasted image 20240509151534.png|center|300]]
![[Pasted image 20240509151548.png|center|300]]
![[Pasted image 20240509151606.png|center|300]]
![[Pasted image 20240509151628.png|center|300]]
# AJAX
- Asynchronous JavaScript And XML.
- AJAX usa solo una combinazione di:
	- Un oggetto XMLHttpRequest incorporato nel browser (per richiedere dati da un server Web);
	-  JavaScript e HTML DOM (per visualizzare o utilizzare i dati)
- AJAX è il sogno di uno sviluppatore, perché puo:
	- Aggiornare una pagina Web senza ricaricare la pagina
	- Richiedere dati a un server - dopo che la pagina è stata caricata
	- Ricevere dati da un server - dopo che la pagina è stata caricata
	- Inviare dati a un server - in background
## XMLHttpRequest
- Crea una richiesta web.
- Metodi/attributi più utilizzati:
	- *Open* (`GET`, `http://www.uniroma2.it`, `false`)
		- Il terzo parametro dice se la richiesta deve essere asincrona. Se `async=true`.
	- *Send()* Invia le richieste
	- *responseText* La risposta ( DOMString )
## AJAX con Fetch
### Fetch API
>Fetch
>- API promise-based per le richieste Ajax
>- Rimpiazza *XMLHttpRequest*
>- Ora supportato in tutti i browser moderni

```js
function doWebRequest(){
	const url = "..."
	fetch(url);
}
```
![[Pasted image 20240513104404.png|center|600]]
# Promise
Una *Promise* è un oggetto usato come **placeholder** per il risultato futuro di una operazione asincrona.
- Un contenitore per un valore assegnato in modo asincrono
- Un contenitore per un valore futuro
> Vantaggi:
> - Non serve più un evento ed una callback per gestire il risultato asincrono
> - Le promises si possono concatenare evitando il *callback hell*

- "Producing code" è un codice che può richiedere del tempo;
- "Consuming code" è il codice che deve attendere il risultato.
Una promise è un oggetto che collega producing code e consuming code.
```js
let myPromis = new Promise(function(myResolve,myReject){
	//producing code
	myResolve(); //when successful
	myReject(); //when error
});
//consuming code
myPromise.then(
	function(value){/*code if successful*/}
	function(error){/*code if some error*/}
);
```
## Ciclo di vita
![[Pasted image 20240520114752.png|center|600]]
## Creare una promise
```js
let promise = new Promise(function(resolve,reject){
	//la funzione viene eseguita automaticamente quando la promessa viene costruita
	setTimeout(()=> resolve("Done"),1000);
	//dopo un secondo arriva il segnale che il lavoro è terminato con il risultato "Done"
});
```
![[Pasted image 20240520115111.png|center|500]]
```js
let promise = new Promise(function(resolve,reject){
	setTimeout(()=> reject(new Error("Whoops!")),1000);
	//dopo un secondo arriva il segnale che il lavoro è terminato con un errore
});
```
![[Pasted image 20240520115310.png|center|500]]
### Consumare una promise: `then`
```js
let promise = new Promise(function(resolve,reject){
	setTimeout(()=> resolve("Done"),1000);
});

promise.then(
	result => alert(result), //"Done" dopo un secondo
	error => alert(error) //non esegue
);
```
### Gestire gli errori: `catch`
```js
let promise = new Promise(function(resolve,reject){
	setTimeout(()=> reject(new Error("Whoops!")),1000);
});
//.catch(f) è la stessa cosa di promise.then(null, f)
promise.catch(alert); //mostra "Error: Whoops!"dopo un secondo 
```
## Concatenare Promise
![[Pasted image 20240520120130.png|center|500]]
### ...finally
```js
.finally(() => alert("Promise Ready"))
.then(result => alert(result));
```
Oppure
```js
.finally(() => alert("Promise Ready"))
.catch(err => alert(err));
```
