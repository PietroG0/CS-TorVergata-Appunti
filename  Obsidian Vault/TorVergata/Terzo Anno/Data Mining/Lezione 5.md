#DataMining 

## Discesa del gradiente stocastica
Nell'algoritmo **discesa del gradiente**, ad ogni iterazione l'aggiornamento dei coefficienti viene eseguito mediante la seguente formula
$$w \leftarrow w + \Delta w = w - \eta \Delta J(w)$$
dove
$$\nabla J(w) = -X^{T}\quad  \text{x} \quad \text{errors}$$
il calcolo di $\nabla J(w)$ utilizza l'intero dataset di input ($X$) che deve essere disponibile per intero in memoria. Su dataset molto grandi questa soluzione può essere impraticabile.

**Discesa del Gradiente Stocastica**. In questa versione $\nabla J(w)$ viene calcolato usando una porzione della matrice $X$ ottenuta selezionando casualmente un numero fissato di righe (campioni). La nuova matrice ottenuta, $X_{b}$, corrisponde a un blocco o batch di campioni, verrà usata per calcolare $\nabla J(w)$ come
$$\nabla J(w) = -X^{T}_{b} \quad \text{x} \quad errors$$
In questo modo, in memoria principale si tiene soltanto $X_{b}$ mentre l'intero dataset può essere letto dalla memoria secondaria.

Operativamente, durante ogni iterazione, le righe di $X$ (i campioni), vengono partizionate in blocchi di dimensione fissata, si costruisce $X_{b}$ a partire da ciascun blocco e si usa per calcolare il gradiente e aggiornare i coefficienti.

