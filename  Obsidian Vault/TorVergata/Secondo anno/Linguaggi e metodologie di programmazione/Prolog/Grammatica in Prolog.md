#Linguaggi 

```
'A'(L, R1) :-
	'B'(L,R),
	'C'(R,R1).
'A'(L,R2) :-
	'C'(L,R),
	'B'(R,R1),
	'B'(R1,R2).


'B'([H|T],T) :-
	H = 'a'
'C'([H|T],T) :-
	H = 'b'.


```

#### Grammatica
La grammatica definisce le regole per la generazione di stringhe valide nel linguaggio. In questo caso, la grammatica è composta da due regole:
1) *A(L, R1)*: Questa regola dice che una stringa *A* può essere generata da una stringa *B* seguita da una stringa *C*. I paramentri *L* e *R1* rappresentano le liste di simboli che compongono le stringhe rispettivamente *B* e *C*.
2) *A(L, R2)*: questa regola è simile alla prima, ma invertita. Dice che una stringa *A* può essere generata da una stringa *C* seguita da due stringhe *B*. I paramentri *L*, *R* e *R1* hanno lo stesso significato di prima

Sostituzione di righe:
Le righe 14 e 15 del codice originale definiscono le regole per i simboli *B* e *C*. Queste regole vengono sostituite con le seguenti:
1) *B([H|T], T)*: Questa regola dice che un simbolo *B* può essere generato da un singolo simbolo *a* seguito da una lista *T*. In altre parole, *B* è composto solo dal simbolo *a* e da una coda di simboli *T*
2) *C([H|T], T)*: Questa regola dice che un simbolo *C* può essere generato da un singolo simbolo *b* seguito da una lista *T*. In altre parole, *C* è composto solo dal simbolo *b* e da una coda di simboli *T*

