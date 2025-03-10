20/7/15

Costruire uno schema E-R logico che rappresenti il database di una flotta di Portaerei. Il database deve essere disegnato in modo da evidenziare quali aerei fanno parte di una certa portaerei e inoltre deve tenere memoria del fatto che un' aereo atterra su una portaerei , che può essere anche diversa da quella a cui appartiene. Ci interessa anche sapere quando avvengono gli atterraggi. Si tenga conto delle seguenti specifiche :

gli oggetti da considerare sono le Portaerei, gli Aerei e i Piloti; il pilota di un' aereo guida sempre lo stesso aeroplano ( da questo se ne deduce che i piloti sono di stazionamento solo su una portaerei), un’ aereo appartiene comunque ad una sola portaerei.

#### Entità e attributi

Portaerei
- ID_Portaerei (PK)
- Nome
- Classe
- Dislocamento

Aerei
- ID_Aereo (PK)
- Codice_aereo
- Modello
- ID_Portaerei (FK) REFERENCES (Portaerei)

Pilota
- ID_Pilota (PK)
- Nome
- Cognome
- Grado
- ID_Aereo (FK) REFERENCES (Aerei)

Atterraggio
- ID_Atterraggio (PK)
- Data_Atterraggio
- ID_Aereo (FK) REFERENCES Aerei
- ID_Portaerei (FK) REFERENCES Poeraerei

#### Relazioni

**Portaerei-Aerei**    
 Relazione uno-a-molti: Una portaerei può avere molti aerei, ma un aereo appartiene a una sola portaerei.

**Aerei-Piloti**
Relazione uno-a-uno: Un aereo è guidato da un solo pilota, e un pilota guida un solo aereo.

**Aerei-Atterraggi**
Relazione uno-a-molti: Un aereo può atterrare molte volte, ogni atterraggio è associato a un singolo aereo.

**Portaerei-Atterraggi**
Relazione uno-a-molti: Una portaerei può avere molti atterraggi, ma ogni atterraggio avviene su una sola portaerei.



#### Codice

1. Per ogni aereo si vuole sapere quante volte è atterrato su una portaerei diversa da quella di appartenenza, ed il pilota che lo guida.
    


```
SELECT 
    a.ID_Aereo,
    a.Codice_aereo,
    COUNT(*) AS Numero_atterraggi_su_portaerei_diverse,
    p.Nome,
    p.Cognome
FROM 
    Aerei a
JOIN 
    Atterraggi at ON a.ID_Aereo = at.ID_Aereo
JOIN 
    Piloti p ON a.ID_Aereo = p.ID_Aereo
WHERE 
    a.ID_Portaerei <> at.ID_Portaerei
GROUP BY 
    a.ID_Aereo,
    p.Nome,
    p.Cognome;

```

### Spiegazione Dettagliata

1. **SELECT Clause**:
    
    - `a.ID_Aereo`: Seleziona l'identificativo dell'aereo.
    - `a.Codice_aereo`: Seleziona il codice dell'aereo.
    - `COUNT(*) AS Numero_atterraggi_su_portaerei_diverse`: Conta il numero di volte che l'aereo è atterrato su una portaerei diversa dalla propria. Questo valore sarà restituito con l'alias `Numero_atterraggi_su_portaerei_diverse`.
    - `p.Nome`: Seleziona il nome del pilota.
    - `p.Cognome`: Seleziona il cognome del pilota.
2. **FROM Clause**:
    
    - `Aerei a`: La query parte dalla tabella `Aerei`, abbreviata con l'alias `a`.
3. **JOIN Clause**:
    
    - `JOIN Atterraggi at ON a.ID_Aereo = at.ID_Aereo`: Questa JOIN unisce la tabella `Aerei` con la tabella `Atterraggi` sulla base dell'identificativo dell'aereo (`ID_Aereo`). Questo ci permette di associare ogni aereo ai suoi atterraggi.
    - `JOIN Piloti p ON a.ID_Aereo = p.ID_Aereo`: Questa JOIN unisce la tabella `Aerei` con la tabella `Piloti` sulla base dell'identificativo dell'aereo (`ID_Aereo`). Questo ci permette di associare ogni aereo al pilota che lo guida.
