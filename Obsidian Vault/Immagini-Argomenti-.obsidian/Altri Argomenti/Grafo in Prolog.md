
![[Pasted image 20241118160732.png | 500]]

Il grafo può essere rappresentato usando due predicati:
- path(X, Y). --> indica che esiste un percorso da X a Y nel grafo
- edge(X, Y). --> indica che c'è un arco tra X e Y nel grafo

Per definirlo in Prolog usiamo l'induzione. Questa può essere utilizzata per definire predicati più complessi, come la raggiungibilità di un nodo in un grafo

```

edge(a,b).
edge(b,c).
edge(c,d).
edge(a,e).       Rappresentazione Grafo
edge(e,f).
edge(f,k).
edge(f,c).

path(a,m).       Rappresentazione Percorso


path(X,Y) :-     Passo base
	edge(X,Y).


path(X,Y) :-
	edge(X,Z),   Passo induttivo
	path(Z,Y).


```


Definiamo meglio Passo Base e Passo Induttivo:
- *Passo base (PB)*:
	- Nel passo base, definiamo la condizione più semplice per cui un percorso path(X, Y) esiste.

- *Condizione*:
	- Esiste un arco edge(X, Y) che collega direttamente i nodi X e Y

- *Regola Prolog*:
	- path(X,Y) :- edge(X,Y).

*Spiegazione*:
- La regola dice che esiste un arco edge(X, Y) nel grafo, allora c'è un percorso path(X, Y) tra i nodi X e Y
- Questa regola rappresenta il caso base dell'induzione, in cui il percorso è composto da un solo arco


- *Passo Induttivo (PI)*:
	- Il passo induttivo definisce una regola per trovare percorsi più complessi che non sono solo archi diretti

- *Regola Prolog*:
	- path(X,Y) :- edge(X, Z), path(Z,Y).

*Spiegazione*:
- La regola dice che se esiste un arco edge(X,Z) che collega X a un nodo intermedio Z, e se esiste un percorso path(X,Y) da X a Y
- In altre parole, questa regola permette di costruire percorsi composti da più archi concatenati

