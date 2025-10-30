Le *Liste* in Prolog sono molto utilizzate. Useremo l'induzione strutturale, cioè un metodo per dimostrare proprietà di strutture ricorsive, come le liste. Una lista è una sequenza di vari elementi (anche ripetuti), che possono essere anche a loro volta delle liste.


>[!tip] Esempi
>[a,b,c,d,e]
>[a,b,[c,d]]
>La lista può essere anche vuota []


Ogni lista è composta da due parti [ H | T ]:
- H è il primo elemento
- T è il resto della lista (quindi a sua volta è una lista)

>[!tip] Esempi
>[H|T] = [a,b,c,d,e]
>	dove H = a
>		T = [b,c,d,e]
>	
>[H|T] = [a]
>	dove H = a
>		T = []
>		
>[H|T] = [] --> False


#### *Operazioni sulle liste (appartiene)*
- appartiene(X,L) --> significa "X appartiene a L"

*Esercizio*
Data una lista L, l'elemento x appartiene a L se è primo elemento, X appartiene a L se appartiene alla coda

```
appartiene(X,[X|_]).

appartiene(X,[_|T]) :-
	appartiene(X,T).

```

Alcune query potrebbero essere:
- ?- appartiene(X, [1,2,3])

- ?- appartiene (3, [1,2,3])


#### *Operazioni sulle liste (concatena)*
- concatena(A,B,C) --> ciò significa che C sarà la lista formata dalla concatenazione della lista A e dalla lista B. Quindi C = [H|L] dove H è il primo elemento della lista. A = [H|T] e L è la concatenazione di T (coda di A) e B.

Per risolverlo con Prolog faremo:
- *Passo Base*: Se A è una lista vuota allora C è semplicemente B
- *Passo di Induzione Strutturata*: Se A ha un elemento testa H e una coda T allora C ha come primo elemento H e la coda di C la otteniamo concatenando T con la lista B.


```
concatena([], A, A).

concatena([H|T], B, [H|L]) :-
	concatena(T,B,L).
	
```



#### *Operazioni sulle liste (Estrazione e Rivoltata)*
Una lista può contenere più elementi all'inizio, rappresentati usando la notazione [H1, H2 | T]:
- H1 e H2 sono i primi *due* elementi della lista.
- T è la *coda* della lista, ovvero tutti gli elementi tranne i primi due.

>[!example] Esempio
>Lista = [1, 2, 3, 4, 5]
>H1 = 1
>H2 = 2
>T = [3, 4, 5]


#### *Rivoltata*
- rivoltata(L, RL) --> prende due argomenti L una lista generica e RL una lista vuota o che conterrà la lista L ribaltata


```
rivoltata([], []).

rivoltata([H|T], RL) :-
	rivoltata(T, RT).
	append(RT, [H], RL),
	

```

Definiamo meglio Passo Base e Passo Induttivo
- *Passo Base*
	- Nel passo base, definiamo due liste inizialmente vuote, dove con una indichiamo L (la lista) e con l'altra indichiamo RL (la lista ribaltata)

- *Passo Induttivo*
	- Nel passo induttivo, definiamo che la lista di input viene divisa in testa H e coda T, se la funzione rivoltata viene poi chiamata ricorsivamente sulla coda T, e il risultato viene assegnato a RT. Infine, la testa H viene aggiunta alla fine di RT per formare la lista invertita RL.



#### *Permutazione*
- permutazione(A,B) --> data una lista la permutazione di questa lista è una lista che contiene tutti e soli gli elementi della lista originale. In altre parole, controlla se B contiene tutti gli stessi elementi di A, senza alcun duplicato e in qualsiasi ordine


```
append([], A, A).
append([H|T], B, [H|L]) :-
	append(T, B, L).

rivoltata([], []).
rivoltata([H|T], RL) :-
	rivoltata(T, RT).
	append(RT, [H], RL),
	

appartiene(X, [X|_]).
appartiene(X, [_|T]) :-
	appartiene(X, T).

permutazione([], []).
permutazione([H|T], B) :-        
	permutazione(T, PT1_2),      -Permuto la lista in PT1_2
	appartiene(H, B),            -Se la testa appartiene a B
	subtract(H, B, PT1_2).       -Elimino La testa da B


subtract(_, [], []).
subtract(H, [H|R], R).
subtract(H, [A|R], [A|R2]) :-
	subtract(H, R1, R2).

```


