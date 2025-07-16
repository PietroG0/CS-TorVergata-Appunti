#Linguaggi 

```

split([],[],[]).

split(L, LS, LD) :-
	append(LS,LD,L),
	LS = [_|_],
	LD = [_|_].

operazione(X,Y,X+Y).
operazione(X,Y,X-Y).
operazione(X,Y,X*Y).
operazione(X,Y,X/Y) :-
	Y =\= 0.

termine([X],X).

termine(L, T) :-
	split(L, LS, LD),
	termine(LS, TS),
	termine(LD, TD),
	operazione(TS, TD, T).

equazione(L) :-
	split(L, LS, LD),
	termine(LS, TS),
	termine(LD, TD),
	TS =:= TD.


```


#### 1) Funzioni di base
- *append(Lista1, Lista2, ListaConcatenata)*: Concatena due liste *Lista1* e *Lista2* in *ListaConcatenata*.
- *operazione(X, Y, Risultato)*: Esegue un'operazione aritmetica su due numeri *X* e *Y* e memorizza il risultato in *Risultato*. Supporta addizione (*+*), sottrazione (*-*), moltiplicazione e divisione(*/*) controllando che il divisore (*Y*) sia diverso da zero.


#### 2) Funzione per termini
- *termine([Elemento], Elemento)*: Se la lista contiene un singolo elemento, considera quell'elemento come il termine (risultato finale)
- *termine(Lista, Termine)*: Questa funzione è ricorsiva e divide la lista in due sottoliste con *split*. Poi, richiama ricorsivamente *termine* su entrambe le sottoliste ottenendo i termini *TS* e *TD*. Infine, applica l'operazione (*operazione*) su *TS* e *TD* e memorizza il risultato in *Termine*.


#### 3) Funzione equazione
- *equazione(Lista)*: Controlla se la lista rappresenta un'equazione valida.
	- *split(Lista, SottoListaSinistra, SottoListaDestra)*: Divide la lista in due sottoliste che rappresentano i lati sinistro e destro dell'equazione
	- *termine(SottoListaSinistra, TermineSinistro)*: Calcola il termine della sottolista sinistra
	- *termine(SottoListaDestra, TermineDestra)*: Calcola il termine della sottolista destra.
	- *TermineSinistro =:= TermineDestra*: Confronta i termini ottenuti per verificare se i lati sinistro e destro dell'equazione sono uguali

