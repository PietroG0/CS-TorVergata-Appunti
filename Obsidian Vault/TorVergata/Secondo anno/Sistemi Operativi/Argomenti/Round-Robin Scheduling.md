Concetto:
- Uno degli algoritmi di scheduling più vecchi, semplici, equi e ampiamente utilizzati
- Ogni processo riceve un intervallo di tempo o "quanto" per l'esecuzione
- Se il processo non ha terminato al termine del quanto, la CPU viene prelazionata per un altro processo
- Se un processo termina o si blocca prima del quanto, il passaggio avviene automaticamente

Implementazione:
- Mantenere una lista dei processi eseguibili
- Una volta esaurito il quanto, il processo viene spostato alla fine della lista

![[Pasted image 20231120143425.png]]

Durata del Quanto:
- La scelta del quanto influisce sull'efficienza
- Supponendo 1 ms per il cambio di contesto e 4 ms per il quanto: il 20% del tempo CPU sprecato in overhead

Trade-off:
- Quanto lungo: riduce l'overhead, ma peggiora la reattività
- Quanto breve: maggiore overhead e riduzione dell'efficienza della CPU

Ottimizzazione:
- Se il quanto è maggiore del tempo medio di burst di CPU, la prelazione potrebbe non avvenire spesso. Molti processi potrebbero bloccarsi prima
- Compromesso: un quanto tra 20 e 50 ms è spesso ragionevole per bilanciare efficienza e reattività

