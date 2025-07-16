#### Alcuni predicati: Not, Fail, Cut
Il predicato *NOT* (=/=) viene utilizzato per verificare se qualcosa non è vero. Quindi se in Prolog ho un fatto P, not (P) mi verifica se il goal P fallisce

ES. se abbiamo il seguente fatto:
- amici(mario,marta).

Posso avere le seguenti query:
- ?- amici(mario,maria). --> in questa query verifico se c'è un'amicizia tra una persona chiamata Mario e un'altra chiamata Maria, in base al fatto che ho Prolog mi restituirà True

Se voglio esprimere che un fatto è falso avrò:
- ?- not(amici(mario,maria)).
- False

Invece, se P fallisce, il not (P) mi indicherà un successo. Infatti avrò:
- ?- not(amici(mario,lucia))
- True

In una query, posso esprimere il not pure nel seguente modo:
- mario \= lucia.


Il *CUT* (rappresentato dal seguente simbolo !) è un operatore che taglia un ramo della ricerca (backtracking) nell'esecuzione di un programma Prolog. Una volta che viene eseguito, non si può tornare indietro su quel ramo. Quindi quando abbiamo cose da verificare non vere ci serve il cut.


ES1

```
&fatti

q(a).
q(b).
q(c).
r(a).
r(b).

&regola

p(x) :-
	not(q(x)),
	!,
	r(x).


?- p(X).
False

```

In questo caso la regola ci dice che p(X) è vero per un certo x se il valore X non soddisfa q(X). Se q(x) fallisce, il cut impedisce a prolog di cercare ulteriori soluzioni, e la regola r(x) viene soddisfatta.


ES2

```
f(a)
f(b)
g(a)
g(b)
g(j)
k(a)


p(A) :-
	f(A),
	write(A), nl,
	!,
	g(A),
	write(A), nl,
	k(A).

?- p(X).
a
a
X = a

```



Il predicato *FAIL* viene utilizzato per forzare Prolog a fallire e a esplorare un altro ramo della ricerca.

ES.1

```

f(a).
f(b).
g(a).
g(b).
g(j).
k(a).


p(A) :-
	f(A),
	!,
	g(A),
	k(A).

fallimento_di_g(A) :-
	g(A), fail.


?- fallimento_di_g(j).
False

```



ES.2

```
f(a).
f(b).
g(a).
g(b).
g(j).
k(a).

p(A) :-
	f(A),
	!,
	g(A),
	k(A).

fallimento_di_g(A) :-
	g(A), fail.

fallimento_di_g(_).


?- fallimento_di_g(X).
True

```



*Mynot*, si comporta come il not, cioè se il predicato è vero allora mynot(predicato) è falso

