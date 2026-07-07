#DataMining 

## Classificazione di Dataset Sbilanciati con SVM
Si vuole affrontare il problema della classificazione di dataset sbilanciati, costituiti da due classi:
- classe `0` (maggioritaria),
- classe `1` (minoritaria).
Si consideri un dataset sintetico con forte sbilanciamento (ad esempio 95% dei campioni appartenenti alla classe `0` e 5% alla classe `1`).


## Undersampling
Il training set viene **bilanciato per undersampling**:
- Si trovano gli indici della classe minoritaria e della classe maggioritaria
- Si campionano casualmente dalla classe maggioritaria tanti esempi quanti ce ne sono nella classe minoritaria
- Il nuovo training set bilanciato ha esattamente 50/50 tra le classi

``` python
majority_sample = np.random.choice(majority_idx, size=len(minority_idx), replace=False)
balanced_idx = np.concatenate([minority_idx, majority_sample])
```

**Svantaggio**: si butta via una grossa fetta dei dati della classe maggioritaria


## Cross-validation stratificata
Sul training set bilanciato si usa *StratifiedKFold* con $K=4$ per cercare il miglior valore di $C$ tra $[0.05, 0.1, 1]$. La cross-validation **stratificata** è fondamentale: garantisce che ogni fold mantenga la proporzione delle classi originali, evitando fold dove una classe è assente

Per ogni valore di $C$, per ogni fold, si addestra la SVM e si calcola l'accuracy di validazione. Si tine il $C$ con la media di accuracy più alta

#### Valutazione sul test set
Il modello finale viene addestrato sul training set bilanciato (undersampled) e valutato sul **test set NON bilanciato** (90/10)

Le metriche usate per valutare non sono solo l'accuracy, ma:
- **Precision** = $\frac{TP}{{(TP + FP)}} \rightarrow$ "Quanti di quelli che ho predetto come positivi lo erano davvero?"
- **Recall** = $\frac{TP}{(TP+FN)} \rightarrow$ "Quanti dei positivi reali ho trovato?"
- **Matrice di confusione**: mostra tutti i dati in modo visivo

![[image-51.png|353]]


In presenza di sbilanciamento, il **recall sulla classe minoritaria** è la metrica più importante


## Modifica della SVM con pesi per classe
#### L'idea matematica
La formulazione soft-margin della SVM minimizza
$$\frac{1}{2}||w||^{2} + C \sum\limits^{N}_{i=1} \xi_{i}$$
dove $\xi_{i}$ sono le slack variables (quanto un campione viola il margine). Il parametro $C$ è uguale per tutti i campioni. L'idea è renderlo **dipendente dalla classe**
$$C_{i} = C \cdot v_{i} \quad \text{dove} \quad v_{c} = \frac{n}{2 \cdot n_{c}}$$
- **n** = totale campioni, **n_c** = campioni della classe C
- La classe maggioritaria riceve un peso piccolo $\rightarrow$ errori su di essa sono meno penalizzati
- La classe minoritaria riceve un peso grande $\rightarrow$ errori su di essa sono fortemente penalizzati

#### Differenza
Nella prima parte si usava il training set **bilanciato** (undersampled). Qui si usa il training set **completo** (sbilanciato), e si compensa lo sbilanciamento tramite i pesi. Non si butta nessun dato

#### ROC curve e AUC
Si introduce anche la valutazione tramite **curva ROC** con sklearn:
- L'asse X è il False Positive Rate ($FPR = FP/(FP+TN$))
- L'asse Y è il True Positive Rate / Recall ($TPR = TP/(TP+FN)$)
- L'**AUC** (Area Under the Curve) misura la qualità complessiva del classificatore: 1.0 è perfetto, 0.5 è un classificatore casuale

![[image-52.png|428]]


## SMOTE (Oversampling Sintetico)
Invece di buttare via dati, si **aggiungono campioni sintetici** alla classe minoritaria. SMOTE non duplica semplicemente i campioni esistenti, ma ne **interpola** di nuovi

#### Algoritmo
- **KD-Tree**: si costruisce un albero di ricerca spaziale usando solo i campioni della classe minoritaria. Questo permette di trovare i $k$ vicini più prossimi in modo efficiente
- **Selezione base points**: si scelgono i punti della classe minorittaria da cui generare nuovi campioni. Se ce ne sono abbastanza, se ne sceglie un sottoinsieme casuale
- **Generazione dei punti sintetici**: per ogni nuovo punto da generare:
	- Si prende un punto base $\xi$ dalla classe minoritaria
	- Si sceglie casualmente uno dei suoi *k* vicini più prossimi *nn*
	- Si genera un punto interpolato: $ip = \xi+ λ * (nn - \xi)$, con $λ \in [0,1]$ casuale
	Il nuovo punto sta **sul segmento** tra $\xi$ e il suo nuovo vicino, in una posizione casuale

- Si restituisce un array di *n_samples* nuovi punti sintetici


## Classificazione Multiclasse con One-vs-Rest (OvR)
#### Il problema
Le SVM sono classificatori binari nativi. Per estenderle a $K$ classi si usa la strategia **One vs Rest**:
- Si addestrano $K$ modelli binari separati
- Il modello $K$ impara a distinguere la classe $k$ da tutte le altre 

#### Predizione
Ogni modello produce uno **score** tramite *decision_function* (la distanza del margine, con segno). Per un nuovo campione, si calcola lo score di tutti i $K$ modelli e si assegna la classe con lo score più alto

``` python
scores = np.vstack([model.decision_function(X) for model in self.models_.values()])
best_class_indices = np.argmax(scores, axis=0)
return self.classes_[best_class_indices]
```


## Schema riassuntivo

![[image-53.png]]

