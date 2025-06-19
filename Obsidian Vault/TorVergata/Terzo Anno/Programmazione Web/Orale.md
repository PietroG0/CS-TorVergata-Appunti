#Web 

#### Cos'è CORS?
CORS, acronimo di Cross-Origin Resource Sharing, è un meccanismo di sicurezza implementato nei browser che permette di controllare quali risorse possono essere richieste da un dominio diverso rispetto a quello da cui la risorsa è stata servita. Viene utlizzato per prevenire richieste HTTP non autorizzate da domini esterni, aumentando la sicurezza delle applicazioni web


#### Metodi HTTP
I metodi HTTP sono verbi che indicano l'azione da eseguire su una risorsa specifica. I metodi più comuni sono:
- GET: recupera una risorsa
- POST: invia dati al server per creare una nuova risorsa
- PUT: aggiorna una risorsa esistente
- DELETE: elimina una risorsa
- HEAD: recupera le intestazioni di una risorsa
- OPTIONS: descrive le opzioni di comunicazione per la risorsa
- PATCH: applica modifiche parziali a una risorsa


#### Cosa si intende per semantica degli elementi HTTP?
La semantica degli elementi HTTP si riferisce al significato e allo scopo specifico di ciascun metodo, intestazione, e codice di stato HTTP. Ad esempio, un metodo GET semantizza la richiesta di lettura di una risorsa senza effetti collaterali, mentre un POST indica l'invio di dati al server con potenziale creazione o modifica di risorse


#### Parlami delle API, cosa fai dal punto di vista del server per fare richieste agli altri siti?
Le API (Application Programming Interface) sono interfacce che permettono a diverse applicazioni software di comunicare tra loro. Dal punto di vista del server, per fare richieste ad altri siti, si utilizza un client HTTP, che può essere una libreria come axios e fetch in JavaScript, per inviare richieste e ricevere risposte da API esterne. Il server può fare richieste HTTP come GET, POST, PUT, DELETE, ecc.., e deve gestire le risposte, incluso il trattamento di eventuali errori


#### Serif e sans Serif
I caratteri serif sono caratterizzati dalla presenza di piccole linee o abbellimenti (serif) alla fine delle lettere. I caratteri sans serif, al contrario, sono privi di queste linee aggiuntive. Esempi di font serif includono Times New Roman e Georgia, mentre Arial e Helvetica sono esempi di sans serif


#### Sapresti fare un middleware, che callback gli passi?
Un middleware è una funzione che ha accesso all'oggetto request, response e alla funzione next nell'applicazione Express.js. Un esempio di middleware potrebbe essere

```JS
function logRequest(req, res, next) {
	console.log('${req.method} ${req.url}');
	next();
}

app.use(logRequest)
```

La callback next viene chiamata per passare il controllo al middleware successivo


#### Caratteristiche di JavaScript
JavaScript è un linguaggio di programmazione dinamico e interpretato, noto per le seguenti caratteristiche:
- Basato sugli eventi e orientato agli oggetti
- Supporta funzioni di prima classe
- Ha un'ampia compatibilità con i browser
- Utilizza la gestione asincrona tramite callback, Promises e async/await
- Permette la manipolazione del DOM (Document Object Model)


#### La specificità del CSS
La specificità del CSS è una misura che determina quali regole CSS vanno applicate a un elemento specifico quando ci sono regole contrastanti. E' calcolata basandosi sul numero di selettori di tipo ID, classi e pseudo-classi, e selettori di tipo presenti in un selettore. Più specifica è una regola, maggiore è la priorità che ha


#### Cosa sono i web font?
I web font sono caratteri tipografici che possono essere caricati e utilizzati nelle pagine web tramite CSS. Permettono agli sviluppatori di utilizzare font non standardizzati o personalizzati che non sono installati localmente sul dispositivo dell'utente


#### Font-Family
La proprietà font-family in CSS specifica una lista di famiglie di caratteri per un elemento. La lista può includere font generici come serif, sans-serif, monospace, ecc..., e font specifici come Arial, Helvetica, Times New Roman, ecc.. Esempio:

```CSS
p {
	font-family: "Arial", sans-serif;
}
```


#### Cos'è il font stack?
Il font stack è una lista di famiglie di caratteri specificata nella proprietà font-family. Questa lista permette al browser di utilizzare il primo font disponibile nell'elenco. Se il primo non è disponibile, verrà utilizzato il successivo, e così via.


#### Desktop first e mobile first
Desktop first e mobile first sono due approcci alla progettazione responsive:
- Desktop first: Il design della pagina web viene creato inizialmente per i dispositivi desktop e poi adattato ai dispositivi mobili utilizzando media queries. (max-width)
- Mobile first: Il design viene inizialmente creato per dispositivi mobili e successivamente adattato per dispositivi desktop con media queries (min-width)


#### Cos'è il collasso dei margini?
Il collasso dei margini si verifica quando i margini verticali di due elementi adiacenti (superiore e inferiore) si combinano in un unico margine. Il margine risultante sarà pari al maggiore dei due margini coinvolti


