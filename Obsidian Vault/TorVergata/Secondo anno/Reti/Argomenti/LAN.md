Local Area Network (LAN)
Copre un'area limitata come un'abitazione, una scuola, un ufficio o un edificio

Due tecnologie principali:
- Ethernet 
- WiFi

#### Indirizzi MAC
Indirizzi IP a 32 bit:
- Indirizzi a livello di rete per le interfacce
- Usati per l'inoltro a livello 3

Indirizzi MAC (o LAN o fisici o Ethernet):
- Funzione: utilizzati "localmente" per portare i frame da un'interfaccia a un'altra interfaccia fisicamente connessa 
- Indirizzo MAC a 48 bit memorizzato nella ROM della NIC, a volte impostabile via software

Ciascuna interfaccia in una LAN
- Ha un indirizzo MAC univoco
- Ha un indirizzo IP univoco

![[Pasted image 20240524122409.png | 600]]

- Allocazione degli indirizzi MAC gestita dall'IEEE
- I produttori (di schede di rete) comprano porzioni dello spazio degli indirizzi MAC (per assicurare l'unicità)
- Indirizzo MAC (piatto): portabilità
	- E' possibile spostare un'interfaccia da una LAN a un'altra
	- Indirizzo IP non portabile: dipende dalla sottorete IP alla quale il nodo è connesso

#### Protocollo per la risoluzione degli indirizzi (Address Resolution Protocol, ARP)
Tabella ARP: ogni nodo IP sulla LAN ha una tabella
- Corrispondenza tra indirizzi IP e MAC per alcuni nodi sulla LAN
- TTL (Time To Live): tempo dopo il quale la mappatura degli indirizzi sarà dimenticata


#### ARP Spoofing o ARP Poisoning
- Un attaccante invia in una LAN risposte ARP contraffatte, inducendo l'associazione di un indirizzo IP a un certo indirizzo MAC
- Il protocollo ARP è senza stato e un nodo aggiorna la propria ARP appena viene ricevuta una risposta ARP



