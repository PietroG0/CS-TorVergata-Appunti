#Fondamenti 

![[Pasted image 20231030110701.png]]

- dispositivo interno, che ad ogni istante assume uno stato in un possibile insieme finito predefinito
- uno o più dispositivi di memoria (nastri), sui quali è possibile memorizzare delle informazioni, sotto forma di stringhe di caratteri da alfabeti predefiniti
- nastri costruiti da celle; ogni cella può contenere un carattere
- caratteri letti o scritti per mezzo di testine che possono muoversi lungo i nastri, posizionandosi sulle diverse celle

![[Pasted image 20231030110858.png]]

**Configurazione di un automa**
Insieme delle informazioni necessarie e sufficienti per determinare, in un certo istante, il comportamento futuro dell'automa.
1) stato interno dell'automa;
2) contenuto di tutti i nastri di memoria;
3) posizione di tutte le testine sui nastri;

**Configurazione iniziale**
Configurazione in cui si assume si trovi inizialmente un automa, in presenza di una stringa in input.
Ad esempio:
1) stato predefinito come iniziale;
2) nastri di memoria vuoti eccetto il nastro di input, contenente la stringa;
3) testina del nastro di input sulla cella contenente il primo carattere della stringa;

**Funzione di transizione**
Induce una relazione di transizione tra configurazioni, che associa ad una configurazione un'altra configurazione successiva.
Definita non sull'insieme delle possibili configurazioni, ma su domini e codomini che rappresentano parti di configurazioni, quelle che effettivamente determinano e sono determinate dalla transizione.
L'applicazione della funzione di transizione ad una configurazione si dice transizione o mossa o passo computazionale dell'automa.

**Transizioni**
Dato un automa A e due sue configurazioni ci, cj, la notazione  ![[Pasted image 20231030112100.png]] indica che cj deriva da ci per effetto dell'applicazione della funzione di transizione di A.

**Configurazioni di accettazione**
Sottoinsieme delle possibili configurazioni: determinano, se raggiunte, l'accettazione della stringa in input da parte dell'automa.
Tutte le altre configurazioni sono definite come configurazioni di non accettazione, o di rifiuto.

**Computazione**
Un automa esegue una computazione applicando iterativamente, ad ogni istante, la propria funzione di transizione alla configurazione attuale, a partire dalla configurazione iniziale.

[[Automi a stati finiti]]
