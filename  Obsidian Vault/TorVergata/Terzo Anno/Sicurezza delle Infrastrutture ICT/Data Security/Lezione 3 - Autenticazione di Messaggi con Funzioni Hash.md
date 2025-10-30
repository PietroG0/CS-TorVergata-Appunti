#Sicurezza 
#### Confidenza != Integrità
**Confidenza**
- Nascondere i messaggi
- Solo la **leggittima destinazione** dovrebbe essere capace di **vedere** il contenuto di un messaggio

**Integrità**
- Autenticazione di messaggi
- **Nessuno** dovrebbe essere capace di **modificare** i messaggi durante la trasmissione
- Solo la **fonte leggittima** dovrebbe essere in grado di **forgiare** un messaggio

**Integrity-Only**: spesso è l'unica cosa che vuoi
- Es. il tuo CV
- Tutti dovrebbero essere in grado di leggerlo
- Ma solo il **proprietario** dovrebbe essere in grado di modificarlo

#### Autenticazione di messaggi (con una chiave simmetrica)

![[Pasted image 20250317115706.png]]

1. **Concetto di base**
	- Si utilizza una **chiave segreta** $K$ condivisa tra mittente e destinatario per garantire l'autenticità del messaggio
	- Il messaggio autentico viene accompagnato da un **tag di autenticazione** generato con una funzione crittografica

2. **Generazione del tag di autenticazione**
	- Il mittente prende il messaggio $m$ e lo usa insieme alla chiave segreta $K$ per generare un **tag** mediante una funzione crittografica forte
	- Questo tag è un codice breve che autentica il messaggio
	- Il tag **non è reversibile**, ovvero non si può risalire al messaggio originale solo dal tag

3. **Verifica del tag**
	- Il destinatario riceve il messaggio e il tag
	- Con la stessa chiave segreta $K$, rigenera il **tag** usando la stessa funzione crittografica
	- Confronta il **tag generato** con il **tag ricevuto**:
		- Se coincidono --> il messaggio è autentico
		- Se sono diversi --> il messaggio potrebbe essere stato alterato o la chiave è errata



#### Definire la Sicurezza per i Messaggi con codici di autenticazione
**Sicurezza = Imperdonabilità**
- **L'attaccante non dovrebbe essere in grado di creare o modificare un messaggio**
- Questo implica che l'attaccante non dovrebbe essere in grado di estrarre le chiave ${M, TAG(K,M)}$

**Formalmente: un gioco contro il modello attaccante**
- Dal più debole al più forte: Attacco sapendo il messaggio --> Attacco scegliendo il messaggio --> Scegliere un messaggio in modo attivo

**L'attaccante sceglie un numero di messaggi o tag passati**
- $(m_{1}, t_{1}), (m_{2}, t_{2}), ...$ 

**Ora vede (sceglie) un messaggio $m$


#### Proteggersi da attaccanti MITM (Man In The Middle)

