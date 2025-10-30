#Sicurezza 

#### UDP: User Datagram Protocol
UDP è un protocollo di trasporto **connectionless** e **unreliable**: un peer invia semplicemente datagrammi a un indirizzo IP e porta noti, senza handshake preliminare. Grazie ai numeri di porta (16 bit) è possibile la demultiplexing dei flussi, e un checksum minimal rileva alcuni errori di trasmissione, ma non previene nè ritardi nè riordinamenti


#### TCP: Transmission Control Protocol
TCP fornisce **connessioni virtuali**, tramissione affidabile, in order, con meccanismi di **flow control** e **congestion control** per evitare il collasso della rete

**Segmento TCP e header**
- Il segmento include campi fondamentali: porte sorgente/destinazione, Sequence Number, Acknowledgement Number, Advertised Window, Flags (SYN, ACK, FIN), Checksum, Urgent Pointer e lunghezza header

![[Pasted image 20250607184746.png#center | 600]]


**Three-Way Handshake**
- **SYN**: Il client invia SYN con ISN (Initial Sequence Number) scelto casualmente
- **SYN/ACK**: Il server risponde con SYN/ACK, indicando il proprio ISN e riconoscendo SeqC+1
- **ACK**: Il client chiude il handshake con ACK a SeqS+1, stabilendo lo stato su entrambi i nodi. L'uso di ISN casuali previene ambiguità e attaacchi di "session hijacking"

![[Pasted image 20250607185033.png#center | 500]]


**Controllo del flusso e finestra di trasmissione (Sliding Window)**
TCP utilizza il concetto di "finestra" per gestire il numero di byte che possono essere inviati senza ricevere un ACK. La dimensione della finestra (detta anche "cwnd" per congestion window) influenza direttamente il throughput: il tasso di trasmissione è approssimativamente dato dal rapporto tra la dimensione della finestra e il Round Trip Time (RTT). In questo modo, il protocollo si adatta alle capacità dei router e dei buffer del ricevitore, evitando saturazioni e perdite


**Controllo della congestione**
Uno degli obiettivi principali di TCP è evitare il fenomeno del "congestion collapse", una situazione in cui la rete viene sovraccaricata da traffico e si generano ritardi e perdite massicce di pacchetti
- *Slow Start*: All'avvio della connessione, TCP inizia con una finestra molto piccola e la aumenta in maniera esponenziale ad ogni RTT finchè non raggiunge una soglia detta "ssthresh". Questa fase permette di sondare la capacità della rete senza inondarla fin da subito
- *Congestion Avoidance (AIMD)*: Superata la soglia, la crescita della finestra diventa lineare, in modo da evitare incrementi troppo brushi che potrebbero portare a congestione. Con l'algoritmo AIMD, ad ogni RTT ben riuscito la finestra si incrementa gradualmente e, al verificarsi di una perdita, la finestra viene ridotta drasticamente per alleviare il sovraccarico
- *Ritrasmissione e gestione degli errori*: Dato che ogni byte inviato deve essere riconosciuto dal ricevitore, TCP mantiene copie dei pacchetti inviati finchè non vengono confermati. Se un ACK non viene ricevuto entro un tempo calcolato (RTO - Retransmission Timeout), il pacchetto viene ritrasmesso. Questo meccanismo garantisce che, anche in presenza di errori o perdite, il flusso di dati sia corretto e completo


**Varianti di TCP: Tahoe vs Reno**
- *Tahoe* rappresenta la versione base, in cui in caso di perdita di pacchetto il meccanismo prevede la riduzione drastica della finestra (impostandola a 1) e quindi il riavvio della procedura di slow start
- *Reno*, invece, introduce il meccanismo di fast retransmit e fast recovery. Quando il ricevitore invia tre ACK duplicati, il protocollo interpreta che un pacchetto è andato perso e lo ritrasmette immediatamente, riducendo la finestra solo a metà invece di riportarla a 1. Questo consente di riprendere la trasmissione più rapidamente, evitando l'impatto negativo di un timeout completo

**Esercizio**
Dati iniziali
$rwnd = 250$kB
$RTT = 200ms$ 
Bottleneck bandwidth = $8 Mbit/s$ 
Buffer del collo di bottiglia = $50 \cdot MSS$
$MSS = 1000$ byte

*Tetto imposto dal receiver*
Il ricevente, con la finestra rwnd, limita quanti byte il mittente può tenere "in volo"
Tasso massimo teorico dal punto di vista del ricevente
$$
\frac{rwnd}{RTT} = \frac{250kB}{0,2s} = 1,25 Mbit/s = 10Mbit/s
$$
Tuttavia la rete ha un collo di bottiglia a 8 Mbit/s, quindi *il tasso effettivo è 8 Mbit/s*


*Calcolo del Bandwidth-Delay Product (BDP)*
Il BDP indica quanti bit servono per "riempire" la pipe end-to-end, ossia sfruttare appieno la banda per tutta la durata dell'RTT
$$
BDP = BW \cdot RTT = 8Mbit/s \cdot 0,2s = 1,6Mbit
$$
Convertito in MSS da 1000B (8000 bit):
$$
1,6Mbit \div 8000bit = 200 pacchetti
$$
Quindi **l'ideal cwnd** per non sprecare banda è 200 MSS


*Verifica di potenziali perdite*
Il buffer al collo di bottiglia contiene 50 MSS, cioè spazio per 50 pacchetti in coda
- Se il mittente invia 200 pacchetti (cwnd) e questi arrivano più velocemente di quanto la pipe li scarichi, al massimo 50 si accumulano in coda
- Totale massimo in rete = cwnd + buffer = 200 + 50 = 250 pacchetti
- Il ricevente ha rwnd = 250kB = 250 MSS, quindi non verrà superato lo spazio dichiarato


*Ritardo extra introdotto dalla coda*
Se il buffer di rete si riempie completamente (50 pacchetti), ciascuno da 1000 byte = 8000bit, la coda introduce un ritardo di:
$$
\frac{\text{bits in coda}}{\text{banda}} = \frac{50 \cdot 8000 bit}{8 \cdot 10^{6} bit/s} = 0,05s = 50ms
$$
