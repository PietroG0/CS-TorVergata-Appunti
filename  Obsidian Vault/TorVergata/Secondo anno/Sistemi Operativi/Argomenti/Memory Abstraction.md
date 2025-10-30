**Memoria senza astrazione**
- Modello più semplice: uso diretto della memoria fisica
- Nei primi computer mainframe, minicomputer e PC, non esisteva astrazione della memoria; ogni programma voleva solo la memoria fisica
- Un programma poteva interferire con un altro, causando crash

**Monoprogrammazione**
- Tre modelli principali di organizzazione della memoria:
a) OS in RAM, utilizzato sui mainframe e sui minicomputer
b) OS in ROM (sistemi embedded)
c) OS+drivers in ROM+RAM, primi personal computer (MS-DOS)

**Nessuna astrazione: Multiprogrammazione**
- Possibilità di eseguire più programmi contemporaneamente senza astrazione della memoria usando il "swapping"
- Swapping: salvataggio del contenuto della memoria in un file su memoria non volatile e prelievo del programma successivo
- naive Approach: Caricamento di più programmi in memoria fisica consecutivamente, senza astrazione dell'indirizzo

**Problema Principale**:
- I programmi utilizzano indirizzi assoluti di memoria fisica, portando a conflitti durante l'esecuzione
- La mancanza di astrazione dell'indirizzo può causare il crash dei programmi

**Astrazione della memoria e spazi degli indirizzi**
- Problema: L'accesso diretto alla memoria fisica da parte dei programmi può causare problemi come la distruzione del sistema operativo e la difficoltà di esecuzione simultanea di più programmi
- Soluzione: Astrazione della memoria per separare e proteggere i programmi in esecuzione
- Concetto di Spazio degl Indirizzi:
-Ogni programma ha un insieme unico di indirizzi (spazio degli indirizzi) che può usare per indirizzare la memoria
-Questo spazio è indipendente da altri processi e rappresenta una forma di memoria astratta

**Implementazione con registri base e limite**
- Vecchia soluzione: mappare lo spazio degli indirizzi di ogni processo in parti diverse della memoria fisica
- Registri Base e Limite: Due registri hardware speciali presenti in molte CPU
- Registro Base: contiene l'indirizzo fisico di inizio di un programma in memoria
- Registro Limite: contiene la lunghezza del programma
- Gli indirizzi generati dei programmi vengono aggiustati automaticamente aggiungendo il valore del registro base


**Address Spaces**
- Il registro di base mette in atto la rilocazione dinamica
- Il registro limite applica la protezione

![[Pasted image 20231115113932.png]]


**Funzionamento e limiti dei registri**
Ogni riferimento alla memoria da parte di un programma:
- Aggiunge il valore del registro base all'indirizzo generato
- Confronta con il registro limite per assicurare che l'accesso sia entro i limiti consentiti

- Vantaggi: Offre a ogni processo uno spazio degli indirizzi separato e protetto
- Svantaggi: Necessità di eseguire somme e confronti ad ogni accesso alla memoria, il che può essere letto


**Strategie per gestire il sovraccarico di memoria**
1) Swapping (Scambio) di processi:
- Sposta interi processi tra la memoria RAM e la memoria non volatile (disco/SSD)
- Processi inattivi archiviati su memoria non volatile

2) Memoria Virtuale:
- Permette l'esecuzione dei programmi anche se solo parzialmente presenti nella memoria principale


**Dynamic Partitions and Swapping**
- Lo scambio può portare alla frammentazione della memoria
- Necessaria compattazione della memoria (Estremamente lenta)

![[Pasted image 20231115114636.png]]

**Gestione dello spazio e crescita dei processi**
- Sfida: gestire processi con segmenti di dati in crescita
- Memory Compaction: sposta processi per liberare spazio, ma richiede tempo
- Soluzione: allocare memoria extra durante lo swapping o lo spostamento dei processi
- Out of Memory
-Uccidere il processo
-Trasferire il processo
-Swapping

**Gestione dinamica della memoria**
- Obiettivo: Tenere traccia dell'utilizzo della memoria
- Metodi principali:
-Soluzione 1:  Bitmap tiene traccia di quali blocchi vengono allocati
-Soluzione 2: Una lista collegato tiene traccia della memoria non allocata
- Importanza: Questo tracciamento non riguarda solo la memoria, ma anche risorse come i file system

**Bitmaps vs Linked Lists**
- Bitmap: trovare i fori richiede una scansione (lenta)
- Lista: liste di processi/"buchi"
- Allocazione lenta contro deallocazione lenta
- Buchi ordinati per indirizzo per una rapida coalescenza (come fusione tra gocce)

![[Pasted image 20231115115415.png]]

**Memory Management e Linked List**
Nella pratica viene spesso usata una doppia linked list
Rende più facile gestire lo spazio libero
- Può controllare facilmente se il precedente spazio è libero
- Può regolare facilmente i puntatori

![[Pasted image 20231115115547.png]]

**Schemi di allocazione della memoria**
- First Fit: Seleziona il primo spazio disponibile
- Next Fit: Seleziona il successivo spazio disponibile
- Best Fit: Sceglie lo spazio più adeguato
- Worst Fit: Sceglie lo spazio meno adeguato
- Quick Fit: Mantiene spazi di dimensioni diverse (le più richieste)
- Buddy Allocation (Linux): Migliora la performance di coalescenza del Quick Fit

**Allocazione della memoria in Linux**
- Linux utilizza vari meccanismi per l'allocazione della memoria
- Il principale è una allocaazione delle pagine basato sull'algoritmo di Buddy Memory Allocation
- Funzionamento:
-La memoria inizia come un singolo pezzo contiguo
-Ad ogni richiesta, la memoria viene divisa secondo una potenza di 2
-Blocchi di memoria contigui vengono uniti quando rilasciati

**Frammentazione e Slab Allocator**
- Il Buddy Algorithm può causare frammentazione interna: una richiesta di 65 pagine richiede l'allocazione di 128 pagine
- Lo SLAB Allocator in Linux risolve questo problema, prendendo blocchi tramite l'algoritmo buddy e ritagliando unità più piccole (slab) per gestirle separatamente

![[Pasted image 20231207101101.png| 400]]

[[Slab Allocator]]

