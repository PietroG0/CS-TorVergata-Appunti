#Sicurezza 

#### User Authentication

>[!tip] **Non** confondere con:
>- **Identificazione** --> Mostrare la tua "Identità Digitale" (email, ID)
>- **Autenticazione** --> Provare che la tua Identità Digitale è controllata da te (es. password)

>[!tip] Autenticazione significa:
>-**Qualcosa che tu (e solo tu) sai**
>	-Password, PIN, chiavi segrete, ...
>	
>-**Qualcosa che tu (e solot tu) possiedi**
>	-Smart card, Dispositivi fisici (token)
>	
>-**Tratti Somatici (Static Biometrics)**
>	-Retina, Fingerprint, faccia, ...
>	
>-**Qualcosa che fai (dynamic biometrics)**
>	-Riconoscimento della voce, Scrittura, Typing di caratteri, ...


#### Autenticazione con Fattori Multipli
**Usare due o più autenticazioni significa**:
- In serie, Step 1, Step 2, etc
- Scenari 2FA comuni:
	- Step 1 = password
	- Step 2 = Codice Univoco (SMS o Token Fisico)

**Dovrebbe essere quanto più possibile indipendente**
- Se l'attaccante ne rompe uno, **NON** deve rompere anche gli altri
	- E.g. Migliore se in sistemi/dispositivi diversi
	- E.g. Migliore se uno dei due è basato sulla biometrica


#### One-time password in 2-factor authentication
**Diversi requisiti**
- One-time token di autorizzazione
	- Generati su dispositivi differenti (e.g. cellulari, keycard)
	- Ricevuti su canali differenti (e.g. SMS, email, ...)

- **Deve** essere human-friendly


**HOTP - HMAC-based OTP**
- Usano HMAC, non hash plain
- Non usano una catena, ma un *contatore*
- $HOTP(K,C)$ = $Truncate(HMAC-SHA-256(K,C))$
- Dettagli in RFC 4226


**TOTP - Time-based OTP**
- Trasformano il tempo in un contatore
	- TOTP = HOTP(K,T)
	- T = (Unità di misura corrente - T0) / X


#### Password-based Authentication
**Password Authentication Protocol (PAP)**

>[!Info] Il più semplice dei protocolli
>Dimostrare che conosci la tua password, semplicemente immettendola


![[Pasted image 20250318141148.png | 500]]

**Due principali modelli di attacco**
- Attacco al canale della comunicazione
	- Eavesdropper, MITM, Replay, ...
	- Se volessimo utilizzare il PAP, dobbiamo essere sicuri di proteggere il canale di comunicazione

- Attacco nel backend UID-passwd database
	- L'attaccante penetra nel sistema e ruba l'intero database passwd
	- *Mitigazione*: Database con password hashate


#### Hashed passwd database
**Idea**: conservare $H(passwd)$ invece di passwd
- Aumenta la sicurezza, se l'attaccante ruba il Database, dovrebbe comunque "invertire" passwd
- Con un buon hash c'è solo un metodo --> brute-force/indovinare

![[Pasted image 20250318141617.png | 600]]

**Quale Hash utilizzare?**
Il migliore ad oggi è SHA256, ma ha 2 problematiche

>[!danger] Due Problemi
>1. Idealizzato per essere veloce
>	-Computazione veloce = cracking veloce (più tentativi al secondo)
>2. Usato nel mining dei Bitcoin

**Hashed passwd: Migliore con hash lenti**
- Bcrypt: Progettato nel 1999 per sistemi Unix
	- Specificatamente per hashind di password

- Include parametri salt + "costi"
	- Cost = $x$ --> richiede $2^x$ iterazioni


#### Challenge-Handshake Authentication
**Prova di conoscenza: Result of computation**

![[Pasted image 20250318142230.png | 500]]

