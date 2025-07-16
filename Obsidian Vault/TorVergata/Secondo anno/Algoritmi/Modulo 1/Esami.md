#Algoritmi 

#### Esame 1 20-02-2023

![[Pasted image 20241115112158.png]]


*B)*
- $T(n) = 2T(n/4) + n \sqrt{n}$
--> $n^{\log_4 2}$ vs $n \sqrt{n}$  --> $T(n) = \Theta(n \sqrt{n}$)

- $T(n) = 2T(n-4)+1$ --> $T(n) = \Theta\left(\sqrt[4]{2}\right)^n$


*C)* 
- In un grafo non orientato e pesato, calcolare la distanza fra tutte le coppie di nodi: *Applico l'algoritmo di Dijkstra per ogni nodo --> n Dijkstra --> O(n(m+nlogn))*
- In un grafo orientato, capire se uno specifico nodo s può essere raggiunto da tutti gli altri nodi: *Giro gli archi e applico una DFS dal nodo s verso tutti gli altri --> O(m+n)*
- Ordinare un vettore V[1:n] di n bit (V[i] € {0,1}): *IntegerSort --> O(n)*
- Aggiungere $\sqrt{n}$ elementi ad un heap binario di n elementi: *Aggiungo $\sqrt{n}$ elementi nell'heap binario tramite insert di ogni elemento --> O($\sqrt{n}$ * n log n)



![[Pasted image 20241115113554.png]]

```
Algoritmo(A):
	Creo un vettore ausiliario Y di lunghezza n
	n = size of A
	if A[n] == 0:
		Y[n] = -1
	for K = n-1 to 1 do:
		if A[k] == 1
		Y[k] = i
	else
		Y[k] = Y[k+1]
	return Y

Query(Y, i):
	return Y[i]
	
```



![[Pasted image 20241115113957.png]]

*Idea*: Per trovare la strategia migliore, bisogna confrontare d(s,t) con cost(v) per ogni $v\in V$

cost(v) = d(s,v) + Tv + $\sigma_v \cdot d(v,t)$, dove:
- se $v \in V$ --> $v=x$ e $Tv = Tx$ e $\sigma_v = \sigma_x$
- se $v \in V$ --> $Tv = 0,  \sigma_v = 1$

La distanza d(s,v) si può calcolare in tempo O(m+n log n) usando Dijkstra. Mentre per trovare d(v,t), l'idea è quella di invertire gli archi del grafo G e far partire l'algoritmo di Dijkstra con sorgente t. I tempo costante possiamo accedere alle distanza calcolate


```
Algoritmo(A):
	Dijkstra(G,s) --> O(m + n log n)
	Dijkstra(G,t) --> O(m + n log n)
	z = arg min (cost v) --> O(n)
	return cost(z) --> O(1)
	

```




#### Appello 2 04-07-2023

![[Pasted image 20241115115214.png | 600]]


*B)*
- $T(n) = 2T(n/4) + \sqrt n$  -->  $n^{\log_4 2}$ vs $\sqrt n$  -->  $T(n) = \Theta(\sqrt n \cdot \log n)$
- $T(n) = T(n+1) + \sqrt n$  -->  $T(n) = \Theta(n \sqrt n)$


*C)* 
- In un grafo diretto rappresentato con matrice di adiacenza, calcolare i nodi raggiungibili da un nodo specifico s: *DFS a partire dal nodo s e tengo conto dei nodi che raggiunge --> $n^2$
- In un grafo non orientato e pesato, individuare il nodo a distanza massima da un nodo v: *Applico Dijkstra dal nodo v verso tutti gli altri nodi e faccio il max tra tutte le distanze --> O(m + nlogn)*
- In un albero AVL di n nodi, trovare il secondo minimo: *Faccio Findmin per trovare il minimo e poi applico la funzione "successore" per trovare il secondo minimo --> O(logn)*
- In un vettore ordinato, calcolare il numero di nodi di valore minimo: *Faccio una ricerca binaria --> O(logn)*



![[Pasted image 20241115120146.png]]

```
BenCol(nodo v, color)
	if v == NULL
		return 0
	if color == B or (color == G and v.col == G)
		return 1 + BenCol(sx(v), v.col) + BenCol(dx(v), v.col)
	return 0

```



