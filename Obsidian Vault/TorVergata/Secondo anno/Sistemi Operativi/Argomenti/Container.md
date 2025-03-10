- I container possono eseguire più istanze di un sistema operativo su una singola macchina
- Ogni container condivide il kernel del sistema operativo host e i file binari e le librerie

Gli svantaggi
- Non è possibile eseguire un container con un so completamente diverso da quello dell'host
- A differenza delle vm, non esiste un rigido partizionamento delle risorse.
- I container sono isolati a livello di processo
- Se un container altera la stabilità del kernel sottostante, ciò può influire sugli altri container.

