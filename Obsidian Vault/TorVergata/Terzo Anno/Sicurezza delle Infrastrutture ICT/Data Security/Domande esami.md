

| Domande                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Risposte multiple                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Quale operazione binaria è usata nel Vernam Cipher?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | - AND<br>- NOT<br>- OR<br>- XOR ✅                                                                                                                                     |
| Se Alice deve firmare digitalmente un messaggio per mandarlo a Bob, quale chiave usa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | - La chiave pubblica di Alice<br>- La chiave privata di Alice ✅<br>- La chiave pubblica di Bob<br>- La chiave privata di Bob                                          |
| L'Output Feedback (OFB) mode è parallelizzabile...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | - In cifratura<br>- In decifratura ✅<br>- In entrambi i casi<br>- In nessun caso                                                                                      |
| Se il calcolo HASH(messaggio) richiede $N$ funzioni di compressione, il calcolo HMAC(messaggio) richiede...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | - $N$<br>- $2N$ <br>- $N+2$ ✅<br>- $\sqrt{N}$                                                                                                                         |
| Se una chiave crittografica viene estesa con ulteriori 13 bit, il livello di sicurezza aumenta di un fattore...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | - Circa 13<br>- Circa 105<br>- Circa 1300<br>- Circa 8000 ✅ ($2^{13}$)<br>- CIrca 13000<br>- Circa 8 milioni<br>- Circa 13 milioni                                    |
| In un cifrario di Vigenere, il plaintext CADEAU è cifrato nel ciphertext DAGFAX. Quale è la chiave? <br>(Alfabeto di 26 lettere)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | - BADB ✅<br>- BAD<br>- CBE<br>- CBEC <br>- Non si può stabilire                                                                                                       |
| Generando casualmente circa 350.000 codici composti da $X$ cifre decimali, la probabilità che due di essi siano identici risulta essere di circa il 50%. Di quante cifre sono composti questi codici?<br><br>Per risolvere questo problema useremo la formula<br>$$<br>X \approx 2\log_{10}(n) - \log_{10}(2\ln2)<br>$$<br>                                                                                                                                                                                                                                                                                             | - 6 <br>- 8<br>- 10<br>- 11 ✅<br>- 12<br>- 35                                                                                                                         |
| Quale è l'entropia di una password randomica composta da una prima lettera maiuscola, seguita da 6 lettere minuscole (alfabeto di 26 lettere) e conclusa con un punto esclamativo?<br>Esempio: Aghawyp!                                                                                                                                                                                                                                                                                                                                                                                                                 | - Circa 8 bit<br>- Circa 26 bit<br>- Circa 33 bit ✅<br>- Circa 40 bit<br>- Circa 56 bit<br>- Circa 64 bit                                                             |
| Un database di password è protetto usando la funzione hash SHA-256. Avendo a disposizione il dispositivo Bitmain Antminer in grado di eseguire 151 Tera Hash per secondo, quale è il tempo MEDIO (nb! Non il tempo Massimo!) per craccare password casuali di 8 bytes prodotte usando una tastiera di 95 caratteri differenti?<br><br><br>Per risolvere questo problema useremo la formula $$<br>T_{\text{medio}} = \frac{A^L}{2 \times \text{HR}}<br>$$<br><br>dove:<br>- $A$ è la dimensione dell'alfabeto (95)<br>- $L$ è la lunghezza della password (8 caratteri)<br>- $HR$ è l'hash rate (hashes per secondo)<br> | - Circa 2.5 secondi <br>- Circa 5 secondi<br>- Circa 44 secondi<br>- Circa 22 secondi ✅<br>- Circa 88 secondi<br>- Circa 44 minuti<br>- Circa 6 ore<br>- Circa 12 ore |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                       |


*D1* Si descriva il gioco alla base della definizione di sicurezza IND-CPA

- Il "gioco" simula una situazione in cui, nonostante l'attaccante possa scegliere i plaintext da cifrare, non riesce a ottenere alcuna informazione utile per distinguere la cifratura di m0m_0 da quella di m1m_1. Se un attaccante potesse farlo, significherebbe che il sistema rivela informazioni sul messaggio nascosto, compromettendo la sua confidenzialità. Quindi, la sicurezza IND-CPA si concentra esclusivamente sulla **confidenzialità**: un sistema IND-CPA sicuro non deve permettere all'avversario di fare meglio di un semplice tentativo casuale.


--- 


*D2* Alice e Bob vogliono instaurare un canale sicuro usando il protocollo di Diffie-Hellman con parametri pubblici: modulo primo $p = 59$, generatore $g = 6$. Alice decide di usare come valore segreto $x = 19$, mentre Bob $y=8$. Dopo aver brevissimamente riassunto il protocollo DH, si calcolino numericamente:
-Il coefficiente pubblico che Alice invia a Bob (per questo calcolo si usi esplicitamente l'algoritmo square & multiply)
-La chiave segreta risultante dal protocollo

*Protocollo DH*
1) **Parametri pubblici**: Alice e Bob concordano pubblicamente su un modulo primo $p$ e un generatore $g$. In questo esempio:
	- $p = 59$
	- $g = 6$

2) **Scelta dei segreti**: 
	- Alice sceglie un numero segreto $x$ (qui 19)
	- Bob sceglie un numero segreto $y$ (qui 8)

3) **Calcolo dei coefficienti pubblici**:
	- Alice calcola il proprio valore pubblico 
	$$
	A = g^{x} \mod p
$$
	- Bob calcola il proprio valore pubblico
$$
B = g^{y} \mod p
$$
Questi valori vengono poi scambiati sulla rete

4) **Calcolo della chiave segreta condivisa**: Una volta scambiati questi valori, entrambi possono calcolare la stessa chiave segreta

	- Alice calcola:
$$
K = B^{x} \mod p
$$
	- Bob calcola:
$$
K = A^{y} \mod p
$$

Grazie alle proprietà dei poteri modulo $p$, $K$ risulta essere lo stesso per entrambi, pur restando segreto per un eventuale intercettatore


**Calcolo dettagliato del valore pubblico $A = 6^{19} \mod p$ Usando Square & Multiply

1. *Rappresentazione dell'esponente in binario*
L'esponente $19$ in notazione binaria è 
$$
19_{10} = {(10011)}_{2}
$$
2. *Inizializzazione*
- Risultato iniziale: R = 1
- Base: g = 6
- Modulo: p = 59

L'algoritmo procede iterando sui bit dell'esponente, partendo dal bit più significativo fino al meno significativo. Ongi iterazione si esegue sempre uno square (cioè si calcola il quadrato del risultato corrente) e, se il bit corrente vale 1, si moltiplica per la base

3. *Iterazioni Dettagliate*
Iterazione 1 (bit = 1):
- Square: $R \leftarrow R^{2} \mod 59 = 1^{2} \mod 59 = 1$ 
- Moltiplicazione: Siccome il bit è 1, moltiplichiamo $R$ per $6$: $R \leftarrow 1 \cdot 6 \mod 59 = 6$
Ora, $R = 6$

Iterazione 2 (bit successivo 0)
- Square: Calcoliamo $R \leftarrow 6^{2} \mod 59 = 36 \mod 59 = 36$
- Moltiplicazione: Il bit è 0, quindi non moltiplichiamo. $R = 36$

Iterazione 3 (bit = 0)
- Square: Calcoliamo $R \leftarrow 36^{2} \mod 59$. Poichè $36^{2} = 1296$, troviamo il resto della divisione di $1296$ per $59$. Notiamo: $59 \cdot 21 = 1239$ e $1296 - 1239 = 57$. Quindi $R = 57$.
- Moltiplicazione: Il bit è 0, dunque non moltiplichiamo

Iterazione 4 (bit = 1)
- Square: Calcoliamo $R \leftarrow 57^{2} \mod 59$. Poichè $57^{2} = 3249$, dividiamo per 59: $59 \cdot 55 = 3245$ e $3249 - 3245 = 4$. Quindi $R = 4$
- Moltiplicazione: Il bit è 1, quindi moltiplichiamo per 6: $R \leftarrow 4 \cdot 6 \mod 59 = 24$
Ora $R = 24$

Iterazione 5 (bit meno significativo = 1)
- Square: Calcoliamo $R \leftarrow 24^{2} \mod 59$. Poichè $24^{2} = 576$, dividiamo per 59: $59 \cdot 9 = 531$ e $576 - 531 = 45$. Quindi $R = 45$
- Moltiplicazione: Il bit è 1, quindi moltiplichiamo per 6: $R \leftarrow 45 \cdot 6 \mod 59 = 270$. Ora, $59 \cdot 4 = 236$ e $270-236 = 34$. Quindi $R = 34$

Alla fine del processo:
$$
A = 34
$$
Questo è il valore che Alice invia a Bob


**Calcolo della Chiave Segreta Condivisa**
Dopo lo scambio, Bob utilizza il valore $A = 34$ per calcolare la chiave segreta:
$$
K = A^{y} \mod 59 = 34^{8} \hspace{0.3cm} 59. 
$$

Utilizziamo nuovamente la tecnica di esponentiazione tramite il quadrato successivo:
1. Calcolo di $34^{2}\mod 59$: $34^{2} = 1156$. Poichè $59 \cdot 19 = 1121$, si ha $1156 - 1121 = 35$. Quindi: $34^{2} \mod 59 = 35$
2. Calcolo di $34^{4} \mod 59$: $34^{4} = {(34^{2})}^{2} \equiv 35^{2}.$ $35^{2} = 1225$. Notiamo $59 \cdot 20 = 1180$ e $1225 - 1180 = 45$. Quindi: $34^{4} \mod 59 = 45$.
3. Calcolo di $34^{8} \mod 59$: $34^{8} = {(34^{4})}^{2} \equiv 45^{2}. 45^{2} = 2025.$ Poichè $59 \cdot 34 = 2006$ e $2025-2006 = 19$ otteniamo:
$$
34^{8} \mod 59 = 19
$$
Quindi la chiave condivisa è:
$$
K = 19
$$


---

*D3* Una applicazione deve frequentemente accedere in SOLA LETTURA a parti intermedie di un database cifrato. Quali tra i modi CBC, CFB, OFB, CTR, sicuramente NON considerereste per questo scenario, e perchè? (Lo si spieghi riportando anche esplicitamente i diagrammi dello/degli schemi scartati)

- In uno scenario in cui l'applucazione deve accedere in sola lettura a parti intermedie di un database cifrato, una proprietà fondamentale è la *random access decryption*: bisogna poter decriptare un blocco (o record) senza dover processare in sequenza tutti i blocchi precedenti. Tra le modalità elencate, quelle che non offrono tale proprietà sono il *CBC* e il *CFB*, perchè entrambi richiedono una dipendenza dai blocchi precedenti


**Diagramma CBC**

