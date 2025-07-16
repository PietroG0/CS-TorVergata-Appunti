#Linguaggi 

Si vuole far occupare dal cavallo tutte le caselle possibili passandoci solo una volta

```

controllo_unicita(_,[]).

controllo_unicita(A/B, [A/C|T]) :-
	B =\= C,
	controllo_unicita(A/B,T).

controllo_unicita(A/B, [_/B|T]) :-
	A =\= C,
	controllo_unicita(A/B, T).

controllo_unicita(A/B, [_/_|T]) :-
	A =\= C,
	A =\= D,
	controllo_unicita(A/B, T).

controllo_unicita_totale([_]).
controllo_unicita_totale([M|T]) :-
	controllo_unicita(M,T),
	controllo_unicita_totale(T).

mossa_valida(A/B, C/D) :-
	abs(A-C, 1),
	abs(B-D, 2).

mossa_valida(A/B, C/D) :-
	abs(A-C, 2),
	abs(B-D, 1).

controllo_mosse([M1,M2|T]) :-
	mossa_valida(M1,M2),
	controllo_mosse([M2|T]).

controllo_soluzione(L) :-
	controllo_unicita_totale(L),
	controllo_mosse(L).

```