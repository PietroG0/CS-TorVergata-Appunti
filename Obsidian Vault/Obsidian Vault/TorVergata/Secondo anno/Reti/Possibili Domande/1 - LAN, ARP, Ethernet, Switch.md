
#### LAN
Local Area Network è una rete locale di dispositivi, per esempio la rete di casa, della scuola ecc..
La LAN sono sia Ethernet, quindi cablate e wireless.
A livello di rete abbiamo visto che ogni host possiede un indirizzo IP che sia a 32 o 128 bit. A livello di collegamento ciascun interfaccia possiede un indirizzo MAC. Quindi è il produttore stesso che si occupa di assegnare l'indirizzo MAC. Al livello di rete, quando si crea il datagramma IP viene aggiunto l'indirizzo IP del mittente e in particolare quello del destinatario. Quando si crea il frame viene aggiunto l'indirizzo MAC del mittente e del destinatario. Dunque come si passa da IP a MAC? Con ARP


#### ARP
Address Resolution Protocol è un protocollo a livello di collegamento che ha il compito di tradurre gli indirizzi IP in indirizzi MAC. Ogni nodo possiede al suo interno una tabella, ARP table in cui ogni recordo è la mappatura Indirizzo IP - MAC address e un campo TTL. Per popolare questa tabella ci pensa ARP


#### Ethernet 
Ethernet è il protocollo più utilizzato ad oggi all'interno delle LAN. Ci sono 3 tipologie di rete LAN Ethernet:
1) LAN a BUS: un cavo coassiale che passava per tutte le schede di rete. Se si tagliava il cavo tutta la rete si rompeva 
2) LAN a stella con HUB: Tutti gli host erano collegati mediante hub. L'hub è un dispositivo a livello fisico il quale rigenera il segnale in entrata di un'interfaccia e lo inoltra poi a tutte le interfacce tranne a quella da cui è entrato il segnale. 
3) LAN a stella con Switch: I nodi sono collegati ad uno switch, in questo caso lo switch ha il ruolo di gestire il traffico dei pacchetti inoltrandoli ai destinatari. Gli switch sono dispositivi di secondo livello che operano in modalità store and forward


#### Switch
Lo switch è un commutatore di pacchetti a livello. Ha il compito di inoltrare i frame in arrivo al giusto destinatario. Appllica una policy di store and forward filtrando i frame Ethernet in base al MAC. Gli switch sono dispositivi trasparenti, ovvero gli host sono inconsapevoli della loro presenza in quanto non possiedono un indirizzo MAC. Lo switch elimina la collisione tra nodi, tranne per le collisioni tra nodo e switch. Dunque nodi diversi possono dialogare senza collisioni dal punto di vista CSMA/CD