#Algoritmi 
- Ordina n interi con valori in $[1,k]$
- Rappresentiamo gli elementi in base b, ed eseguiamo una serie di BucketSort
- Partiamo dalla cifra meno significativa verso quella più significativa:
-Ordiniamo per l'i-esima cifra con una passata di BucketSort
-i-esima cifra è la chiave, il numero info satellite

![[Pasted image 20231031142521.png]]

**Correttezza**
- Se x e y hanno una diversa t-esima cifra, la t-esima passata di BucketSort li ordina
- Se x e y hanno la stessa t-esima cifra, la proprietà di stabilità del BucketSort li mantiene ordinati correttamente

Dopo la t-esima passata di BucketSort, i numeri sono correttamente ordinati rispetto alle t cifre meno significative

**Tempo di esecuzione**
- $O(\log b \cdot k)$ passate di BucketSort
- Ciascuna passata richiede tempo $O(n+b)$
$= O((n+b) \log b \cdot k)$



