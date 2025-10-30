"Shortest Job First" ottimizza il tempo medio di risposta nei sistemi batch. L'obiettivo è applicarlo ai sistemi interattivi

Sfida:
- Identificare quale tra i processi eseguibili sia effettivamente il più breve

Soluzione - Aging:
- Fare stime basate sul comportamento passato
- Stima del tempo per un comando: T0
- Stima aggiornata dopo nuova esecuzione T1 diventa aT0 + (1-a)T1
- Scelta di 'a' determina il peso delle esecuzioni precedenti nella nuova stima

Utilizzo dell'Aging:
- Prevista in molte siruazioni dove si basa la previsione su valori passati
- Facile da applicare, specialmente con a =1/2