![[Pasted image 20250521125349.png#center | 600]]

Nel **CBC**, ad ogni blocco si applica uno XOR tra il plaintext corrente e il ciphertext precedente (per il primo blocco si usa l'IV) $\rightarrow$ Questo crea una catena: per decriptare il blocco $C_{i}$ è necessario $C_{i-1}$   




**Diagramma CFB**
![[Obsidian Overleaf.pdf]]

Nel **CFB**, si parte da un IV che viene cifrato per generare un keystream da cui, effettuando uno XOR con $M_{1}$, si ottiene $C_{1}$. Il ciphertext $C_{1}$ diventa l'input per il successivo calcolo $E_{K} (C_{1})$ e così via. Anche in questo schema, per decriptare $M_{i}$ è necessaria una dipendenza dal blocco precedente.

Questi diagrammi evidenziano la caratteristica "a catena" di CBC e CFB, motivo per non sono adatti ad applicazioni che richiedono accesso in random a blocchi interni del database cifrato. 


--- 


*D4* Cifrare le prime 5 lettere del proprio nome con un cifrario di Vigenère e chiave *CEB*

- Calcoliamo per ciascun carattere:
	- Prima lettera: Plaintext: P(15) Chiave: C(2) Somma: 15+2 = 17 $\rightarrow$ corrisponde a R.
	- Seconda lettera: Plaintext: I(8) Chiave: E(4) Somma 8+4 = 12 $\rightarrow$ corrisponde a M.
	- Terza lettera: Plaintext: E(4) Chiave: B(1) Somma 4+1 = 5 $\rightarrow$ corrisponde a F.
	- Quarta lettera: Plaintext: T(19) Ciave: C(2) Somma 19+2 = 21 $\rightarrow$ corrisponde a V
	- Quinta lettera: Plaintext: R(17) Chiave: E(4) Somma 17+4 = 21 $\rightarrow$ corrisponde a V.

Risultato finale: Le lettere cifrate sono R, M, F, V, V


---


*D5* Il nostro sistema di videosorveglianza genera PIN casuali di 8 cifre (da un minimo di 00000000 ad un massimo di 99999999). Quale è approssimativamente il numero minimo di utenti per cui rischiamo di avere due PIN uguali con più del 50% di probabilità?

- Spiegazione
1) Definiamo lo spazio dei PIN $N = 10^{8}$ 
2) Utilizziamo l'approssimazione $\frac{{n^{2}}}{2N} \approx \ln2$ derivata dal problema del compleanno
3) Risolviamo per $n$ ottenendo $n \approx \sqrt{2N\ln2}$
4) Sostituendo $N = 10^{8}$ e $\ln2 \approx 0.6931$, si ottiene $n \approx 11.774$
5) Concludiamo che sono necessario all'incirca 11.800 utenti


--- 


*D6* Si descriva BREVEMENTE il protocollo di autenticazione CHAP

