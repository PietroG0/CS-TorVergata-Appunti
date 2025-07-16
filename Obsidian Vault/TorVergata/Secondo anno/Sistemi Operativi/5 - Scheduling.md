#Sistemi_operativi 

- In un computer multiprogrammato, molteplici processi/thread possono competere per la CPU contemporaneamente
- Lo scheduler decide quale processo/thread eseguire successivamente seguendo un algoritmo di scheduling
- Lo scheduling al livello del kernel avviene per thread, indipendentemente dal processo di appartenenza
- Sfide specifiche emergono nello scheduling dei thread

**Situazioni in cui è necessario lo Scheduling**

Creazione nuovo Processo
- Decisione tra l'esecuzione del processo genitore o figlio
- Entrambi pronti: può essere scelto chiunque

Uscita di un Processo
- Se un processo esce, occorre scegliere un altro dai processi pronti
- Se nessuno è pronto, occorre eseguire un processo inattivo del sistema

Blocco del Processo
- Se un processo si blocca, occorre selezionarne un altro
- A volte la causa del blocco può influire sulla decisione

Interrupt di I/O
- Alla conclusione di un I/O, un processo potrebbe diventare pronto
- Decidere se eseguire il processo appena pronto, il precedente o un altro

[[Tipologie di Scheduling e Prelazione]]

[[Introduzione al problema di Scheduling dei processi]]

[[Scheduling in Sistemi Batch]]

[[Scheduling in Sistemi Interattivi]]

[[Scheduling nei Sistemi Real-Time]]

[[Processi e Scheduling]]
