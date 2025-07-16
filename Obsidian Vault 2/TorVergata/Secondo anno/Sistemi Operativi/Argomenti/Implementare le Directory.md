**Concetti di Base**
- Funzione Principale: Le directory mappano i nomi ASCII dei file sulle informazioni necessarie per localizzare i dati su disco
- Metodi di Allocazione: Variano a seconda del sistema operativo, includendo indirizzi di blocchi contigui, il primo blocco nelle liste concatenate, o i numeri degli I-node

![[Pasted image 20231213153004.png| 500]]

**Gestione dei nomi dei File**
• Nomi di File Variabili: Supporto per nomi di file di lunghezza variabile, con un limite tipico di 255 caratteri.
• Strutture di Directory: 
	a) Voci di Directory di Lunghezza Variabile: l'header di lunghezza fissa seguito dal nome del file. 
	b) Gestione degli Heap: le voci di directory di lunghezza fissa con nomi dei file gestiti in uno heap separato.

• Efficienza e Limitazioni: gestiscono i nomi di lunghezza variabile ma presentano sfide nella gestione degli spazi vuoti (un file viene cancellato).


**Ricerca con Tabelle di Hash**
• Ricerca Lineare Tradizionale: 
	• Inizialmente, i file in una directory venivano cercati linearmente dall'inizio alla fine. 
	• Questo metodo può diventare lento in directory con un gran numero di file. 
• Uso delle Tabelle di Hash: 
	•Introduzione di tabelle di hash in ogni directory per accelerare il processo di ricerca. 
	• Il nome di un file è sottoposto a hashing per generare un indice nell'intervallo da 0 a n-1. 
	• La voce corrispondente nella tabella di hash indica il punto di partenza per la ricerca del file. 
• Gestione delle Collisioni: 
	• Creazione di liste concatenate per gestire più file che condividono lo stesso valore hash. 
	• La ricerca verifica tutte le voci nella catena per trovare il file desiderato.


Uso della Cache per Ricerce Efficienti
- Caching delle Ricerche:
	- Salvataggio dei risultati di ricerche comuni nella cache per accesso rapido
	- Prima di avviare una ricerca, si verifica se il file si trova nella cache
- Vantaggi e Limitazioni:
	- La cache aumenta l'efficienza delle ricerche, specialmente per file frequentemente richiesti
	- Efficace quando la maggior parte delle ricerche riguarda un numero limitato di file
- Complessità Amministrativa:
	- L'uso di tabelle di hash e cache introduce una maggiore complessità nella gestione delle directory
	- Più adatto a sistemi con directory molto estese, dove si prevede un elevato numero di file

