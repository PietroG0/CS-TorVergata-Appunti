#Web 

#### Formattare il testo

**Font family**
Forniamo una lista di "typeface" da applicare al testo

```CSS
body { font-family: Arial;}
code { font-family: Courier, monospace;}
p { font-family: "Times New Roman", Times, serif;}
```

**Regole**
- Tutti i font cominciano con la lettera maiuscola, tranne i font generici
- Sono separati da virgole
- Se il loro nome contiene spazi vanno fra virgolette


**% e em**
Specifico il size rispetto al valore *ereditato*
- **%** la percentuale
- **em** la frazione

Esempio

```CSS
body { font-size:100%; } /* 16px */
h1 { font-size:150%; } /*150% of 16 = 24*/
p { font-size: 0.875em } /*0.875*16 = 14*/
ul { font-size: 1.2857142857em; } /*calcolo della frazione 18/14*/
```


#### Testo e colori

**Color**
- Viene ereditato dagli elementi
- Non influenza solo il testo

```CSS
h1 { color: grey; }
h1 { color: #666666; }
h1 { color: #666; }
h1 {color: rgb(102,102,102); }
```

**Text-align**
Allineamento orizzontale
Valori: left / right / center / iustifv

![[Pasted image 20250526150823.png#center ]]

