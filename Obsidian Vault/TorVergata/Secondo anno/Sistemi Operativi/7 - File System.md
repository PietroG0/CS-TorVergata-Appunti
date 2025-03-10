#Sistemi_operativi 

**Problemi e Requisiti di Memorizzazione nel Computing**
Problemi di Memorizzazione:
- Limitazioni della RAM: La RAM fisica offre uno spazio limitato per salvare dati, insufficiente per molte applicazioni che richiedono molto più spazio, a volte fino a terabyte
- Perdita di Dati: Le informazioni in RAM vanno perse al termine del processo o in caso di crash del computer o blackout
- Accesso Concorrente: La necessità di accesso simultaneo alle informazioni da più processi rende inadeguata la memorizzazione in uno spazio di indirizzi di un unico processo

**Requisiti Essenziali per la Memorizzazione a Lungo Termine**:
1) Capacità di salvare grandi quantità di informazioni
2) Persistenza delle informazioni oltre la vita del processo che le utilizza
3) Accessibilità delle informazioni da più processi simultaneamente

[[Soluzioni di Memorizzazione e ruolo dei File Systems]]

**Cosa sono i File System?**
I file system sono:
- Un modo per organizzare e memorizzare (in modo persistente) le informazioni
- Un'astrazione sui dispositivi di memorizzazione
- Organizzati in file e (tipicamente) directory

![[Pasted image 20231204132630.png]]

[[I file]]

**Come garantire le prestazioni del File System?**
