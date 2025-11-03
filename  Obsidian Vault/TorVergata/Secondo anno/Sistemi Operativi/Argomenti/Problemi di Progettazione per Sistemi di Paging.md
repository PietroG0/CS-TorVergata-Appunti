Può succedere che nel sistema si verifichi il trashing anche con il miglior algoritmo di sostituzione delle pagine e l'assegnazione ottimale dei frame.
L'unica soluzione reale è di sbarazzarsi temporaneamente di alcuni processi
La soluzione più semplice è piuttosto cruda: uccidere qualche processo.

- Spesso i Sistemi Operativi dispongono di uno speciale processo detto OOM (Out of Memory killer) che si attiva quando il sistema è a corto di memoria, analizza tutti i processi in esecuzione e sceglie una vittima sacrificale, liberandone le risorse per continuare a far funzionare il ssitema.
- Specificamente, il killer OOM esamina tutti i processi assegnando dei voti per indicare quanto siano "cattivi". Per esempio, usare moltissima memoria fa aumentare il voto di "cattiveria" di un processo, mentre i processi importanti (root e del sistema) hanno voti bassi


[Allocazione di Memoria in Sistemi di Paginazione](Allocazione%20di%20Memoria%20in%20Sistemi%20di%20Paginazione.md)
[Dinamica di Allocazione e Algoritmo Page Fault Frequency (PFF)](Dinamica%20di%20Allocazione%20e%20Algoritmo%20Page%20Fault%20Frequency%20(PFF).md)
[Gestione del Trashing e controllo del carico di Memoria](Gestione%20del%20Trashing%20e%20controllo%20del%20carico%20di%20Memoria.md)

**Scheduling a due livelli e tecniche di riduzione di Memoria**
Scheduling a Due livelli:
- Alcuni processi sono in memoria non volatile e solo una parte è schedulata attivamente
- Aiuta a gestire meglio il carico di memoria
- Utile per ridurre occupazione di memoria di processi in background in sistemi interattivi

Gestione della Multiprogrammazione:
- La selezione dei processi da spostare considera anche caratteristiche:
- Sono processi CPU bound o I/O bound
- Qual'è la dimensione e/o frequenza di paginazione dei processi

Altre tecniche:
- Oltre a "uccidere" o spostare processi, si possono usare compattamento, compressione e deduplicazione (same page merging)

[Policy di Pulizia e Paging Deamon](Policy%20di%20Pulizia%20e%20Paging%20Deamon.md)
[Dimensione ottimale delle Pagine e THP](Dimensione%20ottimale%20delle%20Pagine%20e%20THP.md)
[Calcolo della Dimensione Ottimale delle pagine](Calcolo%20della%20Dimensione%20Ottimale%20delle%20pagine.md)
[Istruzioni separate e spazi dei dati](../../../../Altri%20Argomenti/Istruzioni%20separate%20e%20spazi%20dei%20dati.md)
[Condivisione delle Pagine nei Sistemi Multiprogrammati](Condivisione%20delle%20Pagine%20nei%20Sistemi%20Multiprogrammati.md)
[Librerie Condivise - Principi e Funzionamento](Librerie%20Condivise%20-%20Principi%20e%20Funzionamento.md)


