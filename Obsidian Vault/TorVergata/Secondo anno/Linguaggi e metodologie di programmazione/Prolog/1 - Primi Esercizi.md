#Linguaggi 

X è fratello di Y se Z è genitore di X e di Y

I *fatti* sono:
- genitore(Z, X).  -->  Z è genitore di X (relazione di base)
- genitore(Z, Y).  -->  Z è genitore di Y (relazione di base)

Le *regole* sono:
- fratello(X, Y) :- genitore(Z, X), genitore(Z, Y).

Dove: 
- fratello(X, Y) è la *testa della regola*
- : - *separa la testa dal corpo della regola*
- genitore(Z, X) e genitore(Z, Y) è il *corpo della regola*
- La *regola* dice che X è fratello di Y se hanno lo stesso genitore Z


Domanda (o Query):
- ?- fratello(x, y).

Possiamo unificare, cioè associo il nome alla variabile

Inserendolo su swish. Avremo

```
genitore(mario,dario).
genitore(mario,gino).
genitore(gino,pino).
genitore(gino,sandro).
genitore(sandro,luca).
genitore(luca,mario).


fratello(X,Y):-
	genitore(X,Z),
	genitore(Z,Y).

nonno(X,Y):-
	genitore(X,Z),
	genitore(Z,Y).

avo(X,Y):-
	genitore(X,Y).

avo(X,Y):-
	genitore(X,Z),
	avo(Z,Y).
	
```

In Prolog i dati inseriti in input sono inseriti come fatti e regole:
- I *fatti* sono relazioni semplici tra due entità
- Le *regole* definiscono relazioni più complesse, come la nozione di "fratello"
Il programma è progettato per rispondere a query che interrogano i legami familiari.
Le query possono essere utilizzate per trovare fratelli, nonni e avi.

Possiamo inserire le seguenti Query:
- ?- fratello(X, gino) --> cerca tutti i fratelli di Gino
- ?- avo(X, Y) --> cerca tutti gli avi di Y

Trovare l'avo è più complesso che trovare il nonno. Infatti, richiede un'induzione che collega più punti nel grafo di parentela. L'induzione ha un caso base e un passo induttivo.

- *Predicato*: una proposizione che può essere vera o falsa. In Prolog, i predicati sono rappresentati da nomi seguiti da parentesi
- *Predicare*: affermare che un predicato è vero. In Prolog, si predica scrivendo il nome del predicato seguito da parentesi e dai suoi argomenti
- *Induzione*: un metodo di ragionamento che permette di generalizzare da casi specifici a una regola generale
- *Unificare*: trovare un valore comune per due variabili che le rende uguali


#### [[Grafo in Prolog]]

#### [[Liste]]

#### [[Predicati]]

#### [[Fibonacci]]

#### [[Operatori ]]

#### [[Obsidian Vault/Torre di Hanoi]]


