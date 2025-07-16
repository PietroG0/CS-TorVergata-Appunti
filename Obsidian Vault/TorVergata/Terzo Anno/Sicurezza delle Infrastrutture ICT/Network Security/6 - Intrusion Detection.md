#Sicurezza 

#### Il Comportamento dell'Intrusore e il Ciclo dell'Attacco
Un aspetto importante è il comportamento dell'intrusore. Gli attacchi seguono in genere un ciclo ben definito, diviso in più fasi:
- **Target acquisition e information gathering**: L'attaccante raccoglie informazioni sulla struttura aziendale, sui sistemi in uso, sui servizi disponibili e perfino sul personale, sfruttando strumenti come i DNS lookup, WHOIS e scanner di rete
- **Initial access**: Una volta individuato un potenziale punto debole, come una CMS vulnerabile o una falla nel sistema interno, l'attaccante tenta di ottenere l'accesso, anche attraverso attacchi di brute-force o spear-phishing
- **Privilege escalation**: Dopo aver ottenuto un primo accesso, si cerca di ottenere privilegi superiori sfruttando ulteriori vulnerabilità, mettendo a rischio l'intero sistema
- **Information gathering/system exploit**: Con i privilegi acquisiti, l'attaccante esplora ulteriormente il sistema, raccogliendo informazioni sensibili o trasferendo dati in modo clandestino
- **Maintaining access**: Per operare in modo continuativo, l'intruso installa tool di controllo remoto o rootkit che gli permettono di accedere in futuro al sistema
- **Covering tracks**: Infine, per evitare di essere scoperto, l'attaccante modifica o cancella log e tracce di attività malevole


#### Sistemi di Intrusion Detection: HIDS, NIDS e Sistemi Distribuiti
Esistono fondamentalmente due approcci:
1. **Host-Based IDS (HIDS)**: Questi sistemi sono installati direttamente sui singoli host o dispositivi e monitorano le attività locali, come i file di log, le chiamate di sistema, controlli di integrità dei file e accessi al registro di sistema. Il vantaggio principale di un HIDS è la capacità di rilevare attacchi interni o attività sospette che non transitano attraverso la rete
2. **Network-Based IDS (NIDS)**: Questi sistemi monitorano il traffico di rete, esaminando pacchetto per pacchetto attività sospette nelle comunicazioni che avvengono tra dispositivi. Possono essere implementati in **modalità inline** (dove il traffico passa direttamente attraverso il sensore, permettendo anche l'intervento in forma di intrusion prevention) o in **modalità passiva** (dove il sensore analizza una copia del traffico senza intervenire direttamente sulla comunicazione)
3. **Sistemi distribuiti o ibridi**: Una combinazione dei due approcci sopra citati, in cui informazioni provenienti da più sensori e host vengono centralizzate in un sistema di analisi globale, in grado di fornire una visione più completa e contestualizzata degli eventi di sicurezza. Questi sistemi tipicamente si articolano in tre componenti logiche: **i sensori** (che raccolgono dati), **gli analyzer** (che processano e interpretano i dati) e **l'interfaccia utente** (per visualizzare all'operatore le eventuali anomalie e gestire le risposte)


#### Approcci di Analisi: Anomaly Detection e Signature/Heuristic Detection
- **Anomaly Detection**: Questo approccio si basa sul confronto tra il comportamento osservato e quello che ci si aspetta da un utente o sistema legittimo. Si utilizzano metodi statistici, basati sulla conoscenza esperta, o tecniche di machine learning per definire modelli di traffico e comportamenti "normali". Ogni deviazione significativo da questi modelli può essere considerata un potenziale attacco. Il concetto di **Base-Rate Fallacy** è particolarmente rilevante: se il numero di intrusioni effettive è molto basso rispetto al volume di attività legittime, anche una percentuale bassa di falsi positivi può tradursi in un elevato numero assoluto di allarmi, generando problemi nel processo decisionale
- **Signature o Heuristic Detection**: Questo approccio, noto anche come misure detection, si basa su una raccolta di pattern di attacco conosciuti. Attraverso regole predefinite, il sistema confronta il traffico o l'attività in esame con questi pattern, generando un allarme nel caso di corrispondenza. Sebbene sia molto efficace per identificare attacchi già noti, questo metodo non è utile contro gli attacchi nuovi o modificati, per i quali non esistono ancora una "firma" riconosciuta


#### Fonti dei Dati e Sensori
Per funzionare correttamente, un IDS necessita di fonti di dati affidabili. Tra le principali sorgenti troviamo:
- **Chiamate di sistema (System Calls)**: Ad esempio, su sistemi Linux vengono monitorate centinaia di chiamate di sistema, che possono fornire informazioni preziose sui processi in esecuzione
- **FIle di audit e log**: Contengono registrazioni degli eventi di sicurezza e possono essere analizzati per scoprire anomalie
- **Checksum di integrità dei file e accessi al registro di sistema**: Utili per verificare se sono state apportate modifiche non autorizzate

Inoltre, nelle architetture distribuite, vengono impiegati sensori posizionati strategicamente (ad esempio in corrispondenza di switch, router o firewall) e collegati a moduli centrali di gestione che aggregano i dati per un'analisi globale


#### Honeypots e Scambio di Informazioni sugli Attacchi
Un'altra strategia discussa è l'uso dei **honeypots**: sistemi appositamente configurati come trappole per gli attaccanti. Questi sistemi non contengono dati reali e operano come esche, attirando gli intrusori e permettendo agli amministratori di osservare le loro tecniche e raccogliere informazioni preziose per aggiornare le proprie difese.

Il tema dello **scambio di informazioni** è affrontato anche dal punto di vista degli standard, citando il lavoro del gruppo IETF Intrusion Detection Working Group. Sono stati definiti formati di messaggio e protocolli (ad esempio, IDMEF e IDXP) che facilitano lo scambio di alert e informazioni tra sistemi IDS di diverse organizzazioni, migliorando così la risposta collettiva alle minacce


#### Snort: Un esempio pratico di NIDS
**Snort** è un sistema di intrusion detection open source molto diffuso. Viene illustrata l'architettura di Snort, che comprende:
- La capacità di analizzare pacchetti in tempo reale e di generare alert quando viene individuata una regola corrispondente a un attacco noto
- La struttura delle regole di Snort, che si dividono in una parte di header (che definisce ad esempio l'azione da intraprendere, il protocollo, gli indirizzi IP e le porte) e una parte di opzioni (che specifica ulteriormente dettagli come il contenuto da cercare, il controllo di profondità, offset, ignoranza della differenza tra maiuscole e minuscole, flag TCP, e così via)

Le differenti **azioni** previste dalle regole (alert, log, drop, reject) permettono al sistema di reagire in modo appropriato in base alla natura dell'attacco identificato


