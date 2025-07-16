Obiettivo degli algoritmi di instradamento: determinare percorsi o cammini "buoni" tra le sorgenti e i destinatari attraverso la rete di router
- Percorso: sequenza di router che i pacchetti attraversano dall'host di origine all'host di destinazione
- "Buono": "costo" minimo (anche se occorre considerare ulteriori vincoli, spesso determinati da policy degli amministratori delle reti)

#### Classificazione degli algoritmi di instradamento
- Statici: i percorsi cambiano lentamente nel tempo
- Globali: calcolo logicamente centralizzato o replicato sui tutti i router, basato sulla conoscenza completa della topologia e del costo dei collegamenti
- Decentralizzati: processo di calcolo iterativo, basato sullo scambio di informazioni tra vicini
	- Inizialmente i router conoscono solo il costo dei collegamenti ai loro vicini
	- Algoritmi "distance vector"

- Dinamici: i percorsi cambiano più velocemente, aggiornamenti periodici o in risposta a cambiamenti del costo dei collegamenti

#### Classificazione degli algoritmi di instradamento
- Sensibili al carico: il costo dei collegamenti riflette il livello corrente di congestione
- Insensibili al carico: il costo dei collegamenti non riflette il livello corrente di congestione

#### Instradamento "link-state": algoritmo di Dijkstra
- Centralizzato: la topologia della rete e il costo dei collegamenti sono noti a tutti i nodi
	- informazioni ottenute attraverso un algoritmo di "link state broadcast"
	- tutti i nodi hanno le stesse informazioni

- Calcola i percorsi di costo minimo da un nodo a tutti gli altri nodi
- Iterativo: dopo k iterazioni, conosce il cammino di costo minimo verso k destinazioni

#### Algoritmo distance vector
Basato sulla equazione di Bellman-Ford

![[Pasted image 20240514112238.png]]

Idea chiave:
- Di tanto in tanto, ogni nodo invia ai vicini il proprio vettore delle distanze stimate, distance vector
- Quando x riceve un DV da un qualsiasi vicino, aggiorna la propria DV utilizzando l'equazione B-F
- Sotto certe condizioni minori e naturali, la stima $Dx(y)$ converge verso l'effettivo costo minimo $dx(y)$ 

Ciascun nodo:
1) Attendi un cambiamento del costo di un collegamento locale o un messaggio da un vicino
2) Ricalcola DV usando il DV ricevuto dal vicino
3) Se il DV verso qualsiasi destinazione è cambiato, notifica i vicini

Iterativo, asincrono: ciascuna iterazione locale causata:
- Cambiamento del costo del collegamento locale
- Messaggio di aggiornamento del DV da un vicino 

Distribuito, auto-terminante:
Ciascun nodo notifica i vicini solo quando la sua DV cambia
- I vicini notificano i loro vicini, solo se necessario
- Nessuna notifica ricevuta, nessuna azione intrapresa

#### Vettore di distanza: diffusione di informazioni sullo stato

![[Pasted image 20240514112818.png]]

Cambiamento del costo dei collegamenti:
- Un nodo rileva la modifica del costo del collegamento locale
- Aggiorna le informazioni di instradamento, ricalcola il DV locale
- Se il DV cambia, avvisa i vicini
	- t0 : y rileva la variazione del costo del collegamento, aggiorna il suo DV, informa i suoi vicini
	- t1 : z riceve l'aggiornamento da y, aggiorna la sua DV, calcola di nuovo costo minimo per x e invia ai suoi vicini la sua DV
	- t2 : y riceve l'aggiornamento di z e aggiorna il proprio DV. I costi minimi di y non cambiano, quindi y non invia un messaggio a z

