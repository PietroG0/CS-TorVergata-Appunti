#Sicurezza 


#### Quattro modi di cifratura a blocchi 
**CBC - Cipher Block Chaining**

Funzionamento:
- **Primo blocco**: Si effettua uno XOR tra il primo blocco in chiaro $P_{1}$ e l'IV, quindi si cifra il risultato
$$
C_{1} = E(K, P_{1} \oplus IV)
$$
- **Blocchi successivi**: Ogni blocco in chiaro viene XORato con il blocco cifrato precedente prima di essere cifrato
$$
C_{2} = E(K, P_{2} \oplus C_{1})
$$

**Esempio pratico**: Immaginiamo di voler cifrare "HelloWorld" diviso in "Hello" e "World". In CBC, "Hello" viene combinato con l'IV e cifrato per ottenere $C_{1}$. Poi "World" viene XORato con $C_{1}$ e cifrato per ottenere $C_{2}$. Questo accorgimento fa sì che anche se "Hello" si ripetesse, il risultato sarebbe diverso perchè ogni blocco dipende dal precedente



**CFB - Cipher Feedback**

Funzionamento:
- **Primo blocco**: Si cifra l'IV, quindi si effettua uno XOR del risultato con $P_{1}$
$$
C_{1} = P_{1} \oplus E(K, IV)
$$
- **Blocchi successivi**: Il blocco cifrato ottenuto viene poi usato come "feedback" per cifrare il blocco successivo
$$
C_{2} = P_{2} \oplus E(K, C_{1})
$$

**Esempio pratico:** Per cifrare “Hello” e “World”, prima si cifra l’IV e si combina con “Hello” per ottenere il primo blocco cifrato. Poi, questo $C_{1}$ viene processato con $E(K, -)$ e il risultato viene XORato con “World”. Così, anche un eventuale errore o ripetizione cambia la dinamica del processo.


**OFB - Output Feedback**

Funzionamento:
- **Generazione della keystream**: Si parte cifrando l'IV per ottenere il primo output $O_{1}$, che poi viene cifrato ulteriormente per ottenere $O_{2}$, e così via
$$
O_{1} = E(K, IV)
\quad
O_{2} = E(K, O_{1})
$$
- **Cifratura dei blocchi**: Ogni blocco in chiaro viene XORato con il corrispondente output della keystream:
$$
C_{1} = P_{1} \oplus O_{1}
\quad
C_{2} = P_{2} \oplus O_{2}
$$

**Esempio pratico:** Supponiamo di avere “Hello” e “World”. In OFB, non dipendendo dai blocchi di testo, si genera una sequenza $O1,O2, \dots$ partendo dall’IV. “Hello” viene combinato con $O_{1}$ e “World” con $O_{2}$ per ottenere rispettivamente $C_{1}$ e $C_{2}$. La keystream è indipendente dal messaggio, il che rende OFB simile a un cifrario a flusso.


**CTR - Counter Mode**

Funzionamento:
- **Generazione della keystream**: Ad ogni blocco viene associato un contatore (spesso combinato con un nonce) che viene cifrato
$$
K_{1} = E(K, nonce ||1) \quad K_{2} = E(K, nonce || 2)
$$
- **Cifratura dei blocchi**: Ciascun blocco in chiaro viene XORato con il corrispondente keystream
$$
C_{1} = P_{1} \oplus K_{1} \quad C_{2} = P_{2} \oplus K_{2}
$$


---


#### Entropia di una password
Calcoliamo l'entropia scomponendo la password in parti indipendenti.
La formula che usiamo è
$$
E_{totale} = E_{1} + E_{2} + \dots + E_{K}
$$
Dove ogni termine $E_{i}$, è l'entropia (in bit) della porzione $i$ della password, calcolata come
$$
E_{i} = \log_{2}(\text{numero di possibilità per quella porzione})
$$


---

#### Messaggi cifrati e messaggi firmati digitalmente
In un sistema di crittografia asimmetrica ogni utente dispone di due chiavi:
- Una **chiave pubblica (PK)**, che può essere resa nota a chiunque
- Una **chiave privata (SK)**, che deve rimanere segreta

