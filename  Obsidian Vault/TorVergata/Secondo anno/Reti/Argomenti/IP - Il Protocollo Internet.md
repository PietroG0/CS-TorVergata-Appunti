#### Livello di rete: Internet

![[Pasted image 20240428164405.png]]


#### Formato dei Datagrammi IP

![[Pasted image 20240428164444.png]]


#### Frammentazione dei datagrammi IP

- L'untià massima di trasmissione (MTU) è la massima quantità di dati che un frame a livello di collegamento può trasportare
	- Differenti tipi di collegamento, differenti MTU

- Datagrammi IP grandi vengono suddivisi ("frammentati") in datagammi IP più piccoli
	- un datagramma viene frammentato
	- i frammenti saranno "riassemblati" solo una volta raggiunta la destinazione
	- i bit dell'intestazione IP sono usati per identificare e ordinare i frammenti 


#### Frammentazione e riassemblaggio IP

![[Pasted image 20240428164750.png]]

- Deprecato, rimosso in IPv6
- Path MTU Discovery
	- invio di pacchetti con bit (DF) Don't Fragment impostato a 1
	- se il router non può inoltrare il datagramma perchè eccede la MTU, scarta il pacchetto e invia al mittente un messaggio ICMP "Destination Unreachable: Fragmentation Required"

Il problema è che questi messaggi ICMP possono essere bloccati (per motivi di sicurezza): in questi casi, per esempio, un mittente TCP rischia addirittura di ritrasmettere inutilmente il pacchetto più volte! Inoltre, il percorso e quindi la MTU possono cambiare!
Sono stati proposti approcci alternativi più robusti.
Tra le alternative: manipolazione di segmenti SYN in fase di instaurazione di una connessione TCP, cambiando l'opzione relativa al MSS


[[Indirizzamento IP]]
