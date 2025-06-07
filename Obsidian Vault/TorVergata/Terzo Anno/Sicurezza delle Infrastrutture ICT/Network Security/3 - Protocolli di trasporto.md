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


**Flow Control**
Nel TCP il *flow control* è il meccanismo che permette al *ricevente* di regolare la quantità di dati che il *mittente* può inviare, in modo da non saturare i propri buffer. 

1. *Finestra di ricezione (rwnd)*
	- Nel campo *window* dell'header TCP il ricevente indica quanti byte è ancora in grado di ricevere senza perdere dati
	- Questa quantità, chiamata *rwnd*, è calcolata in base allo spazio libero nei buffer di ricezione

2. *Limite di throughput*
	- Il mittente può avere al massimo rwnd byte "in volo" (non ancora acknowledged)
	- Il throughput teorico è quindi $rate_{max} \approx \frac{rwnd}{RTT}$ 
	- Es. Se rwnd = 250kB e RTT = 200 ms, il mittente non può superare 1,25 MB/s

3. *Sliding window*
	- Il mittente mantiene un buffer di tutti i datagrammi inviati ma non ancora acked, perchè potrebbero dover essere ritrasmessi
	- La "finestra scorre" (sliding): quando arriva un ACK per i primi $N$ byte, la finestra si sposta permettendo di inviare altri $N$ byte

4. *Interazione con il congestion control*
	- In TCP l'effettiva finestra di invio è $wnd = min(cwnd, rwnd)$, dove $cwnd$ è la finestra di congestione (gestita dal mittente per non esaurire la rete) e $rwnd$ quella di flow control
	- Finchè $rwnd < cwnd$, il mittente è limitato dal ricevente; se $cwnd < rwnd$, è la rete a porre il vincolo

5. *Adattamento dinamico*
	- Se il ricevente vede che i suoi buffer si stanno riempiendo più rapidamente del previsto, riduce $rwnd$ negli ACK successivi: questo "dichiara" al mittente di rallentare
	- Quando il ricevente libera spazio (l'applicazione legge i dati), riporta rwnd a valori maggiori, autorizzando l'invio di nuovi segmenti


**Congestion Control**
- *Congestione*: avviene quando il carico supera la capacità del "collo di bottiglia" (banda minima lungo il percorso)
- *Congestion window (cwnd)*: limite massimo di pacchetti "in volo". La finestra effettiva + $min(cwnd, rwnd)$
- *BDP (Bandwidth-Delay Product)*: $BDP = BW \cdot RTT$ stabilisce il valore di $cwnd$ ottimale per pieno utilizzo della banda


**Algoritmi di controllo**
- *Slow Start*: all'inizio della connessione $cwnd = 1$ MSS; con ogni ACK $cwnd++$, raddoppiando ogni RTT fino a raggiungere ssthresh o a incontrare una perdita
- *Congestion Avoidance (AIMD)*: quando $cwnd \geq ssthresh$, si aumenta $cwnd$ di $1/cwnd$ per ogni ACK, ottenendo crescita lineare
- *Reazione alle perdite*
	- *Timeout (RTO)*: reset di $cwnd = 1$, $ssthresh = cwnd_loss/2$ 
	- *Fast Retransmit/Fast Recovery (TCP Reno)*: alla ricezione di 3 ACK duplicati, si ritrasmette immediatamente il pacchetto perso e si riduce $cwnd$ a $ssthresh = \frac{cwnd}{2}$ senza tornare a Slow Start completo


**Esercizio**
Dati iniziali
$rwnd = 250$kB
$RTT = 200ms$ 
Bottleneck bandwidth = $8 Mbit/s$ 
Buffer del collo di bottiglia = $50 \cdot MSS$
$MSS = 1000$ byte

*Tetto imposto dal receiver*
Il ricevente, con la finestra rwnd, limita quanti byte il mittente può tenere "in volo"
Tasso massim teorico dal punto di vista del ricevente
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