![[Pasted image 20241115120457.png]]

*Idea*: Calcolare attraverso Dijkstra l'SPT radicato in Sa e l'SPT radicato in Sb. Così otteniamo le distanze dalle 2 sorgenti verso tutti i nodi $x \in V$

$cost_{A{(x)}} = d(S_{a,}x) = \sum\limits_{e \in E}$ $(W_{a}(e) = C^a_e$ 

$cost_{B{(x)}} = d(S_{b,}x) = \sum\limits_{e \in E}$ $(W_{b}(e) = C^b_e$ 

Per ogni nodo x, trovo il cammino minimo, e vado a confrontare $\Delta(A)$  e  $\Delta(B)$ con $cost_A(x)$ e $cost_B(x)$. Se il costo è superiore per tutti i nodi x, allora non esiste un nodo in cui Alice e Bob si possono incontrare


```
Algoritmo:
	Dijkstra(G, Sa) --> O(m + nlogn)
	Dijkstra(G, Sb) --> O(m + nlogn)
	for each x do
		A = cost_A(x)
		B = cost_B(x)
		if A <= Delta(A) and B <= Delta(B):
			return A, B, x
	return -1
	
```



#### Esame 3 25-07-2023

![[Pasted image 20241115121623.png | 600]]


*B)*
- $T(n) = T(\frac{99}{100}n)+n$  -->  $\log_\frac{100}{99}1$  vs  $n$  -->  $T(n) = \Theta(n)$
- $T(n) = T(n-1)+n^3$  -->  $T(n) = \Theta(n^4)$


*C)* 
- In un grafo diretto dire se esiste un nodo t che non può essere raggiunto da almeno un nodo s: *Applico una DFS totale e controllo se esiste il nodo t non è raggiunto da un qualsiasi nodo s --> O(m+n)*
- In un grafo non orientato e pesato, individuare il cammino più corto da s a t che non passa per uno specifico nodo w: *Dijkstra da s a t controllando che non passi per w --> O(m+nlogn)*
- Costruire un albero AVL contenente n chiavi fornite in input: *Faccio n inserimenti con rotazioni --> O(nlogn)*
- Fondere due heap binari, uno contenente $n^2$ nodi e l'altro $n$ nodi: *Faccio il merge di due heap O(nlogn)*


![[Pasted image 20241115133457.png]]

*Idea*:
Creare un grafo ausiliario G' a livelli, più precisamente con 2 livelli. Appena Ciano incontra un nodo con un bottone può decidere se premere il bottone e andare nel secondo livello oppure continuare nel primo livello (se l'arco successivo è ON). Nel secondo livello, si invertono ON e OFF, quindi se Ciano preme il bottone perchè davanti a se l'arco è OFF e non può procedere, premendo il bottone andrà nel secondo livello dove potrà andare avanti. Ciano può ripetere questo processo finchè non vince.

*Definizione di G' = (V', E')*
*Nodi*:
- $|V'| = 2|V| --> V' = V1' + V2'$  - - > O(n)
- Un nodo finale t'

*Archi*:
- Per ogni nodo $u \in G$ bottone aggiungo l'arco (U1', U2') dove $U1' \in V1'$ e $U2' \in V2'$ 
- Per ogni arco $(u,v) \in G$ ho l'arco $(U1', V1') \in G'$ --> $\sigma(u, v) = ON$
- Per ogni arco $(u,v) \in G$ ho l'arco $(U2', V2') \in G'$ --> $\sigma(u, v) = OFF$
- Due archi $(T_{1}, T')$ e $(T'_{2}, T)$ 
--> m' = m+2 * O(n) = O(m)

*Proprietà*:
Esiste un cammino in G da s a t se e soltanto se esiste un cammino da s' a t' in G'. Per trovare questo cammino si può effettuare una visita BFS o DFS, entrambe con costo O(n+m), poichè il numero di livello è costante, ovvero 2



#### Esame 4 12-09-2023

![[Pasted image 20241115135005.png]]


*B)*
- $T(n) = 4T\frac{n}{16} + n^2$ --> $n^{\log_{16} 4}$ vs $n^2$  -->  $T(n) = \Theta(n^2)$
- $T(n) = T(\sqrt n) +1$ --> $T(n) = \Theta(\log \log n)$

