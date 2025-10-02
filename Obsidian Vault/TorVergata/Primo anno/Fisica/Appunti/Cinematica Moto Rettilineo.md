#Fisica 

#### Moto Unidimensionale
La *cinematica* è quella branca della fisica che studia il moto dei corpi, senza considerare le cause del moto stesso. 

>[!info] Moto
>Variazione nel tempo della posizione di un corpo rispetto a un osservatore


Questo è il primo esempio di *Modello* di un sistema fisico.
Il *Moto Unidimensionale*, o Moto rettilineo, si svolge lungo una direzione fissata (linea retta). E' quindi possibile associare alla retta lungo la quale si svolge il moto un sistema di *coordinate spaziali* rappresentato da un *asso orientato*

![[../../../../Immagini-Argomenti-.obsidian/Immagini/Immagini/Pasted image 20250808180728.png |center | 500]]

Un corpo in moto lungo la retta considerata, a ogni istante si trova una certa posizione individuata dalle coordinate $x(t)$ (che si legge "x di t", cioè "x funzione del tempo t")

Consideriamo il moto del corpo tra l'istante $t_{i}$ e l'istante $t_{f} > t_{i}$, individuiamo con il simbolo $\Delta t$ la quantità $t_{p} - t_{i}$, cioè 
$$
\Delta t = t_{f} - t_{i}
$$ è *l'intervallo di tempo tra l'istante ti e l'istante tf*;

Individuiamo poi con $\Delta x$ la variazione della posizione del corpo in questo intervallo di tempo, cioè poniamo:
$$
\Delta x = x_{f} - x_{i} \quad \text{essendo} \quad x_{i}= x(t_{i}) \quad e \quad x_{f} = x(tf)
$$
Si definisce *velocità media* del corpo considerato nell'intervallo di tempo $\Delta t$ la quantità 
$$
v_{x, med} = \frac{\Delta x}{\Delta t} = \frac{x_{f} - x_{i}}{t_{p} - t_{i}}
$$
che evidentemente si misura in $m/s$, che si può scrivere $m \cdot s^{-1}$ 

>[!danger] Attenzione
>La velocità media così definita **non dipende dal percorso seguito tra gli istanti** $t_{i}$ e $t_{f}$

*Esempio*: se con un'auto ci spostiamo lungo una linea retta e risulta $x_{f} = x_{i}$, la velocità media nell'intervallo di tempo $\Delta t = t_{f} - t_{i}$ è **uguale a zero**, anche se il tachimetro durante il viaggio ha indicato una velocità non nulla per la maggior parte del tempo; questo è possibile, ad esempio, se l'auto parte verso destra lungo la retta e poi inverte il moto e torna verso sinistra e si ferma nel punto con coordinata $x_{f} = x_{i}$ (cioè se torna al punto di partenza)


>[!info] Velocità scalare media
>Si può definire dividendo la *distanza percorsa* per *l'intervallo di tempo impiegato a percorrerla*, e in generale può non coincidere con la velocità media definita in precedenza


La velocità media è una quantità che può avere segno positivo o negativo a seconda che risulti $\Delta x > 0$ oppure $\Delta x < 0$ 

*Rappresentazione del moto nel piano cartesiano posizione-tempo*

![[../../../../Immagini-Argomenti-.obsidian/Immagini/Immagini/Pasted image 20250808183849.png | center | 350]]

Il grafico della posizione $x$ al variare del tempo $t$ si dice *legge oraria* del moto del corpo osservato

Per come è definita, *la velocità media di un corpo è uguale al coefficiente angolare* (anche detto "pendenza") della retta che passa per i punti $(t_{i}, x_{i})$ e $(t_{f}, x_{p})$ nel piano cartesiano tempo-posizione

![[../../../../Immagini-Argomenti-.obsidian/Immagini/Immagini/Pasted image 20250808184100.png | center | 400]]


La **velocità istantanea** all'istante $t$ si definisce come
$$
v_{x}(t_{i}) = \lim_{\Delta t \rightarrow 0} \frac{\Delta x}{\Delta t} = x'(t) |_{t = t_{i}}
$$
(derivata prima rispetto al tempo della funzione $x(t)$, calcolata per $t=t_{i}$)

Per completezza, è essenziale dire che in fisica si usano diverse notazioni per indicare la derivata rispetto al tempo, tutte equivalenti e utilizzabili indifferentemente
$$
x'(t) = \frac{dx(t)}{dt} = x(t) = Dx(t)
$$
La velocità indicata dal tachimetro di un'auto è la *velocità istantanea*


**Esempio 1** 
Consideriamo un punto materiale che si muove di moto rettilineo con legge oraria
$$
x(t) = 3t^{2}(m)
$$
Attenzione anzitutto alle dimensioni fisiche di queste quantità. Se $t$ è misurato in secondi, il coefficiente 3 non può essere un numero adimensionale, in quanto la quantità $3t^{2}$ deve avere le dimensioni di una lunghezza

Dunque, in questo caso, la quantità "3" dovrà essere una grandezza fisica avente come dimensioni $L^{-1} \cdot T^{-2}$, cioè $3 m/s^2$ 

La velocità istantanea in funzione del tempo sarà quindi
$$
v_{x}(t) = x'(t)= 3\cdot 2t = 6t \quad (m/s)
$$


**Esempio 2**
$$
x(t) = -4t + 2t^{2}
$$

1) Determinare lo spostamento del corpo tra gli istanti $t=0$ e $t_{f}= 1s$ 

$$
\Delta x_{1} = x(t_{f} = 1s) - x(t_{i}=0) = (-4 \cdot 1 + 2 \cdot 1^{2})m= -2m
$$

