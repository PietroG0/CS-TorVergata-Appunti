#### Come implementare efficientemente un dizionario?
E' possibile garantire che tutte le operazioni su un dizionario di n elementi abbiano tempo O(log n)

*Due Idee*
- Definire un albero (binario) tale che ogni operazione richiede tempo O(altezza albero) --> BST
- Fare in modo che l'altezza dell'albero sia sempre O(log n) --> AVL


#### BST
Albero Binario che soddisfa le seguenti proprietà
- Ogni nodo v contiene un elemento *elem(v)* cui è associata una chiave *chiave(v)* presa da un dominio totalmente ordinato.

Per ogni nodo v vale che:
- Le chiavi nel sottoalbero sinistro di v sono <= chiave(v)
- Le chiavi nel sottoalbero destro di v sono > chiave(v)


![[Pasted image 20241125151112.png | 600]]

###### Algoritmo search
Traccia un cammino nell'albero partendo dalla radice: su ogni nodo, usa la proprietà di ricerca per decidere se proseguire nel sottoalbero sinistro o destro

```
search(chiave k) --> elem
	v <-- radice di T
	while (v != null) do
		if (k = chiave(v)) then return elem(v)
		else if (k < chiave(v)) then v <-- figlio sinistro di v
		else v <-- figlio destro di v
	return null
	
```


###### Algoritmo insert
Aggiunge la nuova chiave come nodo foglia; per capire dove mettere la foglia simula una ricerca con la chiave da inserire

1) Crea un nuovo nodo u con elem=e e chiave=k
2) Cerca la chiave k nell'albero, identificando così il nodo v che diventerà padre di u
3) Appendi u come figlio sinistro/destro di v in modo che sia mantenuta la proprietà di ricerca


#### Predecessore e successore
- Il *predecessore* di un nodo u in un BST è il nodo v nell'albero avente massima chiave <= chiave(u)
- Il *successore* di un nodo u in un BST è il nodo v nell'albero avente minima chiave >= chiave(u)


#### Ricerca del predecessore

```
pred(nodo u) --> nodo
	if (u ha un figlio sinistro sin(u)) then
		return max(sin(u))
	while (parent(u) != null e u è figlio sinistro di suo padre) do
		u <-- parent(u)
	return parent(u)
	
```

![[Pasted image 20241125152004.png | 500]]



###### Algoritmo delete
Sia u il nodo contenente l'elemento e da cancellare:
1) u è una foglia = rimuovila
2) u ha un solo figlio = 
 
![[Pasted image 20240910141116.png | 500]]


3) u ha due figli: sostituiscilo con il predecessore (o successore) (v) e rimuovi fisicamente il predecessore (o successore) (che ha al più un figlio)

![[Pasted image 20240910141253.png | 500]]



#### AVL

*Fattore di bilanciamento* $\beta(v)$ di un nodo v = altezza del sottoalbero sinistro di v - altezza del sottoalbero destro di v

Un albero si dice *bilanciato in altezza* se ogni nodo v ha un fattore di bilanciamento in valore assoluto <= 1

Alberi AVL = alberi binari di ricerca bilanciati in altezza

Generalmente $\beta(v)$ mantenuto come informazione addizionale nel record relativo a v

*Ribilanciamento tramite rotazioni*
- Le rotazioni sono effettuate su nodi sbilanciati
- Sia v un nodo di profondità massima (nodo critico) con fattore di bilanciamento B(v) += 2
- Esiste un sottoalbero T di v che lo sbilancia
- A seconda della posizione di T si hanno 4 casi:
	- Sinistra - sinistra (SS) = T è il sottoalbero sinistro del figlio sinistro di v
	- Destra - destra (DD) = T è il sottoalbero destro del figlio destro di v
	- Sinistra - destra (SD) = T è il sottoalbero destro del figlio sinistro di v
	- Destra - sinistra (DS) = T è il sottoalbero sinistro del figlio destro di v

###### Caso SS

![[Pasted image 20240910145630.png | 600]]

- Si applica una rotazione semplice verso destra su *v*;
- 2 sottocasi possibili:
	- L'altezza di T2 è h --> l'altezza dell'albero coinvolto nella rotazione passa da h+3 a h+2
	- L'altezza di T2 è h+1 --> l'altezza dell'albero coinvolto nella rotazione rimane pari a h+3

![[Pasted image 20240910145831.png|600]]


###### Caso SD

![[Pasted image 20240910145918.png|500]]

- Applicare due rotazioni semplici: una verso sinistra sul foglio sinistro del nodo critico (nodo z), l'altra verso destra sul nodo critico (nodo v)


![[Pasted image 20240910150107.png]]

- I fattori di bilanciamento di tutti i nodi tornano ok
- L'altezza dell'albero dopo la rotazione passa da h+3 a h+2
- Il caso SD può essere provocato sia da inserimenti (in T2 o T3), sia da cancellazioni che abbassano di 1 l'altezza di T4


###### Insert
1) Crea un nuovo nodo u con elem=e e chiave=k
2) Inserisci u come in un BST
3) Ricalcola i fattori di bilanciamento dei nodi nel cammino dalla radice a u: sia v il più profondo nodo con fattore di bilanciamento pari a += 2 (nodo critico)
4) Esegui una rotazione opportuna su v

*Oss*: un solo ribilanciamento è sufficiente, poichè l'altezza dell'albero coinvolto diminuisce di 1, e quindi torna ad essere uguale all'altezza che aveva prima dell'inserimento


###### Delete
1) Cancella il nodo come in un BST
2) Ricalcola il fattore di bilanciamento del padre del nodo eliminato fisicamente, ed esegui l'opportuna rotazione semplice o doppia ove necessario
3) Ripeti questo passo, sino ad arrivare eventualmente alla radice dell'AVL:
	- Se l'altezza del sottoalbero appena ribilanciato è uguale a quella che aveva prima della cancellazione, termina. Invece, se tale altezza è diminuita, risali verso l'alto (cioè vai dal padre del sottoalbero appena ribilanciato), calcola il fattore di bilanciamento, e applica l'opportuno ribilanciamento