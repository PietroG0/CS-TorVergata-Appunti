#Web 
# Gestione del box
## Il box model
Ogni elemento html è contenuto in un box rettangolare. Le proprietà `css` sono applicate al box:
- `width`
- `height`
- `padding`
- `borders`
- `margins`
Si visualizzano i box con la proprietà `border`:
`border: 1px solid black;`
## Il box degli elementi
![[Pasted image 20240319145219.png|center|500]]
![[Pasted image 20240319145246.png|center|500]]
### Dimensioni
>`width`
>*Values*: lenght measurement | percentage | `auto` | `inherit`
>*Default*: `auto`
>*Applies to*: block-level elements and replaced inline elements 
>*Inherits*: no

>`height`
>*Values*: lenght measurement | percentage | `auto` | `inherit`
>*Default*: `auto`
>*Applies to*: block-level elements and replaced inline elements 
>*Inherits*: no

### Padding
>`padding-top`, `padding-right`, `padding-bottom`, `padding-left`
>*Values*: lenght measurement | percentage | `inherit`
>*Default*: `0`
>*Applies to*: all elements except `table-row`, `table-header-group`, `table-footer-group`, `table-column` and `table-column-group`
>*Inherits*: no

>`padding`
>*Values*: lenght measurement | percentage | `inherit`
>*Default*: `0`
>*Applies to*: all elements 
>*Inherits*: no

![[Pasted image 20240319150133.png|center|500]]
### Margin
>`margin-top`, `margin-right`, `margin-bottom`, `margin-left`
>*Values*: lenght measurement | percentage |  `auto` | `inherit`
>*Default*: `auto`
>*Applies to*: all elements 
>*Inherits*: no

>`margin`
>*Values*: lenght measurement | percentage | `auto` | `inherit`
>*Default*: `auto`
>*Applies to*: all elements except elements with table display types other than `table-caption`, `table` e `inline-table` 
>*Inherits*: no

![[Pasted image 20240319150431.png|center|500]]
## Border
Del contorno di un elemento si può specificare:
- `border-style`
- `border-width`
- `border-color`
### Stili del border
>`border-top-style`, `border-right-style`, `border-bottom-style`, `border-left-style`
>*Values*: `none`  | `dotted` | `dashed` | `solid` | `double` | `groove` | `ridge` | `inset` | `outset` | `inherit`
>*Default*: `none`
>*Applies to*: all elements 
>*Inherits*: no
![[Pasted image 20240319155023.png|center|500]]
>`border-style`
>*Values*: `none` | `dotted` | `dashed` | `solid` | `double` | `groove` | `ridge` | `inset` | `outset` | `inherit` 
>*Default*: `none`
>*Applies to*: all elements
>*Inherits*: no

----
## Overflow
>`overflow`
>*Values*: `visible` | `hidden` | `scroll` | `auto` | `inherit` 
>*Default*: `visible`
>*Applies to*: Block-level elements and replaced inline elements
>*Inherits*: no

# Gestione del Background
- `background-color`
	- `opacity`
- Immagini nel background:
	- `background-image`
	- `background-repeat`
	- `background-position`
	- `background-attachment`
## Colore del background
>`background-color`
>*Values*: Color value | `transparent` | `inherit` 
>*Default*: `transparent`
>*Applies to*: all elements
>*Inherits*: no
## Opacità
>`opacity`
>*Values*: Numbers (`0` to `1`) 
>*Default*: `1`
>*Applies to*: all elements
>*Inherits*: no
![[Pasted image 20240320100735.png|center|500]]

```CSS
h1 {
	color: green; background: white; opacity: .25;
}

h1 {
	color: green; background: white; opacity: .5;
}

h1 {
	color: green; background: white; opacity: 1;
}
```

## Immagini per il bg
>`background-image`
>*Values*: url | `none` | `inherit` 
>*Default*: `none`
>*Applies to*: all elements
>*Inherits*: no

### Gestione dello scroll
>`background-attachment`
>*Values*: `scroll` | `fixed` | `local` | `inherit` 
>*Default*: `scroll`
>*Applies to*: all elements
>*Inherits*: no

### Proprietà background
>`background`
>*Values*: `background-color` | `background-image` | `background-repeat` | `background-attachment` | `background-position` | `inherit` 
>*Default*: individual properties
>*Applies to*: all elements
>*Inherits*: no

# Display
>`display`
>*Values*: `inline` | `block` | `list-item` | `inline-block` | `table` | `inline-table` | `table-row-group` | `table-header-group` | `table-footer-group` | `table-row` | `table-column-group` | `table-column` | `table-cell` | `table-caption` | `none` | `run-in` | `compact` | `ruby` | `ruby-base` | `ruby-text` | `ruby-base-container` | `ruby-text-container` 
>*Default*: `inline`
>*Applies to*: all elements
>*Inherits*: yes
# Liste
## Stili per liste

- `list-style-type`
- `list-style-position`
- `list-style-image`
# Stile dei link
## Selettori per link
Specifici dei link:
```CSS
:link - link non visitati
:visited - link già visitati dall'utente
```
Legati ad azioni dell'utente:
```CSS
:focus - l'elemento è selezionato
:hover - il mouse è sopra l'elemento / deve essere dichiarato dopo link e visited
:active - nel momento del click / deve essere dichiarato dopo :hover
```

