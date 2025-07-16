**Esclusione reciproca con Busy Waiting: Alternanza rigorosa**

![[Pasted image 20231109132648.png]]

Anche questa è una NON soluzione
- Non permette ai processi di entrare nelle loro regioni critiche per due volte di seguito
- Un processo fuori dalla regione critica può effettivamente bloccarne un altro

**Esclusione reciproca con Busy Waiting: Peterson's Algorithm**
Alice e Bob vogliono usare un'unica postazione computer in un ufficio. Ma ci sono delle regole:
- Solo una persona può usare il computer alla volta
- Se entrambi vogliono usarlo contemporaneamente, devono decidere chi va per primo.

**Idea dell'algoritmo**
- Alice o Bob devono segnalare il loro interesse a usare il pc
- Se l'altro non è interessato, la persona interessata può usarlo subito
- Se entrambi mostrano interesse, registrano il loro nome su un foglio. Ma se scrivono quasi allo stesso tempo, l'ultimo nome sul foglio ha la precedenza
- La persona che non ha la precedenza aspetta finchè l'altra non ha finito
- Una volta finito, la persona che ha usato il pc segnala che ha finito, e l'altra può iniziare

![[Pasted image 20231109133116.png]]


**Come è realizzata la mutua esclusione nella CPU?**
E' possibile avvalersi di due istruzioni assembly

Istruzione TSL (Test and Set Lock):
- Presente in computer con più processori
- Legge il contenuto della memoria "Lock", salva un valore non zero, e blocca altre CPU da accesso alla memoria

Istruzione XCHG:
- Scambia i contenuti di due posizioni atomicamente.
- Usata in tutte le CPU x86 Intel per sincronizzazione di basso livello.


**Funzionamento e uso del TSL**
Quando Lock è 0:
- Un processo può impostare lock a 1 con TSL e accedere alla memoria condivisa.
- Al termine, il processo resetta lock a 0.

Metodo per gestire Regioni Critiche:
- Processi chiamano enter_region prima di entrare nella regione critica e leave_region dopo
- Se chiamati correttamente, garantisce la mutua esclusione
- Se usati in modo errato, la mutua esclusione fallisce

![[Pasted image 20231109133544.png]]


**Utilizzo dell'istruzione XCHG**

![[Pasted image 20231109133658.png]]


**Istruzione TSL e XCHG**

TSL
- Legge il contenuto della parola di memoria lock in un registro e salva un valore non zero in lock
- Operazione è indivisibile: nessun altro processore può accedere finchè TSL non è completata
- Bloccare il bus della memoria impedisce altri accessi alla memoria da altre CPU

XCHG
- Scambia i contenuti di due posizioni atomicamente
- Utilizzata dalle CPU x86 Intel per sincronizzazione di basso livello


**Come evitare i Busy Waiting?**
Le soluzioni finora adottate consentono a un processo di tenere occupata la CPU in attesa di poter entrare nella sua regione critica (spin lock) SPRECO DI RISORSE

Soluzione: lasciare che un processo in attesa di entrare nella sua regione critica restituisca volontariamente la CPU allo scheduler.

[[Produttore-Consumatore]]
[[I Semafori]]
[[Readers/Writers]]
[[Mutex e Pthreads]]




