#Algoritmi 

Un D-Heap è un albero radicato d-ario con le seguenti proprietà
1) *Struttura*: è completo fino al penultimo livello, e tutte le foglie sull'ultimo livello sono compattate verso sinistra
2) *Contenuto informativo*: ogni nodo v contiene un elemento *elem(v)* ed una chiave *chiave(v)* presa da un dominio totalmente ordinato
3) *Ordinamento parziale (inverso) dell'heap (min-heap)*: chiave(v) >= chiave(parent(v)) per ogni nodo v diverso dalla radice

#### Proprietà
- Un d-heap con n nodi ha *altezza* $\Theta(\log_d{n})$ 
- La *radice* contiene l'elemento con *chiave minima*
- Può essere rappresentato implicitamente tramite vettore posizionale grazie alla proprietà di struttura

###### Procedure ausiliarie

```
muoviAlto(v)
	while(v != radice(T) and chiave(v) < chiave(padre(v)) ) do 
		scambia di posto v e padre(v) in T


muoviBasso(v)
	repeat
		sia u il figlio di v con la minima chiave(u), se esiste 
		if (v non ha figli o chiave(v) <= chiave(u)) break
		scambia di posto v e u in T
		
```


#### Insert
Crea un nuovo nodo $v$ con elemento $e$ e chiave $k$, in modo che diventi una foglia sull'ultimo livello di $T$. La proprietà dell'ordinamento a heap viene poi ripristinata spingendo il nodo $v$ verso l'alto tramite ripetuti scambi di nodi

Esecuzione di muoviAlto = $T(n) = O(\log_d{n})$


#### Delete e deleteMin
Scambia il nodo $v$ contenente l'elemento $e$ con una qualunque foglia $u$ sull'ultimo livello di $T$, e poi elimina $v$. Ripristina infine la proprietà dell'ordinamento a heap spingendo il nodo $u$ verso la sua posizione corretta scambiandolo ripetutamente con il proprio padre o con il proprio figlio contenente la chiave più piccola

$T(n) = O(\log_d{n})$ o $O(d \cdot log_d{n})$ per l'esecuzione di muoviAlto o muoviBasso
Può essere usata anche per implementare la cancellazione del minimo, con costo $O(d \cdot \log_d{n})$


#### decreaseKey
Decrementa il valore della chiave nel nodo $v$ contenente l'elemento $e$ della quantità richiesta $d$. Ripristina poi la proprietà dell'ordinamento a heap spingendo il nodo $v$ verso l'alto tramite ripetuti scambi di nodi

$T(n) = O(\log_d{n})$ per l'esecuzione di muoviAlto


#### increaseKey
Aumenta il valore della chiave nel nodo contenente l'elemento $e$ della quantità richiesta $d$. Ripristina poi la proprietà dell'ordinamento a heap spingendo il nodo $v$ verso il basso tramite ripetuti scambi di nodi

$T(n) = O(d \cdot \log_{d}{n})$ per l'esecuzione di muoviBasso


###### Merge (CodaPriorità c1, CodaPriorità c2)
Due modi:
1) *Costruire da zero*: si distruggono le due code e se ne crea una nuova contenente l'unione degli elementi
2) *Inserimenti ripetuti*: si inseriscono ripetutamente gli elementi della coda più piccola in quella più grande


#### Costruire da zero
*Idea*: genero un nuovo heap d-ario contenente tutti gli elementi in $c_1$ e $c_2$ 

*Come*: 
- Generalizzazione della procedura *heapify*
- Rendo i $d$ sottoalberi della radice heap ricorsivamente e chiamo *muoviBasso* sulla radice

*Complessità* (d costante):
$T(n) = d \cdot T\frac{n}{d} + O(d \cdot \log_d{n})$, dove n = $|c_{1|} + |c_2|$
Quindi, utilizzando il Teorema Master diventa $T(n) = \Theta(n)$ 


#### Inserimenti ripetuti
Inseriamo ad uno ad uno tutti gli elementi della coda più piccola nella coda più grande.
Sia $k = min{|c_{1|,}|c_2|}$  e  $n = |c_{1|}+ |c_2|$
L'approccio conviene quindi per $k \log n = o(n)$, cioè per $k = o(n/logn)$ 