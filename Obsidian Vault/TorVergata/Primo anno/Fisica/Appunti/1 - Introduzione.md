#Fisica

#### Grandezze fisiche e sistemi di unità di misura
Il Sistema Internazionale introduce e definisce *sette grandezze fondamentali*. Le tre grandezze fondamentali che verranno utilizzate nella prima parte di questo corso sono le seguenti


| Grandezza | Unità di misura   |
| --------- | ----------------- |
| Lunghezza | metro ($m$)       |
| Tempo     | secondo ($s$)     |
| Massa     | kilogrammo ($kg$) |

Inoltre


| Grandezza            | Unità di misura |
| -------------------- | --------------- |
| Temperatura          | Kelvin ($K$)    |
| Quantità di sostanza | mole ($mol$)    |
| Corrente elettrica   | ampère ($A$)    |
| Intensità luminosa   | candela ($cd$)  |


#### Esempi di grandezze derivate
*Area di un rettangolo*
$$
A = a \cdot b
$$
E' il prodotto di due lunghezze. L'unità di misura di $A$ si ottiene semplicemente moltiplicando le unità di misura dei fattori: $m \cdot m = m^2$ 


*Volume di un parallelepipedo rettangolo*
$$
V = a\cdot b \cdot c
$$
E' il prodotto di tre lunghezze.

L'unità di misura di $V$ si ottiene semplicemente moltiplicando tra loro le unità di misura dei fattori: $m \cdot m \cdot m = m^3$ 


*Velocità media di un corpo in un dato intervallo di tempo T*
$$
V_{m} = \frac{D}{T} 
$$
Dove $D$ è la *distanza percorsa dal corpo nell'intervallo di tempo* $T$. 
L'unità di misura di $V_{m}$ è data dal rapporto tra l'unità di misura di $D$ e l'unità di misura di $T = \frac{m}{s} = m \cdot s^{-1}$ 



*Massa volumica e densità di un corpo*
$$
p = \frac{m}{V}
$$
dove $m$ è la *massa del corpo* e $V$ è il *volume del corpo*

L'unità di misura di $p$ è data dal rapporto tra l'unità di misura di $m$ e l'unità di misura di $V$
$$
\frac{Kg}{m^{3}} = Kg \cdot m^{-3}
$$


#### Ordini di grandezza
Per ragioni di comodità e di compattezza di scrittura, molto spesso conviene utilizzare la *notazione scientifica* per rappresentare il valore numerico della misurazione di una grandezza fisica. Il valore numerico della misura si scrive nel modo seguente:
$$
a \cdot 10^{b} \quad \text{seguito dalla correetta unità di misura}
$$
in modo che risulti $0,5 \leq a < 5$, e $b$ è un numero intero relativo opportuno

**Esempi**
- $0,04$ $m$ = $4 \cdot 10^{-2}$ $m$ $\rightarrow$ ordine di grandezza $10^{-2}$ $m$ 
- $1070$ $kg = 1,070 \cdot 10^{3}$ $Kg$  $\rightarrow$ ordine di grandezza $10^{3}$ $Kg$ 
- $0,0000000002$ $s = 2 \cdot 10^{-10}$ $s$ $\rightarrow$ ordine di grandezza $10^{-10}$ $s$



#### Analisi dimensionale
Per verificare la coerenza di una formula fisica ricavata dopo un calcolo più o meno complesso conviene effettuare una *analisi dimensionale* dell'espressione ottenuta

Allo scopo, si fissano le seguenti regole
- Ogni distanza tra due punti, o comunque una quantità esprimibile in metri, ha le dimensioni di una lunghezza, $[L]$.  Ad esempio, sia $d = 2m$; dimensionalmente risulta $[d] = [L]$, che si legge "$d$ ha le dimensioni di una lunghezza"
- Ogni intervallo di tempo ha le dimensioni di un tempo $[T]$. Ad esempio, sia $\tau = 10s$; dimensionalmente risulta $[\tau] = [T]$, che si legge "$\tau$ ha le dimensioni di un tempo"
- Ogni valore di massa di un corpo ha le dimensioni di una masssa, $[M]$. Ad esempio, sia $m = 25Kg$, dimensionalmente risulta $[m] = [M]$, che si legge "m ha le dimensioni di una massa"

Su questa legge non è complicato determinare le dimensioni fisiche di *altre grandezze derivate*

Esempi

Velocità media $V_{m} = \frac{D}{T}$ 

risulta immediatamente:
$$
[V_{m}] = \left[\frac{D}{T}\right]= \frac{[D]}{[T]} = \frac{[L]}{[T]} = [L][T^{-1}]
$$
che si legge "la velocità media ha le dimensioni di una lunghezza per un tempo alla -1"




 