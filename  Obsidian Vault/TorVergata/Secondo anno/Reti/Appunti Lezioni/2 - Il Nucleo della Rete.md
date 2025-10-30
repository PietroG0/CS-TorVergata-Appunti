#Reti   

Una <span style="color:#00b050">maglia</span> (o mesh) di commutatori di pacchetti e collegamenti che interconnettono i sistemi periferici di internet.

Commutazione di pacchetti: i sistemi periferici suddividono i messaggi di livello applicativo in pacchetti, la rete inoltra i pacchetti da un router al successivo attraverso i collegamenti, lungo un percorso dalla sorgente alla destinazione.

**Due funzioni chiave del nucleo della rete**
Inoltro o "Switching"
- azione locale: sposta i pacchetti in arrivo al collegamento di ingresso del router al collegamento di uscita appropriato.

Instradamento (routing):
- azione globale: determina i percorsi presi dai pacchetti dalla sorgente alla destinazione
- algoritmi di instradamento

**Commutazione di pacchetto: store-and-forward**
- ritardo (delay) di trasmissione: servono L/R secondi per trasmettere pacchetti di L bit attraverso un collegamento a R bps
- store and forward: il router deve aver ricevuto l'intero pacchetto prima di poter cominciare a trasmettere sul collegamento in uscita
- 1 solo pacchetto con N collegamenti il ritardo sarà di pari velocità R:
	- d end-to-end = (N + P - 1)L/R

**Commutazione di pacchetto: accodamento**
L'accodamento si verifica quando il lavoro arriva più velocemente di quanto possa essere servito

**Un'alternativa alla commutazione di pacchetto: commutazione di circuito**
Le risorse richieste lungo un percorso (buffer e velocità di trasmissione sui collegamenti) per consentire la comunicazione tra sistemi periferici sono riservate per l'intera durata della sessione di comunicazione
- risorse dedicate: nessuna condivisione
- trasferimento dati a velocità costante e garantita
- i segmenti del circuito restano inattivi se non utilizzati (nessuna condivisione)
- usato comunemente nella rete telefonica tradizionale


**Commutazione di circuito: FDM e TDM**
Multiplexing a Divisione di Frequenza (FDM)
- spettro di frequenza di un collegamento suddiviso in bande (band)
- ogni circuito ha una propria banda, può trasmettere alla velocità massima di quella banda ristretta
Multiplexing a Divisione di Tempo (TDM)
- tempo suddiviso frame di durata fissa, ripartiti in un numero fisso di slot
- ciascun circuito riceve slot periodici, può trasmettere alla massima velocità della banda di frequenza solo nei propri slot temporali

**Struttura di Internet: una "rete di reti"**
I sistemi periferici accedono tramite Internet Service Provider (ISP) di accesso, che a loro volta, devono essere interconnessi. Questa complessa rete è guidata dall'economia e dalle politiche nazionali. Collegare direttamente ogni IPS di accesso non è scalabile, quindi si ricorre a Internet Exchange Points (IXP) dove gli ISP possono fare peering tra di loro, stabilendo connessioni dirette a costo zero. Le reti regionali emergono per collegare le reti di accesso agli ISP.
Al centro di Internet vi sono poche grandi reti ben connesse, come gli ISP commerciali "tier 1" con copertura nazionale e internazionale. Inoltre, reti di fornitori di contenuti come Google e Facebook gestiscono le proprie reti private per avvicinare i servizi agli utenti, aggirando talvolta gli ISP tier-1 e regionali

![[Pasted image 20240312151500.png]]


**Come si verificano ritardi e perdite?**
- I pacchetti si accodano nei buffer del router, aspettando il proprio turno per la trasmissione
	- la lunghezza della coda cresce quando il tasso di arrivo dei pacchetti sul collegamento eccede (temporaneamente) la capacità del collegamento di evaderli

- La perdita di pacchetti si verifica quando la memoria che contiene la coda dei pacchetti si riempie 

- Ritardo di elaborazione:
	- controllo errori sui bit
	- determinazione del canale di uscita
	- tipicamente < microsecondi

- Ritardo di accodamento
	- attesa di trasmissione
	- dipende dal livello di congestione del router

- Ritardo di trasmissione
	-   Dipende dalla lunghezza del pacchetto e dal tasso di trasmissione di collegamento. E' calcolato come rapporto tra la lunghezza del pacchetto e il tasso di trasmissione del collegamento L/R

- Ritardo di propagazione
	- d: lunghezza del collegamento fisico
	- v: velocità di propagazione 
	- d propagazione = d/v

[[Il Ritardo end-to-end]]