4. **WHERE Clause**:
    
    - `a.ID_Portaerei <> at.ID_Portaerei`: Questa condizione filtra i risultati per includere solo i casi in cui l'aereo è atterrato su una portaerei diversa da quella di appartenenza. In altre parole, confronta l'identificativo della portaerei a cui l'aereo appartiene (`a.ID_Portaerei`) con l'identificativo della portaerei su cui l'aereo è atterrato (`at.ID_Portaerei`).
5. **GROUP BY Clause**:
    
    - `a.ID_Aereo, p.Nome, p.Cognome`: Raggruppa i risultati per aereo e per pilota. Questo assicura che il conteggio (`COUNT(*)`) venga effettuato per ogni aereo-pilota combinazione. In altre parole, fornisce un conteggio separato per ogni aereo e il relativo pilota.


2. 

1. Elencare tutti i piloti che sono sulla (appartengono alla) stessa portaerei del pilota "Pippo".

```
SELECT 
    p2.Nome,
    p2.Cognome
FROM 
    Piloti p1
JOIN 
    Aerei a1 ON p1.ID_Aereo = a1.ID_Aereo
JOIN 
    Aerei a2 ON a1.ID_Portaerei = a2.ID_Portaerei
JOIN 
    Piloti p2 ON a2.ID_Aereo = p2.ID_Aereo
WHERE 
    p1.Nome = 'Pippo';

```


#### Query 2:

- **Obiettivo**: Elencare tutti i piloti che appartengono alla stessa portaerei del pilota "Pippo".
- **JOIN**:
    - `Piloti p1` è unita a `Aerei a1` tramite `p1.ID_Aereo = a1.ID_Aereo` per ottenere la portaerei di appartenenza del pilota "Pippo".
    - `Aerei a1` è unita a `Aerei a2` tramite `a1.ID_Portaerei = a2.ID_Portaerei` per ottenere tutti gli aerei appartenenti alla stessa portaerei.
    - `Aerei a2` è unita a `Piloti p2` tramite `a2.ID_Aereo = p2.ID_Aereo` per ottenere le informazioni dei piloti su quegli aerei.
- **WHERE**: La condizione `p1.Nome = 'Pippo'` assicura che ci stiamo riferendo al pilota "Pippo".


### Passaggi in Algebra Relazionale

1. **Selezionare il pilota "Pippo"**:
    
    $σNome=′Pippo′(Piloti)\sigma_{Nome = 'Pippo'}(Piloti)σNome=′Pippo′​(Piloti)$
    
    Questa operazione seleziona la tupla della tabella `Piloti` dove il nome è "Pippo".
    
2. **Proiettare l'ID dell'aereo guidato da "Pippo"**:
    
    $πID_Aereo(σNome=′Pippo′(Piloti))\pi_{ID\_Aereo}(\sigma_{Nome = 'Pippo'}(Piloti))πID_Aereo​(σNome=′Pippo′​(Piloti))$
    
    Questa operazione proietta l'ID dell'aereo dalla selezione precedente.
    
3. **Selezionare l'aereo con l'ID trovato**:
    
    $σID_Aereo∈(πID_Aereo(σNome=′Pippo′(Piloti)))(Aerei)\sigma_{ID\_Aereo \in (\pi_{ID\_Aereo}(\sigma_{Nome = 'Pippo'}(Piloti)))}(Aerei)σID_Aereo∈(πID_Aereo​(σNome=′Pippo′​(Piloti)))​(Aerei)$
    
    Questa operazione seleziona dalla tabella `Aerei` la tupla con l'ID dell'aereo trovato.
    
4. **Proiettare l'ID della portaerei di stazionamento dell'aereo**:
    
    $πID_Portaerei(σID_Aereo∈(πID_Aereo(σNome=′Pippo′(Piloti)))(Aerei))\pi_{ID\_Portaerei}(\sigma_{ID\_Aereo \in (\pi_{ID\_Aereo}(\sigma_{Nome = 'Pippo'}(Piloti)))}(Aerei))πID_Portaerei​(σID_Aereo∈(πID_Aereo​(σNome=′Pippo′​(Piloti)))​(Aerei))$
    
    Questa operazione proietta l'ID della portaerei dall'aereo selezionato.
    