L'uso di queste chiavi dipende dallo scopo del messaggio:
- Per garantire la **confidenzialità**, si usa la chiave pubblica del destinatario
- Per garantire l'**autenticità** e la **non ripudiabilità**, si usa la chiave privata del mittente

Immaginiamo che A debba inviare due diversi messaggi a B::
1. **Messaggio cifrato**:
	- **Passo 1**: A prende il messaggio da inviare e lo cifra usando **PK_b**
	- **Passo 2**: Il ciphertext viene inviato a B
	- **Passo 3**: B decifra il ciphertext usando la propria **SK_b**

2. **Messaggio firmato*
	- **Passo 1**: A genera una firma digitale applicando una funzione di firma (ad esempio, calcolando un hash del messaggio e cifrandolo con SK_a)
	- **Passo 2**: A invia il messaggio in chiaro assieme alla firma digitale a B
	- **Passo 3**: B verifica la firma utilizzando **PK_a**: se la firma è valida, B può essere sicuro che il messaggio provenga effettivamente da A e che non sia stato alterato

Quindi, in sintesi
- **Per la cifratura (secrecy)**: si usa la chiave pubblica del destinatario
- **Per la firma digitale (autenticità e integrità)**: si usa la chiave privata del mittente


---


#### Paradosso del compleanno
La probabilità di avere almeno una collisione è
$$
p_{(collisione)} = 1 - e^{-\frac{n^{2}}{2N}}
$$

Se si vuole trovare il valore di $n$ per cui $P_{(collsione)}$ è circa il 50%, basta risolvere l'equazione, che diventa
$$
n \approx \sqrt{2N\ln2}
$$

Quindi, se per esempio volessimo calcolare numeri compresi con circa 12 cifre, $N \approx 10^{12}$, allora si andrà a calcolare
- $\ln2 \approx 0.693$
- $2N\ln(2) \approx 2 \cdot 10^{12} \cdot 0.693 \approx 1.386 \cdot 10^{12}$
- La radice quadrata è:
$$
n \approx \sqrt{1.386 \cdot 10^{12}} \approx \sqrt{1.386} \cdot 10^{6} \approx 1.177 \cdot 10^{6}
$$

Perciò, sono necessarie circa 1.18 x $10^{6}$ estrazioni, in altre parole, all'incirca 1,2 milioni di estrazioni



---


#### ElGamal

1. **Generazione delle chiavi**:
- Scelta dei parametri pubblici: Scegli un numero primo $p$ e un generatore $g$ del gruppo moltiplicativo modulo $p$
- Chiave privata: Scegli un numero segreto $s$
- Chiave pubblica: Calcola $y=g^{s} \mod p$. La chiave pubblica è $(p,g,y)$, mentre $s$ resta segreta

2. **Cifratura**
- Per cifrare un messaggio $M$ (inteso come un numero modulo $p$), scegli un numero casuale $r$ (detto nonce)
- Calcola $a = g^{r} \mod p$
- Calcola $b = M \cdot y^{r} \mod p$
- Il ciphertext è la coppia $(a, b)$

3. **Decifratura**
- Conosciuta la chiave privata $s$, calcola il segreto condiviso $K = a^{s} \mod p$
- Trova l'inverso modulo $p$ di $K$, $K^{-1}$, in modo che $K \cdot K^{-1} \equiv 1 \mod p$
- Recupera il messaggio $M$ calcolando $M = b \cdot K^{-1} \mod p$



*Calcolo della chiave pubblica*
- Dato il primo $p$, il generatore $g$ e la chiave privata $x$
- Si ottiene la chiave pubblica $h$ con la formula $h \equiv g^{x} \mod p$
- La chiave pubblica è la tripla $(p, g, h)$


*Decifrare un messaggio*
Testo cifrato $\rightarrow (c_{1},c_{2})$ Chiave privata $\rightarrow x$
- Calcolare $s = c_{1}^{x} \mod p$
- Trovare l'inverso di $s \mod p$, cioè $s^{-1}$ tale che $s \cdot s^{-1} \equiv 1 \mod p$
- Ricostruire il messaggio: $m \equiv c_{2} \cdot s^{-1} \mod p$


