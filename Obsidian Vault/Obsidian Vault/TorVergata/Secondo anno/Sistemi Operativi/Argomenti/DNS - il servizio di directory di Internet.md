
<span style="color:#0070c0">Host e Router di Internet</span>:
- indirizzo IP (32 Bit) - usato per indirizzare i datagrammi
- "nome" o hostname- usato dagli esseri umani

Mappare un indirizzo IP ad un nome
File hosts, associa un indirizzo IP a uno o più hostname, locale a un nodo, il suo contenuto non deve necessariamente coincidere con quello degli altri nodi

<span style="color:#0070c0">DNS: Domain Name System</span>
- Database distribuito implementato in una gerarchia di name server
- Protocollo a livello di applicazione che consente agli host, ai router e ai server DNS di comunicare per risolvere i nomi (traduzione nome/indirizzo)

<span style="color:#0070c0">Servizi e struttura del DNS</span>
- Traduzione degli hostname in indirizzi IP
- Host aliasing
	- nome canonico e alias
- Mail server aliasing
- Load distribution (distribuzione del carico di rete)
	- server Web replicati: più indirizzi IP corrispondono a un solo nome

<span style="color:#0070c0">DNS: un database distribuito e gerarchico</span>

![[Pasted image 20240324181632.png]]


<span style="color:#0070c0">DNS: root name server</span>
-  ufficiale, contatto di ultima istanza da parte dei name server che non sono in grado di risolvere il nome
- Funzione incredibilmente importante di Internet
- ICANN (Internet Corporation for Assigned Names and Numbers), gestisce il root DNS domain

<span style="color:#0070c0">Name server DNS locali</span>
- Quando l'host effettua una richiesta DNS, la query viene inviata al suo server DNS locale
- Il server DNS locale restituisce una risposta, rispondendo:
	- dalla sua cache locale di coppie nome --> indirizzo
	- inoltrando la richiesta alla gerarchia DNS per la risoluzione
- Ciascun ISP ha un proprio server DNS locale

<span style="color:#0070c0">DNS: Interrogazione iterativa e ricorsiva</span>
- Query iterativa
	- il server contattato risponde con il nome del server da contattare

- interrogazione ricorsiva
	- affida il compito di tradurre il nome al server contattato

<span style="color:#0070c0">Record DNS</span>
- DNS: database distribuito che memorizza 7 record di risorsa (RR)
	- Formato RR (name, value, type, ttl)

- type=A
	- name è l'hostname
	- value è l'indirizzo IP

- type=NS
	- name è il dominio
	- value è l'hostname dell'authorative name server per questo dominio

- type=CNAME
	- name è l'alias di qualche nome "canonico"
	- value è il nome canonico

- type=MX
	- value è il nome del server di posta associato a name

<span style="color:#0070c0">Messaggi DNS</span>
- domande e messaggi di risposta, entrambi con lo stesso formato:
	- Intestazione del messaggio
	- identificazione: numero di 16 bit per la domanda, la risposta alla domanda usa lo stesso numero
	- flag
		- domanda o risposta
		- richiesta di ricorsione
		- ricorsione disponibile
		- DNS server autoritativo

- [x] Architettura P2P (@2024-03-25)




