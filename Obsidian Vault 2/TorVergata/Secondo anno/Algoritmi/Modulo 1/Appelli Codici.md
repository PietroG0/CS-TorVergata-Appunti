#Algoritmi 

1) Sia A[1:n] un vettore di n interi tale che tutti gli elementi tranne O(2/3) elementi sono compresi fra 1 e 10n. Si progetti un algoritmo che ordini A in tempo lineare.

```
OrdinaA(A)
	X vettore ausiliario di lunghezza K = n-n^2/3
	Y vettore ausiliario di lunghezza n^2/3

	j = 1, v = 1

	for i=1 to n do
		if A[j] < 10n
			aggiungi A[j] in X[j], j++
		else
			aggiungi A[j] in Y[v], v++

	IntegerSort(X)
	MergeSort(Y)
	Unisci i 2 array ordinati 
```


2) Sia A[1:n] un vettore di n interi positivi. Diremo che un elemento A[i] è felice al quadrato se esiste un indice j tale che A[j] = A[i^2]. Si progetti un algoritmo che dato A dica in tempo O(n log n) se esiste almeno un elemento felice al quadrato. 

*Idea*
Ordino l'array con l'IntegerSort O(n), poi per ogni i faccio la ricerca binaria

```
Felice(A)
	IntegerSort(A)
	for i=1 to n do
		K = A[i]^^2
		J = RicercaBinaria(A, i, n, K)
		if J != 1:
			return True
		return False

```


3) Sia A[1:n] un vettore di n bit. Si progetti un oracolo che puo essere costruito in tempo O(n) e che sia in grado di rispondere in tempo costante a: q(i): dai i, restituire il piu piccolo indice j >= i tale che A[i] = 1. Se tale indice j non esiste allora la risposta alla domanda è -1

```
Algoritmo(A):
	Creo un vettore ausiliario Y di lunghezza n
	n = len(A)

	if A[n] == 0:
		Y[n] = -1
	for K = n-1 to 1 do:
		if A[k] == 1:
			Y[k] = i
		else
			Y[k] = Y[k+1]
	return Y

Query(Y,i):
	return Y[i]
			
```

4) 0. Sia A[1 : n] un vettore di n numeri positivi. Progettare un algoritmo che in tempo O(n) e memoria ausiliaria costante trova il più piccolo indice i tale che la somma dei primi i elementi di A è maggiore della somma dei restanti elementi in A[i + 1 : n]. Si fornisca lo pseudocodice dettagliato dell’algoritmo.

```
def SommaBinaria(A):
    n = len(A)
    
    # Calcoliamo la somma totale degli elementi di A
    somma_totale = sum(A)
    
    sinistra = 0
    destra = n - 1
    
    while sinistra <= destra:
        # Calcoliamo il punto medio dell'intervallo di ricerca
        medio = (sinistra + destra) // 2
        
        # Calcoliamo la somma dei primi i elementi
        somma_parziale = sum(A[:medio+1])
        
        # Calcoliamo la somma dei restanti elementi
        somma_restante = somma_totale - somma_parziale
        
		# Se la somma dei primi i elementi è maggiore della somma dei restanti
        if somma_parziale > somma_restante:
            # Continuiamo la ricerca a sinistra
            destra = medio - 1
        else:
            # Continuiamo la ricerca a destra
            sinistra = medio + 1
    
    # L'indice trovato sarà il punto in cui la somma dei primi i elementi supera la somma dei restanti
    return sinistra

# Esempio di utilizzo
A = [1, 2, 3, 4, 5]
indice = trova_indice_minimo_sbilanciamento(A)
print("Indice minimo di sbilanciamento:", indice)

```


5) Sia $A\left[ 1:n \right]$ un vettore di n numeri. Un k-picco in A è un indice $m \in \{ k+1,...,n-k \}$ ta le che la sequenza di elementi A[m-k;m] è strettamente crescente, mentre la sequenza di elementi A[m;m+k] è strettamente decrescente. Si progetti un algoritmo che dato A calcola il più grande valore di k per cui A contiene un k-picco. L'algoritmo deve avere complessità O(n). 

