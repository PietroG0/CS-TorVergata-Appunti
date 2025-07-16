#Reti 

#### Servizi e protocolli del livello di rete
- Trasporta i segmenti dall'host mittente all'host destinatario
	- mittente: incapsula i segmenti dentro ai datagrammi che passa al livello di collegamento
	- destinatario: consegna i segmenti al protocollo del livello di trasporto 

- I protocolli di livello di rete sono implementati da tutti i dispositivi in internet: host, router
- Router:
	- Esamina i campi dell'intestazione di tutti i datagrammi IP che lo attraversano
	- Sposta i datagrammi dalle porte di ingresso alla porta di uscita per trasferire il datagramma lungo il percorso dall'host di origine a quello di destinazione

##### Due funzioni chiave del livello di rete
- Inoltro: trasferisce i pacchetti da un collegamento di ingresso di un router al collegamento di uscita appropriato del router
- Instradamento: determina il percorso seguito dai pacchetti dall'origine alla destinazione
	- Algoritmi di instradamento


#### Livello di rete: piano dei dati e piano di controllo
Piano dei dati:
- funzione locale, a livello di singolo router
- determina come i pacchetti in arrivo a una porta di ingresso del router sono inoltrati verso una porta di uscita del router

Piano di controllo
- logica di rete
- Determina come i pacchetti sono instradati tra i router lungo un percorso dall'host di origine all'host di destinazione
- Due approcci per il piano di controllo:
	- algoritmi di instradamento tradizionali: implementati nei router
	- software-defined networking (SDN): implementato nei server (remoti)


**Piano di controllo per router**
I singoli componenti dell'algoritmo di routing in ogni songolo router

![[Pasted image 20240426172850.png]]


**Software-Defined Networking (SDN)**
Un controllore remoto calcola e installa le tabelle di inoltro nei router

![[Pasted image 20240426172920.png]]

#### Modello di servizio del livello di rete
Esempi di servizi per un singolo datagramma
- consegna garantita
- consegna garantita con un ritardo inferiore a 40 ms

Esempi di servizi per un flusso di datagrammi:
- consegna in ordine
- minima ampiezza di banda garantita
- restrizioni sul lasso di tempo tra la trasmissione di due pacchetti consecutivi

#### Riflessioni sul servizio best effort
- La semplicità del meccanismo ha consentito l'ampia diffusione di internet
- Una dotazione sufficiente di larghezza di banda e protocolli in grado di adattarsi alla banda disponibile consentono alle prestazioni delle applicazioni in tempo reale di essere sufficientemente buone per la maggior parte del tempo 
- Servizi replicati e distribuiti a livello applicativo (datacenter, reti di distribuzione dei contenuti) che si collegano alle reti dei clienti e consentono di fornire servizi da più luoghi
- Il controllo della congestione dei servizi "elastici" aiuta 
Il successo del modello di servizio best effort è difficilmente contestabile


### Architettura del router
Visione ad alto livello di una generica architettura di router:

![[Pasted image 20240426173017.png]]

#### Funzioni delle porte di ingresso 

![[Pasted image 20240426173100.png]]

Commutazione decentralizzata:
- Usando i valori dei campi di intestazione, trova la porta di uscita usando la tabella di inoltro nella memoria della porta di ingresso
- Obietto: completare l'elaborazione nella porta di ingresso alla "velocità della linea"
- Accodamento presso la porta d'ingresso: se i datagrammi arrivano più velocemente di quanto la struttura di commutazione possa trasferirli
- Inoltro basato sulla destinazione: inoltro basato esclusivamente sull'indirizzo IP di destinazione
- Inoltro generalizzato: inoltro basato su più campi di intestazione


[[Struttura di commutazione]]
[[Accodamento sulle porte di ingresso]]


##### Gestione del Buffer
- Politica di scarto (drop):
	- tail drop: scarta il pacchetto in arrivo
	- priorità: scarta in base alla priorità

- Marcatura: quali pacchetti marcare per segnalare la congestione (ECN, RED)

![[Pasted image 20240426174618.png| 600]]


[[Schedulazione dei pacchetti]]
[[IP - Il Protocollo Internet]]
[[IPv6]]
[[NAT - Network Address Translation]]
[[Inoltro generalizzato - Match Plus Action]]
[[Middlebox]]
