#Algoritmi 
Algoritmo che non usa confronti
Per ordinare n interi con valori in $[1, k]$
Mantiene un array y di $k$ contatori tale che $y[x]$ = numero di volte che il valore $x$ compare in $X$

![[Pasted image 20231026152028.png]]

Scorre $y$ da sinistra verso destra e, se $y[x] = k$, scrive in $X$ il valore $x$ per $k$ volte

![[Pasted image 20231026152110.png]]



```
IntegerSort(X, k)
	Sia Y un array di dimensione k
	for i=1 to k do
		Y[i] = 0
	for i=1 to n do
		incrementa Y[X[i]]
	j = 1
	for i=1 to k do
		while(Y[i] > 0) do
			X[j] = i
			incrementa j
			decrementa Y[i]

```


![[Pasted image 20231026152534.png]]

