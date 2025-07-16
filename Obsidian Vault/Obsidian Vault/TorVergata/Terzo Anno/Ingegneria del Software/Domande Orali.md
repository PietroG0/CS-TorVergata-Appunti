#Software 


#### Design pattern
**Caratteristiche**
- Rappresentano soluzioni a problematiche ricorrenti che si incontrano durante le varie fasi di sviluppo del software
- Organizzano l'esperienza di OOD favorendone il riuso
- Permettono di definire un linguaggio comune che semplifica la comunicazione tra gli addetti ai lavori
- Portano di norma ad una buona progettazione

**Classificazione**
2 criteri, scopo (purpose) e raggio di azione (scope)

Criterio scopo:
- *Creazionali*: I pattern di questo tipo sono relativi alle operazioni di creazione di oggetti
- *Strutturali*: Sono utilizzati per definire la struttura del sistema in termini della composizione di classi ed oggetti
- *Comportamentali*: Permettono di modellare il comportamento del sistema definendo le responsabilità delle sue componenti e definendo le modalità di interazione

Criterio raggio di azione:
- *Classi*: Pattern che definiscono le relazioni fra classi e sottoclassi. Le relazioni sono *statiche*
- *Oggetti*: Pattern che definiscono relazioni tra oggetti. Le relazioni sono *dinamiche*


#### Lista DS

###### Abstract Factory
- *Scopo*: Fornire un'interfaccia per la creazione di famiglie di oggetti tra loro correlati
- *Motivazione*: Realizzazione di uno strumento per lo sviluppo di user interface (UI) in grado di sopportare diversi tipi di look & feel. Per garantire la portabilità di una applicazione tra look & feel diversi, gli oggetti non devono essere cabliati nel codice

**Struttura**

