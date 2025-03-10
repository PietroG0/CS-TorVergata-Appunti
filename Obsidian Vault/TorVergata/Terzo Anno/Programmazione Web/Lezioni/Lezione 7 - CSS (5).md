#Web 
# Struttura della pagina
## Layout delle pagine
- `fixed`
	- Dimensione in pixel fissa
- `fluid`
	- Proporzionale alla larghezza del browser
- `elastic`
	- Proporzionale al testo
- `Hybrid`
	- Misto fra fixed e fluid
![[Pasted image 20240402123603.png|center|500]]
### Layout `fixed`
![[Pasted image 20240402123653.png|center|500]]
#### Discussioni 

>[!important]- Vantaggi
>- Controllo del numero delle righe
>- È semplice da utilizzare
>- È una visualizzazione comune per i desktop

>[!danger]- Svantaggi
>- Se la finestra è piccola la parte destra viene coperta
>- Se lo schermo è grande si hanno spazi a dx e sx da gestire
>- Se si hanno caratteri grandi si hanno anche problemi di righe corte
>- La pagina non è controllabile dall'utente

### Layout `fluid`
![[Pasted image 20240402123952.png|center|500]]
#### Discussioni

>[!important]- Vantaggi
>- Sembra più vicino alla natura dei Browser
>- Elimina spazi potenzialmente vuoti
>- L'utente può controllare la pagina
>- Non si hanno scrollbar orizzontali

>[!danger]- Svantaggi
>- Se il monitor è grande si hanno righe troppo lunghe
>- Non è facile predire la posizione degli elementi e l'effetto grafico finale
>- Problemi nei browser piccoli
>- I conti e le misure sono più complicate

### Layout `hybrid`
![[Pasted image 20240402124258.png|center|400]]
![[Pasted image 20240402124320.png|center|300]]

## Struttura pagina Desktop
![[Pasted image 20240402124520.png|center|300]]

> ILLUSTRAZIONI TECNICHE

# Media query
Definiscono degli stili per determinati media e device
```CSS
@media not|only mediatype and (media feature) {
	CSS-Code;
}
```
```HTML
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
```
## Media type
> `all`, `print`, `screen`, `speech`

```CSS
@media screen {
	p{
		font-family: verdana, sans-serif;
		font-size: 17px;
	}
}

@media print {
	p {
		font-family: georgia, serif;
		font-size: 14px;
		color: blue;
	}
}
```
## Media Features
![[Pasted image 20240404151508.png|center|500]]