```
K-Picco(A):
	n = len(A)
	inizio = 1
	fine = n

	while inizio < fine:
		medio = (inizio+fine) // 2

	if SequenzaCrescente(A, medio) and SequenzaDecrescente(A, medio, k_picco):
	k_picco = max(k_picco, max-1)
	inizio = medio+1
	
	elif A[medio] <= A[medio+1]:
		inizio = medio+1
	else:
		inizio = medio-1
	

Def SequenzaCrescente(A, indice):
	for i in range(indice-1, 0, -1):
		if A[i] >= A[i+1]:
			return false
	return True


Def SequenzaDecrescente(A, indice, k):
	for i in range(indice+1, n):
		if A[i] >= A[i-1]:
			k = min(k, i-indice)
			if k <= 0:
				return False
	return True

```


6) 0. Sia A[1 : n] un vettore di n bit, dove quindi A[i] ∈ {0, 1} per ogni i. Si progetti una struttura dati che prende in input il vettore A e sia in grado poi di rispondere a query del seguente tipo:
    
    • Differenza(i,j): dati due indici i, j ∈ {1, 2, . . . , n} restituisce la differenza in modulo fra il numero di uni e di zeri nel sottovettore A[i : j].
    
    La struttura dati deve poter essere costruita in tempo O(n) e l’algoritmo di query deve richiedere tempo constante. Si forniscano i due pseudocodici dettagliati dell’algoritmo che dato A costruisce la struttura dati, e dell’algoritmo di query.

```
Oracolo(A):
	n = len(A)
	B = [0]*n
	C = [0]*n
	num_0 = 0
	num_1 = 0

	for K = 1 to n-1 do
		if A[k] == 0:
			num_0 += 1
			B[k] = num_0
			C[k] = num_1
		else
			num_1 += 1
			B[k] = num_0
			C[k] = num_1
	return B, C


Query(B,C,i,j):
	n_zeri = 0
	n_uni = 0
	if i == 0
		n_zeri = B[j]
		n_uni = C[j]
	else
		n_zeri = B[j] - B[i-1]
		n_uni = C[j] - C[i-1]
	if n_zeri > n_uni:
		risultato = n_zeri - n_uni
	else
		risultato = n_uni - n_zeri

```


## Grafi

1) 0. Sia G = (V, E) un grafo diretto con n nodi ed m archi. Ci sono Alice e Bob che vogliono incontrarsi in un nodo di G. Inizialmente, Alice si trova sul nodo $sA$ ed ha a disposizione $∆A$ monete di tipo A, mentre Bob si trova sul nodo sB ed ha a disposizione $∆B$ monete di tipo B. Ad ogni arco e ∈ E, sono associati due interi, $cAe$ e $cBe$ , che rappresentano rispettivamente il numero di monete di tipo A che Alice deve pagare per attraversare e, e il numero di monete di tipo B che Bob deve pagare per poter attraversare e.
    
    Progettate un algoritmo di complessità O(m + n log n) che calcola, se esiste, un modo per far incontrare Alice e Bob.

Idea: Trovare attraverso Dijkstra tutti i cammini minimi, se il costo è superiore per ogni nodo x, allora non esiste un nodo in cui alice e bob possono incontrarsi 

```
1.  Dijkstra(G, SA) // SPT radicato in SA 
2.  Dijkstra(G, SB) // SPT radicato in SB 
3.  for each x do
4.      A = costA(x)
5.      B = costB(x)
6.      if A <= DeltaA and B <= DeltaB then
7.          return A, B, x
8.  return -1
```



2) Nell’ultimo gioco rilasciato dalla Mintendo, Super Ciano Bross si trova su un nodo s di un grafo orientato G = (V,E) con n nodi ed m archi, e deve raggiungere il nodo t per vincere il livello. Ogni arco e' associato inizialmente uno stato σ(e) ∈ {on,off}. Super Ciano puo attraversare solo gli archi che sono nello stato on. C’e inoltre un insieme di nodi B ⊆ V che contengono un bottone speciale. Se Ciano e' su un nodo b ∈ B puo' decidere di schiacciare il bottone e tutti gli archi invertono il proprio stato, quelli che erano nello stato on passano allo stato off e quelli che erano nello stato off passano nello stato on.

Progettate un algoritmo di complessita' O(m + n) che calcola, se esiste, una strategia per Super Ciano che lo porta a vincere il livello nel nodo t.

Idea: Creare un Grafo G', a 2 livelli, se Ciano non può procedere in un arco off, premendo il bottone si troverà nel secondo livello, dove tutti gli stati sono invertiti, seguendo questa procedura fino a completare il livello 

