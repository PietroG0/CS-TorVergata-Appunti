#Database 
**MySql**

- MySql: sistema relazione di gestione per basi di dati (DBMS). E' un RDBMS open source (di Oracle), tra i più utilizzati. incorpora funzioni non open nelle versioni enterprise
- SQL: linguaggio per l'interrogazione dei dati
- MySql Workbench: software per il disegno e modellazione del database

**Comandi base**
show databases; = far vedere tutti i database
use *nome database*
Create database
int 
float (M parte intera, D parte decimale)
double (M, D) = come float ma a doppia precisione

Alfanumerici
char
varchar = lunghezza variabile
text = file 65535 byte
blob = file o immagine

Temporali
datetime = aaaa-mm-gg hh:mm:ss
date = aaaa-mm-gg
time = hh:mm:ss
year = aaaa
timestamp (x) = Variabile a seconda di x che varia da 2 a 14

**Sintassi creazione e cancellazione tabella**
create table <nome> {
	nome_attributo tipo opzioni,
	nome_attributo tipo opzioni,
} opzioni;

drop table <nome>;

MySql supporta diversi tipi di storage engine tra cui i principali sono:
- InnoDB:
supporta le transazioni
supporta i vincoli di chiave esterna
maggiore robustezza ai guasti

- MyISAM
non supporta il sistema transazionale
maggiore efficienza
minore consumo di spazio in memoria secondaria



