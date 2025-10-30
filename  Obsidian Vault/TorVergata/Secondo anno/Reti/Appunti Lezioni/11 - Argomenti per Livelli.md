
#### Ordine dei livelli
1) Fisico
2) Collegamento
3) Rete
4) Trasporto
5) Applicazione


#### Livello di Applicazione
Le applicazioni di rete per comunicare devono utilizzare protocolli che definiscono: Il formato dei messaggi e l'ordine in cui essi vengono scambiati, e la definizione delle operazioni da svolgere nella fase di trasmissione e ricezione dei messaggi
- Socket
- Peer-to-Peer
- Servizio TCP
- Servizio UDP
- DNS
- HTTP
- Connessioni persistenti/ non persistenti
- HTTP protocollo senza stato
- Cookie
- Web Cache

#### Livello di Trasporto 
Il livello di Trasporto ha il compito di instaurare un collegamento logico tra le applicazioni residenti su host remoti
- TCP -> Controllo di flusso, RTT
- UDP -> Best Effort, perchè esiste?
- Demultiplexing -> Senza connessione, orientato alla connessione

#### Livello di Rete
Livello responsabile del corretto indirizzamento, importante per instaurare la connessione all'interno di una rete. Permette di collegare in modo sicuro due partecipanti anche se la comunicazione avviene attraverso reti diverse.
- Piano dei dati
- Piano di controllo
- Schedulazione dei pacchetti
- Funzioni chiave -> Inoltro e Instradamento
- IP - Il Protocollo Internet
- Indirizzamento IP
- Sottoreti
- CIDR
- Classful Addressing
- DHCP 

#### Livello di Rete - Piano di controllo
- Algoritmi di Instradamento -> classificazione
- Instradamento "link - state"
- Algoritmo Distance Vector
- OSPF -> Intra-Domain
- BGP -> Inter-Domain
- Piano di controllo per router
- SDN
- OpenFlow
- ICMP
- SDN Controller

#### Livello di Collegamento
Il livello di collegamento ha la responsabilità di trasferire i datagrammi da un nodo a quello fisicamente adiacente lungo un collegamento
- Servizi -> Half/Full - Duplex, Controllo di flusso, Rilevazione e correzione errori, Consegna affidabile tra nodi adiacenti, Accesso al collegamento, Farming
- Collegamenti -> Punto-a-punto, Broadcast
- Protocollo di accesso multiplo
- Protocollo ad accesso multiplo, Tassonomia -> 3 Ampie classi
- TDMA
- FDMA
- Protocolli ad accesso casuale
- CSMA
- CSMA/CD


