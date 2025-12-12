#Geometria

## Verificare se un vettore è Combinazione lineare
**Obiettivo**: Capire se il vettore $v$ può essere "costruito" usando gli altri vettori $v1, v2$

*Operazione*: Impostare il sistema $a_{1}v_{1} + a_{2}v_{2} = v$

*Esempio*:
Verificare se $v = (2,3)$ è combinazione lineare di $v_{1} = (1,0)$ e $v_{2} = (0, -1)$ 

$$a_{1}(1, 0) + a_{2}(0, -1) = (2,3)$$

$$\begin{cases} a_{1} \cdot 1 + a_{2} \cdot 0 = 2\\
a_{1} \cdot 0 + a_{2} \cdot (-1) = 3\\
\end{cases} \rightarrow 
\begin{cases}a_{1} = 2 \\
-a_{2} = 3 \rightarrow a_{2} = -3\end{cases}$$

*Esito*: Il sistema ha soluzione 2 e -3, quindi $v$ è *combinazione lineare*



## Verificare se i vettori sono Generatori
**Obiettivo**: Capire se i vettori riescono a coprire tutto lo spazio senza lasciare "buchi"

*Operazione*: Uguagliare la combinazione lineare a un vettore generico $(x,y,z)$ e vedere se il sistema è sempre risolvibile

*Esempio*
Siamo in $\mathbb{R}^{3}$. I vettori $v_{1}=(1,0,-1)$ e $v_{2}=(1,0,1)$ generano tutto lo spazio?

$$a_{1}(1,0,-1) + a_{2}(1,0,1) = (x,y,z)$$

Sistema:

$$\begin{cases} a_{1} + a_{2} = x\\
0 \cdot a_{1} + 0 \cdot a_{2} = y \\
-a_{1} + a_{2} = z\end{cases}$$

La seconda equazione dice $0=y$. Questo significa che il sistema ha soluzione *solo se* la coordinata $y$ del vettore generico è 0. Non posso generare vettori come $(2,1,2)$

*Esito*: Non sono generatori di $\mathbb{R}^{3}$ 


## Verificare se i vettori sono Linearmente Indipendenti (L. I.)
**Obiettivo**: Controllare se c'è ridondanza. Se l'unico modo per ottenere zero è moltiplicare tutto per zero, non c'è ridondanza.

*Operazione*: Porre la combinazione lineare uguale a zero $(0,0)$

*Esempio*:
I vettori $v_{1} = (1,1)$ e $v_{2} = (-1,1)$ sono indipendenti?

$$a_{1}(1,1) + a_{2}(-1,1) = (0,0)$$

Sistema:

$$\begin{cases} a_{1} - a_{2} = 0 \rightarrow a_{1} = a_{2}\\
a_{1} + a_{2} = 0\end{cases}$$

Sostituendo $a_{1}$ nella seconda: $a_{2} + a_{2} = 0 \rightarrow 2a_{2} = 0 \rightarrow a_{2} = 0$ 
I vettori sono *Linearmente indipendenti*


## Verificare se i vettori formano una Base
**Obiettivo**: I vettori devono essere sia indipendenti che generatori

*Operazione*: Verifichiamo l'indipendenza e conta i vettori

*Esempio*:
Siamo in $\mathbb{R}^{2}$. Ho i vettori $v_{1} = (1,1)$ e $v_{2} = (-1,1)$. 
Sono una base?

1. *Numero vettori*: Sono 2 vettori in $\mathbb{R}^{2}$
2. *Indipendenza*: Sappiamo che sono L.I 

*Esito*: Essendo $n=2$ vettori indipendenti in uno spazio di dimensione 2, sono automaticamente una *Base*


## Trovare le Coordinate rispetto a una Base
**Obiettivo**: Trovare le "istruzioni" (scalari) per costruire un vettore usando una base specifica diversa da quella standard

*Operazione*: Risolvere il sistema $x \cdot b_{1} + y \cdot b_{2} = v$

*Esempio*:
Base $B = \{(1,1), (1,-1)\}$. Vettore $v = (3,2)$. 
Quali sono le coordinate $v$ in base $B$?

$$a_{1}(1,1) + a_{2}(1, -1) = (3,2)$$

Sistema:

$$\begin{cases} a_{1} + a_{2} = 3\\
a_{1} - a_{2} = 2\end{cases}$$

Sommando le due equazioni: $2a_{1} = 5 \rightarrow a_{1} = \frac{5}{2}$ 
Sostituendo nella prima: $\frac{5}{2} + a_{2} = 3 \rightarrow a_{2} = 3 - 2,5 = \frac{1}{2}$

*Esito*: Le coordinate sono $(\frac{5}{2}, \frac{1}{2})$ 


## Completamento a Base
**Obiettivo**: Abbiamo pochi vettori indipendenti dobbiamo aggiungere uno per fare una base.

*Operazione*: Aggiungere vettori della basse canonica (es. (1,0,0)) e controllare se il determinante (o l'indipendenza) regge

*Esempio*:
Abbiamo $w_{1}, w_{2}$ indipendenti in $\mathbb{R}^{3}$. Ce ne serve un terzo.
Prendiamo $e_{1} = (1,0,0)$ dalla base canonica.
Verifichiamo se $\{w_{1}, w_{2}, e_{1}\}$ sono indipendenti (impostiamo il sistema omogeneo o controlliamo che $e_{1}$ non sia combinazione degli altri).

*Esito*: Se sono indipendenti, hai trovato la nuova base $\{w_{1}, w_{2}, (1,0,0)\}$ 

