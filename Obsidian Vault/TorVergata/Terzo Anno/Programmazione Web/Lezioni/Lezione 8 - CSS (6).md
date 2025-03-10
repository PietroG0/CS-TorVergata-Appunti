#Web 
# Dispositivi Mobile
## Siti per dispositivi mobili
- Siti preparati per desktop e mobile;
- Spesso in questi siti siamo costretti a levare molte sezioni del sito:
![[Pasted image 20240404151812.png|center|500]]
## Responsive Web Design
Normalmente i device con lo schermo piccolo tendono a restringere la pagina per adattarla allo schermo:
- Spesso il testo viene ridotto troppo e non si legge;
- I link sono piccoli da cliccare;
- Gestire lo zoom non sempre fornisce una piacevole esperienza.
I siti *Responsive* forniscono layout diversi a seconda della dimensione delle finestre di visualizzazione: Un solo documento per tutti i device ma con stile variabile a seconda dello schermo.
# Responsive
## Tecniche Responsive
![[Pasted image 20240404152129.png|center|600]]
Elementi per un sito Responsive:
1. Controllo viewport;
2. Controllo Layout con Media Queries;
3. Media "fluidi".
## `<meta>` e viewport
## Viewport e dispositivi mobili
- Finestra virtuale in cui viene disegnato il sito.
- I dispositivi mobili *barano*:
	- Dichiarano 980px;
	- Poi adattano ai veri pixel dello schermo:
![[Pasted image 20240404152414.png|center|200]]
### Ridimensionamento dei contenuti
Immagine 320 x 356px:
![[Pasted image 20240404152509.png|center|500]]
## Controllo viewport
Tag `meta` da inserire nell'head html:
```HTML
<meta name="viewport" content="width=device-width, initial scale=1">
```
E l'effetto del meta è questo:
![[Pasted image 20240404152704.png|center|500]]
# Layout Responsive
![[Pasted image 20240404152735.png|center|500]]
## Breakpoints
I breakpoint sono punti su una scala ideale di larghezza del viewport in cui si verifica una qualche modifica al layout della pagina. I breakpoint si definiscono con valori numerici nelle media query:
```CSS
@media only screen and (max-width: 600px){
	body{
		background-color: red;
	}
}
@media only screen and (min-width: 601px) and (max-width; 900px){
	body{
		background-color: skyblue;
	}
}
```
### Device e Breakpoints
![[Pasted image 20240404153037.png|center|500]]
#### Esempi
- **Override**:
![[Pasted image 20240404153111.png|center|300]]
- **Exclusive**:
![[Pasted image 20240404153149.png|center|300]]
- **Desktop first** (`max-width`):
![[Pasted image 20240404153238.png|center|300]]
- **Mobile first** (`min-width`):
![[Pasted image 20240404153316.png|center|300]]
### Graceful Degradation vs. Progressive Enhancement
![[Pasted image 20240404153349.png|center|500]]
