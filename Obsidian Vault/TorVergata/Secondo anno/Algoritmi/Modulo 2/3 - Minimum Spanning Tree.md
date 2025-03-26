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
	- Poichè 

