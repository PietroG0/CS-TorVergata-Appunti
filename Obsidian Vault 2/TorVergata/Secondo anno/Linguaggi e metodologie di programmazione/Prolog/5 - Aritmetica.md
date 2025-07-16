> [!tip] Definizione
> 
Prolog fornisce una serie di strumenti aritmetici di base per manipolare gli interi (ovvero, numeri nella forma ...-3, -2, -1, 0, 1, 2, 3, 4...). La maggior parte delle implementazioni di Prolog forniscono anche strumenti per gestire numeri reali (o numeri in virgola mobile) come 1.53 o 6 . 35 × 10 5 , ma non ne discuteremo, poiché non sono particolarmente utili. Gli interi, invece, sono utili in connessione con compiti simbolici (li usiamo per indicare la lunghezza delle liste, ad esempio), quindi è importante capire come lavorare con loro. Inizieremo osservando come Prolog gestisce le quattro operazioni base di addizione, moltiplicazione, sottrazione e divisione.


Tuttavia, possiamo usare le operazioni aritmetiche quando definiamo dei predicati.
```
add_3_and_double(X,Y) :- Y is (X+3)*2.
```


#### Aritmetica e Liste
Probabilmente l'uso più importante dell'aritmetica in questo libro è quello di raccontarci fatti utili sulle strutture dati, come le liste. Ad esempio *può essere utile sapere quanto è lunga una lista*. Forniremo alcuni esempi di utilizzo degli elenchi insieme alle capacità aritmetiche.

L'elenco vuoto ha lunghezza zero. *Una lista non vuota ha lunghezza 1 + len(T), dove len(T) è la lunghezza della sua coda*. 
Ecco un codice:
```
len([], 0).
len([_|T, N]) :- len(T,X), N is X+1.
```

Questo è un buon programma: è facile da capire ed efficiente. Ma esiste un altro metodo per trovare la lunghezza di un elenco. Considereremo ora questa alternativa, perchè *introduce l'idea degli accumulatori*. Un accomulatore in Prolog è l'analogo di utilizzare variabili per mantenere risultati intermedi.

Ecco come potremmo utilizzare un accumulatore per calcolare la lunghezza di una lista.
```
accLen(List, Acc, Lenght).
```

In questo codice *List* è la lista di cui vogliamo calcolarne la lunghezza, e *lunghezza* è effettivamente la lunghezza (un intero). Per Acc? *Acc è l'accumulatore che useremo per tenere traccia dei valori intermedi della lunghezza*. Quando chiamiamo questo predicato, *daremo ad Acc un valore iniziale equivalente a 0*. Quindi inizieremo a lavorare sulla lunghezza della lista, *aggiungendo 1 ogni volta che troveremo un elemento nella testa, finchè non troveremo la lista vuota*. Quando raggiungeremo la lista vuota, Acc conterrà la lunghezza della lista.

```
accLen([_,T], A, L) :- Anew is A+1, accLen(T, Anew, L).
accLen([], A, A).
```

Il caso base della definizione unifica il secondo e il terzo argomento. Perchè questa banale unificazione è un buon modo per assicurarsi che venga restituito il risultato, ovvero la lunghezza dell'elenco. Quando raggiungiamo la fine della lista, l'accumulatore contiene la lunghezza della lista. Quindi diamo questo valore alla variabile lunghezza.

Definiamo un predicato che accetta come *primo argomento una lista non vuota di numeri interi non negativi* e *restituisce il numero intero massimo della lista come ultimo argomento*. Utilizzeremo ancora un accumulatore. Man mano che procediamo lungo l'elenco, *l'accumulatore terrà traccia del numero intero più alto trovato finora*. Se troviamo un valore più alto, *l'accumulatore verrà aggiornato* a questo nuovo valore. Quando chiamiamo il programma, impostiamo l'accumulatore su un valore iniziale pari a 0.

```
accMax([H|T], A, Max) :-
	H > A,
	accMax(T, H, Max).

accMax([H|T], A, Max) :-
	H =< A,
	accMax(T, A, Max).

accMax([], A, A).
```

La prima clausola *verifica se l'inizio dell'elenco è maggiore del valore più grande trovato finora*. *Se lo è, impostiamo l'accumulatore su questo nuovo valore e poi lavoriamo ricorsivamente sulla coda dell'elenco*. La seconda clausola si applica quando la prevalenza è inferiore o uguale all'accumulatore; in questo caso lavoriamo ricorsivamente sulla coda della lista utilizzando il vecchio valore dell'accumulatore. Infine, la clausola base unifica il secondo e il terzo argomento; fornisce il valore più alto che abbiamo trovato scorrendo l'elenco fino all'ultimo argomento.