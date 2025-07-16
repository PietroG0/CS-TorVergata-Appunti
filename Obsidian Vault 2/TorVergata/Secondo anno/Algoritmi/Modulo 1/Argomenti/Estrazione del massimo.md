- Copia nella radice la chiave contenuta nella foglia più a destra dell'ultimo livello

>[!note] Nota
>E' l'elemento in posizione heap-size

- Rimuovi la foglia

>[!note] Nota
>Nella rappresentazione con vettore posizionale vuol dire decrementare heap-size

- Ripristina la proprietà di ordinamento a heap richiamando fixHeap sulla radice

Tempo di esecuzione: $O(\log n)$

