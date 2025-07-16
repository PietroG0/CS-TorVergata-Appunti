- Due tipi di messaggi HTTP: richiesta, risposta
- Messaggio di richiesta HTTP:
	- ASCII

![[Pasted image 20240315112918.png]]

Alcuni campi di intestazione nei messaggi di richiesta:
<span style="color:#ff0000">Host</span>
- Hostname e numero di porta del server al quale sarà inviata la richiesta. Obbligatorio in HTTP/1.1 , se assente il server può rispondere con un 400 Bad Request

<span style="color:#ff0000">User-Agent</span>
- Identifica l'applicazione, il sistema operativo, il vendor e/o la versione dello user agent che sta effettuando la richiesta

<span style="color:#ff0000">Accept</span>
- Tipi di contento, espressi come medita type, compresi dal client

<span style="color:#ff0000">Accept-Language</span>
- Linguaggi naturali o locale preferiti dal client

<span style="color:#ff0000">Accept-Encoding</span>
- Algoritmi di codifica (tipicamente, la compressione) compresi dal client

<span style="color:#ff0000">Connection</span>
- Controlla se la connessione rimarrà aperta al terminale dello scambio richiesta/risposta. Il valore close indica che la connessione sarà chiusa; altrimenti, una lista non vuota di nomi di header, che saranno rimossi dal primo proxy non trasparente o cache, indica che la connessione rimarrà aperta

![[Pasted image 20240315113441.png]]

<span style="color:#ff0000">Metodo POST</span>:
- la pagina web spesso include un form per l'input dell'utente
- l'input dell'utente viene inviato dal client al server nel corpo dell'entità di un messaggio di richiesta HTTP POST

<span style="color:#ff0000">Metodo GET</span> (per inviare dati al server):
- l'input arriva al server nel campo URL della riga di richiesta

<span style="color:#ff0000">Metodo HEAD</span>:
- richiede le intestazioni solo che verrebbero restituite se l'URL specificato fosse richiesto con il metodo HTTP GET

<span style="color:#ff0000">Metodo PUT</span>:
- carica un nuovo file sul server
- sostituisce completamente il file esistente all'URL specificato con il contenuto del corpo dell'entità del messaggio di richiesta HTTP PUT

