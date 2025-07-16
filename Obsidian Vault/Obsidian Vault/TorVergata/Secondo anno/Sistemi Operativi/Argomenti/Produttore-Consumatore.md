Nel problema del produttore-consumatore, due processi condividono un buffer di dimensioni fisse
- Il produttore inserisce informazioni nel buffer, mentre il constumatore lo preleva
- Il produttore si addormenta (entra in modalità sleep) se il buffer è pieno e viene risvegliato (viene riattivato) quando il consumatore preleva dati
- Analogamente, il consumatore dorme se il buffer è vuoto e viene risvegliato quando il produttore inserisce dati

![[Pasted image 20231110105558.png]]

**Bit in attesa del wakeup**
Problema
- Il consumatore potrebbe essere risvegliato un attimo prima di andare a dormire 
- Bit di Attesa può essere aggiunto come rimedio per segnali di risveglio persi

Possibile soluzione
- Si attiva quando un processo non dormiente riceve un "wakeup"
- Se acceso, previene l'entrata in 'sleep' del processo e viene poi spento
- Funziona come accumulatore per segnali di risveglio
- Viene resettato dal consumatore ad ogni ciclo

