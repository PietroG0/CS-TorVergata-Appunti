L'aging è più efficace con molti frame di pagina liberi disponibili.

- Per garantire una certa abbondanza di frame di pagina, i sistemi di paginazione dispongono solitamente di un processo in background detto paging deamon, che è a riposo per la maggior parte del tempo ma viene risvegliato periodicamente per ispezionare lo stato della memoria. 
- Se i frame liberi sono troppo pochi, inizia a scegliere le pagine da sfrattare usando un algoritmo di sostituzione delle pagine. Se le pagine sono state modificate dopo il loro caricamento, vengono scritte su memoria non volatile

In ogni caso, i precedenti contenuti della pagina vengono ricordati. Nel caso una delle pagine sfrattate sia nuovamente richiesta prima che il suo frame sia sovrascritto, può essere ripristinata togliendola dal gruppo dei frame liberi. 

Un modo per implementare questa policy della pulizia è un clock a due lancette, con quella anteriore controllata dal paging deamon. Quando punta a una pagina sporca, essa viene scritta nella memoria non volatile e la lancetta anteriore avanza. Quando punta a una pagina pulita, avanza senza fare altro. La lancetta posteriore è utilizzata per la sostituzione di pagine, come nel normale algoritmo clock, ma con maggiori probabilità di incontrare una pagina pulita grazie al lavoro del paging deamon.


