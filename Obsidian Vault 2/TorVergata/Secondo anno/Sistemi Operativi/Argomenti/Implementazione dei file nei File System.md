- Obiettivo Principale: Gestire l'associazione tra i file e i blocchi del disco su cui sono memorizzati
- Importanza: Fondamentale per assicurare l'integrità, l'accesso efficiente e la gestione dello spazio su disco
- Varietà di Metodi: Diversi sistemi operativi adottano approcci differenti per questa associazione
- Basato su:
	Metodi basati su indici
	Liste concatenate
	Bitmap
	Strutture ad albero

- Focus: Analisi dei vari metodi e delle loro caratteristiche specifiche nel contesto dei diversi file system

**Problemi e Limitazioni dell'Allocazione contigua**
Frammentazione del Disco:
- Col passare del tempo, i dischi si frammentano a causa della rimozione di file
- In basso: La frammentazione lascia intervalli di blocchi liberi
- Problema di allocazione di nuovi file in spazi liberi frammentati

Gestione dello Spazio Libero:
- Richiede una lista di spazi liberi e la conoscenza della dimensione finale dei nuovi file
- Problemi nella previsione della dimensione del file e nella ricerca di spazi adeguati

Implicazioni Pratiche:
- Difficoltà nell'aggiungere nuovi file in un disco frammentato
- Necessità di compattazione del disco o di gestione intelligente dello spazio libero

![[Pasted image 20231211145558.png| ]]

[[Allocazione a Liste Concatenate]]

