![[Pasted image 20240315114122.png]]

Alcuni campi di intestazione nei messaggi di richiesta:

<span style="color:#ff0000">Date</span>
- la data e l'ora in cui il messaggio è stato originato

<span style="color:#ff0000">Server</span>
- descrive il software usato dal server di origine per gestire la richiesta (nota: troppi dettagli posso aiutare i malintenzionati a attaccare il server)

<span style="color:#ff0000">Last-Modified</span>
- la data e l'ora in cui il server di origine crede che l'oggetto sia stato modificato per l'ultima volta

<span style="color:#ff0000">Accept-Ranges</span>
- Indica il supporto del server ai download parziali: il valore, se diverso da none, indica l'unità che si può usare per esprimere l'intervallo richiesto

<span style="color:#ff0000">Content-Length</span>
- lunghezza in byte del corpo dell'entità inviato al ricevente (o che sarebbe stato inviato nel caso di un richiesta HEAD)

<span style="color:#ff0000">Content-Type</span>
- media type (che indica un formato) del corpo dell'entità inviato al ricevente (o che sarebbe stato inviato nel caso di un richiesta HEAD)


**Codici di stato della risposta HTTP**
Nella prima riga nel messaggio di risposta dal server al client

Alcuni codici di stato e relative espressioni
<span style="color:#ff0000">200 OK</span>
- La richiesta ha avuto successo; l'oggetto richiesto viene inviato nella risposta

<span style="color:#ff0000">301 Moved Permanently</span>
- L'oggetto richiesto è stato trasferito; la nuova posizione è specificata nell'intestazione
Location: della risposta

<span style="color:#ff0000">400 Bad Request</span>
- Il messaggio di richiesta non è stato compreso dal server

<span style="color:#ff0000">404 Not Found</span>
- Il documento richiesto non si trova su questo server

<span style="color:#ff0000">406 Not Acceptable</span>
- L'oggetto richiesto non esiste in una forma che soddisfa i vari Accept

<span style="color:#ff0000">505 HTTP Version Not Supported</span>
- Il server non ha la versione di protocollo HTTP