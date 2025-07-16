<span style="color:#ff0000">Obiettivo</span>: soddisfare la richiesta del client senza coinvolgere il server d'origine (origin server)
- L'utente configura il browser per usare una <span style="color:#ff0000">Web cache</span> (locale)
- Il browser trasmette tutte le richieste HTTP alla cache
	- <span style="color:#0070c0">se</span> l'oggetto è nella cache: la cache fornisce l'oggetto al client
	- <span style="color:#0070c0">altrimenti</span> la cache richiede l'oggetto al server d'origine, memorizza l'oggetto ricevuto, e infine lo restituisce al client


<span style="color:#ff0000">Web Cache (server proxy)</span>
- La cache opera come client (per il server d'origine) e come server (per il client originale)
- Il server comunica alla cache la cache consentita dell'oggetto nell'intestazione della risposta

<span style="color:#ff0000">Perchè il web caching?</span>
- Riduce i tempi di risposta alle richieste del client
	- La cache è più vicina al client
- Riduce il traffico sul collegamento di accesso a Internet istituzionale
- Internet è ricca di cache
	- Consente ai provider "scadenti" di fornire dati con efficacia

Il caching può essere effettuato da:
- Una web cache, ossia uno speciale tipo di proxy, cui il browser invia le richieste invece che indirizzarle all'origin server
- oppure, dal browser stesso, che conserva una copia degli oggetti richiesti in precedenza
In entrambi i casi, occorre prestare attenzione al problema dell'aggiornamento degli oggetti

