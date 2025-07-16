#Database 
ER -> Modello relazionale
- Ogni entità diventa una relazione (tabella)
- Ogni attributo di entità diventa un attributo di relazione, ossia una colonna di tabella, ereditando le caratteristiche dell'attributo da cui deriva
- L'identificazione univoco di una entità diventa la chiave primaria (PK) della relazione

![[Pasted image 20231027142734.png]]

ER -> Modello relazionale -1:1
- La relazione 1:1 diventa un'unica relazione che contiene gli attributi della prima e della seconda entità
- Esempio con partecipazione obbligatoria 

![[Pasted image 20231027142946.png]]

- La relazione 1:1 con una entità con partecipazione opzionale viene trattata come una associazione uno a molti scegliendo l'entità con partecipazione opzionale come se fosse a molti
- Se entrambe le entità partecipano in modo opzionale si tratta come una associazione molti a molti

![[Pasted image 20231027143110.png]]


![[Pasted image 20231027143130.png]]

ER -> Modello relazionale - 1:N
- La relazione 1:N viene rappresentata aggiungendo, agli attributi dell'entità che svolge il ruolo a molti, l'identificatore univoco dell'entità col ruolo a uno. Questo identificatore prende il nome di chiave esterna (FK) dell'entità associata. Eventuali attributi dell'associazione vengono inseriti anch'essi nell'entità con ruolo a molti, insieme alla chiave esterna.

- La relazione ricorsiva 1:N è oltre che con due relazioni è traducibile con una sola relazione che contiene due volte l'attributo identificatore, una volta come chiave primaria e una volta come chiave esterna con un nome che riflette il ruolo dell'entità

