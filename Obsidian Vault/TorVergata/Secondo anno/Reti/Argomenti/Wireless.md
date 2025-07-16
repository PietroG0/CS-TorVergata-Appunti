#### Caratteristiche dei collegamenti wireless: attenuazione
- Le radiazioni elettromagnetiche si attenuano quando attraversano determinati ostacoli
- Anche nello spazio libero l'intensità del segnale si attenua al crescere della distanza percorsa, per effetto della dispersione del segnale: Attenuazione di spazio libero

#### Propagazione su più cammini
Una parte del segnale si riflette su oggetti e sul terreno, giungendo a destinazione attraverso percorsi di lunghezza differente e quindi arrivando in momenti leggermente differenti

Tempo do coerenza
- Quantità di tempo in cui il bit è presente nel canale per essere ricevuto
- Influenza la massima velocità di trasmissione possibile, poichè i tempi di coerenza non possono sovrapporsi
- Inversamente proporzionale a
	- Frequenza
	- Velocità del ricevitore

#### Interferenze da parte di altre sorgenti
- Rapporto segnale-rumore
	- Un SNR più grande facilita il ricevente nell'estrazione del segnale trasmesso dal rumore di fondo
- Tasso di errore sui bit
	- Probabilità che un bit sia ricevuto in errore

Bilanciamento di SNR e BER
- Per un dato schema di modulazione: aumentare la potenza -> aumentare lo SRN -> diminuisce il BER
- Trasmissioni a potenza maggiore implicano un maggiore consumo di energia e possono andare a interferire con altre trasmissioni 
- Per un dato SNR, una tecnica di modulazione con più elevato tasso di trasmissione dei bit avrà un BER più alto
- Lo SNR può cambiare con la mobilità: adattare dinamicamente il livello fisico 

#### Architettura delle LAN 802.11
Gli host wireless comunicano con la stazione base
- Stazione base = punto di accesso, access point (AP)

Basic Service Set (BSS) in modalità infrastruttura contiene:
- Host wireless
- Punto di accesso (AP): stazione base
- Modalità ad hoc: solo host

#### Bluetooth
- Meno di 10m di diametro
- Sostituzione dei cavi
- Wireless Personal Area Network (WPAN) o piconet
- 2.4-2.5 GHz ISM radio band, fino a 3

- Fino a 8 dispositivi attivi: un master e dispositivi clinet
	- Il master stabilisce il "clock", decide la sequenza dei salti tra le frequenze, controlla la potenza di trasmissione, esegue il polling dei client

- Parked mode (fino a 255): i client possono "andare a dormire" e risvegliarsi successivamente (per preservare la batteria)
- Bootstrapping: i nodi si autoassemblano (plug and play) in una piconet
	- Neighbor discovery: il master invia (ripetutamente) messaggi inquiry in broadcast su ciascun canale di frequenza, cui i dispositivi rispondono dopo un ritardo casuale (per evitare collisioni)
	- Paging: il master manda a ciascun singolo dispositivo un invito: quando riceve ACK, il master invia al dispositivo del pattern per il frequency hopping, il clock e un indirizzo


#### Reti cellulari: 4G e 5G
Similarità con Internet cablato
- Distinzione periferia/nucleo, ma entrambi appartengono allo stesso carrier
- Rete cellulare globale: una rete di reti
- Uso diffuso di protocolli: HTTP, DNS, TCP, UDP, IP, NAT, separazione tra piano di controllo e piano di dati, SDN, Ethernet, tunneling
- Interconnessione a Internet cablato

Differenze con Internet cablato
- Differenti protocolli livello di collegamento wireless
- Mobilità come servizio di 1 classe
- Identità dell'utente (SIM Card)
- Modello di business: gli utenti si abbonano a un operatore di telefonia mobile
	- Forte nozione di "home network", contrapposta al roaming in una "visited network"
	- Accesso globale, con infrastruttura di autenticazione, e accordi tra operatori

![[Pasted image 20240603123909.png]]

Mobile Device:
- Smartphone, tablet, laptop, IoT, con radio 4G LTE
- International Mobile Subscriber Identity (IMSI) a 64 bit, memorizzato sulla SIM card

Base Station:
- Alla "periferia" della rete dell'operatore
- Gestisce le risorse radio, per i mobile device nella propria area di copertura
- Coordina l'autenticazione del dispositivo con altri elementi
- Simile all'AP WiFi ma:
	- Ruolo attivo nella mobilità degli utenti
	- Si coordina con quasi tutte le base station per ottimizzare l'uso della radio

