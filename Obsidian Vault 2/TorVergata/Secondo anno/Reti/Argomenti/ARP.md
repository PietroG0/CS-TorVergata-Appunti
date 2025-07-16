Si consideri la rete descritta della figura sottostante:

![[Pasted image 20240609150701.png]]

1) Identificare le sottoreti IP
2) Supponendo che l'host H1 utilizzi il protocollo ARP per risolvere l'indirizzo IP di H3 nel suo indirizzo MAC, descrivere i messaggi scambiati e quali nodi li ricevono
3) L'host H1 può utilizzare ARP per risolvere l'indirizzo IP dell'host H5 nel suo indirizzo MAC?


SOL
1) Sono state identificate 3 sottoreti IP. Si disconnettono le interfacce da host e router, quindi le sottoreti corrispondono alle diverse isole delimitate dalle interfacce, ne segue che una sottorete IP contiene interfacce che possono comunicare direttamente *senza* l'intermediazione di un dispositivo di livello 3

![[Pasted image 20240609151052.png]]


2) H1 invia in broadcast un frame ethernet contenente una richiesta ARP. H1 è connesso ad un HUB, un dispositivo di livello fisico che ripete il segnale ricevuto da una interfaccia su tutte le altre interfacce. Pertanto, la richiesta ARP di H1 viene ricevuta da tutti i nodi collegati all'hub, cioè H2 e S1. S1 ritrasmette il frame broadcast su tutte le interfacce, eccetto quella di provenienza, registrando però che quella interfaccia conduce a H1. Il frame viene ricevuto da S2. S2 riceve il frame broadcast, e come S1, ritrasmette il frame su tutte le interfacce, eccetto quella di provenienza, registrando però che tramite quella interfaccia è raggiungibile H1. Il frame viene ricevuto da H3 e da R1. Quest'ultimo, essendo un commutatore di pacchetti di livello 3, non inoltra il pacchetto in broadcast. H2,H3,R1 hanno ricevuto dunque il frame broadcast contenete la richiesta ARP. Poichè l'indirizzo di destinazione è FF-FF-FF-FF-FF-FF, ciascun nodo de-incapsula la richiesta ARP e la passa all'implementazione di ARP. In ogni nodo, l'implementazione del protocollo ARP verificherà se l'indirizzo IP target è il proprio. Il nodo H3 realizzerà dunque di dover inviare una risposta ARP in un frame destinato all'indirizzo MAC di H1. 

3) No. L'host H1 non può utilizzare il protocollo ARP per risolvere l'indirizzo IP di H5 nel suo indirizzo MAC. Infatti, H5 appartiene a una sottorete IP differente, e pertanto, non riceve i frame inviati all'indirizzo broadcast di livello 2. H1 comunicherà infatti con H5 in modo indiretto, instradando il traffico tramite R1