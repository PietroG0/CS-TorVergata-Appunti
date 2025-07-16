Il problema delle torri di Hanoi è un problema matematico/logico che deriva da un'antica leggenda. Questo "rompicapo" è composto da un insieme di "torri" sulle quali sono sovrapposte una serie di dischi. Il "rompicapo" consiste nel trasferire tutti i dischi da una "torre" all'altra seguendo alcune regole, come:
- Si può spostare solo un disco alla volta
- Si può spostare solo il disco in cima alla "torre"
- Non si può sovrapporre un disco grande sopra ad un disco più piccolo

Implementando avremo il seguente codice:

```
ord([]).
ord([_]).
ord([H1, H2|T]) :-
	H1 < H2,
	ord([H2|T]).

edge(h([X|A], B, C), h(A, [X|B], C)) :-
	ord([X|A]),
	ord([X|B]),
	ord(C).

```

Avendo un nodo (edge) formato da 3 torri (A,B,C) dove x è il "disco" da spostare da una torre all'altra. Il nodo è definito così se x è ordinato in modo crescente.

La regola sopra ci fa capire quando una lista è ordinata.
- ?- edge(h([1, 2, 3], [], []), h([2,3], [1], [])).

Output = True


