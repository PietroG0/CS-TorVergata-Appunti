Un mutex è una versione esplicita e semplificata dei semafori, usata per gestire la mutua esclusione di risorse o codice condiviso, quando non bisogna contare accessi o altri fenomeni.

Può essere in due stati.
- Locked
- Unlocked

Un bit basta per rappresentarlo, ma spesso viene usato un intero (0 = unlocked, altri valori = locked)

Due procedure principali: mutex_lock e mutex_unlock

**Funzionamento dei Mutex**
- Quando un thread vuole accedere a una regione critica, chiama mutex_lock
- Se il mutex è unlocked, il thread può entrare; se è locked, il thread attende
- Al termine dell'accesso, il thread chiama mutex_unlock per liberare la risorsa
- Importante: Non si utilizza il "busy waiting"
- Se un thread non può acquisire un lock, chiama thread_yield per cedere la CPU ad un altro thread

- I mutex possono essere implementati nello spazio utente con istruzioni come TSL o XCHG
- Alcuni pacchetti di thread offrono mutex_trylock, tenta di acquisire il lock o restituisce un errore, senza bloccarlo
- I mutex sono efficaci quando i thread operano in uno spazio degli indirizzi comune
- La condivisione di memoria tra processi può essere gestita tramite il kernel o con l'aiuto di sistemi operativi che permettono la condivisione di parti dello spazio degli indirizzi

**Parallelismo e Prestazioni**
- L'efficienza nella sincronizzazione diventa cruciale con l'aumento del parallelismo
- Spin lock e mutex con busy waiting: efficaci per attese brevi, ma sprecano CPU per attese lunghe
- Passaggio al kernel per bloccare processi è oneroso se le contese sono poche
- Soluzione: Futex (Fast User Space Mutex) - combina il meglio di entrambi gli approcci

[[Futex]]
[[Pthread e Mutex]]

**Semafori o Mutex?**
Finalità:
- Mutex: E' utilizzato principalmente per garantire l'eslcusione mutua. E' destinato a proteggere l'accesso a una risorsa condivisa, garantendo che una sola thread possa accedervi alla volta
- Semaforo: Può essere utilizzato per controllare l'accesso a una risorsa condivisa, ma è anche spesso usato per la sincronizzazione tra thread

Semantica:
- Mutex: Di solito ha una semantica di "proprietà", il che significa che solo il thread che ha acquisito il mutex può rilasciarlo
- Semaforo: Non ha una semantica di proprietà. Qualsiasi thread può aumentare o diminuire il conteggio del semaforo, indipendentemente da chi lo ha modificato l'ultima volta

Casistica:
- Per l'esclusione mutua: Un mutex è generalmente preferibile. E' più semplice (di solito ha solo operazioni di lock e unlock) e spesso oltre una semantica più rigorosa e un comportamento più prevedibile 
- Per la sincronizzazione tra thread: Un semaforo può essere più adatto, specialmente quando si tratta di coordinare tra diversi thread o di gestire risorse con un numero limitato di istanze disponibili


