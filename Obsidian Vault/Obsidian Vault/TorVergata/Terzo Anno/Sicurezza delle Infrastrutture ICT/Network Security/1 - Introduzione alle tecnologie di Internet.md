#Sicurezza 

#### Funzionalità base di un network TLC
- Per garantire un approvvigionamento dei servizi TLC, un numero di funzionalità devono essere necessariamente implementate
	- Addressing
		- Tutti hanno bisogno di un "nome" per essere riconosciuti e contattati, lo stesso principio vale per le macchine

	- Signalling
		- Le informazioni sono scambiate tramite l'instaurazione e il controllo di un canale di comunicazione logico e la manutenzione delle risorse del network
		- Il signalling è fondamentale per controllare i servizi TLC

	- Switching/routing
		- C'è bisogno dei percorsi per connettere una fonte alla destinazione, lo Switching è utilizzato in tutti i nodi interni del network e consiste nel sistemare a coppie porte di ingresso e uscita per garantire ai dati di attraversare il nodo
		- Il routing seleziona le porte di uscita tra vari network quando molte opzioni sono valide
	
	- Transmission
		- Trasmissione fisica delle informazioni tra i nodi del network

	- Management
		- Un network TLC si evolve continuamente, di conseguenza gli operatori del network devono calcolare una fattura per i loro clienti


#### Il modello Internet
Come gestire l'elaborazione e la trasmissione di contenuti informativi tra piattaforme digitali differenti come in Internet?

**TCP/IP Model**: Composti da 4 livelli. Ogni livello provvede un sottoinsieme di funzionalità

![[Pasted image 20250516142354.png#center | 400]]

**Modelli a layer**: Funzionalità sparse in differenti "livelli astratti", chiamati *layer*, con interfacce
**Protocollo**: Un insieme di funzionalità e di corrispettive regole di esecuzione tra i vari layer


**Livello di Applicazione**
Questo livello contiene tutte le funzionalità mirate per tradurre i contenuti informativi (generati dagli utenti), come video, audio e testo, in un formato che può essere utilizzato per la trasmissione, e vice versa
- Presentazione e amministrazione dei contenuti in una forma famigliare per gli utenti
- Bit raggruppati in **strutture dati** aiutano il destinatario a ricevere la sequenza di dati originali


**Livello di Trasporto**
Questo livello riceve dal livello di applicazione un flusso di bit e prende in carica per iniettare un flusso nel network in una maniera controllata

>[!info] Definizione
>Il livello di Trasporto realizza delle comunicazioni tra due (o più) applicazioni provvedendo alle funzioni base
>
>**Considerazione 1**: il livello di trasporto si comporta come un rubinetto per regolare il data flow generato dalle applicazioni
>
>**Considerazione 2**: questo livello è accoppiato con le applicazioni, quindi è implementato in nodi che eseguono applicazioni


Ci sono due principali protocolli di trasporto utilizzati in Internet:
- User Datagram Protocol (UDP)
- Transmission Control Protocol (TCP)

**UDP** è generalmente usato da applicazioni che vogliono trasmettere un rate prefissato, senza garantire l'effettiva consegna del pacchetto

**TCP** è generalmente usato da applicazioni che richiedono una comunicazione affidabile


**Livello di Network (Rete)**
Provvede a tutte le funzionalità che creano percorsi logici dalla fonte alla/alle destinazioni e instradare i pacchetti

Funzioni principali
- Addressing
- Routing

Il protocollo che esegue le funzionalità del livello di rete è Internet Protocol (**IP**)
**IP** è una comunanza per tutti i nodi di Internet
- E' un protocollo senza connessione: Ogni datagramma IP è indipendentemente gestito con rispetto per gli altri pacchetti che provengono dallo stesso flow
	- Differenti datagrammi IP possono seguire differenti percorsi per gli stessi recipienti



