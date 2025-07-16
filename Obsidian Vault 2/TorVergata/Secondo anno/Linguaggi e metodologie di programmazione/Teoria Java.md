
#### Oggetto
Un oggetto è un insieme software di stati e comportamenti correlati. Gli oggetti software sono spesso utilizzati per modellare gli oggetti del mondo reale che si trovano nella vita di tutti i giorni. Hanno tutti uno _stato_ e un _comportamento_. Un oggetto memorizza il suo stato in _campi_ ed espone il suo comportamento attraverso _metodi_. I metodi operano sullo stato interno di un oggetto e fungono da meccanismo principale per la comunicazione da oggetto a oggetto. Attribuendo lo _stato_ e fornendo metodi per modificare tale stato, l'oggetto mantiene il controllo su come il mondo esterno può utilizzarlo.

Raggruppare il codice in singoli oggetti software offre numerosi vantaggi:
1) _Modularità_: il codice sorgente di un oggetto può essere scritto e mantenuto indipendentemente dal codice sorgente di altri oggetti
2) _Nascondere le informazioni_: interagendo solo con i metodi di un oggetto, i dettagli della sua implementazione interna rimangono nascosti al mondo esterno.
3) _Riutilizzo del codice_: se un oggetto esiste già, puoi utilizzare quell'oggetto nel tuo programma
4) _Collegabilità e facilità di debug_: se un particolare oggetto risulta problematico, puoi semplicemente rimuoverlo dall'applicazione e collegare un oggetto diverso in sostituzione


#### Classe
Una classe è un progetto o un prototipo da cui vengono creati gli oggetti. Questa sezione definisce _una classe che modella lo stato e il comportamento di un oggetto_ del mondo reale. Si concentra intenzionalmente sulle basi, mostrando come anche una classe semplice possa modellare in modo pulito lo stato e il comportamento


#### Ereditarietà
L'ereditarietà è un meccanismo potente e naturale per organizzare e strutturare il software. Questa sezione spiega come le classi ereditano lo stato e il comportamento dalle loro superclassi e spiega come derivare una classe da un'altra utilizzando la semplice sintassi fornita dal linguaggio Java. La programmazione orientata agli oggetti consente alle classi di _ereditare stati e comportamento comunemente utilizzati da altre classi_. In Java, ogni classe può avere una sola superclasse diretta e ogni superclasse può avere un numero illimitato di sottoclassi.


#### Interfaccia
Un'interfaccia è un contratto tra una classe e il mondo esterno. Quando una classe implementa un'interfaccia, promette di fornire il comportamento pubblicato da quell'interfaccia. Gli oggetti definiscono la loro iterazione con il mondo esterno attraverso i metodi che espongono. I metodi costituiscono l'interfaccia dell'oggetto con il mondo esterno. L'interfaccia è _un gruppo di metodi correlati con corpi vuoti_. 


#### Pacchetto
Un pacchetto è uno spazio dei nomi per _organizzare classi e interfacce in modo logico_. La collocazione del codice in pacchetti rende più facile la gestione di progetti software di grandi dimensioni. Concettualmente _si può pensare ai pacchetti come a diverse cartelle del computer_. Poichè il software scritto in Java può essere composto da centinaia o migliaia di singole classi, ha senso organizzare le cose _inserendo le classi e le interfacce correlate in pacchetti_. 


#### Polimorfismo
Le sottoclassi di una classe possono definire i propri comportamenti unici e tuttavia _condividere alcune delle stesse funzionalità della classe genitore_. 
- Polimorfismo _a compilazione_ (sovraccarico dei metodi): Più metodi con lo stesso nome ma con parametri diversi
- Polimorfismo _a esecuzione_ (sovraccarico dei metodi): Un metodo definito in una superclasse viene riscritto in una sottoclasse


#### Metodi e classi astratti
Una classe astratta è _una classe dichiarata astratta e può includere o meno metodi astratti_. Le classi astratte *non* possono essere istanziate, ma possono essere subclassate. Quando una classe astratta viene subclassata, la sottoclasse di solito fornisce le implementazioni per tutti i metodi astratti della classe madre. 


#### Incapsulamento
L'incapsulamento è il concetto di _nascondere i dettagli interni di un oggetto e consentire l'accesso solo attraverso metodi pubblici definiti_. Questo migliora la modularità e la sicurezza del codice. 


