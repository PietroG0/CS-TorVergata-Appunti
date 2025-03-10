#Reti 

#### Livello di Applicazione

Il cuore dello sviluppo delle applicazioni di rete è costituito dalla creazione dei programmi che sono eseguiti dai sistemi periferici e che comunicano tra loro via rete. Prima bisogna progettare l'architettura dell'applicazione

#### - Architettura Client - Server
#### - Architettura P2P

Socket = Interfaccia software simile ad una "porta"

Si parla anche di API (Application Programming Interface) tra l'applicazione e la rete, dato che la socket rappresenta l'interfaccia di programmazione con cui le applicazioni di rete vengono costruite

Gli host vengono identificati attraverso l'indirizzo IP, un numero univoco a 32 bit. Oltre all'indirizzo IP, il mittente deve anche verificare il processo destinatario, nello specifico la socket. Questo avviene attraverso un numero di porta di destinazione

- Trasferimento dati affidabile: Servizio importante, in questo modo il mittente sa per certo che i dati che invia ad una certa socket arriveranno sicuramente al destinatario, senza errori
- Applicazioni che tollerano perdite: La applicazioni multimediali video/audio a uso personale possono tollerare una certa quantità di dati perduti.
- Le applicazioni che hanno requisiti di throughput vengono dette applicazioni sensibili alla banda, in particolare le applicazioni multimediali
- Le applicazioni elastiche possono far uso di tanto o di poco throughput, a seconda di quanto ne sia necessario, in particolare web server, servizio di posta elettronica ecc...

#### - TCP
#### - UDP

#### Web e HTTP

HTTP (_HyperText Transfer Protocol_), è un protocollo a livello di applicazione e costituisce il cuore del Web. Questo protocollo è implementato in due programmi, client (Browser) e server in esecuzione su sistemi periferici diversi che comunicano tra loro scambiandosi messaggi HTTP.

HTTP utilizza TCP.
Il server invia i file richiesti ai client senza memorizzare alcuna informazione di stato a proposito del client. 

- Connessioni Persistenti = Connessione aperta, Invio o ricezione di _più_ oggetti, connessione chiusa 
- Connessioni non Persistenti = Connessione aperta, Invio o ricezione di un oggetto, Connessione chiusa --> Connessione nuova per ogni oggetto, 2 RTT per oggetto

RTT (_Round Trip Time_) rapppresenta il tempo impiegato da un piccolo pacchetto per viaggiare dal client al server e poi tornare al client. RTT include i ritardi di propagazione, di accodamento nei router e nei commutatori intermedi e di elaborazione di pacchetto

HTTP 1.1 --> Connessioni Persistenti

##### Formato dei messaggi HTTP

Messaggio di richiesta 

```
GET /somedir/page.html HTTP/1.1\r\n
Host: www.someschool.edu\r\n
Connection: close\r\n
User-Agent: Mozilla/5.0\r\n
Accept-Language: it\r\n
Accept: text/html, application/xhtml-xml\r\n
Accept-Encoding: gzip, deflate\r\n
Connection: keep-alive\r\n
\r\n
```

Riga di richiesta
- _GET_ = E' usato per richiedere una risorsa al server specificata nell'URL. Spesso è anche usata per inviare dati al server
- _POST_ = E' uno dei metodi HTTP per inviare dati al server. A differenza del metodo GET, i dati inviati con POST non sono visibili nell'URL, il che lo rende più sicuro
- _HEAD_ = Il metodo HEAD viene utilizzato per recuperare informazioni di intestazione associate a una risorsa specifica
- _PUT_ = il metodo PUT viene utilizzato per aggiornare o creare una risorsa sul server
- _DELETE_ = Il metodo DELETE viene utilizzato per eliminare una risorsa specifica dal server

Riga di Intestazione
Queste righe contengono i cosiddetti headers, sono dei metadati che forniscono informazioni aggiuntive sia nella richiesta che nella risposta di una comunicazione HTTP.

- _HOST_ = Hostname o numero di porta del server al quale sarà inviata la richiesta. Obbligatorio in HTTP 1.1
- _USER_AGENT_ = Identifica l'applicazione, il sistema operativo, il vendor e/o la versione dello user agent che sta effettuando la richiesta
- _ACCEPT_ = Tipo di contenuto, espressi come media type, compresi dal client
- _ACCEPT LANGUAGE_ = Linguaggi naturali o locali preferiti dal client
- _ACCEPT ENCODING_ = Algoritmi di codifica compresi dal client
- _CONNECTION_ = Controlla se la connessione rimarrà aperta al termine dello scambio richiesta/risposta.


Messaggio di risposta

```
HTTP/1.1 200 OK
Date: Tue, 08 Sep 2020 15:44:04 GMT
Server: Apache/2.4.6 (CentOs)
Last-Modified: Tue, 01 Mar 2016 18:57:50 GMT
Accept-Ranges: bytes
Content-Lenght: 2651
Content-Type: text/html, charset=UTF-8
\r\n
(data data data data ...)
```