5. **Selezionare la portaerei con l'ID trovato**:
    
    $σID_Portaerei∈(πID_Portaerei(σID_Aereo∈(πID_Aereo(σNome=′Pippo′(Piloti)))(Aerei)))(Portaerei)\sigma_{ID\_Portaerei \in (\pi_{ID\_Portaerei}(\sigma_{ID\_Aereo \in (\pi_{ID\_Aereo}(\sigma_{Nome = 'Pippo'}(Piloti)))}(Aerei)))}(Portaerei)σID_Portaerei∈(πID_Portaerei​(σID_Aereo∈(πID_Aereo​(σNome=′Pippo′​(Piloti)))​(Aerei)))​(Portaerei)$
    
    Questa operazione seleziona dalla tabella `Portaerei` la tupla con l'ID della portaerei trovato.
    

### Risultato in Algebra Relazionale

Unendo tutti i passaggi, possiamo scrivere l'intera operazione come:

$πNome(σID_Portaerei∈(πID_Portaerei(σID_Aereo∈(πID_Aereo(σNome=′Pippo′(Piloti)))(Aerei)))(Portaerei))\pi_{Nome}(\sigma_{ID\_Portaerei \in (\pi_{ID\_Portaerei}(\sigma_{ID\_Aereo \in (\pi_{ID\_Aereo}(\sigma_{Nome = 'Pippo'}(Piloti)))}(Aerei)))}(Portaerei))πNome​(σID_Portaerei∈(πID_Portaerei​(σID_Aereo∈(πID_Aereo​(σNome=′Pippo′​(Piloti)))​(Aerei)))​(Portaerei))$

Questa operazione, eseguita passo dopo passo, selezionerà la portaerei di stazionamento del pilota "Pippo".



APPELLO 3

