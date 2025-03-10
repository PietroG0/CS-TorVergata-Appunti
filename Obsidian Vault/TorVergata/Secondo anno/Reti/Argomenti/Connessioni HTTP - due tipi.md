
Connessioni persistenti
- connessione TCP connection al server aperta
- più oggetti possono essere trasmessi su una singola connessione TCP tra client e server
- connessione TCP chiusa
- il server lascia la connessione TCP aperta dopo l'invio di una risposta
- i successivi messaggi tra gli stessi client/server vengono trasmessi sulla connessione aperta
- il client invia le richieste non appena incontra un oggetto referenziato
- un solo RTT per tutti gli oggetti referenziati



Connessioni non persistenti
1) connessione TCP aperta
2) almeno un oggetto viene trasmesso su una connessione TCP
3) connessione TCP chiusa
- Lo scaricamento di oggetti multipli richiede connessioni multiple

Connessioni non persistenti: tempo di risposta

RTT: tempo impiegato da un piccolo pacchetto per andare dal client al server e ritornare al client

Tempo di risposta (per oggetto):
- un RTT per inizializzare la connessione TCP
- un RTT perchè ritornino la richiesta HTTP e i primi byte della risposta HTTP
- tempo di trasmissione del file/oggetto 

Svantaggi delle connessioni non persistenti:
- richiedono 2 RTT per oggetto
- overhead del sistema operativo per ogni connessione TCP
- i browser spesso aprono connessioni TCP parallele per caricare gli oggetti referenziati
