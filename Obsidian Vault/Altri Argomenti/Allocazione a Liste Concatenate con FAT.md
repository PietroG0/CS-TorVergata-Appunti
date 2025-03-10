Ottimizzazione dell'Allocazione a Liste Concatenate:
- Eliminazione degli svantaggi dell'allocazione a liste concatenate spostando i puntatori in una tabella di memoria (FAT - File Allocation Table)
- Ogni blocco del disco è rappresentato come una voce nella FAT... IN MEMORIA RAM

Struttura della FAT:
- Contiene la sequenza dei blocchi di ciascun file. • Esempio:
- File A utilizza i blocchi 4, 7, 2, 10, 12;
- File B i blocchi 6, 3, 11, 14.  
- Sequenze terminate da un indicatore speciale (es. -1) per marcare la fine.  
- In memoria principale

![[Pasted image 20231211160225.png| 400]]

Vantaggi della FAT:
- L'intero blocco è disponibile per i dati, ottimizzando lo spazio
- Accesso casuale semplificato: la sequenza dei blocchi è interamente in memoria

Gestione in Memoria:
- La FAT deve essere mantenuta interamente in memoria principale.  
- Richiede una quantità significativa di memoria: per un disco da 1 TB con blocchi da 1 KB, la FAT richiederebbe fino a 3 GB di RAM.

Implicazioni di Efficienza:
- Lo spazio e la velocità influenzano la dimensione della voce della FAT (da 3 a 4 byte per voce).
- L'approccio non è ottimale per dischi di grandi dimensioni a causa dell'elevato consumo di memoria.

Utilizzo pratico:
- Comunemente usato in dispositivi portatili come schede SD in fotocamere, lettori musicali e altri dispositivi elettronici

