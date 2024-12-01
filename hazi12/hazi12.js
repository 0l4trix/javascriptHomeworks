/*
	1.
	Küldjetek kérést az alábbi erőforrásra, melyben földrengés adatok vannak tárolva. 
	https://seismic-api.science.unimelb.edu.au/significant-quakes
	Az oldalon jelenítsétek meg, a 10 legjelentősebb földrengés helyszínét és értékét, egy listában. 
*/
import * as earthquake from './earthquake.js';

/*
	2.
    Készítsetek egy JSON fájlt, amiben az órán megírt textBoxokhoz használatos adatokat tároljátok.
    Ez a fáj tartalmazzon 5-nél több textboxra való adatot (cím, alcím, szöveg)

    Ajax segítségével töltsétek be ezt a JSON-t és a már megírt TextBox használatával
    generáljátok le, az adatoknak megfelelő szövegdobozokat a JSON-ból.

	Majd a JSON fájlhoz, adj hozzá újabb adatokat, és élvezd munkád gyümölcsét! :) 
	Hiszen, ha kész a munkád, ahhoz, hogy újabb tartalmak jelenjenek meg az oldalon, semmi mást
	nem kell tenned, mint, újabb adatokat írj a JSON-ba. És az oldal újratöltésével automatikusan 
	megjelnnek, az új dobozok is, anélkül, hogy a forráskódhoz hozzá kellene nyúlnod.
*/
import * as textbox from './textbox.js';

fetch('./textboxData.json')
    .then(res => res.json())
    .then(data => {
		let classes = [];
		data.forEach(object => {classes.push(new textbox.TextBox(object))});
    })
    .catch(err => console.log(err));