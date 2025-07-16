- Astrazione di un dispositivo di memorizzazione (eventualmente) reale.
- E' possibile leggere e scrivere dati da/su file fornendo una posizione e una quantità di dati da trasferire.
- I file vengono collezionati in directory (o cartelle)
- Una directory conserva un identificatore per ogni file che contiene
- Una directory è un file a sé stante
- La filosofia [[Unix]]: "Everything is a file"

Le directory e i file formano una gerarchia:
- La gerarchia inizia dalla "directory principale" (root)
- E' possibile accedere ai file tramite percorsi assoluti (absolute path).
- Altri filesystem possono essere montati (da mount) nella root

I file sono "protetti" da tuple a tre bit per il proprietario, il gruppo e gli altri utenti
- Le tuple contengono un bit (r)ead, (w)rite, e un bit e(x)ecute 

![[Schermata del 2023-10-11 09-55-22.png]]

