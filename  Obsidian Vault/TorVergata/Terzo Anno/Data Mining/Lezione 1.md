#DataMining 

## I tre diversi tipi di machine learning
Esistono tre diversi tipi di machine learning: **apprendimento con supevisione**, **apprendimento senza supervisione** e **apprendimento di rafforzamento** 

![[image-6.png|516]]


### Effettuare previsioni sul futuro grazie all'apprendimento con supervisione
Lo scopo principale dell'apprendimento con supervisione consiste nel trarre un modello a partire da dati di **addestramento** etichettati, i quali ci consentono di effettuare previsioni relative a dati non disponibili o foturi. Il termine **con supervisione** fa riferimento al fatto che nell'insieme di campioni i segnali di output desiderati (le etichette) sono già noti

![[image-7.png|530]]

Considerando l'esempio del filtraggio dei messaggi spam di posta elettronica, possiamo addestrare un modello applicando un algoritmo di apprendimento con supervisione a un insieme di messaggi di posta elettronica **già etichettati**, che siano stati correttamente contrassegnati come spam oppure non-spam, per fargli determinare se un nuovo messaggio di posta elettronica appartiene all'una o all'altra categoria. 

#### Classificazione per la predizione delle etichette delle classi
La classificazione è una sottocategoria dell'apprendimento con supervisione, dove l'obiettivo è quello di **prevedere le etichette di categoria delle classi per le nuove istanze**, sulla base delle osservazioni compiute nel passato. Queste etichette sono valori discreti, non ordinati, che possono essere considerati come **appartenenti a un gruppo delle istanze**. Un esempio di un compito di **classificazione multiclasse** è il riconoscimento del testo scritto a mano. Qui possiamo raccogliere un dataset di apprendimento che è costituito da più esempi di scrittura a mano di ciascuna lettera dell'alfabeto. Ora, se un utente fornisce un nuovo carattere scritto a mano tramite un dispositivo di input, il nostro modello predittivo sarà in grado di prevedere con una certa precisione la lettera corretta dell'alfabeto.

![[image-8.png|364]]

Questa figura illustra il concetto del **compito di classificazione binaria sulla base di campioni di apprendimento**: quindici di essi sono etichettati come *classe negativa* (i cerchi) e altrettanti campioni sono etichettati come *classe positiva* (i segni +). In questa situazione, il nostro dataset è bidimensionale, il che significa che a ogni campione possono essere associati due colori: $X_{1}$ e $X_{2}$. Ora, possiamo utilizzare un algoritmo di apprendimento con supervisione per trarre una regola che sia in grado di separare queste due classi e classificare i nuovi dati in ognuna di queste due categoria sulla base dei loro valori $X_{1}$ e $X_{2}$


#### Regressione per la previsione di risultati continui 
Un secondo tipo di apprendimento con supervisione è la previsione di risultati continui, chiamata anche **analisi di regressione**. Nell'analisi di regressione, abbiamo un certo numero di variabili predittive (descrittive) e una variabile target continua (risultato). 
Supponiamo di essere interessati a prevedere le valutazioni di una prova scritta dei nostri studenti. Se vi è una relazione fra il tempo dedicato a studiare per il test e i risultati finali, potremmo utilizzare questi tempi come **dati di apprendimento** per derivare un modello che utilizzi proprio come il tempo dedicato allo studio per prevedere le valutazioni dei futuri studenti che pensano di svolgere questo test. 

![[image-9.png|374]]

Questa figura illustra il concetto di **regressione lineare**. Data una variabile predittiva $x$ e una variabile risposta $y$, tracciamo una linea retta attraverso questi dati in modo da minimizzare la distanza (si parla infatti di distanza quadratica media) fra i punti del campione e la linea. Ora possiamo utilizzare il punto di intersezione e la pendenza che abbiamo appreso da questi dati per prevedere la variabile target per nuovi dati. 


