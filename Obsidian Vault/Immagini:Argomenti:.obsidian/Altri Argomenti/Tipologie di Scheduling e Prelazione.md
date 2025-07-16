**Non Preemptive (Senza Prelazione)**:
- Seleziona un processo e lo lascia eseguire fino al blocco o al rilascio volontario
- Nessuna decisione durante gli interrupt del clock
- Ripristina il processo precedente dopo l'interrupt, a meno che non ci sia una priorità superiore

**Preemptive (Con Prelazione)**:
- Sceglie un processo e lo lascia eseguire per un tempo massimo definito
- Se ancora in esecuzione dopo il tempo, è sospeso e viene scelto un altro
- Richiede un interrupt del clock per restituire controllo allo scheduler

**Importanza della Prelazione**:
- Rilevante per le applicazioni e i kernel dei sistemi operativi
- Necessaria per prevenire che un driver o una chiamata di sistema lenti blocchino la CPU
- In un kernel con prelazione, lo scheduler può forzare un cambio di contesto

