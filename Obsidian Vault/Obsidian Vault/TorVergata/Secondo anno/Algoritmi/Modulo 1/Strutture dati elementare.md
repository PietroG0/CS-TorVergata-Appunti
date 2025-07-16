#Algoritmi 

Tipo di dato:
- Specifica una collezione di oggetti e delle operazioni di interesse su tale collezione

Struttura dati:
- Organizzazione dei dati che permette di memorizzare la collezione e supportare le operazioni di un tipo di dato usando meno risorse di calcolo possibile

**Il tipo di dato Dizionario**

![[Pasted image 20231109141523.png]]

**Il tipo di dato Pila**

![[Pasted image 20231109141551.png]]

**Il tipo di dato Coda**

![[Pasted image 20231109141609.png]]

**Tecniche di rappresentazione dei dati**

Rappresentazioni indicizzate:
- I dati sono contenuti (principalmente) in array
- Array: collezione di celle numerate che contengono elementi di un tipo prestabilito
- Proprietà (forte): gli indici delle celle di un array sono numeri consecutivi
- Proprietà (debole): non è possibile aggiungere nuove celle ad un array

Rappresentazioni collegate:
- I dati sono contenuti in record collegati fra loro mediante puntatori
- I costituenti di base sono i _record_
- I record sono numerati principalmente con il loro indirizzo di memoria
- Record creati e distrutti individualmente e dinamicamente
- Il collegamento tra un record A e un record B è realizzato tramite un puntatore
- Proprietà (forte): è possibile aggiungere o togliere record a una struttura collegata
- Proprietà (debole): gli indirizzi dei record di una struttura collegata non sono necessariamente consecutivi

![[Pasted image 20231109142559.png]]

Realizzazione di un dizionario

Metodo più semplice: array non ordinato
Insert -> $O(1)$
Search -> $O(n)$
Delete -> $O(n)$

Array ordinato
Search -> $O(\log n)$ (ricerca binaria)
Insert -> $\Theta(n)$
Delete -> $\Theta(n)$



