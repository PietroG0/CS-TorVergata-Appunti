- Lo switch è un dispositivo a livello di collegamento: ha un ruolo attivo
	- Memorizza e inoltra frame Ethernet
	- Esamina l'indirizzo MAC di destinazione del frame in arrivo, inoltra selettivamente il frame in uno o più collegamenti di uscita quando il frame deve essere inoltrato in un segmento, usa CSMA/CD per accedere al segmento

- Trasparente: Gli host sono inconsapevoli della presenza degli switch
- Collegamenti eterogenei: i collegamenti possono operare a velocità diverse e usare mezzi trasmissivi diversi; utile per evolvere la rete in maniera incrementale
- Plug-and-Play, autoapprendimento
	- Non è necessario configurare gli switch

#### Switch: Molteplici trasmissioni simultanee
- Gli host hanno connessioni delicate, dirette con lo switch
- Lo switch "bufferizza" i pacchetti
- Il protocollo Ethernet è utilizzato su ciascun collegamento, così:
	- Full-Duplex: una singola coppia di nodi alle estremità del collegamento che possono trasmettere simultaneamente senza collisioni, no CSMA/CD
	- Half-Duplex: il songolo collegamento half duplex è un dominio di collisione a sè

- Switching: A-to-A' e B-to-B' possono trasmettere simultaneamente senza collisioni


#### Switch: autoapprendimento
- Uno switch impara quali nodi possono essere raggiunti attraverso quale interfaccia
	- Quando un frame viene ricevuto, lo switch "impara" la posizione del mittente: Segmento LAN in ingresso
	- Registra la coppia mittente/posizione nella tabella di commutazione

![[Pasted image 20240524124404.png | 500]]

#### Switch: filtraggio e inoltro dei frame
Quando uno switch riceve un frame:
1) Registra il collegamento in ingresso e l'indirizzo MAC dell'host mittente
2) Indicizza la tabella degli switch utilizzando l'indirizzo MAC di destinazione
3) Se viene trovata una voce per la destinazione
	allora {
		se la destinazione è sul segmento dal quale è arrivato il frame allora
		scarta il frame
		altrimenti inoltra il frame sull'interfaccia indicata dalla voce
		}
		altrimenti flood /* Inoltra su tutte le interfacce eccetto quella di arrivo; in altre parole, manda il frame in broadcast (ma non cambia l'indirizzo MAC di destinazione)

#### Switch e router a confronto
Entrambi lavorano in store-and-forward:
- Router: dispositivi a livello di rete (esaminano l'intestazione a livello di rete)
- Switch: Dispositivi a livello di collegamento (esaminano l'intestazione a livello di collegamento)

Entrambi hanno tabelle di inoltro:
- Router: Calcolano le tabelle usando algoritmi di instradamento, indirizzi IP
- Switch: Autoapprendimento della tabella di inoltro usando il flooding, indirizzi MAC

Topologia della rete:
- Router: gli algoritmi di instradamento possono trovare percorsi ottimali (senza cicli) nonostante cicli nella topologia della rete; Inoltre, il decremento del TTL farebbe scartare i pacchetti incastrati in potenziali instradamenti ciclici
- Switch: gli switch devono essere interconnessi a albero, per evitare che il traffico broadcast resti in circolazione potenzialmente per sempre

Numero di nodi
- Router: instradamento gerarchico, aggregazione degli indirizzi, ecc..
- Switch: Tabelle ARP molto grandi nei nodi, ingente traffico ARP, frame broadcast, ecc..

Isolamento del traffico
- Gli switch inviano in broadcast i frame il cui indirizzo MAC di destinazione è sconosciuto, con un effetto a valanga in prensenza di molteplici switch interconnessi. I frame broadcast sono inoltrati a tutti i nodi della rete
- I router inoltrano i pacchetti in accordo a percorsi determinati dalla funzione di instradamento


