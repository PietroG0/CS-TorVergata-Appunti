#DataMining 

## K-Nearest Neighbors (kNN)
Classifica un punto $x$ in base alle etichette dei $k$ vicini più prossimi nel dataset etichettato. L'etichetta assegnata a $x$ sarà quella più frequente tra le $k$

**Non c'è apprendimento**. Risulta essere molto semplice ed efficace ma la classificazione è costosa. Inoltre richiede la memorizzazione dell'intero dataset di apprendimento

### Codifica
Il fitting consiste nel memorizzare i dati etichettati. Il **predict** richiede la ricerca dei $k$ vicini più prossimi rispetto ad una funzione distanza che di default è quella euclidea; si usa una **variante del selection sort** che garantisce complessità lineare nella dimensione del dataset di apprendimento (se si assume $k$ costante). Questa può diventare logaritmica se si usano strutture dati ad albero binario per memorizzare gli esempi del dataset di apprendimento 

``` python
# import delle librerie

import numpy as np. # Libreria per calcolo vettoriale
import matplotlib.pyplot as plt # librerie per il disegno
import matplotlib.patches as patches 

```

Gli array di **numpy** sono utilizzati per descrivere matrici o vettori delle features

``` python
center = np.array([0,0])  # un array di due elementi

# una matrice di 11 righe e 3 colonne
points = np.array([[0.5, 0.5, 1], [0.6, 1.16, 1], [1.14, 0.8, 1], [-1.1, -1.0, 1], [1.01, -0.9, 1],[0.3, 0.5, 0], [-0.6, 0.6, 0], [0.2, -0.7, 0], [-0.8, -0.2, 0], [1.0, -0.5, 0], [-1.5, 0.1, 0]])


print(points)

[[ 0.5   0.5   1.  ]
 [ 0.6   1.16  1.  ]
 [ 1.14  0.8   1.  ]
 [-1.1  -1.    1.  ]
 [ 1.01 -0.9   1.  ]
 [ 0.3   0.5   0.  ]
 [-0.6   0.6   0.  ]
 [ 0.2  -0.7   0.  ]
 [-0.8  -0.2   0.  ]
 [ 1.   -0.5   0.  ]
 [-1.5   0.1   0.  ]]


print(points[2,1])
0.8

print(points [3:6,1]) # slicing
[-1, -0.9, 0.5]

print(points[:, 1])
[0.5 1.16 0.8 -1 -0.9 0.5 0.6 -0.7 -0.2 -0.5 0.1]

```


``` python

a = np.arange(3, 11)
print(a)
print(a [ [1,6,4] ])  # operazione di filtro

[ 3 4 5 6 7 8 9 10]
[4 9 7]

```


``` python

# ridefiniamo center e points solo per rendere questa cella indipendente dalla precedente

center = np.array([0,0])
points = np.array([[0.5, 0.5, 1], [0.6, 1.16, 1], [1.14, 0.8, 1], [-1.1, -1.0, 1],[1.01, -0.9, 1], [0.3, 0.5, 0], [-0.6, 0.6, 0], [0.2, -0.7, 0],[-0.8, -0.2, 0], [1.0, -0.5, 0], [-1.5, 0.1, 0]])

fig, ax = plt.subplots(figsize=(8, 8))   # nuova figura di dimensione 8x8

ax.scatter(center[0], center[1], color='black', marker='*')   # disegno del punto al centro come una stella
circle = patches.Circle(center, 1, edgecolor='gray', facecolor= None, alpha=1, linewidth=2, fill=False)   # definisce cerchio centrato in center

# disegna i punti con etichetta 1 definendo la lista delle coordinate x e y usando
# list comprehension (vedere)
ax.scatter([x for x,y,t in points if t == 1], [y for x,y,t in points if t == 1], color = 'blue', marker='o')
# stessa cosa con etichetta 0
ax.scatter([x for x,y,t in points if t == 0], [y for x,y,t in points if t == 0], color = 'red', marker='o')

# aggiunge cenchio al disegno
ax.add_patch(circle)
ax.axis('equal')
ax.axis('off')

# salve disegno
plt.savefig('01-28-knn.png', dpi=120, bbox_inches='tight')

plt.show()

```



#### Definizione della classe

