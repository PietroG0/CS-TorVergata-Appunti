#### Livello di collegamento: Introduzione
Il livello di collegamento ha la responsabilità di trasferire i datagrammi da un nodo a quello fisicamente adiacente lungo un collegamento

- Datagramma trasferito da protocolli di collegamenti differenti su collegamenti differenti:
	- es. WiFi sul primo collegamento, Ethernet sul collegamento successivo

- Ciascun protocollo di collegamento fornisce servizi differenti
	- es. Può o meno fornire il trasferimento di dati affidabile sul collegamento


#### Livello di collegamento: Servizi
- Farming:
	- Incapsula i datagrammi in frame, aggiungendo una intestazione e un trailer

- Accesso al collegamento:
	- Un protocollo che controlla l'accesso al mezzo trasmissivo (MAC, medium access control) se il mezzo trasmissivo è condiviso 
	- Indirizzi "MAC" nell'intestazione dei frame per identificare la sorgente e la destinazione (diversi dagli indirizzi IP)

- Consegna affidabile tra nodi adiacenti
	- Usato raramente con canali bassi tassi di errore
	- Collegamenti wireless: tassi di errore elevati
		- Correggere l'errore localmente anzichè costringere il livello di trasporto o l'applicazione a ritrasmissioni dalla sorgente alla destinazione?

- Controllo di flusso:
	- Velocità tra nodi trasmittente e ricevente adiacenti

- Rilevazione e correzione degli errori:
	- Gli errori sono causati da attenuazione del segnale e da rumore
	- Il nodo ricevente rileva gli errori. Due approcci per la correzione:
		- ARQ (automatic repeat request): basato su ritrasmissioni
		- Forward error correction (FEC, correzione degli errori in avanti)

- Correzione degli errori:
	- Il ricevente identifica e corregge gli errori sui bit senza ritrasmissioni: forward error correction (FEC)

- Half-Duplex e Full-Duplex:
	- Con half-duplex, i nodi ad entrambi gli estremi del collegamento possono trasmettere, ma non contemporaneamente 


#### Implementazione del livello di collegamento negli host
- Il livello di collegamento implementato (principalmente) dall'adattatore di rete o scheda di rete
	- Implementa il livello di collegamento e quello fisico
	- Si collega al bus di sistema

- Combinazione di hardware, software e firmware

#### Adattatore di rete negli host

![[Pasted image 20240523124728.png]]

Lato mittente, il controllore:
- Incapsula il datagramma in un frame
- Aggiunge bit di controllo degli errori, implementa il trasferimento di dati affidabile, il controllo del flusso ecc..

Lato ricevente, il controllore:
- Verifica la presenza di errori e si occupa del trasferimento di dati affidabile, del controllo del flusso, ecc..
- Estrae il datagramma e lo passa al livello superiore

