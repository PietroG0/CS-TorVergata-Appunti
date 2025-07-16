#Web 
# Git
Git è un controllo di versione open source e distribuito. È un sistema progettato per la velocità e l'efficienza. Aiuta a:
- Tenere traccia della cronologia di un codice;
- Collaborare al codice in team;
- Scoprire chi ha apportato quali modifiche;
- Distribuire il codice nella gestione temporanea o nella produzione.
## Componenti

>[!important]- Repository
>Il "contenitore" che tiene traccia delle modifiche

>[!important]- Working Tree / Directory
>È costituito da file su cui si sta lavorando

>[!important]- Index / Staging Area
>È dove vengono preparati i commit

![[Pasted image 20240311120417.png|center|400]]
## Processo di base del workflow
1. Modificare i file nel working tree;
2. Eseguire lo staging delle modifiche che si desidera includere nel commit successivo;
3. Eseguire il commit delle modifiche
	- Il commit prenderà i file dall'index e li memorizzerà come snapshot nella repository.
### Commit
![[Pasted image 20240311120629.png|center|500]]
### Repository remote
![[Pasted image 20240311120703.png|center|400]]
# HTML5
## Markup semantico
Lo scopo dell'HTML5 è quello di aggiungere *significato* e *struttura* al contenuto.
	- Non è pensato per fornire istruzioni su come il contenuto deve essere presentato.

>***Markup semantico***:
>Scegliere l'elemento HTML che fornisce la miglior descrizione del contenuto.
>Es. Il titolo più importante all'inizio del documento deve essere circondato con il tag `h1`, senza preoccuparsi di come viene visualizzato di default.

## Organizzare il contenuto
L'esigenza è quella di raggruppare logicamente gli elementi all'interno della pagina. Prima di HTML5 gli unici blocchi erano:
- Block division: `<div>`;
- Inline division: `<span>`.
Invece, con HTML5:
- header: `<header>`;
- footer: `<footer>`
- main: `<main>`;
- sezioni: `<section>`;
- articoli: `<article>`;
- navigazione: `<nav>`;
- contenuto a parte: `<aside>`.
![[Pasted image 20240311121907.png|center|300]]
### L'elemento `<main>`
Il tag `<main>` specifica il contenuto principale di un documento.
- Il contenuto all'interno di questo elemento dovrebbe essere univoco per il documento.
- Ci può essere un solo elemento `<main>` in un documento.
- **NON** deve essere un discendente di un elemento `<article>`, `<aside>`, `<footer>`, `<header>` o `<nav>`.
### L'elemento `<aside>` (sidebar)
	`<aside> .... </aside>`
Sono elementi correlati ma "marginali" rispetto al contenuto. L'utilizzo tipico di questo tag è per:
- Sondaggi;
- Citazioni;
- Informazioni aggiuntive;
- Annunci;
- Link.
Non ha un aspetto di default.
### L'elemento `<nav>`
Si tratta di una sezione che permette la navigazione nel sito, dove tipicamente si mettono delle liste (non tutte).
Nei siti responsive spesso viene compressa per i dispositivi piccoli.

### L'elemento `<header>`
Si usa per materiale introduttivo. I due usi comuni sono come header della pagina o come header di una sezione o articolo. Se viene usato in un articolo tipicamente contiene titolo, autore, data ecc...
### L'elemento `<footer>`
Esso contiene le info che vanno alla fine della sezione logica, con autore, copyright, documenti correlati o link.
Gli usi comuni si trovano a fondo pagina o a fine article o section.
### L'elemento `<section>`
Tratta di sezioni tematiche. Possono contenere heading e paragrafi, o comunque tutti gli elementi che abbia senso raggruppare. Può essere usato in diversi contesti, da dividere le sezioni della pagina a dividere le sezioni di un articolo.
### L'elemento `<article>`
Si utilizza per porzioni di pagina auto-consistenti, teoricamente riusabili in contesti differenti. I contesti operativi sono in blog e giornali.
#### Articoli e sezioni
![[Pasted image 20240311160031.png|center|500]]
### L'elemento `<figure>`
Un'immagine e una didascalia possono essere raggruppate in un elemento `<figure>`
```HTML
<figure>
	<img src="pic_trulli.jpg" alt="Trulli">
	<figcaption> Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
```

## HTML Headings
Sei livelli di intestazione: da `<h1>` fino a `<h6>`. Creano l'indice della pagina, e sono cercati dagli algoritmi dei motori di ricerca nelle pagine. Il miglior utilihzzo è quello di mantenere un ordine logico come negli indici.
### `head` vs `header` vs `h1`,..,`h6`
>`<header>`:
>- Elemento strutturale che identifica un segmento di pagina
>- Posto all'interno del body o di un suo sotto-elemento

>`<head>`:
>- Direttamente incluso nel tag html
>- Non mostrato dal browser
>- Contiene i metadati

>`<h1>`,...,`<h6>`:
>- Identificano i titoli testuali della pagina

## Elenco dei tag
| Comando        | Utilizzo                                                                    |
| -------------- | --------------------------------------------------------------------------- |
| `<p>`          | Paragrafo                                                                   |
| `<hr>`         | Interruzione di pagina                                                      |
| `<pre>`        | Blocco di testo preformattato                                               |
| `<blockquote>` | Contenuto estratto da un altro testo                                        |
| `<ol>`         | Lista ordinata di elementi                                                  |
| `<ul>`         | Lista non ordinata di elementi                                              |
| `<li>`         | Lista di elementi                                                           |
| `<dl>`         | Lista di definizioni                                                        |
| `<dt>`         | Specifica un elemento in una lista di definizioni                           |
| `<dd>`         | Indica la descrizione di un oggetto all'interno di una lista di definizioni |
| `<figure>`     | Contenuto del flusso                                                        |
| `<figcaption>` | Didascalia o Legenda                                                        |
| `<div>`        | Non ha un vero significato                                                  |
| `<main>`       | Il contenuto principale del corpo del documento                             |
### Paragrafi `<p></p>`
Essi servono ad identificare i paragrafi. Possono contenere al loro interno del testo, immagini o degli elementi inline. Se non si chiude l'elemento il browser può chiuderlo in automatico ( chiudilo sempre ).
### L'elemento `<code>`
Viene mostrato in monospace e non è preformattato.
![[Pasted image 20240311162042.png|center|500]]
### Commenti `<!-- ... -->`
Testo non mostrato all'utente e non interpretato dal browser.
![[Pasted image 20240311162158.png|center|500]]
### Immagini `<img>`
```HTML
<img src="happyface.gif" alt="happy">
```

Due attributi:
- **src**: la URL dell'immagine.
- **alt**: testo alternativo
### Elementi ancora
```HTML
<a href="..."></a>
```

Il contenuto dell'elemento diventa attivo e il browser cambia cursore.
#### Attributo `<href>`
Specifica la URL di un documento nel web.
## Indirizzi nelle pagine web : URL
- URL ( Uniform Resource Locator ) 
![[Pasted image 20240311162856.png|center|500]]
I server cercano i file localmente in base al path fornito.