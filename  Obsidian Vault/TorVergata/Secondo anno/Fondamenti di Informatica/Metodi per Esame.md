#Fondamenti 

#### Conversione in CNF
Per convertire una grammatica context-free (CFG, **Context-Free Grammar**) in **Forma Normale di Chomsky** (CNF, **Chomsky Normal Form**), segui questi passaggi:

### 1. **Elimina le produzioni inutili**

1. **Produzioni inutili** sono quelle che:
    - Non portano a un terminale.
    - Non sono raggiungibili dal simbolo iniziale.

**Passaggi**:

- Trova i simboli **utili**: Quelli che generano almeno una stringa di terminali.
- Elimina tutte le produzioni che coinvolgono simboli inutili.
- Tieni solo i simboli che possono essere raggiunti dal simbolo iniziale.

---

### 2. **Elimina le produzioni ε (produzioni vuote)**

- **Produzioni vuote**: A→εA \to \varepsilonA→ε (eccetto per il simbolo iniziale se necessario).
- Per ogni produzione A→αA \to \alphaA→α, sostituisci ogni occorrenza del simbolo che genera ε\varepsilonε in α\alphaα con tutte le combinazioni possibili.

---

### 3. **Elimina le produzioni unitarie**

- **Produzioni unitarie**: A→BA \to BA→B, dove AAA e BBB sono non terminali.
- Sostituisci A→BA \to BA→B con le produzioni di BBB, tranne quelle unitarie.

---

### 4. **Converte tutte le produzioni in CNF**

- CNF richiede che ogni regola abbia una delle seguenti forme:
    1. A→BCA \to BCA→BC (dove BBB e CCC sono non terminali).
    2. A→aA \to aA→a (dove aaa è un terminale).

**Passaggi**:

- **Terminali**: Se un terminale appare in una regola complessa, come A→BcDA \to BcDA→BcD, sostituiscilo con un non terminale (ad esempio, c→Ccc \to C_cc→Cc​, con Cc→cC_c \to cCc​→c).
- **Produzioni lunghe**: Per regole come A→BCDEA \to BCDEA→BCDE, sostituisci con A→BZ1A \to BZ_1A→BZ1​, Z1→CZ2Z_1 \to CZ_2Z1​→CZ2​, Z2→DEZ_2 \to DEZ2​→DE.

---

### 5. **Rendi il simbolo iniziale compatibile**

- Se il simbolo iniziale SSS appare sul lato destro di una produzione, crea un nuovo simbolo iniziale S0S_0S0​ e una produzione S0→SS_0 \to SS0​→S.



#### Eliminare simboli inutili

1. **Elimina i simboli non produttivi**:
    - Identifica i simboli che possono derivare stringhe formate solo da terminali.
    - Rimuovi i simboli non produttivi e le loro produzioni.
2. **Elimina i simboli non raggiungibili**:
    - Identifica i simboli raggiungibili partendo dal simbolo iniziale SSS.
    - Rimuovi i simboli non raggiungibili e le loro produzioni.

Seguendo questi due passaggi, si ottiene una grammatica semplificata senza simboli inutili.

