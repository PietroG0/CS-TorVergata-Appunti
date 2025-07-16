#Software 

> [!important]
> Processo software: Serie di attività necessarie alla realizzazione del prodotto SW nei tempi, con i costi e con le desiderate caratteristiche di qualità. Nel suo contesto:
> 1. Si applicano metodi, tecniche e strumenti
> 2. Si creano prodotti (sia intermedi che finali)
> 3. Si stabilisce il controllo gestionale del progetto
> 4. Si garantisce la qualità 
> 5. Si governano le modifiche


#### Fasi del processo
Un processo software segue un *ciclo di vita* che si articola in 3 stadi:
- Sviluppo
- Manutenzione
- Dismissione. Nel primo stadio si possono riconoscere due tipi di fasi:

1) La fase di tipo *Definizione*, in cui si occupa di "cosa" il software deve fornire. Si definiscono i requisiti e si producono le specifiche
2) La fase di tipo *Produzione*, in cui si definisce "come" realizzare quanto ottenuto con le fasi di Definizione. Si progetta il software, si codifica, si integra e si rilascia al cliente. Lo stadio di Manutenzione è a supporto del software realizzato e prevede fasi di definizione e/o produzione al suo interno

Durante ogni fase si procede ed effettuare il *testing* di quanto prodotto, mediante opportune tecniche di verifica e validazione applicate sia ai prodotti intermedi che al prodotto finale

#### Tipi di Manutenzione
- *Manutenzione correttiva*, che ha lo scopo di eliminare i difetti (Fault) che producono guasti (failure) del software
- *Manutenzione adattativa*, che ha lo scopo di adattare il software ed eventuali cambiamenti a cui è sottoposto l'ambiente operativo per cui è stato sviluppato
- *Manutenzione perfettiva*, che ha lo scopo di estendere il software per accomodare funzionalità aggiuntive
- *Manutenzione preventiva* (o Software reengineering), che consiste nell'effettuare modifiche che rendano più semplici le correzioni, gli adattamenti e le migliorie

#### Definizione di ciclo di vita

> [!important]
> IEEE Std 610-12 (Terminologia ISW)
> - Intervallo di tempo che intercorre tra l'istante in cui nasce l'esigenza di costruire un prodotto software e l'istante in cui il prodotto viene dismesso. Include le fasi di definizione dei requisiti, specifica, pianificazione, progetto preliminare, progetto dettagliato, codifica, integrazione, testing, uso, manutenzione e dismissione
> - Nota: tali fasi possono sovrapporsi o essere eseguite in modo iterativo


#### Modello di ciclo di vita
- Il *modello di ciclo di vita* del software specifica la serie di fasi attraverso cui il prodotto software progredisce e l'ordine con cui vanno eseguite, dalla definizione dei requisiti alla dismissione
- La scelta del modello dipende dalla natura dell'applicazione, dalla maturità dell'organizzazione, da metodi e tecnologie usate e da eventuali vincoli dettati dal cliente
- L'assenza di un modello del ciclo di vita corrisponde ad una modalità di sviluppo detta *build & fix* (o fix later), in quale il prodotto software viene sviluppato e successivamente rilavorato fino a soddisfare le necessità del cliente

![[Pasted image 20241014125011.png | 500]]


#### Modello Waterfall

![[Pasted image 20241015160141.png | 500]]


#### Verification & Validation (V&V) nel Waterfall

![[Pasted image 20241015160241.png | 500]]



[[Software Prototyping]]


#### Programmazione visiva
- Script languages come Visual Basic supporta la programmazione visiva dove il prototipo è sviluppato creando una interfaccia user da oggetti standard e componenti associate con questi oggetti
- Esiste una vasta libreria di componenti per supportare questo tipo di sviluppo
- Potrebbero essere su misura per i requisiti delle applicazioni 


![[Pasted image 20241015163755.png]]


#### Problemi con la programmazione visiva
- Difficile da coordinare il team di sviluppo
- Non c'è una specifica architettura software
- Dipendenze complesse tra le parti del programma potrebbero causare un problema nel mantenimento 


#### Iterazione del processo
- I requisiti evolvono sempre nel corso del progetto, così le iterazione del processo che vengono modificate agli stadi iniziali fanno sempre parte del processo per grandi prodotti
- L'iterazione può essere applicata per qualsiasi dei modelli generici del processo
- Due approcci (correlati)
	- Sviluppo incrementale
	- Sviluppo a spirale


#### Sviluppo incrementale 
- Il prodotto è sviluppato e spedito in incrementi dopo aver stabilito un'architettura generale
- I requisiti e le specifiche per ogni incremento potrebbero essere sviluppate
- Gli utenti potrebbero sperimentare con degli incrementi spediti, mentre altri vengono sviluppati. Perciò questi fungono come una sorta di prototipo
- Inteso per combinare alcuni vantaggi del prototipo ma con un processo modificabile e una struttura migliore


#### Modello Incrementale
Il prodotto software viene sviluppato e rilasciato per incrementi (build) successivi

![[Pasted image 20241021150806.png | 500]]


#### Modello Incrementale (cont.)
- Include aspetti tipici del modello basato su *rapid prototyping* (l'utente può sperimentare l'utilizzo del prodotto contenente gli incrementi consegnati, mentre i restanti sono ancora in fase di sviluppo)
- Si rivela efficace quando il cliente vuole continuamente verificare i progressi nello sviluppo del prodotto e quando i requisiti subiscono modifiche
- Può essere realizzato in due versioni alternative:
	- versione con overall architecture
	- versione senza overall architecture (più rischiosa)


![[Pasted image 20241021151019.png | 500]]

![[Pasted image 20241021151043.png | 500]]


#### Confronto con modello a cascata
Modello Cascata
- Requisiti "congelati" al termine della fase di specifica
- Feedback del cliente solo una volta terminato lo sviluppo
- Fasi condotte in rigida sequenza (l'output di una costituisce input per la successiva)
- Prevede fasi di progetto dettagliato e codifica dell'intero prodotto
- Team di sviluppo costituito da un numero elevato di persone

Modello Incrementale
- Requisiti suddivisi in classi di priorità e facilmente modificabili
- Continuo feedback da parte del cliente durante lo sviluppo
- Fasi che possono essere condotte in parallelo
- Progetto dettagliato e codifica vengono effettuate sul singolo *build*
- Differenti team di sviluppo, ciascuno di piccole dimensioni


#### Modello a spirale

![[Pasted image 20241021151641.png | 600]]

![[Pasted image 20241021151716.png | 600]]

![[Pasted image 20241021151748.png | 600]]



[[Gestione del Rischio]]

[[Il Modello Microsoft]]

[[Il Modello Netscape]]

[[Agile Methods]]

[[Scrum]]

[[Capability Maturity Model (CMM)]]
