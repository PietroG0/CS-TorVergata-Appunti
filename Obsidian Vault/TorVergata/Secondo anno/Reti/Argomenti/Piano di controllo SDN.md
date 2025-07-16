#### Software Defined Networking (SDN)
- Livello di rete di Internet: storicamente implementato tramite un approccio di controllo distribuito e per router:
	- Un router monolitico contiene l'hardware di commutazione, esegue una implementazione proprietaria dei protocolli standard di Internet in un sistema operativo proprietario specializzato per dispositivi di rete
	- Middlebox differenti per differenti funzioni del livello di rete

#### Piano di controllo per router 

![[Pasted image 20240515142755.png]]

Perchè un piano di controllo logicamente centralizzato?
- Gestione più semplice della rete: evitare errori di configurazione dei router, maggiore flessibilità dei flussi di traffico
- Inoltro basato su tabelle permette la "programmazione" dei router
	- la "programmazione" centralizzata è più semplice: calcola le tabelle centralmente e poi distribuiscile 
	- la "programmazione" distribuita è più difficile: calcolo delle tabelle come risultato di un algoritmo (protocollo) distribuito implementato in ogni singolo router

- Implementazione aperta (non proprietaria) del piano di controllo


![[Pasted image 20240515143056.png]]

Switch del piano dei dati:
- Switch veloci e semplici che implementano l'inoltro generalizzato del piano dei dati in hardware
- Tabella dei flussi calcolata, installata sotto la supervisione del controllore
- API per il controllo degli switch basato su tabelle
	- definisce ciò che è controllabile e ciò che non lo è
- Protocollo di comunicazione con il controllore

SDN controller (network OS):
- Mantiene le informazioni sullo stato della rete
- Interagisce con le applicazioni di controllo della rete "in alto" tramite API "northbound"
- Interagisce con gli switch di rete "in basso" tramite API "southbound"
- Implementato come sistema distribuito per garantire prestazioni, scalabilità, tolleranza ai guasti, robustezza e sicurezza

Applicazioni di controllo di rete:
- "Cervelli" di controllo: Implementano le funzioni di controllo utilizzando servizi di livello inferiore attraverso API fornite dal controller SDN
- Scorporate: può essere fornito da terzi, distinto dal fornitore di routing o dal controller SDN

![[Pasted image 20240515143527.png]]


#### Protocollo OpenFlow
- Opera tra controllore e switch
- TCP utilizzato per lo scambio di messaggi
	- crittografia opzionale
- Tre classi di messaggi OpenFlow:
	- controller-to-switch
	- asynchronous (switch to controller)
	- symmetric (misc.)
- Distinta dall'API OpenFlow
	- API utilizzata per specificare azioni di inoltro generalizzate

#### OpenFlow: messaggi controller-to-switch
Messaggi chiave controller-to-switch
- Features: il controllore interroga le caratteristiche dello switch, lo switch risponde
- Configure: il controllore interroga/imposta i paramentri di configurazione dello switch
- Modify-State: aggiungere, eliminare, modificare voci di flusso nelle tabelle OpenFlow
- Packet-Out: il controllore può inviare questo pacchetto da una specifica porta dello switch

#### OpenFlow: messaggi switch-to-controller
Messaggi chiave switch-to-controller
- Packet-in: trasferire il pacchetto (e il relativo controllo) al controllore
- Flow-removed: voce della tabella di flusso cancellata nello switch
- Port Status: informare il controllore di una modifica su una porta

#### SDN: sfide selezionate
- Hardening del piano di controllo: sistema distribuito dependable, scalabile nelle prestazioni e sicuro
	- robustezza ai guasti: sfruttare la teoria forte dei sistemi distribuiti affidabili per il piano di controllo

- Reti, protocolli che soddisfano i requisiti specifici di missione
- Estensione oltre un singolo AS
- L'SDN è fondamentale per le reti cellulari 5G

