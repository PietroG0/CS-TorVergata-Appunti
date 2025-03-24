#### Parentesi k-bilanciate

###### Pseudocodice
```
Algoritmo K_Bilanciato(A):
	Input: A, un array di n parentesi aperte "(" e parentesi chiuse ")"
	Output: Il minimo valore di k necessario per bilanciare la sequenze, oppure + infinito se non bilanciabile

	da_aprire <-- 0
	da_chiudere <-- 0
	soluzione <-- 0

	Per i da 0 a n-1:
		Se A[i] == "(" Allora
			Incremento di 1 da_chiudere
			Decremento di 1 da_aprire
		Altrimenti
			Incremento di 1 da_aprire
			Decremento di 1 da_chiudere
			Incremento di 1 soluzione

	Se da_chiudere == da_aprire allora
		Ritorna soluzione diviso 2
	Altrimenti
		Ritorna +infinito

```


###### Analisi della Correttezza
Durante l'elaborazione della sequenza, l'algoritmo mantiene una rappresentazione corretta dello stato delle parentesi attraverso i contatori *da_aprire* e *da_chiudere*, dove, rispettivamente, tengono traccia di quante parentesi sono necessarie per bilanciare quelle incontrate finora.

Se alla fine della scansione della sequenza, i due contatori sono uguali, ciò significa che il numero di squilibri è uguale per parentesi aperte e chiuse. *Soluzione* tiene traccia di tutte le parentesi "aggiunte" durante la scansione per *bilanciare la sequenza*. Dividendo per 2 otteniamo il numero minimo di *coppie di parentesi* necessarie, dato che ogni coppia bilancia due squilibri contemporaneamente.

Se, alla fine della scansione, i due contatori sono *diversi*, significa che non è possibile bilanciare i due squilibri aggiungendo un numero finito di parentesi aperte e chiuse. Questo è corretto, perchè se mancano più parentesi chiuse rispetto alle parentesi aperte (o viceversa), non sarà possibile bilanciare la sequenza. In questo caso, l'algoritmo restituisce + infinito.

L'algoritmo scorre la sequenza di lunghezza $n$ una sola volta, e per ogni elemento aggiorna costantemente i contatori *da_aprire*, *da_chiudere* e *soluzione*.

*Tempo* = $O(n)$, perchè viene effettuata una sola scansione lineare dell'array di lunghezza $n$

###### Conclusione
L'algoritmo è corretto perchè:
1) Tiene traccia degli squilibri accumulati durante la scansione
2) Calcola il numero minimo di *coppie* necessarie per bilanciare la sequenza
3) Rileva correttamente quando la sequenza non può essere bilanciata
4) Rispetta la complessità richiesta ($O(n)$ tempo, $O(1)$ spazio)




#### Il Posto Fisso

###### Pseudocodice
```
Algoritmo IlPostoFisso(n, t, delta, M)
	Input: 
		n: numero di clienti
		t: array di tempi di arrivo dei clienti
		delta: tempo minimo (velocità massima) per servire un cliente
		M: tempo massimo della giornata lavorativa
	Output:
		max_delta: massimo valore di Delta' ammissibile


	FUNZIONE valido(delta_primo):
		completamento <-- 0
		Per ogni arrivo in t fai:
			inizio <-- max(completamento, arrivo)
			completamento <-- inizio + delta_primo
			Se completamento > M allora:
				Ritorna False
		Ritorna True


	low <-- delta
	high <-- M
	max_delta <-- delta

	if valido(delta) == False:
		Ritorno 0
	else:
		Mentre low <= high Fai:
			mid <-- (low + high) diviso 2
			Se valido(mid) Allora:
				max_delta <-- mid
				low <-- mid + 1
			Altrimenti:
				high <-- mid - 1

		Ritorna max_delta


```


###### Analisi della Correttezza
*Problema*
L'obiettivo è determinare il massimo valore di $\Delta'$ (tempo per completare ogni pratica) tale che tutte le pratiche vengano completate entro il tempo massimo M.
- Ogni cliente arriva a un tempo $t[i]$ 
- Se si trova lo sportello occupato, il cliente aspetta fino a quando non si è terminato il cliente precedente
- La funzione deve rispettare i vincoli e ottimizzare $\Delta'$ per lavorare al ritmo più lento possibile


*Funzione valido(delta_primo)*
La funzione *valido* verifica se è possibile completare tutte le pratiche con un valore di $\Delta'$: 
- Logica principale
	- Manteniamo il tempo di completamento dell'ultimo cliente servito
	- Per ogni cliente, il tempo di inizio del servizio è il massimo tra il tempo di arrivo del cliente $(t[i])$ e il tempo di completamento del cliente precedente
	- Calcoliamo il tempo di completamento del cliente corrente come $inizio + \Delta'$ 
	- Se il tempo di completamento supera $M$, restituiamo *False*, poichè non è possibile completare le pratiche entro il tempo massimo

- Restituzione
	- Se riusciamo a completare tutte le pratiche con $\Delta'$, restituiamo *True*


*Ricerca Binaria*
La ricerca binaria consente di trovare il massimo valore di $\Delta'$ in modo efficiente:
*Inizializzazione*:
- L'intervallo di ricerca è tra $low = \Delta$ (tempo minimo per ogni pratica) e $high = M$ (tempo massimo della giornata lavorativa)
- Manteniamo il massimo valore valido di $\Delta'$ trovato finora in *max_delta*

*Iterazioni*
- Calcoliamo il valore medio $mid =\frac  {low + high} {2}$ 
- Verifichiamo con *valido(mid)*:
	- Se il valore è valido, significa che possiamo lavorare a quel ritmo, quindi aggiorniamo *max_delta* e proviamo un valore più grande ($low = mid + 1$)
	- Se il valore non è valido, proviamo un valore più piccolo ($high = mid - 1$)
	- Il processo continua fino a quando l'intervallo di ricerca non si esaurisce ($low > high$)


*Correttezza*
*Proprietà della Ricerca Binaria*
La ricerca binaria è fondamentale per ricercare il massimo *delta_primo* e per rispettare il costo dell'algoritmo
- Se un valore $\Delta'$ è valido, allora tutti i valori minori di $\Delta'$ sono anch'essi validi
- Se un valore $\Delta'$ non è valido, allora tutti i valori maggiori di $\Delta'$ non sono validi. Questa proprietà garantisce che la ricerca binaria troverà il massimo valore di $\Delta'$ che soddisfa il vincolo

*Funzione valido*
La funzione *valido* verifica in tempo lineare $O(n)$ se un dato $\Delta'$ permette di completare tutte le pratiche entro $M$. La logica è corretta poichè considera:
- Il tempo di arrivo del cliente $(t[i])$
- Il tempo necessario per completare ogni pratica $(\Delta')$ 
- Il vincolo di tempo massimo $(M)$


*Complessità*
*Tempo*
- La funzione *valido(delta_primo)* richiede $O(n)$, poichè itera su tutti i clienti
- La ricerca binaria esplora al massimo $O(\log(M - \Delta))$ valori di $\Delta'$ 
- Complessivamente, la complessità è: $O(n \cdot \log(M - \Delta))$, questo è inferiore al limite richiesto di $o(nM)$, quindi il requisito è soddisfatto

*Spazio*
- L'algoritmo utilizza spazio costante $(O(1))$ per le variabili e non richiede strutture dati aggiuntive
