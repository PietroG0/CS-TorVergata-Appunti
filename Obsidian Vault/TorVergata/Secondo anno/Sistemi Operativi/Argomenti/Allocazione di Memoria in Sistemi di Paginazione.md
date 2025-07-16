**Allocazione Locale**:
- Ogni processo riceve una porzione fissa della memoria
- Semplice da implementare, ma può portare a inefficienze se il set di lavoro del processo

**Allocazione Globale**:
- Distribuzione dinamica della memoria tra i processi
- Più efficace per adattarsi alle esigenze variabili dei processi, ma richiede una gestione più complessa

![[Pasted image 20231128103452.png]]

**Vantaggi dell'allocazione globale della memoria**
Adattabilità degli Algoritmi Globali:
- Gli algoritmi globali di sostituzione delle pagine si adattano meglio alle esigenze variabili dei processi
- Aumentano l'efficienza quando la dimensione del set di lavoro varia nel tempo

Limiti degli Algoritmi Locali:
- Il Trashing può verificarsi con algoritmi locali se il set di lavoro di un processo cresce oltre la memoria allocata
- La memoria può essere sprecata quando il set di lavoto di un processo si riduce e la memoria non viene riassegnata

Gestione Dinamica della Memoria:
- Con l'allocazione globale, il sistema operativo deve dinamicamente assegnare e riassegnare frame ai processi
- E' possibile utilizzare i bit di aging per monitorare la frequenza di accesso delle pagine, anche se questo potrebbe non essere sufficiente per prevenire il trashing

Sfide del Monitoraggio del Set di Lavoro:
- I bit di aging forniscono una stima approssimativa, che potrebbe non riflettere cambiamenti rapidi nel set di lavoro
- E' fondamentale che il sistema di paginazione possa reagire in modo agile ai cambiamenti delle esigenze di memoria

**Strategie di Allocazione della Memoria nei Sistemi di Paginazione**
Allocazione Equa vs Proporzionale:
Allocazione Equa:
- Distribuzione uniforme dei frame tra i processi
- Svantaggi: Non tiene conto delle diverse esigenze di memoria tra processi di dimensioni varie
Allocazione Proporzionale:
- Assegnazione di frame in base alla dimensione del processo
- Rispecchia meglio le necessità di memoria, evitando allocazioni inadeguate

Importanza del Limite Minimo di Pagine:
- Assicurate che ogni processo abbia abbastanza pagine per eseguire le operazioni fondamentali
- Ma prevenire situazioni in cui processi con istruzioni che attraversano i limiti delle pagine non possano eseguire



