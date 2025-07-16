Sia v la radice di H. Assume che i sottoalberi radicati nel figlio sinistro e destro di v sono heap, ma la proprietà di ordinamento delle chiavi non vale per v. Posso ripristinarla così:

```
fixHeap(nodov, nodo H){
	if (v non è una foglia) then
	sia u il figlio di v con chiave massima
	if (chiave(v) < chiave(u) ) then
		scambia chiave(v) e chiave(u) 
		fixHeap(u, H)
}
```

*Tempo di esecuzione*: $O(\log n)$

Uno pseudocodice di fixHeap più dettagliato

```
fixHeap(i, A)
1) s = sin(i)
2) d = des(i)
3) if (s <= heapsize[A] e A[s]>A[i])
4) then massimo = s
5) else massimo = i
6) if (d <= heapsize[A] e A[d] > A[massimo])
7) then massimo = d
8) if (massimo =! i)
9) then scambia A[i] e A[massimo]
10) fixHeap(massimo, A)


```
