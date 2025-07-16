#Software 

>[!tip] Requisiti Software
>Descrizione dei servizi che un sistema software deve fornire, insieme ai vincoli da rispettare sia in fase di sviluppo che durante la fase di operatività del software

I requisiti vengono generati applicando un processo di *ingegneria dei requisiti*


#### Tipi di requisiti
- *Requisiti utente*
	- Descrizione in linguaggio naturale, con eventuale aggiunta di diagrammi, dei servizi che il sistema deve fornire e dei vincoli operativi 
	- Sono scritti per (e con) il ciente

- *Requisiti di sistema*
	- Specificati mediante la stesura di un documento strutturato che descrive in modo dettagliato i servizi che il sistema software deve fornire 
	- Il documenti risultante costituisce un "contratto" tra cliente e fornitore


#### Definizione dei termini
- *Cliente* (customer, client)
	- La persona od organizzare che paga per la fornitura di un prodotto software

- *Fornitore* (supplier, contractor)
	- La persona od organizzare che produce software per il cliente 

- *Utente finale* (end-user)
	- La persona che interagisce direttamente con il prodotto software. Non corrisponde necessariamente al cliente


#### Esempi di requisiti
- *Requisito utente*
	1. Il sistema software deve fornire un mezzo per rappresentare e visualizzare file esterni generati da altri tool

- *Requisito di sistema*
	1. L'utente deve avere la possibilità di definire il tipo dei file esterni
	2. Ad ogni tipo di file esterno deve essere associato il tool che lo ha generato
	3. Ogni tipo di file esterno deve essere rappresentato mediante una specifica icona sullo schermo
	4. L'utente deve avere la possibilità di definire l'icona che rappresenta il tipo di file esterno
	5. Quando l'utente seleziona un'icona che rappresenta un file esterno, deve poter essere eseguito il tool in grado di visualizzare il file

![[Pasted image 20241107132820.png | 600]]


#### Categorie di requisiti

*Requisiti funzionali*
Descrivono le funzionalità del sistema software, in termini di *servizi* che il sistema software deve fornire, di come il sistema software *reagisce* a specifici tipi di input e di come si *comporta* in situazioni particolari

*es.1* Il sistema software deve fornire un appropriato visualizzatore per i documenti memorizzati

*es.2*  L'utente deve essere in grado di effettuare ricerche 

*es.3*  Ad ogni nuovo ordine deve essere associato un identificatore unico (Order_ID)


*Requisiti non funzionali*
Descrivono le proprietà del sistema software in relazione a determinato servizi o funzioni e possono anche essere relativi al processo:
- Caratteristiche di *efficienza, affidabilità, safety*, ecc.
- Caratteristiche del *processo di sviluppo* (standard di processo, uso di ambienti CASE, linguaggi di programmazione, metodi di sviluppo, ecc.)
- Caratteristiche *esterne* (interoperabilità con sistemi di altre organizzazioni, vincoli legislativi, ecc.)

*es.1* Il tempo di risposta del sistema all'inserimento della password utente deve essere inferiore a 10 sec

*es.2* I documenti di progetto (deliverable) devono essere conformi allo standard XYZ-ABC-12345

*es.3* Il sistema software non deve rilasciare ai suoi operatori nessuna informazione personale relativa ai clienti, tranne nominativo e identificatore


*Requisiti di dominio*
Requisiti derivati dal dominio applicativo del sistema software piuttosto che da necessità dettate dagli utenti
- requisiti funzionali, nuovi o adattati, relativi al particolare dominio applicativo
- requisiti non funzionali, nuovi o adattati, relativi a standard esistenti o a procedure e regolamenti da applicare


#### Problemi con i requisiti software
- *Ambiguità*: requisiti interpretabili in modo differente
es.1 Specificare un tempo senza fornire il riferimento al fuso orario (in un applicazione che gestisce chiamate intercontinentali)

- *Incompletezza*: i requisiti non includono la descrizione di tutte le caratteristiche richieste
- *Inconsistenza*: conflitti o contraddizioni nella descrizione delle caratteristiche del sistema


#### Verificabilità dei requisiti
- I requisiti non funzionali espressi in modo generico dall'utente (es. il sistema software deve essere easy-to-use) possono risultare *non quantificabili* e *difficili da verificare*
- E' quindi necessario esprimere i requisiti non funzionali usando una *misura* determinata che permetta di *verificare quantitativamente* se il requisito verrà soddisfatto dal sistema software

![[Pasted image 20241107134149.png | 500]]


#### Requisiti utenti
- Descrivono requisiti funzionali e non funzionali, espressi in modo da risultare comprensibili agli utenti del sistema sprovvisti di conoscenze tecniche
- I requisiti utenti sono generalmente espressi in *linguaggio naturale*, tenendo in considerazione alcune linee guida
	- usare un formato standard per tutti i requisiti
	- usare il linguaggio naturale in modo consistente (es. uso di "*deve*" per requisiti necessari e "*dovrebbe*" per requisiti desiderabili)
	- evidenziare le parti fondamentali di un requisito 
	- evitare l'uso di termini tecnici


#### Il documento di analisi dei requisiti (o documento di specifica)
- Documento ufficiale che descrive in dettaglio le caratteristiche del sistema da sviluppare
- Include sia la *definizione* dei requisiti che la loro *specifica*
- Descrive *COSA* il sistema deve fornire (dominio del problema) e non *COME* il sistema deve essere sviluppato (dominio della soluzione)


 



