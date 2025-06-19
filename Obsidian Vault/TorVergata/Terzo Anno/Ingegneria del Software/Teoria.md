#Software 

#### Modelli

##### Modello Build & Fix
Il modello Build & Fix è uno dei modelli di sviluppo software più semplici e primitivi, speso adottato in contesti non professionali o da sviluppatori alle prime armi. In questo approccio, il software viene costruito senza una vera analisi dei requisiti nè una progettazione preliminare, e viene continuamente corretto e modificato man mano che emergono proglemi e richieste.

Consiste in un semplice ciclo:
1. **Build**: Si scrive il codice in base a una vaga idea di cosa debba fare il programma
2. **Fix**: Quando emergono problemi o richieste, si corregge modificando direttamente il codice
3. Si ripete il ciclo finchè il cliente non si dichiara soddisfatto


##### Modello a cascata (Waterfall)
Il modello a cascata è uno dei più classici e storici modelli di sviluppo del software. È stato uno dei primi ad essere formalizzato e si basa su un approccio sequenzale e lineare: ogni fase del progetto deve essere completata prima di passare alla successiva. Dopo ogni fase c'è la verifica, si tratta di controllare che il processo di sviluppo sia stato eseguito correttamente e che gli artefatti prodotti siano conformi alle specifiche. Oltre alla fase di verification c'è la fase di validation nella quale si verifica che il prodotto soddisfi effettivamente i bisogni dell'utente finale.


##### Modello a prototipi
Il modello di Rapid Prototyping è un approccio allo sviluppo del software che mette al centro la costruzione veloce di prototipi di sistema, con lo scopo di comprendere meglio i requisiti, validare le funzionalità con l'utente e ridurre il rischio di incomprensioni

Un prototipo è una versione semplificata e spesso incompleta del sistema finale.
Può essere:
- Interattivo ma non funzionante (solo interfaccia grafica)
- Funzionante in parte (solo alcune funzionalità)
- Creato con tecnologie diverse da quelle definitive


| Vantaggi                                                                                                                                  | Svantaggi                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Aiuta a chiarire meglio i requisiti, soprattutto quando inizialmente sono vaghi o incompleti                                              | Rischio di confondere il prototipo<br>con il prodotto |
| Favorisce feedback e correzioni rapide, infatti il cliente<br>può provare il prototipo e dare indicazioni prima <br>dello sviluppo finale | Costi e tempi possono aumentare<br>se gestito male    |
| Coinvolge attivamente il cliente                                                                                                          | Codice del prototipo spesso poco<br>riutilizzabile    |
| Migliora usabilità e soddisfazione finale                                                                                                 | Non adatto a progetti critici o altamente regolati    |


##### Modello iterativo o incrementale
Il modello incrementale è un approccio allo sviluppo del software che prevede la realizzazione del sistema per gradi, cioè per incrementi (build) successivi. Ogni incremento aggiunge nuove funzionalità al sistema, partendo da una base semplice che cresce man mano fino a diventare il prodotto completo.

A differenza del modello a cascata, dove si sviluppa tutto in un'unica volta, il modello incrementale prevede un ciclo ripetuto di:
1. Analisi dei requisiti (parziali)
2. Progettazione
3. Implementazione
4. Test
5. Consegna di un incremento (build) funzionante

Dopo il rilascio di una build, si raccolgono feedback e si passa allo sviluppo del successivo. E' versatile, adattabile e orientato al feedback (simile a rapid prototyping)


##### Modello a spirale
Il modello a spirale è un modello pensato per interagire i punti di forza del modello a cascata e dello sviluppo iterativo, mettendo però al centro un elemento spesso trascurato: la gestione del rischio.

Ogni ciclo della spirale è composto da 4 fasi fondamentali:
1. **Pianificazione**: si definiscono obiettivi, funzionalità da sviluppare, risorse necessarie
2. **Analisi dei rischi**: si individuano i rischi tecnici o gestionali, si valutano alternative e si pianificano soluzioni
3. **Sviluppo e verifica**: si implementa e si testa un prototipo o una parte del sistema
4. **Revisione e feedback**: si valuta quanto prodotto, si ottiene feedback dal cliente e si decide se proseguire con un nuovo giro

Ogni ciclo porta a una versione più raffinata del software, fino a giungere alla versione finale.


