Trashing in presenza di Allocazione Ottimale:
- Anche con il miglior algoritmo, il trashing purtroppo può sempre verificarsi se i set di lavoro di tutti i processi eccedono la memoria disponibile
- Il PFF può segnalare una richiesta collettiva di più memoria senza che nessun processo possa cedere frame

Strategie di Mitigazione:
- Out Of Memory Killer (OOM)
- Swapping:
- Meno drastico dell'OOM Killer, sposta i processi su memoria non volatile, liberando le loro pagine per altri processi
- Può ridurre la richiesta di memoria senza interrompere l'esecuzione dei processi

