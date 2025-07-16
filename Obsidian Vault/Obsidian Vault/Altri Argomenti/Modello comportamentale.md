- Rappresenta gli aspetti funzionali del sistema da un *punto di vista operativo*, evidenziando come gli oggetti collaborano ed interagiscono al fine di offrire i servizi che il sistema mette a disposizione
- Fa uso di vari formalismi:
	- *Use case diagram* (per descrivere scenari di funzionamento)
	- *Activity diagram* (per descrivere il flusso di elaborazione)
	- *Sequence diagram* (per descrivere l'interazione tra gli oggetti)
	- *Collaboration diagram* (per descrivere l'interazione tra gli oggetti)

- Viene costruito in modo *iterativo* ed *incrementale*, usando le informazioni del *modello dei dati*, che a sua volta fa uso del modello comportamentale per identificare *operazioni* e classi aggiuntive (*control classes* e *boundary classes*)


#### Use Case Diagram
- Può essere sviluppato a *differenti livelli di astrazione* (sia in fase di OOA che OOD)
- Durante la fase di OOA, si concentra su *COSA* il sistema deve fare (scenari di funzionamento)
- Un caso d'uso rappresenta:
	- *Una funzionalità completa* (flusso principale, sottoflussi e alternative)
	- *Una funzionalitù visibile dall'esterno*
	- *Un comportamento ortogonale* (ogni use case viene eseguito in modo indipendente dagli altri)
	- *Una funzionalità originata da un attore del sistema* (una volta originato, il caso d'uso può interagire con altri attori)
	- *Una funzionalità che produce un risultato significativo per un attore*


#### Identificazione dei casi d'uso
- A partire da:
	- Insieme dei *requisiti utente*
	- *Attori* del sistema (insieme ai relativi obiettivi)

- L'identificazione può essere facilitata facendosi guidare dalle seguenti domande:
	- Quali sono i compiti principali svolti da ciascun attore?
	- Un attore accede o modifica l'informazione nel sistema?
	- L'attore rappresenta il tramite mediante cui il sistema viene informato di modifiche apportate in altri sistemi?
	- L'attore deve essere informato di eventuali cambiamenti avvenuti nel sistema?

- Durante la fase di OOA, i casi d'uso identificano le *necessità degli attori* del sistema


#### Specifica di use case diagram
- *Rappresentazione grafico* di attori, casi d'uso e relazioni
- Si possono rappresentare quattro tipi di relazioni:
	- *Associazione* (tra attore e caso d'uso)
	- *Include* (identificato dallo stereotype: include)
		- Un caso d'uso included è sempre necessario per completare il caso d'uso con il quale è messo in relazione
	- *Extend* (identificato dallo stereotype: extend)
		- Un caso d'uso extended può attivare il caso d'uso dal quale viene esteso (ma tale attivazione non è necessaria per completare il caso d'uso extended)
	- *Generalizzazione*


#### Activity Diagram
- Rappresenta a vari livelli di astrazione il *flusso di esecuzione*, sia sequenziale che concorrente, in una applicazione object-oriented
- E' una variante degli state diagram, in cui gli stati rappresentano l'esecuzione di azioni e le transizioni sono attivate dal completamento di tali azioni
- Usato principalmente in fase di OOD per rappresentare il flusso di esecuzione delle operazioni definite nel class diagram
- In fase di OOA, viene usato per rappresentare il *flusso delle attività nella esecuzione di un caso d'uso* (un caso d'uso può essere associato ad uno o più activity diagram)
- Poichè non vengono mostrati gli oggetti che eseguono le attività, può essere costruito anche in *assenza* del class diagram
- In presenza del class diagram, ogni *attività* può essere associata ad *una o più operazioni* appartenenti ad una o più classi


#### Specifica di activity diagram
- Un evento (esterno) che origina un caso d'uso viene modellato come un *evento* che causa l'esecuzione di un acticity diagram
- Gli *action state* vengono *identificati* a partire dalla descrizione testuale dello scenario di funzionamento di un caso d'uso
- Gli action state vengono quindi associati mediante *transition lines* (che possono essere controllate da *guard conditions*)
- Le transizioni in uscita da un action state vengono percorse quando l'action state viene completato (l'esecuzione procede da un action state al successivo)
- Un action state viene *completato* quando la sua elaborazione termina
- *Flussi concorrenti* vengono modellati con *barre di sincronizzazione* (barre fork-join)
- *Flussi alternativi* vengono modellati con *nodi decisionali* (branch/merge diamonds)
- Eventi esterni non sono generalmente modellati


