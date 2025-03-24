#Algoritmi 

#### BFS

```
BFS(vertice s)
	rendi tutti i vertici non marcati
	T <-- albero formato da un solo nodo s
	Coda F
	marca il vertice s
	F.enqueue(s)
	while(not F.isEmpty()) do
		u <-- F.dequeue()
		for each (arco(u,v) in G) do
			if (v non è ancora marcato) then 
				F.enqueue()
				marca il vertice v
				rendi u padre di v in T
	return T
	
```


#### DFS

```
DFSricorsiva(vertice v, albero T)
	marca e visita il vertice v
	for each(arco(v,w)) do
		if(w non è marcato) then
			aggiungi l'arco (v,w) all'albero T
			DFSricorsiva(w,T)
			
```


#### DAG e Ordinamento topologico
*DAG* = Grafo diretto senza cicli
*Ordinamento topologico* = Reti delle "dipendenze", nodi = compiti da svolgere, arco(u,v) = u deve essere eseguito prima di v

Come calcolare ordinamento topologico?
Fai una visita DFS e restituisci i nodi in ordine decrescente rispetto ai tempi di fine visita post(v)