### Risolvere problemi interattivi con l'apprendimento di rafforzamento
Un altro tipo di apprendimento automatico è **l'apprendimento di rafforzamento**. Qui l'obiettivo è quello di **sviluppare un sistema che migliori le proprie prestazioni sulla base delle interazioni con l'ambiente**. 
Poichè, tipicamente, le informazioni relative allo stato corrente includono anche un cosiddetto segnale di **ricompensa** (reward), possiamo considerare l'apprendimento di rafforzamento come un esempio di apprendimento con supervisione. 
Tuttavia, nell'apprendimento di raforzamento, questo feedback non è l'etichetta o il valore corretto di verità, ma una **misura della qualità con cui l'azione è stata misurata da una funzione di ricompensa**.
Tramite l'interazione con l'ambiente, un agente può quindi utilizzare l'apprendimento di rafforzamento per imparare una serie di azioni che massimizzano questa ricompensa tramite un approccio esplorativo del tipo **trial-and-error** o una pianificazione deliberativa.  
Un esempio classico di apprendimento di rafforzamento è il motore del gioco degli scacchi, qui l'agente decide come svolgere una serie di mosse a seconda dello stato della scacchiera (l'ambiente) e la ricompensa può essere definita come la vittoria o la sconfitta alla fine del gioco

![[image-10.png|496]]


### Scoprire le strutture nascoste con l'apprendimento senza supervisione
Nell'apprendimento con supervisione, conosciamo in anticipo la **risposta corretta** quando descriviamo il nostro modello, mentre nell'apprendimento di rafforzamento **definiamo una misura, o ricompensa**, per le specifiche azioni messe in atto dall'agente. 
Nell'apprendimento senza supervisione, al contrario, abbiamo a che fare con **dati non etichettati o dati dalla struttura ignota**. Utilizzando tecniche di apprendimento senza supervisione, siamo in grado di osservare la struttura dei nostri dati, per estrarre da essi informazioni cariche di significato senza però contare sulla guida nè di una variabile nota relativa al risultato, nè una funzione di ricompensa.


#### Ricerca di sottogruppi tramite il clustering
Il **clustering** è una tecnica esplorativa di analisi dei dati che ci consente di **organizzare una serie di informazioni all'interno di gruppi significativi** (i cluster) senza avere alcuna precedente conoscenza delle appartenenze a tali gruppi. Ogni cluster che può essere derivato durante l'analisi definisce un gruppo di oggetti che condividono un certo grado di similarità, ma che sono più dissimili rispetto agli oggetti presenti negli altri cluster, motivo per cui il clustering viene talvolta chiamato "classificazione senza supervisione". 

![[image-11.png|371]]

Questa figura illustra il modo in cui il clustering può essere applicato all'organizzazione di alcuni dati senza etichetta suddividendoli in tre gruppi distinti sulla base della similarità delle caratteristiche $X_{1}$ e $X_{2}$

## Algoritmi di classificazione

>[!danger] Problema
>Dato un item $X \in \mathbb{R}^{d}$ , $x = (x_{1}, ..., x_{d})$ dove $d$ è il numero di **features** (caratteristiche), e date due classi $1$ e $-1$, vogliamo classificare $x$ in una delle due classi

Per fare questo, svilupperemo un algoritmo basato sull'esperienza (addestrato) dandogli un insieme di esempi già classificati

Supponiamo $d=2$ $(\mathbb{R}^{2})$ , $v=(v_{x}, v_{y})$  

![[image-16.png|396]]

>[!tip] DEF
>Un'istanza è **linearmente separabile** quando esiste una retta (2D), un piano (3D), un iperpiano (nD) che può separare perfettamente i dati appartenenti a due classi distinte

Assumiamo dunque che le nostre istanze sono separabili linearmente. Dunque il problema di classificazione si traduce nel trovare una retta / un piano / un iperpiano che separi perfettamente gli elementi appartenenti alle due classi

### Algoritmo Perceptron
Definiamo una funzione **di attivazione** $\phi : x \quad \text{x} \quad w \rightarrow \{-1, 1\}$ dove 
$$\phi (z) \begin{cases}
1  \quad \text{se} \quad z \geq \Theta \\
-1 \quad \text{altrimenti}
\end{cases}$$
e dove $z = w_{0} + w_{1}x_{1} + ... + w_{d} x_{d} = w \cdot x$

$$\phi (z) \begin{cases}
1  \quad \text{se} \quad z > 0 \\
-1 \quad \text{se} \quad z < 0
\end{cases}$$

![[image-17.png]]


#### Codice Python

``` python

for _ in range(n_iter):
	errors = 0
	for x_i, target in zip(X,Y):
		update = target * np.dot(x_i, w[1: ] + w[0])
		if update <= 0:
			w[1: ] += eta * target *x_i
			w[0] = eta * target
			errors += 1
	if errors == 0:
		break

```

