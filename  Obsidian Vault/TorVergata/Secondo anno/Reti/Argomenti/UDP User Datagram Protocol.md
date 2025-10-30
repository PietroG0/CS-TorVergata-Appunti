- Protocollo di trasporto di Internet "senza fronzoli"
- Servizio di consegna "best effort", i segmenti UDP possono essere:
	- perduti
	- consegnati fuori sequenza all'applicazione
- Senza connessione
	- no handshaking tra mittente e destinatario UDP
	- ogni segmento UDP è gestito indipendentemente

Perche esiste UDP?
- Nessuna connessione stabilita (che potrebbe aggiungere ritardo)
- Semplice: nessuno stato di connessione nel mittente e nel destinatario (perciò un server può gestire più client)
- Intestazione di segmento corte
- Senza controllo della congestione
	- UDP può sparare dati a raffica
- Controllo più preciso a livello di applicazione su quali dati sono inviati e quando

Utilizzo di UDP
- Applicazioni per lo streaming multimediale
- DNS
- SNMP
- HTTP/3
- Trasferimento affidabile con UDP

![[Pasted image 20240403144147.png]]


![[Pasted image 20240403144213.png]]


### Riassunto
- Protocollo "senza fronzoli":
	- i segmenti possono essere persi, consegnati fuori sequenza
	- servizi best effort: "invia e spera per il meglio"
- UDP ha i propri vantaggi
	- nessun bisogno di setup/handshaking
	- può funzionare quando il servizio di rete è compromesso
	- aiuta con l'affidabilità (checksum)
- Costruire funzionalità aggiuntive su UDP nel livello di applicazione