##### Risk Analysis
L'analisi dei rischi è un processo fondamentale per identificare, valutare e gestire i possibili problemi o incertezze che potrebbero influenzare negativamente il successo di un progetto. In questo contesto, l'analisi dei rischi aiuta a prevenire problemi futuri, ottimizzare i costi e garantire che il progetto rimanga nei limiti previsti di tempo e qualità.

I passaggi fondamentali sono:
1. **Identificazione dei rischi**: Si riflette su tutte le possibili fonti di rischio: errori tecnici, mancanza di competenze, costi imprevisti, scadenze troppo strette, strumenti inadeguati, problemi organizzativi o esterni
2. **Valutazione**: Per ciascun rischio si analizza la probabilità che si verifichi (alta, media, bassa) e l'impatto che avrebbe sul progetto (grave, moderato, trascurabile)
3. **Pianificazione**: Si stabiliscono azioni e contromisure per gestire i rischi più rilevanti
4. **Monitoraggio**: Durante il progetto, i rischi vengono tenuti sotto controllo e aggiornati: alcuni possono scomparire, altri nuovi possono emergere

Senza un'analisi del rischio, un progetto può fallire improvvisamente a causa di problemi prevedibili. Con una buona risk analysis, invece, il team è preparato: anche se il rischio si manifesta, sa cosa fare e come reagire, riducendo danni, costi e ritardi.


##### Modello Microsoft
La Microsoft ha dovuto affrontare problemi di:
- **Incremento della qualità** dei prodotti software
- **Riduzione di tempi e costi** di sviluppo

Per risolvere questi problemi si è adottato un processo che allo stesso tempo è **iterativo**, **incrementale**, **concorrente**, e che permette di esaltare la creatività delle persone coinvolte nello sviluppo software. L'approccio usato attualmente dalla Microsoft è noto come **syncronize-and-stabilize**. Con questo modello otteniamo un ciclo di sviluppo a 3 fasi:
1. **Planning**: definisce la visione del prodotto, le specifiche e la pianificazione
2. **Development**: sviluppo di funzionalità in 3-4 sottoprogetti sequenziali, ognuno dei quali si traduce in un rilascio "milestone"
3. **Stabilizzazione**: test interni ed esterni completi, prodotto finale e spedizione

Le **caratteristiche principali** sono:
- Sviluppo software e testing eseguiti in parallelo
- Features prioritizzate e integrate in 3-4 sottoprogetti cardini
- Continuo feedback dei customer durante il processo di sviluppo


##### Modello Agile
Il modello Agile non è un singolo modello di sviluppo, ma un insieme di principi e valori che guidano un modo di lavorare flessibile, collaborativo e iterativo. E' nato come risposta ai limiti dei modelli tradizionali, che spesso si rivelano troppo rigidi in contesti dove le esigenze cambiano rapidamente o i requisiti non sono completamente chiari fin dall'inizio.

Alla base del modello Agile c'è il manifesto Agile che valorizza:
- Le persone e le interazione più dei processi e degli strumenti
- Il software funzionante più della documentazione esaustiva
- La collaborazione col cliente più della negoziazione del contratto
- La risposta al cambiamento più della pianificazione rigida


##### Scrum
Scrum è uno dei framework più popolari all'interno dell'approccio Agile. E' una struttura organizzativa leggera e iterativa, pensata per gestire progetti complessi in modo flessibile, trasparente e collaborativo. Si basa sull'idea di sviluppare software a piccoli passi (sprint) e di apprendere costantemente da ciò che si è fatto per migliorare nel tempo.

Un progetto Scrum è diviso in **Sprint**, ovvero cicli di sviluppo a durata fissa (1-4 settimane), alla fine dei quali si rilascia un prodotto funzionante e potenzialmente consegnabile. Durante ogni Sprint, si eseguono le seguenti attività:
1. **Sprint Planning**: si pianifica il lavoro da svolgere nello sprint
2. **Daily Scrum**: breve riunione giornaliera per allineare i team
3. **Sprint Review**: si mostra il lavoro svolto dal cliente
4. **Sprint Retroprospective**: il team riflette su come migliorare il proprio processo

Scrum definisce 3 ruoli principali, ognuno con responsabilità precise:
- **Product Owner**: definisce le priorità e mantiene aggiornato l'elenco ordinato delle funzionalità da implementare
- **Scrum Master**: protegge il team da interferenze, rimuove ostacoli e fa rispettare le regole Scrum
- **Dev Team**: gruppo di sviluppatori che lavora agli incrementi

