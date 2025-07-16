#### Collegamenti e protocolli di accesso multiplo
Due tipi di collegamenti:
- Punto a punto: un trasmittente a un'estremità del collegamento e un unico ricevente all'altra estremità
	- Collegamento punto a punto tra host e switch Ethernet
	- Protocollo PPP per accesso dia-up

- Broadcast (cavo o mezzo condiviso): più nodi, ciascun frame viene ricevuto da tutti i nodi

##### Protocolli di accesso multiplo
- Singolo canale broadcast condiviso
- Due o più trasmissioni simultanee dai nodi: interferenza
	- Collisione se un nodo riceve due o più segnali nello stesso istante

Protocollo di accesso multiplo
- Algoritmo distribuito che determina come i nodi condividono il canale, determina quando i nodi possono trasmettere
- La comunicazione sulla condivisione del canale deve utilizzare il canale stesso
	- Nessun canale fuori banda per il coordinamento

##### Un protocollo di accesso multiplo ideale
Dato: un canale ad accesso multiplo con velocità di R bps
Desiderata:
1) Quando un solo nodo vuole trasmettere, può inviare a velocità R
2) Quando M nodi vogliono trasmettere, ciascun può inviare a una velocità media R/M
3) Totalmente decentralizzato:
	- Nessun nodo speciale che coordina le trasmissioni
	- Nessuna sincronizzazione degli orologi, slot temporali, ecc.

1) Semplice.

##### Protocolli di accesso multiplo: tassonomia
Tre ampie classi:
- A suddivisione del canale (channel partitioning)
	- Divide il canale in "pezzi" più piccoli (slot temporali, bande di frequenza, codici)
	- Assegna un pezzo a un nodo per uso esclusivo

- Ad accesso casuale (random access)
	- Canale non diviso, permette le collisioni
	- Recupera dalle collisioni (attraverso ritrasmissioni)

##### Protocolli a suddivisione del canale: TDMA
TDMA: Time Division Multiple Access (accesso multiplo a divisione di tempo)
- Accesso al canale in "intervalli di tempo"
- Ciascun intervallo è ulteriormente suddiviso in N slot temporali, ciascun assegnato a uno degli N nodi
- La durata di uno slot temporale è in genere tale da consentire la trasmissione di un pacchetto a livello di collegamento
- Gli slot inutilizzati rimangono inutilizzato (idle)

![[Pasted image 20240523145404.png]]

- Un nodo che ha dati da trasmettere deve attendere il proprio turno (cioè lo slot assegnatoli)
- Nel proprio turno, un nodo trasmette a R bps, ma potendo farlo solo in 1/N della durata dell'intervallo temporale, la sua velocità media è R/N... a prescindere dal fatto che ci siano altri nodi che vogliono trasmettere sul canale

##### Protocolli a suddivisione del canale: FDMA
FDMA: Frequency Division Multiple Access (accesso multiplo a divisione di frequenza)
- Lo spettro del canale diviso in bande di frequenza
- A ciascun nodo viene assegnata una banda di frequenze fisse
- Il tempo di trasmissione non utilizzato nelle bande di frequenza resta inutilizzato

![[Pasted image 20240523150242.png]]

- Un nodo può trasmettere nella propria banda di frequenze appena ha dati da inviare, senza dover attendere turni
- Trasmettendo alla velocità massima consentita della sua banda di frequenze ridotta, la velocità è R/N a prescindere che altri vogliano trasmettere

##### Protocolli ad accesso casuale
Quando un nodo ha un pacchetto da inviare
- Trasmette alla massima velocità consentita dal canale, cioè R bps
- Nessun coordinamento a priori tra i nodi

- Due o più nodi stanno trasmettendo nello stesso momento: "collisione"
- Un protocollo ad access casuale specifica:
	- Come rilevare le collisioni 
	- Come recuperare dalle collisioni

#### Slotted ALOHA

![[Pasted image 20240523150540.png| 500]]

Assunzioni: 
- Tutti i frame hanno la stessa dimensione
- Tempo suddiviso in slot temporali uguali (equivalenti al tempo per trasmettere in frame)
- I nodi cominciano la trasmissione soltanto all'inizio degli slot
- I nodi sono sincronizzati
- Se 2 o più nodi trasmessono nello stesso nodo, tutti i nodi rilevano la collisione prima del termine dello slot

Operazioni:
- Quando un nodo ha un nuovo frame da spedire, lo trasmette all'inizio dello slot successivo
- Se non si verifica una collisione:
	- Il nodo può inviare un nuovo frame nello slot successivo

- Se si verifica una collisione: 
	- Il nodo ritrasmette il frame nello slot successivo con probabilità $p$ finchè non ha successo

![[Pasted image 20240523150835.png]]

Pro:
- Un singolo nodo attivo può trasmettere continuamente alla massima velocità del canale
- Altamente decentralizzato: solo gli slot dei nodi devono essere sincronizzati
- Semplice

Contro:
- Collisioni, spreco di slot
- Slot inutilizzati (a causa della politica di trasmissione probabilistica)
- I nodi potrebbero essere in grado di rilevare la collisione in meno del tempo necessario per trasmettere il pacchetto
- Sincronizzazione degli orologi


##### Slotted ALOHA: efficienza
Efficienza: frazione a lungo termine di slot riusciti (molti nodi, tutti con molti frame da inviare)
- Si supponga: N nodi con molti frame da inviare, ciascuno trasmette nello slot con probabilità $p$ 
	- Probabilità che un dato nodo ha successo in uno slot = $p(1-p)^N-1$ (-1 in N)
	- Probabilità che un nodo qualunque abbia successo = $Np(1-p)^N-1$ (-1 in N)
	- Efficienza massima: trovare $p*$ che massimizza $Np(1-p)^N-1$ 
	- Per altri nodi, calcolare il limite di $Np*(1-p*)^N-1$ per N che tende all'infinito, si ottiene:
		- Efficienza massima = 1/e = .37

