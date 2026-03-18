#DataMining 

## Implementazione con KD-Tree
Così com'è implementata, la ricerca dei $k$ vicini più prossimi al campione da etichettare ha costo lineare nella dimensione $n$ del training set (assumento $k$ costante rispetto a $n$). Il costo **può diventare logaritmico se i campioni del training set vengono organizzati in un KD-Tree** ($k$-dimensional tree), una struttura dati ad **albero binario che consente una ricerca molto più efficiente** dei vicini più prossimi a un punto dato

>[!tip] Def
>- Ogni nodo $u$ rappresenta un punto a $d$ dimensioni dell'insieme di partenza $X$ (nel nostro caso, un campione del training set)
>- A ogni nodo è **associata una delle $d$ dimensioni**
>- Nel sottoalbero sinistro si trovano i punti con coordinata, rispetto alla dimensione associata al nodo, minore di quella di $u$; nel sottoalbero destro, quelli con coordinata maggiore o uguale
>- La dimensione usata per il confronto si alterna a ogni livello dell'albero


Supponiamo, per semplicità, $d=2$. Si sceglie una dimensione per la radice (es. l'ascissa). **La radice è il punto mediano** di $X$ rispetto a tale coordinata.
- Nel sottoalbero sinistro compariranno tutti i punti con ascissa minore, nel sestro tutti quelli con ascissa maggiore
- Al livello successivo si considera l'altra coordinata (es. l'ordinata)
- Il figlio sinistro della radice sarà il punto mediano rispetto all'ordinata tra quelli nel sottoinsieme sinistro, e così via

Continuando questo processo, lo spazio viene suddiviso ricorsivamente fino ad avere regioni contenenti al massimo un punto

![555](../../../Immagini/Immagini/image-18.png)

Nella figura è mostrato il k-d tree costruito a partire dai punti rappresentati nella figura a sinistra.
Il nodo radice è il punto mediano rispetto alle ascisse.
Al livello successivo si cambia coordinata:
- Il nodo 3 rappresenta il punto con ordinata mediana tra tutti quelli a sinistra della radice.
- Il nodo 2 rappresenta il punto con ordinata mediana tra tutti quelli a destra della radice.

Il processo continua allo stesso modo fino a suddividere lo spazio in regioni contenenti al massimo un punto.
Per costruire il KD-Tree:
- Serve ordinare i punti rispetto alla coordinata scelta per individuare il mediano.
- Per ogni nuovo nodo, i punti vengono partizionati in due insiemi (sinistra/destra).
- L’ordinamento richiede tempo $O(n log n)$ per livello, mentre la partizione è lineare.
- Con un albero bilanciato (altezza logaritmica), la costruzione richiede complessivamente $O(n log² n)$.

### Ricerca

Per trovare i vicini di un punto x sull’albero, **si parte dalla radice, confrontando la coordinata di riferimento del nodo corrente con quella di x**. In base all’esito del confronto si scende nel figlio sinistro o nel figlio destro.

Dopo circa $O(\log n)$ passi si raggiunge un nodo foglia. A questo punto i $k$ vicini più prossimi a $x$ vengono cercati — sfruttando le proprietà geometriche del KD-Tree — non solo nel percorso seguito, ma anche in un numero limitato di regioni vicine che potrebbero contenere punti più vicini di quelli già trovati.

Questo consente di ridurre drasticamente il numero di nodi visitati rispetto alla ricerca esaustiva sull’intero insieme.

Infatti, si può dimostrare che la parte aggiuntiva di ricerca nei sottoalberi “vicini” richiede tempo costante in media, garantendo così un costo medio della ricerca pari a $O(k \log n)$.


### Confronto: Liste Python vs NumPy ndarray

![image-19](../../../Immagini/Immagini/image-19.png)