Osserviamo che il messaggio di risposta è formato da 3 sezioni:

- **Riga di stato**, presenta 3 campi: la versione del protocollo, un codice di stato e corrispettivo messaggio di stato.
    - _1xx Informational_, una risposta intermedia per comunicaro lo stato di connessione o l'avanzamento della richiesta prima di completare l'azione richiesta e inviare una risposta finale.
    - _2xx Successful_, la richiesta è stata ricevuta con successo, compresa è accettata.  
        Per esempio `200 OK` significa che la richiesta ha avuto successo, l'oggetto richiesto viene inviato nella rispsota.
    - _3xx Redirect_, il client deve eseguire ulteriori azioni per soddisfare la richiesta.  
        Per esempio `301 Moved Permanently`, significa che l'oggetto richiesto è stato trasferito, la nuova posizione è specificata nell'intestatazione `Location`.
    - _4xx Client Error_, la richiesta è sintatticamente scorretta o non può essere soddisfatta.  
        Per esempio `404 Not Found`, significa che il documento richiesto non si trova su questo server, oppure `406 Not Acceptable`, l'oggetto richiesto non esiste in una forma che soddisfa i vari `Accept-*`.
    - _5xx Server Error_, il server ha fallito nel soddisfare una richiesta appartemente valida.  
        Per esempio `505 HTTP Version Not Supported`, il server non ha la versione di protocollo HTTP.


- **Righe di intestatazione**:
    - _Date_, la data e l'ora in cui il messaggio è stato originato.
    - _Server_, descrive il software usato dal server di origine per gestire la richiesta (troppi dettagli possono aiutare i malintenzionati ad attaccare il server).
    - _Last-Modified_, la data è l'ora il cui il server di origine crede che l'oggetto sia stato modificato per l'ultima volta.
    - _Accept-Ranges_, indica il supporto del server ai download parziali: il valore, se diverso da none, indica l'unità che si può usare per esprimere l'intervallo richiesto.
    - _Content-Lenght_, lunghezza in byte del corpo dell'entità inviato al ricevente (o che sarebbe stato inviato nel caso di una richiesta HEAD).
    - _Content-Type_, media type nel corpo dell'entità inviato al ricevente (o che sarebbe stato inviato nel caso di una richiesta HEAD).
- **Corpo**, contiene l'oggetto richiesto.


#### - Cookie


### Da HTTP/1.1 a HTTP/2 a HTTP/3

**Obiettivo principale**: diminuzione del ritardo nelle richieste HTTP a più oggetti

- **HTTP/1.1**, ha introdotto **GET multiple in pipeline** su una singola connessione TCP
    - Il server risponde _in ordine_ (FCFS: First-Come-First-Served scheduling) alle richieste GET
    - Con FCFS, oggetti piccoli possono dover aspettare per la trasmissione dietro a uno o più oggetti grandi (HOL: Head-Of-Line blocking)
    - Il recupero delle perdite (ritrasmissione dei segmenti TCP persi) blocca la trasmissione degli oggetti.

- **HTTP/2**, maggiore flessibilità del server nell'invio di oggetti al client
    - Metodi, codice di stato, maggior parte dei campi di intestazione inalterati rispetto a HTTP/1.1
    - Ordine di trasmissione degli oggetti richiesti basata su una priorità degli oggetti specificata dal client
    - Invio _push_ al client di oggetti aggiuntivi, senza che il client li abbia richiesti (notifiche)
    - Dividere gli oggetti in frame, intervallare i frame per mitigare il blocco HOL.

- **HTTP/3**, aggiunge sicurezza, controllo di errore e congestione per oggetto (più pipelining) su UDP.



#### DNS
Gli host internet possono essere identificati in vari modi, più precisamente da uno o più _hostname_ e da un unico _indirizzo IP_. Le persone ovviamente preferiscono identificare gli host mediante l'hostname, mentre i router ovviamente l'indirizzo IP. Al fine di conciliare i due approcci è necessario un servizio in grado di tradurre gli indirizzi IP in hostname e viceversa

**DNS (Domain Name System)**, è un protocollo a livello applicazione che si occupa della traduzione dei nomi. Consiste in un database distribuito implementato in una gerarchia di **DNS server**. Consente quindi agli host, di interrogare questo database per **risolvere** i nomi.

I server DNS sono generalmente macchine UNIX che eseguono il software BIND (Barkeley Internet Name Domain). DNS utilizza UDP e la porta 53.

DNS mette a disposizione altri importanti servizi:
- _Host aliasing_: Un host dal nome complicato può avere sinonimi o alias
- _Mail Server Aliasing_: Per esempio un utente, diciamo Bob, potrebbe avere un indirizzo di posta elettronica `bob@yahoo.com`. Tuttavia l'hostname del mail server di Bob potrebbe essere assai più complicato. Un'applicazione di posta può invocare il DNS per ottenere il nome canonico di un sinonimo fornito,così come l'indirizzo IP dell'host.
- _Load Distribution_: Il DNS viene utilizzato anche per distribuire il carico tra server replicati, per esempio dei web server. I siti con molto traffico vengono replicati su più server, ognuno eseguito su un host diverso con un IP diverso