*Cifrare un messaggio*
Messaggio in chiaro $\rightarrow m$ Chiave pubblica $\rightarrow (p, g, h)$
- Scegliere un intero casuale $k$
- Calcolare $c_{1} \equiv g^{k} \mod p$ e $c_{2} \equiv m \cdot h^{k} \mod p$
- Testo cifrato $\rightarrow (c_{1},c_{2})$


*Distinguere chiave pubblica e privata*
Dati due valori $a$ e $b$, per capire quale sia $x$ e quale $h$:
- Verificare se $g^{a} \mod p = b$
	- Se si, allora $x=a$ (privata) e $h=b$ (pubblica)

- Altrimenti, se $g^{b} \mod p = a$
	- Allora $x=b$ (privata) e $h=a$ (pubblica)

In pratica, il valore che soddisfa $h \equiv g^{x} \mod p$ è sempre la chiave pubblica

---

#### Inverso modulare

1. **Verifica della condizione**
- Assicurati che $gcd(a,m) = 1$. Se non è 1, l'inverso non esiste

2. **Algoritmo di Euclide esteso**
- Applica l'algoritmo di Euclide per trovare i coefficienti $x$ ed $y$ tali che
$$
a \cdot x + m \cdot y = gcd(a,m) = 1
$$

3. **Back-Substituition**
- Risali la catena delle equazioni per esprimere 1 come combinazione lineare di $a$ e $m$
- Il coefficiente $x$ trovato in questa equazione è l'inverso di $a \mod m$

4. **Normalizzazione**
- Se $x$ è negativo, trasformalo in un intero positivo usando $x \mod m$


---

#### Filtri di Bloom

**Identifica i parametri dati**
- $n$: numero di elementi da inserire
- $p$: probabilità massima di falso positivo desiderata


**Calcolo della dimensione del filtro (m in bit)**
La formula classica è:
$$
m = -\frac{n \ln p}{(\ln2)^2}
$$
1. Calcola $(\ln2)^{2}$: Con $\ln2 \approx 0.6931$, allora $(\ln2)^{2} \approx 0.4805$
2. Sostituisci i valori: Inserisci $n$, $\ln p$ e $(\ln2)^{2}$ nella formula per ottenere $m$

**Calcolo del numero ottimale di funzioni hash (k)**
La formula per $k$ è:
$$
k = \frac{m}{n}\ln 2
$$

**K ottimo per dato m e p**
$$
k = -\frac{\ln p}{\ln2}
$$


**Calcolo del numero di probabilità di falsi positivi (p)**
La formula è:
$$
p = (1-e^{-k\cdot \frac{n}{m}})^k
$$

**Calcolo del numero massimo di password (n)**
La formula è:
$$
n = \frac{m(\ln2)^2}{-\ln(p)}
$$



**Calcolo degli elementi massimi quando si usa un valore k diverso (con p uguale)**
$$
n = -\frac{m}{k}\ln (1-p^{1/k})
$$


**In sintesi**

| Obiettivo                        | Dati noti | Formula                          |
| -------------------------------- | --------- | -------------------------------- |
| Dimensionare $m$                 | $n,p$     | $m = -\frac{n \ln p}{(\ln2)^2}$  |
| Scegliere $k$ ottimale           | $m,n$     | $k = \frac{m}{n}\ln2$            |
| Calcolare $k$ da target $p$      | $p$       | $k = -\frac{\ln p}{\ln 2}$       |
| Trovare $n$ massimo              | $m,p$     | $n = \frac{m(\ln 2)^2}{\ln p}$   |
| Stimare $n$ con $k$ non ottimale | $m,p,k$   | $n = -\frac{m}{k}\ln(1-p^{1/k})$ |
| Stimare $p$                      | $m,n,k$   | $p = (1-e^{-k\cdot n/m})^k$      |


---


#### RSA

**Cifratura**
$$
M^{e} \mod N
$$
**Decifratura**
$$
C^{d} \mod N
$$

