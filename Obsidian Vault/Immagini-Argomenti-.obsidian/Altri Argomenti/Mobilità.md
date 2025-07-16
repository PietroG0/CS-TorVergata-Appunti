Spettro della mobilità, dal punto di vista del livello di rete

![[Pasted image 20240603143803.png]]

#### Il problema della mobilità
Se un dispositivo si sposta da una rete all'altra:
- Come farà la "rete" a sapere che deve inoltrare i pacchetti alla nuova rete?

Approcci alla mobilità
- Lasciare che sia la rete (il router) a gestirla:
	- I router annunciano il nome, l'indirizzo IP permanente del nodo mobile in visita tramite lo scambio della tabella di routing
	- Quando un dispositivo mobile abbandona una visited network, questa ritira la rotta
	- Il routing di Internet potrebbe già farlo senza alcuna modifica. Le tabelle di routing indicano la posizione di ogni nodo mobile tramite la corrispondenza del prefisso più lungo
Non scalabile per miliardi di dispositivi

#### Mobility approaches
Lasciare che siano gli end-system a gestirla: funzionalità nella "periferia"
- Instradamento indiretto (indirect routing): la comunicazione dal corrispondente al dispositivo mobile attraverso la rete home, viene quindi inoltrata al dispositivo mobile nella rete visitata
- Instradamento diretto (direct routing): il corrispondente ottiene l'indirizzo del dispositivo mobile nella rete visitata, invia direttamente al dispositivo mobile


#### Rete domestica, rete visitata: 4G/5G

![[Pasted image 20240603144328.png | 600]]

Home Network:
- Piano di servizio (a pagamento) con un operatore di telefonia mobile
- L'HSS della rete domestica memorizza le informazioni circa l'identità e i servizi

Visited Network:
- Qualsiasi altra rete diversa dalla tua rete domestica
- Accordo di servizio con altre reti: per fornire l'accesso alla telefonia mobile in vista

##### ISP/WiFi

![[Pasted image 20240603144554.png | 600]]

Nessuna nozione di "casa"
- Credenziali dell'ISP (ad esempio, nome utente, password) memorizzate sul dispositivo o presso l'utente
- Gli ISP possono avere una presenza nazionale o internazionale
- Reti differenti: credenziali differenti
	- Alcune eccezioni (es. eduroam)
	- Esistono architetture (IP mobile) per la mobilità di tipo 4G, ma non sono utilizzate

![[Pasted image 20240603144829.png]]

![[Pasted image 20240603144853.png]]

- Instradamento triangolare:
	- Inefficiente se il corrispondente e il dispositivo mobile sono nella stessa rete

- Il dispositivo mobile si sposta tra reti visitate: trasparente al corrispondente
	- Si registra in una nuova rete visitata
	- La nuova rete visitata si registra presso l'HSS domestico
	- I datagrammi continuano a essere inoltrati dalla rete domestica al dispositivo mobile nella nuova rete

![[Pasted image 20240603145046.png]]

- Supera le inefficienze dell'instradamento triangolare
- Non trasparente al corrispondente: il corrispondente deve ottenere l'indirizzo car-of (nella rete visitata) dall'agente domestico
- Che succede se il dispositivo mobile cambia rete?
	- Può essere gestito, ma aggiunge complessità


![[Pasted image 20240603145353.png]]

- Il dispositivo mobile comunica con l'MME locale attraverso il canale del piano di controllo con la bS
- L'MME usa l'informazione sull'IMSI del dispositivo mobile per contattare l'HSS della home network del dispositivo
	- Recupera informazioni per l'autenticazione, la cifratura e di servizi di rete
	- L'HSS nella home network sa ora che il dispositivo mobile è residente nella visited network

- La BS e il dispositivo mobile selezionano i paramentri per il canale radio tra BS e dispositivo mobile nel piano di dati

![[Pasted image 20240603145809.png]]

![[Pasted image 20240603145938.png]]

4) La BS source smette di inviare datagrammi al cellulare, inoltra invece alla nuova BS (che inoltra al dispositivo mobile attraverso il canale radio)
5) La BS target informa l'MME che è la nuova BS per il dispositivo mobile
	- L'MME istruisce l'S-GW per cambiare l'estremità del tunnel alla (nuova) BS target
6) La BS target manda un ACK indietro alla BS source: handover completo, la BS source può rilasciare le risorse
7) I datagrammi del dispositivo mobile ora fluiscono attraverso il nuovo tunnel dal BS target all'S-GW

