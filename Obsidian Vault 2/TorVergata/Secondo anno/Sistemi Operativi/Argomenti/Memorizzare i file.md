**Introduzione al Layout del File System**
- Definizione: Il file system è il metodo utilizzato per organizzare e memorizzare dati sui dispositivi di memoria non volatile
- Importanza: Fornisce un modo strutturato per gestire informazioni come file e directory su dispositivi di memoria
- Partizioni del Disco: Un disco può essere suddiviso in più partizioni, ciascuna con un proprio file system indipendente
- Evoluzione: I metodi di strutturazione del file system variano a seconda dell'epoca del computer, influenzando come i dati vengono gestiti e acceduti

**Vecchio Stile - Bios con MBR (Master Boot Record)**
MBR nel BIOS:
- Situato nel settore 0 del disco, l'MBR è essenziale per l'avvio del computer
- Contiene la tabella delle partizioni con dettagli su inizio e fine di ciascuna partizione
- Identifica la partizione attiva da cui avviare il sistema

Processo di Avvio:
- Il BIOS legge l'MBR per trovare la partizione attiva
- Carica il boot block della partizione attiva per avviare il sistema operativo

Layout del File System:
- Ogni partizione inizia con un boot block, seguito da vari elementi di sistema
- A destra un esempio di layout, includendo superblocco, bitmap, I-node e directory radice

![[Pasted image 20231211102246.png| 500]]


**Nuova Scuola - UEFI (Unified Extensible Firmware Interface)**
UEFI vs BIOS:
- UEFI supera le limitazioni del BIOS tradizionale (max 4 partizioni primarie e 2TB per partizione)
- Introduce una maggiore flessibilità e compatibilità con diverse architetture hardware

GPT (GUID Partition Table):
- UEFI utilizza la GPT per gestire informazioni più dettagliate sulle partizioni
- GPT supporta dischi fino a 8 ZiB e contiene un backup nell'ultimo blocco del disco

EFI System Partition:
- Utilizza un file system FAT per memorizzare i programmi di avvio
- Il firmware UEFI legge la GPT e carica i file dalla partizione EFI per avviare il sistema

![[Pasted image 20231211102313.png]]

