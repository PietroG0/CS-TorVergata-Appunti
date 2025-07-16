#Linguaggi 

```
prossimafrontiera([],[]).

prossimafrontiera([X|R], F) :-
	setof(Z, edge(X,Z), RZ),
	prossimafrontiera(R, FF),
	append(RX, RF, F).
	
```


#### Predicati
- *ProssimaFrontiera (Frontiera, ProssimaFrontiera)*: Questo predicato rappresenta la parte principale dell'algoritmo BFS. La prima variabile, *Frontiera*, rappresenta una lista di nodi da esplorare. La seconda variabile, *ProssimaFrontiera*, rappresenta la prossima frontiera da considerare, ovvero la lista dei nodi raggiungibili dai nodi della frontiera attuale.

#### Regole
*Regola Base*:
- *ProssimaFrontiera ([], [])*. Questa regola indica che se la frontiera è vuota (nessun nodo da esplorare), anche la prossima frontiera è vuota

*Regola Ricorsiva*:
- *ProssimaFrontiera([X|R], F :- setof(Z, edge(X,Z), RZ), prossimafrontiera (R, FF), append(RX, RF, F).* Questa regola gestisce la parte principale dell'esplorazione del grafo. Essa scompone in passi:
	1) *setof(Z, edge(X,Z), RZ).* Questa clausola utilizza il predicato *setof* per generare un insieme *RZ* contenente tutti i nodi raggiungibili dal nodo corrente *X*. I nodi raggiungibili sono quelli collegati da uno spigolo a *X*.
	2) *prossimafrontiera(R, FF).* Si chiama ricorsivamente *prossimafrontiera* sulla restante parte della frontiera *R* per ottenere la prossima frontiera da esplorare.
	3) *append(RX, RF, F).* Si combina la lista di nodi raggiungibili *RZ* (rinominata *RX*) con la prossima frontiera ottenuta dalla chiamata ricorsiva *FF* (rinominata *RF*) per formare la prossima frontiera complessiva *F*


#### Schema dell'algoritmo BFS
1) *Inizializzazione*:
	- Impostare la frontiera iniziale con il nodo di partenza
	- Impostare la prossima frontiera vuota

2) *Ciclo di esplorazione*:
	- Finchè la frontiera non è vuota:
		- Estrarre il primo nodo *X* dalla frontiera
		- Trovare tutti i nodi raggiungibili da *X* e inserirli nella lista *RZ*
		- Combinare *RZ* con la prossima frontiera ottenuta dalla chiamata ricorsiva per formare la nuova prossima frontiera *F*
		- Aggiornare la frontiera con la restante parte della frontiera iniziale (esclusa *X*)

3) *Risultato*:
	- Se il nodo finale è stato raggiunto durante l'esplorazione, il percorso più breve è contenuto nella frontiera o nelle frontiere precedenti
	- Se il nodo finale non è stato raggiunto, significa che non esiste un percorso dal nodo di partenza al nodo finale



#### Seconda parte (Verifica del path attraverso le frontiere)

```

prossimafrontiera([], []).

prossimafrontiera([[X, PX]|R], F) :-
	setof([Z|[X|PX]], edge(X,Z), RZ),
	prossimafrontiera(R,FF),
	append(RX,RF,F).

opf(F, FR, Y) :-
	prossimafrontiera(F, FR),
	member(Y, FR).
opf(F, FR, Y) :-
	prossimafrontiera(F, FRZ),
	opf(FRZ, FR, Y).

path(X,Y,P) :-
	prossimafrontiera([X|R], F),
	member(Y, F),
	reverse(F, P).
	opf([X], FF, Y).

```

*Obiettivo*
Implementare un algoritmo di ricerca in ampiezza (BFS) modificato per memorizzare i percorsi completi dai nodi di partenza a tutti i nodi raggiungibili nel grafo

#### Predicati
- *prossimafrontiera(Frontiera, ProssimaFrontiera)*: Come nella versione precedente, questo predicato gestisce l'esplorazione del grafo utilizzando l'algoritmo BFS, ma con una modifica importante. In questa versione, ogni nodo nella frontiera è rappresentato come una lista *(Nodo, Percorso)*, dove *Nodo* è il nodo corrente e *Percorso* è la lista che rappresenta il percorso finora raggiunto da *X* (il nodo iniziale).
- *opf(Frontiera, FrontiereFinali, NodoFinale)*: Questo nuovo predicato, "OPF" (Open Path Finder), serve a trovare tutti i percorsi completi dai nodi di partenza a tutti i nodi raggiungibili nel grafo
- *path(NodoIniziale, NodoFinale, Percorso)*: Questo predicato rimane lo stesso della versione precedente, trovando il percorso più breve dal nodo iniziale al nodo finale


#### Regole
Regola di prossima frontiera modificata:
- *prossimafrontiera([[X, PX]|R], F)*: Questa regola è simile alla versione precedente, ma invece di memorizzare solo i nodi raggiungibili, memorizza anche i percorsi finora raggiunti. Il percorso per un nodo *Z* raggiungibile da *X* è ottenuto prependendo *Z* al percorso *PX* di *X*

Regole OPF:
- *opf(F, FR, Y)*: Se il nodo finale *Y* è presente nella frontiera *F* ottenuta dall'esplorazione BFS, significa che è stato raggiunto un percorso completo da *X* a *Y*. La lista *F* contiene tutti i percorsi completi, quindi *FR* viene impostata su *F*.
- *opf(F, FRZ), opf(FRZ, FR, Y)*: Se il nodo finale *Y* non è presente nella frontiera *F*, si chiama ricorsivamente *opf* sulla frontiera successiva *FRZ* ottenuta dall'esplorazione BFS. Se il nodo finale viene trovato in una frontiera successiva, il percorso viene propagato indietro fino alla lista *FR*.
- Regola path: Rimane invariata rispetto alla versione precedente


#### Schema dell'algoritmo BFS con memorizzazione dei percorsi
1) *Inizializzazione*:
	- Impostare la frontiera iniziale con il nodo di partenza e un percorso vuoto [].
	- Impostare le frontiere finali vuote

2) *Ciclo di esplorazione*:
	- Finchè la frontiera non è vuota:
		- Estrarre il primo nodo [X, PX] dalla frontiera
		- Trovare tutti i nodi raggiungibili da *X* e costruire i percorsi completi per essi prependendo *Z* a *PX*
		- Combinare i nuovi percorsi con la prossima frontiera ottenuta dalla chiamata ricorsiva per formare la nuova prossima frontiera *F*.
		- Aggiornare le frontiere finali con i percorsi completi trovati in *F*
		- Aggiornare la frontiera con la restante parte della frontiera iniziale (esclusa [X, PX])

3) *Risultato*:
	- Le frontiere finali *FR* contengono tutti i percorsi completi dai nodi di partenza a tutti i nodi raggiungibili nel grafo. Ogni percorso è rappresentato come una lista *(Nodo, Percorso)*, dove *Nodo* è il nodo finale e *Percorso* è la lista di nodi attraversati per raggiungerlo
	- Se il nodo finale *Y* non è raggiungibile da nessun nodo di partenza, la lista *FR* rimane vuota


