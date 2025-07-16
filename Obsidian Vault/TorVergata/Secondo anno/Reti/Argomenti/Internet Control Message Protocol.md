#### ICMP: Internet Control Message Protocol
- Utilizzato da host e router per comunicare informazioni a livello di rete
	- Segnalazione di errori: host, rete, porta, protocollo non raggiungibile
	- Richiesta/risposta Echo (usato da ping)

- Livello di rete "sopra" l'IP:
	- Messaggi ICMP trasportati nei datagrammi IP
	- Non viene considerato un protocollo di trasporto perchè non usato dalle applicazioni di rete per trasferire i propri messaggi

![[Pasted image 20240523163536.png]]

![[Pasted image 20240523163558.png]]


#### Traceroute e ICMP
- La sorgente invia serie di segmenti UDP alla destinazione (con un numero di porta "improbabile")
- Un datagramma nella n-esimo insieme arriva all'n-esimo router
	- Il router scarta il datagramma e invia il messaggio ICMP alla sorgente 
		- L'indirizzo IP del router si trova nel campo indirizzo sorgente dell'intestazione del datagramma che incapsula il messaggio ICMP

- Quando il messaggio ICMP arriva alla sorgente: registrare gli RTT

Criteri di arresto:
- Il segmento UDP arriva eventualmente a destinazione
	- La destinazione restituisce il messaggio ICMP "port unreachable"
- La sorgente si ferma

![[Pasted image 20240523163835.png]]

#### ICMP: Internet Control Message Protocol
- ICMPv6 per IPv6:
	- Nuovi tipi e codici
	- Ridefinizione di alcuni tipi e codici esistenti