-  Costruire uno schema E-R logico che rappresenti il  database di tutti i vari Materiali presenti nelle Aule dei corsi di Laurea, per poter permettere la gestione della presenza e della funzionalità di tali oggetti (proiettori, cavi computer, telecomandi, ecc.) in ogni aula. Il database deve essere costruito in modo da soddisfare le seguenti specifiche :
      

	1. gli oggetti da considerare sono i materiali ( proiettori, cavi, ecc.), le aule dove sono eventualmente posizionati (3A, 17, 1PP2, ecc.) i corsi di laurea (Informatica, Biologia, ecc;
    
	2. ogni materiale non possiede un proprio codice, ma ci interessa sapere se è presente in un’aula e se è funzionante ; 
    
	3. ogni aula è affidata ad un solo corso di laurea , ed un corso di laurea possiede più aule ;
    
	4. ogni aula ha un certo numero di posti;
    
	5. ogni corso di laurea ha una descrizione per esteso ed un Presidente di corso. 
    


2. Costruire quindi lo schema fisico o normalizzato evidenziando chiavi di entità e relazioni ed eventuali attributi utili.

3. Dire quali e quante sono le tabelle necessarie per rappresentare il database.



-  Scrivere le query in MySQL che rispondono alle seguenti domande :

1. In quante (NON quali) aule c’è almeno un oggetto non funzionante. 
    
  

2. Selezionare tutte le aule che appartengono allo stesso corso di laurea a cui è affidata l’ aula 3A, riportando la descrizione del corso ed il suo presidente. 
    

  

3. Calcolare di quanti posti dispone in totale ciascun corso di laurea, riportandone la descrizione.


### Schema E-R Logico

Per rappresentare il database di tutti i vari materiali presenti nelle aule dei corsi di laurea, possiamo identificare le seguenti entità e relazioni:

#### Entità e Attributi:

1. **CorsoDiLaurea**:
    
    - IDCorso (PK)
    - Descrizione
    - Presidente
2. **Aula**:
    
    - IDAula (PK)
    - Nome (es. 3A, 17, 1PP2)
    - NumeroPosti
    - IDCorso (FK)
3. **Materiale**:
    
    - IDMateriale (PK)
    - Nome (es. Proiettore, Cavo, Telecomando)
    - IDAula (FK)
    - Funzionante (BOOLEAN)

#### Relazioni:

1. Un corso di laurea possiede più aule.
2. Un'aula è affidata ad un solo corso di laurea.
3. Un'aula può contenere molti materiali.
4. Un materiale può essere presente in una sola aula.


Query

1. **Quante aule hanno almeno un oggetto non funzionante**:

Per questa query, possiamo utilizzare una `JOIN` per contare le aule con almeno un materiale non funzionante:

```
SELECT COUNT(DISTINCT m.IDAula) AS NumeroAuleConOggettiNonFunzionanti
FROM Materiale m
WHERE m.Funzionante = FALSE;
```


2. **Selezionare tutte le aule che appartengono allo stesso corso di laurea a cui è affidata l’aula 3A, riportando la descrizione del corso ed il suo presidente**:

Questa query può essere realizzata usando un `JOIN` tra le tabelle `Aula` e `CorsoDiLaurea`:

```
SELECT 
    a.Nome,           -- Seleziona il nome dell'aula
    c.Descrizione,    -- Seleziona la descrizione del corso di laurea
    c.Presidente      -- Seleziona il presidente del corso di laurea
FROM 
    Aula a
JOIN 
    CorsoDiLaurea c ON a.IDCorso = c.IDCorso -- Collega le aule ai loro rispettivi corsi di laurea
JOIN 
    Aula a3a ON a3a.IDCorso = c.IDCorso -- Collega la tabella Aula (con alias a3a) per trovare il corso di laurea della 3A
WHERE 
    a3a.Nome = '3A'; -- Seleziona solo l'aula con nome '3A'

```


3. **Calcolare di quanti posti dispone in totale ciascun corso di laurea, riportandone la descrizione**:

Questa query può essere realizzata con una `JOIN` e una funzione di aggregazione `SUM`:

```
SELECT c.Descrizione, SUM(a.NumeroPosti) AS PostiTotali
FROM CorsoDiLaurea c
JOIN Aula a ON c.IDCorso = a.IDCorso
GROUP BY c.Descrizione;
```



```
-- Si vuole sapere i calciatori da quali allenatori sono stati allenati

SELECT
    giocatori.Nome,
    giocatori.Cognome,
    gioca_per.Anno,
    allenatori.Nome,
    allenatori.Cognome
FROM
    giocatori
INNER JOIN gioca_per ON giocatori.ID_Giocatore = gioca_per.ID_Giocatore
INNER JOIN squadre ON gioca_per.ID_Squadra = squadre.ID_Squadra
INNER JOIN allena_per ON squadre.ID_Squadra = allena_per.ID_Squadra
INNER JOIN allenatori ON allena_per.ID_Allenatore = allenatori.ID_Allenatore
ORDER BY
    giocatori.ID_Giocatore;

-- Si vogliono sapere i calciatori che erano nella stessa squadra di "Mario Rossi" nel 2016.

SET
    @squadra_obiettivo =(
    SELECT
        gioca_per.ID_Squadra
    FROM
        giocatori
    INNER JOIN gioca_per ON giocatori.ID_Giocatore = gioca_per.ID_Giocatore
    WHERE
        gioca_per.Anno = 2016 AND giocatori.Nome = "Mario" AND giocatori.Cognome = "Rossi"
);
SELECT
    giocatori.Nome,
    giocatori.Cognome
FROM
    giocatori
INNER JOIN gioca_per ON giocatori.ID_Giocatore = gioca_per.ID_Giocatore
WHERE
    gioca_per.ID_Squadra = @squadra_obiettivo AND gioca_per.Anno = 2016;

-- Calcolare la media dei compensi di tutti i calciatori che hanno guadagnato più di quello che ha guadagnato "Edoardo Barbieri" nell’anno 2024.

SET
    @Compenso_obiettivo =(
    SELECT
        gioca_per.Compenso_Annuale
    FROM
        giocatori
    INNER JOIN gioca_per ON giocatori.ID_Giocatore = gioca_per.ID_Giocatore
    WHERE
        giocatori.Nome = "Mario" AND giocatori.Cognome = "Rossi" AND gioca_per.Anno = 2016
);

SELECT
    ROUND(AVG(gioca_per.Compenso_Annuale),2) AS Compenso_medio
FROM
    giocatori
INNER JOIN gioca_per ON giocatori.ID_Giocatore = gioca_per.ID_Giocatore
WHERE
    gioca_per.Compenso_Annuale > @compenso_obiettivo AND gioca_per.Anno = 2016;
```