*C)*
- Dato un grafo diretto G, stabilire se tutti i nodi possono raggiungere un nodo specifico t: *Faccio una visita DFS dal nodo t verso tutti i nodi --> O(m+n)*
- In un grafo non orientato, completo e pesato, calcolare l'albero dei cammini minimi con sorgente s: *Dijkstra dal nodo s --> O(m + nlogn)*
- Ordinare un vettore di n interi compresi fra $n$ e $n^2$: *RadixSort --> $O\left(n \cdot \frac{\log n^2}{\log n}\right)$ = $O(n)$
- Fondere due alberi AVL, uno contenente n nodi e l'altro logn nodi: *Faccio logn inserimenti ognuno di costo logn --> O(logn * logn)


![[Pasted image 20241115135926.png]]

```
ContaNodi(nodo v, h1, h2, h):
	if v == NULL
		return 0
	if sx(v) == NULL and dx(v) == NULL
		return 0
	sx = ContaNodi(sx(v), h1, h2, h+1)
	dx = ContaNodi(dx(v), h1, h2, h+1)
	if h1 <= h <= h2
		return 1+sx+dx
	else:
		return sx+dx
	
```



![[Pasted image 20241115140151.png]]

*Idea*:
Ordino con l'IntegerSort O(n), poi $\forall i = 1, ..., n$ faccio la ricerca binaria

*Algoritmo*:

```
Felice(A):
	IntegerSort(A)
	for i=1 to n do
		K=A[i]^2
		j = ricercabinaria(A, i, n, K)
		if j != -1:
			return True
	return False
	
```



#### Esame 5 27-09-2023

![[Pasted image 20241115140448.png]]


*B)*
- $T(n) = 7T(n/8)+n$ -->   $n^{\log_{8} 7}$ vs $n$ --> $T(n) = \Theta(n)$
- $T(n) = T(n-1) + n^2$ --> $T(n) = \Theta(n^3)$


*C)*
- Costruire un heap binario contenente n chiavi prese in input: *Heapify --> O(n)*
- In un grafo orientato, capire se c'è un cammino da s a t di al più K archi che evita un nodo specifico w: *Faccio una BFS da s verso t senza passare per w aggiungendo al più K archi --> O(m+n)*
- Trovare il K-esimo minimo in una lista ordinata di n elementi (implementata con record e puntatori): *Ricerca Lineare O(n)*
- Fondere due heap binomiali contenenti rispettivamente $n$ e $n^2$ nodi: *Utilizzo il merge e poi utilizzo ristruttura --> O(log^2 n)*


![[Pasted image 20241115141907.png]]

*Idea*:
L'idea è di confrontare la distanza da s a t con la minima distanza cost(vi) dove
$cost(vi) = d(s,p) + 3 + d(ui, t)$

Essendo un grafo pesato, con pesi tutti 1, possiamo usare una BFS per calcolare le distanze. Per calcolare d(ui,t) invertiamo gli archi del grafo e facciamo una BFS con sorgente t.

```
Algoritmo
	BFS(G,s)
	BFS(G,t)
	z = arg min cost(x)
	d = d(s,t)
	if cost(z) > d then
		return d
	else
		return cost(z)
		
```




![[Pasted image 20241115142218.png]]

```
Oracolo(A)
	Sia Y un array ausiliario di dim n=len(A)
	c = 0
	for i=1 to n-1 do
		if A[i] == 1
			c = 0
			Y[i] = c
		else
			c += 1
			Y[i] = c
	for j = n-2 to 1 do
		if A[j] == 1
			Y[j] = 0
		if A[j] == 0 and A[j+1] == 1:
			continue
		else:
			Y[j] = Y[j+1]
	return Y

Query(Y, i)
	return Y[i]
	
```




#### Esame 6 30-01-2024

![[Pasted image 20241115145638.png]]

*B)*
- $T(n) = T\frac{n}{8}+ 8$  -->  $n^{\log_{8} 1}$ vs 8 --> $T(n) = \Theta(\log n)$ 
- $T(n) = T(n-1)+n^3$ --> $T(n) = \Theta(n^4)$

