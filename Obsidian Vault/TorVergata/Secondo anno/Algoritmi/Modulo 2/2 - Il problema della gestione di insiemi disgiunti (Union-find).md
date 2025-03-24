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

![[GIF Speed Changer (1).gif]]



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

