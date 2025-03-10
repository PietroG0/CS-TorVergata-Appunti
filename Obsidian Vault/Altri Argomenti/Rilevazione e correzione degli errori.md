#### Rilevazione degli errori
EDC: Error Detection and Correction
D: Dati protetti dal controllo d'errore, può includere i campi di intestazione 

![[Pasted image 20240523125246.png| 500]]

Il ricevente:
- Calcola la parità dei $d$ bit ricevuti
- Lo confronta con il bit di parità ricevuto - se differente, allora è stato rilevato un errore

Parità bidimensionale:
- Rileva tutte le combinazioni di al più 3 errori
- Rilevazione e correzione di errori singoli

![[Pasted image 20240523125436.png| 500]]


#### Controllo di parità
Adatto quando entrambe le seguenti condizioni sono vere:
- La probabilità di errori nei bit è bassa
- Gli errori sono indipendenti

Sotto queste ipotesi, la probabilità di errori multipli, che non sarebbero rilevati da un singolo bit di parità, è molto bassa

Nella realtà però, gli errori tendono a verificarsi in burst
- La probabilità che errori a burst non siano rilevati da un singolo bit di parità può avvicinarsi al 50%


#### Checksum Internet
Obiettivo: rilevare gli "errori" (bit alternati) nel segmento trasmesso

Mittente:
- Tratta il contenuto del segmento come una sequenza di interi a 16 bit
- Checksum: Complemento a 1 della somma della sequenza di interi a 16 bit
- Pone il valore del checksum nel campo checksum del segmento UDP

Ricevente:
- Calcola la somma in complemento a 1 allo stesso modo del mittente, incudendo però il checksum ricevuto
- Il risultato è costituito da tutti bit 1, si - Nessun errore rilevato, No - Errore rilevato
- Oppure, si esegue il complemento a 1 finale: si è calcolato il checksum di tutti i dati ricevuti e si verifica che sia formata da soli 0

#### Codici di controllo a ridondanza ciclica
- Codifica di rilevamento degli errori più potente
- D: dati da trasmettere
- G: sequenza di (r + 1) bit concordata, detta generatore 

![[Pasted image 20240523144054.png]]

Mittente: calcola r bit CRC, R, tali che <D,R> sia divisibile esattamente da G
- Il ricevente conosce G, divide <D,R> per G. Se il resto è diverso da zero: errore rilevato!
- Può rilevare tutti gli errori a burst di lunghezza inferiore a r+1 bit (ovvero, errori di non più di r bit consecutivi)
- La frazione di burst più lunghi che può rilevare è approssimativamente 1-2^^-r
- Largamente usato in pratica (Ethernet, 802.11 WiFi)