![[Pasted image 20250607150736.png#center]]
https://refactoring.guru/design-patterns/abstract-factory

*Applicabilità*:
- A sistema che deve essere *indipendente* dalle modalità di creazione dei prodotti con cui opera
- A sistema che deve poter essere configurato per usare *famiglie di prodotti diversi*
- Il clienti *non deve essere legato* ad una specifica famiglia

*Partecipanti*:
- AbstractFactory e ConcreteFactory
- AbstractProduct e ConcreteProduct
- Applicazione Client

*Conseguenze*:
- Le classi concrete sono isolate e sotto controllo
- La famiglia di prodotti può essere cambiata rapidamente perchè la factory completa compare in un unico punto del codice
- Aggiungere nuove famiglie di prodotti richiede ricompilazione perchè l'insieme di prodotti gestiti è legato all'interfaccia della factory


###### Factory Method
- *Scopo*: Definire un'interfaccia per la creazione di un oggetto, che consenta di decidere a tempo di esecuzione quale specifico oggetto istanziare
- *Motivazione*: E' un pattern ampiamente usato nei framework, dove le classi astratte definiscono le relazioni tra gli elementi del dominio, e sono responsabili per la creazione degli oggetti concreti

![[Pasted image 20250607151235.png#center]]
https://refactoring.guruAb![[Pasted image 20250704170006.png]]/design-patterns/factory-method

*Affidabilità*:
- Una classe non è in grado di sapere in anticipo le classi di oggetti che deve creare
- Una classe vuole che le sue sottoclassi scelgano gli oggetti da creare
- Le classi delegano la responsabilità di creazione

*Partecipanti*:
- Product e ConcreteProduct
- Creator e ConcreteCreator

*Conseguenze*:
- Elimina la necessità di riferirsi a classi dipendenti dall'applicazione all'interno del codice


###### Adapter
- *Scopo*: *Convertire* l'interfaccia di una classe esistente *incompatibile* con un client, in una *compatibile*
- *Motivazione*: Consideriamo un editor che consente di disegnare e comporre elementi grafici. L'astrazione chiave è un singolo oggetto grafico. Supponiamo di voler integrare un nuovo componente, ma che questo non abbia un'interfaccia compatibile con l'editor

![[Pasted image 20250607151757.png#center]]
https://refactoring.guru/design-patterns/adapter

*Applicabilità*:
- Si usa quando si vuole riusare una classe esistente, ma con interfaccia incompatibile con quella desiderata

*Partecipanti*:
- Client
- Target
- Adapter ed Adaptee

*Conseguenze*: 
- E' necessario prendere in considerazione l'effort necessario all'adattamento



###### Composite
- *Scopo*: Comporre oggetti in strutture che consentano di trattare i singoli elementi e la composizione in modo uniforme
- *Motivazione*: Le applicazioni grafiche consentono di trattare in modo uniforme sia le forme geometriche di base sia gli oggetti complessi che si creano a partire da questi elementi semplici. Molti editor grafici ad esempio hanno la funzione raggruppa

![[Pasted image 20250607152117.png#center]]
https://refactoring.guru/design-patterns/composite

*Applicabilità*:
- Si usa quando si vogliono rappresentare gerarchie di oggetti in modo che oggetti semplici e oggetti composti siano trattati in modo uniforme

*Partecipanti*:
- Component e Composite
- Leaf
- Client

*Conseguenze*:
- I client sono semplificati perchè gli oggetti semplici e quelli composti sono trattati allo stesso modo
- L'aggiunta di nuovi oggetti Leaf o Composite è semplice, e questi potranno sfruttare il codice dell'applicazione Client già esistente
- Può rendere il sistema troppo generico. Non è possibile fare in modo che un oggetto composto contenga solo un certo tipo di oggetti



###### Decorator
- *Scopo*: Aggiungere dinamicamente funzionalità (responsabilità) ad un oggetto
- *Motivazione*: Uno scenario classico di applicabilità per questo pattern è la realizzazione di interfacce utente. Responsabilità quali il testo scorrevole o un particolare bordo devono poter essere aggiunti a livello di singolo oggetto


![[Pasted image 20250607152601.png#center]]
https://refactoring.guru/design-patterns/decorator

*Applicabilità*:
- Si applica quando è necessario aggiungere responsabilità agli oggetti in modo trasparente e dinamico
- Si applica quando il subclassing non è adatto

*Partecipanti*:
- Component e ConcreteComponent
- Decorator e ConcreteDecorator(s)

*Conseguenze*:
- Maggiore flessibilità rispetto all'approccio statico
- Evita di definire strutture gerarchiche complesse



###### Observer
- *Scopo*: Definire una dipendenza *uno a molti* tra oggetti, mantenendo basso il grado di coupling. In altre parole la variazione dello stato di un oggetto deve essere osservata da altri oggetti, in modo che possano aggiornarsi automaticamente
- *Motivazione*: Lo scenario classico è quello di applicazioni con GUI, realizzate secondo il paradigma *Model-View-Control*. Quando il Model cambia, gli oggetti che implementano la View devono aggiornarsi

![[Pasted image 20250607153135.png#center]]
https://refactoring.guru/design-patterns/observer

*Applicabilità*:
- Si applica quando una azione può essere scomposta in due ambiti, ciascuno dei quali incapsulato in oggetti separati per mantenere basso il livello di coupling
- Gestire le modifiche di oggetti conseguenti alla variazione dello stato di un oggetto

*Partecipanti*:
- Subject e ConcreteSubject
- Observer e ConcreteObserver

*Conseguenze*:
- L'accoppiamento tra Subject ed Observer è astratto
	- Il Subject conosce solo la lista degli osservatori

- La notifica è una comunicazione di tipo broadcast
	- Il Subject non si occupa di quanti sono gli Observer registrati

- Attenzione perchè una modifica al Subject scatena una serie di modifiche su tutti gli osservatori e su tutti gli oggetti da questi dipendenti


###### Template Method
- *Scopo*: Definire la struttura di un algoritmo all'interno di un metodo, delegando alcuni passi alle sottoclassi
- *Motivazione*: Consideriamo un framework per costruire applicazioni in grado di gestire documenti diversi. Il Template Method definisce un algoritmo in base ad operazioni astratte che saranno definite nelle sottoclassi specifiche

![[Pasted image 20250607155333.png#center]]
https://refactoring.guru/design-patterns/template-method

*Applicabilità*:
- E' utilizzato per implementare la parte invariante di un algoritmo, lasciando alle sottoclassi la definizione degli step variabili
- E' utile quando ci sono comportamenti comuni che possono essere inseriti nel template

*Partecipanti*:
- AbstractClass e ConcreteClass
- Client

*Conseguenze*:
- I metodi template permettono il riuso del codice
- Creano una struttura di controllo invertito dove è la classe padre che chiama le operazioni ridefinite nei figli e non viceversa
- Per controllare l'estendibilità delle sottoclassi, i metodi richiamati dal template sono chiamati metodi *gancio* (hook)
- I metodi hook possono essere implementati, offrendo un comportamento standard, che la sottoclasse può volendo ridefinire

Il Template Method è simile al Factory Method
- Il Template Method è il metodo che invoca i metodi astratti, al fine di *generalizzare un algoritmo*
- Il Factory Method è un metodo astratto che deve creare e restituire l'istanza di classe concreta, al fine di *sganciare il cliente dalla scelta del tipo specifico*


###### Strategy
- *Scopo*: Definire ed incapsulare una famiglia di algoritmi in modo da renderli intercambiabili indipendentemente dal client che li usa
- *Motivazione*: Consideriamo la famuglia degli algoritmi di ordinamento. Ne esistono diversi (QuickSort, BubbleSort, MergeSort, ecc..). Costruiamo un'applicazione che li supporti tutti, che possa essere facilmente estendibile, e che permetta una scelta rapida del tipo di algoritmo

![[Pasted image 20250607160025.png#center]]
https://refactoring.guru/design-patterns/strategy

*Applicabilità*:
- Molte classi correlate differiscono solo per il comportamento
	- Il pattern fornisce un modo per avere un'interfaccia comune

- Sono necessarie più varianti di uno stesso algoritmo, a seconda dei tipi di dato in ingresso o delle condizioni operative

*Partecipanti*:
- Strategy e ConcreteStrategy
- Client

*Conseguenze*:
- Il pattern separa l'implementazione degli algoritmi dal contesto dell'applucazione 
	- Usare il subclassing della classe Client per aggiungere un algoritmo non sarebbe stata una buona scelta

- Le diverse strategie eliminano i blocchi condizionali che sarebbero necessari inserendo tutti i diversi comportamenti in una unica classe
- Lo svantaggio principale è che i client devono conoscere le diverse strategie


#### Domanda 1 - Significato Include/Exclude negli Use Case

*Include*
- Indica che un caso d'uso *obbligatoriamente include* un altro caso d'uso per completare la sua funzionalità
- E' utilizzato quando una parte del comportamento di un caso d'uso è riutilizzabile da altri casi d'uso

*Exclude*
- Indica che un caso d'uso può opzionalmente estendere un altro caso d'uso, aggiungendo funzionalità opzionali o alternative
- E' utilizzato per rappresentare comportamenti che si verificano solo in determinate condizioni


#### Domanda 2 - Differenze tra requisiti funzionali/non funzionali

>[!info] Requisiti SW 
>Descrizione dei servizi che un sistema SW deve fornire, insieme ai vincoli da rispettare sia in fase di sviluppo che durante la fase di operatività del SW


Ci sono 2 tipi di requisiti SW, e sono:
- *Requisiti utente*: Descrizione in linguaggio naturale dei servizi che il sistema deve fornire e dei vincoli operativi
- *Requisiti di sistema*: Specificato mediante la stesura di un documento strutturato che descrive in modo dettagliato i servizi che il sistema SW deve fornire

I requisiti SW di sistema si dividono in 3 categorie principali, che sono:
*Requisiti funzionali*
- Descrivono le funzionalità del sistema SW, in termini di servizi che il sistema SW deve fornire, di come il sistema SW reagisce a specifici tipi di input e di come si comporta in situazioni particolari

*Requisiti non funzionali*
- Descrivono le proprietà del sistema SW in relazione a determinati servizi o funzioni e possono anche essere relativi al processo

*Requisiti di dominio*
- Requisiti derivati dal dominio applicativo del sistema SW piuttosto che da necessità dettate dagli utenti

Le principali differenze tra req. funzionali/non funzionali sono quindi che:
- I primi identificano tutte quelle operazioni che il sistema deve eseguire, ad esempio *"Arriva la richiesta di cancellazione di un account, il sistema deve essere in grado di eseguire tale operazione senza problemi"*
- Gli altri identificano tutte quelle funzionalità che il sistema deve avere e rispettare, ad esempio *"Il sistema deve essere affidabile, sicuro e deve garantire la crittografia dei dati"*, oppure *"Il sistema deve garantire performance adeguate al numero di query che arrivano"*, ecc..


#### Domanda 3 - Caratteristiche modello a spirale

>[!info] Modello del ciclo di vita del SW
>Il modello del ciclo di vita del SW specifica la serie di fasi attraverso cui il prodotto SW progredisce e l'ordine in cui vanno eseguite, dalla definizione dei requisiti alla dismissione

Ci sono vari modelli, tra cui i più importanti sono:
- **Build & Fix**: Non è un vero modello, infatti si usa in assenza di uno degli altri modelli, qui il prodotto SW viene prima sviluppato e poi rilavorato fino a soddisfare le esigenze del cliente
- **Modello Waterfall**: Modello dove le operazioni vengono effettuate a "cascata", con approccio *sequenziale e lineare*.
	- Ogni fase deve essere completata prima di passare alla successiva
	- Ad ogni fine fase è associata la verifica, per poter passare alla successiva
	- Ideale per progetti i cui requisiti sono chiari e ben definiti dall'inizio

- **Modello a Spirale**: Modello con approccio *iterativo* che combina elementi del modello Waterfall con attenzione particolare per l'analisi dei rischi
	- Il SW viene sviluppato attraverso iterazioni, ognuna delle quali affronta una parte del progetto
	- Ideale per progetti complessi e ad alto rischio, in cui i requisiti possono cambiare durante il ciclo di vita

Le caratteristiche principali del modello a spirale sono:
**Struttura iterativa** 
- Il progetto è suddiviso in cicli (spirali), ognuno dei quali comporta pianificazione, progettazione, implementazione e valutazione
- Ogni iterazione aggiunge valore al prodotto

**Fasi principali in ogni ciclo**
- *Customer communication* (Comunicazione con il cliente): Interazione costante per raccogliere e aggiornare i requisiti
- *Planning* (Pianificazione): Definizione degli obiettivi, stime di costo, tempi e gestione dei rischi
- *Risk analysis* (Analisi dei rischi): Identificazione e gestione dei rischi associati al progetto
- *Engineering* (Ingegnerizzazione): Progettazione e implementazione tecnica
- *Construction & Release* (Costruzione e rilascio): Realizzazione e rilascio dei deliverable
- *Customer evaluation* (Valutazione del cliente): Feedback e valutazione del prodotto per prepararsi al ciclo successivo

**Gestione dei rischi**
- L'identificazione e la mitigazione dei rischi sono centrali in questo modello

**Incrementalità**
- Ogni ciclo produce una versione incrementale del software, migliorando il prodotto fino alla versione finale


![[Pasted image 20250609144901.png#center | 500]]


#### Domanda 4 - Cosa significa fare Risk Analysis
L'analisi dei rischi è un processo fondamentale per identificare, valutare e gestire i possibili problemi o incertezze che potrebbero influenzare negativamente il successo di un progetto. Nel contesto dello sviluppo software (e in particolare nel modello a spirale), l'analisi dei rischi aiuta a prevenire problemi futuri, ottimizzare i costi e garantire che il progetto rimanga nei limiti previsti di tempo e qualità

**Fasi Principali**

- **Identificazione dei rischi**
	- Trovare tutte le possibili minacce che potrebbero compromettere il progetto
	- Tipologie di rischi da considerare:
		- Tecnici: Incertezza nella fattibilità tecnica, utilizzo di nuove tecnologie o complessità del sistema
		- Gestionali: Budget insufficiente, risorse non adeguate o scadenze non realistiche
		- Operativi: Cambiamenti nei requisiti del cliente, modifiche alle priorità del progetto
		- Esterni: Fattori esterni come problemi legali, economici o di mercato
		- Di qualità: Il software potrebbe non soddisfare i requisiti di qualità stabiliti

- **Valutazione dei rischi**
	- Obiettivo: Stimare l'impatto e la probabilità di ogni rischio
	- Due parametri principali:
		- **Probabilità (Likelihood)**: Quanto è probabile che il rischio si verifichi? 
		- **Impatto (Impact)**: Qual'è l'effetto sul progetto se il rischio si verifica?
	- Matrici di rischio: Tabelle che classificano i rischi combinando probabilità ed impatto

- **Prioritizzazione dei rischi**
	- Obiettivo: Stabilire quali rischi devono essere affrontati immediatamente
	- Tecniche comuni:
		- Analisi Pareto (80/20): Concentrarsi sui pochi rischi che causano la maggior parte dei problemi
		- Diagramma di Ishikawa: Visualizzare le cause principali dei rischi

- **Pianificazione delle azioni di mitigazione**
	- Obiettivo: Definire le azioni per ridurre la probabilità o l'impatto dei rischi
	- Azioni comuni:
		- **Evitare**: Cambiare il piano per eliminare il rischio
		- **Ridurre**: Prendere misure per diminuire la probabilità o l'impatto
		- **Trasferire**: Delegare il rischio a terzi
		- **Accettare**: Decidere di non agire e gestire le conseguenze se il rischio si verifica

- **Monitoraggio e revisione continua**
	- Obiettivo: Assicurarsi che i rischi siano costantemente gestiti durante tutto il ciclo di vita del progetto
	- Strumenti utilizzati:
		- Revisioni periodiche dei rischi
		- Aggiornamenti alle matrici di rischio
		- Verifica delle azioni di mitigazione intraprese


#### Domanda 5 - Architettura Oggetti Distribuiti
L'architettura di sistema **definisce** la struttura dei **componenti** del sistema software, insieme alle **relazioni tra questi** componenti

L'architettura ad **oggetti distribuiti** è un'architettura di sistema che non fa distinzioni tra client/server, infatti ogni oggetto distribuito può fungere sia da client che da server.
La comunicazione remota fra gli oggetti è resa **trasparente** usando *middlewar* basati sul concetto di **software bus**

Le applicazioni basate su questa architettura consistono in un **insieme di oggetti** che sono eseguiti su piattaforme **distribuite ed eterogenee**, e comunicano tramite invocazioni remote e metodi



#### Domanda 6 - ORB

>[!info] ORB (Object Request Broker)
>Componente SW (Middlewar) che permette la comunicazione tra oggetti distribuiti su una rete, indipendentemente dalla loro posizione fisica, dal linguaggio di programmazione utilizzato o dal S.O. su cui sono in esecuzione

Funge quindi da **intermediario** per facilitare l'interazione tra oggetti in un'architettura distribuita

**Funzionamento**
- **Intermediazione delle richieste**:
	- L'ORB consente a un oggetto client (richiedente) di invocare metodi su un oggetto server (fornitore di servizi) che può risiedere su una macchina remota o locale
	- Il client non deve conoscere i dettagli sull'implementazione o sulla posizione fisica dell'oggetto server

- **Astrazione**: 
	- Fornisce un'interfaccia standard che permette agli sviluppatori di concentrarsi sulla logica applicativa, senza preoccuparsi della complessità della comunicazione a basso livello

- **Gestione della comunicazione**:
	- L'ORB si occupa della serializzazione (marshalling) e deserializzazione (unmarshalling) dei dati trasmessi tra il client e il server
	- Gestisce i protocolli di rete necessari per il trasporto dei dati

- **Trasparenza**:
	- Fornisce trasparenza sia nella posizione (**Location transparency**) che nell'implementazione (**implementation transparency**), garantendo che gli oggetti possano interagire senza preoccuparsi dei dettagli di dove o come sono implementati

Ci sono varie implementazioni per l'ORB, ma la più famosa è **CORBA** (Common Object Request Broker Architecture)


#### Domanda 7 - Che relazione c'è tra prodotto e costo di produzione?
La relazione tra prodotto e costo di produzione nel contesto del software è complessa e si basa su diversi fattori:
- **Dimensione del prodotto**:
	- Maggiore è la complessità e la dimensione del software, maggiore sarà il costo di produzione

- **Qualità del prodotto**:
	- Un software di alta qualità richiede più tempo e risorse per essere progettato, sviluppato e testato, aumentando i costi iniziali
	- Tuttavia, un software di bassa qualità può comportare costi aggiuntivi per manutenzione e correzioni

- **Efficienza dei processi di sviuppo**:
	- L'uso di metodologie di sviluppo efficienti può ridurre i costi mantenendo alta la qualità

- **Automazione e strumenti**:
	- L'uso di strumenti di automazione può ridurre il costo di produzione migliorando l'efficienza

- **Scalabilità del prodotto**:
	- Un software scalabile e modulare può ridurre i csoti a lungo termine, facilitando aggiornamenti e manutenzione

In sintesi, esiste un equilibrio tra il costo iniziale di produzione e i costi successivi legati alla manutenzione, supporto e aggiornamenti


#### Domanda 8 - Implementazione SOA

>[!info] SOA (Service Oriented Architecture)
>La **SOA** è un'architettura distribuita che consiste in molteplici servizi. I servizi sono distribuiti in modo tale da poter essere eseguiti su nodi differenti con differenti service provider.
>L'obiettivo di SOA è quello di sviluppare **applicazioni SW che sono composte da servizi distribuiti**, in modo tale che i singoli servizi possano essere eseguiti su più piattaforme differenti e implementati con differenti linguaggi di programmazione


All'interno di SOA troviamo l'ORB, che gestisce la comunicazione tra i client e i servizi offerti nel SOA

Anche se le SOA sono concettualmente platform-indipendent, attualmente vengono fornite con grande successo su piattaforme tecnologiche di **Web Services**

Da un punto di vista SW, i Web Services sono le API (Application Programming Interface) che forniscono i metodi standard di comunicazione
Da un punto di vista del business, i Web Services sono funzionalità di business fornite da una compagnia nella forma di servizio esplicito in Internet

I Web Services sono quindi il fulcro dell'implementazione SOA, e sfruttano vari protocolli per far comunicare i servizi fra di loro

Tra questi troviamo:
- **SOAP** (Simple Object Access Protocol):
	- Protocollo basato su linguaggio XML e HTML che permette lo scambio di informazioni in un sistema distribuito
	- Utilizza protocolli di trasporto come HTTP, SMTP e altri

- **REST** (Representational State Transfer)
	- Architettura che utilizza i metodi HTTP per performare le operazioni **CRUD** (Create Read Update Delete)

Oltre ai Web Services, le architettura SOA utilizzano altre tecnologie, tra cui:
- **UDDI** (Universal Description, Discovery, and Integration)
	- Registro per pubblicare e trovare servizi web all'interno di un'architettura SOA 
	- Aiuta a localizzare e identificare i servizi disponibili su una rete

- **WSDL** (Web Services Description Language)
	- Linguaggio basato su XML utilizzato per descrivere le interfacce dei servizi in un'architettura SOA
	- Specifica cosa il servizio fa, come può essere invocato e dove si trova


#### Domanda 9 - Secondo quali attività va declinata la fase di testing?
La fase di testing, nel ciclo di vita del software, è articolata in una serie di attività che assicurano che il prodotto soddisfi i requisiti definiti. Queste attività includono:

1. **Pianificazione del testing**:
	- Definizione degli obiettivi del testing
	- Identificazione delle risorse necessarie
	- Pianificazione temporale e stima dei costi

2. **Progettazione dei casi di test**:
	- Creazione di scenari di test basati sui requisiti funzionali e non funzionali
	- Identificazione delle condizioni iniziali, dei dati di input e dei risultati attesi

3. **Preparazione dell'ambiente di test**:
	- Configurazione degli ambienti (hardware, software, reti)
	- Installazione delle versioni del software da testare

4. **Esecuzione dei test**:
	- Esecuzione dei casi di test progettati
	- Registrazione dei risultati (successo o fallimento) e documentazione delle anomalie

5. **Analisi dei risultati**:
	- Confronto tra i risultati ottenuti e quelli attesi
	- Identificazione e classificazione dei difetti

6. **Risoluzione dei problemi**.
	- Collaborazione con il team di sviluppo per risolvere i difetti identificati
	- Verifica delle correzioni mediante retesting

7. **Test di regressione**:
	- Assicurarsi che le modifiche al codice non abbiano introdotto nuovi errori

8. **Valutazione finale e report**:
	- Verifica se il prodotto soddisfa i criteri di accettazione
	- Redazione di un report con le conclusioni del testing