*C)*
- Costruire un albero AVL contenente n chiavi prese in input: *Faccio n inserimenti con rotazioni --> O(n log n)*
- Ordinare n interi compresi tra 1 e $n^4$: *RadixSort --> $O(n \cdot (\log n^{4)}) / (\log n)$
- Dato un BST di n nodi, restituire tutte le chiavi associate ai nodi in ordine crescente: *Faccio una DFS simmetrica --> O(n)*
- In un grafo orientato, capire se c'è un cammino da s a t al più di K archi che passa per un nodo specifico w: *Faccio una BFS aggiungendo al più K archi e passando per w --> O(m+n)*


![[Pasted image 20241115150323.png]]

*Idea*:
Dall'alto tengo traccia dei valori degli antenati, mentre dal basso il numero di nodi che soddisfano la condizione

```
ContaSumAnt(nodo v, Delta, sum)
	if v == NULL:
		return 0
	sum += v.val
	if sum >= Delta:
		return 1 + ContaSumAnt(sx(v), Delta, sum) + ContaSumAnt(dx(v), Delta, sum)
	else
		ContaSumAnt(sx(v), Delta, sum) + ContaSumAnt(dx(v), Delta, sum)
		
```



![[Pasted image 20241115150607.png]]

```
Oracolo(A)
	n = len(A)
	B = [0]*n
	C = [0]*n
	num_0 = 0
	num_1 = 0
	for k=1 to n-1 do
		if A[k] == 0:
			num_0 += 1
			B[k] = num_0
			C[k] = num_1
		else
			num_1 += 1
			B[k] = num_0
			C[k] = num_1
	return B,C
	
```




#### Esame 7 19-02-2024

![[Pasted image 20241115150825.png]]


*B)*
- $T(n) = 4T\frac{n}{2}+ n^{9/5}$  -->   $n^{\log_{2} 4}$ vs $n^{9/5}$ --> $T(n) = \Theta(n^2)$
- $T(n) = T(n-1) + T(n-2) +1$ --> $T(n) = O(2^n)$  o  $T(n) = \Theta(\phi ^ n)$


*C)*
- Costruire un heap binomiale con n chiavi: *Faccio n inserimenti ripetuti --> O(n log n)*
- Ordinare n interi compresi fra 1 e n log log n: *RadixSort --> O(n)*
- In un grafo orientato, capire se tutti i nodi possono raggiungere due specifici nodi t1 e t2: *Inverto gli srchi e faccio 2 BFS da t1 e t2 --> O(n+m)*
- In un grafo pesato e non orientato, capire se esiste un cammino da s a t che oltre ad essere minimo passa per uno specifico nodo u: *Dijkstra --> O(m + n log n)*


![[Pasted image 20241115151400.png]]

```
Problema_Sum(A):
	sum_A = 0
	for i=1 to n-1 do
		sum_A += A[i]
	sum_par = 0
	for j=1 to n-1 do
		sum_par += A[j]
		sum_A -= A[j]
		if sum_par > sum_A:
			return j
			
```



#### Esame 8 13-06-2024

![[Pasted image 20241127191137.png]]


*B)*
- $T(n) = 2T\frac{n}{4}+ n$ 
Soluzione = $\Theta(n)$

- T(n) = $2T(n-2)+1$
Soluzione = $\Theta(2^{n/2})$


*C)*
- Calcolare l'n-esimo numero di Fibonacci: *Fibonacci 6* --> $\Theta(\log n)$ 
- Costruire un heap binomiale con n chiavi: *Faccio n inserimenti ripetuti --> O(n log n)*
- Capire se in un grafo diretto esistono due nodi $s$ e $t$ tale che non c'è nessun cammino da $s$ a $t$: *BFS* --> $O(m \cdot n)$ 
- Dato un grafo diretto esistono due nodi $s$ e $t$ tale che non c'è nessun cammino da $s$ a $t$ che comincia con un arco rosso e poi usa solo archi blu: 

![[Pasted image 20241127191957.png]]



![[Pasted image 20241127192500.png]]


*Idea*:
Progettare un algoritmo ricorsivo che tenga conto del valore massimo dei nodi con una variabile (max_val) lungo il cammino. Se, arrivati ad una foglia, sommando max_val con il valore della foglia si rispetta la condizione, aumento il contatore delle foglie buone, altrimenti vado avanti.

*Algoritmo*

