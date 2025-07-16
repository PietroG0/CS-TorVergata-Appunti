Le chiamate di sistema sono l'interfaccia che il sistema operativo offre alle applicazioni per richiedere servizi

Problema:
- Il meccanismo delle chiamate di sistema è altamente specifico del sistema operativo e dell'hardware.
- La necessità di efficienza esaspera questo problema.

Soluzione:
- Incapsulare le chiamate di sistema nella libreria C
- Tipicamente esporta una chiamata di libreria per ogni chiamata di sistema
- [[Unix]] 'libc' si basa sulla libreria C POSIX
- Si noti che esistono molte librerie C UNIX.

I 10 passi per effettuare la chiamata di sistema:
- Preparazione dei parametri: il programma chiamante prepara i parametri
- Chiamata alla procedura di libreria: il programma effettua la chiamata alla procedura di libreria
- Collocazione del numero di chiamata di sistema: colloca il numero della chiamata di sistema in un registro, come RAX.
- Passaggio a modalità kernel: si esegue un'istruzione "trap".
- Esecuzione del gestore di chiamate di sistema: il gestore di chiamate di sistema specifico viene eseguito.
- Ritorno alla procedura di libreria utente: dopo, il controllo può essere restituito alla procedura di libreria utente, all'istruzione successiva all'istruzione "trap".
- Possibilità di blocco. La chiamata di sistema può bloccare il chiamante, ad esempio, se l'output desiderato non è disponibile.
- Ripresa dopo il blocco: Quando i'input o le condizioni desiderate sono disponibili, il processo bloccato viene ripreso.

![[Schermata del 2023-10-11 10-03-44.png]]

