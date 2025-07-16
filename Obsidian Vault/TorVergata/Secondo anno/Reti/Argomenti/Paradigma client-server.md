Server:
- host sempre attivo
- indirizzo IP fisso
- spesso in datacenter, per la scalabilità

Client:
- contatta, comunica col server
- può contattare il server in qualunque momento
- può avere indirizzi IP dinamici
- non comunica direttamente con gli altri client

**Architettura peer-to-peer**
- non c'è un server sempre attivo
- coppie arbitrarie di host (peer) che comunicano direttamente tra loro
- i peer richiedono un servizio ad altri peer e forniscono un servizio in cambio ad altri peer
- i peer non devono necessariamente essere sempre attivi e cambiano spesso IP