```
Algo(T, u.val, v.val, max_val) --> foglie_buone
	if v == null:
		return 0

	sx = Algo(sx(v), u.val, v.val, max_val)
	dx = Algo(dx(v), u.val, v.val, max_val)

		
	if (sx(v) == NULL and dx(v) == NULL) and (v.val + max_val) >= 100):
		foglie_buone += 1
		return dx + sx
	else:
		max_val = max(max_val, v.val)
		return dx + sx 

```



#### Esame 9 16-07-2024
![[Pasted image 20241128142632.png]]


*B)*
- $T(n) = 2T\frac{n}{2}+ n^{1.5}$ 
Soluzione = $\Theta(n^{1.5})$ 

- $T(n) = T(n-2) + n^2$ 
Soluzione = $\Theta(n^3)$ 


*C)*
- Calcolare l'n-esimo numero di Fibonacci: *Fibonacci 6* --> $\Theta(\log{n})$ 
- Ordinare n interi compresi fra 1 e $n^2$: *RadixSort* -->  $O\left(n \cdot \frac{\log n^2}{\log 1}\right)$ 
- Calcolare la distanza da $s$ a $t$ in un grafo diretto pesato in cui ogni arco può avere peso 1 o 2: *Dijkstra* --> $O(m + n\log n)$ 
- Dato un grafo non orientato e pesato, un nodo $v$ e un valore L, capire se $v$ è a distanza al più L da tutti gli altri nodi: 


#### Esercizio 2

![[Pasted image 20241128160934.png]]


*Idea*:
Scorrere l'array inizialmente da sinistra verso destra, contando le colonnine più vicine. Successivamente scorrere l'array da destra verso sinistra, modificando le colonnine vicine tenendo conto dei calcoli effettuati prima. In questo modo l'algoritmo costa O(n)

```

Colonnina(A):
	n = len(A)
	B = [0] * n       ## Inizializzazione del vettore di output
	col_vicina = -1   ## Nessuna colonnina trovata inizialmente

	for i in range(n):
		if A[i] == 1:
			col_vicina = i
		if col_vicina != -1:
			B[i] = col_vicina


	col_vicina = -1
	for i in range(n-1, -1, -1):
		if A[i] == 1:
			col_vicina = i
		if col_vicina != -1:
			if B[i] == 0 or abs(i - col_vicina) < abs(i - B[i]):
				B[i] = col_vicina

	return B
	
```


*Spiegazione*
Il primo ciclo for è il passaggio da sinistra a destra, per verificare se esiste una colonnina e memorizzare la posizione. Il secondo ciclo for, resettando la variabile, parte dalla fine dell'array per andare ad aggiornare B(i) confrontando le distanze


*Correttezza*
L'algoritmo è corretto perchè scansiono l'array 2 volte, andando a modificare eventuali errori nella prima "passata". Rispetta il costo imposto dall'esercizio



#### Esercizio 3
![[Pasted image 20241128161956.png]]


*idea*:
Costruire un grafo a livelli G', con precisamente 5 livelli, in cui ad ogni nodo visitato si eliminano tutti gli archi di valore minore. Se, effettuando una BFS, si raggiunge il nodo $t$, allora esiste un cammino temporale da $s$ a $t$

*Definizione di G'*
*Nodi*
$|V'| = |V| - (|V| < |V'|)$

*Archi*
Per ogni livello $G^j$ con $j \in {1,2,3,4,5}$ ad ogni livello si rimuovono gli archi con valore minore stretto dell'arco appena visitato




#### Esame 10 09-09-2024

![[Pasted image 20241129155147.png]]


*B)*
- $T(n) = 2T\frac{n}{2}+ \sqrt n$ 
Soluzione: $\Theta(n)$ 

- $T(n) = T(n-1) + n^3$ 
Soluzione = $\Theta(n^4)$


*C)*
- Cercare un elemento in una lista ordinata implementata con record e puntatori: *Ricerca sequenziale* --> $O(n)$
- Restituire gli elementi in un BST in ordine decrescente di chiavi: *Ricerca Asimmetrica* --> $O(\log n)$ 
- Capire se in un grafo diretto e pesato quanto è lungo il cammino più corto da $s$ a $t$ che non usa una certa coppia di archi $e1$ ed $e2$: *Componenti fortemente connesse* --> $\Theta(n + m)$ 
- Dato un grafo non diretto con nodi rossi e blu e due nodi $s$ e $t$, dire se esiste un cammino da $s$ a $t$ che usa solo archi bicolorati (archi i cui estremi sono di colore diverso):


