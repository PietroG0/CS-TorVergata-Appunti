Principio di Base
- Il kernel spesso ha bisogno di creare e distruggere piccoli oggetti di dimensioni e tipi specifici
- Senza ottimizzazione, questa operazione potrebbe portare a una significativa frammentazione della memoria

Come funziona
- Nello slab allocation, la memoria è divisa in blocchi chiamati "slabs"
-ulteriormente suddivisi in chunk di dimensioni uniformi, adeguati per ospitare un oggetto di un certo tipo
- Uno slab può essere in uno dei seguenti stati:
- pieno (tutti i chunk sono utilizzati)
- parzialmente pieno (alcuni chunk sono liberi)
- o vuoto (tutti i chunk sono liberi)

![[Pasted image 20231207101451.png| 400]]

**Slab e Caching**
- Quando un oggetto viene deallocato, non viene immediatamente restituito al sistema come memoria libera, viene mantenuto nella cache in modo che, se viene richiesta un'altra istanza dello stesso tipo di oggetto, possa essere rapidamente riallocata senza l'overhead di inizializzazione

![[Pasted image 20231207101653.png| 500]]


