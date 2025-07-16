Il modello entità relazione è uno strumento per analizzare le caratteristiche di una realtà in modo indipendente dagli eventi che in essa accadono, cioè per costruire un modello concettuale dei dati indipendente dalle applicazioni

Entità = insieme di oggetti simili, dati dello stesso tipo o con caratteristiche simili, raccolti insieme, Statici e Dinamici

Relazione = Collegamento logico tra due o più entità

Cardinalità = assegnazione di dimensionamento tra entità. Numero min e max di possibili collegamenti tra due entità tramite una relazione

Chiave = Campo o campi identificativi di una entità o relazione

Attributi = Campi informativi e non identificativi di una entità o relazione

Legame logico tra una entità più generale (padre) e le entità figlie.

Modello ER - Entità
- E' un oggetto, concreto o astratto, che ha un significato anche quando viene considerato in modo isolato ed è di interesse per la realtà che si vuole modellare

Modello ER - Relazione
- La relazione è un legame che stabilisce un'interazione tra le entità
- Si rappresenta un solo verso della relazione

![[Pasted image 20231026094055.png]]

Esempio di relazione ricorsiva sull'entità Persona è l'associazione Essere genitore nella quale Persona partecipa con il ruolo di Genitore e di Figlio

![[Pasted image 20231026094149.png]]

Modello ER - Attributi e Chiavi
Attributi
Le proprietà delle entità e delle relazioni sono descritte tramite gli attributi. Alcune caratteristiche che descrivono il Dominio
- Formato: tipi di valore che assume
- Dimensione: quantità max di caratteri o cifre inseribili
- Opzionalità: possibilità di non essere sempre valorizzato

La chiave primaria è un attributo o un insieme di attributi che identificano univocamente un'istanza dell'entità
Spesso, anche in presenza di chiavi palesi, si utilizza un numero progressivo come chiave primaria ovver una chiave artificiale

![[Pasted image 20231026094448.png]]

Modello ER - Proprietà
- Ogni entità deve avere una chiave primaria
- L'attributo chiave primaria non può essere opzionale
- La chiave primaria non può avere valori ripetuti

Dominio
- Tipo di dato: intero, decimale, carattere, data, ...
- Lunghezza: numero di cifre o caratteri per rappresentare il valore dell'attributo
- Intervallo: limite superiore e inferiore di valori
- Vincoli: restrizioni sui valori ammessi
- Supporto del valore NULL, quando non è assegnato nessun valore
- Valore di default
Per le chiavi primarie:
- Il valore deve essere unico e i NULL non son ammessi
Per le chiavi esterne:
- Il tipo di dato, la lunghezza e il formato della chiave esterna devono essere uguali a quelli della corrispondente chiave primaria

