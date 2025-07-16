Parametri Considerati:
- Dimensione media del processo = $s$ byte
- Dimensione della pagina = $p$ byte
- Dimensione di ogni voce nella tabella delle pagine = $e$ byte

Calcolo Overhead:
- Numero di pagine per processo = $s/p$
- Spazio occupato nella tabella delle pagine = $s \cdot e / p$ byte
- Memoria sprecata per frammentazione interna nell'ultima pagina = $p/2$

Overhead totale = $s\cdot e/p+p/2$:
- Il primo termine aumenta con pagine più piccole
- Il secondo termine aumenta con pagine più grandi
- L'ottimo si trova bilanciando questi due fattori

Overhead totale = $s\cdot e/p + p/2$
Formula per la Dimensione Ottimale delle Pagine:
- Derivata della funzione di overhead rispetto a p uguagliata a zero = $-s\cdot e/p^2 + 1/2 = 0$
- Dimensione ottimale delle pagine = $p = \sqrt {2s\cdot e}$

Variazione nelle Dimensioni delle Pagine:
- Gamma tipica in computer commerciali: da 512 byte a 64KB
- Dimensione comune attuale: 4KB


