

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
![[Obsidian LaTeX.pdf]]

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
