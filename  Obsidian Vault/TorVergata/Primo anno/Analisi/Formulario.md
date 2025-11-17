#Analisi

#### Primo Esercizio
###### Dominio di una funzione
![[Formule dominio funzione Oct 8 2019.png|467x484]]


###### Asintoti
- *Orizzontali*: $y = y_{0}$ se $\lim_{x \to \infty} f(x) = y_{0}$ 
- *Verticali*: $x = x_{0}$ se $\lim_{x \to x_{0}} f(x) = \infty$
- *Obliqui*: $y = mx + q$ con $m = \lim_{x \to \infty} \frac{f(x)}{x}$, $q = \lim_{x \to \infty} f(x) - mx$ 

###### Simmetrie
- *Pari*: $f(-x) = f(x)$
- *Dispari*: $f(-x) = -f(x)$

###### Derivate

![[Derivate Formulario.jpg|490x634]]

- Derivata prima per *monotonia*
	- $f'(x) > 0 \to f$ crescente
	- $f'(x) < 0 \to f$ decrescente

- Derivata seconda per *concavità*
	- $f''(x) > 0 \to f$ convessa
	- $f''(x) < 0 \to f$ concava
	- Punti di flesso $f''(x) = 0$

- *Massimi e minimi*: Studiare segno di $f'$
- *Intersezioni*: con gli assi $x$ e $y$ trovando rispettivamente $f(x) = 0$ e $f(0)$

###### Retta tangente a f, parallela a una retta assegnata
1. Trova il *coefficiente angolare* della retta assegnata
	- Porta l'equazione nella forma $y=mx + q$
	- Esempio: da $8x - 2y = 5$, ricava $y = 4x - \frac{5}{2}$, quindi $m=4$

2. Imponi che la tangente abbia stessa pendenza
	- Cerca $x_{1}$ tale che $f'(x_{1}) = m$
	- Risolvi l'equazione: $$f'(x) = m$$

3. Scrivi l'equazione della retta tangente:
	- Generica: $$y = f'(x_{1})(x - x_{1}) + f(x_{1})$$
4. Se richiesto, usa il punto specifico (uno dei $x_{1}$) per la tangente richiesta


###### Intervallo I di biiettività (funzione iniettiva e suriettiva)
1. Studia la *monotonia* su possibii intervalli:
	- Individua dove $f'(x)$ è strettamente positivo o negativo

2. Assicurati che la funzione sia *continua*
3. Analizza il comportamento agli *estremi dell'intervallo*:
	- Calcola $\lim_{x \to a^{+}} f(x)$ e $\lim_{x \to b^{-}} f(x)$, (con $a, b$ estremi di $I$)
	- Se i limiti coprono $\mathbb{R}$, per il teorema dei valori intermedi la funzione sarà suriettiva

4. Conclusione:
	- Se su $I, f$ è strettamente monotona, continua e ha limiti che arrivano rispettivamente a $-\infty$ e $+\infty$, allora su quell'intervallo la funzione è biunivoca da $I$ a $\mathbb{R}$ 


#### Secondo Esercizio

###### Taylor
![[Formulario Taylor.png]]

Se $x_{0} \ne 0$, sostituire $t = x - x_{0}$   