#### Esercizio 2

![[Pasted image 20241129160222.png]]

*Idea*:
Se un numero appare più di $n/2$ volte non sarà possibile permutare gli elementi per evitare che due numeri uguali siano vicini. Per permutare gli elementi l'idea è quella di inizialmente ordinarli, poi posizionare i numeri pari in indici pari ed i numeri dispari in indici dispare.

*Codice*
```
A = [1,1,3,2,2,5,6,11,42,10]

  

def Permutazione(A):

	# Passo 1: Calcola le frequenze
	freq = {}
	for num in A:
	freq[num] = freq.get(num, 0) + 1

	# Trova la frequenza massima
	max_freq = max(freq.values())

	# Passo 2: Controlla se è impossibile
	n = len(A)

	if max_freq > (n + 1) // 2:
		return "Impossibile"
	else:
		# Passo 3: Permutazione
		B = [0] * n
		i = 0 # Indice pari
		j = 1 # Indice dispari
		k = 0

	for k in range(0, n):
		if (A[k] % 2 == 0):
			B[j] = A[k]
			j += 2
			k += 1
		else:
			B[i] = A[k]
			i += 2
			k += 1
	
	return B

  

print(Permutazione(A))
```

*Conclusione*
L'algoritmo funziona in spazio O(n)O(n)O(n) e tempo O(n)O(n)O(n) ed è corretto poiché garantisce che:

1. Verifica se la permutazione è possibile.
2. Se possibile, costruisce una disposizione che evita numeri uguali adiacenti.



#### Esercizio 3

![[Pasted image 20241129161934.png]]

*Idea*:
Costruire un algoritmo ricorsivo che, grazie ad una variabile che conta il colore del nodo visitato precedentemente, verifica se esiste un cammino ben colorato. 

```

Alternato(T, v.col, color):

	if v == NULL:
		return 0
	
	sx = Alternato(sx(v), v.col, color)
	dx = Alternato(dx(v), v.col, color)

	if (sx(v) == NULL and dx(v) == NULL):
		if (v.col != color):
			if (v.col == 1):
				foglie_1 += 1
			else:
				foglie_2 +=1
		else:
			return 0
	else:
		if (v.col == color):
			return 0
		else:
			color = v.col
			return dx+sx
	
	return foglie_1 and foglie_2
			
		
```



#### Esame 11 24-09-2024

![[Pasted image 20241203105407.png]]


*B)*
- $T(n) = 3T(n/2)+n$ 
Soluzione: $T(n) = \Theta(n^{1.5})$

- $T(n) = 2T(n-2)+n$
Soluzione: $O(2^{n/2})$ 


*C)*
- Cercare in un albero AVL l'elemento più grande fra quelli più piccoli di un elemento dato $x$: *Predecessore* --> $O(\log n)$ 
- Aggiungere 2 elementi ad un heap binomiale di $n$ elementi: *Insert* --> $O(log_{d}n)$  
- Calcolare in un grafo diretto e pesato il nodo più lontano da un nodo $t$: *Dijkstra* --> $O(m \cdot n log n)$ 
- Dato un vettore di $n$ numeri, trovare i $k$ elementi più grandi: **


#### Esercizio 2

![[Pasted image 20241203110208.png]]

*Idea*:
Progettare una struttura dati che, con l'aiuto di una variabile, confronta quest'ultima con il costo di A(i), se il fabbisogno $x$ è maggiore o uguale alla variabile, si restituisce i. 

*Algoritmo*
```
A = [5, 18, 7, 2, 25, 30, 1, 4, 18, 6]

def StrutturaDati(A, x):
	n = len(A)
	somma = 0

	for i in range(n):
		somma += A[i]
		if somma >= x: 
				return i   //O(n)
			else:
				i += 1

  
def query(x):
	return StrutturaDati(A, x)

print(query(89))

```


*Correttezza*
L'algoritmo è giusto poichè rispetta il costo $O(n)$, dato che scorre al massimo una volta l'array