Home Subscriber Service
- Memorizza informazioni sui mobile device per i quali la rete dell'HSS è la loro "home network"
- Lavora con l'MME per l'autenticazione dei dispositivi 

Serving Gateway (S-GW), PDN Gateway (P-GW)
- Situati lungo il percorsi dei dati tra internet e il mobile device
- P-GW
	- Gateway per la rete mobile cellulare 
	- Appare come qualunque altro router di Internet
	- Fornisce servizi NAT

Mobility Management Entity
- Autenticazione dei device coordinata con l'HSS della home netwrok HSS del dispositivo mobile
- Gestione dei dispositivi mobili:
	- Handover dei device tra celle
	- Tracking/Paging della posizione dei device 

- Setup del percorso (tunneling) dal mobile device e il P-GW

#### LTE: separazione del piano dei dati e di controllo

![[Pasted image 20240603124622.png]]

Piano di controllo
- Nuovi protocolli per la gestione della mobilità, la sicurezza e l'autenticazione 

![[Pasted image 20240603124710.png]]

Piano dei dati
- Nuovi protocolli a livello fisico e di collegamento
- Uso estensivo di tunnel per gestire la mobilità

#### Pila protocollare del piano dei dati LTE: first hop
Protocolli LTE a livello di collegamento:
- Packet Data Convergence: compressione degli headeer, cifratura
- Radio Link Control (RLC) Protocol: Frammentazione/Riassemblaggio, trasferimento dati affidabile
- Medium Access: Richiesta e uso di slot per la trasmissione radio

##### Packet Core
Tunneling:
- Datagrammi mobile incapsulati usando GPRS Tunneling Protocol (GTP), inviati dentro datagrammi UDP all'S-GW
- S-GW reinvia i datagrammi al P-GW tramite un altro tunnel 
- Supporta la mobilità: solo gli endpoint del tunnel cambiano quando l'utente mobile si sposta

![[Pasted image 20240603142615.png]]


#### Piano dei dati LTE: Associazione con una BS
![[Pasted image 20240603142656.png]]

1) BS invia in broadcast un segnale di sincronizzazione primario ogni 5 ms su tutte le frequenze
- BS di più carrier possono inviare in broadcast segnali di sincronizzazione

2) Il mobile node trova un segnale di sincronizzazione primario, quindi individua il secondo segnale di sincronizzazione su questa frequenza
- Il mobile node trova quindi le informazioni trasmesse della BS: larghezza di banda del canale, configurazioni, informazioni sul vettore cellulare della BS
- Il mobile node può ricevere informazioni da più stazioni di base, più reti cellulari

3) Il mobile node sceglie con quale BS associarsi (ad esempio, preferendo la rete dell'operatore d'origine)
4) Sono necessari altri passaggi per l'autenticazione, la creazione dello stato e la configurazione del piano dati


#### LTE: Sleep Modes

![[Pasted image 20240603143019.png]]

Come in WiFi, Bluetooth: i mobile node LTE possono mettere la radio a "dormire" per preservare la batteria:
- Light Sleep: dopo centinaia di millisecondi di inattività
	- Si sveglia periodicamente (centinaia di ms) per controllare le trasmissioni downstream

- Deep Sleep: dopo 5-10 secondi di inattività
	- La mobilità può cambiare le celle durante il sonno profondo: è necessario ristabilire l'associazione

#### Rete cellulare globale: Una rete di reti IP

![[Pasted image 20240603143244.png | 600]]

Home Network HSS:
- Informazioni sull'identificazione e sui servizi, mentre si è nella rete domestica e in roaming

All IP:
- Gli operatori si interconnettono tra di loro e con l'internet pubblico nei punti di scambio
- Legacy 2G, 3G: non tutto IP, gestito altrimenti

#### Passaggio al 5G: motivazione
- Obiettivo: incremento di 10x del bitrate di picco, riduzione di 10x della latenza, aumento di 100x della capacità di traffico rispetto al 4G
- 5G NR (new radio):
	- Due bande di frequenza: FR1 and FR2: frequenze delle onde millimetriche
	- Non è retrocompatibile con il 4G
	- MIMO: antenne multiple direzionali

- Frequenze delle onde millimetriche: velocità di trasmissione dei dati molto più elevate, ma su distanze più brevi
	- Pico-Cell: diametro = 10-100 m
	- Necessaria distribuzione massiccia e densa di nuove stazioni di base

