Può succedere che nel sistema si verifichi il trashing anche con il miglior algoritmo di sostituzione delle pagine e l'assegnazione ottimale dei frame.
L'unica soluzione reale è di sbarazzarsi temporaneamente di alcuni processi
La soluzione più semplice è piuttosto cruda: uccidere qualche processo.

- Spesso i Sistemi Operativi dispongono di uno speciale processo detto OOM (Out of Memory killer) che si attiva quando il sistema è a corto di memoria, analizza tutti i processi in esecuzione e sceglie una vittima sacrificale, liberandone le risorse per continuare a far funzionare il ssitema.
- Specificamente, il killer OOM esamina tutti i processi assegnando dei voti per indicare quanto siano "cattivi". Per esempio, usare moltissima memoria fa aumentare il voto di "cattiveria" di un processo, mentre i processi importanti (root e del sistema) hanno voti bassi


[[Allocazione di Memoria in Sistemi di Paginazione]]
[[Dinamica di Allocazione e Algoritmo Page Fault Frequency (PFF)]]
[[Gestione del Trashing e controllo del carico di Memoria]]

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

[[Policy di Pulizia e Paging Deamon]]
[[Dimensione ottimale delle Pagine e THP]]
[[Calcolo della Dimensione Ottimale delle pagine]]
[[Istruzioni separate e spazi dei dati]]
[[Condivisione delle Pagine nei Sistemi Multiprogrammati]]
[[Librerie Condivise - Principi e Funzionamento]]