I principali artifatti Scrum sono:
- **Product Backlog**: lista prioritaria delle funzionalità richieste
- **Sprint Backlog**: lista delle attività selezionate per lo sprint corrente
- **Incremento**: il prodotto parzialmente completo e funzionante al termine dello sprint



#### Software Requiments: funzionali, non funzionali e di dominio
I requisiti software sono la descrizione dei servizi che un sistema software deve fornire, insieme ai vincoli da rispettare sia in fase di sviluppo che durante la fase di operatività del software. Esistono due categorie di requisiti SW:
- **Requisiti utente**: Descrizione in linguaggio naturale dei servizi che il sistema deve fornire e dei vincoli operativi
- **Requisiti di sistema**: Specificati mediante la stesura di un documento strutturato che descrive in modo dettagliato i servizi che il sistema SW deve fornire. Ci sono 3 categorie:

##### Requisiti Funzionali
I requisiti funzionali descrivono le funzionalità specifiche che il sistema deve offire. Essi definiscono le azioni che il sistema deve compiere in risposta a determinati input o situazioni

##### Requisiti non Funzionali
I requisiti non funzionali specificano le qualità e le caratteristiche che il sistema deve possedere, senza riferirsi a funzionalità specifiche. Essi influenzano l'esperienza dell'utente e le prestazioni del sistema. Per esempio:
- **Prestazioni**: Tempo di risposta, throuthput, utilizzo delle risorse
- **Sicurezza**: Protezione dei dati, autenticazione, autorizzazione
- **Usabilità**: Facilità d'uso, accessibilità, design dell'interfaccia cliente

##### Requisiti di Dominio
Un requisito di dominio descrive un comportamento, un vincolo o una regola che non è universale per tutti i software, ma che vale solo in un certo contesto di applicazione (dominio). Spesso questi requisiti non sono espressi direttamente dall'utente, perchè sono dati per scontati da chi opera nel settore, ma sono comunque essenziali affinchè il sistema sia accettabile, corretto e conforme alle aspettative.

Ignorare un requisito di dominio può rendere un sistema non conforme alla legge, inutilizzabile, o scartato dagli utenti esperti del settore. Per questo, durante l'analisi dei requisiti, è fondamentale coinvolgere esperti del dominio, come avvocati, medici, funzionari pubblici, ecc...


| Tipo di requisito | Focus                                                                 |
| ----------------- | --------------------------------------------------------------------- |
| Funzionali        | Cosa il sistema fa (comportamento)                                    |
| Non funzionali    | Come il sistema si comporta (prestazioni, sicurezza...)               |
| Di dominio        | **Requisiti specifici del settore**, spesso imposti da regole esterne |



#### OOA (Object Oriented Analysis) e OOD (Object Oriented Analisys)
- La fase di OOA definisce, secondo un approccio ad oggetti, **COSA** un prodotto software deve fare
- La fase di OOD definisce, secondo un approccio ad oggetti, **COME** un prodotto software deve fare quanto specificato in fase di OOA

Devono fornire, ciascuno dal proprio punto di vista, una rappresentazione corretta, completa e consistente:
- Struttura dei dati - **modello di dati**
- Aspetti funzionali del sistema - **modello comportamentale**
- Come le funzioni modificano i dati - **modello dinamico**


##### Notazione UML
Ciascun metodo di OOA (OOD) fa uso di una propria notazione per la rappresentazione di modelli di sistema. La notazione scelta è il linguaggio UML (Unified Modeling Language), è uno standard per la descrizione di sistemi software. 

Si compone di 9 formalismi di base e di un insieme di estensioni. UML è un linguaggio di descrizione, non è un metodo nè definisce un processo
1. **Use Case Diagram**: Evidenziano la modalità con cui gli utenti utilizzano il sistema. Possono essere usati come supporto per la definizione dei requisiti utente.
2. **Class Diagram**: Consentono di rappresentare le classi con le relative proprietà e le associazioni che le legano
3. **State Diagram**: Rappresentano il comportamento dinamico dei singoli oggetti di una classe in termini di stati possibili e transizioni di stato per effetto di eventi
4. **Acrivity Diagram**: Sono particolari state diagram, in cui gli stati rappresentati sono azioni in corso di esecuzione
5. **Sequence Diagram**: Evidenziano le interazioni che oggetti di classi diverse si scambiano nell'ambito di un determinato caso d'uso, ordinate in sequenza temporale
6. **Collaboration Diagram**: Descrive le interazioni tra oggetti diversi, evidenzianto le relazioni esistenti tra le singole istanze
7. **Object Diagram**: Permettono di rappresentare gli oggetti e le relazioni tra essi nell'ambito di un determinato caso d'uso
8. **Component Diagram**: Evidenziano la strutturazione e le dipendenze esistenti tra componenti software
9. **Deployment Diagram**: Evidenziano le configurazioni dei nodi collaborativi di un sistema real-time e i componenti, processi ed oggetti assegnati a tali nodi


