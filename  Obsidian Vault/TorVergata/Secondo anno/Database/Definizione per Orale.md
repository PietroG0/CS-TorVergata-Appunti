#Database 

- Modello dei dati = Insieme di costrutti utilizzati per organizzare i dati di interesse. Componente fondamentale: meccanismi di strutturazione (o costruttori di tipo). Come nei linguaggi di programmazione esistono meccanismi che permettono di definire tipi di dato. Es. Modello relazionale prevede il costruttore relazione
	- Modello logico = utilizzato nei DBMS esistenti per l'organizzazione dei dati, utilizzati dai programmi e indipendenti dalle strutture fisiche
	- Modello concettuale = permettono di rappresentare i dati in modo indipendente da ogni sistema e dal modello logico su cui è basato. Cercano di descrivere i concetti del mondo reale, sono utilizzati nelle fasi preliminari di progettazione
	1) Modello concettuale: rappresenta la realtà dei dati e le relazioni tra essi attraverso uno schema
	2) Modello logico: descrive il modo attraverso il quale i dati sono organizzati negli archivi del calcolatore
	3) Modello fisico: descrive come i dati sono registrati nelle memorie di massa


- Modello Entità Relazioni ER = E' uno strumento per analizzare le caratteristiche di una realtà in modo indipendente dagli eventi che in essa accadono, cioè per costruire un modello concettuale dei dati indipendente dalle applicazioni
	- Entità = insieme di oggetti simili, dati dello stesso tipo o con caratteristiche simili, raccolti insieme. Statici e Dinamici.
		- Entità che non hanno una chiave primaria e devono essere associate ad un'altra entità per essere completamente significative prendono il nome di entità deboli
	- Relazione = Collegamento logico tra due o più entità. 
		- Le relazioni tra un'entità e se stessa si dicono ricorsive o isA
	- Cardinalità = assegnazione di dimensionamento tra entità
	- Chiave = Campo o campi identificativi di una entità o relazione
	- Attributi = Campi informativi e non identificativi di una entità o relazione
		- Alcune caratteristiche che descrivono il dominio: Formato (tipi di valore che assume), Dimensione (quantità max di caratteri o cifre), Opzionalità (possibilità di non essere sempre valorizzato)
	- Generalizzazione = Legame logico tra una entità più generale (padre) e le entità figlie

- Modello ER Proprietà
	- Ogni entità deve avere una chiave primaria
	- L'attributo chiave primaria non può essere opzionale
	- La chieve primaria non può avere valori ripetuti

- Modello ER Ereditarietà
	- Ogni proprietà dell'entità padre è anche una proprietà della sottoentità, e non si riporta esplicitamente nel diagramma. L'entità figlia può avere ovviamente ulteriori proprietà. L'associazione IS-A si eredita, pertanto IS-A è transitiva

- Modello ER Generalizzazione
	- L'entità padre può generalizzare diverse sottoentità rispetto ad un unico criterio. In questo caso si parla di generalizzazione. Nella generalizzazione, le sottoentità hanno insiemi di istanze disgiunti a coppie
	- Il principio di ereditarietà vale anche per le generalizzazioni:
		- Ogni proprietà dell'entità è padre è anche una proprietà della sottoentità, e non si riporta esplicitamente nel diagramma

- UML - Diagramma delle Classi
	- Il diagramma delle classi è un grafo che descrive i tipi degli oggetti in un sistema, le relazioni statiche tra di essi, gli attributi e le operazioni di una classe, ed i vincoli sulle relazioni
	- Una classe è rappresentata da un rettangolo scomposto in tre parti: 1) Nome della classe, 2) Attributi della classe, 3) Operazioni della classe

- Attributi in UML
	- Un attributo modella una proprietà locale della classe ed è caratterizzato da un nome e dal tipo dei valori associati
	- Ogni attributo di una classe stabilisce una proprietà locale valida per tutte le istanze della classe

#### Progettazione Logica
Il prodotto della progettazione logica è uno schema logico che rappresenta le informazioni contenute nello schema ER in modo corretto ed efficiente.
Richiede non solo una traduzione da uno schema all'altro ma anche una ristrutturazione dello schema
- Analisi delle prestazioni su schemi ER
	- Costo delle operazioni
	- Occupazione di memoria
	- Per fare questa analisi è necessario conoscere il Volume dei dati e le caratteristiche delle operazioni

- Ristrutturazione di schemi ER, può essere divisa in più passi successivi
	1) Analisi delle ridondanze: si decide se mantenere o eliminare le eventuali ridondanze
	2) Eliminazione delle generalizzazioni: si sostituiscono le generalizzazioni con costrutti del modello logico utilizzato
	3) Partizionamento/accorpamento di entità e associazioni: si decide se raggruppare più concetti o partizionare in più concetti i concetti dello schema ER
	4) Scelta degli identificatori primari

1) Analisi delle ridondanze
	- Vantaggi = semplificazione delle interrogazioni, Svantaggi = appesantimento degli aggiornamenti e maggiore occupazione di spazio
	- Le ridondanze di uno schema ER nascono quando un concetto può essere derivato da altri
	- Eliminazione delle gerarchie: 1) Accorpamento delle figlie nel padre, 2) Accorpamento del padre nelle figlie, 3) Sostituzione della generalizzazione con associazioni

3) Partizionamento/accorpamento di concetti


- Vincoli: Proprietà che deve essere soddisfatta dalle istanze che rappresentano informazioni corrette per l'applicazione. Un vincolo è una funzione booleana che associa ad ogni istanza il valore vero o falso 
- Vincoli Intrarelazionali e interelazionali 
- Vincoli di Ennupla: Esprimono condizioni sui valori di ciascuna ennupla, indipendentemente dalle altre ennuple 

#### Transazioni
Parte di programma caratterizzato da un'inizio (begin-transaction) e una fine (end-transaction) al cui interno deve essere eseguito una e una sola volta uno di questi 2 comandi:
1) commit work (per terminare correttamente)
2) rollback work (per abortire la transazione)

Un sistema transazionale è in grado di definire ed eseguire transazioni per conto di un certo numero di applicazioni concorrenti

Il concetto di transazione = un'unità di elaborazione che gode delle proprietà "ACIDE":
1) Atomicità, unico
2) Consistenza, rispetta i vincoli di integrità
3) Isolamento, la transazione non risente degli effetti delle altre transazioni
4) Durata (Persistenza), gli effetti di una transazione, andata in commit, non vanno perduti

Il log è un file sequenziale gestito dal controllore dell'affidabilità, scritto in memoria stabile. "Diario di bordo" : riporta tutte le operazioni in ordine. Possiede delle operazioni delle transazioni e record di sistema


- Gestore dell'affidabilità = Gestisce l'esecuzione dei comandi transazionali: start, commit e rollback, Assicura atomicità e durabilità e utilizza il log

- Checkpoint e dump servono ad evitare che la ricostruzione debba partire dall'inizio 

- Undo = ricostruire before state
- Redo = ricostruire after state

- Dump = backup dei dati 

- Esito di una transazione = determinato quando viene scritto il record di commit nel log, guasto prima = undo, guasto dopo = redo

- Modalità immediata = 2 undo, Modalità differita = 2 redo, Modalità mista

- Guasti soft = errori di programma, crash del sistema, caduta di tensione, warm restart Guasti hard sui dispositivi di mmeoria secondaria, cold restart

- Indici = è possibile definire strutture fisiche che permettano di facilitare l'accesso ai dati

- Dipendenze Funzionali = si ha dipendenza funzionale tra attributi quando il valore di un insieme di attributi A determina un singolo valore dell'attributo B

