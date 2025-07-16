**Concetto Principale**:
- Fare promesse concrete sugli standard di prestazione e rispettarle

**Promessa Base**:
- Se ci sono n utenti o processi, ciascuno ottiene più o meno 1/n della potenza della CPU

**Come Funziona**:
- Il sistema tiene traccia di quanta CPU ha ricevuto ogni processo dal momento della sua creazione
- Calcola quanto tempo CPU ogni processo dovrebbe avere
- Valuta il rapporto tra il tempo CPU consumato e quello dovuto
- Esegue il processo con il rapporto più basso finchè non supera il suo concorrente più vicino

