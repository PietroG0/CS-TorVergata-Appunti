Il modello relazionale impone ai dati una struttura rigida:
- Le informazioni sono rappresentate per mezzo di ennuple
- Solo alcuni formati di ennuple sono ammessi: quelli che corrispondono agli schemi di relazione
I dati disponibili possono non corrispondere al formato previsto

![[Schermata del 2023-10-19 11-44-01.png]]

Non conviene usare valori del dominio (0, stringa nulla, "99", ...):
- Potrebbero non esistere valori "non utilizzati"
- Valori "non utilizzati" potrebbero diventare significativi
- In fase di utilizzo (nei programmi) sarebbe necessario ogni volta tener conto del "significato" di questi valori

[[Informazione incompleta nel modello relazionale]].
