1. Il candidato discuta l'importanza dello scheduling nei sistemi batch, con particolare attenzione ai parametri che si cercano di ottimizzare in questi sistemi. Si chiede di presentare e descrivere almeno tre metodi di scheduling differenti applicati nei sistemi batch, specificando
    
    - quali aspetti di performance ciascuno di essi mira a migliorare
    - gli eventuali limiti

Risposta 1

Nei sistemi batch non ci sono utenti impazienti al loro terminale in attesa di una risposta rapida a una breve richiesta, quindi sono spesso accettabili algoritmi senza prelazione o algoritmi con prelazione con lunghi periodi per ciascun processo. Questo approccio riduce gli scambi di processo e migliora così le prestazioni.

1) First-Come First-Served
	- Processi assegnati alla CPU nell'ordine in cui arrivano
	- Facile da capire e programmare
	- Prestazioni non ottimali in scenari misti

2) Shortest Job First
	- Richiede che i tempi di esecuzione siano noti in anticipo
	- Il job più breve viene eseguito per primo
	- Se i job arrivano in momenti diversi, SJF potrebbe non essere ottimale

3) Shortest Remaining Time Next
	- Versione con prelazione di SJF, seleziona sempre il porcesso con il tempo rimanente più breve per completare
	- Confronta il tempo totale del nuovo job con il tempo rimanente dei processi in esecuzione, se il nuovo job è più breve del processo corrente, sospende ed esegue il nuovo job


2. Il candidato spieghi il concetto di memoria virtuale e il suo ruolo nella gestione della memoria RAM da parte di un sistema operativo moderno. Si discuta come la memoria virtuale permetta di gestire programmi che superano la capacità della memoria fisica disponibile. Si descrivano inoltre le tecniche di paging e segmentazione, evidenziando come queste tecniche abbiano migliorato l'efficienza e la gestione della memoria nei computer.

Risposta 2

- Per via di questi sviluppi sorge la necessità di eseguire programmi troppo grandi rispetto alla memoria, e naturalmente si desiderano sistemi in grado di supportare l’esecuzione contemporanea di più programmi, che singolarmente trovano posto nella memoria ma nell’insieme risultano più grandi della memoria disponibile.

- L’idea alla base della memoria virtuale è che ogni programma ha un suo spazio degli indirizzi, suddiviso in parti chiamati **pagine**. Ogni pagina è un intervallo di indirizzi contigui. Queste pagine sono mappate sulla memoria fisica, ma per eseguire il programma non è indispensabile che tutte le pagine siano contemporaneamente nella memoria fisica. Quando il programma fa riferimento a una parte del suo spazio degli indirizzi che è nella memoria fisica, l’hardware esegue direttamente la mappatura necessaria.

- La maggior parte dei sistemi di memoria virtuale usa una tecnica chiamata **paginazione** o **paging**. Quando è utilizzata la memoria virtuale, gli indirizzi virtuali non vanno direttamente al bus di memoria, ma a una **MMU**(**Memory Management Unit**, unità di gestione della memoria) che mappa gli indirizzi virtuali sugli indirizzi della memoria fisica. Se la MMU rileva che la pagina non è mappata e causa una trap della CPU verso il sistema operativo. Questa trap è chiamata **page fault**(errore di pagina). Il sistema operativo preleva un frame poco utilizzato e ne scrive il contenuto su disco (se non è già presente).

- **Segmentazione** = Una soluzione diretta e molto generica è fornire la macchina di molti spazi degli indirizzi completamente indipendenti, chiamati **segmenti**. Poiché ogni segmento costituisce uno spazio degli indirizzi separato, segmenti diversi possono crescere o ridursi indipendentemente, senza influenzarsi l’un l’altro.

	![[Screenshot 2024-01-18 alle 14.41.55.png|| 500]]


3. Discutere dell'importanza dei file, delle tipologie di file e della loro implementazione.


Risposta 3

