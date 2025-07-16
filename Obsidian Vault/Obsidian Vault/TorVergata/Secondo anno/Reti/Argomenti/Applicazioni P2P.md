- Nessun server sempre attivo
- Sistemi periferici arbitrari comunicano direttamente 
- I peer richiedono un servizio ad altri peer e forniscono un servizio in cambio ad altri peer
- I peer sono connessi a intermittenza e cambiano indirizzo IP

### Distribuzione di file: client-server vs P2P
Quanto tempo per distribuire un file (di dimensione F) da un server a N peer?

![[Pasted image 20240405144301.png]]

#### File distrubution time: client-server
- Trasmissione via server: deve inviare (caricare) in sequenza N copie di file:
	- tempo per inviare una copia: F/us
	- tempo per inviare N copie: NF/us
- Client: ogni cliente deve scaricare una copia del file
	- d min: banda di download più bassa
	- tempo di download per il client con banda minima è almeno: F/d min

![[Pasted image 20240405144538.png]]


#### Distribuzione di file: P2P
- Trasmissione via server: deve trasmettere almeno una copia del file
	- tempo per inviare una copia: F/us
- Client: ogni cliente deve scaricare una copia del file
	- tempo per il client più lento, almeno F/d min
- I client: come aggregato devono scaricare NF bit
	- capacità totale di upload (che limita la massima velocità di download) è us + Sommatoria di ui 


![[Pasted image 20240405144822.png]]


#### Client-server vs P2P: example

![[Pasted image 20240405144859.png]]


#### Distribuzione di file P2P: BitTorrent
- File diviso in chunk (parti), in genere da 256kb
- I peer nel torrent inviano/ricevono chunk del file

![[Pasted image 20240405145001.png]]

- Un peer che entra a far parte del torrent:
	- non ha chunk del file, ma li accumulerà nel tempo da altri peer
	- si registra come un tracker, ottenendo la lista di un sottoinsieme dei peer nel torrent, stabilisce una connessione con un sottoinsieme di questi, che sono detti peer "vicini"
	- informa periodicamente il tracker che è ancora nel torrent

- Mentre scarica chunk, un peer invia i chunk già in suo possesso agli altri peer
- Un peer può cambiare i peer con cui scambia i chunk
- I peer possono andare e venire
- Una volta che un peer ha l'acquisito l'intero file, può (egoisticamente) lasciare il torrent oppure può (altruisticamente) rimanere nel torrent (come seed)

#### BitTorrent: richiesta e invio di chunk di file
Richiesta di chunk:
- In ogni momento, peer diversi hanno sottoinsiemi diversi di chunk
- Periodicamente, Alice chiede ai peer vicini l'elenco dei chunk in loro possesso
- Alice richiede ai peer i chunk mancanti, adottando la strategia del rarest first: uniformando la distribuzione dei chunk, migliora la disponibilità globale e aumenta le possibilità di scambio (maggiore throughput)
- Un peer appena entrato può chiedere un blocco in modo casuale (perchè vuole avere il prima possibile un blocco da condividere); mentre, quando sta per completare il file, può adottare la strategia end game e richiedere lo stesso blocco a più peer simultaneamente (cancellando le richieste pendenti appena riceve un blocco)

Invio di chunk: tit-for-tat:
- Alice invia i chunk ai quattro peer vicini che attualmente le inviano i chunk alla velocità più alta
	- altri peer sono detti chocked (non ricevono chunk da Alice)
	- rivaluta i primi 4 posti ogni 10 secondi

- Ogni 30 secondi: seleziona in modo casuale un vicino, inizia a inviare chunk
	- questo peer è detto "optimistically unchocked"
	- il nuovo peer scelto può entrare nella top 4

#### BitTorrent: tit-for-tat
1) Alice sceglie Bob come "optimistically unchocked"
2) Alice diventa uno dei primi quattro fornitori di Bob; Bob ricambia
3) Bob diventa uno dei primi 4 fornitori di Alice

![[Pasted image 20240405145925.png]]

