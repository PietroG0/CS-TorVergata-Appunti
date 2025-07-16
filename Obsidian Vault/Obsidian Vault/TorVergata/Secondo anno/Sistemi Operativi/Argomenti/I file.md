**Caratteristiche dei nomi dei file**
- File e astrazione: i file fungono da metodo di astrazione per salvare e leggere informazioni su disco, nascondendo i dettagli tecnici all'utente
- Nomenclatura dei File: I file vengono identificati tramite nomi, che possono variare in base al sistema operativo
- Lunghezza e "sensibilità" dei Nomi: Alcuni sistemi operativi limitano la lunghezza dei nomi e dei file, mentre altri supportano nomi più lunghi
- Evoluzione dei File System: Vari file system sono stati sviluppati nel corso del tempo

**Estensioni dei file e il loro significato**
- Estensioni di File: Le estensioni sono parti di nomi di file che seguono un punto, indicando generalmente una caratteristica specifica del file
- Ruolo delle Estensioni: In alcuni sistemi, le estensioni sono puramente convenzionali e non richieste dal sistema operativo (unix), mentre in altri (come windows) hanno un significato specifico e sono associati a programmi specifici

**Tipologie di Struttura dei File**
A) Sequenza non Strutturata di Byte:
- I file sono visti dal sistema operativo come una serie non strutturata di byte
- Il significato dei dati è determinato dai programmi a livello utente, non dal sistema operativo
- Questo approccio è adottato da sistemi come unix, linux, macos e windows

B) Sequenza di Record di Lunghezza Fissa
- Un file è una sequenza di record con una struttura interna definita e lunghezza fissa
- Il modello storico basato su schede perforate a 80 colonne in mainframe
- Letture e scritture avvengono a unità di record, meno comune nei sistemi operativi moderni ma era prevalente nei mainframe in passato

C) File come Albero di Record:
- Il file è organizzato come un albero di record, con lunghezze variabili e un campo chiave in posizione fissa
- L'organizzazione consente ricerche rapide basate su chiavi specifiche
- Utilizzato principalmente in sistemi mainframe per elaborazioni dati di carattere commerciale, diverso dalle sequenze non strutturate di unix e windows

![[Pasted image 20231204133748.png| 500]]


**Tipi di file e le loro strutture**
File e Directory Normali:
- Sistemi Operativi: Utilizzati in UNIX e windows
- File normali: Contengono informazioni utente e sono la forma più comune
- Directory: File di sistema per mantenere la struttura del file system

File Speciali:
- File Speciali a Caratteri: Usati per modellare dispositivi seriali di I/O come terminali e stampanti. 
- File Speciali a Blocchi: Usati per modellare dischi

Tipi di File Normali:
- File ASCII: Composti da righe di testo, visualizzabili e stampabili; variano nella terminazione delle righe 
- File Binari: Non leggibili come testo: hanno una struttura interna conosciuta dai programmi che li utilizzano

**File e Strutture Interne**
A) File Eseguibile:
- Esempio da una delle prime versioni di unix
- Sequenza di byte con formato specifico per l'esecuzione
- Componenti:
-Intestazione (Header): Contiene un 'numero magico' per identificare il file come eseguibile, dimensioni delle parti del file, indirizzo di esecuzione iniziale e flag
-Testo e Dati: Parti effettive del programma, caricate e rilocate in memoria
-Tabella dei Simboli: Utilizzate per il debug

B) File di Archivio
- Descrizione: Raccolta di procedure di libreria (moduli) compilate ma non collegate
- Intestazione dei Moduli: Indicano nome, data di creazione, proprietario, codice di protezione e dimensione
- Carattere Binario: Stampare questi file produrrebbe caratteri incomprensibili

