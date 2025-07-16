- Costituito da *9 step*
- Basato sul concetto di *step-wise refinement*

###### SSA - Step 1
- Usa il documento dei requisiti (o il prototipo) per:
	- Identificare flussi di dati
	- Identificare la fonte e la destinazione dei dati 
	- Identificare processi che trasformano i dati

- Perfezionare il DFD aggiungendo nuovi flussi di dati o aggiungendo dettagli ai flussi di dati già esistenti


###### SSA - Step 2
- Utilizzare l'analisi costi-benefici per decidere quali sezioni del DFD automatizzare
- Decidere come computerizzare:
	- Operazioni di batch
	- Elaborazione on-line

- Esempi:
	- Automatizzare il posizionamento degli ordini in batch
	- Automatizzare la convalida degli ordini online

- I prossimi 3 steps sono il graduale affinamento dei flussi di dati, dei processi e degli archivi di dati


###### SSA - Step 3
- Decidere quali elementi di dati devono entrare nei vari flussi di dati
- Esempio: Il flusso di dati degli ordini può essere definito come prosegue:
	- order_identification
	- customer_details
	- package_details

- Infine, definire ogni flusso come segue:
	- order_identification è un intero a 12 cifre
	- customer_details consists of customer_name, customer_address, etc.


###### SSA - Step 4
Esempio: costruire un albero di decisione

![[Pasted image 20241118114227.png | 500]]



###### SSA - Step 5
- Definire i contenuti esatti di ogni store e la sua rappresentazione 
- Definire il livello di accesso con l'uso di data-immediate-access diagram (DIAD)

![[Pasted image 20241118114427.png | 600]]


###### SSA - Step 6
Esempi:
- Per ogni file, specificare: il nome del file, l'organizzazione (sequenziale, indicizzata, ecc.), spazio medio, records, fino al livello del campo
- Se un DBMS è stato usato, allora le informazioni rilevanti per ogni tabella sono specificate



###### SSA- Step 7
- La forma degli input deve essere specificata (componenti e disposizione)
- L'output dello schermo deve essere determinata
- L'output printato deve essere specificato 



###### SSA - Step 8
Computare:
- Volume dell'input (giornalmente o ogni ora)
- Frequenza di ogni report printato e la sua scadenza
- Dimensione e numero di record che devono passare tra la CPU e la memoria di massa
- Grandezza di ogni file



###### SSA - Step 9
Dalle informazioni sul dimensionamento specificate al punto 8, determinare:
- Requisiti archiviazione di massa
- Requisiti archiviazione di massa per il backup
- Caratteristiche dei terminali degli utenti
- Caratteristiche dei dispositivi di output
- Adeguatezza dell'hardware esistente
- Costo dell'hardware da comprare


###### SSA Output
- Lo step 9 è l'ultimo step dell'SSA
- Dopo esser stato approvato dal cliente, i documenti della specifica risultanti sono consegnati al team di design, e il processo software continua
- Inconvenienti:
	- SSA non può essere usato per determinare i tempi di risposta
	- La grandezza e il timing della CPU non può essere determinata con un grado di accuratezza

