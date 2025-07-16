#Linguaggi 


![[Pasted image 20250114132015.png]]


```

dispensa(farina, 500).
dispenda(uova, 10).
dispensa(olio, 200).
dispensa(zucchero, 300).
dispensa(latte, 1000).

piatto(pancakes, 15, [farina-200, uova-2, latte-300, zucchero-50, olio-10]).
piatto(pasta_frolla, 30, [farina-300, uova-3, zucchero-100, burro-200]).
piatto(omelette, 10, [uova-3, latte-100, olio-10]).

ingredienti_sufficienti([]).
ingredienti_sufficienti([Ingrediente-QuantitaRichiesta | Altri]) :-
	dispensa(Ingrediente, QuantitaDisponibile),
	QuantitaDisponibile >= QuantitaRichiesta,
	ingredienti_sufficienti(Altri).

piatto_per_oggi(TempoMassimo, NumeroPersone, NomePiatto, IngredientiConQuantita) :-
	piatto(NomePiatto, TempoPreparazione, Ingredienti),
	TempoPreparazione =< TempoMassimo,
	scala_ingredienti(Ingredienti, NumeroPersone, IngredientiConQuantita),
	ingredienti_sufficienti(IngredientiConQuantita).

scala_ingredienti([], _, []).
scala_ingredienti([Ingrediente-Quantita | Altri], NumeroPersone, [Ingrediente-QuantitaTotale | Scalati]) :-
	QuantitaTotale is Quantita * NumeroPersone,
	scala_ingredienti(Altri, NumeroPersone, Scalati).





```