#Algoritmi 

Dato un insieme S di n oggetti presi da un dominio totalmente ordinato, ordinare $S$

Approccio incrementale: estende l'ordinamento da $k$ a $k+1$ elementi, scegliendo il minimo degli $n-k$ elementi non ancora ordinati e mettendolo in posizione $k+1$

![[Pasted image 20231027102325.png|565x293]]


```
SelectionSort
for k=0 to n-2 do   # Fino ad n-2 perchè basta confrontare l'ultimo con il penul.
	m = k+1         # k+1 perchè è il primo elemento della parte non ordinata
	for j=k+2 to n do     # k+2 per il confronto con il primo elemento (k+1)
		if (A[j] < A[m] then m=j)
	scambia A[m] con A[k+1]

```

Costo = $O(n^2)$

[Insertion Sort](obsidian://open?vault=Documents&file=CS-TorVergata-Appunti%2F%20Obsidian%20Vault%2FAltri%20Argomenti%2FInsertion%20Sort)
[[Bubble Sort]]

Algoritmi di ordinamento che usano la tecnica del _divide et impera_
[[MergeSort]]
[[Quick Sort]]


