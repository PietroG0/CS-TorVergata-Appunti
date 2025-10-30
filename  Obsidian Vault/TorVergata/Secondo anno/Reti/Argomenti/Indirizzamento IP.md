- Indirizzo IP: identificatore a 32 bit associato a ciascuna interfaccia di host e router
- Interfaccia: connessione tra host/router e collegamento fisoco
	- i router hanno tipicamente interfacce 
	- gli host hanno tipicamente una o due interfacce

![[Pasted image 20240428165226.png| 600]]


#### Sottoreti (Subnet)
- Interfacce di dispositivi che possono raggiungersi fisicamente senza passare attraverso un router intermedio
- Gli indirizzi IP hanno una struttura:
	- parte della sottorete: i dispositivi della stessa sottorete hanno in comune i bit di ordine superiore
	- parte dell'host: i rimanenti bit di ordine inferiore

Procedura per definire le sottoreti:
- Si sgancino le interfacce da host e router in maniera tale da creare "isole" di reti isolate delimitate dalle interfacce
- Ognuna di queste reti isolate viene detta sottorete


#### Indirizzamento IP: CIDR
CIDR: Classless InterDomain Routing
- Parte della sottorete dell'indirizzo di lunghezza arbitraria
- Formato dell'indirizzo: a.b.c.d/x, dove x è il numero di bit della porzione di sottorete dell'indirizzo

![[Pasted image 20240428165448.png]]


#### Indirizzamento IP: classful addressing
- L'indirizzamento per classi è stato ormai abbandonato, in favore di CIDR
- CIDR ha diversi vantaggi:
	- più efficiente allocazione di blocchi di indirizzi
	- aggregazione di indirizzi con conseguente riduzione delle tabelle di instradamento


#### DHCP: Dynamic Host Configuration Protocol
L'host ottiene dinamicamente l'indirizzo IP dal server di rete quando si "unisce" alla rete
- può rinnovare la propria concessione per l'indirizzo in uso
- permette il riutilizzo degli indirizzi (mantiene l'indirizzo solo quando è collegato/acceso)
- supporto per gli utenti mobili che si uniscono/abbandonano la rete

Panoramica di DHCP
- L'host invia in broadcast un messaggio DHCP discover
- Il server DHCP risponde con un messaggio DHCP offer
- l'host richiede un indirizzo IP: messaggio DHCP request
- Il server DHCP invia un indirizzo IP: messaggio DHCP ack


#### DHCP: più degli indirizzi IP
Il DHCP può restituire più di un indirizzo IP assegnato alla sottorete:
- Indirizzo del router first-hop per il client
- Nome e indirizzo IP del server DNS
- Maschera di rete (che indica la porzione di rete rispetto a quella di host dell'indirizzo)


