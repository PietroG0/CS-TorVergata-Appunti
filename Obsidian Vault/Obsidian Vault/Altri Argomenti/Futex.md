
Caratteristica di Linux per implementare lock elementari evitando il kernel finchè non è necessario.
Migliora le prestazioni riducendo il passaggio al kernel
Non standard

**Due parti**:
- Servizio kernel
- Libreria utente

**Operazione**:
- Variabile condivisa nello spazio utente usata come lock
- Il passaggio al kernel avviene solo quando un thread è bloccato da un altro

Quando un lock è rilasciato, il kernel può essere chiamato per svegliare altri processi in attesa