#### Architettura di Node.js, com'è fatta, quanti thread ha, ha le code?
Node.js è basato su un'architettura event-driven e non-bloccante. Utilizza un singolo thread principale per l'esecuzione del codice JavaScript, ma sfrutta un pool di thread del sistema operativo per operazioni di I/O asincrone. Utilizza anche una coda di eventi per gestire le operazioni asincrone


#### Differenza tra margin e padding
- Margin: è lo spazio esterno che separa un elemento dagli altri elementi circostanti
- Padding: è lo spazio interno tra il contenuto di un elemento e il suo bordo


#### Border-box
La proprietà box-sizing: border-box in CSS modifica il comportamento del modello di box. Quando è impostata, la larghezza e l'altezza di un elemento includono il padding e il bordo, ma non il margine


#### Head e Header
- Head: un elemento HTML che contiene metadati per il documento, come il titolo, i link ai fogli di stile, e i metadati
- Header: un elemento HTML che rappresenta un contenitore per contenuti introduttivi o di navigazione, come titoli, loghi, e menu di navigazione


#### CSS Position: static, fixed, relative, absolute
- static: è il valore predefinito, l'elemento è posizionato secondo il normale flusso del documento
- fixed: l'elemento è posizionato rispetto alla finestra del browser e non si muove quando la pagine viene scrollata
- relative: l'elemento è posizionato rispetto alla sua posizione originale nel flusso del documento
- absolute: l'elemento è posizionato rispetto all'elemento contenitore più vicino che ha una posizione diversa da static


#### Media query
Le media queries sono una caratteristica del CSS3 che permette di applicare stili differenti a seconda delle caratteristiche del dispositivo, come la larghezza della finestra del browser, la risoluzione dello schermo, e l'orientamento. Esempio:

```CSS
@media (max-width: 600px) {
	body {
		background-color: lightblue;
	}
}
```


#### Tecniche responsive
Le tecniche responsive includono:
- Uso di layout fluidi basati su percentuali piuttosto che su pixel
- Utilizzo di media queries per adattare il desgin ai diversi dispositivi
- Implementazione di immagini responsive che si ridimensionano in base alla dimensione dello schermo
- Applicazione di griglie flessibili e framework CSS come Bootstrap o Foundation


#### FORM
Un form in HTML è un contenitore per elementi di input che permette agli utenti di inviare dati a un server. Può includere campi di testo, caselle di controllo, pulsanti radio, menu a discesa e pulsanti di invio. Esempio:

```HTML
<form action="/submit" method="post">
	<label for="name">Nome:</label>
	<input type="text" id="name" name="name">
	<input type="submit" value="Invia">
</form>

```


#### Chi è il this nel lato function?
In una funzione, il valore di this dipende da come la funzione è chiamata. Quando una funzione p chiamata come metodo di un oggetto, this si riferisce all'oggetto stesso. Quando una funzione è chiamata come funzione standalone, this si riferisce all'oggetto globale (window in broser, global in Node.js) o undefined in strict mode.


#### Cos'è una promise?
Una Promise è un oggetto che rappresenta l'eventuale completamento o fallimento di un'operazione asincrona. Ha tre stati: pending (in attesa), fulfilled (completata con successo), e rejected (fallita)


#### Come creare una promise?
Una promise può essere creata utilizzando il costruttore Promise, che prende una funzione executor con due parametri: resolve e reject. Esempio:

```JS
let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Operazione Completata");
	}, 1000);
});
```


#### Cos'è la coda di microtask?
La coda di microtask è una coda di operazioni che devono essere eseguite subito dopo il completamento dell'attuale task in corso. Le promesse risolte e le callback di MutationObserver sono esempi di microtask


#### Transpilers
I transpilers sono strumenti che traducono il codice sorgente scritto in un linguaggio di programmazione in un altro linguaggio di programmazione. Ad esempio, Babel è un transpiler che converte il codice ES6+ in ES5 per compatibilità con i browser più vecchi


#### Polyfill
Un polyfill è un pezzo di codice (di solito JavaScript) che implementa funzionalità che non sono nativamente supportate in alcuni browser. Viene utilizzato per garantire che una funzionalità moderna sia disponibile in tutti gli ambienti di esecuzione


#### Garbage collector
Il garbage collector è un sistema automatizzato di gestione della memoria che recupera memoria inutilizzaata liberando gli oggetti che non sono più raggiungibili o utilizzati dal programma


#### Scope
Lo scope (ambito) definisce la visibilità e la durata delle variabili e delle funzioni. In JavaScript, ci sono due tipi principali di scope: lo scope globale e lo scope locale (o di funzione). Con l'introduzione di let e const, esiste anche lo scope di blocco. Lo scope locale lo hanno quelle variabili che si trovano all'interno delle funzioni, mentre quando una variabile si trova fuori dalla funzione assume scope globale. Esempio:

```JS
let var1; //scope globale

function myFunction(){
	let var2; //scope locale
	// Do Stuff...
}
console.log(var1)
```