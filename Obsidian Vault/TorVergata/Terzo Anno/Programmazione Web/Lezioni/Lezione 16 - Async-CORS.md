#Web 
# Async Await
## async
```js
async function f(){
	return 1;
}
```
`async` prima di una funzione significa che la funzione ritorna **SEMPRE** una *promise*.
```js
async function f(){
	return 1;
}
f().then(alert); //1
```

```js
async function f(){
	return Promise.resolve(1);
}
f().then(alert); //1
```
## await
Rende il codice asincrono ed aspetta la risposta
```js
// funziona solo dentro funzioni async
let value = await promise;
```
Es.
```js
async function f(){
	let promise = new Promise((resolve,reject) => {
		setTimeout(() => resolve("Done"), 1000)
	});
	
	let result = await promise; // asoetta finché la promise non si risolve
	alert(result);//Done 
}
f();
```

### Error handling : `try`/`catch`
Nel caso di **rigetto** una promessa rilascia un errore. Si può recuperare l'errore con try/catch:
```js
async function f(){
	try{
		let response = await fetch("http://no-such-url");
	} catch(err) {
		alert(err); //TypeError: failed to fetch
	}
}
f();
```
## Fetch con Async/Await
### GET
![[Pasted image 20240520131506.png|center|500]]
#### V2
![[Pasted image 20240520131528.png|center|500]]
### Errors
![[Pasted image 20240520131547.png|center|500]]
#### V2
![[Pasted image 20240520131606.png|center|500]]
# CORS
## CORS:  Cross-Origin HTTP Request
Un client richiede una risorsa di un differente dominio, protocollo o porta.
Es: Una web application con dominio X non può richiedere una risorsa ad un dominio Y tramite AJAX request se Y non ha abilitato il CORS.
## Same Origin Policy
Un browser permette agli script contenuti in una pagina web di accedere ai dati contenuti in un’altra risorsa web (altra pagina web, json ecc) solo se entrambe le pagine hanno la stessa origine:
![[Pasted image 20240520131938.png|center|500]]
![[Pasted image 20240520131956.png|center|500]]
![[Pasted image 20240520132021.png|center|500]]

## Cross Origin Resource Sharing
> Come fare se vogliamo espressamente permettere il resource sharing tra due siti diversi? $\Rightarrow$ CORS: 
> - Standard W3C per condividere risorse tra domini diversi
> - Prevede richiesta di autorizzazione (client) e autorizzazione(server)

Viene implementato inviando degli header HTTP in req/resp
- Richieste Semplici
- Richieste Preflight
### Simple Request
 Metodi Ammessi:
-  GET
-  HEAD
-  POST
 Header pemessi:
-  Accept
-  Accept-Language
-  Content-Language
-  Content-Type (but note the additional requirements below)
-  …
 Valori ammessi per header Content-Type::
-  application/x-www-form-urlencoded
-  multipart/form-data
-  text/plain
![[Pasted image 20240520132331.png|center|500]]
#### Pre-Flight request
![[Pasted image 20240520132404.png|center|500]]

![[Pasted image 20240520133817.png|center|500]]
