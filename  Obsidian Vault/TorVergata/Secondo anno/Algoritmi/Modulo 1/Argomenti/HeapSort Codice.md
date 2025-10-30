```
HeapSort(A)
	Heapify(A)   # O(n)
	Heapsize[A] = n
	for i=n down to 2 do
		scambia A[1] e A[i]
		Heapsize[A] = Heapsize[A]-1
		fixHeap(1,A)

```

Ordina in loco in tempo $O(n \log n)$

Questo algoritmo scambia la radice con il minimo nell'Heap, decrementa heapsize (di conseguenza "taglia fuori" il massimo), utilizza il fixHeap per ricostruire la "gerarchia" dell'heap, e infine, avendo decrementato heapsize, trova il nuovo massimo, così ricorsivamente. 