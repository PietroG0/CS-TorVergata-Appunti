Usa la tecnica del divide et impera:
1) Divide: scegli un elemento x dalla sequenza (perno) e partiziona la sequenza in elementi $<=x$ ed elementi $>x$
2) Risolvi i due sottoproblemi ricorsivamente
3) Impera: restituisci la concatenazione delle due sottosequenza ordinate

(Rispetto al MergeSort, divide complesso ed impera semplice)

Partizione (in loco)
- Scegli il perno
- Scorri l'array "in parallelo" da sinistra verso destra e da destra verso sinistra
-da sinistra verso destra, ci si ferma su un elemento maggiore del perno
-da destra verso sinistra, ci si ferma su un elemento minore del perno
- Scambia gli elementi e riprendi la scansione

![[Pasted image 20231027104527.png]]

![[Pasted image 20231027104550.png]]

```
QuickSort(A, i, f)
1) if (i<f) then
2) m = Partition(A,i,f)
3) QuickSort(A,i,m-1)
4) QuickSort(A,m+1,f)

```

#### *Esempio di esecuzione*

![[Pasted image 20231027104656.png]]

```
QuickSort(A,i,f)
1) if(i<f) then
2) m=Partition(A,i,f)
3) QuickSort(A,i,m-1)
4) QuickSort(A,m+1,f)

```

#### *Analisi nel caso peggiore*
- Ogni invocazione di Partition posiziona almeno un elemento in modo corretto (il perno)
- Quindi dopo $n$ invocazioni di Partition, ognuna di costo $O(n)$ ho il vettore ordinato. Il costo complessivo è quindi $O(n^2)$
- Il caso peggiore si verifica quando il perno scelto ad ogni passo è il minimo o il massimo degli elementi nell'array
- La complessità in questo caso è:
$T(n) = T(n-1)+T(0)+O(n)$
$=T(n-1)+O(1)+O(n)$
$=T(n-1)+O(n)$

$T(n) = O(n^2)$

#### *Caso migliore*

$O(n \log n)$, partizionamento sempre bilanciato 

![[Pasted image 20231027105119.png]]

#### *Intuizioni sul caso medio*
- Problema: la partizione può essere sbilanciata
- la probabilità che ad ogni passo si presenti la partizione peggiore è molto bassa
- per partizioni che non sono "troppe sbiilanciate" l'algoritmo è veloce

- Domanda: quale è la complessità dell'algoritmo supponendo che l'algoritmo di partizionamento produca sempre una partizione proporzionale 9-a-1?
- E se la partizione fosse sempre proporzionale a 99-a-1?

- Nota: sembrano partizioni piuttosto sbilanciate

![[Pasted image 20231027105407.png]]

Versione randomizzata: scegli il perno x a caso fra gli elementi da ordinare

Teorema
L'algoritmo quickSort randomizzato ordina in loco un array di lunghezza n in tempo $O(n^2)$ nel caso peggiore e $O(n \log n)$ tempo atteso

...e se le istanze non sono equiprobabili?

*Versione randomizzata*: scegli il perno $x$ a caso fra gli elementi da ordinare

*Teorema*
L'algoritmo quickSort randomizzato ordina in loco un array di lunghezza n in tempo $O(n^2)$ nel caso peggiore e $O(n \log n)$ con alta probabilità, ovvero con probabilità almeno $1-1/n$


quickSort randomizzato
- nessuna assunzione sulla distribuzione di probabilità delle istanze
- nessun input specifico per il quale si verifica il caso peggiore
- il caso peggiore determinato solo dal generatore di numeri casuale

