Congestione:
- Informalmente: "troppe sorgenti inviano troppi dati troppo velocemente perchè la rete li gestisca"
- Sintomi:
	- lunghi ritardi (accodamento nei buffer dei router)
	- pacchetti persi (overflow nei buffer dei router)
- Tra i dieci problemi più importanti del networking

#### Cause/costi della congestione: scenario 1
Caso più semplice:
- Un router con buffer illimitati
- Capacità dei collegamenti di ingresso e uscita: R
- Due flussi
- Nessuna ritrasmissione

![[Pasted image 20240408112636.png|500]]


#### Cause/costi della congestione: scenario 2
- Un router, buffer infiniti
- Il mittente ritrasmette pacchetti perduti (scartati perchè il buffer era pieno)
	- input del livello di Ain
	- input del livello di trasporto include le ritrasmissioni: A'in >= Ain, (A'in detto anche carico offerto alla rete)

![[Pasted image 20240408112846.png|500]]

Idelizzazione: conoscenza perfetta
- Il mittente invia solo quando c'è spazio disponibile nei buffer del router

![[Pasted image 20240408113050.png|300]]


Idealizzazione: un pò di conoscenza perfetta
- I pacchetti possono essere persi (scartati nel router) a causa di buffer pieni
- Il mittente sa quando un pacchetto è stato scartato: ritrasmette un pacchetto solo se sa che è stato perso

![[Pasted image 20240408113136.png|300]]


Scenario realistico: duplicati non necessari
- I pacchetti possono essere persi, scartati dal router a causa dei buffer pieni, richiedendo ritrasmissioni
- Ma il mittente può andare in timeout prematuramente, inviando due copie, che vengono entrambe consegnate 

![[Pasted image 20240408113315.png|400]]

"Costi" della congestione:
- Più lavoro (ritrasmissioni) per un dato throughput di ricezione
- Ritrasmissioni non necessarie: il collegamento trasporta più copie del pacchetto
	- diminuzione del throughput massimo raggiungibile


#### Cause/costi della congestione: scenario 3
- Quattro mittenti
- Percorsi multi-hop
- timeout/ritrasmissione

![[Pasted image 20240408113747.png|600]]

Un altro "costo" della congestione:
- Quando il pacchetto viene scartato, la capacità trasmissiva utilizzata sui collegamenti di upstream per instradare il pacchetto risulta sprecata


#### Cause/costi della congestione: intuizioni

![[Pasted image 20240408113921.png]]


#### Approcci al controllo della congestione
Controllo della congestione end-to-end
- Nessun supporto esplicito dalla rete
- La congestione è dedotta osservando le perdite e i ritardi nei sistemi terminali
- Metodo adottato da TCP

Controllo della congestione assistito dalla rete:
- I router forniscono un feedback diretto all'host tramite un chokepacket che lo avvisa dello stato di congestione
- Oppure, un router può marcare i pacchetti che lo attraversano in modo tale che il destinatario alla sua ricezione informi il mittente
- Possono indicare il livello di congestione o impostare esplicitamente un tasso di invio
- Protocolli TCP ECN, ATM, DECbit

![[Pasted image 20240408114212.png|400]]





