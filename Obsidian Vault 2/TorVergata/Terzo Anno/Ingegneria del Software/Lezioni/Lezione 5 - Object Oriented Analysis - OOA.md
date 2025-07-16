#Software 

- La fase di *OOA* definisce, secondo un approccio ad oggetti, *COSA* un prodotto software deve fare (mentre la fase di *OOD* definisce, sempre secondo un approccio ad oggetti, *COME* un prodotto software deve fare quanto specificato in fase di OOA)
- OOA e OOD devono fornire, ciascuno dal proprio punto di vista, una *rappresentazione corretta, completa e consistente*:
	- degli aspetti statici e strutturali relativi ai dati (*modello dei dati*)
	- degli aspetti funzionali del sistema (*modello comportamentale*)
	- degli aspetti di "controllo" e di come le funzioni del modello comportamentale modificano i dati introdotti nel modello dei dati (*modello dinamico*)


#### Metodi di OOA
- Un *metodo di OOA* definisce l'insieme di procedure, tecniche e strumenti per un approccio sistematico alla gestione e allo sviluppo della fase di OOA
- L'*input* di un metodo di OOA è costituito dall'*insieme dei requisiti utente* (contenuti nel documenti di analisi dei requisiti)
- L'*output* di un metodo di OOA è costituito dall'*insieme dei modelli del sistema* che definiscono la specifica del prodotto software 
- I metodi di OOA fanno principalmente uso di *notazioni visuali* (diagrammi), ma possono essere affiancati da metodi tradizionali per la definizione di requisiti di sistema di tipo testuale
- Lo sviluppo dei modello di OOA *non è un processo sequenziale* (prima modello dei dati, poi modello comportamentale, infine modello dinamico)
- La costruzione dei modelli avviene in *parallelo*, e ciascun modello fornisce informazioni utili per gli altri modelli
- I metodi di OOA fanno uso di un *approccio iterativo*, con aggiunta di dettagli per raffinamenti successivi (iterazioni)


#### Alcuni metodi di OOA (e OOD)
- *Catalysis*: metodo OO particolarmente indicato per lo sviluppo di sistemi software a componenti distribuiti
- *Objectory*: metodo che fonda lo sviluppo di prodotti software ad oggetti sull'individuazione dei casi d'uso utente
- *Shlaer/Mellor*: metodo OO particolarmente indicato per lo sviluppo di sistemi software real-time
- *OMT (Object Modeling Technique)*: metodo basato su tecniche di modellazione del software iterative. Pone in particolare risalto la fase di OOA
- *Booch*: metodo basato su tecniche di modellazione del software iterative. Pone in particolare risalto la fase di OOD
- *Fusion*: Rappresenta il primo tentativo di standardizzazione per lo sviluppo di software orientato agli oggetti. Si basa sulla fusione dei metodi OMT e Booch


#### Modello dei dati
- Rappresenta da un *punto di vista statico e strutturale* l'organizzazione logica dei dati da elaborare
- Le strutture dati sono definite mediante lo *stato degli oggetti*, che viene determinato dal valore assegnato ad attributi e associazioni
- Il modello dei dati viene specificato mediante il formalismo dei *class diagram* che permette di definire:
	- classi
	- attributi di ciascuna classe
	- operazioni di ciascuna classe
	- associazione tra classi

