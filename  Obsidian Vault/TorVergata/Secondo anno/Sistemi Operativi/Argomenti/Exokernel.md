Idea = Separare il controllo delle risorse dalla macchina estesa

- Exokernel non emula l'hardware
- Fornisce solo una condivisione sicura delle risorse a basso livello

- Ogni macchina virtuale a livello utente esegue il suo sistema operativo, ma è limitata a utilizzare solo le risorse assegnate.
- Rispetto ad altri approcci, l'Exokernel elimina la necessità di mappature complesse, concentrandosi solo su quale macchina virtuale ha accesso a quali risorse.