##### ALOHA puro
- Unslotted ALOHA: più semplice, nessuna sincronizzazione
	- Appena arriva un nuovo frame: lo trasmette immediatamente e integralmente
	- Se la trasmissione va in collisione: ritrasmette il frame immediatamente (dopo averne completato la trasmissione) con probabilità $p$, altrimenti attende il tempo di trasmissione di un frame e ripete il processo di attesa casuale, finchè non ha successo

- La probabilità di collisione aumenta in assenza di sincronizzazione:
	- Il frame inviato a $t_0$ collide con altri frame inviati in $[t_0-1, t_0+1]$

  ![[Pasted image 20240523151933.png]]
- Efficienza massima del protocollo ALOHA puto: 18%


#### Accesso multiplo con rilevamento della portante (carrier sense multiple accesso, CSMA)
CSMA: ascolta prima di trasmettere:
- Se percepisce il canale inattivo: trasmette l'intero frame
- Se percepisce il canale occupato: differisce la trasmissione

CSMA/CD: CSMA con rilevamento della collisione (collision detection)
- Collisioni rilevate in breve tempo
- Le trasmissioni in collisione vengono interrotte, riducendo gli sprechi di canale
- Rilevamento delle collisioni facile con il cavo, difficile con il wireless


##### CSMA: Collisioni
- Le collisioni possono ancora verificarsi con il rilevamento della portante:
	- Il ritardo di propagazione significa che due nodi potrebbero non sentire la trasmissione appena avviata dall'altro

- Collisione: spreco dell'intero tempo di trasmissione dei pacchetti
	- La distanza e il ritardo di propagazione giocano un ruolo importante nel determinare la probabilità di collisione

##### CSMA/CD
- CSMA/CD riduce le quantità di tempo sprecato nelle collisioni
	- Trasmissione interrotta su rilevamento di collisione

##### Algoritmo CSMA/CD di Ethernet
1) Ethernet riceve un datagramma dal livello di rete, crea un frame
2) Se Ethernet percepisce il canale:
	- Inutilizzato: avvia la trasmissione del frame
	- Occupato: aspetta finchè il canale è libero, poi trasmette
3) Se l'intero frame viene trasmesso senza collisioni - Fatto!
4) Se durante l'invio viene rilevata un'altra trasmissione: interrompere, inviare il segnale di disturbo (jam)
5) Dopo aver interrotto, entra nella binary exponential backoff:
	- Dopo la m-esima collisione, scegli K casualmente tra ${0,1,2, ..., 2^m-1}$ 
	- Più collisioni: maggiore intervallo di backoff (ma m viene limitato a 10)

#### Protocolli a rotazione
Protocolli a suddivisione del canale:
- Condividere il canale in modo efficiente ed equo con un carico elevato
- Inefficiente a basso carico: ritardo nell'accesso al canale, larghezza di banda 1/N allocata anche se solo 1 nodo attivo

Protocolli ad accesso casuale 
- Efficiente a basso carico: un singolo nodo può causare il canale completamente
- Alto carico: overhead di collisione

Protocolli a rotazione
Polling:
- Il controllore centralizzato "invita" gli altri nodi a trasmettere a loro volta (fino a un massimo di frame)
	- Il controllore determina che il client ha finito osservando la mancanza di segnale

- Problemi:
	- Overhead del polling 
	- Ritardo di polling: Il tempo impiegato per notificare a un nodo il permesso di trasmettere --> anche in presenza di un solo nodo attivo, il controllore deve contattare periodicamente tutti gli altri nodi, determinano un throughput effettivo minore di R
	- Singolo punto di rottura (master)

Token Passing:
- Messaggio di controllo deotto token (gettone) passato esplicitamente da un nodo al successivo, sequenzialmente
	- Trasmette mentre possiede il token

- Problemi:
	- Overhead associato al token
	- Latenza
	- Singolo punto di rottura

#### Rete di accesso via cavo: FDM, TDM, allocazione centralizzata e accesso casuale!

![[Pasted image 20240523162511.png]]

- Molteplici canali FDM downstram (broadcast): fino a 1.6 Gbps/canale
	- Un solo CMTS trasmette nei canali --> nessun problema di accesso multiplo
- Molteplici canali upstream (fino a 1 Gpbs/canale)
	- Accesso multiplo: tutti gli utenti si contendono (accesso casuale) determinati slot temporali del canale upstream; agli altri vengono assegnati TDM

#### Rete di accesso via cavo

![[Pasted image 20240523162651.png]]

DOCSIS: specifiche di interfaccia del servizio dati via cavo
- FDM su canali di frequenze upstream e downstream
- TDM upstream: alcuni slot assegnati, alcuni sono contesi
	- Frame MAP in downstream: assegna i minislot in upstream
	- Richieste di frame in upstream (e dati) trasmessi con accesso casuale (binary backoff) in slot selezionati

#### Riassunto dei protocolli di accesso multiplo
- Suddivisione del canale, per tempo, frequenza o codice 
	- Time Division, Frequency Division

- Accesso casuale (dinamico),
	- ALOHA, S-ALOHA, CSMA, CSMA/CD
	- Rilevamento della portante: facile in alcune tecnologie (cablate), difficile in altre (wireless)
	- CSMA/CD usato in Ethernet
	- CSMA/CA usato in 802.11

- A rotazione
	- Polling da un sito centrale, token passing
	- Bluethoot, FDDI, token ring


