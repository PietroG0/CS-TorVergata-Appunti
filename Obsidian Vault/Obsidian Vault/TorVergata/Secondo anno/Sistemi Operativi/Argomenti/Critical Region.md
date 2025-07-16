**Requisiti per evitare race conditions**
1) Due processi non possono trovarsi contemporaneamente all'interno delle rispettive regioni critiche.
2) Non si possono fare ipotesi sulla velocità o sul numero di CPU.
3) Nessun processo in esecuzione al di fuori della propria regione critica può bloccare altri processi
4) Nessun processo deve aspettare all'infinito per entrare nella propria regione critica

NON soluzioni:
- Disabilitare gli interrupt: impedisce semplicemente che la CPU possa essere riallocata. Funziona solo per sistemi a CPU singola
- Bloccare le variabili: proteggere le regioni critiche non variabili 0/1. Le corse si verificano ora sulle variabili di blocco

