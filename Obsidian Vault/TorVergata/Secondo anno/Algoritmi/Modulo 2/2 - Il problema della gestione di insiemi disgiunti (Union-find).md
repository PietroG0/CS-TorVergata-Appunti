#Algoritmi 

#### Il problema Union-find
- Mantenere una **collezione di insiemi disgiunti** contenenti elementi distinti (ad esempio, interi in $1...n$) durante l'esecuzione di una sequenza di operazioni del seguente tipo:
	- *makeSet(x)* = crea il nuovo insieme *x = {x}* di nome *x*
	- *union(A,B)* = unisce gli insiemi *A* e *B* in un unico insieme, di nome *A*, e distrugge i vecchi insiemi *A* e *B* (si suppone di accedere agli insiemi *A*,*B*)
	- *find(x)* = restituisce il nome dell'insieme contenente l'elemento *x* (si suppone di accedere direttamente all'elemento *x*)

- **Applicazioni**: algoritmo di Kruskal per la determinazione del minimo albero ricoprente di un grafo, calcolo dei minimi antenati comuni, ecc.

![[Pasted image 20250320163619.png]]

**Obiettivo**: Progettare una struttura dati che sia efficiente su una sequenza arbitraria di operazioni

**Idea generale**: rappresentare gli insiemi disgiunti con una foresta
- Ogni insieme è un *albero radicato*
- La *radice* contiene il *nome* dell'insieme (elemento rappresentativo)


#### Alberi QuickFind
**Usiamo una foresta di alberi di altezza 1 per rappresentare gli insiemi disgiunti. In ogni albero**
- Radice = nome dell'insieme
- Foglie = elementi (*incluso* l'elemento rappresentativo, il cui valore è nella radice e dà il nome all'insieme)

#### Realizzazione

```
classe QuickFind implementa UnionFind

dati: S(n) = O(n)
una collezione di insiemi disgiunti di elementi elem; ogni insieme ha un nome name.

operazioni:
makeset(elem e)   T(n) = O(1)
crea un nuovo albero, composto da due nodi: una radice ed un unico figlio (foglia). Memorizza e sia nella foglia dell'albero che come nome nella radice

```


```
union(name a, name b)   T(n) = O(n)
considera l'albero A corrispondente all'insieme di nome a, e l'albero B corrispondente all'insieme di nome b. Sostituisce tutti i puntatori dalle foglie di B alla radice di B con puntatori alla radice di A. Cancella la vecchia radice di B.

find(elem e) --> name   T(n) = O(1)
accede alla foglia x corrispondente all'elemento e. Da tale nodo segue il puntatore al padre, che è la radice dell'albero, e restituisce il nome memorizzato in tale radice.

```

![[Pasted image 20250320164231.png]]



#### Esempio 

![[GIF Speed Changer (1).gif#center | 500]]



#### Union di costo lineare
**Find e makeSet** richiedono solo tempo $O(1)$, ma particolari sequenze di **union** possono essere molto inefficienti:

![[Pasted image 20250320165730.png#center| 500]]

Queste operazioni costeranno $\Theta (n^{2})$


#### Migliorare la struttura QuickFind: euristica union by size

>[!info] Idea
>Fare in modo che un nodo/elemento non cambi troppo spesso padre


**Union by size**
Nell'unione degli insiemi $A$ e $B$, attacchiamo gli elementi dell'insieme **di cardinalità minore a quello di cardinalità maggiore**, e se necessario modifichiamo la radice dell'albero ottenuto (per aggiornare il nome)

Ogni insieme mantiene esplicitamente anche la propria size (numero di elementi)

![[Pasted image 20250320171210.png#center|300]]  


![[GIF Speed Changer (2).gif#center | 500]]

#### Realizzazione

>[!info] QuickFindBilanciato implementa UnionFind:
>
>**Dati**: $S(n) = O(n)$
>una collezione di insiemi disgiunti di elementi $elem$; ogni insieme ha un nome $name$
>
>**Operazioni**:
>$makeset(elem e) \rightarrow T(n) = O(1)$
>crea un nuovo albero, composto da due nodi: una radice ed un unico figlio (foglia). Memorizza $e$ sia nella radice che nella foglia dell'albero. Inizializza la cardinalità del nuovo insieme ad 1, assegnando il valore $size(x) = 1$ alla radice $x$
>
>$find(elem e)\rightarrow T(n) = O(1)$
>accede alla foglia $x$ corrispondente all'elemento $e$. Da tale nodo segue il puntatore al padre, che è la radice dell'albero, e restituisce il nome memorizzato in tale radice
>
>$union(name a, name b) \rightarrow T(am) = O(\log n)$
>considera l'albero A corrispondente all'insieme di nome $a$, e l'albero B corrispondente all'insieme di nome $b$. Se $size(A) \geq size(B)$, muovi tutti i puntatori dalle foglie di B alla radice di A, e cancella la vecchia radice di B. Altrimenti $(size(B) > size(A))$ memorizza nella radice di B il nome A, muovi tutti i puntatori dalle foglie di A alla radice di B, e cancella la vecchia radice di A. In entrambi i casi assegna al nuovo insieme la somma delle cardinalità dei due insiemi originali $(size(A) + size(B))$

$T_{am}$ = Tempo per operazione **ammortizzato** sull'intera sequenza di unioni. Vedremo che una singola **union** può costare $\Theta(n)$, ma l'intera sequenza di **n-1 union** costa $O(n \log n)$


#### Complessità temporale per singola operazione

![[Pasted image 20250324150337.png#center | 600]]


#### Alberi QuickUnion

**Usiamo una foresta di alberi di altezza anche maggiore di 1 per rappresentare gli insiemi disgiunti. In ogni albero:**
- Radice = elemento rappresentativo dell'insieme
- Rimanenti nodi = altri elementi (**escluso** l'elemento nella radice)

![[Quick Union.gif#center | 600]]


#### Complessità delle operazioni

![[Pasted image 20250324151723.png#center | 600]]


#### Find di costo lineare
Particolari sequenze di **union** possono generare un albero di altezza lineare, e quindi la **find** è molto inefficiente (costa **n-1** nel caso peggiore)

![[Pasted image 20250324151839.png#center | 400]]

$\rightarrow$ Se eseguiamo **n makeSet**, **n-1 union** come sopra, seguite da **m find**, il tempo richiesto **dall'intera sequenza** di operazioni è $O(n+{n-1}+nm) = O(nm)$ 


#### Migliorare la struttura QuickUnion: euristica union by size

>[!info] Definizione
>**Union by size**: nell'unione degli insiemi A e B, rendiamo la radice dell'albero **con meno nodi** figlia della radice dell'albero **con più nodi**


![[Pasted image 20250324161248.png#center | 600]]


![[Union by Size.gif#center | 500]]


**Lemma**:
Con la **union by size**, dato un albero QuickUnion con size (numero di nodi) $s$ e altezza $h$ vale che $s \geq 2^h$


#### Un'ulteriore euristica: compressione dei cammini

![[Pasted image 20250324161610.png#center | 600]]

**Idea**: Quando eseguo *find(x)* e attraverso il cammino da $x$ alla radice, comprimo il cammino, ovvero rendo tutti i nodi del cammino figli della radice

**Intuizione**: find(x) ha un costo ancora lineare nella lunghezza del cammino attraversato, ma prossime find costeranno di meno


>[!info] Teorema
>Usando in **QuickUnion** le euristiche di union by rank (o by size) e compressione dei cammini, una qualsiasi sequenza di **n** makeSet, **n**-1 union e **m** find hanno un costo di $O(n+m \cdot \alpha (n+m, n))$
>
>$\alpha(x,y)$: funzione inversa della funzione di Ackermann
