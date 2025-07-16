#Algoritmi 

>[!info] Minimum spanning tree
>Dato un grafo connesso non orientato $G = (V, E)$ con pesi degli archi con valore $c_{e}$, un MST è un sottoinsieme degli archi $T \subset E$ tale che $T$ è uno spanning tree la cui somma dei pesi degli archi è minimizzata
>

>[!info] Teorema di Cayley
>Ci sono $n^{n-2}$ spanning tree di $K_n$


![[Pasted image 20250325135655.png#center | 700]]

**Il problema dell'MST**
*input*:
- Un grafo connesso non orientato $G = (V, E)$, con pesi degli archi $c_{e}$

*Soluzione fattibile*:
- Uno spanning tree $T$ di $G$, i.e. un albero con $T \subset E$ che raggiungono tutti i vertici di $G$

*Misura (per minimizzare)*:
- Il peso (o costo) di $T$, i.e. $c(T) = \sum_{e \in T} c_{e}$


#### Unicità dell'MST
L'MST non è unico in generale

![[Pasted image 20250325141051.png]]

**Proprietà**
Se $G$ ha pesi distinti allora l'MST è unico


#### Algoritmi Greedy
**Algoritmo di Kruskal**
Inizia con $T = 0$. Considera gli archi in ordine ascendente di costo. Inserisce l'arco $e$ in $T$, salvo che questo non crei un ciclo

**Algoritmo Reverse-Delete**
Inizia con $T = E$. Considera gli archi in ordine discendente di costo. Elimina l'arco $e$ da $T$, salvo che questo non disconnetta $T$

**Algoritmo di Prim**
Inizia con qualche radice $s$ e in modo greedy fa crescere un albero $T$ da $s$ verso l'esterno. Ad ogni step, aggiungi l'arco $e$ più economico a $T$ che ha esattamente un punto di fine in $T$

**Remark**
Tutti e tre gli algoritmi producono un MST


#### Cicli e Cuts
**Ciclo**
Set di archi nella forma a-b, b-c, c-d, ..., y-z, z-a.

![[Pasted image 20250325141651.png#center | 450]]

Ciclo C = 1-2, 2-3, 3-4, 4-5, 5-6, 6-1

**Cut**
Un cut è un sottoinsieme di nodi $S$. (Qualche volta definito come una partizione di $V$ in $S$ e $V/S$)

**Cutset**
Il corrispondente cutset $D$ di un cut $S$ è un sottoinsieme di archi con esattamente un endpoint in $S$

![[Pasted image 20250325141903.png#center | 600]]



**Cut property**
Sia $S$ un sottoinsieme di nodi, e sia $e$ un arco con costo minimo con endpoint in $S$. Di conseguenza, esisterà un MST contenente $e$

**Cycle property**
Sia $C$ un ciclo qualsiasi, e sia $f$ un arco con costo massimo appartenente a $C$. Di conseguenza, esisterà un MST che non contiene $f$

![[Pasted image 20250325142825.png#center]]


**Dimostrazione della Cut Property**
L'idea è di dimostrare che possiamo costruire un **MST** che contiene l'arco di minimo costo $e$

1. Supponiamo che $e$ non appartenga al MST ottimale $T^*$
2. Se aggiungiamo $e$ a $T^*$, **si forma un ciclo** $C$
	- Questo perchè $T^*$ è già un albero (quindi ha $n - 1$ archi), e aggiungere un nuovo arco crea necessariamente un ciclo

3. L'arco $e$ appartiene sia al ciclo $C$ che al cutset $D$, che è l'insieme degli archi che collegano $S$ con il resto del grafo
	- Nel cutset $D$ ci deve essere almeno un altro arco $f$ che è anche nel ciclo $C$

4. Possiamo sostituire $f$ con $e$ in $T^*$ per ottenere un nuovo albero di copertura
	- Definiamo un nuovo spanning tree $T' = T^{*} \cup \{e\} - \{f\}$
	- Poichè $e$ è stato scelto come l'arco minimo nel cutset, il suo costo è **minore o uguale** al costo di $f$, cioè $c_{e} \leq c_{f}$

5. Il costo di $T'$ **non è maggiore di quello di** $T^*$, quindi $T'$ è **anch'esso un MST contenente** $e$


>[!Info] Dimostrazione
>Questo processo dimostra che, scegliendo sempre gli archi minimi nei cutset, otteniamo un **MST ottimale**, che è il principio alla base di Kruskal e Prim



**Dimostrazione della Cycle Property**
L'obiettivo è dimostrare che possiamo costruire un **MST** che **non contiene** $f$.

1. **Supponiamo** che $f$ **appartenga al MST ottimale** $T^*$
2. **Se rimuoviamo** $f$ da $T^*$, il grafo si **spezza in due componenti**
	- Questo crea un **cut** $S$ nel grafo, separando i nodi

3. L'arco $f$ **appartiene sia al ciclo** $C$ che **al cutset** $D$ (cioè l'insieme di archi che attraversano il taglio $S$)
	- Poichè $f$ è nel ciclo $C$, ci deve essere un altro arco $e$ nel ciclo che attraversa lo stesso cutset

4. Possiamo sostituire $f$ con $e$ in $T^*$ per ottenere un nuovo albero di copertura
	- Definiamo un nuovo spanning tree $T' = T^* \cup \{e\} - \{f\}$
	- Poichè $e$ ha un **costo minore o uguale** a $f$, cioè $c_{e}\leq c_{f}$, il costo di $T'$ è **minore o uguale** a quello di $T^*$ 

5. Il costo di $T'$ **non è maggiore** di $T^*$, quindi $T'$ è **anch'esso un MST che non contiene** $f$


![[Pasted image 20250326151543.png#center| 400]]


#### Algoritmo di Kruskal

>[!info] Kruskal
>Inizia con $T = 0$. Considera gli archi in ordine crescente di costo. Inserisce l'arco $e$ in $T$, salvo che questo non crei un ciclo

>[!info] Remark
>Un'implementazione efficiente dell'algoritmo di Kruskal utilizza una struttura dati **Union-find**:
>- Per mantenere i componenti connessi della soluzione corrente
>- Per verificare quando un arco corrente forma un ciclo (con la soluzione corrente)


#### Pseudocodice

```
algorithm Kruskal (graph G=(V,E,c))
	UnionFind UF
	T = 0
	archi in ordine ascendente di costo

	for each vertex v do UF.makeset(v)
	for each edge (x,y) in order do
		Tx = UF.find(x)
		Ty = UF.find(y)
		if Tx != Ty then
			UF.union(Tx, Ty)
			add edge (x,y) to T
	return T
	
```


![[Kruskal Algoritmi Strutture Dati.gif#center | 500]]

#### Correttezza dell'algoritmo di Kruskal

1. **Il comportamento dell'algoritmo di Kruskal**
	- Kruskal ordina gli archi in **ordine crescente di costo**
	- Aggiunge un arco all'MST solo se **non forma un ciclo**

2. **Il concetto di "cut"
	- Quando l'algoritmo decide di aggiungere l'arco $(x, y)$. esiste un **insieme di nodi** $S$ che contiene tutti i nodi già connessi a $x$
	- L'arco $(x, y)$ è il più **economico** tra quelli che collegano $S$ al resto del grafo

3. **Perchè questa scelta è ottimale?**
	- La proprietà del taglio afferma che **l'arco di costo minimo che attraversa un taglio deve essere nell'MST**
	- Kruskal sceglie esattamente questo arco, garantendo un albero minimo


#### Tempo di esecuzione dell'algoritmo di Kruskal

>[!col] 
>**Algoritmo di Kruskal**
>![[Pasted image 20250326153050.png| 300]]
>
>
>
>>[!col-md]
>>**Costo**
>>- Ordinare gli archi: $O(m \log m) = O(m \log n)$
>>- **Union-find**:
>>	- $n$ makeset
>>	- $n-1$ union
>>	- $2m$ find
>>
>>Quickfind con union by size $\rightarrow O(m \log n + m + n \log n) = O(m \log n)$
>>QuickUnion con union by size $\rightarrow O(m \log n + m \log n + n) = O(m \log n)$



#### Algoritmo di Prim

>[!info] Algoritmo di Prim
>Inizia con un nodo radice $s$ e fai crescere in modo greedy un albero $T$ da $s$ verso l'esterno.
>Ad ogni step, aggiungi l'arco $e$ più economico a $T$ che ha esattamente un endpoint in $T$.

>[!check] Correttezza
>Immediata conseguenza della **cut property**, usata esattamente $n-1$ volte


![[Algoritmi e Strutture Dati Modulo 2 immagine.gif#center | 500]]


#### Tempo di esecuzione

**Un'implementazione semplice (e inefficiente)**
Per $n-1$ volte, trovare il più economico arco che attraversa il cut indotto dall'albero parziale corrente in tempo $O(m)$ $\rightarrow$ Total running time: $O(mn)$

**Un'implementazione molto più rapida**
- Mantieni il set di nodi esplorati $S$
- Usa una coda con priorità per mantenere i nodi inesplorati
- Per ogni nodo $v$ inesplorato, la priorità è il costo di attaccamento $a[v]$ = costo dell'arco più economico incidente a $v$ avendo un enpoint in $S$


![[Pasted image 20250326155343.png#center| 500]]

**Tempo di esecuzione**
- Tempo $O(m+n)$ più il costo delle operazioni della coda con priorità
- $n$ inserts, $n$ delete min, $m$ decrease key
- $O(n^2)$ con un array; $O(m \log n)$ con un heap binario
- $O(m + n \log n)$ con un Heap di Fibonacci

**Totale** $\rightarrow O(m + n \log n)$



#### Clustering

>[!info] Definizione
>Dato un set $U$ di $n$ oggetti (foto, documenti, micro-organismi) etichettati $p_{1}, ..., p_{n}$, classificarli in gruppi coerenti
>
>**Funzione di distanza** 
>Valore numerico che specifica la "vicinanza" di due oggetti


>[!danger] Problema fondamentale
>Dividere in gruppi in modo tale che i punti in differenti gruppi siano molto lontani.


**K-clustering**
Dividere oggetti in $k$ gruppi non vuoti

**Funzione di distanza**
Assumere che soddisfi proprietà naturali
- $d(p_{i}, p_{j}) = 0 \cdot iff \cdot p_{i}=p_{j}$  (identità degli indiscernibili)
- $d(p_{i}, p_{j}) \geq 0$  (nonnegativity)
- $d(p_{i}, p_{j}) = d(p_{j}, p_{i})$  (simmetria)

**Spacing**: Minima distanza tra qualunque paio di punti in differenti gruppi

**Clustering di spazio massimo**: Dato un intero $k$, trovare un $k$-clustering di spazio massimo

![[Pasted image 20250327141428.png#center | 500]]


#### Greedy Clustering Algorithm
**Single-linkage k-clustering algorithm**
- Forma un grafo sul set di vertici $U$, corrispondente a $n$ clusters.
- Trova il paio di oggetti più vicini tale che questi oggetti siano in cluster differenti, e aggiunge un arco tra di loro (e merge il cluster corrispondente)
- Ripete $n-k$ volte finchè non ci sono esattamente $k$ clusters

**Osservazione chiave**
Questa procedura è precisamente l'algoritmo di Kruskal (eccetto che si ferma quando ci sono $k$ componenti connessi)

**Remark**
Equivalente a trovare un MST ed eliminare il $k$-esimo arco più costoso

**Hierarchial Clustering**
Eseguire l'algoritmo di Kruskal fino alla fine implementa un Hierarchial Clustering, i.e. un $k$-clustering per ogni valore di $k=n, {n-1}, ..., 1$


![[k cluster.gif#center | 500]]

#### Analisi dell'algoritmo Greedy

>[!theorem] Teorema
>Sia $C^*$ ciò che denota il clustering $C^{*}_{1}, ..., C^{*}_{k}$  formato eliminando il $k-1$ arco più costoso dell'MST. $C^{*}$ è un $k$-clustering di spazio massimo

>[!info] Pf
>Sia $C$ ciò che denota qualche altro clustering $C_{1}, ..., C_{k}$
>- Lo spacing di $C^*$ è la lunghezza $d^*$ del $(k-1)^{st}$ arco più costoso dell'MST
>- Dato che $C^{*} \neq C$, dovranno esistere $p_{i}, p_{j}$ nello stesso cluster in $C^*$, diciamo $C^*_{r}$, ma in cluster differenti in $C$, diciamo $C_{s}$ e $C_{t}$
>- Qualche arco $(p,q)$ nel cammino $p_{i}-p_{j}$ in $C^*_{r}$ formano due differenti cluster in $C$
>- Tutti gli archi in $p_{i}-p_{j}$ avranno lunghezza $\leq d^*$ dato che Kruskal li ha scelti
>- Lo spacing di $C$ è $\leq d^*$ dato che $p$ e $q$ sono in due cluster differenti


![[Pasted image 20250327144117.png#center | 350]]


