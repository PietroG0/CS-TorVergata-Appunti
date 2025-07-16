#Sistemi_operativi 

- **Categorie dei Dispositivi di I/O:**
	- Dispositivi a Blocchi: Archiviazione di informazioni in blocchi di dimensioni fisse (512 a 32.768 byte). Es ssd, dischi fissi magnetici ecc..
	- Caratteristica chiave: ogni blocco può essere letto o scritto indipendentemente
- Dispositivi a Caratteri: Flusso di caratteri senza struttura a blocchi
	- Non indirizzabili, senza operazioni di ricerca. Es stampanti, interfacce di rete, mouse

- Limitazioni della Classificazione:
	- Alcuni dispositivi non si adattano perfettamente a questa classificazione (es. clock, schermi mappati in memoria)
	- Modello comunque utile per astrarre alcuni software di I/O nel sistema operativo

- Applicazioni nel Sistema Operativo:
	- File system gestisce dispositivi a blocchi astratti
	- Software di livello inferiore gestisce le specificità dei dispositivi

![[Pasted image 20231220173539.png| 400]]

**Controller dei Dispositivi - Panoramica Generale**
- Componenti dei Dispositivi di I/O:
	- Composti da una parte meccanica (il dispositivo stesso) e una elettronica (controller del dispositivo o adattatore)
	- Controller spesso integrato nella scheda madre o come scheda aggiuntiva su slot PCIe
- Connettività e Gestione Multi-dispositivo:
	- Controller con connettori per il collegamento a dispositivi
	- Capacità di gestire più dispositivi identici

![[Pasted image 20231220173922.png| 400]]

- Standardizzazione dell'Interfaccia:
	- Interfacce conformi a standard (ANSI, IEEE, ISO) o de facto (SATA, SCSI, SUB, ThunderBolt)
	- Permette la produzione di dispositivi e controller compatibili da diverse aziende
- Interfaccia di Basso Livello:
	- Esempio: flusso seriale di bit in dischi, con preambolo, dati e ECC.
	- Compito del controller: convertire il flusso seriale in blocchi di byte, correggere errori, trasferire in memoria principale
- Impatto sulla Programmazione del Sistema Operativo:
	- Senza il controller, il programmatore dovrebbe gestire dettagli complessi come la modulazione di ciascun pixel
	- Controller inizializzato con parametri essenziali, gestisce autonomamente dettagli complessi