#### Differenze tra Classi e Interfacce
- _Definizione e Utilizzo_: Le interfacce definiscono un contratto di metodi, mentre le classi definiscono il comportamento e lo stato di oggetti
- _Ereditarietà_: Le interfacce supportano l'ereditarietà multipla, mentre le classi supportano solo l'ereditarietà singola
- _Metodi e campi_: Le interfacce possono avere solo metodi astratti e campi costanti, mentre le classi possono avere metodi concreti e astratti e campi con qualsiasi modificatore di accesso
- _Implementazione_: Le classi implementano le interfacce e forniscono il corpo ai metodi astratti dichiarati nelle interfacce


#### Costruttore
In Java, un costruttore _è un blocco di codice speciale_ che viene eseguito quando viene creata una nuova istanza di una classe. Il costruttore ha lo scopo di inizializzare l'oggetto appena creato. 


#### Primitive
In Java, le primitive sono i tipi di dati di base che non sono oggetti e che sono forniti direttamente dal linguaggio. Questi tipi di dati sono definiti per essere semplici e veloci da usare, e rappresentano i valori più fondamentali utilizzati nei programmi
- byte, short, int, long, float, double, boolean, char



## Domande Stellato

#### Differenza tra interfacce e classi astratte
*Interfaccia*
- Contratto: Un'interfaccia definisce un "contratto" che le classi che la implementano devono rispettare. In altre parole, specifica un insieme di metodi che devono essere implementati dalle classi figlie, senza fornire alcuna implementazione.
- Metodi astratti: Tutti i metodi definiti in un'interfaccia sono astratti, ovvero non hanno un corpo
- Ereditarietà multipla: Una classe può implementare più interfacce, consentendo un'ereditarietà multipla di tipo comportamentale
- Scopo: Definisce un comportamento comune che diverse classi possono condividere, senza vincolare la loro struttura interna

*Classe astratta*
- Base parziale: Una classe astratta è una classe parzialmente implementata. Può contenere sia metodi astratti (senza corpo) che metodi concreti (con un corpo)
- Ereditarietà singola: Una classe può estendere una sola classe astratta, mantenendo l'ereditarietà singola
- Scopo: Fornisce una base comune per una gerarchia di classi, definendo sia comportamenti condivisi che una struttura parziale.

*Quando usare cosa?*
*Interfaccia* quando vuoi definire un comportamento comune senza imporre una struttura specifica.
*Classe astratta* quando vuoi fornire una base comune per una famiglia di classi correlate, fornendo parte dell'implementazione e lasciando che le sottoclassi completino i dettagli


#### Ereditarietà multipla in Java
In java, l'ereditarietà multipla si riferisce alla capacità di una classe di ereditare caratteristiche e comportamenti *da più di una classe padre*. Java non supporta direttamente l'ereditarietà multipla delle classi, questo perchè può portare a complicazioni come il *"problema del diamante"*, dove una classe eredita da due classi che a loro volta ereditano da una stessa classe, creando ambiguità su quale implementazione utilizzare.

*Il ruolo delle interfacce*
Le interfacce in java offrono una soluzione elegante a questo problema. Un'interfaccia definisce un contratto, ovvero un insieme di metodi che una classe deve implementare. Una classe può implementare più interfacce, ereditandone cosi i metodi dichiarati.


#### Stringa
La stringa non è tipo di dato primitivo ma trattata in modo particolare dal momento che fa parte della classe specifica java.lung.string (lung package fondamentale). E' possibile stampare concatenando stringhe a tipi diversi grazie all'autoboxing, il late binding e il toString.

Con l'*Autoboxing* il valore di tipo primitivo viene racchiuso nella classe corrispondente (es. int -> Integer) per poi effettuare il getValue per restituire il valore inscatolato.

Il *toString* è un metodo definito per ogni oggetto, e affinchè ciò sia possibile è presente nella classe Object da cui sono estese tutte le classi -> ereditano toString

Tramite *Override* posso rappresentare come stringa l'oggetto in questione.

Il *Late Binding* indica il fenomeno in runtime per cui se non vi è direttamente il toString nella classe in questione si sale per le classi madri finchè non lo si trova.

Quando si effettua println se l'oggetto dentro non è una stringa viene chiamato il metodo toString.


