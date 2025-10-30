- Si trova abitualmente dentro la MMU e consiste di un numero ridotto di voci
- Ciascuna voce contiene informazioni riguardo una pagina, tra cui il numero di pagina virtuale, un bit impostato quando la pagine viene modificata, il codice di protezione (i permessi di lettura, scrittura ed esecuzione) e il frame fisico in cui si trova la pagina

![[Pasted image 20231122113806.png]]

- Quando un indirizzo virtuale viene presentato alla MMU per la traduzione, l'hardware prima guarda se il suo numero di pagina virtuale è presente nel TLB confrontandolo simultaneamente con tutte le voci.
- Questa operazione richiede un hardware specializzato, presente in tutte le MMU dotate di TLB. Se trova un riscontro valido e l'accesso non viola i bit di protezione, il frame è prelevato direttamente dal TLB, senza andare alla tabella delle pagine in memoria
- Se il numero di pagina virtuale è presente nel TLB, ma l'istruzione prova a scrivere su una pagina di sola lettura, si genera un errore di protezione

- E' interessante ciò che accade quando il numero di pagina virtuale non è nel TLB. La MMU rileva il TLB miss ed esegue una normale ricerca sulla tabella delle pagine. Quindi sfratta una delle voci dal TLB e la rimpiazza con la voce della tabella delle pagine appena trovata, così se quella pagina viene riutilizzata a breve, la seconda volta si avrà una TLB hit (presenza nel TLB) invece di un TLB miss

**Gestione software del TLB**
TLB in Architetture RISC:
- Alcune macchine RISC come SPARC, MIPS, e HP PA gestiscono le voci del TLB tramite software
- Processo in caso di TLB Miss:
- Un TLB miss non porta a una ricerca automatica nella tabella delle pagine da parte della MMU
- Invece, si genera un errore di TLB e il sistema operativo deve intervenire 
- Il sistema operativo cerca la pagine, aggiorna il TLB, e riavvia l'istruzione

**Tipologie di Miss e implicazioni**
Frequenza dei TLB Miss:
- I TLB miss sono comuni a causa del numero limitato di voci nel TLB
- Aumentare la dimensione del TLB è costoso e richiede compromessi nella progettazione del chip

Soft Miss vs Hard Miss:
- Soft Miss: La pagina è in memoria ma non nel TLB. Richiede solo l'aggiornamento del TLB
- Hard Miss: La pagina non è in memoria e richiede un accesso alla memoria non volatile (disco o SSD)
- Un Hard Miss è significativamente più lento di un soft miss

Page Table Walk e Diverse tipologie di Miss
- La ricerca nella gerarchia delle tabelle delle pagine è chiamata "page table walk"
- I miss possono variare in "gravità" da minori (pagina in memoria ma non nella tabella delle pagine) e maggiori (pagina da caricare dalla memoria non volatile)
- Un accesso a un indirizzo non valido può portare a un segmentation fault e alla terminazione del programma