##### OOA - Modello dei dati
Rappresenta da un punto di vista statico e strutturale l'organizzazione logica dei dati da elaborare. Il modello dei dati viene specificato mediante il formalismo dei class diagram permettendo di definire classi, attributi, operazioni e associzioni tra classi. In questa fase si concentra sulla definizione delle cosidette entity classes ovvero quelle classi che definiscono il dominio applicativo e che sono rilevanti per il sistema. In seguito vengono introdotte le control classes che gestiscono la logica del sistema e le boundary classes che rappresentano l'interfaccia utente.

**Alcune regole**:
- Ciascuna classe deve prevedere un insieme di istanze (oggetti), le cosidette singleton classes (classi per le quali si ha un'unica istanza) non sono di norma classificabili come entity classes
- Ciascuna classe deve avere un nome significativo specifico del dominio applicativo. Adottare una convenzione standard

*Associazioni*:
- Gli attributi che non sono primitivi, quindi che si riferiscono ad un altra classe devono essere un associazione
- Ogni associazione ternaria dovrebbe essere rimpiazzata con un ciclo di associazioni binarie
- Assegnare nomi alle associazioni usando la stessa convenzione per gli attributi
- Assegnare nomi di ruole alle estremità
- Determinare la molteplicità delle associazioni

*Aggregazione*:
Rappresenta una relazione di tipo "whole-part" (contenimento) tra una classe composta e l'insieme di una o più classi componenti, senza possederlo completamente. La "parte" può esistere indipendentemente dal "tutto"

- L'oggetto contenuto è stato referenziato, non controllato o creato dal contenitore
- Diamante vuoto in UML
- Corrisponde a "has" e "member"

Una classe "Università" può avere più "Studenti". Gli studenti non appartengono esclusivamente a quell'Università nel contesto del modello (potrebbero cambiare università o esistere indipendentemente da essa)

*Composizione*:
È una relazione forte di "whole-part", in cui l' oggetto contenitore possiede completamente l'oggetto contenuto. La "parte" non può esistere senza il "tutto".

- L'ogetto contenuto è creato, gestito e distrutto assieme al contenitore.
 - Diamante pieno in UML.
- Corrisponde a "owns" e "exclusive-owns".

Una classe "Casa" può avere oggetti "Stanza". Le stanze non hanno senso diesistere al di fuori della casa. Se la casa viene distrutta, anche le stanze spariscono.

*Ereditarietà*:
Usata per rappresentare la condivisione di attributi ed operazioni tra classi. Le caratteristiche comuni sono modellate in una classe più generica ( superclasse ), che viene specializzata nell’insieme di sottoclassi . Una sottoclasse eredita attributi ed operazioni della superclasse. Viene rappresentata in UML con una linea, che collega la sottoclasse con la superclasse, avente una freccia diretta verso la superclasse.


##### OOA - Modello Comportamentale
Rappresenta gli aspetti funzionali del sistema da un punto di vista operativo, evidenziando come gli oggetti collaborano ed interagiscono tra di loro. Fa uso di vari formalismi (use case diagram, activity diagram, sequence diagram, collaboration diagram)

###### Use Case
Un Use Case rappresenta un'interazione tra un attore (utente o sistema esterno) e il sistema, relativa a una funzionalità specifica. Durante la fase di OOA si concentra su **COSA** il sistema deve fare (vari scenari di funzionamento). Ci sono 4 tipi di relazioni
- **Associazione**: tra attore e caso d'uso
- **Include**: rappresenta una relazione obbligatoria tra due use case: uno include sempre l'altro durante la sua esecuzione. Si usa quando un comportamento è comune a più use case. Quando si vuole evitare duplicazioni. Quando si vuole modularizzare un comportamento ripetuto. Per esempio gli use case "Registra Utente" e "Recupera Password", entrambi includono "Inviare Email". Graficamente si rappresenta mediante una linea trateggiata con freccia vero il caso d'uso incluso.
- **Exclude**: rappresenta una relazione opzionale, cioè un caso d'uso può estendere un altro caso solo se una certa condizione è soddisfatta. Si usa quando un comportamento è facoltativo. Quando si vuole aggiungere funzionalità opzionali senza complicare il caso d'uso principale. Per esempio il caso d'uso generale "Inserire Risultato" -> extend "Segnalare Irregolarità", ovvero in alcuni casi particolari, durante l'inserimento del risultato, l'arbitro può decidere di segnalare un'irregolarità. Graficamente si rappresenta mediante una linea trateggiata con freccia verso il caso d'uso principale.
- **Generalizzazione**


###### Activity Diagram
Rappresenta a vari livelli di astrazione il flusso di esecuzione, sia sequenziale che concorrente, in una applicazione object-oriented. In fase di OOA, viene usato per rappresentare il flusso delle attività nella esecuzione di un caso d’uso. Si parte da un nodo iniziale (cerchio nero pieno) che identifica la partenza del flusso. Ogni attività è una fase del processo e viene rappresentata da un rettangolo. Le frecce che collegano le attività rappresentano l'ordine con cui avvengono. I nodi decisionali (rombi) permetteon di dirigere il flusso in base a condizioni. Infine, per idenficare la fine del flusso abbiamo un nodo finale (cercgio con un cerchio nero dentro).


###### Sequence e Collaboration Diagram
- I Sequence descrivono lo scambio di messaggi tra oggetti in ordine temporale, è usato principalmente in fase di OOA
- I collaboration descrivono lo scambio di messaggi tra oggetti mediante relazioni tra gli oggetti stessi, è usato in fase di OOD

Le attività dell'activity diagram vengono mappate come messaggi in un sequence diagram. Un messaggio può rappresentare:
- **Signal**: denota una chiamata di tipo asincrono, l'oggetto mittente continua l'esecuzione dopo aver inviato il messaggio asincrono
- **Call**: Denota una chiamata di tipo sincrono, l'oggetto mittente blocca la sua esecuzione in attesa di una risposta

Durante questa fase, si definiscono l'insieme di operazioni che la classe mette a disposizione, definendo l'interfaccia pubblica di classe, determinando per ogni operazione la sua *signature*, ovvero il nome, la lista degli argomento formali e il tipo di ritorno. Durante la fase di OOD si definisce l'algoritmo

Ogni messaggio inviato ad un oggetto identifica un metodo della classe a cui appartiene tale oggetto. Si possono usare criteri aggiuntivi, per esempio *CRUD*


##### OOA - Modello Dinamico
Rappresenta il comportamento dinamico degli oggetti di una singola classe, in termini di stati possibili ed eventi e condizioni che originano transizioni di stato. Fa uso del formalismo *state diagram*. Viene costruito per ogni classe di controllo ed è usato principalmente per le applicazioni scientifiche real-time.

L'approccio **BCE (Boundary - Control - Entity)** è una tecnica molto usata nell'analisi orientata agli oggetti, in particolare nella fase di OOA per organizzare logicamente le classi e le responsabilità in un sistema
- **Entità**: Sono le classi che rappresentano i dati e il comportamento persistente. Corrispondono agli elementi del dominio applicativo come *Utente*, *Ordine*, *Prodotto*
- **Boundary**: Sono le classi che gestiscono l'interazione tra il sistema e gli attori esterni, come utenti o sistemi terzi. Si occupano dell'input e dell'output
- **Control**: Sono le classi che coordinano il comportamento del sistema, gestendo il flusso di eventi fra boundary e entity. Contengono la logica applicativa o di business

L'approccio BCE ti guida nel progettare un sistema che sia pulito, modulare e comprensibile, distinguendo chiaramente tra chi fornisce i dati (boundary), chi li elabora (control) e chi li rappresenta in modo stabile (entity)


#### OOD Software Architectures
**OOD (Object-Oriented Design)** è una fase nello sviluppo del software che si concentra su come realizzare il software, trasformando i concetti analizzati in un'architettura sotware concreta

Un'architettura software è un insieme di decisioni strutturali e di linee guida che definiscono la forma generale di un sistema software: come è suddiviso, come comunicano le sue parti, e quali responsabilità ha ciascuna componente


##### OOD Architecture distribute (Distributed Software Systems)
