#Linguaggi 

![[Pasted image 20250117125515.png]]

```

posiziona_coorti(_,_,0,[], Soluzione, Soluzione).
posiziona_coorti(N, M, K, [C|CoortiRestanti], Parziale, Soluzione) :-
	between(1, N, Riga),
	between(1, N, Colonna),
	posizione_valida(Riga, Colonna, M, Parziale),
	append(Parziale, [(Riga, Colonna)], NuovaParziale),
	NuovoK is K-1,
	posizione_coorti(N, M, NuovoK, CoortiRestanti, NuovaParziale, Soluzione).

posizione_valida(_, _, _, []).
posizione_valida(Riga, Colonna, M, [(Riga1, Colonna1) | Restanti]) :-
	abs(Riga - Riga1) > M,
	abs(Colonna - Colonna1) > M,
	abs(Riga - Riga1) =\= abs(Colonna - Colonna1),
	posizione_valida(Riga, Colonna, M, Restanti).

lunghezza([], 0).
lunghezza([_,|T], L) :- lunghezza(T, LT), L is LT + 1.

```

#### Spiegazione del codice
1) *Predicato principale* risolvi/5:
	- $N$: la dimensione della griglia ($n \cdot n$),
	- $M$: la distanza massima dei dardi,
	- $K$: il numero massimo di dardi disponibili,
	- $V$: una lista che rappresenta le coorti romane da posizionare,
	- e restituisce $Soluzione$, cioè una lista delle posizioni valide

2) *posiziona_coorti/6*:
	- Cerca di posizionare le coorti una alla volta, scegliendo una posizione valida nella griglia
	- Controlla che la posizione sia valida rispetto alle coorti già posizionate e decrementa il numero di dardi disponibili

3) *posizione_valida/4*:
	- Verifica che una nuova posizione proposta non sia attaccabile da dardi già posizionati, rispettando le traiettorie orizzontali, verticali e diagonali entro la distanza $M$

4) *lunghezza/2*:
	- Calcola la lunghezza della lista di coorti, per assicurarsi che non ci siano più coorti del necessario

