Creato per contare e gestire i 'wakeup'
Valori: Può essere:
- 0 (nessun wakeup)
- positivo (wakeup in attesa)

Operazioni:
Down
- Se il valore del semaforo è maggiore di zero, questo valore viene decrementato, e il processo continua la sua esecuzione
- Se il valore del semaforo è 0, il processo che ha invocato down viene bloccato e messo in una coda di attesa associata al semaforo

Up
- Se il valore è 0, ci sono processi nella coda di attesa, vengono "svegliati" (eventualmente per entrare in competizione ed eseguire di nuovo down)
- In ogni caso, il valore viene incrementato e il processo continua la sua esecuzione

**Atomicità**: Le operazioni sui semafori sono "indivisibili", evitando conflitti.

**Problema Produttore-Consumatore**: Uso dei semafori per gestire accesso e capacità di un buffer.
Tipi di semafori:
- mutex (mutual exclusion, accesso esclusivo)
- full (tutti posti occupati)
- empty (tutti posti liberi)

Uso:
- mutex previene accessi simultanei
- full e empty coordinano attività

