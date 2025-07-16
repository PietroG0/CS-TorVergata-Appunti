
- L'approccio classico usato dai programmi che compongono il sistema informativo per la gestione delle informazioni è un archivio basato su files.
- Ogni programma ha accesso al file system gestito dal sistema operativo per creare uno o più files (archivi).

![[Schermata del 2023-10-08 17-05-45.png]]

- Ogni file è un insieme di registrazioni all'interno dei quali sono memorizzati i dati elementari.
- Condivisione di dati tra più programmi può essere fatto tramite l'uso di file condivisi.

![[Schermata del 2023-10-08 17-06-27.png]]

- Dato che i file possono avere diversi formati incompatibili tra di loro, i programmi si devono adeguare a diverse convenzioni anche a distanza di parecchio tempo, rendendo la condivisione difficoltosa.
- I dati se non memorizzati su file condivisi sono replicati con spreco di memoria e inconsistenze.
- L'accesso a file in condivisione porta a dover gestire la concorrenza con soluzioni ad-hoc.

- L'approccio basato su DBMS invece va oltre l'uso di file locali gestiti dalle singole applicazioni tramite l'adozione di un sistema di gestione dei dati che risulta indipendente dalle applicazioni.
- I dati non sono gestiti dalle singole applicazioni, ma da un DBMS che offre un'interfaccia comune a tutte le applicazioni.
- Si interpone fra le applicazioni e la memoria di massa
- I dati non appartengono ad una singola applicazione, ma esse vi accedono attraverso il DBMS.

![[Schermata del 2023-10-08 16-59-03.png]]

