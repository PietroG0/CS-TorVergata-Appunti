- File Condivisi: Essenziali in ambienti collaborativi per permettere a più utenti di lavorare sugli stessi file
- Tipi di Link:
	- Hard Link: Puntano direttamente all'I-node di un file condiviso
	- Link Simbolico (Soft Link): Puntano al nome di un file, invece che all'I-node
- Gestione degli Hard Link:
	- Un file con hard link viene rimosso solo quando non ci sono più riferimenti ad esso
	- Efficienza di spazio: una sola voce directory per ciascun hard link
	- Ideali per la gestione di file condivisi tra più proprietari 

![ 400](../../../../Immagini/Immagini/Pasted%20image%2020231213154217.png)

**Hard Links**
- Vantaggi degli Hard Link:
	- Spazio-efficienti: usano un solo I-node indipendentemente dal numero di link
	- Gestione traversale degli utenti: il file rimane accessibile finchè almeno un hard link è presente 
- Problemi e Limitazioni:
	- Il file permane fino all'eliminazione di tutti gli hard link, potenzialmente causando confusione sulla proprietà del file
	- A destra: Illustrano come i file condivisi sono gestiti nel file system e le implicazioni dell'eliminazione di hard link

![ 400](../../../../Immagini/Immagini/Pasted%20image%2020231213160638.png)

**Link Simbolici**
- Vantaggi dei Link Simbolici:
	- Maggiore flessibilità: possono riferirsi a nomi di file oltre i confini del file system e su macchine remote
	- Meno efficienti in termini di spazio: richiedono un I-node per ogni link simbolico

- Problemi e Limitazioni:
	- Link simbolici diventano invalidi alla rimozione del file originale
	- Overhead maggiore nella risoluzione del percorso rispetto agli hard link
	- Gestione più complessa, ma con benefici in termini di flessibità e organizzazione

- Problemi Comuni:
	- I file con più percorsi possono essere processati più volte da programmi di backup o di ricerca
	- Rischio di duplicaazione dei file su unità di backup
	- Necessità di software avanzato per gestire correttamente i file condivisi e i loro link

