Descrizione:
- Versione con prelazione di SJF
- Seleziona sempre il processo con il tempo rimanente più breve per completare
- Il tempo di esecuzione deve essere noto in anticipo

Funzionamento:
- Contronta il tempo totale del nuovo job con il tempo rimanente dei processi in esecuzione
- Se il nuovo job è più breve del processo corrente, sospende il processo corrente ed esegue il nuovo job
- Assicura che i nuovi job brevi ricevano un servizio rapido