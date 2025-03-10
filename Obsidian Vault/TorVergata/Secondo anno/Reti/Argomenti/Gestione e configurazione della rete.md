#### Cos'è la gestione della rete (Network Management)
- Sistema autonomo (noto altrimenti come "rete"): migliaia di componenti software e hardware che interagiscono tra loro

#### Componenti della gestione della rete
Server di gestione:
- Raccolta, elaborazione e analisi delle informazioni, invio di informazioni e comandi, in genere con i gestori della rete (umani) nel loop

Protocollo di gestione di rete:
- Utilizzato dal server di gestione per interrogare lo stato dei dispositivi e agire su di essi; utilizzato dai dispositivi per informare il server di gestione di dati ed eventi

Dispositivo di rete gestito:
- Apparecchiature con componenti hardware e software gestibili e configurabili

Dati:
- "stati" del dispositivo: dati di configurazione (assegnati dall'amministratore, come indirizzo IP), dati operativi (acquisiti dal dispositivo, come i vicini OSPF), statistiche

![[Pasted image 20240523164331.png]]


#### Approcci dell'operatore di rete per gestire la rete
CLI (Command Line Interface)
- L'operatore scrive comandi su una console del dispositivo o esegue script da remoto, per esempio, attraverso un ssh

SNMP/MIB
- L'operatore interroga/imposta i dati contenuti negli oggetti MIB (Management Information Base) utilizzando il Simple Network Management Protocol (SNMP)

NETCONF/YANG
- Più astratto, a livello di rete, olistico
- Enfasi sulla gestione della configurazione multidispositivo
- YANG: linguaggio di modellazione dei dati
- NETCONF: Comunicare azioni/dati compatibili con YANG a/da/tra dispositivi remoti

#### Protocollo SNMP
Due modi per trasmettere le informazioni MIB e comandi

![[Pasted image 20240523164643.png]]

##### Protocollo SNMP: tipi di messaggio

![[Pasted image 20240523164716.png]]

##### SNMP: Management Information Base (MIB)
- I dati operativi (e alcuni dati di configurazione) del dispositivo gestito
- Raccolti moduli MIB
	- 400 moduli MIB definiti da RFC; molti più moduli MIB specifici del fornitore

- Structure of Management Information (SMI): linguaggio di definizione dei dati 
- Esempio di variabili MIB per il protocollo UDP:

![[Pasted image 20240523164912.png]]

#### Panoramica di NETCONF
- Obiettivo: gestire/configurare in maniera attiva dispositivi sulla rete
- Opera tra il server di gestione e i dispositivi di rete gestiti
	- Azioni: retrieve, set, modify, activate configurations
	- Commit atomico di azioni su molteplici dispositivi
	- Interrogare i dati operativi e le statistiche
	- Sottoscrivere le notifiche dai dispositivi

- Paradigma a chiamata di procedura remota 
	- Messaggi del protocollo NETCONF codificati in XML
	- Scambiati attraverso un protocollo di trasporto affidabile e sicuro

#### NETCONF: Inizializzazione, scambio, chiusura

![[Pasted image 20240523165143.png]]

##### Operazioni NETCONF selezionate

![[Pasted image 20240523165212.png]]


#### YANG
- Linguaggio di modellazione dei dati utilizzato per specificare la struttura, la sintassi e la semantica dei dati di gestione della rete NETCONF
	- Tipi di dati incorporati, come SMI

- Documento XML che descrive il dispositivo; può essere generato dalla descrizione YANG
- Può esprimere vincoli tra i dati che devono essere soddisfatti da una configurazione NETCONF valida
	- Garantire che le configurazioni NETCONF soddisfino i vincoli di correttezza e di coerenza

