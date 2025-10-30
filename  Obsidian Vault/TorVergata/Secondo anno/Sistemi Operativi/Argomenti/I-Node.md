I-node (Index Node) nei File System UNIX-like
- Definizione: Struttura dati fondamentale nei file system come ext2/ext3/ext4 in Linux.
- Contenuto: Contiene tutte le informazioni su un file, esclusi il nome e il contenuto. Include metadati come permessi, proprietario, timestamp e indirizzi dei blocchi di dati.
- Funzione: Ogni file e directory è rappresentato da un I-node univoco, indicizzato in una tabella di I-node.

Confronto con FAT (File Allocation Table)
- Gestione dei File:
	 - FAT si basa su una tabella di allocazione per tracciare i file, mentre i sistemi basati su I-node utilizzano una tabella di I-node.  
	- I sistemi I-node separano le informazioni sul file dalla sua posizione fisica sul disco.
- Informazioni sui File:
    - FAT fornisce meno dettagli sui file, concentrandosi principalmente sull'allocazione dello spazio.
    - I sistemi I-node offrono una gestione più dettagliata dei metadati, inclusi permessi e proprietà.
- Efficienza e Performance:
	 I file system basati su I-node tendono a essere più efficienti e performanti, specialmente su dischi di grandi dimensioni, grazie alla loro struttura avanzata.

**Funzionamento e Vantaggi degli I-Node**
- I-node (Index-Node) nei File System
	- Gli I-node sono strutture dati che elencano gli attributi e gli indirizzi dei blocchi dei file
	- Ogni I-node rappresenta un file, fornendo un metodo efficiente per trovare tutti i suoi blocchi di dati

- Efficienza della Memoria con I-node
	- Solo gli I-node dei file aperti sono mantenuti in memoria, riducendo significativamente l'utilizzo della memoria.
	- L'array degli I-node in memoria è proporzionale al numero di file aperti, non alla dimensione del disco.

- Esempio e Struttura
	Ogni I-Node ha una dimensione fissa e contiene informazioni quali dimensione del file, permessi, proprietario, e indirizzi dei blocchi di dati

![[Pasted image 20231211161039.png| 400]]

**Gestione dei File di Grandi dimensioni e Confronto con NTFS**
- Gestione File di Grandi Dimensioni
	- Gli I-Node hanno uno spazio limitato per gli indirizzi del disco
	- Per file che superano il limite, uno degli indirizzi nell'I-Node punta a un blocco contenente ulteriori indirizzi di blocchi di dati
	- Questo sistema permette di gestire file di dimensioni molto grandi con efficacia

- I-node nei File System UNIX e Windows NTFS
	- Gli I-node sono un concetto fondamentale in UNIX e nei suoi file system derivati
	- NTFS, utilizza una struttura simile con I-node più grandi