#### Costruttori
I Costruttori si utilizzano per garantire persistenza del programma, es. creo metodi che accedono al nome e cognome di una persona al fine di ordinarle alfabeticamente. Se un utente crea una persona senza nome e cognome e chiamasse la funzione, avrebbe un errore a basso livello. 

*Costruttore di default*: new NomeClasse().
Serve semplicemente a compiere le operazioni base di un costruttore e non ha parametri

Conviene definire il proprio costruttore affinchè quando si crea un oggetto si utilizzano gli attributi di nostro interesse. I costruttori non hanno valori di ritorno, nemmeno void.

Il *nome del costruttore* deve coincidere con quello della classe. Se metto anche un solo costruttore perdo automaticamente il costruttore di default.

Per chiamare il costruttore della classe superiore uso super. Se non specifico super in una classe derivata allora viene automaticamente chiamato il costruttore di default della classe superiore.

#### Override e Overloading
*Overriding* = Riscrivere lo stesso metodo in una sottoclasse alterandone il comportamento. Ha a che fare con il polimorfismo in quanto un oggetto si presenta in modi diversi preservando comunque la propria natura.

*Late Binding*: viene invocato il metodo in override nella prima classe figlio che si trova partendo dal basso

*Overloading*: possibilità di usare lo stesso metodo con parametri diversi nella stessa classe. Dal punto di vista 


#### Altri metodi
*this.* per considerare gli attributi in una classe evitando confusione con altre variabili, è un puntatore che accede all'oggetto dalla sua root (campi). this() per indicare il puntatore al costruttore

Spesso si fa overloading di costruttori per poter istanziare un oggetto con specifiche informazioni. 

Per invocare da un costruttore un altro costruttore si usa la keyword this(...) (diversa da this.). E' un puntatore a funzione che punta al costruttore della stessa classe, capisco quale costruttore in base ai parametri in this(...)

Sappiamo che tutte le *variabili a oggetto sono puntatori*.

*Package private* più intimo di *protected* perchè chi scrive su uno stesso package è lo stesso autore/azienda, mentre le sottoclassi le può creare chiunque.

Ciò che è *static* si trova nella memoria statica. Ciò non vuol dire che non può cambiare ma che il programma già sa che si tratta di un attributo comune ad ogni istanza di quella classe.
Static final per le costanti (che effettivamente non possono cambiare).

Esistono 4 *tipi* in Java: *Classi*, *Interfacce*, *Enum*, *Annotazioni*
*Enum* per fare delle enumerazioni: la uso quando voglio creare una classe che ha un certo numero di istanze ben definite.

*Annotazioni* es. Override
Sono state introdotte per ovviare al problema di mancanza di variabili globali in java, infatti le annotazioni possono essere associate ad un qualsiasi statement in un qualsiasi momento.


#### Generics
In java, le Generics ti permettono di *creare classi, interfacce e metodi che possono lavorare con diversi tipi di dati*, ma che mantengono la sicurezza del tipo durante la compilazione. 
A cosa servono le Generics? 
*Sicurezza del tipo*: Le generics ti aiutano a evitare errori di tipo durante la compilazione. Ad esempio, se hai una lista di stringhe, non potrai accidentalmente inserire un numero intero nella lista.
*Codice più riutilizzabile*: Puoi creare classi e metodi generici che possono essere utilizzati con diversi tipi di dati, riducendo la duplicazione del codice.
*Migliore leggibilità*: Il codice generico è spesso più chiaro e conciso, poichè il tipo di dato è specificato direttamente nella dichiarazione.
*Supporto per le collezioni*: Le generics sono ampiamente utilizzate con le collezioni (ArrayList, HashMap, ecc..) per garantire che gli elementi all'interno della collezione siano dello stesso tipo.


#### Programmazione orientata a oggetti
Vi sono 4 direttive fondamentali quando si parla di questo paradigma:
1) *Encapsulation*: si vogliono nascondere i dettagli implementativi all'utente che non ne è interessato
2) *Abstraction*: al fine di rendere valida l'encapsulation, devo anche definire dei modelli astratti di ciò che l'utente vede
3) *Inheritance*: posso realizzare oggetti che hanno tutte le caratteristiche di altri, al fine di evitare ridondanze
4) *Polimorfismo*: legato alla dichiarazione dei tipi. Un oggetto non è detto che abbia più un solo tipo, ma può assumere forme diverse. 
