![[Pasted image 20240430131520.png]]

Ciascun router ha una tabella di inoltro (o tabella dei flussi)
- Astraazione "match plus action": cerca corrispondenze nei bit dei pacchetti in arrivo, agisce
	- inoltro basato sulla destinazione: inoltra in base all'indirizzo IP del destinatario
	- inoltro generalizzato:
		- più campi di intestazione possono determinare l'azione
		- più azioni possibili: scarta/copia/modifica/logga il pacchetto

![[Pasted image 20240430131806.png| 600]]


#### Tabella dei flussi
- Flusso: definito dai valori campi di intestazione
- Inoltro generalizzato: semplici regole per la gestione dei pacchetti
	- match: pattern sui valori dei campi di intestazione
	- actions: per il pacchetto in cui viene trovata una corrispondenza: scartare (drop), inoltrare (forward), modificare l'intestazione (modify), o inviare al controllore 
	- priorità: disambigua pattern sovrapposti 
	- contatori: numero di byte e numero di pacchetti, marca temporale ultimo aggiornamento


#### Astrazione in OpenFlow
Router
- match: prefisso IP di destinazione più lungo
- action: inoltro (forward) attraverso un collegamento

Switch
- match: indirizzo MAC di destinazione
- action: inoltra (forward) o inonda (flood)

Firewall
- match: indirizzi IP e numeri di porta TCP/UDP
- action: consentire (permit) o negare (deny)

NAT
- match: indirizzo IP e porta
- action: riscrive (rewrite) l'indirizzo e la porta

