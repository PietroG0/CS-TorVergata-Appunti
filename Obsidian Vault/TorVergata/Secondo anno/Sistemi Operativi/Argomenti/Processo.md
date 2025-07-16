Concetto chiave in tutti i sistemi operativi
Definizione: Un programma in esecuzione

Il processo è associato:
- a uno spazio di indirizzi
- un insieme di risorse
- registri 
- file aperti
- allarmi

Il processo può essere pensato come un contenitore di tutte le informazioni necessarie per l'esecuzione del programma

![[Schermata del 2023-10-11 09-43-04.png]]

Il Layout dipende da:
- Architettura della macchina
- Il Sistema operativo
- Il programma

Very Basic Layout:
- Stack: Active call data
- Data: Program variables
- Text: Program code

Le informazioni sui processi sono conservate nella tabella dei processi del sistema operativo
Un processo sospeso consiste in una voce della tabella dei processi e nel suo spazio degli indirizzi

Gestione dei processi:
- Operazioni come la creazione, la terminazione, la pausa e la ripresa di un processo

Un processo può creare un altro processo
- Conosciuto come processo "figlio"
- Crea una gerarchia dei processi (o albero)

![[Schermata del 2023-10-11 09-47-30.png]]

I processo sono "di proprietà" di un utente, identificato da un UID
- Ogni processo ha tipicamente l'UID dell'utente che lo ha avviato
- Su [[Unix]], un processo figlio ha lo stesso UID del suo processo padre
- Gli utenti possono essere membri di gruppi, identificato da un GUID 