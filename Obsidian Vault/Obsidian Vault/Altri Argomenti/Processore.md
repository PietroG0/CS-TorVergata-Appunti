
- La CPU è il cervello del computer, esegue istruzioni dalla memoria.
- il ciclo base della CPU : preleva (fetch), decodifica (decode), esegue (execute) istruzioni.
- i programmi vengono eseguiti in questo ciclo.

- Le CPU eseguono un set specifico di istruzioni.
- registri interni memorizzano dati importanti e risultati
- i set di istruzioni includono funzione per il caricamento/salvataggio dati dalla memoria.

- Registri speciali come il program counter indicano l'istruzione successiva.
- lo stack pointer punta alla cima dello stack in memoria.
- lo stack contiene frame di procedure con parametri e variabili locali.

- Il registro Program Status Word (PSW) contiene informazioni sullo stato del programma ed è fondamentale per chiamate di sistema e I/O.

- Il sistema operativo gestisce il *multiplexing* temporale della CPU.
- durante il multiplexing, il sistema operativo salva e ripristina i registri.
- ciò permette al SO di eseguire programmi in modo efficiente.

Più di un processore
- Multithreading (o hyperthreading)
- tiene all'interno della CPU lo stato di due thread ma non c'è una esecuzione parallela vera e propria.
- il SO deve tenerne conto

- Multiprocessori, vantaggi:
- throughput
- economia di scala
- affidabilità

- Multicore
- GPU
- Impatto fondamentale delle cache