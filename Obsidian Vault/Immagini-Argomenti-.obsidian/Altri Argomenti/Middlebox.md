"Qualsiasi box intermedio che svolge funzioni diverse da quelle normali e standard di un router IP sul percorso dei dati tra un host di origine e un host di destinazione"

- Inizialmente, soluzioni hardware proprietarie (chiuse)
- Passaggio a hardware "whitebox" che implementa API aperte
	- abbandonare le soluzioni hardware proprietarie
	- azioni locali programmabili attraverso match+action
	- orientarsi verso l'innovazione/differenziazione nel software

- SDN: disaccoppia piano di controllo da piano dei dati
- Network Functions Virtualization (NFV): astrae le funzioni di rete dall'hardware: le funzioni di rete sono programmate in software e eseguite su hardware COTS, sfruttando risorse di calcolo, storage e rete. Sono usate svariate tecniche e tecnologie per migliorare le prestazioni. Possono essere quindi anche eseguite in cloud. NFV è complementare a SDN


![[Pasted image 20240430132846.png| 600]]


#### Principi architetturali di Internet
Tre convinzioni fondamentali:
1) Connettività semplice (trasferimento di datagrammi tra host)
2) Protocollo IP: quella vita stretta
3) Intelligenza, complessità alla periferia della rete


#### L'argomento "end-to-end"
Alcune funzionalità possono essere implementate nel nucleo della rete o nella periferia della rete 

![[Pasted image 20240430133103.png]]

