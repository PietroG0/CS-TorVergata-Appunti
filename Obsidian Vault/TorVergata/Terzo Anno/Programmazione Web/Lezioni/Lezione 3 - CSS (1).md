#Web 

	CSS: Cascading Style Sheets
CSS è un linguaggio facente parte della W3C, e definisce la presentazione del documento HTML ( o in generale XML), cioè come un documento viene visualizzato in contesti diversi.
# Regole del CSS
```CSS
h1 { color: green; }
p { font-size: small; color: black;}
```
1. *Selector* ( selettore ):
	 - Identifica l'elemento o gli elementi a cui applicare lo stile.
2. *Declaration* ( dichiarazione ):
	- Costituita da una coppia proprietà-valore separati dai `:`
	- Fornisce l'istruzione di rendering
	- Ogni dichiarazione è delimitata da un `;`
![[Pasted image 20240313150322.png|center|300]]

## Stili nell'head
>External Style Sheet
>- Collegato mediante il tag `<link>`
>- File txt con estensione .css dove scriviamo le regole

```HTML
<head>
	<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
$\Downarrow$
```CSS
body{
	background-color: lightblue;
}

h1{
	color: navy;
	margin-left: 20px;
}
```

>Internal Style Element
>- Regole nell'head tra i tag `<style>...</style>`

```HTML
<head>
	<style>
		body{
			background-color: linen;
		}
		h1{
			color: maroon;
			margin-left: 40px;
		}
	</style>
</head>
```

### Stile inline
```HTML
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<h1 style="color:red;">This is a Heading</h1>
		<p style="font-size:1.1em;font-family:sans-serif;"> 
		This is a paragraph</p>
	</body>
</html>
```

Definisco lo stile usando l'attributo `<style>`
***NON VA USATO***
## Selettori semplici
### Selettore elemento
Seleziono tutti gli elementi di quel tipo. ES:
```CSS
p {
	color: red;
	text-align: center;
}
```

### Selettore classe
Seleziono tutti gli elementi di una classe. Li individuo con l'attributo class ed un identificatore, e uso come selettore l'identificatore preceduto dal punto. ES:
```HTML
<h1 class="center">Heading</h1>
<p class="center">A paragraph</p>
```
```CSS
.center{
	text-align: center;
	color: red;
}
p.center{
	text-align: center;
	color: green;
}
```

### Selettore id
Seleziono l'elemento con quell'id. ES:
```HTML
<p id="para1">...</p>
```
```CSS
#para1{
	text-align: center;
	color: red;
}
```

## Raggruppare i selettori
```CSS
h1, h2, p{
	text-align: center;
	color: red;
}
```

# Selettori e DOM
## Relazioni nel DOM
- **Descendant** - discendenti:
	- Gli elementi contenuti in un elemento sono i  suoi discendenti.
- **Child** - figli:
	- Discendenti diretti, viceversa sono i genitori ( parent ).
- **Ancestor** - antenati:
	- Gli elementi sopra nell'albero.
- **Parent** - genitore:
	-  Elementi direttamente sopra.
- **Siblings** - fratelli:
	- Elementi con lo stesso parent.
![[Pasted image 20240313162141.png|center|500]]
## Selettori composti
1. Selettori per **descendant** (*spazio*).
2. Selettori per **child** (*>*).
3. Selettori per **adjacent siblings** (*+*).
	1. Il fratello immediatamente successivo.
4. Selettori per **general siblings** ($\sim$).
	1. Tutti i fratelli successivi.
# Pseudo Classi
Una Pseudo-classe viene utilizzata per definire uno stato speciale di un documento:
- Mouse over
- Visited e Unvisited Link
- Focus
```CSS
Selector:pseudo-class{
	property:value;
}
/* visited link */
a:visited{
	color: #00FF00;
}
/* mouse over link */
a:hover{
	color: #FF00FF;
}
```
## Altre pseudo-classi
```CSS
:root
:only-child
:empty
:first-of-type
:first-child
:last-of-type
:last-child
:only-of-type
:nth-child()
:nth-last-child()
:nth-of-type()
:nth-last-of-type
```
## Pseudo elementi
Uno pseudo-elemento viene visualizzato per dare uno stile alle parti specifiche di un elemento:
- Disegna la prima lettera o riga di un elemento
- Inserisce un contenuto prima o dopo un elemento
>Selettori:

```CSS
::after
::before
::first-letter
::first-line
::selection
```
# Selettori con attributi
È possibile impostare lo stile di elementi HTML con attributi o valori di attributo specifici:

```CSS
[attribute]{
	property: value;
}
[attribute=value]{
	property: value;
}
```

# Ereditarietà
Alcune proprietà sono ereditate dai *discendenti*:
- La dichiarazione `color` viene messa nello span;
- Le altre no.
```HTML
<!DOCTYPE html>
<html>
	<head>
		<style>
			p {
				color: white;
				background: grey;
				border: medium solid black;
			}
		</style>
	</head>
	<body>
		<h1> This is a Heading </h1>
		<p>This is a paragraph <span>with a span.</span></p>
	</body>
</html>
```

![[Pasted image 20240318110601.png|center|500]]
## DOM - Albero degli elementi
![[Pasted image 20240318110702.png|center|500]]
## Dichiarazioni ereditate
Gli stili relativi ai font sono ereditati dai descendant:
![[Pasted image 20240318110801.png|center|500]]
### Proprietà ereditate
- azimuth
- border-collapse
- border-spacing
- caption-side
- color
- cursor
- direction
- elevation
- empty-cells
- font-family
- font-size
- font-style
- font-variant
- font-weight
- font
- letter-spacing
- line-height
- list-style-image
- list-style-position
- list-style-type
- list-style
- orphans
- pitch-range
- pitch
- quotes
- stress
- text-align
- text-indent
- text-transform
- visibility
- voice-family
- white-space
- widows
- word-spacing
# Cascade
Il Cascade "*cascata*" è un algoritmo che definisce come combinare valori di proprietà provenienti da fonti diverse.
>**Stili**:
>- *Browser*: user-agent stylesheet
>- *Author*: quello che scriviamo noi
>- *Reader*: L'utente del browser, potrebbe avere uno stylesheet modificato per sua esperienza