>[!info] Due Proprietà
>-Questa computazione **non** può rilevare il segreto:
>	-Se $res=f(P), P=F^{-1}(res)$ **NON** deve essere computabile
>	
>-$F(P)$ **non** deve essere replicata dagli attaccanti
>	-$F$ non può solamente essere una funzione di $P$, ma deve includere un *nonce*


**CHAP**

![[Pasted image 20250318142732.png | 600]]

**Passwd segreta non può mai essere trasmessa in chiaro**
- Sicuro contro avversari che possono eavesdrop il canale
- Hash è l'approccio usuale, ma **NON** è l'unico


**PRO e CONTRO**

>[!check] PRO
>- Protezione contro attacchi playback (replay)
>	- Ma bisogna essere sicuri che non si ripeta
>
>
>- Sfide Ripetute
> 	 - L'autenticazione può essere ripetuta superando il tempo di collegamento 
> 	 - Questo per limitare il tempo di esposizione per ogni singolo attacco
> 
> - Inizializzate dall'Autenticatore
> 	- I Peer non possono essere inizializzati


>[!danger] CONTRO
>- Il segreto deve essere accessibile in una forma plaintext
>	- Non si possono usare database con password decriptate irriversibili


![[Pasted image 20250318143634.png]]

Questa slide spiega una debolezza del protocollo **CHAP** rispetto alla gesntione delle password

>[!info] Come funziona?
>- Il server invia una **Challenge** (un numero casuale)
>- Il client risponde con il proprio nome utente e un valore $H(mypass | 135623)$, cioè l'hash della password concatenata alla challenge
>- Il server confronta questo valore con il valore calcolato internamente usando la password in chiaro presente nel DB
>- Se il valore è corretto, il server invia **ACK**, altrimenti **NACK**


>[!danger] Problema evidenziato
>Il server ha bisogno di **calcolare l'hash** per verificare la risposta. Per farlo, deve **avere accesso alla password in chiaro**, di conseguenza il database delle credenziali deve memorizzare le password in chiaro, rendendolo un bersaglio vulnerabile per attacchi


#### Mitigazione: "Salt"
Un altro metodo è utilizzare il **salt**.

- Invece di memorizzare la password in chiaro nel database, viene usato un **salt** (valore casuale)
- Il server genera una challenge e fornisce anche un **salt** predefinito (es. 9876)
- Il client calcola la risposta usando la password e il salt: $H(H(salt,password) || challenge)$
- Il server memorizza nel database la password **salata e hashata**: $H(salt,password)$

>[!check] Vantaggi
>1. **Impedisce il riutilizzo delle password rubate**:
>	- Se un attaccante ottiene il database, non vede le password in chiaro, ma solo hash
>	- Non può riutilizzare **immediatamente** le credenziali in altri sistemi
>
>
>1. **Miglior protezione contro attacchi offline**:
>	- Un database rubato non permette di autenticarsi direttamente
>	- Tuttavia, brute-force e attacchi con dizionario restano possibili
>
>
>1. **Facilità di rigenerazione periodica**:
>	- Il **salt** può essere cambiato periodicamente per ridurre il rischio di attacchi prolungati
>	- Se un attaccante ottiene il database, cambiando il salt si invalidano gli hash precedenti
 


#### Password: Analisi della robustezza
**Password o Chiavi segrete?**

>[!info] Differenze
>- Chiave Segreta: una stringa random di $N$ bit
>	- Probabilità di indovinare con brute-force = 1 su $2^n$
>
>- Password: una stringa scelta da persone
>	- Probabilità di indovinare con brute-force: Molto più bassa di $n = 1$ su $2^n$


>[!danger] Password: Quattro problemi principali
>**Password overload**
>- Gli utenti *molto spesso* riutilizzano le loro password su siti diversi
>  
> **Charset ristretto**
> - Non tutti i possibili caratteri sono usati
> 
> **Bassa entropia**
> - Le password dovrebbero essere ricordate, quindi non sono minimamente random
> 
> **Predicibilità (e attacchi con dizionari)**
> - Cattive abitudini nella scelta delle password
> - Regole human-friendly per "generare" password

