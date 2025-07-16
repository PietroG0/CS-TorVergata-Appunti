#Algoritmi 


#### DFS
L’algoritmo di visita in profondità (DFS) parte da r e procede visitando nodi di figlio in figlio fino a raggiungere una foglia. Retrocede poi al primo antenato che ha ancora figli non visitati (se esiste) e ripete il procedimento a partire da uno di quei figli.

```
DFS(nodo r)
	Pila S
	S.push(r)
	while(not S.isEmpty()) do
		u <-- S.pop()
		if (u != null) then
			# visita il nodo u
			S.push(figlio destro di u)
			S.push(figlio sinistro di u)


```


#### DFS ricorsiva

```
DFSricorsiva(nodo r)
	if (r != null) then
		visita il nodo r
	DFSricorsiva(figlio sinistro di r)
	DFSricorsiva(figlio destro di r)
```

*Complessità* 
$O(n)$



#### BFS
L'algoritmo di visita in ampiezza (BFS) parte da r e procede visitando nodi per livelli successivi. Un nodo sul livello i può essere visitato solo se tutti i nodi sul livello i-1 sono stati visitati

```
BFS(nodo r)
	Coda C
	C.enqueue(r)
	while(not C.isEmpty()) do
		u <-- C.dequeue()
		if (u != null) then 
			visita il nodo u
			C.enqueue(figlio sinistro di u)
			C.enqueue(figlio destro di u)
			
```

*Complessità*
$O(n)$


#### Calcolo dell'altezza
Calcola (e ritorna) l'altezza di un albero binario con radice r

```
CalcolaAltezza(nodo r)
	if (r = null) then return -1
	sin = CalcolaAltezza(figlio sinistro di r)
	des = CalcolaAltezza(figlio destro di r)
	return 1 + max{sin, des}

```

*Complessità* 
$O(n)$

