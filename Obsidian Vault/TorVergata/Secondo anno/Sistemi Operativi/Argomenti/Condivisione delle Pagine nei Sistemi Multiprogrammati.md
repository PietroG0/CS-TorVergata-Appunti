E' comune che molti utenti eseguano lo stesso programma o utilizzino le stesse librerie.
Condividere pagine di memoria tra questi processi è più efficiente che mantenerne copie separate

Tipi di Pagine Condivisibili:
- Le pagine di sola lettura, come il testo dei programmi: si
- Le pagine dei dati: generalmente no

Per facilitare la condivisione è meglio separare spazi di indirizzo in:
I-space : Istruzioni
D-space: Dati

Processi diversi possono utilizzare la stessa tabella delle pagine per l'I-space ma tabelle diverse per il D-space
- Implementazione e Scheduling: con ciascun processo ha puntatori sia all'I-space che al D-space.
- Lo scheduler utilizza questi puntatori per impostare l'MMU

Problemi con Pagine condivise:
- La rimozione di un processo da memoria può causare numerosi page fault in un altro processo che condivide le stesse pagine
- E' cruciale sapere se le pagine sono ancora in uso per evitare la loro liberazione accidentale

Condivisione dei Dati: Più complessa rispetto alla condivisione del codice.
- Ad esempio, in UNIX, dopo una fork, genitore e figlio condivisono sia il testo che i dati, inizialmente come sola lettura

Copy on Write (Copia in Caso di Scrittura): Se un processo modifica i dati, si genera una trap, e viene creata una copia della pagine modificata
- Entrambe le copie diventano più modificabili (READ/WRITE)
- Questo metodo evita la copia di pagine che non vengono mai modificate
- Estremamente efficiente per evitare la proliferazione di pagine

