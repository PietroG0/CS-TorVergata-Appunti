- <span style="color:#ff0000">Punto a punto</span>:
	- singolo mittente, singolo destinatario

- <span style="color:#ff0000">Flusso di byte affidabile in sequenza</span>:
	- nessun "confine ai messaggi"

- <span style="color:#ff0000">Full duplex data</span>:
	- i dati possono fluire in direzioni opposte allo stesso istante nella stessa connessione
	- MSS: dimensione massima del segmento; in realtà si riferisce ai dati applicativi nel segmento

- <span style="color:#ff0000">ACK cumulativi</span>

- <span style="color:#ff0000">Pipelining</span>:
	- il controllo di flusso e della congestione definiscono la dimensione della finestra

- <span style="color:#ff0000">Orientato alla connessione</span>:
	- l'handshaking inizializza lo stato del mittente e del destinatario prima di scambiare i dati
	- una connessione TCP non definisce un circuito end-to-end del tipo che caratterizza le reti a commutazione di circuito. Infatti, le connessioni TCP sono interamente implementate nei sistemi periferici, mentre i commutatori di pacchetto vedono solo i pacchetti di rete in transito

- <span style="color:#ff0000">Flusso controllato</span>:
	- il mittente non sovraccarica il destinatario

- <span style="color:#ff0000">Controllo della congestione</span>:
	- Il mittente riduce la velocità di invio in funzione della congestione della rete 

#### TCP: Buffer di invio e ricezione TCP

![[Pasted image 20240405150741.png]]


#### TCP: MSS

![[Pasted image 20240405150813.png|500]]

	La dimensione massima del segmento TCP predefinita per IPv4 è di 536. Per IPv6 è 1220. Se un host desidera impostare MSS su unvalore diverso da quello predefinito, la dimensione massima del segmento viene specificata come opzione TCP, inizialmente nel pacchetto TCP SYN durante l'handshake TCP.

- MSS + lunghezza(Ht) + lunghezza(Hn) <= MTU
- Valori tipici:
	- lunghezza(Ht) = 20B
	- lunghezza(Hn) = 20B
	- MTU ethernet = 1500 -> MSS = 1460

- Un host può determinare il MSS guardando la MTU del collegamento locale; ma ciò non offre garanzie circa altri collegamenti intermedi
- Può essere negoziato durante la connessione con l'opzione MSS
- Path MTU Discovery: permette di scoprire il valore più piccolo della MTU lungo il percorso da mittente a destinatario
- Se un pacchetto IP eccede la MTU su un collegamento in uscita, il router dovrà frammentarlo (in IPv4) oppure scartarlo (in IPv6)


#### Struttura dei segmenti TCP

![[Pasted image 20240405151314.png]]


#### Numeri di sequenza e ACK di TCP

Numeri di sequenza:
	"numero" del primo byte nel segmento nel flusso di byte

ACK: 
- Numero di sequenza del prossimo byte atteso dall'altro lato
- ACK comulativo
- RFC 2018: Acknowledgment Selettivo
	

![[Pasted image 20240405151503.png|500]]


#### Numeri di sequenza e ACK di TCP

![[Pasted image 20240405151548.png]]


#### TCP: tempo di andata e ritorno (round trip time) timeout

