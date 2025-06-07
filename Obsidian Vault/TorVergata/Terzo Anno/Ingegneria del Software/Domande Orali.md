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
https://refactoring.guru/design-patterns/factory-method

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

