Principio di Allocazione:
- I file sono organizzati come liste concatenate di blocchi su disco
- Ogni blocco contiene una parte di dati e un puntatore al blocco successivo

Gestione dello Spazio:
- Efficiente utilizzo di tutti i blocchi disponibili sul disco
- Minima frammentazione esterna: riduce lo spreco di spazio non utilizzato

Struttura delle Voci di Directory:
- Ogni voce di directory traccia solo l'indirizzo del primo blocco di un file
- Il percorso completo di un file è costruito seguendo i puntatori da un blocco all'altro 

![[Pasted image 20231211145835.png| 500]]

**Prestazioni e Limitazioni**
Accesso ai Dati:
- Accesso Sequenziale: Leggere un file è efficiente, procedendo blocco per blocco.
- Accesso Casuale: Estremamente lento, richiede la lettura sequenziale di ogni blocco precedente

Dimensione dei Blocchi e Efficienza:
- Ogni blocco ha una dimensione effettiva ridotta a causa dello spazio occupato dai puntatori
- Letture e scritture di dimensioni standard (potenza di due) possono essere meno efficienti

Implicazioni Pratiche:
- Il metodo offre un'elevata efficienza nello sfruttamento dello spazio su disco...
- ma introduce complessità e rallentamenti nelle operazioni di accesso casuale
- Adatto per file a cui si accende principalmente in modo sequenziale

[[Allocazione a Liste Concatenate con FAT]]
[[I-Node]]
