## Come Funziona il Demultiplexing
- L'host riceve i datagrammi IP
	- ogni datagramma ha un indirizzo IP di origine e un indirizzo IP di destinazione
	- ogni datagramma trasporta 1 segmento a livello di trasporto
	- ogni segmento ha un numero di porta di origine e un numero di porta di destinazione

- L'host usa gli indirizzi IP e i numeri porta per inviare il segmento alla socket appropriata

## Demultiplexing senza connessione
- Quando si crea un socket, si deve specificare il nuero di porta
- Quando si crea il datagramma da inviare al socket UDP, si deve specificare
	- indirizzo IP di destinazione
	- numero di porta di destinazione
- Il segmento viene passato al livello di rete
- Quando l'host riceve il segmento UDP:
	- controlla il numero della porta di destinazione nel segmento
	- invia il segmento UDP alla socket con quel numero di porta


![[Pasted image 20240403143107.png]]


## Demultiplexing orientato alla connessione
- La socket TCP è identificata da quattro parametri:
	- indirizzo IP di origine
	- numero di porta di origine
	- indirizzo IP di destinazione
	- numero di porta di destinazione

- Demux: il lato ricevente usa i quattro valori per inviare il segmento alla socket appropriata
- Un host server crea una socket passiva specificando un numero di porta
- La socket passiva viene usata per accettare le richieste di connessione, per ciascuna delle quali verrà creata una nuova socket connessa (con la medesima porta e indirizzo IP locale, ma diversa porta e indirizzo remoto, discriminando pertanto le socket connesse di client diversi)

![[Pasted image 20240403143354.png]]


### Riassunto
- Multiplexing, demultiplexing: basato sui valori dei campi dell'intestazione del segmento o del datagramma
- UDP: demultiplexing usando il numero di porta e indirizzo IP di destinazione
- TCP: demultiplexing usando la quadrupla di valori: indirizzi di origine e di destinazione, e numero di porta




