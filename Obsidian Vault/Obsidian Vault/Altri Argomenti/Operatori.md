Il seguente codice

```

somma(t(X, Y), Y) :-
	Y is X+Y

:- op(400, xfy, ha).
:- op(300, xfy, di).

mario ha una macchina di dario.
giovanni ha panino.
elena ha panino di giovanni
giacomo ha borsa di pelle di daino


Possibile Query
?- Chi ha Cosa.

Chi = Mario,
Cosa = macchina di dario

Chi = giovanni
Cosa = panino

Chi = elena,
Cosa = panino di giovanni

Chi = giacomo,
Cosa = borsa di pelle di daino

```


- var(x)
Il predicato var(x) è usato per testare se l'argomento x è stanziato con una variabile

- nonvar(x)
Il predicato nonvar(x) è usato per verificare se l'argomento X è istanziato con un termine che non è una variabile. Può essere considerato il complementare del predicato var


