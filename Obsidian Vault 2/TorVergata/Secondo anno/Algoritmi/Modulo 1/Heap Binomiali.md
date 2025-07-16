#Algoritmi 

#### Alberi binomiali
Un *albero binomiale* $B_i$ è definito ricorsivamente come segue:
1) $B_0$ consiste di un *unico* nodo
2) Per $i>0, B_{i+1}$ è ottenuto fondendo due alberi binomiali $B_i$, ponendo la radice dell'uno come figlia della radice dell'altro

![[Pasted image 20241125164327.png]]


#### Proprietà strutturali
Un albero binomiale $B_h$ gode delle seguenti proprietà:
1) Numero di nodi ($|B_{h|}): n$ = $2^h$ 
2) Grado della radice: $D(n) = \log_2{n}$ 
3) Altezza: $H(n) = h = log_2{n}$
4) Figli della radice: i sottoalberi radicati nei figli della radice di $B_h$ sono $B_{0,}B_{1,}..., B_{h-1}$ 


#### Definizione di heap binomiale
Un heap binomiale è una *foresta di alberi binomiali* che gode delle seguenti proprietà:
1) *Unicità*: per ogni intero $i>=0$, esiste al più un $B_i$ nella foresta
2) *Contenuto informativo*: ogni nodo $v$ contiene un elemento $elem(v)$ ed una chiave $chiave(v)$ presa da un dominio totalmente ordinato
3) *Ordinamento a heap*: $chiave(v) >= chiave(parent(v))$ per ogni nodo $v$ diverso da una delle radici


#### Proprietà topologiche
- Dalla proprietà di unicità degli alberi binomiali che lo costituiscono, ne deriva che un heap binomiale di *n* elementi è formato dagli alberi binomiali $B_{i0,}B_{i1,}..., B_{ih}$, dove $i_{0,}i_{1,}..., i_h$ corrispondono alle posizioni degli 1 nella rappresentazione in base 2 di n
- Ne consegue che in un heap binomiale con n nodi, vi sono al più $log n$ alberi binomiali, ciascuno con grado ed altezza $O(log{n})$ 


#### Procedura ausiliaria
Utile per ripristinare la proprietà di unicità in un heap binomiale (ipotizziamo di scorrere la lista delle radici da sinistra verso destra, in ordine crescente rispetto all'indice degli alberi binomiali)

```
procedura ristruttura()
	i = 0
	while(esistono ancora due Bi) do
		si fondono i due Bi per formare un albero Bi+1, ponendo la radice con
		chiave più piccola come genitore della radice con chiave più grande
		i = i+1
		
```