**Nodi**
- |V'| = 2|V| --> V' = V1'+V2'
- Un nodo finale T

**Archi**
- Per ogni nodo u€G bottone, aggiungo due archi (u1', u2') e (u2', u1') dove u1' € V1' e u2' € V2' 
- Per ogni arco (u,v) in G ho l'arco (u1', u1') € G' tale che lo stato è ON
- Per ogni arco (u,v) in G ho l'arco (u2', u2') € G' tale che lo stato è OFF

![[CianoOnL.png]]


3) Un labirinto e' modellato come un grafo non diretto G = (V,E). Voi siete nel nodo s e l’uscita si trova nel nodo t. Potete percorrere gli archi, spendendo un minuto per ogni arco. Nel labirinto inoltre c’e' un nodo speciale p che e' un teletrasporto, e un insieme di nodi U ⊆ V che sono uscite del teletrasporto. Se siete su p potete teletrasportarvi in un qualsiasi nodo q ∈ U a vostra scelta. Il tempo del teletrasporto e' di 3 minuti.
    
    Progettate un algoritmo efficiente che calcoli la strategia piu' veloce, se esiste, per uscire dal labirinto.


Idea: Ogni arco ha peso 1, calcolare attraverso la BFS il cammino da S a t con la minima distanza const(ui), dove const(ui) = d(s,p) + 3 + d(ui, t)
Per calcolare d(ui, t) invertiamo gli archi e facciamo una BFS con sorgente T

```
1.  BFS(G, s)
2.  BFS(G, t)
3.  z = arg(min(const(x))) // dove x è uno dei nodi uscita u
4.  d = d(s, t)
5.  if const(z) > d then
6.      return d
7.  else
8.      return const(z)
```



4) La rete stradale su cui viaggiate è modellata con un grafo orientato e pesato G = (V,E,w) dove il peso w(u,v) di un generico arco (u,v) € E rappresenta il tempo di percorrenza dell'arco. Voi siete su s € V e volete andare sul nodo t € V nel minor tempo possibile. La vostra macchina è equipaggiata con un moderno meccanismo di turbo. Se attivato lungo un arco, questo meccanismo permette di dimezzare il tempo di percorrenza dell’arco. Il meccanismo però può essere attivato una volta sola.

a) Mostrare che la soluzione migliore non consiste sempre nell'attivare il turbo lungo il cammino minimo in G da s a t.
b) Progettare un algoritmo efficiente che calcola una soluzione ottima, ovvero una strategia che vi porta a t nel minor tempo possibile.

Idea: Creare un grafo ausiliario G' a 2 livelli, poi mediante Dijkstra andremo a trovare il cammino minimo da s a t

![[TurboBL.png]]

**Archi**
- Per ogni arco (u,v) € G esiste un arco (u1', v1') € G' con peso w(u,v)
- Per ogni arco (u,v) € G esiste un arco (u1', v2') € G' con peso w(u,v)/2

**Proprietà** : Esiste un cammino minimo in G da s a t usando solo una volta il turbo se e soltanto se esiste un cammino minimo da s' a t' in G'

**Costo** : O(m*log(n)) ovvero il costo di Dijkstra



5) La vostra città è modellata come un grafo diretto e pesato G =(V,E,w). Voi siete nel nodo $s$ e dovete raggiungere il nodo $t$ dove si svolgerà l'esonero del corso di ASD. Ma siete in ritardo. Dovete fare in fretta. Per fortuna avete una bicicletta. Con la vostra bicicletta, attraversare un arco $e$ € E richiede tempo $w(e)$. La bicicletta non è il solo mezzo che potete usare. Sapete che ci sono dei nodi del grafo, i nodi dell'insieme X C V, in cui potete affittare scooter, monopattini e altra roba. Avete soldi per affittare un solo mezzo. Per ogni nodo x € X, conoscete due cose: il tempo $Tx$ che vi richiede lo scambio fra la bicicletta e il mezzo che si trova in x, e il fattore di $speed-up$ $Ox$ <= 1 del mezzo: con il mezzo preso nel nodo x il tempo di attraversamento di un arco $e$ scende da $w(e)$ a $Ox * w(e)$. Progettate un algoritmo che in tempo O(m+n log n), calcola la strategia che vi porta a t nel minor tempo possibile.

