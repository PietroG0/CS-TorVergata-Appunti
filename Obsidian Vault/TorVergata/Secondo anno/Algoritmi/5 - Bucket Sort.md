#Algoritmi 
Per ordinare n record con chiavi intere in $[1,k]$

Esempio: ordinare n record con campi:
- nome, cognome, anno di nascita, matricola, ...
- si potrebbe voler ordinare per matricola o per anno di nascita

Input del problema:
- n record mantenuti in un array
- ogni elemento dell'array è un record con:
1) campo chiave (rispetto al quale ordinare)
2) altri campi associati alla chiave (informazione satellite)

- Basta mantenere un array di liste, anzichè di contatori, ed operare come per [[4 - IntegerSort]] 
- La lista $Y[i]$ conterrà gli elementi con chiave uguale a $i$
- Concatenare poi le liste

Tempo $O(n+k)$ come per [[4 - IntegerSort]]

![[Pasted image 20231031142143.png]]

![[Pasted image 20231031142210.png]]


![[Pasted image 20231031142232.png]]

**Stabilità**
- Un algoritmo è stabile se preserva l'ordine iniziale tra elementi con la stessa chiave
- Il BucketSort è stabile se si appendono gli elementi di $X$ in coda alla opportuna lista $Y[i]$

