#Sicurezza 

![[Pasted image 20250418143134.png#center | 600]]


#### Problemi con la crittografia asimmetrica

>[!danger] Problema
>Computazionalmente **facile** in una direzione, ma computazionalmente **difficile** nella direzione opposta
>
>**Diffie-Hellman**
>- Dato un numero primo di grandi dimensioni, $p, g, x$, computare $y=g^{x} mod p \rightarrow$ facile
>- Dato $y=g^{x} mod p$ computare $x = DLog_{g}(y) mod p \rightarrow$ difficile


#### Diffie-Hellman Key Agreement

>[!info] Definizione
>E' un protocollo che non trasmette i dati, ma permette di stabilire un segreto ambo i lati, senza avere un canale sicuro. 


#### Algoritmo RSA

>[!info] Definizione
>Si basa sul principio che la cifuratura è basata su un messaggio elevato modulo $N$, la decifratura è il ciphertext elevat a un'altro numero $d$ modulo $N$. Da cui cifratura e decifratura è la stessa operazione, cambia ovviamente il numero per cui esponenzio il mio dato. $e$ è chiamata **chiave pubblica**, $d$ è chiamata **chiave privata**. Tra $d$ ed $e$ c'è una relazione semplice se conosco i fattori del numero $N$ ($N = p \cdot q$), diventa impossibile se non si conoscono i fattori.
>

**Il principio dietro RSA**
- $m^{x}$ mod $n$ è una funzione periodica 
	- $3^{x}$ mod $10 = \{3,9,7,1,3,9,7,1,...\}$ 
	- $7^{x}$ mod $10 = \{7,9,3,1,7,9,3,1,...\}$ 
	- $9^{x}$ mod $10 = \{9,1,9,1,9,1,9,1, ... \}$ 

*Teorema di Eulero-Fermat*
- Sia $p$ un numero primo, $\Phi (n) = p-1$, per esempio, $p=7, \Phi(7)=6 \rightarrow 3^{6}$ mod $7 = 729$ mod $7=1$, quindi in sintesi, $x^{p-1} \mod p = 1$  $\forall x$  
- Se $p$ e $q$ sono primi, ed $N = p \cdot q$ allora $\Phi(p \cdot q) = \Phi(p) \cdot \Phi(q) = (p-1)(q-1)$, per esempio $N = 10, \Phi(10)=4 \rightarrow 3^{4}\mod 10 = 81\mod 10 = 1$ 
- Se $p^{k} \rightarrow \Phi(p^{k}) = \Phi(p)\cdot p^{k-1} = (p-1)p^{k-1}$ 

**Costruzione di RSA**
- Generare due numeri primi **enormi** $p, q$ (devono rimanere segreti)
- Computare il modulo RSA: $N = p\cdot q$ (può rimanere pubblico)
- Computare $\Phi(N)=(p-1)(q-1)$ (deve rimanere segreto)
- Generare la chiave pubblica $1<e<\Phi(N)$ 
- Generare la chiave privata $d$ tale che $e \cdot d = 1 \mod \Phi(N)$ 

**Sicurezza di RSA**
- Dato $N$, deve essere difficile trovare i fattori $p,q$
- Difficile da trovare anche $\Phi(N)$
- Senza sapere $\Phi(N)$ deve essere difficile computare $d$ da $e$

![[Pasted image 20250423171715.png#center | 550]]

