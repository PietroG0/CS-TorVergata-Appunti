#Sicurezza 


#### Problema con la Firma Digitale: **Impersonification Attack**

![[Pasted image 20250427163342.png#center | 600]]


#### RSA Key Transport, **MITM attack**

![[Pasted image 20250428114010.png#center | 600]]

![[Pasted image 20250428114043.png#center | 600]]



#### La soluzione: Certificato Digitale
Per **incatenare** una chiave pubblica ad un soggetto

![[Pasted image 20250428115440.png#center | 600]]

**Cryptographic binding**
- Le firme digitali da un terzo party fidato: **un'autorità certificata**, che garantisce l'integrità del binding. Aka chiedo a qualcuno di cui mi fido di "firmare digitalmente" il rapporto fra il nome e la chiave pubblica. 


![[Pasted image 20250428121616.png#center | 600]]

Un **certificato digitale** viene rilasciato tramite un'autorità di certificazione (Certification Authority o CA). Un certificato digitale collega l'identità di un'entità (in questo caso una banca) alla sua chiave pubblica.

In sintesi:
- La banca crea la coppia di chiavi
- Protegge la sua chiave privata
- Richiede un certificato fornendo il suo nome e la chiave pubblica alla CA
- La CA firma queste informazioni, creando il certificato che garantisce l'autenticità della banca agli altri


![[Pasted image 20250428121849.png#center | 600]]

Dopo che un certificato è stato emesso, bisogna verificare se è **valido ed affidabile** prima di fidarsi dell'identità dichiarata

**Passaggi**
1) Il certificato viene presentato:
	- La banca invia il certificato all'utente
	- Questo certificato contiene:
		- Il nome della banca
		- La chiave pubblica della banca
		- La **firma digitale** della CA che garantisce l'autenticità

2) L'utente verifica la CA:
	- L'utente si chiede: "Mi fido di questa CA?"
	- Controlla se la CA è presente nella sua lista di autorità fidate
		- Se si, procede
		- Se no, non si può fidare del certificato

3) L'utente verifica la firma della CA:
	- Controlla che la firma digitale della CA sul certificato sia **corretta**
	- Se la firma è valida, vuol dire che il certificato **non è stato alterato** e che il nome e la chiave pubblica nel certificato sono davvero quelli garantiti dalla CA


>[!important] Come faccio a capire se sto comunicando davvero con la banca?
>Come facciamo a sapere chi sta dietro al certificato?
> $(CERT = (BankName, BankPK))_{CA\_sign}$, in questo caso $BankPK$ è una chiave **pubblica**, ma solamente uno possiede la **chiave privata corrispondente**, quindi il possesso del certificato si ha nel momento in cui si prova di possedere la chiave privata. Quindi mostrare il certificato **non è sufficiente**. 




#### Metodi per verificare 

![[Pasted image 20250505141428.png#center | 600]]

Illustraimo il **meccanismo di autenticazione tramite firma digitale**, con lo scopo di dimostrare che una parte (in questo caso la banca) possiede effettivamente la **chiave privata** (SK) associata alla propria **chiave pubblica** (PK) contenuta in un certificato.

**Passaggi**
1) Generazione di un NONCE
	- La persona a sinistra **genera un "fresh NONCE"**, ovvero un numero casuale usato solo una volta come **sfida** (challenge)
	- Questo serve per evitare che vengano riutilizzate risposte precedenti (protezione dai replay attack)

2) Invio del certificato della banca
	- La banca fornisce un **certificato** che contiene:
		- Il suo nome (BankName)
		- La sua chiave pubblica (BankPK)

	- Il certificato è firmato da una **Certificate Authority (CA)** fidata, quindi l'utente può fidarsi della chiave pubblica contenuta nel certificato

3) Prova della conoscenza della chiave privata (SK)
	- L'utente sfida la banca chidendole di **firmare il NONCE** con la sua **chiave privata (SK)**
	- Se la banca conosce davvero SK, può firmare il NONCE correttamente

4) Verifica della firma
	- L'utente prende la firma ricevuta dalla banca sul NONCE
	- Usa la **chiave pubblica (PK)** dal certificato per verificare la firma
	- Se la verifica ha successo, significa che la banca conosce la SK corrispondente, e quindi **è autenticata**



![[Pasted image 20250505142700.png#center | 600]]

Qui si mostra l'approccio **duale**, cioè si cifra qualcosa (in questo caso un NONCE), lo si manda al secondo soggetto, e dato che lo cifro con la chiave pubblica, solamente se possiedi la chiave privata (SK) potresti decifrare il NONCE. 


![[Pasted image 20250505143334.png#center | 600]]

Qui si descrive un **approccio pratico del protocollo TLS**, nello specifico quando viene utilizzato il **trasporto della chiave tramite RSA**. 

**Passaggi**
1) Il client genera una chiave simmetrica $K$
	- L'utente genera una **nuova chiave simmetrica ($K$)** 
	- Questa chiave sarà poi usata per cifrare tutto il traffico successivo

2) Il client riceve il certificato della banca
	- Il server (banca) invia il suo **certificato**

3) Il client cifra la chiave $K$ con la chiave pubblica della banca
	- Il client prende la chiave $K$ appena generata e la **critta con la chiave pubblica della banca (BankPK)**
	- Questo valore cifrato viene inviato alla banca
	- Solo la banca, che possiede la **chiave privata RSA corrispondente**, può **decifrare** $K$

4) Scambio di dati cifrati con $K$
	- Dopo che la banca ha decifrato $K$, **entrambi condividono la stessa chiave simmetrica**
	- Da questo punto in poi, tutte le comunicazioni sono cifrate con la **chiave simmetrica $K$**, che è molto più efficiente per cifrare dati rispetto all'RSA

