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

[Tipologie di Scheduling e Prelazione](../../../Altri%20Argomenti/Tipologie%20di%20Scheduling%20e%20Prelazione.md)

[Introduzione al problema di Scheduling dei processi](Argomenti/Introduzione%20al%20problema%20di%20Scheduling%20dei%20processi.md)

[Scheduling in Sistemi Batch](Argomenti/Scheduling%20in%20Sistemi%20Batch.md)

[Scheduling in Sistemi Interattivi](Argomenti/Scheduling%20in%20Sistemi%20Interattivi.md)

[Scheduling nei Sistemi Real-Time](Argomenti/Scheduling%20nei%20Sistemi%20Real-Time.md)

[Processi e Scheduling](../../../Altri%20Argomenti/Processi%20e%20Scheduling.md)