Definiamo meglio Passo Base e Passo Induttivo
- *Passo Base*:
	- Questa clausola base specifica che se entrambe le liste sono vuote ([]), allora sono sicuramente permutazioni tra loro

- *Passo Induttivo*:
	- Questa clausola ricorsiva si occupa di verificare se una lista non vuota ([H|T]) è una permutazione di un'altra lista B. Ecco come funziona:

	1) Induzione: Viene effettuata una chiamata induttiva al predicato permutazione(T, PT1_2) per verificare se la coda T della lista è una permutazione di B. Il risultato viene memorizzato nella lista PT1_2.
	2) Verifica appartenenza: Si controlla se la testa H della lista è presente nella lista B utilizzando il predicato appartiene(H,B)
	3) Rimozione elemento: Se H è presente in B, viene rimosso da B utilizzando il predicato subtract(H, B, PT1_2). La lista PT1_2 rappresenta la lista B con l'elemento H rimosso
	4) Unificazione: Se tutte le verifiche sono soddisfatte, la lista PT1_2 viene unificata con l'argomento B della chiamata originale, indicando che A e B sono permutazioni



Per calcolare la lunghezza di una lista posso fare la seguente operazione:
- lung(L, Lung) --> dove L è la lista e Lung è il valore della lunghezza della lista

Il codice sarà scritto nel seguente modo

```
lung([], 0).

lung([_|T], N) :-
	lung(T, M),
	N is M + 1

```

Definiamo meglio Passo Base e Passo Induttivo:
- *Passo Base*:
	- Questo passo base specifica che abbiamo una funzione chiamata lunghezza che è formata da una lista vuota la cui lunghezza è 0

- *Passo Induttivo*:
	- Nel passo Induttivo, invece, stiamo definendo che la lunghezza di una lista viene divisa in testa H e coda T, se la lunghezza della coda T è incrementata di 1.



#### *Numero di El*
- numerodiEl(L, El, N) --> dove L è la lista, El è il numero della lista ed N è il numero di volte che El si trova nella lista

```
numerodiEl([], _,  0).

numerodiEl([El|T], El, N) :-
	numerodiEl(T, El, M),
	N is M + 1
numerodiEl([X|T], El, M) :-
	X \= El,
	numerodiEl(T, El, M).

```

Definiamo meglio Passo Base e Passo Induttivo
- *Passo Base*
	- Questo passo base specifica che avendo una funzione chiamata numerodiEl che è formata da una lista vuota, da un'occorrenza non specificata (infatti c'è _ ), e 0 che indica la lunghezza della lista

- *Passo Induttivo*
	- Nel passo induttivo, invece, è definito da 2 regole:
	1) Nella prima regola abbiamo l'elemento attuale della lista (indicato con El) corrisponde all'elemento cercato (il secondo El), se incrementando di 1 cerca pure nella coda della lista (indicata con T) l'elemento El
	2) Nella seconda regola, indichiamo il caso in cui l'elemento corrente della lista (X) non è uguale all'elemento che stiamo cercando


#### Subtract

*1. Caso Base*
```
subtract(_, [], []).
```

Questa clausola dice che se si tenta di rimuovere un elemento da una lista vuota, il risultato sarà una lista vuota.

*2. Caso in cui l'elemento da rimuovere è il primo della lista*
```
subtract(H, [H|R], R).
```

Se l'elemento *H* da rimuovere è in testa alla lista, allora il risultato è semplicemente la coda della lista *R*, eliminando *H*

*3. Caso in cui l'elemento da rimuovere non è in testa*
```
subtract(H, [A|R], [A|R2]) :-
	subtract(H, R, R2).
```

Questa. lausola dice: se l'elemento da rimuovere *H* non è il primo della lista ([A|R]), allora lo si cerca nella coda *R*, e si costruisce la lista risultato ([A|R2]), mantenendo *A* e procedendo ricorsivamente




