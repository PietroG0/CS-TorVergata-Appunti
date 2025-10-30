Approccio incrementale: estende l'ordinamento da $k$ a $k-1$ elementi, posizionando l'elemento $(k+1)$esimo nella posizione corretta rispetto ai primi $k$ elementi

![[Pasted image 20231027102841.png]]


Se il Selection Sort analizzava la parte "non ordinata" dell'array, l'Insertion Sort si basa sulla parte iniziale dall'array, quindi va a confrontare i numeri successivi con i numeri già visti

```
InsertionSort
for k=0 to n do
	m = k+1
	p = k+2
	if A[p] < A[m]:
		m = p
	scambia A[m] con A[p]
	
```

