Singolo dominio di broadcast:
- Scalabilità: tutto il traffico di broadcast di livello 2 deve attraversare l'intera LAN
- Problemi di efficienza, sicurezza, privacy

Problemi amministrativi:
- Un utente CS si sposta nell'ufficio EE - connesso fisicamente allo switch EE, ma vuole rimanere connesso logicamente allo switch CS

Virtual Local Area Network (VLAN)
Gli switch che supportano le funzionalità VLAN possono essere configurati per definire più LAN virtuali su un'unica infrastruttura LAN fisica

#### VLAN basate sulle porte
- Isolamento del traffico: i frame verso/da le porte 1-8 possono raggiungere soltanto le porte 1-8
	- Si possono definire anche VLAN basate sugli indirizzi MAC degli endpoing, piuttosto che sulle porte

- Appartenenza dinamica: le porte possono essere assegnate dinamicamente tra le VLAN
- Inoltro tra VLAN: fatto tramite un routing (esattamente come con switch separati)

Connettere tra di loro due porte appartenenti alla stessa VLAN:
- Questa soluzione non è scalabile: per connettere N VLAN definite su due switch fisici, dovremmo sacrificare N porte su ciascuno switch fisico

Porta trunk: trasporta frame tra VLAN definite su più switch fisici
- I frame inoltrati all'interno della VLAN tra gli switch non possono essere frame vanilla
- Il protocollo 802.1q aggiunge/rimuove campi di intestazione aggiuntivi per i frame inoltrati tra le porte trunk

