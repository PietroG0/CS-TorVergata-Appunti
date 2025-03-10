#Web 
# Grid Layout
## Struttura
![[Pasted image 20240409150058.png|center|500]]
## Sistema
![[Pasted image 20240409150133.png|center|500]]
![[Pasted image 20240409150154.png|center|500]]
## Template
```CSS
display: grid;
grid-template-column: 200px 50px 100px;
grid-template-rows: 100px 30px;
```
```HTML
<div class="wrapper">
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
	<div>6</div>
</div>
```
![[Pasted image 20240409150442.png|center|500]]
## Page Layout
```HTML
<div class="wrapper">
	<header>HEADER</header>
	<nav>MENU</nav>
	<main>CONTENT</main>
	<footer>FOOTER</footer>
</div>
```
```CSS
.wrapper{
	display: grid;
	
}
```

# Bootstrap
Facile da utilizzare: 
- Chiunque con una conoscenza base di HTML e CSS può utilizzarlo.
## Griglia
![[Pasted image 20240412154653.png|center|600]]