#### Esercizio 3

![[Pasted image 20241203110757.png]]
![[Pasted image 20241203110808.png]]

*Idea*
L'idea per questo algoritmo è progettare un grafo $G'$ a livelli, esattamente con 2 livelli. Il primo per verificare il Percorso senza inversioni, il secondo livello per verificare il Percorso con l'inversione di un hub configurabile. Utilizziamo una visita DFS/BFS per verificare questa proprietà anche se gli archi di un determinato switch sono invertiti. Se incontriamo uno specifico hub configurabile, switchamo livello cambiando gli archi entranti e uscenti di quest'ultimo, ovviamente il primo percorso a raggiungere un hub di destinazione è il migliore a livello di costo computazionale. L'idea alla base è confrontare le due casistiche utilizzando un grafo a livelli.

*Costruzione di G'*
$|V| = |V'|$
$2 |E| = |E'|$ 


#### Esame 12 21-01-2025

![[Pasted image 20250122120841.png]]


#### Esercizio 2

*B)*
$T(n) = 2T\frac{n}{2}+ n$

- Soluzione = Teorema master $n ^ {\log_{2}2}$  vs  $n$  --> $\Theta n\log n$ 


$T(n) = T(n-1) + n^2$ 

- Soluzione $\Theta(n^3)$ 


*C)*
- Cercare un elemento in una lista ordinata implementata con record e puntatori: *Ricerca Sequenziale* --> $O(n)$
- Ordinare $n$ interi compresi tra 1 e $n^2$: *RadixSort* -->  
- Capire in un grafo diretto e pesato quanto è lungo il cammino più corto da $s$ a $t$ che non passa per un certo vertice $u$: *Dijkstra togliendo il nodo $u$* --> $O(n \cdot m \log n)$ 
- In un grafo orientato e pesato con pesi tutti maggiori di 100, calcolare la distanza da $s$ a $t$: 


#### Esercizio 2
![[Pasted image 20250122124705.png]]

*Idea*
Ordinare l'array in input con il MergeSort (costo $O(n \log n$)).
Una volta ordinato l'array, sommare il primo elemento con l'ultimo, eseguendo questa somma per tutti gli elementi dell'array. 

*Algoritmo*
```
def can_partition(A):
    # Ordina l'array
    A = sorted(A)
    n = len(A)
    
    # La somma obiettivo è data dalla prima e ultima coppia
    target_sum = A[0] + A[-1]
    
    # Confronta le somme delle coppie
    for i in range(n // 2):
        if A[i] + A[n - i - 1] != target_sum:
            return False
    
    # Se tutte le coppie rispettano la somma
    return True

# Esempio di test
A = [4, 1, 3, 2, 6, 5]
print(can_partition(A))  # Output: True (esempio con somma obiettivo 7 per tutte le coppie)

```


#### Esercizio 3

![[Pasted image 20250124142638.png]]

*Idea*
Utilizzare un Grafo ausiliario $G'$, dove la cardinalità dei nodi in $G$ li duplichiamo in $G'$ --> $|V'| = 2|V|$, questo serve per dividere i due costi dei nodi. In questa divisione, aggiungeremo due archi da un nodo diviso all'altro di costo zero, in modo che si può intercambiare il colore dell'arco. Gli archi di $G'$ rimangono della stessa quantità in $G$, con una sola differenza, che il costo degli archi $W_{(e)} = W_{(e)} + W_{(v)}$, in modo tale da utilizzare Dijkstra solo una volta in modo efficace, calcolando il costo degli archi minimo, cioè il costo complessivo. 

*Formalizzazione*
Sia $G'$ un grafo ausiliario strutturato nel seguente modo:
- $|V'| = 2|V|$ 
- $\forall e \in G, \exists e \in G' \implies w_{(e')} = w_{(e)} + w_c(v)$  
- $\forall V_1 \land V_{2 } | \ \exists e(V_{1}) \land e(V_{2})' = 0$  in modo da intercambiare gli archi $c1$ e $c2$

*Correttezza*
L'algoritmo è corretto poichè utilizza *Dijkstra* per trovare i costi degli archi minimi, che nel nostro caso, il costo è la somma del costo degli archi + il costo del nodo in base al colore