*Idea*
Per trovare la strategia migliore, bisogna confrontare d(s,t) con cost(v) per ogni v € V.

cost(v) = d(s,v) + $Tv$ + $Ov$ * d(v,t) , dove:
- se v€X --> v=x e $Tv$ = $Tx$ e $Ov = Ox$
 - se v!€X --> $Tv = 0$ e $Ov = 1$ 

La distanza d(s,v) si può calcolare in tempo O(m+n log n) usando Dijkstra. Mentre per trovare d(v,t), l'idea è quella di invertire gli archi del grafo G e far partire Dijkstra con sorgente T. In tempo costante possiamo accedere alle distanze calcolate.
Per ogni nodo v, in tempo costante accedo alla distanza d(s,v) e alla distanza d(v,t) e calcolo cost(v), ovvero il costo del cammino passando per il nodo v.

*Algoritmo*

```
Algoritmo:
	Dijkstra(G,s) --> O(m+n log n)
	Dijkstra(G,t) --> O(m+n log n)
	z = arg min(cost v) --> O(n)
	return cost(z)
```

## Alberi

1) 0. Sia T un albero binario con n, dove ogni nodo v di T ha un colore v.col che può essere Blu (B) o Giallo (G), e quindi v.col ∈ {B, G}. Diciamo che un nodo v ha antenati ben colorati se il cammino dalla radice al nodo v  è composto da una sequenza (potenzialmente vuota) di nodi di colore Blu seguita da una sequenza (potenzialmente vuota) di nodi di colore Giallo.
    
    Si progetti un algoritmo che dato T, restituisca il numero di nodi di T che hanno antenati ben colorati. Si assuma che T è rappresentato tramite una struttura dati collegata, con record e punta- tori, dove il record di ogni nodo, oltre al campo v.col, contiene anche il puntatore al figlio sinistro e al figlio destro del nodo. L’algoritmo deve avere complessità O(n). Si fornisca lo pseudocodice dettagliato.

Utilizzare una visita BFS/DFS tenendo conto dei colori dei genitori dei vari nodi

```
BenCol(nodo v, color)
	if v == null
		return 0
	if color == B V (color == G and v.col == G):
		return 1 + BenCol(sx(v), v.col) + BenCol(dx(v), v.col)
	return 0
```



2) 0. Sia T un albero binario con n nodi. Si progetti un algoritmo che dato T e due interi h1 e h2, con h1 ≤ h2, restituisca il numero di nodi non foglia di T che hanno profondità h tale che h1 ≤ h ≤ h2. Si assuma che T è rappresentato tramite una struttura dati collegata, con record e puntatori, dove il record di ogni nodo contiene il puntatore al figlio sinistro e al figlio destro del nodo.
    
    L’algoritmo deve avere complessità O(n). Si fornisca lo pseudocodice dettagliato.

Utilizzare una BFS/DFS, incremento il conteggio dei nodi solo se sono compresi tra h1 e h2, e solo se è un nodo non foglia 

```
ContaNodi(nodo v, h1, h2, h)
	if v == null
		return 0
	if sx(v) == null and dx(v) == null
		return 0
	sx = Contanodi(sx(v), h1, h2, h+1)
	dx = Contanodi(dx(v), h1, h2, h+1)
	if h1 <= h <= h2
		return 1++sx+dx
	else
		return sx+dx

```


3) 0. Sia T un albero binario con n nodi, dove ad ogni nodo v è associato un valore positivo val(v). Si progetti un algoritmo che dato T e un valore ∆, restituisca il numero di nodi di T la cui somma dei valori degli antenati è almeno ∆.
    
    Si assuma che T è rappresentato tramite una struttura dati collegata, con record e puntatori, dove il record di ogni nodo contiene il puntatore al figlio sinistro e al figlio destro del nodo. L’algoritmo deve avere complessità O(n). Si fornisca lo pseudocodice dettagliato.

*Idea*
Dall'alto tengo traccia dei valori degli antenati, mentre dal basso il numero di nodi che soddisfano la condizione


```
ContaSumAnt(nodo v, Δ, sum)
	if v == null
		return 0
	sum += v.val
	if sum >= Δ:
		return 1 + ContaSumAnt(sx(v), Δ, sum) + ContaSumAnt(dx(v), Δ, sum)
	else
		return ContaSumAnt(sx(v), Δ, sum) + ContaSumAnt(dx(v), Δ, sum)
```