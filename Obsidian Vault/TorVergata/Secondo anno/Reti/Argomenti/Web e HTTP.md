
- una pagina web è costituita da oggetti, ciascuno dei quali può essere memorizzato su un server Web differente
- un oggetto può essere un file HTML, un'immagine JPEG, uno script JavaScript, un foglio di stile CSS, un file audio, ...
- una pagina web è formata da un file HTML di base che include diversi oggetti referenziati, ciascuno referenziato da un URL

HTTP: hypertext transfer protocol

- protocollo a livello applicazione del Web
- modello client/server:
	- clienti: browser che richiede e "visualizza" gli oggetti del Web
	- server: il server Web che invia oggetti in risposta alle richieste

HTTP usa TCP:
- il client inizializza la connessione TCP (crea un socket) con il server, sulla porta 80
- il server accetta la connessione TCP dal client
- messaggi HTTP (messaggi di un protocollo di applicazione) scambiati tra browser (client HTTP) e server Web (server HTTP)
- connessione chiusa TCP

HTTP è un protocollo senza stato (stateless):
- il server non mantiene informazioni sulle richieste fatte dal server al client
- i protocolli che mantengono lo stato sono complessi
	- la storia passato (stato) deve essere memorizzata
	- se il server e/o client si bloccano, le loro visite dello "stato" potrebbero essere contrastanti e dovrebbero essere riconciliate