E tra gli istanti $t_{i}=1s$ e $t_{f}= 3s$
$$
\Delta x_{2}= x(t_{f}= 3s) - x(t_{i}=1s) = ((-4\cdot 3 + 2 \cdot 3^{2}) - (-4 \cdot 1 + 2 \cdot 1^{2}))m = (6-(-2))m = 8m
$$



#### Moto rettilineo uniforme
Nel caso particolare in cui un corpo si muove con velocità istantanea costante lungo una linea retta, si parla di **Moto rettilineo uniforme**

>[!info] Teorema
>Nel moto rettilineo uniforme la *velocità media* su un qualunque intervallo di tempo *coincide con la velocità istantanea costante* $V_{x}$


**Dimostrazione**
Suddividiamo l'intervallo di tempo $t_{f} - t_{i}$ in $n$ "intervallini" $\Delta t$ uguali, in modo che risulti
$$
t_{f} - t_{i} = n \Delta t
$$
Siano $\Delta x1, \Delta x2, ..., \Delta x_{n}$ i corrispondenti spostamenti in ciascuno di questi "intervallini", risulta pertanto $x_{f} - x_{i} = \Delta x_{1} + \Delta x_{2} + ..., + \Delta X_{n}$ allora otteniamo
$$
V_{x, med} = \frac{x_{f} - x_{i}}{t_{f} - t_{i}} = \frac{\Delta x_{1} + \Delta x_{2} + ... + \Delta x_{n}}{n\Delta t} = \frac{1}{n} (\frac{\Delta x_{1}}{\Delta t} + \frac{\Delta x_{2}}{\Delta t} + ... + \frac{\Delta x_{n}}{\Delta t})
$$
Per $n$ molto grande gli "intervallini" $\Delta t$ diventano molto piccoli, per cui i rapport tendono alla velocità istantanea $V_{x}$ che per ipotesi è costante. Allora otteniamo infine
$$
V_{x,med} = \frac{1}{n} \cdot n V_{x} = V_{x}
$$
e questo dimostra il teorema


Dunque, poichè $V_{x, med} = V_{x}$ possiamo scrivere
$$
\frac{x_{f} - x_{i}}{t_{f} - t_{i}} = v_{x} \rightarrow x_{f} - x_{i} = v_{x}(t_{f} - t_{i}) \rightarrow x_{f} = x_{i} + v_{x}(t_{f} - t_{i})
$$
Preso $t_{i} = 0$ e $t_{f} = t$ possiamo scrivere
$$
x_{f}(t) = x_{i} + v_{x}(t)
$$
Questa è la **legge oraria del moto rettilineo uniforme**

In definitiva, il moto rettilineo uniforme è descritto dalle seguenti leggi
$$
\begin{cases} 
v_{x}(t) = v_{x}  \\
x(t) = x_{0} + v_{x}t
\end{cases}
$$


**Osservazione**
Le leggi del moto rettilineo uniforme si possono applicare, con le dovute attenzioni, anche al caso di moto non rettilineo purchè con velocità scalare costante, in tal caso occorre immaginare di "rettificare" la traiettoria, e considerare come $\Delta x$ la distanza percorsa lungo la traiettoria

*Esempio*
Traiettoria circolare con raggio $r=10m$ percorso con velocità scalare costante $v=5 m/s$ 

Quanto tempo è necessario per percorrere un giro completo?

Dalla legge $\Delta x = V\Delta t$ otteniamo 
$$
\Delta t = \frac{\Delta x}{v} = \frac{2  \pi \cdot r}{v} = \frac{2 \pi \cdot 10m}{5 m/s} = 12,57s
$$


#### Moto accellerato
Si parla di "moto accellerato" quando la velocità istantanea di un corpo varia nel tempo.
Sia $v_{x,i}$ la velocità istantanea di un corpo all'istante $t_{i}$ cioè poniamo $v_{x}(t_{i}) = v_{x,i}$

Analogamente poniamo $v_{x}(t_{f}) = v_{x,f}$ 

Definiamo l'*accellerazione media* del corpo tra gli istanti $t_{i}$ e $t_{f}$ la quantità seguente
$$
a_{x,med} = \frac{v_{x,f} - v_{x,i}}{t_{f}-t_{i}} = \frac{\Delta v_{x}}{\Delta t}
$$
che evidentemente si misura in $\frac{m/s}{s}$ = $\frac{m}{s^{2}}$ anche indicato $m \cdot s^{-2}$ 


Si definisce quindi l'**accellerazione istantanea** all'istante $t_{i}$ 
$$
a_{x} (t_{i}) = \lim_{\Delta t \to 0} \frac{\Delta v_{x}}{\Delta t} = v_{x}'(t)
$$
Per come è definita, l'accellerazione istantanea di un corpo è nulla negli istanti in cui la funzione $v_{x}(t)$ presenta un massimo relativo o un minimo relativo o un flesso orizzontale, cioè negli istanti in cui risulta $v_{x}'(t) = 0$

Risulta anche, come conseguenza delle leggi determinate sinora
$$
a_{x}(t) = x''(t) \quad \text{essendo} \quad v_{x}(t) = x'(t)
$$
Quando $v_{x}(t)$ e $a_{x}(t)$ hanno lo stesso segno, $|v_{x}(t)|$ aumenta nel tempo
Quando $v_{x}(t)$ e $a_{x}(t)$ hanno segni opposti, $|v_{x}(t)|$ decresce nel tempo

>[!danger] Attenzione
>Un corpo che si muove di moto rettilineo uniforme ha accellerazione nulla. 
>Infatti risulta
>$$
>a_{x}(t) = v_{x}'(t) = 0 \quad se \quad v_{x}(t) = v_{x}
>$$




