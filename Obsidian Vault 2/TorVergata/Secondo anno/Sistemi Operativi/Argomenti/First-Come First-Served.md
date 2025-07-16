Descrizione:
- Algoritmo di scheduling senza prelazione
- Processi assegnati alla CPU nell'ordine in cui arrivano
- Una singola coda di processi in stato pronto. Il primo job esegue immediatamente senza interruzioni
- Processi bloccati ritornano in fondo alla coda

Vantaggi:
- Facile da capire e programmare
- Equo in base all'ordine di arrivo

Svantaggi:
- Prestazioni non ottimali in scenari misti
- Può risultare in tempi di attesa molto lunghi per processi I/O bound in presenza di un processo CPU-bound
