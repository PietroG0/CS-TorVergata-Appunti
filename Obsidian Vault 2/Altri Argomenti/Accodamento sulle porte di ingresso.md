##### Accodamento sulle porte di ingresso
- Se la struttura di commutazione è più lenta delle porte di ingresso combinate -> può verificarsi accodamento sulle porte di ingresso
- Ritardo di accodamento e perdite dovute all'overflow dei buffer di input
- Blocco in testa alla coda: Il datagramma accodato all'inizio della coda impedisce agli altri in coda di avanzare


##### Accodamento in uscita
- Buffering richiesto quando i datagrammi arrivano dalla struttura di commutazione più velocemente del tasso di trasmissione del collegamento. Drop Policy: quale datagramma scartare se il buffer non è sufficiente?

- Disciplina di scheduling sceglie tra i datagrammi in coda quale trasmettere

- Buffering quando il tasso di arrivo attraverso la struttura di commutazione supera la velocità delle linee di uscita

