#DataMining 


## Differenza tra Perceptron, Adaline e Logistic Regression

```` cornell
::cue
Funzione di attivazione
::note
**Perceptron**
$$\phi(z) = +1 \quad \text{se} \quad \geq 0$$
$$0 \quad \text{altrimenti}$$ 

::note
**Adaline**
Funzione identità = funzione di attivazione

::note
**Logistic Regression**
Funzione sigmoide $$\phi(z) = \frac{1}{1+e^{-z}}$$

::cue 
Funzione di costo

::note 
**Perceptron**
Non esiste

**Adaline**
Somma degli errori quadrati $$\rightarrow \frac{1}{2} \sum\limits_{i=1}^{n} (y^{(i)} - w \cdot x^{(i)})^{2} \cdot x_{j}$$ 

**Logistic Regression**
Log-Verosimiglianza $$\rightarrow \sum_{i=1}^{n} \left[ y^{(i)} \log\phi(\mathbf{w} \cdot \mathbf{x}^{(i)}) + (1-y^{(i)}) \log\left(1-\phi(\mathbf{w} \cdot \mathbf{x}^{(i)})\right) \right]$$

::cue
Regola di Aggiornamento

::note 
**Perceptron**
$$w = w + \eta y^{(i)}x^{(i)}$$

**Adaline**
$$\mathbf{w} \leftarrow \mathbf{w} + \Delta\mathbf{w} = \mathbf{w} - \eta \, \nabla J(\mathbf{w})$$

**Logistic Regression**
$${w_j \leftarrow w_j + \eta \sum_{i=1}^{n} x_j^{(i)} \left( y^{(i)} - \phi(\mathbf{w} \cdot \mathbf{x}^{(i)}) \right)}$$
````