##### Funzionamento DNS
Supponiamo che una certa applicazione in esecuzione sull'host di un utente abbia necessità di tradurre un hostname in un indirizzo IP. L'applicazione invocherà il lato client DNS specificando l'hostname da tradurre. Il DNS poi prende il controllo, inviando un messaggio di richiesta sulla rete. Dopo un ritardo di alcuni millisecondi/secondi, il client DNS riceve il messaggio di risposta contenente la corrispondenza desiderata, che viene poi passata all'applicazione. Pertanto dal punto di vista dell'applicazione, il DNS è una scatola nera che fornisce un servizio di traduzione semplice e diretto. Tuttavia la scatola nera è un insieme di server distribuiti per il mondo e da un protocollo a livello di applicazione che specifica la comunicazione tra DNS e server host richiedenti. Adesso la domanda che ci poniamo è: perchè non centralizzare il DNS:

- **Un solo point of failure**. Se il server DNS si guasta, ne soffre l'intera Internet.
- **Volume di traffico**. Un singolo DNS server potrebbe gestire tutte le richieste.
- **Database centralizzato distante**. Un singolo server DNS non può essere vicino a tutti i client, causando ritardi significativi.
- **Manutenzione**. Il singolo DNS dovrebbe contenere record relativi a tutti gli host di Internet. Questo database sarebbe vasto e dovrebbe essere sempre aggiornato.

In conclusione, centralizzare il DNS non è un'ottima soluzione da prendere in considerazione.

A questo punto possiamo parlare quindi di DNS come un sistema di _database distribuito e gerarchico_. Esistono 3 classi di DNS server:

- _Root Level_: In Internet esistono più di 1000 root server dislocati in tutto il mondo. Tali root server sono copie di 13 differenti root server gestiti da 12 diverse organizzazioni, coordinate attraverso lo IANA. I root server forniscono gli indirizzi IP dei TLD server.
- _Top-level Domain (TLD) server_: Questi server si occupano dei domini di primo livello quali com, org, net, edu, gov, e di tutti i domini di primo livello relativi ai vari paesi, come it, uk, fr, ca, jp. I TLD server forniscono gli indirizzi IP dei server autoritativi.
- _Server autoritativi_: Ogni organizzazione dotata di host pubblicamente accessibili tramite Internet deve fornire record DNS pubblicamente accessibili che associno i nomi di tali host a indirizzi IP. La maggior parte delle università e delle università e delle grandi società implementa e gestisce dei propri server autoritativi primario e secondario (di backup)

Esiste un altro tipo di DNS, detto **DNS server locale**, che non appartiene alla gerarchia di server, ma che è comunque centrale nell'architettura DNS. Ciascun ISP ha un DNS server locale. Quando un host si connette a un ISP, quest'ultimo gli fornisce un indirizzo IP tratto da uno o più dei suoi DNS server locali. Quando un host effettua una richiesta DNS, la query viene inviata al DNS locale che opera da proxy e inoltra la query alla gerarchia dei DNS server.

Due tipologie di query:
- _Query iterative_: Il server contattato risponde con il nome del server da contattare
- _Query ricorsive_: L'host affida il compito di tradurre il nome al server contattato

##### DNS Caching
Il DNS sfrutta in modo estensivo il caching per migliorare le prestazioni di ritardo e per ridurre il numero di messaggi DNS che "rimbalzano" su Internet. L'idea alla base del caching è molto semplice. Una volta che un qualsiasi server imapara la mappatura, la mette in cache, e restituisce immediatamente il mapping in caso di una query. Con il caching, il termpo di risposta ad una query è molto più veloce. Dopo un certo periodo di tempo (in genere dopo 2 giorni), le voci della cache vanno in timeout ovvero scompaiono. Inoltre i server TLD sono in genere memorizzati nella cache dei server DNS locali.


#### Streaming video e CDN

##### Video
Un video è una sequenza di immagini, visualizzate tipicamente a velocità costante di, 24 o 30 immagini al secondo. Un immagine non compressa è rappresentata mediante un array di pixel, ognuno dei quali codificato con un numero di bit per rappresentare lumininanza e crominananza.

I video possono essere compressi in modo da raggiungere un _compromesso tra qualità video e bit rate_. 
- _CBR_ (Costant Bit Rate)
- _VBR_ (Variable Bit Rate)

##### CDN
**CDN** (_Content Distribution Networks_): gestisce server distribuiti in molti posti diversi, memorizza copie dei video e di altri contenuti web nei server e cerca di dirigere le richieste degli utenti al punto della CDN in grado di offrire il servizio migliore. Possono essere **CDN privata**, cioè priprietaria del fornitore di contenuti, come la CDN di Google che distribuisce i contenuti di Youtube. Alternativamente ci sono **CDN di terze parti** che distribuisce contenuti per conto di molti fornitori di contenuti come Akamai.
