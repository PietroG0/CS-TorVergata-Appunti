**Premessa**:
- Tradizionalmente, ogni processo è oggetto di scheduling individualmente
- Es. Se l'utente 1 ha 9 processi e l'utente 2 ne ha 1, con round-robin o priorità uguali, l'utente 1 avrà il 90% della CPU, l'utente 2 solo il 10%

**L'approccio Fair-Share**:
- Considera la proprietà di ogni processo prima di considerarlo
- Ogni utente riceve una frazione predefinita di CPU
- Lo scheduler si assicura che ogni utente riceva la sua frazione, indipendentemente dal numero di processo posseduti

