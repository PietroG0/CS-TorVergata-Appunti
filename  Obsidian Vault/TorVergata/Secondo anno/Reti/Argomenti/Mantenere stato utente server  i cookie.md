- Nessuna nozione di scambio di messaggi HTTP in più fasi per completare una "transazione" web
	- Non è necessario che il client o il server tengano traccia dello "stato" dello scambio in più fasi
	- Tutte le richieste HTTP sono indipendenti l'una dall'altra
	- Non è necessario che il client nè il server siano in grado di "recuperare" da una transazione quasi completa ma mai completata
- I siti web e il browser client usano i <span style="color:#ff0000">cookie</span> per mantener dello stato tra le transazioni
	- Quattro componenti:
	1) una riga di intestazione nel messaggio di risposta HTTP
	2) una riga di intestazione nel messaggio di richiesta HTTP
	3) un file cookie mantenuto sul sistema terminale dell'utente e gestito dal browser dell'utente
	4) un database sul sito


![[Pasted image 20240324172132.png]]

<span style="color:#ff0000">I cookie possono essere usati per</span>:
- Autorizzazione
- Carrello degli acquisti
- Raccomandazioni
- Stato della sessione dell'utente (e-mail Web)

<span style="color:#ff0000">Come mantenere lo stato?</span>
- <span style="color:#0070c0"> Presso gli endpoint del protocollo:</span>
	- mantenere lo stato presso il trasmettitore e il ricevitore attraverso multiple transazioni
- <span style="color:#0070c0">Nei messaggi:</span>
	- i cookie trasportano lo stato nei messaggi HTTP

I cookie possono essere usati per:
- Tracciare il comportamento degli utenti su un dato sito (<span style="color:#ff0000">cookie di prima parte</span>)
- Tracciare il comportamento degli utenti su più siti (<span style="color:#ff0000">cookie di terze parti</span>) senza neppure che l'utente abbia mai scelto di visitare il sito del tracker
- Il tracciamento può essere invisibile all'utente



