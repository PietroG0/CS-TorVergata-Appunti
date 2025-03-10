NAT: Tutti i dispositivi della rete locale condividono un solo indirizzo IPv4 per il mondo esterno 

![[Pasted image 20240430130229.png]]

- Tutti i dispositivi della rete locale hanno indirizzi a 32 bit in uno spazio di indirizzi IP "privato" che possono essere utilizzati solo nella rete locale 
- Vantaggi:
	- è necessario un solo indirizzo IP dal provider ISP per tutti i dispositivi
	- può cambiare gli indirizzi degli host nella rete locale senza notificare il mondo esterno
	- può cambiare ISP senza modificare gli indirizzi dei dispositivi nella rete locale
	- sicurezza: dispositivi all'interno della rete locale non direttamente indirizzabili, visibili dall'esterno


Implementazione: i router NAT devono (in maniera trasparente):
- Datagrammi in uscita: sostituire (indirizzo IP sorgente, n. porta sorgente) di ogni datagramma in uscita con (indirizzo IP NAT, nuovo n. porta)
	- I client/server remoti risponderanno con (indirizzo IP NAT, nuovo n. porta) come indirizzo di destinazione
- Ricordare (nella "Tabella di traduzione NAT") ogni coppia di traduzione da (indirizzo IP sorgente, n. porta) a (indirizzo IP NAT, nuovo n. porta)
- Datagrammi in ingresso: sostituire (indirizzo IP NAT, nuovo n. porta) nei campi di destinazione di ogni datagramma in ingresso con il corrispondente (indirizzo IP NAT, nuovo n. porta) memorizzato nella tabella NAT


![[Pasted image 20240430130810.png]]


Il NAT è oggetto di controversie:
- I router "dovrebbero" elaborare i pacchetti solo fino al livello 3
- La "scarsità" di indirizzi dovrebbe essere risolta da IPv6
- Viola il cosiddetto argomento punto-punto (numero di porta manipolato da un dispositivo a livello di rete)
- Attraversamento NAT: cosa succede se un client vuole connettersi a un server dietro NAT?
- Ampiamente utilizzato nelle reti domestiche e istituzionali, nelle reti cellulari 4G/5G


