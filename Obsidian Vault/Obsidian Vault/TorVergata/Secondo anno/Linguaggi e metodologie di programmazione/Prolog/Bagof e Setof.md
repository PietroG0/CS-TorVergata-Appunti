#Linguaggi 

```
n(11).
n(2).
n(4).
n(5).
n(8).
n(4).
n(8).


```
#### Bagof
- *Bagof* esegue un'iterazione su tutti i fatti che corrispondono a *n(N)*. Per ogni fatto corrispondente, il valore di *N* viene aggiunto all'elenco *L*
- Poichè ci sono fatti duplicati per 4 e 8, *bagof* includerà quei duplicati nell'elenco risultante *L*


#### Setof
- *Setof* si comporta in modo simile a *bagof* ma con due differenze fondamentali:
	- Unicità: *setof* garantisce che solo elementi univoci vengano aggiunti all'elenco *L*. In questo caso, anche se ci sono duplicati per 4 e 8, *setof* li aggiungerà solo una volta all'elenco
	- Ordinamento: *setof* ordina l'elenco risultante *L* in ordine ascendente


*Output*
*Bagof*:
L = {11, 2, 4, 5, 8, 4, 8}

*Setof*:
L = {2, 4, 5, 8, 11}

In sintesi:
- *bagof* raccoglie tutti gli elementi che soddisfano l'obiettivo, inclusi i duplicati
- *setof* raccoglie solo elementi univoci che soddisfano l'obiettivo e li ordina

