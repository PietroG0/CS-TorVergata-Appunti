## Introduzione

Nel piano di controllo, il router ha il ruolo di determinare il percorso seguito dai pacchetti dalla sorgente alla destinazione (Instradamento).

Ci sono due approcci per eseguire l'instradamento:

- Controllo per router: Ogni router ha una componente di instradamento che comunica con le componenti di instradamento degli altri router per calcolare la propria tabella di inoltro (protocolli OSFP e BGP).

- Controllo logicamente centralizzato (SDN): Controller logicamente centralizzato calcola e distribuisce le tabelle di inoltro che devono essere utilizzate da ogni router.**


#### Algoritmi di instradamento
L'obiettivo di questi algoritmi è determinare percorsi o cammini "buoni", di solito quelli di costo minimo tra le sorgenti e i destinatari attraverso la rete dei router

- Un algoritmo di instradamento centralizzato calcola il percorso a costo minimo tra una sorgente e una destinazione avendo una conoscenza globale e completa della rete. In altre parole, l’algoritmo riceve in ingresso tutti i collegamenti tra i nodi e i loro costi. Questi algoritmi sono detti algoritmi link-state (Dijkstra).

- In un algoritmo di instradamento decentralizzato il percorso a costo minimo viene calcolato in modo distribuito e iterativo. Nessun nodo possiede informazioni complete sul costo di tutti i collegamenti di rete. Inizialmente i nodi conoscono soltanto i costi dei collegamenti a loro incidenti. Questi algoritmi sono detti algoritmi distance-vector (Bellman-Ford).


## OSFP e BGP

Fino adesso abbiamo visto la rete come un insieme di router interconnessi tra loro. Ciascun router distinguibile dagli altri. Ora invece proviamo a raggrupparli come segue.

Possiamo organizzare i router in sistemi autonomi (AS, Autonomous System), generalmente composti da gruppi di router posti sotto lo stesso controllo amministrativo.

Un ISP può costituire un unico AS oppure essere partizionato in più AS.

- Intra-AS protocol: Algoritmo di instradamento in esecuzione in un AS. I router di un AS eseguono lo stesso algoritmo di instradamento e gli uni hanno informazioni sugli altri. Sul bordo dell'AS si trovano i router di gateway. Il protocollo più usato è OSFP.
    
- Inter-AS protocol: Algoritmo di instradamento tra AS. I router gateway effettuano l'instradamento inter-AS oltre a quello intra-AS. Uno dei più importanti protocolli di rete è BGP.
    

Ciò che comporta la suddivisione di Internet in vari AS e che risolve il problema della scalabilità è che negli algoritmi link-state e distance-vector l’invio delle informazioni sullo stato della rete o sulle distanze è limitato all’AS in questione!

Ciò comporta tabelle più piccole e maggiore velocità di convergenza. Come detto ogni sistema autonomo può usare il proprio algoritmo di instradamento, e affinché non sia isolato dagli altri AS è necessaria la presenza del router gateway. I gateway partecipano sia all’instradamento inter-AS che a quello intra-AS.


### OSFP (Open Shortest Path First)

OSPF è un protocollo link-state che utilizza il flooding (inondazione) per inviare in broadcast le informazioni riguardo lo stato dei collegamenti e l’algoritmo di Dijkstra per la determinazione del percorso a costo minimo. In OSPF, un router costruisce una mappa topologica, cioè un grafo, dell’intero sistema autonomo e manda in esecuzione (locale) l’algoritmo di Dijkstra per determinare un albero dei cammini minimi verso tutte le sottoreti (albero in cui il router stesso rappresenta il nodo radice).

Vantaggi

- Sicurezza: Tutti i messaggi OSFP sono autenticati per prevenire intrusioni dannose.
    
- Percorsi con lo stesso costo: Se ci sono più percorsi con lo stesso costo, OSPF consente di usarli senza dover sceglierne uno particolare.
    

Gerarchia a due livelli: Una AS può essere strutturata in due aree, locale e dorsale (backbone).



#### BGP
Una Sessione BGP consiste di due router BGP che si scambiano messaggi BGP attraverso una connessione TCP. Nel caso in cui questa coinvolga due sistemi autonomi viene detta sessione BGP esterna (sessione eBGP), mentre quella tra router dello stesso sistema autonomo è chiamata sessione BGP interna (sessione iBGP). I messaggi BGP sono:

- OPEN: apre una connessione TCP e autentica il mittente BGP

- UPDATE: annuncia un nuovo percorso

- KEEPALIVE: mantiene in vita la connessione

- NOTIFICATION: segnala gli errori nel messaggio precedente; usato anche per chiudere la connessione


 Determinare i percorsi "ottimi" verso le sottoreti.

- AS-PATH: elenco degli AS attraverso i quali è passato l'annuncio del prefisso.

- NEXT-HOP: indirizzo IP dell'interfaccia del router che inizia l'AS-PATH.

- Instradamento a patata bollente: L'algoritmo sceglie il gateway locale che ha il minimo costo INTRA-AS
