#Algoritmi 


#### Weighted interval scheduling
- Job $j$ inizia a $s_{j}$, finisce a $f_{j}$, e ha peso $w_{j} > 0$
- Due jobs sono **compatibili** se non si sovrappongono
- **Goal**: Trovare il sottoinsieme di peso massimo di job mutualmente compatibili

![[Pasted image 20250415131217.png#center| 600]]


**Earliest-finish-time first algorithm**
- Considera i job in ordine crescente di finish time
- Aggiungi i job nel sottoinsieme se sono compatibili con i precedenti job scelti

*Recall*. L'algoritmo Greedy è corretto se tutti i pesi sono 1

*Osservazione*. L'algoritmo Greedy fallisce specularmente per la versione con i pesi (weighted version)

![[Pasted image 20250415131445.png#center | 600]]


**Weighted interval scheduling**
I Jobs sono in ordine crescente di finish time: $f_{1} \leq f_{2} \leq ... \leq f_{n}$ 

*Def*. $p(j)$ = indice più grande $i < j$ tale che il job $i$ è compatibile con $j$
*Ex*. $p(8) = 1, p(7) = 3, p(2) = 0$

![[Pasted image 20250415131754.png#center | 600]]


**Programmazione Dinamica: scelta binaria**

*Def*. $OPT(j)$ = peso massimo di qualsiasi sottoinsieme di job mutualmente compatibili per sottoproblemi solo per i jobs $1, 2, ..., j.$

*Goal*. $OPT(n)$ = massimo peso di qualsiasi sottoinsieme di jobs mutualmente compatibili

*Case 1*. $OPT(j)$ non seleziona il job $j$
- Deve essere una soluzione ottima per il problema dei jobs rimanenti $1,2,...,j-1$ 

*Case 2*. $OPT(j)$ seleziona il job $j$
- Colleziona il profitto $w_{j}$
- Non può usare jobs incompatibili $\{ p(j) + 1, p(j) + 2, ..., j-1\}$ 
- Deve includere la soluzione ottima per il problema dei jobs rimanenti $1,2,...,p(j)$

*Equazione di Bellman*

$$
OPT(j) = 
\begin{cases}
0 \\  
max\{OPT(j-1), w_{j} + OPT(p(j))\} 
\end{cases}
$$


**Bottom-up dynamic** programming

>[!info] **Bottom-Up** $(n, s_{1}, ..., s_{n}, f_{1}, w_{1}, ..., w_{n})$
>
>Ordinare i jobs in ordine di finish time e renumerare in modo tale che $f_{1} \leq f_{2} \leq ... \leq f_{n}.$
>
>Computare $p[1], p[2], ..., p[n]$ con la ricerca binari
>$M[0] \leftarrow 0.$
>**For** $j=1$ To $n$
>	$M[j] \leftarrow max \{ M[j-1], w_{j} + M[p[j]] \}$
>return $M[n].$

**Running time**
La versione bottom-up richiede $O(n \log n)$ 
- Riordina per finish time: $O(n \log n)$ con il mergesort
- Computare $p[j]$ per ogni $j$: $O(n \log n)$ con la ricerca binaria
- Ciclo for richiede $O(n)$


**Weighted interval scheduling: ritornare alla ricorsione**

>[!info] **Brute-Force** $(n, s_{1}, ..., s_{n}, f_{1}, ..., f_{n}, w_{1}, ..., w_{n})$
>Ordinare i jobs per finish time e renumerare in modo che $f_{1} \leq f_{2} \leq ... \leq f_{n}.$
>
>Computare $p[1], p[2], ..., p[n]$ con la ricerca binaria
>
>**Return** Compute-OPT$(n)$

>[!info] **Compute-OPT$(j)$
>
>**If** $(j=0)$
>	return 0.
>else
>	**return** max $\{ Compute-Opt(j-1), w_{j} + Compute-Opt(p[j])$


$$
T(n)
\begin{cases} 
\Theta(1)  \\ \\
2T(n-1) + \Theta(1)
\end{cases}
\rightarrow T(n) = \Theta(2^{n})
$$

*Osservazione*.
L'algoritmo ricorsivo è specularmente lento per i sottoproblemi che so sovrappongono $\rightarrow$ tempo esponenziale

*Ex*. 
Numero di chiamate ricorsive per una famiglia di istanze "layered" che crescono come la sequenza di Fibonacci

![[Pasted image 20250415144127.png#center | 600]]


**Weighted interval scheduling: memorizzazione**

*Programmazione dinamica Top-down*
- Risultato della cache del sottoproblema $j$ in $M[j]$
- Usare $M[j]$ per evitare di risolvere il sottoproblema $j$ più di una volta

![[Pasted image 20250415144702.png#center | 600]]

![[Pasted image 20250415144722.png#center | 600]]


*Claim*.
La versione memorizzata dell'algoritmo richiede tempo $O(n \log n)$

*Pf*.
- Ordinare per finish time: $O(n \log n)$ con il mergesort
- Computare $p[j]$ per ogni $j$: $O(n \log n)$ con la ricerca binaria

- M-Compute-Opt(j): Ogni invocazione richiede tempo $O(1)$ oppure
	1) Ritorna un valore inizializzato $M[j]$
	2) Inizializza $M[j]$ ed esegue due chiamate ricorsive

- Misura del progresso $\phi = \#$ voci inizializzate tra $M[1..n]$ 
	- Inizialmente $\phi = 0;$ per tutto $\phi \leq n.$ 
	- (2) incrementa $\phi$ di 1 $\rightarrow$ $\leq 2n$ chiamate ricorsive

- Il tempo complessivo è di $O(n)$