- Il modello dei dati è di fondamentale importanza, visto che, secondo l'approccio ad oggetti, un sistema software è costituito da un insieme di *oggetti (classificati) che collaborano*
- Il modello dei dati viene costruito in modo *iterativo* ed *incrementale*
- Si tratta di un processo *creativo*, in cui giocano un ruolo importante sia l'esperienza dell'analista che la comprensione del dominio applicativo
- Durante la fase iniziale di costruzione del modello dei dati occorre concentrarsi sulle cosiddette *entity classes*, ovvero quelle classi che definiscono il dominio applicativo e che sono rilevanti per il sistema
- Le *control classes* (che gestiscono la "logica" del sistema) e *boundary classes* (che rappresentano l'interfaccia utente) vengono introdotte successivamente usando le informazioni del modello comportamentale
- Le *operazioni* di ciascuna classe vengono identificate a partire dal modello comportamentale, per cui vengono inizialmente trascurate


#### [[Approcci per l'identificazione delle classi]]

#### [[Identificazione delle associazioni]]

#### [[Modello comportamentale]]

#### Diagrammi di iterazione
Sequence diagram
- Descrive lo *scambio di messaggi tra oggetti in ordine temporale*
- Usato principalmente in *fase di OOA*

Collaboration diagram
- Descrive lo *scambio di messaggi tra oggetti mediante relazioni* tra gli oggetti stessi
- Usato principalmente in *fase di OOD*

Sequence diagram e collaboration diagram permettono di *identificare le operazioni* delle classi nel class diagram 

Sequence diagram e collaboration diagram sono *rappresentazioni equivalenti* e possono essere generati in modo automatico l'uno dall'altro



#### Specifica di sequence diagram
- Le *attività* dell'activity diagram vengono mappate come *messaggi* (di tipo "richiesta esecuzione attività") in un sequence diagram
- Un messaggio può rappresentare:
	- Un *signal*
		- Denota una *chiamata di tipo asincrono*
		- L'oggetto mittente *continua l'esecuzione* dopo aver inviato il messaggio asincrono

	- Una *call*
		- Denota una *chiamata di tipo sincrono*
		- L'oggetto mittente *blocca l'esecuzione* dopo aver inviato il messaggio sincrono, in attesa della risposta da parte dell'oggetto destinatario (che può o meno contenere valori di ritorno)


#### Interfaccia pubblica di classe
- Definisce l'insieme di operazioni che la classe mette a disposizione delle altre classi
- Durante la fase di *OOA*, si determina la *signature* dell'operazione, che consiste di:
	- Nome dell'operazione
	- Lista degli argomenti formali
	- Tipo di ritorno

- Durante la fase di *OOD*, si definisce l'algoritmo che implementa l'operazione
- Un'operazione può avere:
	- Instance scope
	- Class (static) scope
		- rappresenta con un carattere $ che precede il nome dell'operazione
		- agisce su class object (classi con attributi static)


#### Identificazione delle operazioni
Dai *sequence diagram*
- Ogni *messaggio* inviato ad un oggetto identifica un *metodo* della classe a cui appartiene tale oggetto

Usando criteri aggiuntivi, come ad esempio:
- Il *criterio CRUD*, secondo cui ogni oggetto deve supportare le seguenti operazioni primitive (*CRUD operations*):
	- *Create* (una nuova istanza)
	- *Read* (lo stato di un oggetto)
	- *Update* (lo stato di un oggetto)
	- *Delete* (l'oggetto stesso)


#### Modello dinamico
- Rappresenta il comportamento dinamico degli oggetti di una singola classe, in termini di *stati* possibili ed *eventi* e *condizioni* che originano *transizioni* di stato (assieme alle eventuali *azioni* da svolgere a seguito dell'evento verificatosi)
- Fa uso del formalismo *State Diagrams*

![[Pasted image 20241127165807.png | 500]]

- Viene costruito per ogni *classe di controllo* (per le quali è interessante descrivere il comportamento dinamico)
- Usato principalmente per *applicazioni scientifiche e real-time* (meno frequentemente nello sviluppo di applicazioni gestionali)


#### Gestione della complessità nei modelli di OOA
- Nella fase di OOA per sistemi software di grandi dimensioni occorre gestire in modo opportuno l'intrinseca *complessità* dei modelli
- Le associazioni tra classi nel modello dei dati formano complesse *reti di interconnessione*, in cui i cammini di comunicazione crescono in modo esponenziale con l'aggiunta di nuove classi
- L'introduzione di *gerarchie di classi* permette di ridurre tale complessità da esponenziale a polinomiale, grazie all'introduzione di opportuni *strati di classi* che vincolano la comunicazione tra classi appartenenti allo stesso strato o strati adiacenti


#### UML Package
- L'UML fornisce la notazione di *package* per rappresentare un gruppo di classi o di altri elementi
- I package possono essere *annidati* (il package esterno ha accesso ad ogni classi contenuta all'interno dei package in esso annidati)
- Una classe può *appartenere* ad un solo package, ma può comunicare con classi appartenenti ad altri package
- La comunicazione tra classi appartenenti a package differenti viene controllata mediante dichiarazione di *visibilità* (private, protected, o public) delle classi all'interno dei package


#### Package diagram
- In UML non esiste il concetto di *package diagram*
- I package possono essere creati all'interno di:
	- *Class diagram*
	- *Use case diagram*

- Si possono specificare due tipi di relazioni tra package:
	- *Generalization*
		-implica anche dependency

	- *Dependency*
	-Usage dependency, access dependency, visibility dependency


#### Approccio BCE
- *Boundary package (Bce)*
	- Descrive classi i cui oggetti gestiscono l'interfaccia tra un attore ed il sistema
	- Le classi catturano una porzione dello stato del sistema e la presentano all'utente in forma visuale

- *Control package (bCe)*
	- Descrive classi i cui oggetti intercettano l'input dell'utente e controllano l'esecuzione di uno scenario di funzionamento del sistema
	- Le claassi rappresentano azioni ed attività di uno use case

- *Entity package (bcE)*
	- Descrive classi i cui oggetti gestiscono l'accesso alle entità fondamentali del sistema
	- Le classi corrispondono alle strutture dati gestite dal sistema

#### [[OOA - Esercizi]]
