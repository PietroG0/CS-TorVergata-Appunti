#### Unificazione

>[!info] Definizione
>Due termini si unificano se sono lo stesso termine o se contengono variabili che possono essere istanziate uniformemente con termini in modo tale che i termini risultanti siano uguali

Questo significa, per esempio, i termini 42 e 42 si unificano, perchè sono lo stesso numero, Il termine X e Y si unificano, perchè sono la stessa variabile.

Di solito non siamo interessati solo al fatto che due termini si unificano, vogliamo anche sapere come devono essere istanziate le variabili per renderle uguali. E Prolog ci fornisce queste informazioni. *Quando Prolog unifica due termini esegue tutte le istanze necessarie, in modo che i termini siano successivamente uguali*. Questa funzionalità, insieme al fatto che ci è consentito costruire termini complessi (ovvero termini strutturati in modo ricorsivo), rende l'unificazione un potente meccanismo di programmazione.

