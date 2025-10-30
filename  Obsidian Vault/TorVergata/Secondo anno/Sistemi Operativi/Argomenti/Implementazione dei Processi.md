Per implementare il modello dei processi, il sistema operativo mantiene una tabella (un array di strutture) chiamata **tabella dei processi**, con una voce per processo. (Alcuni autori chiamano queste voci **process control block** o **blocchi di controllo del processo**). Questa voce contiene importanti informazioni sullo stato del processo, incluso il suo contatore di programma, il puntatore allo stack, l’allocazione della memoria, lo stato dei suoi file aperti, le informazioni relative alla gestione e allo scheduling e qualunque altra cosa relativa al processo che debba essere salvata quando esso passerà dallo stato _in esecuzione_ allo stato _pronto_ o _bloccato_, così che possa essere riavviato in seguito come se non si fosse mai fermato.

![[Pasted image 20240122145726.png|| 500]]

