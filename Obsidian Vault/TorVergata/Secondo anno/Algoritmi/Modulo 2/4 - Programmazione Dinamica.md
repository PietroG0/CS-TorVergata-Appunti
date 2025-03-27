#Algoritmi 

>[!info] Sommario
>- La tecnica della **programmazione dinamica** all'opera
>- Un problema interessante: **insieme indipendente** di peso massimo (per un grafo a cammino)
>	- perchè le altre tecniche non funzionano
>	- ragionare sulla struttura/proprietà della **soluzione**
>
>- Un algoritmo di programmazione dinamica con complessità lineare
>- Principi generali della programmazione dinamica
>	- **sottoproblemi**, **relazioni** fra sottoproblemi, **tabelle**


#### Insieme Indipendente di peso massimo (su grafi a cammino)

**Input**
Un cammino $G$ di $n$ nodi. Ogni nodo $v_{i}$ ha un peso $w_{i}$

**Goal**
Trovare un insieme indipendente di **peso massimo**, ovvero un insieme $S$ di nodi tale che:
- $S$ è un II (Insieme Indipendente)
- $w(S) = \sum \limits_{{v_{i}} \in S} w_{i}$  è più grande possibile

>[!info] Definizione 
>Un **Insieme Indipendente** (II) di $G$ è un sottoinsieme di nodi che non contiene due nodi adiacenti, ovvero per ogni coppia di nodi dell'insieme i due nodi non sono collegati da un arco


![[Ins Indipendenza.gif#center | 400]]


#### Forza bruta: enumerazione

**Idea**
Enumeriamo tutti i sottoinsiemi degli $n$ nodi, per ognuno verifichiamo che è un insieme indipendente, ne calcoliamo il peso e teniamo quello di peso massimo

>[!question] Domanda
>Quanti sottoinsiemi guardiamo?

>[!check] Risposta
>Tanti $\rightarrow 2^{n}$


#### Approccio greedy

*Idea*
Costruisco la soluzione in modo incrementale scegliendo ogni volta il nodo indipendente di valore massimo

![[Greedy Insert Ind.gif#center]]


In questa istanza funziona, ma

![[Pasted image 20250327154655.png#center | 500]]

In questa no


#### Nuovo approccio al problema

**Obiettivo**
Esprimere la **soluzione del problema** come combinazione di **soluzioni di (opportuni) sottoproblemi**. Se le combinazioni sono "poche" possiamo cercare la combinazione giusta per forza bruta.

Sia $S^*$ la soluzione ottima, ovvero l'II di peso massimo di $G$.
Considera l'ultimo nodo $v_n$ di $G$

**Osservazione**: $v_{n} \notin S^{*}$ o $v_{n} \in S^*$

**Caso 1**: $v_{n} \notin S^{*}$
Considera $v_{n} \notin S^*$
Allora $S^*$ è una soluzione ottima per $G'$
Se esistesse una soluzione $S$ migliore per $G'$, $S$ sarebbe migliore anche per $G$

![[Pasted image 20250327155049.png#center | 500]]

**Caso 2**: $v_{n} \in S^*$
Considera $G'' = G - \{V_{n-1}, V_n\}$ 
Allora $S^{*} / \{v_{n}\}$ è una soluzione ottima per $G''$
Se esistesse una soluzione $S$ migliore per $G'', S \cup \{v_{n}\}$ sarebbe migliore di $S^*$ per $G$

![[Pasted image 20250327155345.png#center | 500]]

**Idea**
Procediamo iterativamente considerando prefissi di $G$ dai più piccoli verso i più grandi

$G_{j}$: sottocammino composto dai primi $j$ vertici di $G$
**Sottoproblema** $j$: calcolare il peso del miglior II per $G_{j}$
$OPT[j]$: valore soluzione **sottoproblema** $j$, ovvero peso dell'II di peso massimo di $G_{j}$

$OPT[1] = w_{1};$ $OPT[2] = max \{w_{1}, w_{2}\}$
$OPT[J] = max \{OPT[j-1], w_{j} + OPT[j-2]\}$


**L'algoritmo**
$G_{j}$: sottocammino composto dai primi $j$ vertici di $G$
$OPT[]$: vettore di $n$ elementi;
dentro $OPT[j]$ voglio mettere il peso dell'II di peso massimo di $G_{j}$

>[!info] Pseudocodice
>
>$OPT[1] = w_{1};$ $OPT[2] = max \{w_{1}, w_{2}\}$
>**for** $j=3$ to $n$ **do**
>	$OPT[j] = max \{OPT[j-1], w_{j}+OPT[j-2]\}$
>**return** $OPT[n]$



