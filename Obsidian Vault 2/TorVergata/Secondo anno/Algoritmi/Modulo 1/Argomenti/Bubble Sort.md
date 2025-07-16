Approccio incrementale. esegue $n-1$ scansioni. Ad ogni scansione guarda coppie di elementi adiacenti e li scambia se non sono nell'ordine

![[Pasted image 20231027102928.png]]


```
def BubbleSort(A):

n = len(A)

# Ciclo esterno per eseguire più passate
for i in range(n):

# Ciclo interno per il confronto tra elementi adiacenti
	for j in range(0, n - i - 1):

# Se l'elemento corrente è maggiore di quello successivo, li scambia
		if A[j] > A[j + 1]:
			A[j], A[j + 1] = A[j + 1], A[j]


# Esempio di utilizzo:
A = [7, 2, 4, 5, 3, 1]
BubbleSort(A)
print("Array ordinato è:", A)

```