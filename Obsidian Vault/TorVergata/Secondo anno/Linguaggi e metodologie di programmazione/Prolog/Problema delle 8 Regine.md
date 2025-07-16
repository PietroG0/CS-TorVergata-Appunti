#Linguaggi 

Il **problema delle 8 regine** è un classico problema di intelligenza artificiale e programmazione logica che consiste nel posizionare 8 regine su una scacchiera 8×88 \times 88×8 in modo tale che nessuna regina attacchi un'altra. Questo significa che:

1. **Nessuna regina deve trovarsi sulla stessa riga.**
2. **Nessuna regina deve trovarsi sulla stessa colonna.**
3. **Nessuna regina deve trovarsi sulla stessa diagonale.**

In Prolog, questo problema può essere affrontato usando regole logiche per verificare la validità di una soluzione.


```
controlloRiga([A, _], [A, _]).

controlloColonna([_, B], [_, B]).

controlloDiagonale([A, B], [C, D]):-
    X is A - C,
    Y is B - D,
    X =\= -Y,
    X =\= Y.

controlloCoppia([_]).

controlloCoppia([A, B|T]):-
    controlloRiga(A, B),
    controlloColonna(A, B),
    controlloDiagonale(A, B),
    controlloCoppia([A|T]).

controlloSoluzione([_]).

controlloSoluzione([H|T]):-
    \+controlloCoppia([H|T]),
    controlloSoluzione([T]).
    

```


*ControlloRiga*: 
- La scacchiera è rappresentata da A, cioè le righe, e B, cioè le colonne. 
- controlloRiga verifica se due regine hanno le coordinate A uguali, cioè se sono sulla stessa riga

*ControlloColonna*:
- Per lo stesso motivo di *controlloRiga*, ControlloColonna verifica se due regine hanno le coordinate B uguali, cioè se sono sulla stessa colonna

*ControlloDiagonale*:
- Date 2 coordinate ( (A,B), (C,D) ) verifica se sono sulla medesima diagonale.
- X è la differenza tra le righe, come Y è la differenza tra le colonne.
- Se X è uguale a Y, significa che sono sulla stessa diagonale
- Se X è uguale a -Y, significhe che sono anch'essi sulla stessa diagonale, ma l'inversa

*ControlloCoppia*:
- ControlloCoppia prende come perno una regina (A), e la va a confrontare con tutte le altre, rappresentate attrverso una lista (B|T)
- Vado a richiamare tutti i controlli, l'ultima chiamata è *controlloCoppia* con input (A|T), cioè vado a confrontare A con tutti gli elementi tranne B

*ControlloSoluzione*:
- Se controlloCoppia va a buon fine, cioè non ci sono regine che si possono attaccare, si richiama *controlloSoluzione* solo su T, vale a dire tutti gli elementi ignorando il primo (che abbiamo già controllato). Quindi vado a confrontare il primo elemento con tutta la lista, successivamente confronto il secondo elemento con la lista, e così via

