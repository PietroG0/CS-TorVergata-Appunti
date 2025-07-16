Premessa:
- Round-robin considera tutti i processi ugualmente importanti
- Alcuni contesti richiedono una gerarchia

**Scheduling a Priorità**:
- Ogni processo ha una priorità assegnata
- La CPU esegue il processo con la priorità più alta tra quelli pronti
- Applicabile anche su singoli PC

![[Pasted image 20231120144330.png]]

**Gestione delle Priorità**:
- Priorità del processo attualmente in esecuzione può diminuire con il tempo
- Se scende sotto quella del processo successivo, avviene un cambio
- Possibilità di assegnare un quanto di tempo: al suo esaurirsi, si passa al processo con priorità appena inferiore
- Evitare che processi rimangano inibiti indefinitivamente, altrimenti potrebbero finire a priorità 0

**Priorità Statica vs Dinamica**:
- Statica: es. gerarchie militari o basate sui costi nel data center
- Dinamica: es. basata sull'utilizzo della CPU o sul comportamento I/O bound

**Strategie combinate e Classi di Priorità**
Raggruppamento in Classi:
- Processi divisi in classi di priorità
- Scheduling a priorità tra le classi, ma round-robin all'interno della stessa classe

