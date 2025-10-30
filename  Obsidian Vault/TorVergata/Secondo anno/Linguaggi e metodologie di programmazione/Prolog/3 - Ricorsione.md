
>[!info] Definizione
>I Predicati possono essere definiti ricorsivamente. Parlando in maniera semplice, un predicato è ricorsivamente definito se una o più regole nella sua definizione si riferiscono a se stesso


```
Esempio di codice

is_digesting(X,Y) :- just_ate(X,Y).
is_digesting(X,Y) :-
	just_ate(X,Z),
	is_digesting(Z,Y).

just_ate(mosquito,blood(john)).
just_ate(frog,mosquito).
just_ate(stork,frog).

```

Il predicato *is_digesting* 2 è *ricorsivo*. Si noti che è (almeno parzialmente) definito in termini di se stesso, poichè il fattore is_digesting 2 ricorre sia nella testa che nel corpo della seconda regola. Fondamentalmente, tuttavia, esiste una "fuga" da questa circolarità. Ciò è fornito dal predicato *just_ate* 2, che ricorre nella prima regola.