![[Pasted image 20250317121438.png#center | 600]]

Questa immagine spiega come il meccaniscmo di autenticazione dei messaggi protegge da un attacco **MITM**, ovvero un attacco in cui un malintenzionato intercetta e modifica il messaggio durante la trasmissione

1. **Funzione di autenticazione**
	- Il messaggio originale $m$ viene inviato con un **TAG di autenticazione** generato tramite una funzione crittografica $F(K,m)$, dove $K$ è la chiave segreta condivisa tra mittente e destinatario
	- Il tag garantisce l'integrità del messaggio

2. **Tentativo di modifica da parte di un attaccante**
	- L'attaccante **intercetta** il messaggio e lo modifica, trasformandolo in **$m^*$ 
	- Tuttavia, l'attaccante **non conosce la chiave segreta** $K$ e quindi non può rigenerare il tag corretto per $m^*$
	- Il vecchio tag, generato per $m$, **non sarà valido** per $m^*$

3. **Verifica del destinatario
	- Il destinatario riceve il messaggio $m^*$ e il tag originale
	- Rigenera il tag con la funzione $F(K, m^{*})$ 
	- Se il nuovo tag **non coincide** con il tag ricevuto, significa che qualcuno ha modificato il messaggio


#### NON si può proteggersi dai "replay attacks"

![[Pasted image 20250317122143.png#center | 600]]

**Gli attacchi replay utilizzano nonces**
- Un **attacco di replay** avviene quando un attaccante intercetta un messaggio autentico, e lo **invia nuovamente** per ingannare il destinatario e far eseguire l'operazione più volte
- **Problema**: Se due messaggi sono identici, il destinatario non può distinguerli, permettendo all'attaccante di riutilizzarli

**Soluzione: Nonce**
Un **Nonce** è un valore unico che viene aggiunto a ogni messaggio per garantirne l'unicità

**Caratteristiche del Nonce**:
- E' un **informazione fresca** che cambia in ogni messaggio
- **Non deve rimanere segreto**, può essere incluso nel messaggio in chiaro
- Tipicamente è generato come:
	- **Numero di sequenza**: un numero incrementale per ogni messaggio
		- Ottimo modo per controllare se il messaggio è **fresco**
		- Attenzione particolare ai reboot, da dove si riparte se si riavvia?
	- **Numero casuale**: generato casualmente per ogni transazione
		- Problema: generando numeri casuali, e controllare che non siano uguali, c'è bisogno di un **DB**, che a lungo andare si riempirà 
	- **Timestamp**: data e ora del messaggio
		- Il tempo viene gestito da protocolli e da server, quindi si può attaccare con il forward-replay attack


#### MAC = Digital Signature?
**Digital signature (DS)**:
- *Nessuno* può modificare un messaggio digitally signed (eccetto il creatore)

**Message Authentication Code (MAC):
- *Nessuno eccetto TX e RX* (che posseggono la chiave) possono modificare un messaggio autenticato con MAC

**Entrambi hanno lo stesso scopo**
- Integrità del messaggio/dei dati

**Ma a differenza del MAC, DS garantisce non repudation (non ripudio) (source authentication)
- *DS* = Una forma di autenticazione *più sicura* rispetto al MAC
	- Ma richiede diverse cifrature

- Non ripudio = **DS** è considerata anche a livello legale, con un codice MAC posso "ripudiare" il fatto di aver mandato un messaggio (es. mandare una PEC)

*Come computare un MAC?* 
- Utilizzando le funzioni Hash


#### Hash function

> [!tip] Definizione
> Una funzione **hash crittografica** è una funzione matematica che prende in input un messaggio di qualsiasi dimensione e genere un **output (digest) di lunghezza fissa**. 

**Caratteristiche principali di una funzione hash crittografica**
1. *Deterministica*: Lo stesso input darà sempre lo stesso output
2. *Output di lunghezza fissa*: Indipendentemente dalla dimensione dell'input, il risultato avrà una lunghezza prestabilita (SHA-256 produce sempre 256 bit)
3. *Resistenza alla preimmagine (one way)*: Dato un hash $H(x)$, è computazionalmente difficile trovare il valore originale $x$
4. *Resistenza alla seconda preimmagine*: Dato un messaggio $x$ e il suo hash $H(x)$, è difficile trovare un altro messaggio $x'$ tale che $H(x) = H(x')$
5. *Resistenza alle collisioni*: E' difficile trovare due input diversi $x$ e $y$ tali che $H(x) = H(y)$
6. *Efficienza computazionale*: Deve essere veloce da calcolare per qualsiasi input


#### Autenticazione di messaggi con l'utilizzo delle hash functions

![[Pasted image 20250317153003.png#center | 600]]

>[!tip] Spiegazione
>E' molto difficile trovare un messaggio $M'$ che ha lo stesso Hash di un messaggio iniziale $M$, questo per la proprietà della resistenza alle collisioni dell'Hash spiegato in precedenza


![[Pasted image 20250317153157.png#center | 600]]

>[!tip] Spiegazione
>Aggiungendo una **chiave di autenticazione segreta** (secret), dato che l'attaccante non ne è a conoscenza, è computazionalmente difficile costruire un codice di autenticazione


- [ ] Aggiungere slide in riferimento a SHA-256


#### Secret Suffix e Secret Prefix
Quando si utilizza una funzione hash per autenticare un messaggio con una chiave segreta, ci sono due approcci principali:
- **Secret Suffix**: Si concatena la chiave **alla fine** del messaggio
- **Secret Prefix**: Si concatena la chiave **all'inizio** del messaggio

**Secret Suffix**

>[!Tip] Formula e Descrizione
>$\begin{align*} H(m||K) \end{align*}$ 
>
>**Descrizione**
>- Il messaggio $m$ viene concatenato con la chiave segreta $K$ prima di calcolare l'hash
>- Il destinatario, che conosce $K$, può verificare l'autenticità ricalcolando lo stesso hash


>[!danger] Problema di sicurezza
>Attacco di estensione dell'hash (Lenght Extension Attack)
>- Se si usa una funzione Hash basata su **Merkle-Damgard** (come MD5, SHA-1, SHA-256), un attaccante potrebbe manipolare il messaggio originale e calcolare un nuovo hash senza conoscere $K$
>- Questo accade perchè la struttura della funzione hash permette di "estendere" il digest senza conoscere il valore completo dell'input


**Secret Prefix**

>[!tip] Formula e Descrizione
>$H(K||m)$
>
>**Descrizione**
>- La chiave segreta $K$ viene concatenata **prima del messaggio**
>- Il destinatario, conoscendo $K$, può ricalcolare l'hash e verificare l'integrità del messaggio 


>[!danger] Problema di sicurezza
>Attacchi ai prefissi
>- Se la funzione hash ha punti deboli, un attaccante potrebbe cercare di eseguire attacchi **collision-based** per trovare due messaggi diversi $m_{1}$ e $m_{2}$ con lo stesso valore di hash
>- Inoltre, se un attaccante riesce a scoprire l'hash di una parte della chiave, potrebbe sfruttarlo per attacchi di **brute-forse** su $K$


#### Soluzione migliore: HMAC
La soluzione più robusta è utilizzare **HMAC (Hash-based Message Authentication Code)**, che combina la chiave segreta in modo più sicuro

>[!tip] Formula e Descrizione
>$HMAC(K, m) = H((K \oplus opad) || H((K \oplus ipad) || m))$
>
>- **HMAC** protegge da attacchi di estensione dell'hash e da attacchi su prefissi
>- Viene usato nei protocolli sicuri come **TLS, IPsec, OAuth**


![[Pasted image 20250317154903.png#center | 600]]












 
