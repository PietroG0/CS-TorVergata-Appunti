Implementiamo il calcolo della sequenza di Fibonacci utilizzando la programmazione dinamica in prolog

Primo codice (no dynamic)

```
fibonacci(0, 0).
fibonacci(1, 1).
fibonacci(2, 1).
fibonacci(N, M) :-
	N > 1,
	N is N - 1,
	fibonacci(N1, M1),
	N2 is N - 2,
	fibonacci(N2, M2),
	M is M1 + M2


```



Secondo codice (dynamic)

```
:- dynamic f/2
fibonacci(0, 0).
fibonacci(1, 1).
fibonacci(2, 1).
fibonacci(N, M) :-
	write(in), nl,
	N1 is N - 1,
	fibonacci(N1, M1),
	n2 is N - 2,
	fibonacci(N2, M2),
	M is M1 + M2.
	
```


ESERCIZIO
Vogliamo costruire una struttura arborea ed un predicato foglia
- leaf(T, F) --> Descrive la struttura di un albero, dove R è la radice e Children è una lista di elementi dell'albero
- R(Children) = ..[] --> Spiega come utilizzare l'operatore *univ* per decomporre la struttura dell'albero in Prolog

```

t(0, 0).

somma(t(A, B), S) :-
	S is A + B.


Query
?- somma(t(3,4), S).
S = 7

?- somma(t(3,4), 9).
False

?- somma(t(3,4), 7).
True
	
```

Avendo un albero t con nodi A, B --> t(A, B); posso dire che la regola somma i nodi dell'albero e ti restituisce tale somma in output --> somma(t(A, B), S) :- S is A + B


```

leaf(t(R, []), R).

leaf(t(_, Children), L) :-
	member(C, Children),
	leaf(C, L).

node(t(R, _), R).

node(t(_, Children), L) :-
	member(C, Children),
	node(C, L).

```

