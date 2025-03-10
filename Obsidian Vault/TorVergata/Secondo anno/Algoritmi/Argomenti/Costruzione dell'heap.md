Algoritmo ricorsivo basato sulla tecnica del divide et impera

```
heapify(heap H)
if (H non è vuoto) then
	heapify(sottoalbero sinistro di H)
	heapify(sottoalbero destro di H)
	fixHeap(radice di H,H)

```

Complessità heapify
Sia $h$ l'altezza di un heap con n elementi
Sia $n'>=n$ l'intero tale che un heap con $n'$ elementi ha 
1) altezza $h$
2) è completo fino all'ultimo livello

Vale: $T(n) <= T(n')$ e $n'<=2n$

*Tempo di esecuzione* = $O(n)$

