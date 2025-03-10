#Web

# Pagine web
Le pagine web sono *documenti digitali* identificati da *URL* ( indirizzi ) e normalmente visualizzati mediante un *browser*. Ciò che è di interesse è ciò che succede nell'intervallo di tempo e di azioni del caricamento di un sito.
## Il Browser
Il browser deve:
- Scoprire dove si trova;
- Chiedere che ci venga inviato:
- Controllare e verificare ciò che riceviamo;
- Mostrarlo.
## Indirizzi
Le pagine web vengono trovate tramite un *URL* ( Uniform Resource Locator), ovvero un identificatore per la posizione di un documento.
![[Pasted image 20240306104556.png|center|500]]

# Internet
Internet è un sistema di dispositivi elettronici interconnessi. Ogni computer ha un indirizzo IP ( Internet Protocol ). Chi è connesso alla rete può *condividere informazioni*.
## WWW
Il **World Wide Web** è uno dei modi con cui le *informazioni* possono essere condivise; si tratta di un insieme di pagine wev ed altri documenti collegati tra loro utilizzando i collegamenti ipertestuali ( link ). Il protocollo principale per scambiare documenti è *HTTP* (HyperText Transfer Protocol).
## DNS
All'uomo è comodo dare un nome ai Server, mentre ai computer serve un indirizzo numerico per comunicare con le altre macchine. Esistono dei computer che traducono nomi in indirizzi IP.![[Pasted image 20240306105443.png|center]]
### Server Web
I Server Web sono computer che *rispondono a delle richieste di documenti*.
- In realtà chi offre il servizio è un programma: il **Server Web**;
- Aspetta una richiesta, cerca un documento e lo invia al richiedente;
- Il server web deve parlare HTTP, spesso viene chiamato *Server HTTP*
- I computer server non sono particolari, ogni computer può diventare un server.
 
>[!note]- Server famosi
>- Apache
>- Nginx
>- ecc..

### Client Web
I software che fanno *richieste HTTP* ai server si chiamano **client**.
- Sono clienti dei server;
- I più comuni client web sono i **browser**.

> Richiesta di un documento:
> - L'utente inserisce un indirizzo;
> - Il browser chiede un documento al server;
> - Il server glielo spedisce;
> - Il browser lo mostra all'utente.

![[Pasted image 20240306110212.png|center|600]]
### I Browser
I browser "parlano" HTTO come i server web ( sia le richieste che le risposte sono gestite mediante HTTP).
Richiedono documenti di qualsiasi tipo: testo, immagini, video, script, ecc..
I browser visualizzano i documenti richiesti al server in una finestra ( spesso gli stessi documenti sono mostrati in modo diverso dai diversi browser).
## Gestione di internet
- Internet Engineering Task Force ( *IETF* ): protocollo standard di Internet.
- Internet Corporation for Assigned Names and Numbers ( *ICANN* ): decide i nomi di domini in top-level.
- World Wide Web Consortium ( *W3C* ).
## Cosa c'è dentro una pagina web
- *HyperText Markup Language* ( **HTML** ) : Markup semantico per il contenuto delle pagine web.
- *Cascading Style Sheets* ( **CSS** ): Stile delle pagine web.
- **Javascript**: Aggiunge interattività alle pagine web.
### Markup
Il documento è pieno di tag HTML ($<!DOCTYPE\space html>, <html>, <head>,...$ ).
I tag non sono mostrati dal browser, sono definiti dallo standard e molti di essi sono a coppie, mentre altri non hanno chiusura.
### Aggiungere lo stile
Lo stile è definito in un altro file con estensione .css, il quale contiene delle direttive sull'aspetto della pagina. Le istruzioni riportate sul file segono il linguaggio CSS.
# HTML
	Sigla per HyperText Markup Language
Si tratta di un linguaggio per *strutturare* documenti ipertestuali; è uno standard del W3C ed è lo standard più utilizzato per la creazione di pagine web visualizzabili attraverso i browser.![[Pasted image 20240306115545.png|center|600]]
## Elementi e tag
I tag possono essere annidati:
![[Pasted image 20240306115646.png|center|500]]
Tuttavia è fondamentale evitare degli annidamenti scorretti:
![[Pasted image 20240306115727.png|center|500]]
## Attributi
![[Pasted image 20240306120016.png|center|500]]
Alcuni elementi hanno attributi.
- Coppie chiave-valore definite nel tag di apertura;
- Sono specificati dallo standard per i diversi tag;
- Forniscono informazioni aggiuntive sull'elemento
```HTML
<img src="foods.gif" alt="Food illustration"
```
- Chiave : **src**;
- Valore : *foods.gif*
## Elementi vuoti
Sono definiti con un solo tag e possono contenere attributi.
```HTML
<p>This is a <br> paragraph with a line break.</p>
<img src="img_food.jpg">
```
## Albero degli elementi
![[Pasted image 20240306120548.png|center|600]]
# Struttura di documenti HTML
## Head e Body
![[Pasted image 20240306120718.png|center|600]]

- L'elemento `<html>` è la radice dell'albero e contiene tutti gli altri;
- L'elemento `<head>` fornisce informazioni circa il documento;
- L'elemento `<body>` contiene il contenuto visibile.
## Dichiarazione `<!DOCTYPE>`
La dichiarazione `<!DOCTYPE>` serve a dire al browser il tipo di documento HTML, poiché il browser deve sapere il tipo e la versione dell'HTML da visualizzare.
## Sezione Head
![[Pasted image 20240306121157.png|center|500]]
La sezione `<head>` contiene i metadati relativi alla pagina. Generalmente, il contenuto di questo tag non viene visualizzato nella pagina web
## Titolo della pagina `<title>`
Esso definisce il titolo della pagina visualizzato dal browser nella toolbar. È usato quando la pagina è memorizzata nei preferiti e dai motori di ricerca. Tale elemento è obbligatorio nella pagine, altrimenti il documento HTML non sarebbe valido, ed è unico ( non possono essercene altri ).
## Sezione `<body>`
Essa contiene la parte visibile della pagina, e normalmente è divisa in sezioni.
![[Pasted image 20240306121706.png|center|500]]
