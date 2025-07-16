- Motivazione iniziale: lo spazio degli indirizzi IPv4 a 32 bit sarebbe stato completamente allocato
- Motivazioni aggiuntive: 
	- velocità di elaborazione/inoltro: intestazione ccon una lunghezza fissa di 40 byte
	- consentire un diverso trattamento dei "flussi" a livello di rete

#### Formato del datagramma IPv6

![[Pasted image 20240430131115.png]]

Cosa manca rispetto ad IPv4:
- no checksum (per velocizzare l'elaborazione presso i router)
- no frammentazione/riassemblaggio
- no opzioni (disponibile come "intestazione successiva" del protocollo di livello superiore)


#### Transizione da IPv4 a IPv6
- Non tutti i router possono essere aggiornati contemporaneamente 
	- no "flag day" (ovvero una "giornata campale" in cui tutte le macchine sono spente e aggiornate a IPv6)

- Tunneling: datagramma IPv6 trasportato come patload in un datagramma IPv4 tra i router IPv4 
- Tunneling utilizzato ampiamente in altri contesti (4G/5G)

![[Pasted image 20240430131324.png| 600]]



