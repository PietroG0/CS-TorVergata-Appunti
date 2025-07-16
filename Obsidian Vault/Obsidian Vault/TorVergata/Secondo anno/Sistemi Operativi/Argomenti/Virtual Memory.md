**Il Problema del Bloatware e la crescita della Memoria**
- Necessità di gestire programmi che superano la capacità della memoria disponibile
- Negli anni '60, introduzione di tecniche per dividere programmi in parti gestibili
- Overlay: sono piccole parti o segmenti di un programma
- Solo l'overlay necessario viene caricato in memoria
- Overlay successivi sovrascrivono o coesistono con quelli precedenti
- Gli overlay vengono scambiati tra memoria e disco

Originariamente, i programmatori dovevano suddividere manualmente i programmi in overlay

"Trashing" = un processo chiede più RAM di quanto disponiamo e la macchina esegue scambi continui, andando in blocco

**Memoria Virtuale**
La memoria virtuale estende l'idea dei registri base e limite
- Ogni programma ha un proprio spazio degli indirizzi suddiviso in "pagine", che sono intervalli di indirizzi contigui
- Non tutte le pagine devono essere contemporaneamente nella memoria fisica
- La maggior parte dei sistemi moderni usa il "paging" (divisione dello spazio degli indirizzi in unità di dimensione fissa, es. 4KB)
- Alternativa: Segmentazione con unità di dimensione variabile

Problema:
- Finora la memoria può essere assegnata ai processi solo in blocchi contigui

Soluzione (e vantaggio dell'uso della Memoria Virtuale):
- Creare per il processo l'illusione di uno spazio di indirizzi ampio
- Questo spazio è noto come spazio di indirizzi virtuale
- La RAM (molto più limitata) è nota come memoria fisica
- Memory Management Unit (MMU): traduce gli indirizzi virtuali (come usati dal processo) in indirizzi fisici

![[Pasted image 20231122104040.png]]


**Memoria Virtuale e Paginazione**
I sistemi moderni utilizzano la paginazione (paging):
- Dividendo la memoria fisica e virtuale in pagine di dimensioni fisse
- Traducendo le pagine virtuali in pagine fisiche (frame)

![[Pasted image 20231122104125.png]]


**Spazio di Indirizzamento Virtuale vs Spazio degli indirizzi fisici e page table**
Mappatura Memoria:
- 16 pagine virtuali possono essere mappate in 8 frame fisici usando la MMU
- Tuttavia, non tutte le pagine virtuali sono mappate fisicamente
- Se un programma fa riferimento a una pagina non mappata, si verifica un "Page Fault". Il Sistema Operativo allora:
-Sposta un frame raramente usato su disco, se serve
-Carica la pagine richiesta nel frame libero o liberato
-Aggiorna la mappa della MMU per riflettere i cambiamenti


Problema di Prestazioni nella Paginazione:
- Ogni istruzione richiede l'accesso alla memoria per prelevare l'istruzione stessa e un ulteriore accesso per la tabella delle pagine
- Raddoppio degli accessi alla memoria riduce le prestazioni di metà

- I programmi tendono a fare molti riferimenti a un piccolo numero di pagine
- Solo una parte limitata delle voci della tabella delle pagine viene utilizzata frequentemente

[[Introduzione del Translation Lookaside Buffer (TLB)]]

**Page Table sizes**
- Uno spazio di indirizzi virtuali molto grande porterebbe a una tabella di pagine molto grande

Una possibile soluzione è il **Page Table a due livelli (x86)**
- le Page tables sono "attraversate" dal MMU
- CR3 register, Registro speciale per puntare al vertice della gerarchia delle tabelle di pagina

64 Bit: Page Table a 4 livelli

![[Pasted image 20231122115747.png]]




