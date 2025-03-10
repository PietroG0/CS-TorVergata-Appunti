#Reti 

Servizi e protocolli di trasporto
- Forniscono la comunicazione logica tra processi applicativi di host differenti
- I protocolli di trasporto vengono eseguiti nei sistemi periferici
	- lato invio: scinde i messaggi dell'applicazione, combinando ciascuna parte con un'intestazione per creare un segmento e lo passa al livello di rete
	- lato ricezione: riassembla i segmenti in messaggi e li passa al livello di applicazione
- I router nel cammino da un host all'altro operano solo sull'intestazione del datagramma, ignorando il segmento incapsulato al suo interno 

[[Demultiplexing]]
[[UDP User Datagram Protocol]]
[[Obsidian Vault/Trasporto orientato alla connessione TCP]]
[[Principi del controllo della congestione]]

