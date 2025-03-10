**Definizione di Working Set**:
- Insieme delle pagine attualmente usate da un processo
- Rappresenta la località di riferimento, ovvero le pagine a cui un processo fa riferimento durante una fase dell'esecuzione

**Demand Paging**:
- Le pagine sono caricate in memoria "on demand", solo quando necessario
- Inizialmente, molti page fault si verificano finchè non vengono caricate tutte le pagine necessarie

**Concetto e Dinamica del Working Set**

- Definizione: Working Set è l0insieme di pagine usate negli ultimi k riferimenti
- Monotonia: è monotona non decrescente al crescere di k
- Asintoto: il limite di w(k, t) è finito, correlato allo spazio degli indirizzi del programma
- Implicazione C'è un ampio intervallo di k dove il working set resta invariato

![[Pasted image 20231206161408.png| 500]]

**Working Set e Performance**
Gestione della Memoria e Page Fault:
- Se il working set di un processo è completamente in memoria, si verificano pochi page fault
- Se il working set è più grande della memoria disponibile, si verificano frequenti page fault, rallentando significatamente il processo

**Working Set Model**:
- Molti sistemi operativi cercano di tracciare il working set di ogni processo e di mantenerlo in memoria per ridurre i page fault
- La pre-paginazione carica in anticipo le pagine basandosi sul working set del processo

**Implementazione e Algoritmi di sostituzione**
Tracciamento del Working Set:
- Il Working Set è definito come l'insieme delle pagine usate negli ultimi k riferimenti alla memoria
- In pratica: è spesso definito in termini di tempo, ad esempio, le pagine usate negli ultimi x secondi di tempo di esecuzione

Algoritmo di Sostituzione Basato sul Working Set:
- Alla verifica di un page fault, si ricerca una pagina fuori dal working set per rimuoverla
- Utilizza informazioni come il bit di riferimento e il tempo dell'ultimo utilizzo per determinare quali pagine rimuovere

