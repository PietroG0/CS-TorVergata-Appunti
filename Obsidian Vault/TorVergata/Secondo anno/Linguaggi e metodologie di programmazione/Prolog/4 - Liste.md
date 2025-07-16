> [!tip] Definizione
> Come suggerisce il nome, una lista è semplicemente un elenco di elementi. Più precisamente, si tratta di una sequenza finita di elementi


```
Esempi di Liste

[mia, vincent, jules, yolanda]

[mia, robber(honey_bunny), X, 2, mia]

[mia, [vincent, jules], [butch, girlfriend(butch)]]

[[], dead(z), [2, [b, c]], [], Z, [2,[b, c]]]

```

Possiamo specificare le liste in Prolog racchiudendo gli elementi della lista tra parentesi quadre. Gli elementi sono separati da virgole. Ad esempio, il *primo elenco* mostrato sopra è un elenco con quattro elementi. *La lunghezza di una lista è il numero di elementi che contiene*, quindi il nostro primo esempio è una lista di lunghezza quattro. Dal secondo esempio, *apprendiamo che tutti i tipi di oggetti Prolog possono essere elementi di una lista*. Il primo elemento di questa lista è mia, un atomo; il secondo elemento è ladro(honey_bunny), un termine complesso; il terzo elemento è X, una variabile; il quarto elemento è 2, un numero. Inoltre, *apprendiamo anche che lo stesso elemento può comparire più di una volta nella stessa lista*: ad esempio, il quinto elemento di questa lista è mia, che è uguale al primo elemento. Il terzo esempio mostra che esiste una lista speciale, la lista vuota. La lista vuota è una lista che non contiene elementi. Il quarto esempio ci insegna qualcosa di estremamente importante: *le liste possono contenere altre liste come elementi*.


#### [[1 - Primi Esercizi#Liste]]


#### Recursing down Lists
Il predicato *member 2* funziona ricorsivamente lungo un elenco, facendo qualcosa all'inizio e poi ricorsivamente facendo la stessa cosa alla coda. La ripetizione di un elenco in questo modo è estremamente comune in Prolog. Quando lavoriamo con gli elenchi, spesso vogliamo confrontare un elenco con un altro, o copiare parti di un elenco in un altro, o tradurre il contenuto di un elenco in un altro. Supponiamo di aver bisogno di un *predicato a2b/2* che prenda due liste come argomenti, e abbia successo se il primo argomento è una lista di a, e il secondo argomento è una lista di b esattamente della stessa lunghezza.
Se poniamo questa query

```
a2b([a,a,a,a], [b,b,b,b]).
```

Vogliamo che Prolog risponda si.
Al contrario, se poniamo la seguente query
```
?- a2b([a,a,a,a], [b,b,b]).
```

Vogliamo che risponda no.

Ecco l'idea: per elenchi più lunghi, pensiamo in modo ricorsivo. Quindi quando a2b/2 dovrebbe decidere che due liste non vuote sono una lista di a e una lista di b esattamente della stessa lunghezza? Quando l'inizio della prima lista è a, e l'inizio della seconda lista è b esattamente della stessa lunghezza. 

```
a2b([a|Ta], [b|Tb]) :- a2b(Ta,Tb).
```

Il predicato a2b/2 dovrebbe avere successo se il primo argomento è *una lista* con testa $a$, il secondo argomento è una lista con testa $b$, e a2b/2 andrà alle 2 code.
