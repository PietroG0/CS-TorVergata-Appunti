#Sicurezza 

#### I Pilastri della Sicurezza
In ambito sicurezza, viene evidenziato come un sistema debba garantire tre proprietà fondamentali: **la riservatezza** dei dati, **l'integrità** (oovero la garanzia che le informazioni non vengano modificate in maniera non autorizzata) e, soprattutto, **la disponibilità**. Negli attacchi DoS l'obiettivo è proprio quello di compromettere la disponibilità, ovvero impedire ad utenti legittimi l'accesso ai servizi, esaurendo le risorse a disposizione


#### Cos'è un attacco DoS

>[!info] DoS
>Un attacco Denial of Service mira a rendere un servizio o una rete **inutilizzabile**, esaurendo risorse critiche come banda, CPU, memoria o spazio sul disco. La definizione data dal NIST ci guida qui: si tratta infatti di operazioni che "impediscono o compromettono l'uso autorizzato delle reti, dei sistemi o delle applicazioni" sfruttando l'esaurimento delle risorse necessarie al loro funzionamento


#### Metodi Classici e Tecniche di Inondazione
Una delle strategie più immediate per realizzare un attacco Dos è quella del **flooding**. Prendiamo, ad esempio, il **flooding con il comando ping**. Il comando ping, normalmente usato per verificare la connettività, viene sfruttato in modalità "-f" per inviare pacchetti a una velocità tale da saturare la capacità di elaborazione o la banda della rete target. Così facendo, nonostante i collegamenti possano gestire alti volumi a diversi tratti del percorso, all'ultimo collo di bottiglia (che spesso è il link dell'ISP o un router specifico) la capacità crolla e i pacchetti legittimi vengono bruscamente scartati


#### Mascheramento dell'Origine: Spoofing degli Indirizzi Sorgente
Per rendere più difficile l'identificazione della sorgente dell'attacco, l'attaccante può "mascherare" il proprio indirizzo IP, una pratica nota come **spoofing degli indirizzi**. Utilizzando interfacce di basso livello (raw socket) che consentono di alterare l'indirizzo di origine dei pacchetti, gli aggressori inviano enormi volumi di traffico facendolo sembrare provenire dal bersaglio stesso. In questo modo non solo confondono eventuali sistemi di tracciamento, ma saturano anche i router lungo il percorso, causando congestione nei collegamenti di bassa capacità


#### L'attacco SYN Spoofing
Uno dei metodi più insidiosi è il **SYN spoofing**, che sfrutta la procedura del “three-way handshake” di TCP. Normalmente, quando un client vuole instaurare una connessione, invia un pacchetto SYN e attende il SYN-ACK del server, per poi completare la stretta di mano con un ACK. **Con il SYN spoofing l’attaccante invia richieste TCP con indirizzi di mittente falsificati, facendo sì che il server invii il SYN-ACK a indirizzi inesistenti. Di conseguenza, il server accumula troppi “tentativi di connessione”** incompleti nella sua tabella, esaurendo poco a poco le risorse necessarie per gestire le vere richieste. Per dare un esempio pratico, se un server dispone di una tabella di 256 connessioni e ogni voce rimane attiva per circa 150 secondi (dovuti ai ritentativi per il mancato arrivo dell’ACK), l’attaccante deve semplicemente inviare in media circa 1,71 richieste al secondo. Anche se ciascuna richiesta è piccola—circa 40 byte—l’effetto cumulativo è sufficiente a tenere costantemente la tabella piena ed impedire nuove connessioni legittime.


#### Attacchi di Inondazione e DDoS
Oltre al singolo attacco dal punto di vista di un attaccante isolato, esiste il modello del **Distributed Denial of Service (DDoS)**, dove un gruppo di sistemi compromessi (i cosiddetti “zombie” o botnet) collabora per lanciare un attacco coordinato. Qui il traffico proviene da fonti multiple e distribuite, rendendo molto più difficile distinguere tra traffico malevolo e richieste legittime e, di conseguenza, contrastare l’attacco.

Gli attacchi di flooding possono sfruttare diversi protocolli:
- **ICMP Flood:** Usa una valanga di pacchetti ping per saturare la rete.
- **UDP Flood:** Invia pacchetti UDP a una determinata porta, forzando il sistema target a dover elaborare numerose richieste.
- **TCP SYN Flood:** Come già descritto, sfrutta il processo di handshake TCP.


#### Attacchi a livello Applicativo e Tecniche di Reflection & Amplification
Gli aggressori possono mirare non solo al livello di rete, ma anche all'applicazione
- **SIP Flood**: Questo attacco sfrutta il protocollo SIP, inviando numerose richieste INVITE per instaurare sessioni multimediali, saturando le risorse del server e del proxy
- **HTTP-Based Flood**: Qui il bersaglio è un web server, che viene sommerso da richieste HTTP. Si può parlare anche di attacchi che sfruttano una tecnica come *Slowloris*, in cui vengono inviate richieste HTTP incomplete per monopolizzare le connessioni

Un'altra tecnica molto potente è quella della **reflection attack**, in cui l'attaccante invia delle richieste a server terzi ("i reflectors") usando come indirizzo sorgente quello del bersaglio. Quando i reflectors rispondono, il traffico va direttamente al target. Se, oltre a questo, l'attaccante sfrutta ictività di amplificazione, ad esempio, un piccolo pacchetto di richiesta può generare una risposta molto più grande (come nei casi delle **DNS amplification attacks**), il volume del traffico di risposta può essere moltiplicato, causando una saturazione ancor più devastante


#### Difesa contro gli Attacchi DoS
Pur essendoci metodi di prevenzione e mitigazione, non è possibile bloccare del tutto questi attacchi. La difesa si articola in diverse "linne d'azione":
- **Prevenzione e Pre-emption**: Misure adottate prima dell'arrivo dell'attacco, come l'implementazione di filtri sui router per bloccare indirizzi IP falsificati, la disabilitazione delle trasmissioni dirette (broadcast) inutili e l'uso di codifiche crittografiche (cookie) durante la gestione delle connessioni TCP
- **Rilevamento e Filtraggio**: Sistemi di monitoraggio e intrusion detection che analizzano il traffico in tempo reale per identificare pattern anomali e applicare filtri mirati
- **Tracciamento e Identificazione**: Tecniche volte a rintracciare la reale origine dell'attacco, essenziali nel caso in cui si voglia intraprendere un'azione legale o migliorare le contromisure future
- **Reazione all'attacco**: L'importanza di avere un piano di risposta agli incidenti, che includa il contatto con l'ISP, l'applicazione di filtri a monte, il passaggio a server di backup o l'adozione di misure di disaster recovery

