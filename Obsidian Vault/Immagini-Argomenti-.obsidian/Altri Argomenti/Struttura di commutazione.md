#### Struttura di commutazione
- Trasferisce i pacchetti dal collegamento di ingresso al collegamento di uscita appropriato
- Tasso di trasferimento: tasso al quale i pacchetti vengono trasferiti dalla porta di input a quella di output

![[Pasted image 20240426173532.png| 600]]

##### Commutazione in memoria
Router di prima generazione:
- Computer tradizionali con commutazione sotto il diretto controllo della CPU
- Pacchetti copiati nella memoria del sistema
- Velocità limitata dall'ampiezza di banda della memoria

![[Pasted image 20240426173744.png| 600]]

##### Commutazione tramite bus
- Le porte di ingresso trasferiscono un pacchetto direttamente alle porte di uscita tramite un bus condiviso
- Bus contention: velocità di commutazione limitata dalla velocità del bus
- Bus a 32 Gbps, Cisco 5600: velocità sufficiente per router di accesso

##### Commutazione attraverso rete di interconnessione
- Crossbar, reti Clos, altre reti di interconnessione sviluppate originariamente per architetture multiprocessore
- Multistage switch: switch nxn da più stadi di switch più piccoli
- Sfruttare il parallelismo: 
	- frammenta il datagramma in celle di lunghezza fissa all'ingresso
	- commutare le celle attraverso la rete di commutazione, riassemblare il datagramma in uscita
