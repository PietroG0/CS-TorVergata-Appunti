#Sicurezza 

#### Introduzione in cifrature pratiche: Stream, Block, Modi di operare

#### Cifrature Pratiche
*Due maggiori categorie*
- Cifrature *Stream*
	- Tradizionali (deboli): RC4
	- Moderne (forti): Salsa29, ChaCha20

- Cifrature *Block*
	- Tradizionali (deboli): DES, 3DES
	- Moderne (forti): AES

- In più le cifrature *Block* sono utilizzate in modalità *Stream*
	- AES-CTR


#### Cifrature Stream

![[Pasted image 20250311151248.png | 600]]

*Goal*: "Approssimare" un one-time-pad

*Differenze cruciali*:
- OTP --> Chiave Random
- Cifrature Stream --> Keystream Random

>[!danger] Attenzione
>Non confondere Key $K$ con Keystream $k'$

*Codifica* e *Decodifica* basato sullo XOR (esattamente come OTP)
- CT = ENC(K,M) = M $\oplus$ keystream = M $\oplus$ PRNG(K)
- M = DEC(K, CT) = CT $\oplus$ keystream = CT $\oplus$ PRNG(K)

Se la sottostringa si ripete, il ciphertext cambia

Nonostante ciò, se il messaggio è cryptato 2 volte, il ciphertext verrà ripetuto
- PRNG è deterministico! Stesso input (key $K$), stesso output (keystream $K'$)

*RC4* esempi:
- Encrypt "giuseppebianchi" --> CT = giuseppebianchi $\oplus$ RC4 (key)
- Key = 1234567890 --> CT = 474d4caf78a844afa8b29add814e86
- Key = 1234567891 --> CT = d291ee1272acdb9e9e982986dfb4f8 - Chiave differente 
- Key = 1234567890 --> CT = 474d4caf78a844afa8b29add814e86 - *Stessa chiave*

*Problema*: Utilizzando chiavi statiche, IND-CPA si rompe


#### Cifrature a Blocchi

>[!tip] Goal
>"*Generalizzare*" la cifratura con sostituzione

![[Pasted image 20250313144046.png | 500]]

- Gli algoritmi a Blocchi dovrebbero essere implementati come una *Pseudo Permutazione Random*
	- In pratica, le chiavi permetteranno solo di selezionare intorno a $2^{keysize}$ permutazioni


###### Cifrature a Blocchi --> PRPs
Pseudo Random Permutation:
- $S$ = il set di ogni possibile plaintext
	- $n = 3$ bits, $S = {000,001,010,011,100,101,110,111}, |S| = 2^{n}= 8$ 

- Permutazione: Funzione *biettiva* 

![[Pasted image 20250313144409.png|| 700]]



Un possibile **problema** della cifratura a Blocchi potrebbe essere cryptare il messaggio 2 volte.

![[Pasted image 20250313144813.png | 600]]


#### Cifratura a Blocchi: Modi di Operare

**ECB** può essere utilizzato solo se:
- Messaggi più piccoli di un blocco
	- AES = 128 bits = 16 bytes

- I messaggi non possono essere ripetuti


Per **messaggi ripetuti**:
- Utilizzare i vettori di inizializzazione
	- Valori random, stessa lunghezza del blocco


Per **messaggi più lunghi**:
- *Modi di operare*: Via "sicura" per combinare i blocchi
- Permettere di cryptare un testo di una lunghezza arbitraria, *evitando che uno stesso blocco di plaintext venga cryptato due volte come uno stesso ciphertext*
- "Sicuro" = Sicurezza semantica, *IND-CPA*


#### Modalità CBC (Cipher Block Chaining)

![[Pasted image 20250313145947.png]]

Questa immagine spiega la modalità **CBC**, un metodo che utilizza una **permutazione pseudocasuale (PRP)** e un meccanismo di concatenazione tra i blocchi per garantire una maggiore sicurezza

1. **PRP**
	- E' la funzione di cifratura a blocchi che, dato un blocco di input e una chiave segreta $K$, genera un blocco di output apparentemente casuale
	- Questo significa che il testo cifrato deve sembrare *pseudo-casuale* agli occhi di un attaccante senza chiave

2. **Idea della modalità CBC**
	- Ogni blocco del testo in chiaro viene *combinato con il blocco cifrato precedente* tramite un'operazione XOR prima di essere cifrato
	- Per il *primo blocco*, si usa un valore iniziale chiamato **IV (Initialization Vector)**


#### Formula della cifratura CBC

**Per il primo blocco**:
$c[0] = ENC(K, IV \oplus m[0])$ 

- Si prende il primo blocco del messaggio $m[0]$
- Lo si *combina* con l'$IV$ usando *XOR*
- Si cifra il risultato con la funzione *PRP* usando la chiave $K$
- Il risultato è il primo blocco cifrato $c[0]$

**Per i blocchi successivi**:
$c[i] = ENC(K, c[i-1] \oplus m[i])$ 

- Si prende il blocco $m[i]$
- Lo si combina con il blocco cifrato precedentemente $c[i-1]$ tramite XOR
- Si cifra il risultato con *PRP* e si ottiene $c[i]$ 


#### Vantaggi e Svantaggi della cifratura CBC

>[!danger] Problema
>La sicurezza dipende dal **Nonce (IV)**, che deve essere **casuale** e **non prevedibile**
>- Se l'IV è prevedibile, un attaccante può sfruttarlo per attacchi **CPA (Chosen Plaintext Attack)**.
>- Un esempio storico è l'**attacco BEAST su TLS nel 2011**, che sfruttava un IV prevedibile per decifrare dati cifrati in CBC

###### CBC è lento durante la cifratura

>[!danger] Problema
>CBC **non può essere parallelizzato**, perchè ogni blocco dipende dal blocco cifrato precedente.
>- Questo lo rende **meno adatto per applicazioni ad alte prestazioni** rispetto ad altre modalità come **CTR**, che è **altamente parallelizzabile**


###### Cifratura e decifratura richiedono due circuiti separati

>[!danger] Problema
>- La cifratura usa una funzione **PRP**
>- La decifratura usa la funzione inversa $PRP^{-1}$, quindi richiede un circuito aggiuntivo
>- Altre modalità, come **CTR**, **CFB** e **OFB**, usano solo la funzione di cifratura anche in fase di decifratura, rendendo l'hardware più semplice

###### Il testo in chiaro deve essere un multiplo della dimensione del blocco

>[!danger] Problema
>Il testo in chiaro **deve essere adattato alla lunghezza del blocco**

>[!check] Soluzione
>Si usa un **padding** (riempimento) per completare l'ultimo blocco.
>- Esistono **standard di padding**, come **PKCS#7**
>- Anche altre modalità (come ECB) richiedono il padding



#### Counter Mode (CTR)
- Inizializzare un counter **ctr**, e incrementarlo ad ogni blocco nuovo incontrato
- "Decryptare" il contatore con la cifratura a blocchi (indipendentemente dal plaintext, che può essere pre-computato)
- Output con XOR con **il blocco del plaintext** 

**In pratica**: costruisce una keystream **PRNG** fuori un blocco **PRP**
Molto sicuro, se **PRP** è sicuro lo sarà anche **PRNG**

![[Pasted image 20250313160812.png]]


