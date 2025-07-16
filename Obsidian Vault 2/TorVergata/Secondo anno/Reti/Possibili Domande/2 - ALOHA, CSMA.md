
#### Slotted ALOHA
E' uno dei più semplici algoritmi di accesso casuale ad un canale per trasmissioni multiple. 
- Tutti i frame hanno la stessa dimensione
- Il tempo è diviso in slot temporali uguali, pari al tempo di trasmissione di un frame
- I nodi cominciano la trasmissione solo all'inizio degli slot
- I nodi sono sincronizzati in modo tale che tutti sappiano quando iniziano gli slot
- Se due nodi trasmettono in contemporanea nello stesso slot, tutti i nodi rilevano l'evento prima del termine dello slot


Sia $p$ una probabilità, ovvero un numero tra 0 e 1. Allora le operazioni dei nodi in slotted ALOHA sono:
1) Quando un nodo ha un nuovo frame da spedire, attende fino all'inizio dello slot successivo e poi ritrasmette l'intero frame
2) Se non si verifica una collisione, l'operazione ha avuto successo, quindi non occorre effettuare una ritrasmissione e il nodo può predisporre l'invio di un nuovo frame
3) Se si verifica una collisione, il nodo la rileva prima della terminazione dello slot e ritrasmette con probabilità $p$ il suo frame durante gli slot successivi, fino a quando l'operazione non ha successo

#### ALOHA
La prima versione di slotted ALOHA fu ALOHA puro, che non faceva utilizzo degli slot ed era fortemente decentralizzato. Dunque appena arriva un frame il nodo lo trasmette immediatamente e integralmente nel canale broadcast. Se il frame va in collisione allora lo ritrasmette immediatamente con probabilità $p$.


#### CSMA: Carrier Sense Multiple Access
I protocolli CSMA e CSMA/CD si basano su 2 regole fondamentali:
1) Ascoltare prima di parlare, nel mondo delle reti questo prende il nome di rilevamento della portante (carrier sense), ovvero un nodo ascolta il canale prima di trasmettere. Se il canale sta già trasmettendo un frame allora si mette in attesa, altrimenti se il canale è libero inizia la trasmissione
2) Se qualcun'altro comincia a parlare insieme a voi, smettete di parlare, nel mondo delle reti questo prende il nome di rilevamento della collisione. Se un nodo osserva che un altro nodo sta trasmettendo un frame che interferisce col suo, arresta la propria trasmissione