- **Sfida**: Il server (o l'autenticatore) invia al client un messaggio contenente una sfida casuale
- **Risposta**: Il client combina una risposta applicando una funzione di hash che combina la sfida ricevuta e un segreto condiviso (che non viene mai inviato in chiaro), e invia il valore risultante al server
- **Verifica**: Il server, conoscendo il medesimo segreto, esegue lo stesso calcolo e confronta il valore ottenuto con la risposta del client. Se corrispondono, l'autenticazione è considerata valida


--- 

*D7* Si assuma un cifrario a blocchi basato su blocchi di 4 bit. Il block cipher usa una chiave che realizza la permutazione illustrata in tabella. Si chiede di:
- Illustrare le costruzioni CBC e CTR
- Usando CBC, si DECIFRI il ciphertext CT = (1101) 1001 0101 0110
- Usando CTR, si CIFRI il plaintext PT = 0001 0010 011, usando come contatore iniziale il valore 1100

![[Obsidian Overleaf (2).pdf]]


--- 

*D8* Assumendo un cifrario a blocchi da 4 bit basato sulla permutazione riportata in tabella, si cifri, usando la costruzione **OFB**, la stringa 0000.1111.000.1111 usando come vettore di inizializzazione il valore 0101

![[Pasted image 20250511185233.png#center | 100]]

**Modalità OFB (Output Feedback)**

1. **Vettore di inizializzazione (IV)**: Si parte dall'IV $Y_{0}$. In questo esercizio, $Y_{0} = 0101$
2. **Generazione del Keystream**: Per $i \geq 1$, si calcola il blocco:
$$
Y_{i} = E(Y_{i-1}).
$$
Questi $Y_{i}$ saranno i blocchi del keystream, indipendenti dal testo in chiaro.
3. **Cifratura**: Il plaintext viene diviso in blocchi $P_{i}$ (in questo caso ciascuno dei 4 bit) e si ottiene il ciphertext tramite:
$$
C_{i} = P_{i} \oplus Y_{i}
$$

**Primo blocco del keystream**:
$$
Y_{1} = E(Y_{0}) = E(0101) = 0000
$$
**Secondo blocco del keystream**:
$$
Y_{2} = E(Y_{1}) = E(0000) = 0001
$$
**Terzo blocco del keystream**:
$$
Y_{3} = E(Y_{2}) = E(0001) = 0010
$$
**Quarto blocco del keystream**:
$$
Y_{4} = E(Y_{3}) = E(0010) = 1011
$$

Il keystream così ottenuto è 
$$
Y_{1}= 0000, Y_{2} = 0001, Y_{3} = 0010, Y_{4} = 1011
$$


**Cifratura del Plaintext**
Per ogni blocco $P_{i}$, viene calcolato il ciphertext $C_{i}$ tramite l'operazione XOR con il corrispondente blocco $Y_{i}$ del keystream

1. **Primo blocco**:
$$
C_{1} = P_{1} \oplus Y_{1} = 0000 \oplus 0000 = 0000
$$
2. **Secondo blocco**:
$$
C_{2} = P_{2} \oplus Y_{2} = 1111 \oplus 0001 \rightarrow C_{2} = 1110
$$
3. **Terzo blocco**:
$$
C_{3} = P_{3} \oplus Y_{3} = 0000 \oplus 0010 = 0010
$$
4. **Quarto blocco**:
$$
C_{4} = P_{4} \oplus Y_{4} = 1111 \oplus 1011 \rightarrow C_{4} = 0100
$$

**Risultato finale**
Concatenando i blocchi cifrati, il ciphertext risultante è:
$$
0000.1110.0010.0100
$$

----


*D9* Si assuma un cifrario a blocchi basato su blocchi di 4 bit. Il block cipher usa una chiave che realizza la permutazione illustrata in tabella. Si chiede di:
- Illustrare le costruzioni **CBC** e **CTR**
- Usando **CBC**, si DECIFRI il ciphertext CT = (1101) 1001 0101 0110
- Usando **CTR**, si CIFRI il plaintext PT = 0001 0010 0011, usando come contatore iniziale il valore 1100

**Costruzioni CBC e CTR**

**CBC (Cipher Block Chaining)**
Funzionamento - Cifratura: Si parte da un vettore di inizializzazione (IV). Se indichiamo $C_{0} = IV$, ogni blocco di plaintext $P_{i}$ viene cifrato come
$$
C_{i} = E(P_{i} \oplus C_{i-1})
$$
Decifratura: Per decifrare, si usa la funzione inversa $E^{-1}$ 
$$
P_{i} = E^{-1} (C_{i})\oplus C_{i-1}
$$
In una trasmissione in modalità CBC, l'IV viene generalmente inviato in chiaro come primo blocco


**CTR (Counter)**
Funzionamento-Cifratura: In CTR si genera un keystream indipendentemente dal testo in chiaro. Si parte da un valore iniziale (il counter) e, per ogni blocco, si incrementa il counter (sommando 1 in modulo $2^{4}$ nel nostro caso). Per ogni blocco $i$ si calcola
$$
KS_{i} = E(counter_{i})
$$
e poi si cifra
$$
C_{i} = P_{i} \oplus KS_{i}
$$

Decifratura: La decifratura in CTR è analoga poichè si tratta di XOR: si calcola lo stesso keystream e si esegue
$$
P_{i} = C_{i} \oplus KS_{i}
$$

**Decrittazione in modalità CBC**
Il testo cifrato è 
$$
CT = (1101). 1001. 0101. 0110
$$
Decifriamo blocco per blocco:
1. **Primo blocco** $P_{1} = E^{-1} (C_{1}) \oplus C_{0}$ Con $C_{1} = 1001$ e $C_{0} = 1101$. Individuiamo $E^{-1}(1001) = 0111$. Ora, $0111 \oplus 1101 \rightarrow P_{1} = 1010$ 
2. **Secondo blocco** $P_{2} = E^{-1}(C_{2}) \oplus C_{1}$ Con $C_{2} = 0101$ e $C_{1} = 1001$. Individuiamo $E^{-1}(0101) = 1010$. Ora, $1010 \oplus 1001 \rightarrow P_{2} = 0011$
3. **Terzo blocco** $P_{3} = E^{-1} (C_{3}) \oplus C_{2}$ con $C_{3} = 0110$ e $C_{2} = 0101$. Individuiamo $E^{-1}(0110) = 1000$. Ora, $0101 \oplus 1000 \rightarrow 1101$ 

**Risultato della decrittazione CBC**: Il plaintext ottenuto è 
$$
P = 1010.0011.1101
$$


**Cifratura in modalità CTR**
Si deve cifrare il plaintext 
$$
PT = 0001. 0010. 0011
$$
utilizzando CTR con valore iniziale del counter = 1100. In modalità CTR, per ciascun blocco si procede come segue:
1. Per il blocco $i$, il counter viene impostato a $CTR_{i} = (IV + i)$ (somma in modulo $2^{4}$); per il primo blocco usiamo il counter iniziale direttamente
2. Si calcola il keystream come $KS_{i} = E(CTR_{i})$
3. Si ottiene in ciphertext
$$
C_{i} = P_{i} \oplus KS_{i}
$$

**Determiniamo i counter e i corrispondenti keystream**
- **Blocco 1**: Counter = 1100, dalla tabella $E(1100) = 1110$, quindi keystream1 = 1110
- **Blocco 2**: Il counter si incrementa: 1100+1 = 1101. Dalla tabella, $E(1101) = 1100$, quindi keystream2 = 1100
- **Blocco 3**: Il counter si incrementa: 1100 + 2 = 1110, dalla tabella, $E(1110) = 1010, quindi keystream3 = 1010.

**Cifratura blocco per blocco**
1. **Blocco 1**: $P_{1} = 0001$, keystream1 = 1110
$$
C_{1} = 0001 \oplus 1110 \rightarrow C_{1} = 1111
$$
2. **Blocco 2**: $P_{2} = 0010$, keystream2 = 1100
$$
C_{2} = 0010 \oplus 1100 \rightarrow C_{2} = 1110
$$
3. **Blocco 3**: $P_{3} = 0011$, leystream3 = 1010
$$
C_{3} = 0011 \oplus 1010 \rightarrow C_{3} = 1001
$$
**Ciphertext ottenuto**
$$
C = 1111. 1110. 1001
$$

---


*D10* E' necessario memorizzare una whitelist di 256.000 indirizzi IP in un filtro di Bloom, in modo da garantire una probabilità di falso positivo strettamente inferiore al 3.2%. Quanta memoria è necessaria, e quante funzioni hash usereste?

$n$, il numero di elementi da memorizzare (qui 256.000)
$p$, la probabilità di falso positivo desiderata (qui 0.032, cioè il 3.2%)

1. **Numero di bit necessari**:
$$
m = -\frac{n \ln p}{(\ln 2)^2}
$$

2. **Numero ottimale di funzioni hash**
$$
k = \frac{m}{n} \ln 2
$$

**Calcolo della memoria m**
1. Calcoliamo il logaritmo naturale di p
$$
\ln(0.032) \approx -3.4421
$$
2. Sappiamo inoltre che:
$$
\ln2 \approx 0.6931 \quad e \quad (\ln2)^{2} \approx 0.48045 
$$
3. Sostituendo nella formula:
$$
m = -{256.000 \cdot (-3.4421)}/{0.48045}
$$

Il segno negativo doppio si annulla, per cui:
$$
m = 256.000 \cdot 3.4421/0.48045
$$

Calcoliamo il numeratore:
$$
256.000 \cdot 3.4421 \approx 880.640
$$
Dividendo per $0.48045$:
$$
m \approx \frac{880640}{0.48045} \approx 1.883.000 \quad bit
$$

Questo significa che occorrono circa 1.83 milioni di bit. In termini di byte:
$$
\frac{1.883.000}{8} \approx 229.125 byte \quad (\approx 229 KB)
$$


**Calcolo del numero di funzioni hash k**
Utilizziamo la formula:
$$
k = \frac{m}{n}\ln2
$$
Prima calcoliamo $\frac{m}{n}$:
$$
\frac{m}{n} \approx \frac{1.833.000}{256.000} \approx 7.16 \quad \text{bit per elemento}
$$
Ora moltiplichiamo per $\ln2$:
$$
k \approx 7.16 \cdot 0.6931 \approx 4.96
$$
Arrotondando, otteniamo:
$$
k \approx 5
$$

---


*D11* Attacco CPA a Vigenère. Il plaintext "ladispoli" viene cifrato in "mdfktsqnj". Quale è la chiave di cifratura usata?

- Chiave = $bdcc$ 


---


*D12* Quanto deve essere lunga, come minimo, una password randomica contenente lettere maiuscole, minusole e cifre, per garantire una entropia di almeno 64 bit? (alfabeto a 26 lettere)

- Per calcolare l'entropia di una password generata casualmente, si può usare la formula
$$
\text{Entropia totale} = L \cdot \log_{2}(N)
$$
dove $L$ è la lunghezza della password e $N$ è la **dimensione** dell'alfabeto del quale ciascun carattere viene scelto casualmente
Di conseguenza, $N = 26$, quindi:
$$
log_{2}(26) \approx 4,7 \quad \text{bit}
$$

Vogliamo garantire almeno 64 bit di entropia, perciò dobbiamo avere
$$
L \cdot 4,7 \geq 64
$$
Risolvendo per $L$:
$$
L \geq \frac{64}{4,7} \approx 13,62
$$
Dal momento che $L$ deve essere un intero, la password deve essere lunga **almeno 14 caratteri**


---


*D13* Dei quattro modi standard di cifratura a blocchi (CBC, OFB, CFB, CTR), 
1. Quali sono parallelizzabili in DECIFRATURA?
2. Quali usano la PRP diretta ANCHE in decifratura?

- **Parallelizzabili in decrittazione**: CBC, CFB, CTR
- **Non parallelizzabile (almeno nella fase di generazione del keystream)**: OFB

- **Usano la PRP diretta (Ek) anche in decrittazione**: CFB, OFB, CTR
- **Non la usano**: CBC (che richiede $D_{k}$)


---


*D14* I primi 10 valori prodotti da un generatore perfettamente casuale sono: 682974445052, 131466546273, 169162415351, 275593015638, 188171305529, 756846079161, 961205710266, 685888388030, 825053400005, 328120818293. Quante estrazioni, approssimativamente, dobbiamo fare per avere una collisione con circa il 50% di probabilità?

- Approssimativamente
$$
P(collisione) \approx 1-e^{-n^{2}/(2N)}
$$

Poniamo $P(collisione) \approx$ 50%. Quindi
$$
1-e^{\frac{-n^{2}}{(2N)}} = 0.5 \quad \rightarrow \quad e^{\frac{-n^{2}}{(2N)}}= 0.5 
$$

Prendendo il logaritmo naturale a entrambi i lati, otteniamo
$$
-\frac{n^{2}}{2N} = \ln(0.5) = -\ln2 \rightarrow \frac{n^{2}}{2N} = \ln2
$$

Risolvendo per $n$ si ha
$$
n = \sqrt{2N\ln2}
$$

Nel problema, i numeri mostrati sono a 12 cifre, il che suggerisce che il generatore produce valori in un intervallo di circa $N = 10^{12}$ possibili valori. Sostituendo $N = 10^{12}$ e ricordando che $\ln2 \approx 0.693$:
$$
n = \sqrt{2\cdot10^{12}\cdot 0.693} \approx \sqrt{1.386\cdot 10^{12}}
$$

Poichè $\sqrt{10^{12}} = 10^{6}\quad \text{e} \quad \sqrt{1.386} \approx 1.177$, troviamo:
$$
n \approx 1.177 \cdot 10^{6}
$$
Pertanto, servono approssimativamente **1.18 milioni di estrazioni** per avere circa il 50% di probabilità di osservare una collisione


---


*D15* $A$ ha chiave pubblica $PK_{a}$ e chiave privata $SK_{a}$. $B$ ha chiave pubblica $PK_{b}$ e chiave privata $SK_{b}$. Quale tra queste quattro chiavi viene usata nei seguenti casi:
1. $A$ vuole mandare un messaggio cifrato a $B$
2. $A$ vuole mandare un messaggio firmato digitalmente a $B$

- $A$ vuole mandare un messaggio cifrato a $B$: Qui l'obiettivo è garantire che solo $B$, il destinatario, possa decifrare il messaggio. Perciò, $A$ **utilizza la chiave pubblica di B** $PK_{b}$ per cifrare il messaggio. In seguito, $B$ userà la sua chiave privata per decifrarlo

- $A$ vuole mandare un messaggio firmato digitalmente a $B$: In questo caso l'obiettivo è garantire l'autenticità e l'integrità del messaggio. Quindi, $A$ **usa la sua chiave privata** $SK_{a}$ per garantire la firma digitale. Chi riceve il messaggio, $B$, può verificare la firma utilizzando la chiave pubblica di $A$


---


*D16* In quale scenario di minaccia è preferibile usare PAP in luogo di CHAP, e per quale motivo?

Vediamo innanzitutto le differenze fondamentali:
- **PAP (Password Authentication Protocol)** trasmette la password in chiaro su canale di comunicazione. A causa di ciò, è vulnerabile a intercettazioni e replay se il canale non è sicuro
- **CHAP (Challenge-Handshake Authentication Protocol)**, al contrario, prevede che il server invii una sfida (challenge) al client, il quale risponde con una funzione hash della sfida concatenata alla password. In questo modo la password non viene mai trasmessa direttamente e vengono fornite contromisure contro gli attacchi replay

**Scenario in cui è preferibile usare PAP invece di CHAP**: Quando il canale di comunicazione è già sicuro, in modo da mitigare il rischio che la password trasmessa in chiaro venga intercettata

**Motivo**: La sicurezza del canale elimina la principale debolezza di PAP (trasmissione in chiaro), rendendone vantaggiosa la semplicità e riducendo l'overhead computazionale rispetto a CHAP


---


*D17* Un filtro di Bloom usa una memoria di 1 milione di bit e contiene 180.000 password
1. Quale è il valore minimo possibile del falso positivo ottenibile
2. Se il numero delle password contenute nel filtro aumentasse del 50%, senza cambiare 

Per calcolare il minimo tasso di falso positivo di un filtro di Bloom, si usa il risultato noto che, con il numero ottimale di funzioni hash
$$
k = \frac{m}{n}\ln2
$$
Il tasso minimo di falso positivo è approssimativamente
$$
f_{min} \approx (0.6185)^{\frac{m}{n}} \quad \text{oppure equivalenti} \quad f_{min} \approx e^{-\frac{m}{n}(\ln2)^2}
$$
Dove:
- $m$ è la dimensione del filtro (in bit)
- $n$ è il numero di elementi inseriti

Abbiamo:
- $m = 1.000.000$ bit
- $n = 180.000$ password

Il rapporto è 
$$
\frac{m}{n} = \frac{1.000.000}{180.000} \approx 5.56
$$

Quindi, il minimo falso positivo ottenibile è
$$
f_{min} \approx (0.6185)^{5.56}
$$

Calcoliamo l'esponente: $\ln(0.6185) \approx -0.48$, dunque
$$
\ln f_{min} \approx 5.56 \cdot (-0.48) \approx -2.67
$$

e quindi
$$
f_{min} \approx e^{-2.67} \approx 0.07
$$

cioè **circa il 7%**

Se il numero di password aumenta del 50% mantenendo invariata la memoria, abbiamo
$$
n = 1.5 \cdot 180.000 = 270.000
$$

Il nuovo rapporto diventa
$$
\frac{m}{n'} = \frac{1.000.000}{270.000} \approx 3.70
$$

Usiamo la stessa relazione
$$
f_{min'} \approx (0.6185)^{3.70}
$$

Calcolando l'esponente 
$$
\ln f_{min'} \approx 3.70 \cdot (-0.48) \approx -1.78
$$

Quindi
$$
f_{min'} \approx e^{-1.78} \approx 0.17
$$

Questo significa che il filtro otterrebbe un tasso di falso positivo di circa il **17%**


---


*D18* Tra i quattro modi di cifratura a blocchi (CBC, CFB, OFB, CTR), si dica 
1. Quali modi NON sono adatti quando il nostro scopo è accedere in sola lettura ad una memoria ad accesso casuale
2. Come cambia la risposta se si vuole accedere sia in lettura che in scrittura

- Non sono adatti per accessi casuali in sola lettura **CBC, CFB e OFB**, mentre CTR è l'unico tra questi che consente la decrittazione indipendente da ciascun blocco
- Se vogliamo accedere sia in lettura che in scrittura in modo casuale, CBC, CFB e OFB risentono della loro natura sequenziale e pertanto risultano inadatti. La modalità **CTR**, per via della sua indipendenza per ogni blocco, rimane l'unica scelta adatta sia per operazioni di lettura che di scrittura casuale


---


*D19* Quale è l'entropia di una password, ad esempio 
Atrw23mmm!
Dove (alfabeto di 26 lettere):
- La prima lettera è randomica ma sempre maiuscola
- Le tre lettere successive sono randomiche ma sempre minuscole
- I due numeri successivi sono randomici
- Le tre lettere successive sono sempre identiche tra loro (mmm)
- L'ultimo simbolo è sempre un punto esclamativo

1. **Prima lettera ("A") - maiuscola**: Possiamo scegliere tra 26 lettere maiuscole
$$
E_{1} = \log_{2}(26) \approx 4.60 
$$

2. **Le tre lettere successive - minuscole**: Ogni lettera ha 26 possibilità, essendo indipendenti:
$$
E_{2} = 2 \cdot \log_{2}(26) \approx 3\cdot 4.60 = 14.10 
$$

3. **I due numeri successivi - cifre**: Per ogni cifra ci sono 10 possibilità, quindi:
$$
E_{3} = 2\cdot \log_{2}(10) \approx 2 \cdot 3.32 = 6.64
$$

4. **Le tre lettere che sono identiche - minuscola**: Anche se la lettera viene ripetuta per tre volte, essa viene scelta una sola volta da un alfabeto di 26 lettere. Pertanto:
$$
E_{4} = \log_{2}(26) \approx 4.70
$$

5. **L'ultimo simbolo ("!")**: E' fisso, quindi non comporta alcuna scelta
$$
E_{5} = \log_{2}(1) = 0
$$
**Calcoliamo l'entropia totale**
$$
E_{totale} = 4.70+14.10+6.64+4.70+0 \approx 30.14
$$

Quindi, **l'entropia della password "Atrw23mmm!" è di circa 30 bit**


---


*D20* Si mostri come è possibile fare un attacco MITM al protocollo di key agreement Diffie Hellman

- **La sicurezza del DH** si bassa sull'asserzione che, conoscendo solo $g^{x}$ e $g^{y}$, è difficile calcolare $g^{xy}$ senza risolvere il problema del logaritmo discreto
- **In presenza di un attaccante MITM**, tuttavia, l'attacco non richiede di risolvere il problema del logaritmo discreto. L'attaccante si limita a sostituire i valori $g^{x}$ e $g^{y}$ con i propri $g^{m1}$ e $g^{m2}$
- **L'assenza di autenticazione** è il punto debole: le parti coinvolte non hanno alcun modo per verificare che il valore ricevuto corrisponda veramente all'altra parte


---


*D21* Cifrate le prime 4 lettere del vostro cognome usando un substituition cipher (alfabeto a 26 lettere) con chiave: CDAB GHEF KLIJ QRST MNOP XYZ UVW

$$
ECJS
$$


---


*D22* Per quale motivo la costruzione H(segreto, messaggio) non è assolutamente da considerare come metodo per calcolare un tag di integrità mediante una funzione hash?

- **Vulerabilità a attacchi di estensione della lunghezza**: Un attaccante che conosce $MAC = H(secret||message)$ e la lunghezza del segreto può, sfruttando il modo in cui viene eseguito il padding interno, calcolare $H(secret||message||padding||extra)$ senza conoscere il segreto. In altre parole, l'attaccante può estendere il messaggio e produrre un nuovo tag valido, compromettendo l'integrità


---


*D23* Per uno schema crittografico RSA che utilizza come modulo $N = 187$,
1. Si determini (utilizzando per il calcolo l'algoritmo esteso di Euclide) il valore della chiave privata corrispondente ad una chiave pubblica $e = 3$ 
2. Avreste potuto usare come chiave pubblica $e = 5$? Perchè?

**Calcolo della chiave privata d per e=3**
Per un modulo RSA $N = 187$ il primo passo è trovare i suoi fattori primi. Poichè
$$
187=11 \cdot 17
$$
abbiamo
$$
p = 11, \quad q = 17
$$
Quindi, la funzione di Eulero è
$$
\phi(N) = (p-1)(q-1) = 10 \cdot 16 = 160
$$

La chiave privata $d$ deve essere l'inverso di $e$ modulo $\phi(N)$, cioè deve soddisfare:
$$
e \cdot d \equiv 1 \quad (\text{mod} \hspace{0.1cm} 160)
$$
Con $e = 3$, cerchiamo $d$ tale che:
$$
3 \cdot d \equiv 1 (\text{mod} \hspace{0.2cm} 160)
$$

**Utilizzo dell'algoritmo esteso di Euclide**
Vogliamo risolvere l'equazione:
$$
3d + 160k = 1
$$
per qualche intero $k$

- [ ] Da completare


---


*D24* Assumendo un cifrario a blocchi da 4 bit basato sulla specifica permutazione riportata nella tabella in basso a sinistra,
1. Si richiamino brevemente le costruzioni CBC e CTR, specificando se sono parallelizzabili in cifratura d/o decifratura
2. Dato il plaintext 1111.1111.1111,
	a. lo si cifri con CBC e vettore di inizializzazione 1011
	b. lo si cifri con CTR e contatore iniziale 1100 (si parte da 00)

3. Si dica che la permutazione a destra è preferibile in linea teorica rispetto a quella usata per risolvere l'esercizio, motivando la risposta.

![[Pasted image 20250514121920.png#center |250]]

**Costruzione CBC e CTR**:

**CBC**
- Cifratura: sequenziale (non parallelizzabile)
- Decifratura: parallelizzabile

**CTR**
- Sia cifratura che decifratura sono completamente parallelizzabili

**Cifratura con CBC (IV = 1011)** 
- **Blocco 1**: 
	- $P_{1} = 1111$
	- $C_{0} = IV = 1011$
	- $1111 \oplus 1011 = Y_{1} = 0100 \rightarrow E(0100) = 1000$ Quindi, $C_{1} = 1000$

- **Blocco 2**
	- $P_{2} = 1111$
	- $C_{1} = 1000 \rightarrow 1111 \oplus 1000 = 0111$
	- $E(0111) = 1101$, quindi $C_{2} = 1101$

- **Blocco 3**
	- $P_{3} = 1111$
	- $C_{2} = 1101 \rightarrow 1111 \oplus 1101 = 0010$
	- $E(0010) = 0011$, quindi $C_{3} = 0011$

**Risultato**
$$
1000.1101.0011
$$
 
**Cifratura con CTR (contatore iniziale = 1100)**:
- **Blocco 1**:
	- **Contatore**: 1100
	- **Cifratura del contatore**: $E(1100) = 1010$
	- **XOR con il Plaintext**: $1010 \oplus 1111 = 0101$ 

- **Blocco 2**:
	- **Contatore**: 1101
	- **Cifratura del contatore**: $E(1101) = 1100$
	- **XOR con il Plaintext**: $1100 \oplus 1111 = 0011$ 

- **Blocco 3**:
	- **Contatore**: 1110
	- **Cifratura del contatore**: $E(1110) = 0001$
	- **XOR con il Plaintext**: $0001 \oplus 1111 = 1110$

**Risultato**
$$
101.0011.1110
$$

--- 


*D25* Si consideri il sistema di cifratura a chiave pubblica El Gamal con i seguenti parametri:
modulo primo p=29, generatore g=3. Si assuma che un server utilizza come chiave privata il valore s=13, e come chiave pubblica corrispondente il valore h=19.
1. Si illustri, in formule, il procedimento in cifratura
2. Si cifri il messaggio m=14, usando come nonce il valore r=5: quale è il messaggio complessivo inviato al server? (per i calcoli si mostrino in dettaglio le operazioni di square & multiply usate)
3. Opzionale: si verifichi la correttezza della cifratura effettuata, decifrando il messaggio sopra calcolato

**Procedimento in cifratura El Gamal**
Data la scelta dei parametri pubblici e privati:
- Modulo primo $p$
- Generatore $g$
- Chiave pubblica $h = g^{s}$
- Messaggio $m$ da cifrare
- Scelta casuale (nonce) $r$

1. *Calcolo del primo componente del ciphertext*
$$
c_{1} = g^{r}\mod p
$$
2. *Calcolo del secondo componente*
$$
c_{2} = m \cdot h^{r}\mod p
$$
La coppia inviata al destinatario è dunque $(c_{1},c_{2})$


**Cifratura del messaggio m=14 con p=29, g=3, h=19, usando r=5**
*Calcolo di* $c_{1} = 3^{5}\mod 29$

Utilizziamo l'algoritmo **square & multiply**

**Passaggi**:
1. Espressione binaria dell'esponente: $5_{10} = 101_{2}$ 
2. Inizializzazione:
	- result = 1
	- base = 3

3. Iterazione sui bit (da sinistra a destra):
	- Primo bit (1):
		- Aggiornamento: result = $1 \cdot 3 = 3 \mod 29$
		- Squadratura della base: base = $3^{2}=9 \mod 29$

	- Secondo bit (0):
		- Nessuna moltiplicazione (bit 0)
		- Squadratura: base = $9^{2} = 81 \mod 29$; Poichè $29 \cdot 2 = 58$, $81-58 = 23$; pertanto, base = 23

	- Terzo bit (1):
		- Aggiornamento: result = $3 \cdot 23 = 69 \mod 29$; $29 \cdot 2 = 58$ e $69 - 58 = 11$; quindi, result = 11
		- L'ultimo step di squadratura, non è necessario perchè abbiamo esaurito i bit

Il risultato è dunque:
$$
c_{1} = 11
$$

---


*D26* Assumendo un cifrario a blocchi da 4 bit basato sulla specifica permutazione riportata nella tabella in basso,
1. Si disegni lo schema di cifratura per la costruzione CBC
2. Usando CBC, si DECIFRI il PRIMO ed il QUARTO blocco relativo al ciphertext (0101) 0101.0110.1010.0101
3. Un attaccante in grado di modificare il precedente messaggio cifrato potrebbe cambiare i primi due bit del plaintext contenuto, lasciando invariato il resto del messaggio? Se si, come, esattamente?

![[Pasted image 20250518190611.png#center]]

![[Pasted image 20250518191604.png#center | 500]]


**Decifrazione dei blocchi 1 e 4 del ciphertext**
Il problema ci fornisce il seguente ciphertext:
- **IV**: 0101
- **Ciphertext**: 0101.0110.1010.0101 

Inoltre, viene indicato che nel caso del valore 0101 si ha la trasformazione $0101 \rightarrow 1010$
Questo corrisponde **all'applicazione inversa** della permutazione usata nel cifrario. Quindi, in decrittazione si assume:
$D(0101) = 1010$

Calcoliamo i due casi richiesti:
**Blocco 1**:
La decrittazione in CBC dà: $P_{1} = D(C_{1}) \oplus IV$
Dato che:
- $C_{1} = 0101$
- $IV = 0101$
- $D(0101) = 1010$

Si ha:
- $P_{1} = 1010 \oplus 0101 \rightarrow P_{1} = 1111$ 

**Blocco 4**:
Per il quarto blocco, la formula di decrittazione è: $P_{4} = D(C_{4}) \oplus C_{3}$
Allora:
- $P_{4} = 1010 \oplus 1010 \rightarrow P_{4} = 0000$


**Possibilità di manipolare i primi due bit del plaintext**
Per cambiare *soltanto i primi due bit* del plaintext, l'attaccante deve calcolare come modificare l'IV in modo tale che la XOR con $D(C_{1})$ alteri esattamente quei bit e lasci invariati gli altri

Facendo dei conti:
- Con IV originale = 0101 si otteneva $P_{1} = 1010 \oplus 0101 = 1111$
- Se l'attaccante sostituisce l'IV con 1001, allora: $P^{*}_{1} = D(C_{1}) \oplus IV^{'} = 101$ 

---


*D27* Per uno schema crittografico RSA che utilizza come modulo N=187,
1. Si determini (utilizzando per il calcolo l'algoritmo esteso di Euclide) il valore della chiave privata corrispondente ad una chiave pubblica e=3
2. Avreste potuto usare come chiave pubblica e=5? Perchè?


**Calcolo della chiave privata con** $e=3$ 
Dati:
- Modulo: $N = 187$
- $N = p \cdot q$, con $p = 11$ e $q = 17$ (poichè 11 x 17 = 187)
- Di conseguenza
$$
\phi(N) = (p-1)(q-1) = 10 \cdot 16 = 160
$$

La chiave privata $d$ deve soddisfare:
$$
3 \cdot d \equiv 1 \mod160
$$
Ovvero trovare $d$ tale che:
$$
3d + 160k = 1, k\in Z
$$

Utilizziamo **l'algoritmo esteso di Euclide** per trovare $d$
1. **Calcolo del massimo comune divisore (MCD)**:
	Dividiamo 160 per 3:
$$
160 = 3 \cdot 53 + 1
$$
qui il quoziente è 53 e il resto 1.

2. **Espressione in forma lineare**:
	Dall'operazione precedente possiamo scrivere
$$
1 = 160 - 3 \cdot 53
$$
Questa equazione esprime 1 come combinazione lineare di 160 e 3:
$$
1 = 160 \cdot 1 + 3 \cdot (-53)
$$
Per l'equazione $3d + 160k = 1$, vediamo che il coefficiente relativo a 3 è -53. Quindi, una soluzione per $d$ è:
$$
d \equiv -53 \mod160
$$

3. **Normalizzazione del valore negativo**
	Per ottenere $d$ in forma positiva, sommiamo 160:
$$
d = 160 - 53 = 107
$$

Verifichiamo:
$$
3 \cdot 107 = 321 \quad \text{e} \quad 321 \mod160 = 321 - 2 \cdot 160 = 1
$$
Quindi, il valore della chiave privata è $d = 107$


**Verifica della validità di e = 5 come Chiave Pubblica**
Nel sistema RSa è indispensabile che l'esponente pubblico $e$ sia **coprimo** con $\phi(N)$. In altre parole, deve essere soddisfatta la condizione:
$$
gcd(e, \phi(N)) = 1
$$

Calcoliamo la condizione per $e = 5$:
$$
\phi(N) = 160 \quad \text{e} \quad 160 = 5 \cdot 32
$$
Pertanto:
$$
gcd(5, 160) = 5 \neq 1
$$

Essendo 5 un divisore di 160, $e = 5$ **non** è coprimo con $\phi(N)$ e, di conseguenza, **non ammette un inverso modulo** $\phi(N)$. Senza un inverso, non è possibile calcolare la chiave privata $d$


---


*D28* i consideri il sistema di cifratura a chiave pubblica El Gamal con i seguenti parametri: modulo primo p=29, generatore g=3. Si assuma che un server utilizza come chiave privata il valore s=13, e come chiave pubblica corrispondente il valore h=19.  
1. Si illustri, in formule, il procedimento di cifratura. 
2. Si cifri il messaggio m=14, usando come nonce il valore r=5: quale è il messaggio complessivo inviato al server? (per i calcoli si mostrino in dettaglio le operazioni di square & multiply usate) 
3. Opzionale: si verifichi la correttezza della cifratura effettuata, decifrando il messaggio sopra calcolato


**Procedimento di Cifratura - Formule Generali**
In El Gamal le scelte iniziali sono:
- Un numero primo $p$
- Un generatore $g$ del gruppo moltiplicativo $Z^{*}_{p}$
- La chiave privata del destinatario $s$ e la relativa chiave pubblica $h = g^{s} \mod p.$ 

Per cifrare un messaggio $m$ si procede come segue:
1. Scelta del nonce $r$ 
2. Calcolo di $c_{1}$
$$
c_{1} = g^{r}\mod p
$$
3. Calcolo di $c_{2}$ 
$$
c_{2} = m \cdot h^{r} \mod p
$$
Il messaggio cifrato inviato è la coppia $(c_{1}, c_{2})$


**Applicazione con i dati specifici**
I parametri del problema sono:
- $p = 29$
- $g = 3$
- Chiave privata del server: $s = 13$
- Chiave pubblica: $h = 19$ (dato che $3^{13} \mod 29 = 19$)
- Messaggio: $m = 14$
- Nonce: $r = 5$

*Calcolo di c1 usando square & multiply*
Dobbiamo calcolare $3^{5} \mod 29$ 

1. Rappresentiamo l'esponente in binario: $5_{10} = 101_{2}$ 
2. Procedimento (left-to-right):
   - Inizializzazione: result = 1, base = 3
   - Primo bit (1): result $\leftarrow 1 \cdot 3 = 3$. Quindi, quadrato della base: base $\leftarrow 3^{2} = 9 \mod 29$ 
   - Secondo bit (0): Poichè il bit è 0, result resta 3. Quadrato della base: base $\leftarrow 9^{2} = 81 \mod 29$. Calcoliamo: $29 \cdot 2 = 58, 81 - 58 = 23$. Così, base = 23
   - Terzo bit (1): result $\leftarrow 3 \cdot 23 = 69 \mod 29$. $29 \cdot 2 = 58, 69 - 58 = 11$. Quindi, result = 11

Il risultato finale è $c_{1} = 11$

*Calcolo di* $h^{r}$
Dobbiamo calcolare $19^{5} \mod 29$

1. Rappresentiamo l'esponente in binario: $5_{10} = 101_{2}$
2. Procedimento:
   - Inizializzazione: result = 1, base = 19
   - Primo bit (1): result $\leftarrow 1 \cdot 19 = 19$. Quindi, quadrato della base: base $\leftarrow 19^{2} = 361$. Calcoliamo $361 \mod 29$: $29 \cdot 12 = 348, 361 - 348 = 13$. Quindi, base = 13
   - Secondo bit (0): result risulta 19. Quadrato della base: base $\leftarrow 13^{2} = 169$. $29 \cdot 5 = 145$. $169 - 145 = 24$. Quindi, base = 24
   - Terzo bit (1): result $\leftarrow 19 \cdot 24 = 456$. Calcoliamo $456 \mod 29$: $29 \cdot 15 = 435, 456 - 435 = 21$. Così, result = 21

Il risultato è $19^{5} \mod 29 = 21$


*Calcolo di c2*
Utilizziamo la formula:
$$
c_{2} = m \cdot h^{r} \mod p
$$
Sostituendo:
- $m = 14$
- $h^{r} \mod p = 21$
- $p = 29$

Calcoliamo:
$$
c_{2} = 14 \cdot 21 = 294
$$
Riduciamo modulo 29:
$$
294 \mod 29: \quad 29 \cdot 10 = 290, \quad 294 - 290 = 4
$$
Quindi:
$$
c_{2} = 4.
$$

**Messaggio complessivo inviato**
Il ciphertext inviato al server è la coppia
$$
(c_{1},c_{2}) = (11, 4)
$$


---


*D29* Un sistema di anonimizzazione genera, per ogni utente, un identificativo randomico di 12 caratteri scelti dall’insieme dei caratteri Base64 (10 cifre, 26 lettere minuscole, 26 lettere maiuscole, 2 caratteri speciali, esempio: e9PsNjBuQ7/e ) 

a) quale e’ l’entropia dell’identificativo? 

b) Assumendo 8 miliardi di persone nel mondo, quale è approssimativamente la probabilità che due persone abbiano lo stesso identificativo? 

(Ricordando che $2^{10} \approx 10^{3}$ e che, per x piccolo, $1-e^{-x} \approx x$ , sarebbe anche possibile rispondere alla domanda senza usare alcuna calcolatrice)


**Entropia dell'identificativo**
Ogni identificativo è composto da 12 caratteri, ed ogni carattere è scelto da 64 possibili simboli. Quindi il numero totale di identificativi possibili è 
$$
64^{12} = {(2^{6})}^{12} = 2^{72}
$$

L'entropia è esattamente il logaritmo in base 2 del numero di possibilità, cioè
$$
\log_{2}(2^{72}) = 72  \text{bit}
$$


**Probabilità che due persone abbiano lo stesso identificativo**
Assumiamo $n = 8 \cdot 10^{9}$ persone e $D = 2^{72}$ possibili identificativi. La probabilità di collisione può essere approssimata, per x piccolo, da questa formula
$$
P_{collisione} \approx \frac{n^{2}}{2D}
$$

**Passo 1**: Calcolo di $n^{2}$ 
$$
n^{2} = (8 \cdot 10^{9})^{2} = 64 \cdot 10^{18} = 6.4 \cdot 10^{19} 
$$

**Passo 2**: Stima di $D$ usando $2^{10} \approx 10^{3}$
$$
2^{72} = (2^{10})^{7.2} \approx (10^{3})^{7.2} = 10^{21.6}
$$

ossia, in ordine di grandezza, $D \approx 4.7 \cdot 10^{21}$ 

**Passo 3**: Applichiamo la formula

$$
P_{collisione} \approx \frac{6.4 \cdot 10^{19}}{2 \cdot 4.7 \cdot 10^{21}} \approx \frac{6.4 \cdot 10^{19}}{9.4 \cdot 10^{21}} \approx 0.0068
$$

Quindi la probabilità è circa lo 0.68%


---


*D30* Nell'autenticazione a due fattori quale è la differenza tra HOTP e TOTP

**HOTP (HMAC-Based One-Time Password)**: L'HOTP genera il codice usando una funzione HMAC applicata a una chiave segreta e a un contatore. Ad ogni richiesta il contatore viene incrementato. Il codice ottenuto resta valido fino a quando viene usato e il server e il client devono tenere sincronizzato questo contatore

**TOTP (Time-Based One-Time Password**: Il TOTP si basa fondamentalmente sullo stesso principio, ma invece di un contatore utilizza il fattore tempo. L'OTP viene generato applicando HMAC a una chiave segreta e a un valore derivato dall'orario corrente. Di conseguenza, il codice è valido solo per breve tempo e non è necessaria una sincronizzazione basata su eventi, ma solo una corretta sincronizzazione dell'orologio


---


*D31* Usando l'algoritmo square&multiply, quale è il numero di operazioni necessario per calcolare $13^{224} \mod 541$, e perchè?

Per l’esponente 224 che in binario è lungo 8 bit, l’algoritmo esegue 7 squaring. Inoltre, eseguendo la moltiplicazione solo per (gli altri) bit pari a 1, con 2 ulteriori moltiplicazioni otteniamo un totale di 9 operazioni modulari. Questo è il motivo per cui, usando il metodo square & multiply, risulta necessario effettuare 9 operazioni per calcolare $13^{224} \mod 541$


---


*D32* Usando un insieme di caratteri Base 64 (26 lettere maiuscole, 26 lettere minuscole, 10 cifre e 2 simboli speciali), due utenti scelgono le loro password in questo modo:
- U1: XxxxxDDS $\rightarrow$ X = maiuscola, x = minuscola, D = cifra, S = simbolo speciale
- U2: AAAAAA $\rightarrow$ A = un carattere qualunque nel charset base 64

1. Calcolando l'entropia per entrambi i casi si dica quale delle due password è più robusta
2. Assumendo di poter provare 1 milione di passwd/secondo, quanto tempo in media è necessario per craccare le passwd sia per U1 che per U2


**Calcolo dell'entropia**
Per U1, il pattern specifica:
- X: 1 lettera maiuscola $\rightarrow 26$ possibilità
- xxxx: 4 lettere minuscole $\rightarrow 26^{4}$ possibilità
- DD: 2 cifre $\rightarrow 10^{2}$ possibilità
- S: 1 simbolo speciale $\rightarrow 2$ possibilità

Il totale delle combinazioni è dunque:
$$
26 \cdot 26^{4} \cdot 10^{2} \cdot 2 = 26^{5} \cdot 10^{2} \cdot 2
$$

L'entropia (in bit) si calcola come:
$$
E_{1} = \log_{2}(26^{5}\cdot 10^{2} \cdot 2) = 5\log_{2}(26) + 2\log_{2}(10) + \log_{2}(2)
$$

Utilizzando le approssimazioni:
- $\log_{2}(26) \approx 4.70$
- $\log_{2}(10) \approx 3.32$
- $\log_{2}(2) = 1$

Abbiamo così:
$$
E_{1} \approx 5 \cdot 4.70 + 2 \cdot 3.32 + 1 = 23.5 + 6.64 + 1 \approx 31.14 
$$


Per U2:
Qui ogni carattere è scelto casualmente da tutto il charset Base64, che contiene 64 caratteri. Poichè la password è lunga 7 caratteri:

Il totale delle combinazioni è:
$$
64^{6}
$$
L'entropia satà:
$$
E_{2} = 6 \cdot \log_{2}(64)
$$
Quindi
$$
E_{2} = 6 \cdot 6 = 36
$$

**Calcolo cracking**
*Per U1*
Il numero totale di combinazioni per U1 è:
$$
N_{1} = 26^{5} \cdot 10^{2} \cdot 2
$$

Calcoliamo:
- $26^{5}$ risulta essere $11.881.376$ 
- Moltiplicando per $10^{2} = 100$ e poi per 2:
$$
N_{1} = 11.881.376 \cdot 100 \cdot 2 = 2.376.275.200
$$

Il numero medio di tentativi necessari sarà la metà:
$$
\text{Tentativi medi} = \frac{N_{1}}{2} = 1.188.137.600
$$

A 1 milione di tentativi al secondo:
$$
t_{1} = \frac{1.188.137.600}{1.000.000} \approx 1188 
$$

Convertendo in minuti:
$$
1188s \div 60 \approx 19.8 
$$
Circa 20 minuti



*Per U2*
Il numero totale di combinazioni per U2 è:
$$
N_{2} = 2^{36}
$$

Il numero medio di tentativi necessari è:
$$
\text{Tentativi medi} = \frac{2^{36}}{2} = 2^{35}
$$

Per trovare il tempo medio in secondi:
$$
t_{2} = \frac{2^{35}}{10^{6}}
$$

Sappiamo che $2^{35}$ è circa 34.359.738.368.
Quindi:
$$
t_{2} \approx \frac{34.359.738.368}{1.000.000} \approx 34359
$$

Convertendo in ore:
$$
34359s \div 3600 \approx 9,55 
$$
Circa 9 ore e 30 minuti


---


*D33* 

![[Pasted image 20250521142614.png]]

1. BCRYPT
2. VERO
3. In decifratura
4. Si ma solo per CBC
5. FALSO
6. Dipende


---


*D34* Si descriva brevemente l'attacco di password spraying

Il password spraying è una tecnica di attacco di brute force in cui l'attaccante utilizza una piccola lista di password comunemente usate, tentandole su un gran numero di account utente. A differenza degli attacchi tradizionali che colpiscono un singolo account con innumerevoli password, qui l'obiettivo è evitare i meccanismi di blocco legati e ripetuti tentetivi falliti su uno stesso account, distribuendo gli attacchi su molti utenti e rendendoli meno evidenti.


---


*D35* 

![[Screenshot 2025-05-21 alle 15.03.35.png]]

1. In un sistema asimmetrico il mittente cifra il messaggio utilizzando la chiave pubblica del destinatario. In questo modo solo il destinatario, che possiede la corrispondente chiave privata, potrà decifrare il messaggio
2. Aggiungere 13 bit alla lunghezza di una chiave aumenta lo spazio delle possibili combinazioni di un fattore pari a $2^{13}$ (circa 8000)
3. Nelle modalità OFB, CFB e CTR il processo di decifratura non utilizza la funzione inversa del block cipher. Anzichè applicare l'inverso, su entrambe le operazioni si usa la funzione di cifratura per generare un keystream che viene XORato con il testo in chiaro o con il ciphertext
4. AES ha un blocco di 16 byte. Con CBC, se il plaintext (256 byte) è un multiplo del blocco, il meccanismo di padding aggiunge un intero blocco (16 byte) per evitare ambiguità durante la decifratura. Inoltre, l'IV viene trasmeso insieme al ciphertext e occupa 16 byte
5. Con il principio del "paradosso del compleanno", per ottenere una probabilità di collisione del 50% il numero totale di possibili codici deve essere dell'ordine di $(350.000)^{2}$. Poichè un codice di X cifre decimali ha $10^{x}$ combinazioni, ponendo $10^{x} \approx (350.000)^{2}$ si ottiene $X \approx \log_{10}(350.000^{2}) \approx 11$ 
6. Una chiave di 4 byte equivale a 32 bit, dunque ci sono $2^{32}$ possibili combinazioni. Poichè la ricerca in forza bruta richiede di provare metà dello spazio (ossia $2^{31}$ tentativi), il tempo medio necessario è:
$$
\frac{2^{31}}{10^{6}} \approx \frac{2.147 \cdot 19^{9}}{10^{6}} \approx 2147 \approx 35
$$ Questo rientra nell'intervallo "tra 30 minuti e 1 ora"

7. Poichè $91 = 7 \cdot 13$, 7 e 91 non sono coprimi. L'inverso modulare esiste solo se il numero e il modulo sono coprimi, pertanto non esiste un inverso di 7 modulo 91
8. Dobbiamo trovare un valore $X$ tale che:
$$
43 \oplus X = 45
$$
Calcolando, 43 in binario è 00101011 e 45 è 00101101. Il risultato dell'operazione XOR è dunque:
$$
43 \oplus 45 = 0000110
$$
Esattamente, 00000110 corrisponde all'opzione "0000.0110". Quindi, applicando
$$
C[4] \oplus 0000.0110
$$
si otterrà il byte 45, cioè il simbolo '-'

9. Anno (AAAA): Poichè l'anno è compreso tra il 2000 e il 2009, ci sono 10 possibili valori, Giorno e mese (GGMMM): in media, si considerano circa 365 possibili combinazioni per giorno e mese

Quindi, il numero totale delle possibili date è circa:
$365 \cdot 10 = 3650$

$\text{entropia} = \log_{2}(3650) \approx 11.8$



---


*D36* Aritmetica modulare e crittografia a chiave pubblica:
a. Usando obbligatoriamente l'algoritmo esteso di Euclide, si determini la chiave privata per un sistema RSA avente modulo N=253 e chiave pubblica e=9

$253 = 11 \cdot 23 \rightarrow \phi(253) = 10 \cdot 22 = 220$ 
Chiave privata $d = 9^{-1} \mod 220 = 49$

b. Usando obbligatoriamente l'algoritmo Square&multiply, usando il sistema RSA precedente, si cifri il messaggio M=10

ciphertext = $M^{e} \mod 253 = 10^{9} \mod 253 = 43$

c. Si consideri un protocollo di key agreement Diffie-Hellman avente paramtetri g=5 e p=107. Si calcoli la chiave condivisa che si ottiene dal seguente scambio:
- A genera x=13 e manda a B il coefficiente pubblico $g^{x} \mod p = 45$
- B genera y=16 e manda ad A il coefficiente pubblico $g^{y} \mod p = 61$ 
(nel calcolo, si scelga la "strada che minimizza i calcoli da fare con gli algoritmi S&M)

E' possibile ricavare la chiave condivisa sia mettendoci dal punto di vista di A, che dal punto di vista di B. Facendo i conti a mano, conviene metterci dal lato di B, in quanto il suo coefficiente privato, in binario, è y = 16 = $10000_{2}$ e quindi dovremo solo fare quattro quadrati modulati - nel caso 13 = $1101_{2}$, anche se il numero è minore, dobbiamo comunque fare tre quadrati e due moltiplicazioni, e quindi in totale una operazione in più.
Risulta:
$K = (g^{x})^{y} \mod p = (45)^{16} \mod p = 44$



---


*D37* Per hash crittografiche, quale è la differenza tra "weak collision resistance" e "strong collision resistance"?

**Weak Collision Resistance**: Questa proprietà richiede che, dato un messaggio fissato $m$, sia computazionalmente impossibile (o estremamente difficile) trovare un altro messaggio $m'$ (con $m' \neq m$) tale che 
$$
H(m) = H(m')
$$

**Strong Collision Resistance**: Qui il requisito è più stringente: deve risultare computazionalmente impossibile (o estremamente difficile) trovare **qualsiasi** coppia di messaggi distinti $m$ e $m'$ tali che
$$
H(m) = H(m')
$$


---


*D38* Dopo aver spiegato cos'è un replay attack, si discutano i pro e i contro di possibili metodi per mitigare tali attacchi


Un **replay attack** è un tipo di attacco in cui un aggressore intercetta una comunicazione leggittima tra due parti e, in un secondo momento, la ritrasmette per ottenere un effetto indesiderato o per guadagnare accesso non autorizzato. In pratica l'attaccante "riusa" un messaggio valido, per simulare una nuova, leggittima richiesta

- **Sequence number** $\rightarrow$ C'è una protezione in caso di reboot del sistema?
- **Random numbers** $\rightarrow$ Necessita memorizzazione dello storico dei nonce per poter identificare eventuali riutilizzi
- **Time Stamp** $\rightarrow$ Problemi di sincronizzazione possono portare a falsi negativi o positivi. La finestra di validità deve essere calibrata con attenzione per evitare che messaggi legittimi vengano scartati o che l'attaccante trovi l'occasione per ripetizioni nel periodo consentito


---


*D39* Assumendo un cifrario a blocchi da 4 bit basato sulla specifica permutazione riportata nella tabella a destra, si CIFRI il messaggio 1111.1111.1111 usando rispettivamente (ove servissse un vettore di inizializzazione o un contatore iniziale, si usi il valore 0100)


**ECB**
Ogni blocco viene cifrato in modo indipendente usando la stessa funzione.
Di conseguenza, il ciphertext finale diventa "0100.0100.0100"

**CTR**
Si utilizza un contatore che viene aumentato di 1 ogni volta, viene criptato ogni volta e XORato con il plaintext
(0100) 0010.1111.1100

**OFB**
Il contatore viene criptato quante volte sono i blocchi del ciphertext (in questo caso 3)
Quindi verrà
(0010) 0010.0011.0001



---


*D40* Un messaggio è lungo 1500 bit; Quante funzioni di compressione devono essere calcolate per produrre un tag HMAC-SHA256 con chiave di autenticazione a 128 bit?

Rigorosamente parlando sarebbe 7, perchè ai 1500 bit sarebbe da aggiungere i 64 bit len e quindi il ms sta in 4 blocchi, più blocco per chiave + 2 blocchi finali (ma risposta 6 = OK)


---


*D41* Generando casualmente circa 10 miliardi di codici alfabetici composti da $X$ lettere minuscole, la probabilità che due di essi siano identici è approssimativamente del 50%. Di quante lettere sono composti questi codici?

$\log_{26} 10^{20} = 14$ 


---


*D42* Quale è, approssimativamente, il tempo medio necessario, in ore, per craccare un codice di 12 cifre decimali, assumendo di poter effettuare 1 milione di tentativi al secondo?

Tra 100 e 200 ore
$\frac{10^{6}}{2} \rightarrow \frac{\text{risultato}}{3600} \rightarrow 139$ 


---


*D43* Per un sistema di cifratura a chiave pubblica El Gamal con modulo $p = 83$, generatore $g=5$, e chiave privata $s=8$, si decifri il messaggio cifrato $CT=(44,48)$ (si svolgano i calcoli facendo esplicito uso degli algoritmi square&multiply e algoritmo di Euclide esteso)


Rappresentare 8 in binario
$8 = 1000_{2}$ 

Eseguire square&Multiply
$44^{8} \mod 83 = 75$

Calcolare l'inverso mod 83 di 75
$83 = 1 \cdot 75 + 8$
$75 = 9 \cdot 8 + 3$
$8 = 2 \cdot 3 + 2$ 
$3 = 1 \cdot 2 + 1$
$2 = 2 \cdot 1 + 0$

Facendo tutto il passaggio otteniamo
$$
75^{-1} \mod 83 = 31
$$


Calcolare il messaggio
$M = 48 \cdot 31 \mod 83 = 1488 \mod 83 = 77$

Quindi **il messaggio decifrato è** $M = 77$


---


*D44* Si considerino codici numerici composti da 6 cifre, ovvero del tipo XXXXXX
- Qual'è l'entropia ne caso in cui le cifre siano scelte in modo uniforme?
- Come cambia l'entropia se un utente usa solo cifre dispari?
- Come cambia l'entropia se un utente usa solo le tre cifre 1-3-7, ed in particolare '1' con probabilità 50%, '5' con probabilità 30% e '7' con probabilità 20%?


*Premessa* L’entropia in teoria dell’informazione misura l’incertezza media associata a una variabile casuale. Per un insieme di eventi (o simboli) che si verificano con probabilità pip_i, la formula è:
$$
H = -{\sum\limits_{i} p_{i} \cdot \log_{2}(p_{i})}
$$
Se tutti gli eventi sono ugualmente probabili, vale
$$
H = \log_{2} (n)
$$
Dove $n$ è il numero totale di eventi possibili

In questo esercizio, ogni cifra viene scelta da 10 possibili valori (da 0 a 9) con probabilità uniforme

$$
H_{digit} = \log_{2}(10) \approx 3.32193
$$
Entropia dell'intero codice
$$
H = 6 \cdot 3.32193 \approx 19.93
$$

Arrotondando, si ottiene **19.9 bit**


*Caso 2*
Totale 5 cifre (solamente numeri dispari)
$$
H_{digit} = \log_{2}(5) \approx 2.32193
$$
Entropia per il codice a 6 cifre
$$
H = 6 \cdot 2.32193 \approx 13.93
$$
Arrotondando, otteniamo **13.9 bit**


*Caso 3*
Distribuzione non uniforme
- $p(1) = 50\% = 0.5$
- $p(2) = 30\% = 0.3$
- $p(3) = 20\% = 0.2$

Utilizziamo la formula
$$
H_{digit} = - [0.5\log_{2}(0.5) + 0.3\log_{2}(0.3) + 0.2\log_{2}(0.2)]
$$

Quindi
$$
H_{digit} = -[-0.5 - 0.5211 - 0.4644] \approx 1.4855
$$

Entropia totale per il codice a 6 cifre
$$
H = 6 \cdot 1.4855 \approx 8.91 
$$

Arrotondando, si ottiene **8.9 bit**


---


*D45* Un filtro di Bloom usa una memoria di 10 milioni di bit. L'obiettivo è di avere un falso positivo non maggiore di circa il 3%
- Quante password può memorizzare al massimo, dimensionando il filtro in modo ottimo?
- Quante password può memorizzare al massimo, ove il filtro usasse solo due hash?
- Se, nel caso (1) il filtro è parzialmente riempito e sta operando con un falso positivo dell'1%, quante password potete ancora aggiungere al filtro?


1. Dimensionamento ottimo del filtro 3%

*Dati*
- Memoria disponibile $m$ = 10 milioni di bit
- Tasso di falso positivo desiderato $P_{fp} \leq 3\% = 0,03$ 

*Numero ottimo di hash k*
Il valore di $k$ che minimizza il falso positivo è
$$
k_{opt} = \frac{m}{n}\ln2
$$
ma spesso lo ricaviamo dall'approssimazione inversa: per $P_{fp} \approx \frac{1}{32} \approx 3\%$ si nota che
$$
\frac{1}{32} = \frac{1}{2^{5}} \rightarrow k = 5
$$

*Massimo numero di elementi n*
Con $k = 5$, in regime "ottimo" vale l'approssimazione
$$
n = \frac{n}{k\ln2} = \frac{10Mbit}{5 \cdot 0,693} \approx 1,386 \cdot 10^{6} = 1,386 \text{milioni di password}
$$
Questo sarebbe il **numero teorico massimo di password stoccabili ottimizzando k**



2. Se il filtro usa solo due hash

La probabilità di falso positivo per un filtro di Bloom con $k$ hash è approssimativamente
$$
P_{fp} \approx (1-e^{-kn/m})^k
$$
Imponiamo $P_{fp} = 0,03$ e $k = 2$. Dunque
$$
(1-e^{-2m/m})^{2} = 0,03 \rightarrow 1-e^{-2n/m} = \sqrt{0,03} \approx 0,1732
$$
Da cui
$$
e^{-2n/m} = 1-0,1732 = 0,8268
$$
$-\frac{2n}{m} = \ln(0,8268) \approx -0,1906 \rightarrow n = -\frac{m}{2}\ln(0,8268) = \frac{10\cdot10^{6}}{2} \cdot 0,1906 \approx 953.000$

Con **2 hash** e 10Mbit di memoria, si possono memorizzare **circa 953.000 password** per mantenere il falso positivo al 3%


---


*D46* E' necessario memorizzare una whitelist di 64.000 indirizzi IP in un filtro di Bloom, in modo da garantire una probabilità di falso positivo minore dello 0.4%. Quanta memoria è necessaria, e quante funzioni hash usereste?


Per un filtro di Bloom con 64.000 elementi e probabilità $p = 0.4\% = 0.004$ 

1. **Numero di bit totali (m)**:
$$
m = -\frac{n \ln p}{(\ln2)^{2}} = - \frac{64.000\ln(0.004)}{(0.6931)^{2}} \approx 735.500 bit
$$
Che corrispondono a circa
$$
\frac{735.500}{8} \approx 91.938byte \rightarrow \frac{91.938}{1024} \approx 89,8 KB
$$

2. **Numero di funzioni hash (k)**:
$$
k = \frac{m}{n} \ln2 \approx \frac{735.500}{64.000} \cdot 0.6931 \approx 7,97
$$
Si arrotonda quindi a **8 funzioni hash**


---


*D47* E' necessario memorizzare una whitelist di 256.000 indirizzi IP in un filtro di Bloom, in modo da garantire una probabilità di falso positivo strettamente inferiore al 3.2%. Quanta memoria è necessaria, e quante funzioni hash usereste?

Per un filtro di Bloom con 256.000 elementi e probabilità $p = 3.2\% = 0.032$ 

1. **Numero di bit totali (m)**:
$$
m = -\frac{n \ln p}{(\ln2)^{2}} = -\frac{256.000 \ln(0.032)}{(0.6931)^{2}} \approx 1.834.00 bit
$$
Che corrispondono a circa
$$
\frac{1.834.000}{8} \approx 229.250byte \rightarrow \frac{229.250}{1024} \approx 223,8 KB 
$$

2. **Numero di funzioni hash (k)**:
$$
k = \frac{m}{n}\ln2 \approx \frac{1.834.000}{256.000} \cdot 0.6931 \approx 4,97
$$
Si arrotonda quindi a **5 funzioni hash**


---


*D48* Un sistema di cifratura a chiave pubblica El Gamal usa i seguenti parametri: modulo primo $p = 29$, generatore $g = 8$
1. Si illustri, il procedimento di cifratura El Gamal
2. Sapendo che la chiave privata è $s = 11$, quale è la chiave pubblica? La si calcoli manualmente, usando l'algoritmo square&multiply, e mostrando i vari passaggi e risultati intermedi
3. Un client invia un messaggio cifrato dalla coppia di valor (14,22). Si decifri il messaggio


- **Procedura di cifratura el Gamal**

Sia $(p, g, h)$ la chiave pubblica (con $h = g^{s} \mod p$) e $m$ il messaggio
Per cifrare $m$:
1. Il mittente sceglie **a caso** un intero $k$ fra 1 e $p-2$
2. Calcola $c1 = g^{k} \mod p$, $c2 = m\cdot h^{k}\mod p$ 
3. Invia la coppia di cifrari $(c1, c2)$ 


- **Calcolo della chiave pubblica h = g^s mod p**

Vogliamo $h = 8^{11} \mod p$. Usiamo lo square&multiply, sfruttando la rappresentazione binaria di 11, che è $1011_{2}$ 

Calcoliamo le potenze di 8:
- $8^{1} \mod 29 = 8$
- $8^{2} = 64 \mod 29 = 64 - 2 \cdot 29 = 6$
- $8^{4} = (8^{2})^{2} = 6^{2} = 32 \mod 29 = 7$
- $8^{8} = (8^{4})^{2} = 7^{2} = 49 \mod p = 20$

Moltiplichiamo le potenze corrispondenti ai bit "1" di 11
$$
8^{11} = 8^{8} \cdot 8^{2} \cdot 8^{1} \mod 29 = 20 \cdot 6 \cdot 8 \mod 29
$$
- $20 \cdot 6 = 120 \mod 29 = 120 - 4 \cdot 29 = 4$
- $4 \cdot 8 = 32 \mod 29 = 3$

Quindi **la chiave pubblica è h = 3**


- **Decifratura del messaggio (c1, c2) = (14, 22)**

Il destinatario calcola il segreto condiviso
$$
s_{shared} = c^{s}_{1} \mod p = 14^{11} \mod 29
$$
e poi ottiene
$$
m = c2 (s_{shared})^{-1} \mod p
$$

**Calcolo di $14^{11} \mod 29$**

Rappresentiamo 11 in binario e calcoliamo:
- $14^{1} \mod 29 = 14$
- $14^{2} = 196 \mod 29 = 196 - 6 \cdot 29 = 22$
- $14^{4} = 22^{2} = 484 \mod 29 = 484 - 16 \cdot 29 = 20$
- $14^{8} = 20^{2} = 400 \mod 29 = 400 - 13 \cdot 29 = 23$

Ora
$$
14^{11} = 14^{8} \cdot 14^{2} \cdot 14^{1} = 23 \cdot 22 \cdot 14 \mod 29
$$
- $23 \cdot 22 = 506 \mod 29 = 506 - 17 \cdot 29 = 13$
- $13 \cdot 14 = 182 \mod 29 = 182 - 6 \cdot 29 = 8$

Quindi 
$$
s_{shared}=8
$$

**Inversione di $s_{shared} = 8 \mod 29$**

Cerchiamo $x$ tale che $8x \equiv 1 (\mod 29)$ 
Con l'Euclide esteso si trova facilmente
$$
8^{-1} \mod 29 = 11
$$
perchè $8 \cdot 11 = 88 \equiv 1 (\mod 29)$ 


**Estrazione di** $m$ 

Infine
$$
m = c2 \cdot (8^{-1}) \mod 29 = 22 \cdot 11 \mod 29 = 242 \mod 29 = 242 - 8 \cdot 29 = 10
$$

**Risultato definitivo**
$m = 10$



---


*D49* Un filtro di Bloom usa una memoria di 1 milione di bit e contiene 180.000 password
1. Quale è il minimo valore possibile del falso positivo ottenibile?
2. Se il numero delle password contenute nel filtro aumentasse del 50%, senza cambiare null'altro, quale sarebbe il falso positivo risultante?


**Numero ottimale di hash**
$$
k^{*} = \frac{m}{n}\ln2 = \frac{1.000.000}{180.000} \cdot 0.6931 \approx 3.85
$$
In pratica useremo $k = 4$ funzioni hash


**Probabilità di falso positivo**
$$
p = (1 - e^{-4 \cdot (\frac{180.000}{1.000.000})})^{4} = (1 - e^{-0.72})
^{4}$$

Che approssimato è $0.0690$


**Aumento del 50% di n (a 270.000), senza cambiare m nè k**
Manteniamo $k = 4$ e ricalcoliamo
$$
p' = (1 - e^{-4 \cdot (270.000/1.000.000)})^{4} = (1-e^{-1.08})^4 = (1-0.339)^4 \approx 0.661^4 \approx 0.19
$$
Ossia **19%**


---


*D50* Un sistema di anonimizzazione genera, per ogni utente, un identificativo randomico di 12 caratteri scelti dall’insieme dei caratteri Base64 (10 cifre, 26 lettere minuscole, 26 lettere maiuscole, 2 caratteri speciali, esempio: e9PsNjBuQ7/e ) 

a) quale e’ l’entropia dell’identificativo? 

b) Assumendo 8 miliardi di persone nel mondo, quale è approssimativamente la probabilità che due persone abbiano lo stesso identificativo?


- Stringa composta da 12 caratteri, ciascuno scelto in modo indipendente da un insieme di 64 simboli, questo significa che il numero totale di identificativi è $64^{12}$

Utilizzando le proprietà dei logaritmi per calcolare l'entropia in bit, otteniamo
$$
\log_{2} (64^{12}) = 12 \cdot \log_{2}(64) = 12 \cdot 6 = 72bit
$$

Pertanto, **l'entropia complessiva finale è di 72 bit**


- L'insieme di identificativi possibile è di dimensione
$$
64^{12} = 2^{6 \cdot 12} = 2^{72}
$$

  
- Con 8 miliardi di persone, poniamo $n = 8 \cdot 10^{9}$. La probabilità che almeno due persone abbiano lo stesso identificativo si può approssimare con la formula derivata dal "paradosso del compleanno"

$$P \approx \frac{n^{2}}{2\cdot2^{72}}$$
- Calcoliamo $n^{2}$
$$
n^{2} = (8\cdot 10^{9})^{2} = 64\cdot 10^{18} = 6.4\cdot10^{19}
$$

- Calcoliamo il denominatore $2\cdot2^{72}$. Con l'approssimazione nota $2^{10}\approx 10^{3}$, possiamo stimare
$$
2^{72} \approx 4.7 \cdot 10^{21} \rightarrow 2\cdot2^{72} \approx 9.4 \cdot 10^{21}
$$
- Quindi
$$
P \approx \frac{6.4 \cdot 10^{19}}{9.4 \cdot 10^{21}} \approx 0.0068
$$
Questo significa che la **probabilità che esista almeno una coppia di persone con lo stesso identificativo è circa dello 0,7%**


---



*D51* Si consideri El Gamal con modulo $p = 79$, generatore $g=3$ e chiave privata $s=7$ 
- Si descriva come vengono DECIFRATI i messaggi in ElGamal
- Si mostri il ciphertext ottenuto dalla cifratura del messaggio $M=64$ con nonce $r=4$, mostrando nei dettagli il/i calcolo/i effettuato/i usando l'algoritmo Square&Multiply


**Decifrazione in ElGamal**
In ElGamal il messaggio viene cifrato in forma di coppia $(a,b)$ definita come
$$
a = g^{r} \mod p, \quad b = M\cdot y^{r} \mod p
$$

Per *decifrare* un ciphertext, chi possiede la chiave privata $s$ procede così
1. Calcolo del segreto condiviso
$$
K = a^{s} \mod p
$$
(ricordando che, essendo $a = g^{r}$, si ha $K = g^{rs}$)

2. Calcolo dell'inversa modulo $p$ di $K$: Si determina $K^{-1}$ tale che
$$
K \cdot K^{-1} \equiv 1 \mod p
$$

3. Recupero del messaggio: Dato che $b = M \cdot K \mod p$, si ottiene
$$
M = b \cdot K^{-1} \mod p
$$
questo procedimento "annulla" il mascheramento applicato al messaggio durante la cifratura


**Cifratura del messaggio M = 64 con r = 4**
Abbiamo i seguenti parametri:
- $p = 79$
- $g = 3$
- Chiave privata $s = 7$

*Calcolo della chiave pubblica*
Calcoliamo $y = 3^{7} \mod 79$

Pertanto, la chiave pubblica è 54


*Calcolo di a=g^r mod p con r=4 usando square&mutiply*
Dobbiamo calcolare 
$$
a = 3^{4} \mod 79
$$

Al termine del ciclo, $a = R = 2$


*Calcolo di b = M x y^r mod p con M=64 e r=4*
Esprimiamo:
$$
b = 64\cdot54^{4} \mod 79
$$
Calcoliamo $54^{4} \mod 79$
Al termine, otteniamo $54^{4} \mod 79 = R = 49$

*Calcolo di b*
$$
b = 64 \cdot 49 \mod 79
$$
Alla fine dei calcoli, verrà $b = 55$


**Il ciphertext finale è (2, 55)**


---


*D52* Tre utenti scelgono le password come segue (alfabeto di 26 lettere): 

- Utente 1: passwd di 15 lettere maiuscole o minuscole, ripetendo blocchi di 3, es: MMMxxxfffAAAzzz 
- Utente 2: due date di nascita consecutive nel formato DDMMAAAA, es: 1402199911032002 (attenzione: sono date di nascita non cifre generiche!!) 
- Utente 3: sei caratteri base 64, es. e9Ps/Q 

Calcolando (eventualmente con qualche approssimazione) l’entropia di ogni approccio, si determnini quale tra queste tre soluzioni e’ preferibile.

*Utente 1*
- La password è di 15 lettere, ma viene scelta in blocchi di 3 lettere identiche
- Questo significa che, invece di avere 15 posizioni libere, si hanno 5 blocchi indipendenti
- Il problema specifica l'alfabeto a 26 lettere

Quindi il numero delle possibili password è 
$$
N_{1} = 26^{5}
$$
L'entropia è
$$
H = \log_{2}(26^{5}) = 5 \cdot \log_{2}(26)
$$
Sapendo che $\log_{2}(26) \approx 4.7$, troviamo
$$
H_{1} \approx 5\cdot 4.7 \approx 23.5 bit
$$


*Utente 2*
- Una data di nascita reale non può avere qualsiasi combinazione di 8 cifre, ma corrisponde a una data valida
- Supponendo un intervallo realistico (per esempio, 100 anni), il numero totale di possibili date valide è approssimativamente pari a 365
- Adottando una stima più grossolana, si può ipotizzare che il numero di possibili date sia dell'ordine di $36.500$ 

L'entropia per una data sarà quindi
$$
H_{data} \approx \log_{2}(36.500)
$$

Calcoliamo:
- Poichè $\log_{2}(365) \approx 8.5$ e $\log_{2}(100) \approx 6.64$, allora $\log_{2}(36.500) \approx 8.5 + 6.64 \approx 15.14$ bit per data

Per due date, l'entropia complessiva è:
$$
H_{2} \approx 2 \cdot 15.14 \approx 30.3bit
$$
che approssimiamo a circa 30 bit


*Utente 3*
- La password è costituita da 6 caratteri scelti da un alfabeto base64

Il numero totale di combinazioni è:
$$
N_{3} = 64^{6}
$$
e l'entropia corrispondente è:
$$
H_{3} = \log_{2}(64^{6}) = 6 \cdot \log_2(64)
$$
Sapendo che $\log_{2}(64) = 6$, otteniamo:
$$
H_{3} = 6\cdot6 = 36bit
$$

Riassumendo, la **soluzione migliore è quella dell'utente 3**


---


*D53* Usando un insieme di caratteri Base 64 (26 lettere maiuscole, 26 lettere minuscole, 10 cifre e 2 simboli speciali), sue utenti scelgono le loro password in questo modo: 
- U1: XxxxxDDS à X= maiuscola, x=minuscola, D=cifra, S=simbolo speciale; 
- U2: AAAAAA à A= un carattere qualunque nel charset base64 

1) Calcolando l’entropia per entrambi i casi si dica quale delle due password è più robusta; 
2) assumendo di poter provare 1 milione di passwd/secondo, quanto tempo in media è necessario per craccare le passwd sia per U1 che per U2


**Calcolo dell'entropia**
Per U1
- 1 carattere maiuscolo (X): 26 possibilità 
- 4 caratteri minuscoli (xxxx): ogni posizione ha 26 possibilità, cioè $26^{4}$
- 2 cifre (D): ogni posizione ha 10 possibilità, cioè $10^{2}$
- 1 simbolo speciale (S): 2 possibilità

Il totale delle combinazioni è quindi:
$$
N_{U1} = 26 \cdot 26^{4} \cdot10^{2} \cdot 2 = 26^{5} \cdot 100 \cdot 2
$$
Sapendo che:
$$
26^{5} = 11.881.376
$$
Otteniamo:
$$
N_{U1} = 11.881.376 \cdot 100 \cdot 2 = 2.376.275.200
$$
L'entropia in bit è
$$
H_{U1} = \log_{2}(N_{U1}) = \log_{2}(26^{5}) + \log_{2}(10^{2}) + \log_{2}(2)
$$
Utilizzando le approssimazioni:
- $\log_{2}(26) \approx 4.7$, quindi $\log_{2}(26^{5}) \approx 5 \cdot 4.7 = 23.5bit$ 
- $\log_{2}(10) \approx 3.32$, dunque $\log_{2}(10^{2}) \approx 2 \cdot 3.32 = 6.64 bit$
- $\log_{2}(2)= 1bit$ 

in totale:
$$
H_{U1} = 23.5+6.64+1 = 31.14bit
$$


Per U2
Ogni carattere è scelto da un intero charset di 64 caratteri, quindi:
$$
N_{U2} = 64^{6}
$$
Poichè $\log_{2}(64) = 6$, l'entropia è:
$$
H_{U2} = 6 \cdot 6 = 36bit
$$


**Tempo medio necessario per craccare le password**
L'ipotesi è di provare 1 milione di password al secondo ($1\cdot10^{6}$ passwd/s). In un attacco esaustivo, in media occorre provare la metà dello spazio di ricerca

Per U1: Numero totale di possibilità: $N_{U1} = 2.376.275.200$. Numero medio di tentativi:
$$
\frac{N_{U1}}{2} \approx \frac{2.376 \cdot 10^{9}}{2} = 1.188 \cdot 10^{9}
$$
Tempo medio in secondi:
$$
T_{U1} = \frac{1.188 \cdot 10^{9}}{1 \cdot 10^{6}} \approx 1188secondi
$$
Convertiamo in minuti:
$$
1188 \div 60 \approx 19.8 minuti
$$

Per U2: Numero totale di possibilità:
$$
N_{U2} = 64^{4} = 2^{36} \approx 68.719.476.736
$$
Numero medio di tentativi:
$$
\frac{N_{U2}}{2} \approx \frac{68.72 \cdot 10^{9}}{2} \approx 34.36 \cdot 10^{9}
$$
Tempo medio in secondi:
$$
T_{U2} = \frac{34.36 \cdot 10^{9}}{1 \cdot 10^{6}} \approx 34.360 secondi
$$
Convertiamo in ore:
$$
34.360 \div 3600 \approx 9.55 ore
$$

