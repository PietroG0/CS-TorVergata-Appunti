**NFU**: Associa un contatore a ogni pagina, incrementato con ogni interrupt del clock in base al bit R
- Tanti accessi ad una pagina -> Alto valore di "frequenza" assegnato alla pagina -> Minore possibilità di rimozione

**Limite di NFU**: Non dimentica l'uso passato, può portare a scelte subottimali in ambienti multi-pass o in fase di boot

**Miglioramento di NFU -> Aging**
- Numero di bit fisso, esempio 8 bit
- Ad ogni interrupt del clock i bit vengono spostati a destra
- Prima dello shift dei contatori, il bit R viene aggiunto al lato sinistro

**Effetto dell'Aging**: Emula LRU, dando meno peso agli usi passati e preferendo le pagine meno referenziate di recente
 

**Limiti e praticità dell'Aging**
- Differenze da LRU: Aging non distingue l'ordine esatto dei riferimenti recenti e ha un orizzonte temporale limitati
- Fattibilità: 8 bit sono generalmente sufficienti per un buon compromesso tra accuratezza e uso di memoria

