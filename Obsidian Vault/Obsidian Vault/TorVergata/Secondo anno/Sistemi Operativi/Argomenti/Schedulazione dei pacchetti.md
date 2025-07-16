##### Schedulazione dei pacchetti: FCFS
Schedulazione dei pacchetti:
- Decidere quale pacchetto inviare successivamente sul collegamento
	- first come, first served
	- priority
	- round robin
	- weighted fair queueing

- FCFS: Pacchetti trasmessi in ordine di arrivo alla porta di uscita, conosciuta come first-in-first-out

##### Schedulazione dei pacchetti: Priority
Schedulazione con priorità:
- Traffico in arrivo classificato, accodato per classi
- Invia il pacchetto dalla coda non vuota con priorità più alta

![[Pasted image 20240426174901.png| 600]]


##### Schedulazione dei pacchetti: Round Robin
- Traffico in arrivo classificato, accodato per classi
	- qualsiasi campo di intestazione può essere usato per la classificazione

- Il server esegue ciclicamente e ripetutamente la scansione delle code di classe, inviando a turno un pacchetto completo di ogni classe (se disponibile)

![[Pasted image 20240426175039.png| 500]]


##### Schedulazione dei pacchetti: Weighted Fair Queueing
- Generalizza Round Robin
- Ciascuna classe, i, ha un peso, wi, e riceve una quantità ponderata di servizio di ogni ciclo: $wi/sommatoria di j*wj$ 
- Garazia di larghezza di banda minima (per classe di traffico)

![[Pasted image 20240426175255.png| 500]]

