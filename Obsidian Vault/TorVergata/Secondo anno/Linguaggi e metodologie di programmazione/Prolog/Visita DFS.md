#Linguaggi 


```
DFS

edge(a,b).
edge(b,c).
edge(c,d).
edge(a,e).
edge(e,f).
edge(f,k).
edge(f,c).

path(a,m).

path(X,Y,[X,Y]) :-
	edge(X,Y).

path(X,Y,[X|P_Z_Y]) :-
	edge(X,Z),
	path(Z,Y,P_Z_Y).


```


#### Struttura del codice
1) *Fatti*
	- Definiscono le connessioni tra i nodi del grafo usando predicati *arco(nodo1, nodo2).*

2) *Regole*
	- *percorso(nodo_iniziale, nodo_finale)*: Clausola obiettivo che specifica la ricerca del percorso
	- *percorso(nodo_corrente, nodo_finale, [nodo_corrente])*: Regola base che indica che il percorso da un nodo a se stesso è semplicemente il nodo stesso
	- *percorso(nodo_corrente, nodo_finale, [nodo_corrente|percorso_restante]*: Regola ricorsiva che esplora i nodi vicini.



*Algoritmo DFS*:
1) *Inizializzazione*:
	- Impostare il nodo corrente *X* su *nodo_iniziale*
	- Impostare il nodo finale *Y* su *nodo_finale*
	- Creare un insieme vuoto *visitato* per tenere traccia dei nodi già visitati

2) *Ricerca ricorsiva*:
	- Se *X* è uguale a *Y*, il percorso è stato trovato: restituire la lista [X] 
	- Se *X* è già presente in *visitato*, significa che è stato visitato in precedenza: tornare indietro (esplorare un altro ramo)
	- Aggiungere *X* a *visitato* per evitare di rivisitarlo
	- Ottenere i vicini di *X*
	- Per ogni vicino *Z*:
		- Chiamare ricorsivamente *percorso(Z, Y, percorso_restante)* per trovare il percorso da *Z* a *Y*
		- Se la chiamata ricorsiva ha successo (restituisce un percorso), prependere *X* al percorso e restituirlo

	- Se nessun vicino ha un percorso verso *Y*, il percorso non esiste: restituire *None*



#### Spiegazione del codice

- Ogni fatto *edge(X,Y)* rappresenta un arco diretto da *X* a *Y*
- *path(a,m)* è un fatto che indica che vogliamo trovare un percorso dal nodo *a* al nodo *m* 

*Regole per trovare un percorso*
- Il cuore del programma è il predicato *path(X, Y, Path)*, che calcola un percorso tra due nodi *X* e *Y* e restituisce il percorso come lista *Path*
- Il caso base della ricorsione: se esiste un arco diretto *edge(X, Y)* tra i nodi *X* e *Y*, il percorso è semplicemente [X,Y]
- Il caso ricorsivo: si cerca un percorso tra *X* e *Y*, passando attraverso un nodo intermedio *Z*. La logica funziona così:
	1) Si verifica se esista un arco *edge(X, Z)*
	2) Si cerca ricorsivamente un percorso da *Z* a *Y*, ottenendo il *percorso parziale* P_Z_Y
	3) Si costruisce il percorso completo come [X | P_Z_Y]

- La lista [X | P_Z_Y] significa che il nodo *X* è il primo elemento del percorso, seguito dal percorso che collega *Z* a *Y*

