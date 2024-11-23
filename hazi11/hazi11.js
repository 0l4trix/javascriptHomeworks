/*
        1.
        Egy adattömből Javascript segítségével rendereljetek le egy listát <ul><li>Szoveg</li>...</ul> 
        és hozzatok létre egy gombot. A gombra klikkelve DOM műveletek segítségével, fordítsátok meg a lista sorrendjét.
*/
import * as list from "./list.js";
/*
        2.
        Írjatok egy táblázatfeltöltő programot.
        mely a html oldalon létrehoz egy 3 mezőből álló űrlapot, és egy hozzáad gombot.
        A 3 űrlapmező a következőkbúl áll: Név, cím, telefonszám.
        A hozzáad gomb hatására a 3 mezőből hozzátok létre egy táblázat sorát (dom függvények segítségével)
        majd adjátok hozzá a html oldalatokon elhelyezett táblázathoz.
        (egyéni döntés, hogy table-tr-td, vagy div alapú táblázatot készítetek.)
        plusz gyakorlásként kiszervezhetitek ezt a mechanizmust modulba is.
*/
import * as tableUpload from "./tableUpload.js";
/*
        3.
        Írj egy szinező modult mely segítségével a HTML oldalon elhelyezett elemeket szinezhetjük ki.
        A modul tartalmazzon egy 
                fill(selector, color) - megadott szín alapján szinez
                        és egy 
                randomFill(slector) - véletlenszerűen szinez.
                        függvényt, melyek a selectorban megadott elemet szinezik át.
*/
import * as coloring from "./coloring.js";

document.addEventListener('click', function() {
        coloring.randomFill([...document.querySelectorAll(':hover')].pop());
});