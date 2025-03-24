#Sicurezza 

## Symmetric Encryption

*Cosa vuol dire cryptare un dato*
- Trasformare di comprensibile in qualcosa di incomprensibile.
- La trasformazione deve essere *riversibile*

*Tecniche Simmetriche*
Chiave di cifratura usata per trasformare è identica alla chiave di cifratura per "tornare indietro"
Algoritmo di cifratura noto, a differenza della chiave di cifratura


#### Naive/Historical ciphers
*Caesar Cipher*
- La più semplice cifratura è la sostituzione: shift di $N$ lettere, per esempio con $N=3$ A-->D; B-->E; C-->F, ..., W-->Z; X-->A; Y-->B; Z-->C

*Substitution Cipher*
Con la Cifratura di Cesare esiste un problema: ci sono solamente 26 possibili permutazioni, includendo l'identità.
Con la Cifratura con sostituzione ci sono *Permutazioni Arbritarie* 

*Quante possibili "chiavi"?*
$26!$ = 403.291.461.126.605.635.584.000.000
Di conseguenza dovrebbe essere sicuro...


#### Parenthesis: measuring security
*Sicurezza n-bit*:
- Ci vogliono più o meno $2^n$ operazioni per la sicurezza

*Esempio*
- La sicurezza è violata dopo circa 1 miliardo di tentativi: Quanti bit di sicurezza?
	- Solamente 30 bits $\log_{2} [10^9] = 29.9$ 
- La sicurezza dei livelli è 54 bits (es. i sistemi 2G) Quanto tempo ci vorrebbe per utilizzare brute-force con 100M tentativi/s?
	- $\frac{2^{54}}{10^{8}[s]} = 1.8 \cdot 10^{8} [s] = 5.7$ anni
	- Ma se riuscissi a parallelizzare l'operazione con 1000 macchine/core cloud? Solamente 2 giorni

*Sicurezza di una cifratura? Di solito è correlato alla grandezza della key*
- 128 bit key sono più o meno 128 bit di sicurezza, il che è ok per oggi
- Ma nel mondo reale della cifratura non è *mai* ideale: a volte, attacchi più veloci della brute force esistono


#### Ciphertext-Only Attack
*COA*: L'attacco più debole 
- L'attaccante ha meno potere

*COA*: L'attaccante può solamente:
- Vedere il ciphertext
- Conoscere l'algoritmo (ovviamente non conosce la chiave)


#### IND-CPA: Indistinguishability under Chosen Plaintext Attack (Sicurezza Semantica)
- L'avversario non deve essere in grado di ricavare alcuna informazione su un testo in chiaro a partire dal suo *cifrato*, anche se ha accesso a un *oracolo di cifratura* (attacco *CPA*)

Esplicitamente formulato come segue:
- Un avversario, dato due testi in chiaro della stessa lunghezza e un *cifrato* che contiene un messaggio scelto casualmente tra i due, *non dovrebbe essere in grado di distinguere quale sia stato cifrato*.
- La *probabilità* di indovinare deve essere *uguale* a un lancio di moneta

*Conseguenza IND-CPA 1*: La cifratura *DEVE* essere randomizzata, lo stesso messaggio deve *sempre* cifrarsi in un *cifrato differente*. Inoltre, il cifrato deve essere *indistinguibile da una sequenza casuale* 

*Conseguenza IND-CPA 2*: Se una *sottostringa si ripete* deve cifrarsi in un cifrato differente


#### Random != Pseudo Random
- Pseudo Random Number Generator (*PRNG*): un algoritmo
	- es. RAND() in C
	- Può essere utile/inutie in 3 modi complementari
		- Proprietà statistiche dell'output
		- Prevedibilità
		- Periodicità

- Truly Random Number Generator (*TRNG*): La casualità "estratta" dai fenomemi fisici
	- Rumori Termici da Resistori
	- Rumori Atmosferici


#### Perfect Secrecy (Sicurezza Incondizionata)
- Bit di informazione con *XOR* = Random bit
- Lo XOR con qualsiasi stringa random "rimuove" ogni informazione o plaintext

![[Pasted image 20250311150901.png#center | 500]]


