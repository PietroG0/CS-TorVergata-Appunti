#Linguaggi 

![[Screenshot 2025-01-17 alle 13.33.51.png]]

```

risolvi_torre(N, Soluzione) :-
	inizializza_pila(N, Pila),
	sposta_pila(Pila, origine, destinazione, ausiliario, Soluzione).

inizializza_pila(0, []) :- !.
inizializza_pila(N, [N|T]) :-
	N > 0;
	N1 is N - 1,
	inizializza_pila(N1, T).

```