- I **file** sono unità logiche di informazioni create dai processi. Generalmente un disco ne contiene migliaia o anche milioni, ciascuno indipendente dagli altri. In effetti, se pensate a ogni file come a una specie di spazio degli indirizzi, non siete molto lontani dal vero, a parte il fatto che sono usati come modello del disco invece che della RAM.

- I processi possono leggere file esistenti e crearne di nuovi, se necessario. Le informazioni salvate nei file sono **persistenti**, cioè non influenzate dalla creazione e dal termine del processo. Un file dovrebbe scomparire solo quando il suo proprietario lo rimuove esplicitamente.

- I **file normali** sono quelli contenenti informazioni dell’utente. Le **directory** sono file di sistema usati per mantenere la struttura del file system. I **file speciali a caratteri** sono relativi all’input/output e sono usati per modellare i dispositivi seriali di I/O, come terminali, stampanti e reti. I **file speciali a blocchi** sono usati per modellare i dischi. 

- L’aspetto forse più importante dell’implementazione della memorizzazione dei file è tener traccia di quali blocchi del disco siano associati a un determinato file. **Allocazione Contigua** = Lo schema di allocazione più semplice è quello di memorizzare ciascun file come una se­quen­za contigua di blocchi del disco. In questo modo, su un disco con blocchi da 1 KB, a un file di 50 KB sarebbero allocati 50 blocchi consecutivi. Con blocchi di 2 KB ne sarebbero allocati 25 consecutivi. **Allocazione con Liste Concatenate** = Il secondo metodo per memorizzare i file è configurare ciascuno come una lista concatenata di blocchi del disco. La prima parte di ciascun blocco è usata come puntatore al successivo, il resto del blocco è per i dati. **Allocazione a Liste Concatenate con una tabella in memoria** = Entrambi gli svantaggi dell’allocazione a liste concatenate possono essere eliminati prendendo la parola puntatore di ogni blocco del disco e ponendola in una tabella in memoria. Una tabella siffatta in memoria principale è chiamata **FAT** (**File Allocation Table**, tabella di allocazione dei file).

4. Come si può gestire la memoria libera su disco? Quali metodi sono utilizzati.

Risposta 4

- 2 Metodi principali per gestire dinamicamente la memoria libera: Bitmap e Liste Concatenate
- La memoria, con una bitmap, è divisa in unità di allocazione che possono essere piccole come qualche parola o grandi come vari kilobyte. A ogni unità di allocazione corrisponde un bit della bitmap, che è 0 se l’unità è libera e 1 se è utilizzata (o viceversa). Il problema principale è che, se si stabi­li­sce di portare un processo di _k_ unità in memoria, il gestore della memoria deve cercare nella bitmap per trovare una serie di _k_ bit 0 consecutivi nella mappa. Cercare in una bitmap una serie di una certa lunghezza è un’operazione lenta (la serie potrebbe ­esse­re a cavallo dei limiti della parola nella mappa); questo è un elemento a sfavore delle ­bitmap.
- Un altro sistema per tenere traccia della memoria è mantenere una lista concatenata di segmenti di memoria allocati e liberi, in cui un segmento contiene un processo oppure è uno spazio vuoto fra due processi.


Domanda 5
Discutere l'importanza delle directory, la loro implementazione e la loro struttura

Risposta 5
- Le directory sono delle cartelle che contengono altri file, si dividono principalmente in directory a livello singolo e directory gerarchiche 
1) Directory a livello singolo, Una sola directory, chiamata root, che contiene tutte le ulteriori cartelle. Questo approccio era molto diffuso nel passato dato che la macchina era utilizzata da un solo utente
2) Se vari utenti utilizzano la stessa macchina, conviene utilizzare un approccio gerarchico, in questo modello vi è ancora la directory root, ma contiene altre sottodirectory, ciascuna privata.

- Le directory possono essere implementate in vari modi, uno di questi è memorizzare gli attributi direttamente nelle voci delle directory, in questo semplice modello una directory è composta da una lista di voci a dimensione fissa, una per file.
- La seconda possibilità è memorizzare gli attributi negli i-node, in questo caso le voci delle directory sono molto più brevi, solo il nome del file e il numero degli i-node

