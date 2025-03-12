#Sicurezza 

#### Introduzione in cifrature pratiche: Stream, Block, Modi di operare

###### Cifrature Pratiche
*Due maggiori categorie*
- Cifrature *Stream*
	- Tradizionali (deboli): RC4
	- Moderne (forti): Salsa29, ChaCha20

- Cifrature *Block*
	- Tradizionali (deboli): DES, 3DES
	- Moderne (forti): AES

- In più le cifrature *Block* sono utilizzate in modalità *Stream*
	- AES-CTR


###### Cifrature Stream

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