#Reti 

[[Paradigma client-server]]

**Processi comunicanti**

Processo: programma in esecuzione su di un host
- all'interno dello stesso host, due processi comunicano usando un approccio interprocesso
- processi su host differenti comunicano attraverso lo scambio di messaggi
- processo client: processo che dà inizio alla comunicazione
- processo server: processo che attende di essere contattato


**Socket**

- Un proesso invia/riceve messaggi a/da la sua socket
- Una socket è analoga a una porta
	- il processo mittente fa uscire il messaggio dalla propria "porta" 
	- il processo mittente presuppone l'esistenza di un'infrastuttura esterna che trasporterà il messaggio attraverso la rete fino alla "porta" del processo di destinazione


**Indirizzamento**

- Per ricevere messaggi, un processo deve avere un identificatore
- Un host ha un indirizzo IP univoco a 32 Bit
- D: è sufficiente conoscere l'indirizzo IP dell'host su cui è in esecuzione un processo per identificare il processo stesso?
- R: no, sullo stesso host possono essere in esecuzione molti processi
- L'identificatore comprende sia l'indirizzo IP che i numeri di porta associati al processo in esecuzione su un host
- Numeri di porta assegnati (dallo IANA) a applicazioni più note:
	- HTTP Server: 80
	- mail server: 25


**Un protocollo a livello applicazione definisce**
- tipi di messaggi scambiati
	- richiesta, risposta

- sintassi dei messaggi
	- quali sono i campi del messaggio e come sono descritti

- semantica dei messaggi
	- significato delle informazioni nei campi

- regole per determinare quando e come un processo invia e risponde ai messaggi

- protocolli di pubblico dominio:
	- definiti nelle RFC, ognuno ha accesso alla definizione
	- consentono l'interoperabilità
	- es. HTTP, SMTP

- protocolli proprietari
	- es. Skype, Zoom


**Quale servizio di trasporto richiede un'applicazione?**

Perdita di dati
- alcune applicazioni richiedono un trasferimento 100% affidabile (es. trasferimento file, transazioni web)
- altre applicazioni possono tollerare qualche perdita (es. audio)

Sensibilità al fattore tempo
- alcune applicazioni richiedono che i ritardi siano bassi per essere "efficaci" (es. telefonia via internet, giochi interattivi)

Throughput
- alcune applicazioni per essere efficaci richiedono un'ampiezza di banda minima
- altre applicazioni utilizzano l'ampiezza di banda che si rende disponibile

Sicurezza
- cifratura, integrità dei dati, ...



**Servizi dei protocolli di trasporto di Internet**

Servizio di TCP:
- trasporto affidabile fra i processi di invio e di ricezione: dati consegnati senza errori, perdite e nell'ordine di invio
- controllo di flusso: il mittente non vuole sovraccaricare il destinatario
- controllo della congestione: "strozza" il processo d'invio quando la rete è sovraccarica
- orientato alla connessione: è richiesto un setup fra i processi client e server
- non offre: temporizzazione, garanzie su un'ampiezza di banda minima, sicurezza

Servizio di UDP:
- trasferimento dati inaffidabile fra i processi di invio e di ricezione
- non offre: affidabilità, controllo di flusso, controllo della congestione, temporizzazione, ampiezza di banda minima, sicurezza, nè setup della connessione



**Rendere sicuro TCP**

Socket TCP e UDP:
- nessuna cifratura
- password inviate in chiaro

Transport Layer Security (TLS)
- offre connessioni TCP cifrate
- controllo di integrità dei dati
- autenticazione end-to-end


[[Web e HTTP]]
[[Connessioni HTTP - due tipi]]
[[Messaggio di richiesta HTTP]]
[[Messaggio di risposta HTTP]]
[[Mantenere stato utente server  i cookie]]
[[Web Cache]]
[[DNS - il servizio di directory di Internet]]
[[Applicazioni P2P]]


















