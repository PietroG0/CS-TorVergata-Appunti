#Linguaggi 

```

hanoi([], _, _).
hanoi(h([X|A],B,C) h(A, [X|B], c)) :-
	ordinata([X|A]),
	ordinata([X|B]),
	ordinata(C).

ordinata([]).
ordinata([_]).
ordinata([H1,H2 | T]) :-
	H1 > H2,
	ordinata([H2|T]).

```

#### Struttura generale del codice
Il codice ha due parti principali:
1) *Regole per il problema delle Torri di Hanoi*: La regola principale è *hanoi\3*, che definisce come spostare i dischi da una configurazione iniziale a una finale rispettando alcune condizioni
2) *Regole per verificare che una lista sia ordinata (ordinata\1)*: Questa parte è utilizzata per verificare che i dischi in una torre siano ordinati (dal più grande al più piccolo, dall'alto verso il basso).

#### Regole principali
a. *Predicato hanoi\3*
Il predicato *hanoi* ha due definizioni principali:
```
hanoi([], _, _).
```
Questa regola dice che se non ci sono dischi nella configurazione iniziale (lista vuota), allora non c'è nulla dafare. La configurazione è già risolta.

```
hanoi(h([X|A],B,C) h(A, [X|B], c)) :-
	ordinata([X|A]),
	ordinata([X|B]),
	ordinata(C).
```
Questa regola descrive il caso generale, dove:
- Si parte da una configurazione con 3 torri rappresentate da *h([X|A], B, C)*:
	- *[X|A]*: Lista di dischi nella *torre A*, con *X* come disco superiore
	- *B* e *C*: Torri inizialmente vuote o con dischi

- Si vuole arrivare alla configurazione *h(A, [X|B], C)*:
	- Il disco *X* viene spostato dalla torre *A* alla torre *B*

- Prima di effettuare il movimento, si verificano le seguenti condizioni:
	- La torre *A* ([X|A]) è ordinata
	- La torre *B* ([X|B]) è ordinata
	- La torre *C* (C) è ordinata


b. *Predicato ordinata*
Questo predicato verifica che una lista sia ordinata in senso decrescente (ogni elemento è maggiore del successivo):
```
ordinata([]).
ordinata([_]).
```
Queste regole dicono che:
- Una lista vuota è considerata ordinata
- Una lista con un solo elemento è considerata ordinata

```
ordinata([H1, H2 | T]) :-
	H1 > H2,
	ordinata([H2|T]).
```
Questa regola dice che una lista con almeno due elementi [H1, H2 | T] è ordinata se:
- Il primo elemento *H1* è maggiore del secondo *H2*
- Il resto della lista [H2 | T] è anch'esso ordinato (ricorsione)

