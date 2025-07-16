Tecnologia "dominante" per le LAN cablate:
- Prima tecnologia LAN ampiamente utilizzata
- Semplice, economica
- Ha tenuto il passo sulla velocità: 10 Mbps - 400 Gbps
- Singolo chip, più velocità

#### Topologia Fisica
- Bus: popolare fino a metà degli anni 90
	- Tutti i nodi sono nello stesso dominio di collisione (possono collidere tra loro)

- Topologia a stella con hub: popolare fino agli anni 2000
	- I nodi sono interconnessi da un hub (dispositivo fisico che rigenera i segnali ricevuti su un interfaccia e li ritrasmette su tutte le altre interfacce), pertanto tutti i nodi sono nello stesso dominio di collisione

- Commutata (switched): oggi prevalente 
	- Switch di livello 2 attivo al centro
	- Ogni "spoke" esegue un protocollo Ethernet separato

##### Struttura del frame Ethernet
L'interfaccia trasmittente incapsula il datagramma IP in frame Ethernet 

![[Pasted image 20240524123348.png]]

Preambolo:
- Usato per "risvegliare" le schede di rete dei riceventi e sincronizzare i loro clock con quello del trasmittente 
- 7 byte di 10101010 seguiti da un byte di 10101011

Indirizzi: indirizzi sorgente e destinazione a 6 byte
- Se l'adattatore riceve un frame con un indirizzo di destinazione corrispondente o con un indirizzo di broadcast, passa i dati nel frame al protocollo di livello di rete
- Altrimenti, l'adattatore scarta il frame

Tipo: Indica un protocollo di livello superiore (2 byte)
- Principalmente IP, ma sono possibili anche altri
- Utilizzato per demultiplexare sul ricevitore 

CRC: Controllo di ridondanza ciclica presso il ricevitore
- Errore rilevato: il frame viene scartato

##### Ethernet: non affidabile, senza connessione
- Senza connessione: nessun handshake tra le NIC mittente e ricevente
- Non affidabile: la NIC ricevente non invia ACK e NAK alla NIC mittente
	- I dati nei frame scartati vengono recuperati solo se il mittente iniziale utilizza un trasferimento dati affidabile di livello superiore, altrimenti i dati scartati vanno persi

- Protocollo MAC di Ethernet: "Unslotted" CSMA/CD con binary backoff

