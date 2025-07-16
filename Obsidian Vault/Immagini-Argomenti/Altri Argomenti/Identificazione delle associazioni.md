- Alcuni *attributi* identificati con le classi rappresentano associazioni (ogni attributo di tipo non primitivo dovrebbe essere modellato come un'associazione alla classe che rappresenta quel tipo di dato)
- Ogni *associazione ternaria* dovrebbere essere rimpiazzata con un *ciclo di associazioni binarie*, per evitare problemi di interpretazione
- Nei cicli di associazioni almeno un'associazione potrebbe essere eliminata e gestita come *associazione derivata*, anche se per problemi di efficienza spesso si introducono associazioni ridondanti

#### Specifica delle associazioni
- Per *assegnare nomi alle associazioni* adottare la stessa convenzione usata per gli attributi (le parole devono essere scritte in carattere minuscolo, separate da un carattere di underscore)
- Assegnare *nomi di ruolo* alle estremità dell'associazione (i rolename diventano i nomi degli attributi nella classe opposta dell'associazione)
- Determinare le *molteplicità* delle associazioni (ad entrambe le estremità)


#### Aggregazioni
- Rappresenta una *relazione di tipo "whole part"* (contenimento) tra una classe composta e l'insieme di una o più classi componenti
- Può assumere quattro differenti significati:
	- *ExlusiveOwns*
		- Dipendenza di esistenza
		- Transitività 
		- Asimmetria
		- Proprietà fissa

	- *Owns*
		- Niente proprietà fissa

	- *Has*
		- Niente dipendenza di esistenza
		- Niente proprità fissa

	- *Member*
		- Niente proprietà speciali eccetto la membership



#### Ereditarietà (generalizzazione)
- Usata per rappresentare la *condivisione di attributi ed operazioni* tra classi
- Le caratteristiche comuni sono modellate in una classe più *generica* (*superclasse*), che viene *specializzata* nell'insieme di *sottoclassi*
- Una sottoclasse *eredita* attributi ed operazioni della superclasse
- Caratteristiche:
	- *Sostitubilità*: un oggetto della sottoclasse è un valore legale per una variabile avente come tipo la superclasse (es. una variabile di tipo Frutta può avere un oggetto di tipo Mela come suo valore)
	- *Polimorfismo*: la stessa operazione può avere differenti implementazioni nelle sottoclassi

