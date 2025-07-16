Miglioramento dell'Algoritmo Working Set:
- WSClock è un'evoluzione dell'algoritmo Clock che integra informazioni del working set
- Popolare per la sua semplicità e buone prestazioni

Struttura Dati:
- Usa una lista circolare di frame, simile all'algoritmo Clock
- Ogni frame nella lista contiene:
- - il tempo dell'ultimo utilizzo
- - il bit R (Riferimento)
- - Il bit M (Modificato)

**Gestione Scritture e Selezione Pagina in WSClock**
Limitazione Scritture su Memoria non Volatile:
- Possibilità di schedulare tutte le pagine per I/O su memoria non volatile in un ciclo di clock
- Per ridurre il traffico su disco/SSD, si imposta un limite massimo di scritture (n pagine)
- Una volta raggiunto il limite n, ulteriori scritture non vengono schedulate

Comportamento al Completamento del Giro di Orologio
Quando ci sono Scritture Pendenti
- La lancetta prosegue il suo giro cercando pagine "pulite"
- Non appena una scrittura pendente viene completata, la pagina associata diventa "pulita"
- La lancetta seleziona la prima pagina pulita che incontra e la rimuove dalla memoria

Quando NON ci sono Scritture Pendenti
- Significa che tutte le pagine sono attivamente utilizzate 
- La strategia diventa quella di scegliere e rimuovere una pagina pulita a caso
- Se non ci sono pagine pulite disponibili, la pagina corrente viene scelta per la rimozione e la sua copia viene scritta su disco