``` python
class KNN (object):
	def __init__(self, k=5, distance=None):
		self.k = k
		if distance == None:
			self._dist = euclidean_dist
		else:
			self._dist = distance
			
	def fit(self, X, y):
		self.X = X   # X è una matrice n x d (n campioni, d features)
		self.y = y   # y è un arrray di dimensione n
		
	def predict(self, x):
		# Ottiene gli indici dei k punti più vicini
		k_indices = selection_sort(self.X, x, k=5, key = self._dist)
		
		# Prende le etichette corrispondenti
		return mode(self.y[k_indices])

```


#### Le funzioni

``` python
def euclidean_dist(a0, a1):
	return np.linalg.norm(a0 - a1)	
	
```

Trova i primi $k$ elementi in ordine di grandezza dell'array $a$


``` python
def selection_sort(a, x, k = None, key = None):

'''
input: a, una sequenza; x un oggetto, k un intero; key una funzione dei valori di a e x

restituisce un array con i primi k elementi di a in ordine di grandezza rispetto alla funzione key

se k non indicato, viene usata per k la dimensione dell'array

se key non indicato, viene usata la funzione identità
'''

	if k == None or k > len(a) or k < 0:
		k = len(a)
	if key == None:
		key = lambda y, _: y
		
	idxs = []  # idxs[:i] le posizioni dei primi i elementi di a in ordine di grandezza
	
	for i in range(k):
		# cerchiamo idxs[k]
		m = None  # il valore del candidato
		for j, v in enumerate(a):  # eseguito n volte (dove n = len(a))
			if m == None or key(v, x) < key(a[m], x):  # tempo costante O(1)
				if j not in idxs:  # O(k) può diventare costante O(1) se si usa un set
					m = j
					
		# costo del for interno O(kn)
		idxs.append(m)  # O(1)
		
	return idxs
```

``` python

def mode( a ):
	'''
	parametro: a, un array-like
	
	return: l'elemento più frequente ed il numero di occorrenze
	'''
	
	# Lista di elementi senza ripetizioni, numero di occorrenze
	itms, cnts = np.unique(np.array(a), return_counts = True)
	
	return itms[np.argmax(cnts)], max(cnts)

```

La funzione mode calcola la moda di un array-like, ovvero l'elemento più frequente, ritornando l'elemento ed il numero di volte in cui comprare



## IRIS

``` python
import os
import pandas as pd

s = os.path.join('dataset', '01-02-iris.csv')
df = pd.read_csv(s, header=None, encoding='utf-8')

X = df.iloc[:, [0,1]].values
y = df.iloc[:, 4].values


versicolor = X[np.where(y == 'Iris-versicolor')]
setosa = X[np.where(y == 'Iris-setosa')]
virginica = X[np.where(y == 'Iris-virginica')]

plt.scatter(versicolor[:,0], versicolor[:,1], color='blue', marker='.', label='Versicolor')
plt.scatter(setosa[:,0], setosa[:,1], color='red', marker='.', label='Setosa')
plt.scatter(virginica[:,0], virginica[:,1], color='green', marker='.', label='Virginica')
plt.xlabel('Lunghezza sepalo')
plt.ylabel('Larghezza sepalo')
plt.legend()

plt.savefig('01-24-iris_01.png', dpi=120, bbox_inches='tight')

```


## Classificazione e testing di KNN
Il dataset viene diviso in due parti, training set e test set. Il primo viene utilizzato per addestrare il classificatore (nel caso di KNN, solo memorizzazione dati). Il secondo viene utilizzato per verificare il modello, si classificano i dati usando l'algoritmo e si confrontano i risultati con le etichette reali

### Funzione di Split

``` python

def train_test_split(X, y, train_size = 0.7):
    n = X.shape[0]
    train_idxs = np.random.choice(n, size = int(n*train_size), replace=False)
    test_idxs =  np.setdiff1d(np.arange(n), train_idxs)
    return X[train_idxs], y[train_idxs], X[test_idxs], y[test_idxs]
    

X = df.iloc[:, :-1].values  # i valori in tutte le riche e tutte le colonne tranne l'ultima
y = df.iloc[:, 4].values # i valori nell'ultima colonna
#y = df.iloc[:, -1].values # alteternativa alla precedente

X_train, y_train, X_test, y_test = train_test_split(X, y)

knn = KNN()
knn.fit(X_train, y_train)

x, t = X_test[0], y_test[0] 
print(knn.predict(x), t)

for x, t in zip(X_test[:10], y_test[:10]):
    print(x,t, knn.predict(x))
    
[knn.predict(x)[0] for x in X_test]

# Booleano contenente l'esito dei confronti tra etichette reali e predette
preds = np.array([knn.predict(x)[0] for x in X_test]) == y_test
print(preds)


```

