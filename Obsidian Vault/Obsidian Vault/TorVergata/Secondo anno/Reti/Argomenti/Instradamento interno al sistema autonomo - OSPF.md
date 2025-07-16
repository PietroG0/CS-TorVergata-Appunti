#### Rendere l'instradamento scalabile
Il nostro studio di routing fino ad ora:
- Tutti i router sono identici
- La rete è "piatta"

Scalabilità: miliardi di destinazioni
- Non può memorizzare tutte le destinazioni nelle tabelle di routing
- Lo scambio di tabelle di instradamento ingolferebbe i collegamenti
- Gli algoritmi distance vector impiegherebbe un tempo enorme per convergere

Autonomia amministrativa:
- Internet: una rete di reti
- Ogni amministratore di rete può voler controllare l'instradamento nella propria rete o nascondere dettagli della sua struttura interna

#### Approccio di Internet al routing scalabile
Aggregare i router in regioni note come "sistemi autonomi"
Un ISP può costituire un unico AS oppure essere partizionato in più AS

Intra-AS (o intra-domain):
instradamento interno al sistema autonomo
- Tutti i router nell'AS devono eseguire lo stesso protocollo di instradamento interno al sistema autonomo
- Tutti in AS differenti possono eseguire differenti protocolli di instradamento interno al sistema autonomo
- Router gateway: sul "bordo" del proprio AS, connesso a uno o più router

Inter-AS (o "inter-domain"):
Instradamento tra sistemi autonomi
- I gateway effettuano l'instradamento inter-AS (come pure l'instradamento intra-AS)

#### OSPF (Open Shortest Path First)
- "Aperto": disponibile pubblicamente
- Classico link-state
	- Ciascun router utilizza il flooding (inondazione) per inviare in broadcast le informazioni circa lo stato dei collegamenti (direttamente su IP invece di utilizzare TCP/UDP) a tutti gli altri router nell'interno AS
	- E' possibile utilizzare più metriche di costo del collegamento: larghezza di banda, ritardo
	- Ogni router dispone di una topologia completa, utilizza l'algoritmo di Dijkstra per calcolare la tabella di inoltro
- Sicurezza: tutti i messaggi. OSPF sono autenticati

##### OSPF gerarchico
- Gerarchia a due livelli: area locale, dorsale
- Annunci link-state inondati solo in area o dorsale
- Ogni nodo ha una topologia dettagliata dell'area; conosce solo la direzione

![[Pasted image 20240515141251.png]]

