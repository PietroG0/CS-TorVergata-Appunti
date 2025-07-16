#Sicurezza 

#### Il ruolo del Firewall
Internet è diventato indispensabile per quasi ogni organizzazione, ma la sua apertura comporta inevitabilmente rischi. Il firewall nasce proprio per questo: si tratta di un dispositivo o di un insieme di sistemi che agisce come un **“ponte di controllo”** fra la rete interna (protetta) e quella esterna (non attendibile), imponendo un filtro su tutto il traffico che entra e esce. In altre parole, **tutte le comunicazioni devono passare attraverso questo punto di controllo**, dove viene applicata una politica di accesso rigorosamente definita, basata sui rischi rilevati nel processo di valutazione della sicurezza aziendale.

Il firewall, infatti, non solo monitora e filtra le connessioni, ma svolge anche funzioni importanti come il logging degli eventi, la centralizzazione della sicurezza e, in alcuni casi, l’implementazione di protocolli di crittografia come IPSec per proteggere ulteriormente le trasmissioni. Tuttavia, va anche considerato che un firewall è solo una parte della strategia di difesa: **esso definisce il perimetro, ma non può proteggere completamente contro attacchi che potrebbero bypassarne il controllo o contro minacce che provengono dall’interno.**


#### Caratteristiche e Politiche di Accesso
Per funzionare correttamente, un firewall si basa su regole ben definite, conosciute come **access policy**, che specificano quali tipi di traffico (definiti a partire da criteri come indirizzi IP, protocolli, porte, applicazioni e persino identità dell’utente o comportamenti specifici) sono autorizzati a transitare. Queste regole sono il risultato di un’attenta analisi del rischio e devono essere sufficientemente flessibili da consentire il normale funzionamento dell’organizzazione, ma anche restrittive per bloccare le comunicazioni indesiderate.

In parallelo, si definiscono anche le “caratteristiche” che il firewall deve soddisfare: **ogni pacchetto che entra o esce deve essere analizzato e, se non rispetta i criteri stabiliti, deve essere scartato**. È fondamentale che **il firewall stesso sia immune ad eventuali tentativi di violazione**, in modo da non diventare il punto debole dell’intera infrastruttura.


#### Tipologie di Firewall
Illustriamo diverse tipologie di firewall, ognuna con caratteristiche e modalità operative differenti:
- **Packet Filtering Firewall**: Questa è la forma più semplice di firewall, che si fonda sull’applicazione di una serie di regole che **esaminano direttamente i campi contenuti nell’header di ogni pacchetto IP**. Esso controlla parametri come l’indirizzo di origine, quello di destinazione, il protocollo (TCP, UDP, ecc.) e le porte. **Il vantaggio principale è la rapidità**, dato che il filtraggio avviene in maniera trasparente; tuttavia, **tali sistemi non sono in grado di esaminare il contenuto o il contesto dei dati** e quindi possono risultare meno efficaci contro attacchi che sfruttano vulnerabilità a livello applicativo.

- **Stateful Inspection Firewall**: In questo caso il firewall non si limita a controllare i campi degli header, ma **tiene traccia dello “stato” delle connessioni**. Mantenendo una sorta di “tabella di stato” per le connessioni attive, **il firewall verifica il corretto svolgimento della sessione** (ad esempio, controllando i numeri di sequenza TCP) e **permette l’ingresso solo a quei pacchetti che rientrano in una connessione già stabilita.** Questo approccio offre un livello di sicurezza superiore rispetto al semplice packet filtering.

- **Application-Level Gateway (o Proxy)**: Conosciuto anche come application proxy, **questo tipo di firewall opera facendo da intermediario tra il client e il server**. Il traffico viene “inoltrato” dall’applicazione proxy, che ha il compito di **interpretare e validare il contenuto delle comunicazioni**, basandosi sui protocolli specifici. Grazie a questo approfondito controllo, è possibile bloccare attacchi che si basano su vulnerabilità a livello applicativo, anche se ciò comporta un maggior overhead in termini di elaborazione e latenza.

- **Circuit-Level Gateway**: Questi dispositivi si collocano a un livello intermedio, **stabilendo connessioni separate verso l’interno e l’esterno**. Agiscono “trasparentemente”, ovvero non analizzano il contenuto dei dati ma verificano che la scheda di connessione sia conforme a un profilo di traffico legittimo. Un esempio pratico di questa tecnologia è il protocollo SOCKS, che consente a client e server di comunicare attraverso un tunnel controllato.

- **Bastion Host e Firewall Host-Based/Personal**: Il Bastion Host è un sistema particolarmente protetto e minimalista, dedicato all’hosting di applicazioni proxy. **Viene configurato con il minimo numero di servizi indispensabili** e, grazie al suo design “lockdown”, diventa un punto di riferimento sicuro per la gestione delle comunicazioni. **I firewall host-based vengono invece installati direttamente sui singoli server o dispositivi, dove le regole possono essere ottimizzate per le specifiche esigenze del sistema**. I Personal Firewall, infine, proteggono PC e workstation ed evitano accessi non autorizzati, soprattutto in spazi di lavoro meno controllati come quelli domestici o nei network aziendali con dispositivi mobili.


#### Posizionamento e Topologie dei Firewall
I firewall possono essere posizionati all'interno di una rete, illustrando vari scenari topologici, quali:
- Il classico modello **perimetrale**, in cui il firewall **si trova tra la rete interna e Internet**, fungendo da unico punto di ingresso e uscita
- Configurazioni con una DMZ (zona demilitarizzata), dove i server pubblici sono **esposti in una rete separata dal resto della rete interna**, garantendo così maggiore sicurezza
- L'uso di VPN per **creare collegamenti sicuri fra utenti remoti** o sedi distaccate **e il network aziendale**
- Soluzioni di firewall distribuiti, in cui **il controllo non è centralizzato ma si affida a dispositivi di protezione dislocati in più punti della rete**, una scelta comune per organizzazioni di grandi dimensioni


#### Intrusion Prevention Systems (IPS)
Accanto ai firewall, approfondiamo il concetto di IPS, sistemi progettati **non solo per rilevare attività malevole, ma anche per intervenire attivamente**, bloccando attacchi in corso o interrompendo connessioni sospette. Gli IPS possono essere:
- **Host-Based IPS (HIPS)**: installati su singoli dispositivi, monitorano in tempo reale attività sospette a livello locale (come variazioni nelle chiamate di sistema o tentativi di exploit).
- **Network-Based IPS (NIPS)**: si posizionano lungo il percorso del traffico, analizzando ogni pacchetto e intervenendo in maniera inline per bloccare eventuali minacce.
- **Soluzioni distribuite o ibride**: che combinano approcci host-based e network-based, permettendo una visione più completa e coordinata degli eventi, spesso integrandosi con prodotti di Unified Threat Management (UTM).

