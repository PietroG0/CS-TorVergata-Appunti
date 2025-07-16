1) Cosa si intende per gestione della rete?
2) Quali sono i principali componenti coinvolti?
3) Quali sono i principali approcci alla gestione della rete
4) Descrivere il protocollo SNMP

Risposte
1) La gestione della rete comprende il funzionamento, l’integrazione e il coordinamento di hardware, software e personale tecnico per monitorare, verificare, configurare, analizzare, valutare e controllare le risorse della rete affinché soddisfino le funzionalità in tempo reale e i requisiti di qualità del servizio a un costo accettabile
2) - Server di gestione: Raccolta, elaborazione e analisi delle informazioni, invio di informazioni e comandi, in genere con i gestori della rete nel loop. - Protocollo di gestione della rete: utilizzato dal server di gestione per interrogare lo stato dei dispositivi e agire su essi; utilizzato dai dispositivi per informare il server di gestione di dati ed eventi. - Dispositivo di rete gestito: apparecchiature con componenti hardware e software gestibili e configurabili. - Dati: "stati" del dispositivo, dati di configurazione, dati operativi, statistiche
3) CLI, L'operatore scrive comandi su una console del dispositivo o esegue script da remoti, attraverso un ssh. SNMP/MIB L'operatore interroga/imposta i dati contenuti negli oggetti MIB utilizzando il Simple Network Management Protocol (SNMP). NETCONF/YANG, più astratto, enfasi sulla gestione della configurazione multidispositivo, YANG è un linguaggio di modellazione dei dati, NETCONF comunica azioni/dati compatibili con YANG a/da/tra dispositivi remoti
4) In questo approccio l'operatore può interrogare/impostare i dati contenuti negli oggetti MIB di un dispositivo utilizzando il protocollo SNMP. Un operatore di rete userebbe più tipicamente questo approccio per interrogare e monitorare lo stato delle operazioni e le statistiche del dispositivo, e userebbe le CLI per controllare/configurare attivamente il dispositivo. È importante notare che entrambi gli approcci gestiscono i dispositivi individualmente. La più comune modalità di utilizzo di SNMP è detta richiesta-risposta: un’entità di gestione SNMP invia una richiesta a un agente SNMP che, a seguito di questa, compie azioni e invia una risposta. Di solito queste istanze sono utilizzate per la lettura/scrittura di un parametro di un oggetto MIB associato a un dispositivo. Un altro tipico utilizzo di SNMP si verifica quando un agente, senza che gli sia pervenuta alcuna richiesta, invia un messaggio non sollecitato, detto messaggio trap, al server di gestione, in cui segnala il verificarsi di una situazione eccezionale che ha prodotto una variazione dei valori degli oggetti MIB.



Compito 1
1) Cosa si intende per congestione
2) Quali sono i sintomi della congestione
3) Che relazione c'è con il controllo del flusso
4) Quali sono i principali approcci al controllo della congestione
5) Qual'è l'implementazione del controllo della congestione in TCP


Risposte
1) Troppe sorgenti inviano troppi dati troppo velocemente perchè la rete li gestisca. 
2) I sintomi sono: lunghi ritardi, quindi accodamento nei buffer dei router, e pacchetti persi, overflow nei buffer dei router
3) Entrambi mirano a ottimizzare il flusso di dati tra mittente e ricevente, ma lo fanno a livelli diversi. Il controllo del flusso si concentra sulla capacità del ricevente, mentre il controllo della congestione si concentra sulla capacità della rete. Questi due meccanismi operano insieme per garantire una trasmissione efficiente e affidabile. Se il ricevente segnala una finestra di ricezione ridotta (controllo del flusso), il mittente deve adattarsi riducendo la velocità di trasmissione, indipendentemente dallo stato della congestione della rete. Al contempo, se la rete è congestionata, il mittente deve ridurre la velocità di trasmissione, indipendentemente dalla capacità di ricezione del ricevente.
4) Controllo della congestione end-to-end, nessun supporto esplicito dalla rete, la congestione è dedotta osservando le perdite e i ritardi nei sistemi terminali, metodo adottato da TCP. Controllo della congestione assistito dalla rete: I router forniscono un feedback diretto all'host tramite un chokepacket che lo avvisa dello stato della congestione. Oppure, un router può marcare i pacchetti che lo attraversano in modo tale che il destinatario alla sua ricezione informi il mittente. Possono indicare il livello di congestione o impostare esplicitamente un tasso di invio
5) Controllo di flusso: Il destinatario controlla il mittente, cosicchè il mittente non ecceda il buffer del destinatario, inviando troppo e troppo velocemente. Il mittente comunica lo spazio disponibile nel buffer nel campo rwnd nell'intestazione TCP. RcvBuffer, dimensione impostata attraverso opzioni della socket. Molti sistemi operativi regolano automaticamente RcvBuffer