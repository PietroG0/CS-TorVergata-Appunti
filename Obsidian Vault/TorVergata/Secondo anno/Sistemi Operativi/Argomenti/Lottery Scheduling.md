**Concetto di base**:
- Assegnazione di biglietti della lotteria ai processi per le risorse del sistema, come il tempo della CPU
- Estrazione casuale di un biglietto per decidere quale processo ottiene la risorsa
- Esempio: Estrazione 50 volte al secondo -> vincitore riceve 20ms di tempo della CPU

**Distribuzione delle probabilità:
- Biglietti extra per processi più importanti -> maggiori probabilità di vincere
- Esempio: Se un processo ha il 20% dei biglietti, guadagnerà a lungo termine il 20% della CPU

**Proprietà e applicazioni dello Scheduling a Lotteria**
Reattività:
- Risponde velocemente ai nuovi processi grazie alla distribuzione dei biglietti

Cooperazione tra processi:
- Possibilità di scambiarsi biglietti tra processi cooperanti
- Esempio: un processo client dona i suoi biglietti a un processo server per farlo eseguire più rapidamente

Soluzione a problemi complessi:
- Adatto a situazioni dove altri metodi falliscono
- Esempio: Server video con diverse necessità di frequenze di fotogrammi

