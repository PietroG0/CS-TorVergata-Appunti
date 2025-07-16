#Algoritmi 

#### Interval Scheduling

![[Pasted image 20250320142302.png]]

- Job $J$ inizia a $s_j$ e finisce a $f_j$
- Due jobs sono **compatibili** se non si intersecano
- **Goal**: trovare il massimo sottoineime di jobs compatibili


**Input**
- Un set di $n$ intervalli $l_{1}, ..., l_{n}$
- L'intervallo $l_{i}$ ha il tempo d'inizio $s_{i}$ e tempo di fine $f_{i}$

**Soluzione flessibile**
- Un sottoinsieme $S degli intervalli che sono mutualmente compatibili. Per ogni $l_{i}, l_{j} \in S, l_{i}$ non si sovrappone con $l_{j}$

**Misura (per massimizzare)**
- Nuero di intervalli schedulati, cardinalità di $S$


#### Algoritmi greedy

**Template Greedy** 
Considerare i jobs in qualche ordine naturale. Accettare ogni job purchè sia compatibile con quelli già svolti

**Earliest start time**: Considerare i jobs in ordine ascendente di $sj$

**Earliest finish time**: Considerare i jobs in ordine ascendente di $fj$

**Shortest interval**: Considerare i jobs in ordine ascendente di $fj - sj$

**Fewest conflicts**: Per ogni lavoro $j$, contare il numero di jobs in conflitto $cj$. Schedulare in ordine ascendente di $cj$

![[Pasted image 20250320143144.png | 400]]

```
Earliest-Finish-Time-First (n, s1, s2, ..., sn, f1, f2, ..., fn)

Sort i jobs secondo il finish time e renumerali in modo f1 <= f2 <= ... <= fn

S <-- 0
for j=1 to n
	if (job j è compatibile con S)
		S <-- S U {j}
return S.

```

![[Interval Scheduling.gif]]


#### Costo
Possiamo implementare earliest-finish-time-first in tempo $O(n \log n)$
- Tenere traccia del job $j^*$ che abbiamo aggiunto per ultimo ad $S$
- Job $j$ è compatibile con $S$ se $s_{j} >= f_{j^*}$
- Ordinare da finish time si ottiene $O(n \log n)$ 

#### Analisi dell'algoritmo
- Siano $i_{1}, i_{2}, ..., i_{k}$ il set di jobs selezionati dal *greedy* (ordinati con il finish time)
- Siano $j_{1}, j_{2}, ..., j_{m}$ il set di jobs in una *soluzione ottimale* (ordinati con il finish time)

Denotare con $f(i_{r})$ il finish time dei jobs $i_{r}$

**Lemma**
Per ogni $r = 1,2,...,k$ abbiamo $f(i_{r}) <= f(j_{r})$

*Per induzione*
$r=1$ Ovvio

$r>1$:
![[Pasted image 20250320144746.png | 700]]


>[!info] Teorema
>L'algoritmo earliest-finish-time-first è ottimale.

**Per assurdo**
- Siano $i_{1}, i_{2}, ..., i_{k}$ il set di jobs selezionati dal *greedy* (ordinati con il finish time)
- Siano $j_{1}, j_{2}, ..., j_{m}$ il set di jobs in una *soluzione ottimale* (ordinati con il finish time) 
- Assumere che il greedy non sia ottimale
- Allora $m>k$

![[Pasted image 20250320151527.png | 700]]



#### Interval Partitioning
- $j$ inizia a $s_{j}$ e finisce a $f_{j}$
- **Goal**: trovare il numero minimo delle classi per schedulare tutte le lezioni, in modo tale che due lezioni non occorrano mai nello stesso tempo e nella stessa classe

**Esercizio**
Questo programma usa 4 classi per schedulare 10 lezioni

![[Pasted image 20250320151820.png | 700]]


![[Pasted image 20250320152123.png | 700]]

In questo modo si sono utilizzate 3 classi invece che 4

**input**
- Un set di $n$ intervalli $l_{1}, ..., l_{n}$
- L'intervallo $l_{i}$ ha tempo di inizio $s_{i}$ e tempo di fine $f_{i}$

**Soluzione flessibile**
- Una partizione di intervalli in sottoinsiemi (chiamati classi) $C_{1}, ..., C_{d}$ in modo tale che ogni $C_{i}$ contenga mutualmente intervalli multipli

**Misura (per minimizzare)**
- Numeri di classi


**Template Greedy**
Considerare le lezioni in qualche ordine naturale. Assegnare ad ogni lezione ad una classe accessibile (quale?); allocare una nuova classe se nessuna è disponibile

**Earliest start time**: Considerare le lezioni in ordine ascendente di $sj$

**Earliest finish time**: Considerare le lezioni in ordine ascendente di $fj$

**Shortest interval**: Considerare le lezioni in ordine ascendente di $fj - sj$

**Fewest conflicts**: Per ogni lezione $j$, contare il numero di lezioni in conflitto $cj$. Schedulare in ordine ascendente di $cj$

![[Pasted image 20250320152605.png | 400]]


```
Earliest-start-time-finish(n, s1, s2, ..., sn, f1, f2, ..., fn)

Sort le lezioni con start time e renumerarle in modo tale che s1<=s2<=...<=sn
d <-- 0
for j=1 to n
	if (lezione j è compatibile con qualche classe)
		schedulare la lezione j in qualsiasi classe k
	else
		Allocare una nuova classe d+1
		Schedulare la lezione j nella classe d+1
		d <-- d+1
return schedule.

```


![[Interval Partitioning.gif]]


#### Costo
L'algoritmo earliest-start-time-first può essere implementato in tempo $O(n \log n)$

**Pf.**
- Ordinare per start times costa $O(n \log n)$
- Conservare le classi in una **coda a priorità** (chiave = finish time dell'ultima lezione)
	- per allocare una nuova classe, *Insert* una classe nella coda con priorità
	- per schedulare la lezione $j$ nella classe $k$, *Increase-Key* nella classe $k$ per $f_{j}$
	- per determinare quale lezione $j$ è compatibile con qualsiasi classe, confrontiamo $s_{j}$ per *Find-Min*

- Occorrenze totale delle operazione nella coda con priorità costa $O(n)$, ognuna richiede tempo $O(\log n)$


#### Lower bound per una soluzione ottimale

>[!info] Definizione
>La **profondità** di un insieme di intervalli aperti è il numero massimo di intervalli che contengono un dato punto

*Osservazione chiave*
Numero di classi necessarie >= Profondità

![[Pasted image 20250320153520.png]]

**Osservazione**
L'algoritmo earliest-start-time-first non schedula mai due lezioni *incompatibili* nella stessa classe

**Teorema**
L'algoritmo Earliest-start-time-first è ottimale.

*Pf.*
- Sia $d$ = numero di classi che l'algoritmo alloca
- La classe $d$ è stata aperta perchè c'è bisogno di schedulare una lezione, diciamo $j$, che è incompatibile con una lezione in ogni $d-1$ altre classi
- Pertanto, queste lezioni $d$ finiscono ciascuna dopo $S$
- Dato che abbiamo ordinato secondo lo start time, ognuna di queste lezioni incompatibili iniziano non più tardi di $s_{j}$
- Pertanto, abbiamo $d$ lezioni che si sovrappongono a tempo $s_{j} + \epsilon$ 
- *Osservazione chiave* --> tutte le lezioni usano >= $d$ classi


