#Reti 

#### Introduzione
Tutti i dispositivi di rete vengono chiamati _nodi_. I canali di comunicazione che collegano nodi adiacenti prendono il nome di _collegamenti_ che possono essere cablati o wireless. Mentre il pacchetto dati prende il nome di _frame_ ed incapsula i datagrammi

Il livello di collegamento ha la responsabilità di trasferire i datagrammi da un nodo a quello fisicamente adiacente lungo un collegamento


#### Servizi offerti
- _Farming_: Incapsula i datagrammi del livello di rete all'interno di un frame a livello di collegamento, prima di trasmetterlo. I frame sono costituiti da un campo dati, nel quale è inserito un datagramma e vari campi di intestazione
- _Accesso al collegamento_: Un protocollo che controlla l'accesso al mezzo trasmissivo(MAC, Medium Access Control) specifica le regole con cui immettere i frame nel collegamento.
- _Consegna affidabile_: E' usata nei canali con alto tasso di errore, per esempio canali wireless
- _Rilevazione e correzione degli errori_: Gli errori sono causati da attenuazione del segnale e da rumore. Il nodo ricevente rileva gli errori

