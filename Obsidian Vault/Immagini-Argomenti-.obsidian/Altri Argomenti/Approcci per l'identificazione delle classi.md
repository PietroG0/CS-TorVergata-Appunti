>[!Tip] Approcci
>- Noun phrase
>- Common class patterns
>- Use case driven
>- CRC
>- Mixed


#### Approccio noun phrase
- Una frase nominale (noun phrase) è una frase in cui il sostantivo ha una prevalenza sulla parte verbale (sono frasi di tipo assertivo)
- I sostantivi delle frasi nominali usate per la stesura dei requisiti utente sono considerati *candidate classes*
- La lista delle candidate classes viene suddivisa in tre gruppi
	- *Irrelevant* (non appartengono al dominio applicativo e quindi possono essere scartate)
	- *Relevant* (evidenziano caratteristiche di entity classes)
	- *Fuzzy* (non si hanno sufficienti informazioni per classificarle come relevant o irrelevant, vanno analizzate successivamente)

- Si assume che l'*insieme dei requisiti* utente sia *completo* e *corretto*



#### Approccio common class patterns
- Basato sulla *teoria della classificazione*
- Le candidate classes vengono identificate a partire da gruppi (pattern) di classi predefinite:
	- *Concept*
	- *Events*
	- *Organization*
	- *People*
	- *Places*

- Non è un approccio sistematico, ma può rappresentare una utile *guida*
- A differenza dell'approccio noun phrase, non si concentra sul documento dei requisiti utente
- Può causare problemi di *interpretazione* dei nomi delle classi



#### Approccio use case driven
- Si assume che:
	- Siano già stati sviluppati gli *use case diagram* (e possibilmente anche i sequence diagram più significativi)
	- Per ogni use case sia fornita una descrizione testuale dello scenario di funzionamento

- Simile all'approccio noun phrase (si considera l'insieme degli use case come insieme dei requisiti utente)
- Si assume che l'*insieme degli use case* sia *completo* e *corretto*
- Approccio funtion-driven (o *problem-driven* secondo la terminologia object oriented)



#### Approccio CRC
- L'approccio *CRC* (*Class - Responsability - Collaborators*) è basato su riunioni in cui si fa uso di apposite *card*
- Ciascuna card rappresenta una classe, e contiene tre compartimenti, che identificano
	- il nome della classe
	- Le responsabilità assegnate alla classe
	- Il nome di altre classi che collaborano con la classe

- Le classi vengono identificate analizzando come gli oggetti collaborano per svolgere le funzioni di sistema
- Approccio utile per 
	- *Verifica di classi* identificate con altri metodi
	- *Identificazione di attributi e operazioni* di ciascuna classe



#### Approccio mixed
- Basato su elementi presenti in ciascuno degli approcci precedenti
- Un *possibile scenario* potrebbe essere il seguente:
	1) L'insieme iniziale delle classi viene identificato in base all'*esperienza* dell'analista, facendosi eventualmente guidare dall'approccio *common class patterns*
	2) Altre classi possono essere aggiunte usando sia l'approccio *noun phrase* che l'approccio *use case driven* 
	3) Infine l'approccio *CRC* può essere usato per verificare l'insieme delle classi identificate



#### Linee guida per l'identificazione delle entity classes
1) Ogni classe deve avere un ben preciso *statement of purpose*
2) Ogni classe deve prevedere un *insieme di istanze* (oggetti) - le cosiddette singleton classes (per la quali si prevede una singola istanza) non sono di norma classificabili come entity classes
3) Ogni classe deve prevedere un *insieme di attributi* (non un singolo attributo)
4) Distinguere tra elementi che possono essere modellati come classi o come attributi
5) Ogni classe deve prevedere un *insieme di operazioni* (anche se inizialmente le operazioni vengono trascurate, i servizi che la classe mette a disposizione sono implicitamente derivabili dallo statement of purpose)


#### Esempi 
###### University Enrolment
- Considerando i seguenti requisiti per il sistema all'iscrizione all'Università e identificare le classi candidate:
	- Ogni diploma universitaria ha un numero compulsivo di corsi e un numero elettivo

*Rilevanti*
- Diploma
- Corsi

*Sfocato*
- Corsi compulsivi 
- Corsi elettivi

Altri requisiti:
- Ogni corso è ad un dato livello e possiede un numero di crediti 
- Un corso può far parte di qualsiasi numero di corsi di laurea
- Ogni diploma specifica un numero totale minimo di crediti per completare la laurea
- Gli studenti possono combinare corsi in programmi di studi per i loro bisogni individuali 

![[Pasted image 20241120142339.png | 500]]



#### Esempio B.1 Video Store
- Considerare i seguenti requisiti per il sistema di video store e identificare le classi candidate:
	- Il negozio di video mantiene in magazzino un'ampia liberia di film popolari e moderni. Un particolare film potrebbe essere tenuto in videocassette o dischi

*Rilevanti*
- Titolo del film
- Videocassetta
- Disco

*Irrilevanti*
- Negozio di video
- Magazzino
- Libreria


Altri requisiti 
- I video sono in formato "beta" o "VHS"
- I dischi sono in formato DVD
- Ogni film ha un particolare periodo di affitto (espresso in giorni), con un costo dell'affitto in quel periodo
- Il negozio di video deve essere in grado di rispondere immediatamente ad ogni domanda su i film in magazzino e come i vari dischi sono disponibili per l'affitto
- La condizione corrente di ogni disco deve essere nota e registrata


![[Pasted image 20241120142903.png | 500]]


#### Esempio C.1 Contact management
- Considerare le seguenti richieste per il Contact Management System e identificare le classi candidate
	- Per "rimanere in contatto" con la base di clienti
	- Per conservare nomi, numeri di telefono, postali e indirizzi ecc. di organizzazione e contatti delle persone in queste organizzazioni
	- Per organizzare task e eventi per gli impiegati con un riguardo ai contatti delle persone
	- I dipendenti possono organizzare task ed eventi per altri dipendenti o per loro stessi
	- Una task è un gruppo di eventi che possono raggiungere un risultato
	- Gli eventi tipici sono: chiamate telefoniche, visite, mandare un fax, organizzare un allenamento, ecc.


![[Pasted image 20241120143311.png | 500]]


#### Linee guida per la specifica delle classi
*Nomi di classe*
- Associare ad ogni classe un *nome significativo* nello specifico dominio applicativo
- Adottare una *convenzione standard* per assegnare nomi alle classi, ad esempio:
	- nome singolare, parole multiple devono essere congiunte, con l'iniziale di ciascuna parola in carattere maiuscolo

- Definire una *lunghezza massima* per i nomi delle classi (non più di 30 caratteri)

*Attributi e operazioni*
- Considerare inizialmente solo attributi che caratterizzano *possibili stati di interesse* per gli oggetti
- Adottare una *convenzione standard* per assegnare nomi agli attributi, ad esempio:
	- Le parole devono essere scritte in carattere minuscolo, separate da un carattere di underscire (street_name)

- Ritardare l'aggiunta di operazioni fino al momento in cui siadisponibile il modello comportamentale, da cui vanno derivate


