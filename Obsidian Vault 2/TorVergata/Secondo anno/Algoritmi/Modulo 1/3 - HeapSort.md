#Algoritmi 
*Stesso approccio incrementale del SelectionSort*
- Seleziona gli elementi dal più grande al più piccolo
- Usa una struttura dati efficiente $O(n \log n)$

*Tipo di dato*
- Specifica una collezione di oggetti e delle operazioni di interesse su tale collezione

*Struttura dati*
- Organizzazione dei dati che permette di memorizzare la collezione e supportare le operazioni di un tipo di dato usando meno risorse di calcolo possibile

*Cruciale = progettare una struttura dati H su cui eseguire efficientemente le operazioni*:
- dato un array A, generare velocemente H
- trovare il più grande oggetto in H
- cancellare il più grande oggetto in H

![[Pasted image 20231026112415.png]]

*Un albero d-ario è completo*: se tutti nodi interni hanno esattamente d figli e le foglie sono tutte allo stesso livello

![[Pasted image 20231026112513.png]]

Struttura dati heap associata ad un insieme S = albero binario radicato con le seguenti proprietà:
1) completo fino al penultimo livello
2) gli elementi di S sono memorizzati nei nodi dell'albero
3) chiave(padre(v) >= chiave(v)) per ogni nodo v diverso dalla radice

![[Pasted image 20231026112638.png]]

1) Il massimo è contenuto nella radice
2) L'albero con n nodi ha altezza $O(\log n)$
3) Gli heap con struttura rafforzata possono essere rappresentati in un array di dimensione pari a n

![[Pasted image 20231026112812.png]]

sin(i) = $2i$
des(i) = $2i+1$
padre(i) = $[i/2]$

E' sufficiente un vettore di dimensione n
In generale dimensione vettore diverso da numero elementi

[[La procedura fixHeap]]
[[Estrazione del massimo]]
[[Costruzione dell'heap]]
[[HeapSort Codice]]

