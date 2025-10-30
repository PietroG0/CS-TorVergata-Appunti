- Memorizzazione dei File: i file sono generalmente memorizzati su disco, e ci sono due modi principali per farlo:
	- allocazione contigua
	- suddivisione in blocchi non contigui

- Allocazione Contigua vs Blocchi:
	- Allocazione Contigua: Richiede spostamenti di file se le loro dimensioni aumentano, simile alla gestione della memoria con segmentazione
	- Blocchi non Contigui: I file vengono spezzettati in blocchi di dimensioni fisse, consentendo una maggiore flessibilità e un migliore utilizzo dello spazio su disco

- Dimensione dei Blocchi:
	- La scelta della dimensione dei blocchi è un compromesso tra spazio ed efficienza
	- La dimensione comune di 4KB è un compromesso tra lo spazio su disco e le prestazioni di trasferimento dei dati

**Efficienza e Prestazioni - Analisi del Compromesso**
- Prestazioni di Trasferimento Dati:
	- I dischi magnetici con blocchi più grandi consentono il trasferimento di più dati per operazione di lettura/scrittura
	- Ma: Blocchi più grandi = più spreco di memoria
- Efficienza dello Spazio:
	- Blocchi più piccoli minimizzano lo spreco di spazio con file piccoli
	- Ma: Distribuire la maggior parte dei file su più blocchi e incorrere in più ricerche e ritardi per leggerli
	- L'efficienza dello spazio diminuisce con l'aumento della dimensione dei blocchi
- Conflitto tra Prestazioni ed Efficienza:
	- Le prestazioni migliori richiedono blocchi più grandi, ma ciò può comportare uno spreco maggiore di spazio su disco
	- La scelta ottimale della dimensione del blocco deve bilanciare il tempo di trasferimento e l'efficienza dello spazio; in genere 4KB

![[Pasted image 20231214165637.png| 400]]

**Implicazioni per Dischi Magnetici e Memoria Flash**
- Dischi Magnetici:
	- La scelta delle dimensioni dei blocchi è influenzata dal tempo di ricerca e dal ritardo di rotazione
	- Con l'aumento della dimensione dei blocchi, si incrementa la velocità di trasferimento ma si riduce l'efficienza dello spazio
- Memoria Flash:
	- Diversamente dai dischi magnetici, la memoria flash può avere sprechi di spazio sia con blocchi grandi che piccoli a causa delle dimensioni fisse delle pagine flash
- Tendenze Attuali
	- Con l'incremento della capacità dei dischi (TB), potrebbe essere vantaggioso considerare blocchi più grandi per accettare una minore efficienza dello spazio in cambio di prestazioni migliori