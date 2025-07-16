#### Instradamento Internet inter-AS: BGP
- BGP (Border Gateway Protocol): il protocollo di fatto per l'instradamento inter-domain
- Permette alla sottorete di pubblicizzare la sua esistenza e le destinazioni che può raggiungere al resto di Internet
- BGP fornisce a ciascun AS un mezzo per:
	- Ottenere informazioni sulla raggiungibilità dei prefissi di sottorete da parte dei sistemi confinanti
	- Determinare le rotte verso altre reti sulla base delle informazioni di raggiungibilità e di politiche
	- Propagare le informazioni di raggiungibilità a tutti i router interni all'AS
	- Annunciare (alle reti confinanti) le informazioni sulla raggiungibilità delle destinazioni

![[Pasted image 20240515141600.png]]

#### Nozioni di base su BGP
- Sessione BGP: due router BGP ("peers") si scambiano messaggi BGP attraverso una connessione TCP semi-permanente:
	- Annunciare percorsi verso diversi prefissi di rete di destinazione (BGP è un protocollo "path vector")
- Quando il gateway 3a di AS3 annuncia il percorso AS3,X al gateway 2c di AS2:
	- AS3 permette a AS2 che inoltrerà i datagrammi verso X

#### Messaggi del protocollo BGP
- I messaggi BGP sono scambiati tra peer su connessioni TCP
- Messaggi BGP
	- OPEN: apre la connessione TCP al peer BGP remoto e autentica il peer BGP mittente
	- UPDATE: annuncia un nuovo percorso (o ritira il vecchio)
	- KEEPALIVE: mantiene in vita la connessione in assenza di UPDATE; inoltre ACK della richiesta OPEN
	- NOTIFICATION: segnala gli errori nel messaggio precedente; viene usato anche per chiudere la connessione

#### Attributi dei percorsi e rotte BGP
- Rotta annunciata da BGP: prefisso + attributi
	- prefisso: la destinazione che viene annunciata
	- due attributi importanti:
		- AS-PATH: elenco degli AS attraverso i quali è passato l'annuncio del prefisso
		- NEXT-HOP: indirizzo IP dell'interfaccia del router che inizia l'AS-PATH

- Instradamento basato su politiche:
	- Un gateway che riceve un annuncio di percorso usa una import policy per accettare/declinare il percorso
	- Le politiche dell'AS determinano anche se annunciare un percorso a altri AS vicini

#### Selezione delle rotte BGP
- Il router può conoscere più di un percorso verso l'AS di destinazione, seleziona il percorso in base a:
	1) valore dell'attributo di preferenza locale: decisione politica
	2) AS-PATH più breve
	3) router NEXT-HOP più vicino: instradamento a patata bollente 
	4) identificatori BGP

#### Perchè diversi instradamenti Intra- e Inter-AS?
Politiche:
- Inter-AS: l'amministratore vuole avere il controllo sul modo in cui viene instradato il suo traffico, su chi passa attraverso la sua rete
- Intra-AS: singolo amministratore, quindi le politiche meno problematiche

Scalabilità:
- Il routing gerarchico consente di ridurre le dimensioni delle tabelle e il traffico di aggiornamento

Prestazioni:
- Intra-AS: può concentrarsi sulle prestazioni
- Inter-AS: le politiche sono dominanti rispetto alle prestazioni

