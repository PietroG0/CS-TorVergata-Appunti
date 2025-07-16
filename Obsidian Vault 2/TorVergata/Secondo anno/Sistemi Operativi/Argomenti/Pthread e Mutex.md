**Pthread**: fornisce funzioni per sincronizzare i thread
**Mutex**:
- variabile che può essere locked o unlocked
- protegge le regioni critiche

**Funzionamento**:
- Thread tenta di lockare un mutex per accedere alla regione critica
- Se mutex è unlocked, l'accesso è immediato e atomico
- Se locked, il mutex attende

![[Pasted image 20231110114357.png]]

![[Pasted image 20231110114409.png]]

