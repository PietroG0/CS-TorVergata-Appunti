#Web 


#### Regole CSS
**Selector** 
- Identifica l'elemento o gli elementi a cui applicar lo stile

**Declaration**
- Costituita da una coppia proprietà valore separati dai ":"
- Fornisce l'istruzione di rendering
- Ogni dichiarazione è delimitata da un ";"

![[Pasted image 20250526140758.png#center | 300]]


**Stili nel head**

**External style sheet**
- Collegato mediante il tah <link>
- file txt con estensione .css dove scriviamo le regole

```CSS
<head>
<link rel = "stylesheet" type="text/css" href="mystyle.css">
</head>
```

```CSS
body {
	background-color: lightblue;
}

h1 {
	color: navy
	margin-left: 20px;
} 
```


**Internal style element**
- Regole nell'head tra i tag <style> ... </style>

``` CSS
<head>
<style>
body {
	backgound-color: linen;
}
h1 {
	color: maroon;
	margin-left: 40 px;
}
</style>
</head>

```



#### Selettori semplici
**Selettore elemento**
- Seleziono tutti gli elementi di quel tipo

Esempio: seleziono tutti i p

``` CSS
p {
	color: red;
	text-align: center;
}
```


**Selettore classe**
Seleziono tutti gli elementi di una classe
- Li individuo con l'attributo class ed un identificatore
- Uso come selettore l'identificatore preceduto dal punto

Esempio

```CSS
<h1 class = "center">Heading</h1>
<p class = "center"> A paragraph</p>

.center {
	text-align: center;
	color: red;
}

p.center {
	text-align: center;
	color: green;
}
```


**Selettore id**
Seleziono l'elemento con quell'id
- Scrivo l'id preceduto dal cancelletto (#)

Esempio: <p id = "para1">...</p>

```CSS
#para1 {
	text-align: center;
	color: red;
}
```

![[Pasted image 20250526141836.png#center | 550]]


**Raggruppare selettori**
- Si possono anteporre più selettori ad un blocco di dichiarazioni

![[Pasted image 20250526142033.png]]



#### Selettori e DOM

**Relazioni nel DOM**
Descendant - discendenti:
- Gli elementi contenuti in un elemento sono i suoi discendenti

Child - figli:
- Discendenti diretti e viceversa si dice genitore (parent)

Ancestor - antenati:
- Gli elementi sopra nell'albero

Parent - genitore:
- Elementi direttamente sopra

Sibling - fratelli
- Elementi con lo stesso parent

![[Pasted image 20250526142224.png#center | 400]]

**Selettori composti**
1. Selettori per descendant (spazio)
2. Selettori per child (>)
3. Selettori per Adjacent sibling (+)
4. Selettori per General sibling ()


#### Pseudo Classi
Una pseudo-classe viene utilizzata per definire uno stato speciale di elemento 
- mouse over
- visited e unvisited link
- focus

``` CSS
selector:pseudo-class {
	property: value;
}

/* visited link */
a.visited {
	color: #00FF00;
}

/* mouse over link */
a_hover {
	color: #FF00FF;
}
```


#### Pseudo elementi
Uno pseudo-elemento viene utilizzato per dare uno stile alle parti specifiche di un elemento
- Disegna la prima lettera o riga di un elemento
- Inserire un contenuto prima o dopo un elemento

Selettori
- ::after
- ::before
- ::first-letter
- ::first-line
- ::selection

```CSS
selector::pseudo-element {
	property:value;
}

p::first-letter {
	color: #ff0000;
	font-size: xx-large;
}
```


#### Selettori con attributi
E' possibile impostare lo stile di elemento HTML con attributi o valori di attributo specifici

```CSS
[attribute] {
	property: value;
}

[attribute=value] {
	property: value;
}

img[alt] {
	background-color: grey;
}

a[target="_blank"] {
	color: red;
}
```


#### Ereditarietà
Alcune proprietà sono ereditate dai *discendenti*
- La dichiarazione color viene passa allo span
- Le altre no

![[Pasted image 20250526145457.png]]


#### Cascade
- Il Cascade *"cascata"* è un algoritmo che definisce come combinare valori di proprietà provenienti da fonti diverse

![[Pasted image 20250526145920.png]]

