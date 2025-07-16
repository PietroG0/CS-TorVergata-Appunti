Monolitico 
- Il programma principale invoca le chiamate di sistema richieste
- Il kernel è un blocco monolitico con:
1) Procedure di servizio che eseguono le chiamate di Sistema.
2) Procedure di utilità che aiutano a implementare le procedure di servizio

Design "tutto in uno"
- Il kernel è un'unica unità grande e interconnessa.
- Tutte le funzioni del sistema operativo, come la gestione dei processi, la gestione della memoria e la gestione dei dispositivi di I/O, sono strettamente integrate in un unico spazio di indirizzamento.

Flessibilità vs Complessità
- Offre una certa flessibilità in termini di prestazioni e design.
- tuttavia, dato che tutto è strettamente interconnesso, un bug o un errore in una parte del sistema può causare problemi in altre parti, potenzialmente portando a crash sistemici

Compilazione e Collegamento
- Tutte le funzioni e procedure del sistema operativo devono essere compilate e collegate in un unico eseguibile del kernel

Mancanza di occultamento
- Tutte le procedure possono, in teoria, accedere a qualsiasi altra procedura o variabile all'interno del kernel.
- Non c'è un vero e proprio "occultamento" o isolamento tra le diverse parti del sistema

Utilizzo di "trap"
- Meccanismo attraverso il quale un programma può richiedere i servizi del sistema operativo.

Una "Struttura a tre strati"
- Una suddivisione del sistema in livelli, spesso user mode, kernel mode e hardware, con il "trap" che agisce come meccanismo di comunicazione tra questi livelli.

Estensioni caricabili
- Molti so permettono di caricare dinamicamente componenti aggiuntivi, come driver di dispositivi o file system, senza dover riavviare o ricompilare l'intero so.
- Questi componenti possono essere caricati e scaricati a seconda delle necessità, offrendo una certa modularità anche in un sistema monolitico

Librerie condivise e DLL
- Sia [[Unix]] che Windows supportano l'idea di librerie di codice che possono essere condivise tra più programmi
- Contengono codice che può essere eseguito da più programmi contemporaneamente, riducendo la necessità di avere copie multiple del medesimo codice in memoria.

Struttura
- L'organizzazione stratificata dei so è una generalizzazione dell'approccio monolitico.
- Il sistema THE fu uno dei primi a implementare questa idea, con sei livelli gerarchici.
- Il sistema MULTICS usava anelli concentrici per definire i privilegi, con livelli interni più privilegiati di quelli esterni.

- Kernel Unificato
- Interconnessione: Ogni componente ha la capacità di richiamare qualsiasi altro componente
- Scalabilità: Questa struttura può diventare complessa e meno gestibile con l'evoluzione del sistema.

![[Schermata del 2023-10-11 10-19-04.png]]



