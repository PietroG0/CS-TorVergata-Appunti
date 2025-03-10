Condivisione su Ampia Scala:
- I SO condividono automaticamente tutte le pagine di testo di un programma avviato più volte
- Per evitare problemi, meglio pagine in sola lettura

Copy on Write per Dati: Se un processo modifica una pagina di dati condivisa, occorre applicare "copy on write"

- Librerie condivise - Dynamic Link Libraries (DLL): Usate per ridurre l'ingombro di grandi librerie comuni

Problema di Indirizzamento: Le librerie condivise possono essere posizionate a indirizzi diversi nei vari processi, questo impedisce l'uso di indirizzi assoluti nelle istruzioni
	Soluzione Compilativa: Le librerie condivise vengono compilate con indirizzi relativi anzichè assoluti, le istruzioni usano offset relativi piuttosto che puntare a indirizzi specifici