![[Pasted image 20250318150009.png | 600]]


![[Pasted image 20250318150028.png | 600]]


![[Pasted image 20250318150058.png | 600]]


#### Entropia
**Sia $X$ una variabile discretamente random
- Variabile discretamente random: una quantità il cui risultato è $x_{1}, x_{2}, ..., x_{n}$ con probabilità $p_{1}, p_{2}, ..., p_{n}$

**Entropia: $H(X) = -\sum\limits {i} \cdot p_{i} \cdot \log_{2} \cdot p_{i}$
- Misurata in bit = quantità di informazioni portata da $X$

**Esempio** Lancio di una moneta
$x_{1} = face(A), x_{2} = face(B)$, $p_{1}=p_{2}=\frac{1}{2}$
--> $H(X) = -2 \cdot (\frac{1}{2} \log{2} \cdot \frac{1}{2})$ = $-\log{2}\frac{1}{2}$ = $\log_{2} 2$ = $1$ 


![[Pasted image 20250318153829.png | 600]]


#### Approcci per il cracking delle password

**Boost dictionary attacks con approcci rule-based**
Software specializzati nel "crackare" password hashate in Database
- es. John the Ripper, haschat, ecc

*Due componenti principali*
- Un database 
- Un generatore di regole per le password


**Hash cracking via precomputazione**
*Idea*: precomputazione
- Guardare in una tabella gigante (algoritmi efficienti di lookup)

Quanto giganti?
(es. MD5 = 128b = 16B)
- Tutti i 95 caratteri in una tastiera standard, 1-8 passwd sizes:
	- N.entries $\sim 95^{8} \sim 2^{52.6} \sim 6.7 \cdot 10^{15}$ 
	- Memoria (1B passwd, 16GB MD5) $\rightarrow$ 112781 Tera Bytes


**Space-time trade-offs**
- *Rainbow Tables*
	- Tutti i 95 caratteri in una tastiera standard
	- 1-8 char passwd
	- "Solamente" 460 GB per il 96.8% rate di successo 
	- $\rightarrow$ https://project-rainbowcrack.com/buy.htm

- Perchè così "piccolo"?
	- Space-Time trade-off


