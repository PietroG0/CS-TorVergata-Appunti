Usa la tecnica del divide et impera:
1) Divide: dividi l'array a metà
2) Risolvi i due sottoproblemi ricorsivamente
3) Impera: fondi le due sottosequenze ordinate

![[Pasted image 20231027103255.png]]

*Esempio di esecuzione*

![[Pasted image 20231027103316.png]]


*Procedura Merge*
- Due array ordinati A e B possono essere fusi rapidamente:
-estrai ripetutamente il minimo di A e B e copialo nell'array di output, finchè A oppure B non diventa vuoto
-copia gli elementi dell'array non vuoto alla fine dell'array di output

![[Pasted image 20231027103441.png]]

*Lemma*
La procedure Merge fonde due sequenze ordinate di lunghezza n1 e n2 in tempo Teta(n1 + n2)

*Dim* 
Ogni confronto "consuma" un elemento di una delle due sequenze. Ogni posizione di $X$ è riempita in tempo costante. Il numero totale di elementi è $n1 + n2$. Anche la linea 12 (copia del vettore ausiliario) costa $\Theta(n1+n2)$

![[Pasted image 20231027103633.png]]

*Tempo di esecuzione*
- La complessità temporale del MergeSort è descritto dalla seguente relazione di ricorrenza:
$T(n) = 2T(n/2) + O(n)$

- Usando il Teorema Master si ottiene:
$T(n) = O(n \log n)$

Quanta memoria (ausiliaria) usiamo?
La complessità spaziale del MergeSort è Teta(n)
- la procedura Merge usa memoria ausiliaria pari alla dimensione di porzione da fondere;
- non sono mai attive due procedure di Merge contemporaneamente;
- ogni chiamata di MergeSort usa memoria costante (esclusa quella usata dalla procedura Merge);
- numero di chiamate di MergeSort attive contemporaneamente sono $O(\log n)$;

Il MergeSort non ordina in loco
- occupazione di memoria ausiliaria (oltre input) pari a $\Theta(n)$

