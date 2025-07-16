#Sicurezza 

#### Ruolo degli ISP e infrastruttura di rete
Un aspetto cruciale per la nostra esperienza quotidiana su Internet è il ruolo degli ISP (Internet Service Provider). Un ISP, definito anche come fornitore di accesso (IAP), è la società che collega privati, aziende e reti locali al più ampio mondo di Internet. Questi provider impiegano tecnologie differenti per trasportare pacchetti IP. 

- Un concetto importante qui è quello del **Point of Presence (PoP)**: questi sono centri dati che ospitano server, router, switch e altri dispositivi di rete, fungendo da nodi attraverso cui il traffico degli utenti viene raccolto e instradato. Dal PoP, la connessione si rafforza ulteriormente grazie a linee ad alta capacità che portano il traffico verso i più grandi snodi della rete, i Network Access Point (NAP)

![[Pasted image 20250608172201.png#center | 500]]


#### Il paradigma Client-Server
Il modello client-server è alla base della maggior parte delle interazioni su Internet. In questo paradigma il client, che può essere un browser, un'applicazione mobile o un qualsiasi altro dispositivo, è colui che inizia la comunicazione facendo una richiesta, mentre il server è il "ricevitore" che attende costantemente queste richieste per fornire il servizio richiesto

- **Aspetti operativi**: Il server dispone di una "porta" ben definita, a cui i client si connettono per accedere ai servizi
- **Considerazioni sulla sicurezza**: Durante questa interazione è fondamentale implementare adeguati meccanismo di autenticazione (per verificare l'identità del client) e di autorizzazione (per garantire che il client abbia il permesso di accedere al servizio), al fine di preservare l'integrità e la sicurezza dei dati


#### DNS: Il direttore d'orchestra del web
Il Domain Name System (DNS) è il protocollo che traduce i nomi di dominio, facilmente memorizzabili dagli esseri umani, negli indirizzi IP che i computer usano per comunicare. 

**Il percorso seguito da una richiesta DNS**

![[Pasted image 20250608172711.png#center | 600]]


#### HTTP
Il protocollo HTTP (HyperText Transfer Protocol) è la base su cui si fonda lo scambio di dati sul web. 

- **HTTP/1.0**: In modalità non persistente, ogni oggetto di una pagina web richiede l'apertura di una nuova connessione TCP. Questo porta ad un elevato overhead, specialmente in pagine ricche di contenuti
- **HTTP/1.1**: Introduce la connessione persistente, in cui più richieste e risposte possono viaggiare sulla stessa connessione TCP. L'uso della funzionalità Keep-Alive (con timeout ad esempio di 30 secondi) riduce significativamente l'overhead, mentre il pipelining consente di inviare diverse richieste in sequenza senza attendere le risposte. Questi miglioramenti hanno rivoluzionato la velocità e l'efficienza del caricamento delle pagine web


#### Protocolli per contenuti multimediali
- **RTP (Real-Time Transmission Protocol)**: Progettato per il trasporto in tempo reale di dati multimediali, come audio e video. RTP non solo trasporta i dati, ma si occupa anche di informazioni aggiuntive quali numerazione dei pacchetti e timestamp, utili per ricomporre in modo corretto il flusso multimediale anche in presenza di ritardi o perdite
- **RTCP (Real-Time Control Protocol)**: Accompagna RTP fornendo informazioni di controllo, ad esempio statistiche sulla qualità della trasmissione, permettendo così di apportare eventuali aggiustamenti in tempo reale
- **SDP (Session Description Protocol)**: Utilizzato per descrivere le sessioni multimediali, SDP permette ai sistemi di negoziare i parametri della sessione, come il formato dei dati o le porte da utilizzare, prima che il vero scambio multimediale inizi
- **SIP (Session Initiation Protocol)**: E' il protocollo adottato per l'inizializzazione, la modifica e la terminazione delle sessioni multimediali, come quelle usate nelle telefonate VoIP o nelle videoconferenze. SIP funziona in modalità testuale, similmente a HTTP, e gestisce le fasi di invito (INVITE), riconoscimento (ACK), e terminazione (BYE), e include ulteriori metodi come REGISTER e OPTIONS per la gestione delle informazioni di contatto e la verifica delle funzionalità dei server

