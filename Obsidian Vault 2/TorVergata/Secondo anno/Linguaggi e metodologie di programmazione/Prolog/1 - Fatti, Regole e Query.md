
#### Fatti
I fatti vengono usati per instanziare cose che sono incondizionatamente vere per certe situazioni di interesse.

>[!example] Esempi
>woman(mia).
>woman(jody).
>woman(yolanda).
>playsAirGuitar(jody).
>party.
>


#### Regole

>[!example] Esempi
>felice(yolanda).
>ascoltaMusica(mia).
>ascoltaMusica(yolanda) :- felice(yolanda).
>suonaChitarra(mia) :- ascoltaMusica(mia).
>suonaChitarra(yolanda) :- ascoltaMusica(yolanda).

Le regole sono informazioni che sono condizionatamente vere per la situazione di interesse. Per esempio, la prima regola dice che Yolanda ascolta musica se è felice, l'ultima regola dice che Yolanda suona la chitarra se ascolta la musica. Più genericamente, il :- dovrebbe essere letto come un "se", oppure "è implicato da". La parte sul lato sinistro del :- è chiamato testa della regola, la parte a destra è chiamata corpo. Quindi diremo: se il corpo della regola è vero, quindi la testa della regola è anche vera.

#### Atomo
Un atomo è:
1) Una stringa di caratteri fatta di lettere upper-case, lower-case e caratteri di underscore, che iniziano con una lettera in lower-case. Qualche esempio = butch, big_kahuna_burger, listens2Music e playsAirGuitar
2) Una sequenza arbitraria di caratteri chiusi in singole quote. Per esempio 'Vincent', 'The Gimp', 'Five_Dollar_Shake', ' ', &^%&#@$  &* ’,. La sequenza di caratteri nelle singole quote è chiamato *nome dell'atomo*.
3) Una stringa di caratteri speciali. Qualche esempio = @= e =====> e ; e :- sono tutti atomi. 


#### Variabili
Una variabile è una stringa di lettere upper-case, lower-case, digits e caratteri underscore che iniziano tutti con una lettera upper-case o con un underscore. Per esempio X, Y, Variable, underscore tag, X_526, List, List24, underscore head, Tail, underscore input e Output sono tutte variabili di prolog.
La variabile _ è speciale, è chiamata variabile anonima.