Come impostare il valore del timeout di TCP?
- Più grande di RTT (tempo trascorso da quando si invia un segmento a quando se ne riceve l'acknowledgment), ma RT non è noto, infatti varia
- Troppo piccolo: timeout prematuro, ritrasmissioni non necessarie
- Troppo grande: reazione lenta alla perdita di segmenti

Come stimare RTT?
- SampleRTT: tempo misurato dalla trasmissione del segmento fino alla ricezione di ACK
- SampleRTT varia, quindi occorre una stima più "livellata" di RTT


#### Mittente TCP
Evento: Ricevuti dati dall'applicazione
- Crea un segmento con il numero di sequenza
- Il numero di sequenza è il numero del primo byte del segmento nel flusso di byte
- Avvia il timer, se non già in funzione
	- pensare al timer come se fosse associato al più vecchio segmento non ancora riscontrato
	- intervallo di scadenza: TimeOutInterval

Evento: timeout
- Ritrasmette il segmento che ha causato il timeout (cioè il segmento in attesa di ACK con il più piccolo numero di sequenza)
- Riavvia il timer

Evento: ACK ricevuto
- Se riscontra segmenti precedentemente non riscontrati
	- aggiorna ciò che si sa essere stato riscontrato
	- avvia il timer se ci sono altri segmenti ancora non riscontrati


#### Ricevente TCP: Generazione degli ACK

![[Pasted image 20240408110355.png]]


#### Ritrasmissione rapida

![[Pasted image 20240408110437.png]]


#### TCP: controllo di flusso
Cosa succede se il livello di rete fornisce i dati più velocemente di quanto il livello applicativo rimuova i dati dai buffer delle socket?

![[Pasted image 20240408110536.png]]

Controllo di flusso:
- Il destinatario controlla il mittente, cosicchè il mittente non ecceda il buffer del destinatario, inviando troppo e troppo velocemente

- Il mittente comunica lo spazio disponibile nel buffer nel campo rwnd (receive window, finestra di ricezione) nell'intestazione TCP
	- RcvBuffer, dimensione impostata attraverwso opzioni della socket
	- Molti sistemi operativi regolano automaticamente RcvBuffer

- Il mittente limita i dati non riscontrati a rwnd
	- Garantisce che il buffer di ricezione non vada in overflow


#### Gestione della connessione TCP
Prima di scambiare i dati, il mittente e il destinatario si "stringono la mano"
- Accettano di stabilire una connessione
- Concordare i parametri di connessione


##### Handshake a 2 vie
- Ritardi variabili
- Messaggi ritrasmessi a causa della perdita di messaggi
- Riordino dei messaggi
- Impossibilità di "vedere" l'altro lato

![[Pasted image 20240408111213.png|400]]  ![[Pasted image 20240408111246.png]] 


##### TCP 3-way handshake
- Se un host riceve una richiesta di connessione per una porta su cui nessun socket è in ascolto, l'host invia al mittente un segmento con bit RST uguale a 1
- La ricezione di un segmento TCP RST informa un potenziale aggressore che la porta incriminata non è usata da alcun processo e che il segmento destinato a quella porta non è stato bloccato da un firewall lungo il percorso


##### Attacco SYN FLOOD
- L'aggressore invia un segmento TCP SYN ad un server con un indirizzo IP fasullo
- Il server risponde alloca e inizialissa le variabili e i buffer della connessione e risponde inviando un segmento TCP SYNACK alla porta e all'indirizzo IP (fasullo) di origine e transita nello stato SYN_RCVD
- La rete tenta di consegnare il segmento TCP SYNACK all'indirizzo IP fasullo, possibilmente raggiungendo un altro host che non c'entra nulla e che non risponderà
- Il server, nello stato SYN_RCVD, non ricevendo un ACK, eventualmente (dopo un minuto o più) rilascerà tutte le risorse associate a quella connessione mezza aperta
- Nel frattempo, però, l'aggressore è riuscito a consumare delle risorse del server. Inviando numerosi segmenti SYN ad un server obiettivo, un aggressore può montare un attacco DoS (spesso sottoforma di attacco DDoS)

##### Attacco SYN FLOOD: contromisure "SYN cookie"
- Alla ricezione del segmento SYN iniziale, il server:
	- Calcola l'hash degli indirizzi IP e numeri di porta di origine e di destinazione e di una chiave segreta, producendo un cookie
	- Usa il cookie con numero di sequenza iniziale da inserire dentro al segmento SYNACK
	- Non alloca alcuna risorsa nè memoriza il cookie

- Se il segmento SYN ricevuto in precedenza era legittimo, il client alla ricezione del segmento SYNACK risponde con un segmento ACK, che usa come numero di Acknowledgment cookie +1
- Alla ricezione di un segmento ACK, il server può capire che è legato al SYN precedente perchè gli basta calcolare Acknowledgment -1 per ottenere il cookie. Quindi, riesegue il calcolo del cookie per vedere se ottiene lo stesso valore. Si noti che l'inclusione di una chiave segreta impedisce a un aggressore di creare un cookie valido.


##### Chiusura di una connessione TCP
- Client e server chiudono ciascuno il proprio lato della connessione
	- inviano il segmento TCP con il bit FIN = 1

- Rispondere al FIN ricevuto con un ACK
	- alla ricezione del FIN, l'ACK può essere combinato con il proprio FIN

- E' possibile gestire scambi FIN simultanei


![[Pasted image 20240408112305.png]]