- Nomi dei file, la soluzione più semplice è stabilire un limite di 255 caratteri per i nomi dei file, semplice ma non del tutto efficace, dato che si spreca una buona parte della memoria della directory, ecco perchè per questioni di efficienza è consigliato adottare un altro metodo. Un'alternativa è rinunciare all'idea che le voci delle directory abbiano la stessa lunghezza, con questo metodo ciascuna directory possiede una parte fissa, che inizia generalmente con la lunghezza della voce, seguita poi dai dati in un formato fisso. Lo svantaggio di questo approccio è che quando viene cancellato una voce di un file, rimane un vuoto nella memoria, un problema simile all'allocazione contigua dei file, ma in questo caso la compattazione della memoria è fattibile, dato che è tutto in memoria. Lo svantaggio principale è che la singola voce della directory può utilizzare più di una pagina, il che porterebbe ad un page fault durante la lettura. Un altro modo per gestire i nomi di lunghezza variabile è creare tutte le voci di directory di lunghezza fissa e tenere i nomi dei file in uno _heap_ alla fine della directory.
	- In tutti questi casi la ricerca di un nome di un file è lineare, il che può essere molto lento, una soluzione è l'uso di una tabella di hash in ogni directory. L'utilizzo della tabella hash riduce il costo della ricerca ma aumenta la complessità della gestione


Domanda 6
Come si può accedere ad un file e cosa significano persorso assoluto e percorso relativo


Risposta 6
	- L'accesso ai file si divide in due approcci principali, il primo è l'accesso sequenziale. Con l'uso dell'accesso sequenziale si possono leggere i byte in modo lineare, senza però saltare byte nè leggerli in ordine sparso. Erano comodi con l'uso dei nastri magnetici, prima dei dischi.
	- Il secondo approccio è l'accesso casuale, questo metodo risolve la rigidità della lettura nei file, potendo modificarne la lettura e poterli leggere in modo sparso

- Percorso assoluto e relativo, quando il file system è organizzato in un albero di directory, è essenziale specificare il nome di un file in qualche modo. Il primo metodo prevede di attribuire ad un file un percorso assoluto, composto dal percorso che inizia dalla root principale e arriva al file. L'altro metodo è l'uso del percorso relativo, usato congiuntamente con la directory di lavoro, o anche directory corrente. Un utente può designare una directory come directory di lavoro, in quel caso i percorsi non iniziano più dalla root principale, ma appunto dalla directory corrente, in tal caso si chiama percorso relativo.

Domanda 7




11 Discutere le differenze tra MBR e UEFI

Risposta 11
- MBR (Master Boot Record) = Nei vecchi sistemi, il settore 0 del disco è chiamato **MBR** (**Master Boot Record**) ed è usato per avviare il computer. La fine dell’MBR contiene la tabella delle partizioni che contiene gli indirizzi di inizio e di fine di ciascuna partizione. Una della partizioni della tabella è indicata come attiva. Quando si avvia il computer, il BIOS legge ed esegue l’MBR, che per prima cosa localizza la partizione attiva, ne legge il primo blocco, chiamato **blocco di boot** (**boot block**) e lo esegue.
- UEFI (Unified Extensible Firmware Interface) = Anziché basarsi su un Master Boot Record residente nel settore 0 del dispositivo di avvio, UEFI cerca la posizione della **tabella delle partizioni** nel secondo blocco del dispositivo, riservando il primo blocco come marcatore speciale per il software che si aspetta di trovarvi un MBR. Il marcatore dice, in sostanza, che lì non c’è nessun MBR! La **GPT** (**GUID Partition Table**), intanto, contiene informazioni sulla posizione delle varie partizioni sul disco. **GUID** sta per Globally Unique IDentifiers (identificatori unici globali). UEFI conserva nell’ultimo blocco un backup della GPT. Una GPT contiene l’inizio e la fine di ogni partizione; una volta trovata la GPT, il firm­ware ha funzionalità sufficiente a leggere file system di tipi specifici.

