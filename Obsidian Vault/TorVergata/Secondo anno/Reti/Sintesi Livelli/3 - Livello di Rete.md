#Reti 

#### Servizi
Il livello di rete trasporta i segmenti dall'host mittente all'host destinatario.
- _Mittente_: Incapsula i segmenti dentro ai datagrammi che passa al livello di collegamento
- _Destinatario_: Scompone il datagramma e passa i segmenti al protocollo del livello di trasporto 

**DEF**: Un router è un dispositivo di rete che instrada il traffico dati tra reti diverse. È in grado di determinare il percorso ottimale per trasferire i dati da una sorgente a una destinazione attraverso una rete complessa. Inoltre, i router possono implementare funzionalità di sicurezza, come firewall e crittografia, e gestire le comunicazioni tra dispositivi all'interno di una rete locale. In sostanza, il router agisce come un ponte tra diverse reti, facilitando la comunicazione e il trasferimento di dati tra di esse.

Quindi il router esamina i campi dell'intestazione di tutti i datagrammi IP che lo attraversano e sposta i datagrammi dalle porte di ingresso alle porte di uscita per trasferire il datagramma lungo il percorso dall'host di origine a quello di destinazione.

#### - Inoltro e Instradamento


#### Piano dei dati e piano di controllo
- _Piano dei dati_: Funzione locale, a livello di singolo router. Determinare come i pacchetti in arrivo a una porta di ingresso del router sono inoltrati. verso una porta di uscita del router
- _Piano di controllo_: Rappresenta la logica della rete. Determina come i pacchetti sono instradati tra i router lungo un percorso dall'host di origine all'host di destinazione. Ci sono due approcci fondamentali per il piano di controllo. 

1) _Algoritmi di Instradamento_, implementati nei router
2) _Software-Defined Networking (SDN)_, implementato nei server


2. La figura mostra un approccio alternativo in cui un controller remoto, separato fisicamente dai router, calcola e distribuisce le tabelle di inoltro a tutti i router. La funzionalità di instradamento del piano di controllo è separata fisicamente dal router; il dispositivo di instradamento effettua solo l’inoltro, mentre il controller remoto calcola e distribuisce le tabelle di inoltro. Il controller remoto potrebbe essere implementato in un data center remoto con elevata affidabilità e ridondanza e potrebbe essere gestito da un ISP o da una terza parte.

![[Pasted image 20240702161716.png | 500]]


#### Modello di servizio
Qual è il _modello di servizio_ per il "canale" che trasporta i datagrammi dal mittente al destinatario, ovvero quali sono le carrateristiche principali del canale?

- **Consegna garantita**: Garantisce che prima o poi il pacchetto arriverà a destinazione.
- **Consegna garantita con ritardo limitato**: Garantisce che prima o poi il pacchetto arriverà a destinazione con un minimo di ritardo.
- **Consegna ordinata**: Garantisce che i pacchetti giungano a destinazione nell'ordine in cui sono stati inviati.
- **Banda minima garantita**
- **Servizi di sicurezza**

Il livello di rete di Internet mette a disposizione un solo servizio, **best-effort**, _massimo impegno_. Con questo servizio, non c’è garanzia che i pacchetti vengano ricevuti nell’ordine in cui sono stati inviati, così come non è garantita la loro eventuale consegna. Non c’è garanzia sul ritardo end-to-end, così come non c’è garanzia su una larghezza di banda minima garantita.

Nonostante la "scarsità" di servizi che il livello di rete di Internet mette a disposizione, è il modello di servizio tutt'oggi usato. La semplicità del meccanismo ha consentito l'ampia diffusione di Internet.

