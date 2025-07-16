- Organizza le _service procedure_ che vengono eseguiti in modo separato
- I processi di sistema comunicano attraverso il passaggio di messaggi
- Le chiamate di sistema si basano sullo stesso meccanismo di messaggistica
- Meccanismo di messaggistica implementato nel kernel minimale -> Microkernel

![[Schermata del 2023-10-12 13-01-05.png]]

_Pro_ :
- Trusted Computing Base (TCB) relativamente "piccolo".
- Ogni processo del sistema operativo può fare solo ciò che è necessario per svolgere il proprio compito
- La compromissione, ad esempio, del driver di stampa non influisce sul resto del sistema operativo.

_Contro_ :
- Il passaggio di messaggi è più lento di una chiamata di funzione (come in un kernel monolitico).