![[Pasted image 20250409111019.png#center | 600]]

*Metodo*
1. Parti da una password iniziale
2. Calcola il suo **hash**
3. Applichi una **funzione di riduzione** per ottenere una nuova password (simile a una "decodifica", ma non è vera inversione crittografica)
4. **Iteri** questo processo per costruire una catena di hash/riduzioni
5. Alla fine, **memorizzi solo la prima password della catena e l'ultimo hash**

*Dettagli*
- *Funzione di riduzione*: è una funzione "fatta su misura" che **converte un hash in una possibile password** (non è crittografica). Ad esempio, può prendere i primi N caratteri dell'hash e trasformarli in una password in BASE64
- Questo metodo ti permette, quando trovi un hash in un DB, di **scorrere catene precalcolate** per vedere se quell'hash è già stato visto e risalire alla password originale

*Obiettivo finale*
- Creare delle **catene hash/riduzione**, salvando solo:
	- L'inizio della catena (plaintext)
	- La fine della catena (hash)

- Questo permette di risparmiare spazio, e di cercare più velocemente una password a partire da un hash usando la rainbow table



**Hashed passwd DBs: salt**

*Sicurezza*: la stessa di password hashate
- Salt in chiaro: non è un problema per crypto hash

*3 Vantaggi principali*
- Più difficile da crackare (una tabella rainbow per ogni valore di salt)
	- 12 bit salt = $2^{12}$ tabelle

- Stesse password ma salt differente $\rightarrow$ Hash differente
	- L'attaccante non dovrebbe vedere se una password è riutilizzata
		- Dentro al DB: stessa passwd tra user differenti
		- Attraverso i DBs: passwd riutilizzata dallo stesso utente

- I DB possono essere "re-salted" $\rightarrow$ CHAP-specific vantaggi


**Bloom Filters**

>[!info] Definizione
>Un **Bloom filter** è una struttura dati **probabilistica** che serve per verificare **appartenenza a un insieme** in modo:
>- Molto veloce (0,1 per ogni verifica)
>- Molto compatto in memoria
>
>Ma attenzione:
>- Possono dare dei **falsi positivi**
>- Mai **falsi negativi**


![[Pasted image 20250409113008.png#center | 600]]

Qui vediamo come funziona una verifica di appartenenza **senza Bloom filter**:
1. Hai una lista di elementi ($Element1, Element2, ..., Element n$)
2. Per sapere se $Element 3$ è presente, devi **scorrere l'elenco**
3. **Tempo**: almeno $\log(n)$ (con strutture tipo albero) o peggio con liste non ordinate
4. **Memoria**: devi **memorizzare tutti gli elementi** $\rightarrow$ richiede almeno $n \cdot sizeof(element)$ 

Con un **Bloom Filter**:
1. Quando inserisci un elemento, **calcoli diversis hash** e **attivi dei bit** in un array di bit
2. Quando vuoi sapere se un elemento è presente, **ricalcoli gli hash** e controlli se **tutti i bit corrispondenti sono attivi**
3. Se anche uno solo non lo è $\rightarrow$ elemento sicuramente **non presente**
4. Se tutti lo sono $\rightarrow$ elemento **potrebbe essere presente**

>[!danger] Price to pay
>C'è una **piccola possibilità** che il filtro risponda "Si" anche se l'elemento **non è davvero presente**
>Questo succede perchè più elementi impostano gli stessi bit $\rightarrow$ si crea una **sovrapposizione**


![[GIF Speed Changer (3).gif#center | 600]]


**Probabilità falsi positivi**
$n$ = occorrenze elementi conservati
$k$ = occorrenze funzioni hash
$m$ = bits di memoria nel filter

$P(bit_{0}) = {({1 - \frac{1}{m}})^{k\cdot n}} \approx e^{-kn/m}$ 
$P(bit_{1}) = {(1 - (1 - \frac{1}{m})^{k\cdot n}}) \approx 1-e^{-kn/m}$  

$$P(falsepos) = {(1 - (1 - \frac{1}{m})^{k\cdot n}})^{k} \approx (1-e^{-kn/m})^{k}$$  

**Numero ottimo di Hash**

Assumiamo:
- Misura del filtro $m$
- Numero di elementi $n$

$$
\phi \approx (1-{e}^{-nk/m})^{k}
= f(k)
$$

*Esempio*

![[Pasted image 20250417191704.png#center | 500]]


>[!info] Da ricordare
>Il numero ottimo di Hash si ha quando c'è probabilità $\frac{1}{2}$   


>[!question] Domanda
>Un password checker è realizzato con un Filtro di Bloom avente una memoria di 10Mbit. Si vuole garantire una probabilità di falso positivo di circa il $6.25$% (1/16).
>
>1) Quale è il numero ottimo di hash per questo filtro? $\rightarrow$ $-log_{2} e$ 
>2) In tale condizione di ottimo, quale sarebbe il massimo numero di password memorizzabili? $\rightarrow$ $k=\frac{m}{n} \log 2$ $\rightarrow$ $k=4;$ $n = \frac{m}{4}\log 2$ = $10^{7} \cdot \frac{{log_{2}}}{4}$ = $1.733.000$ password
>3) Se si volessero usare solo DUE hash, quale sarebbe il massimo numero di password memorizzabile garantendo il requisito di falso positivo precedente? $\rightarrow \phi = {(1-{e}^{-k\cdot \frac{n}{m}})^{k}} \rightarrow k=4 \rightarrow 1-{e}^{-2x} = \frac{1}{4}$ = $e^{-2x} = \frac{3}{4} \rightarrow -2x = ln \frac{3}{4} \rightarrow x = \frac{1}{2} ln \frac{4}{3}$     



