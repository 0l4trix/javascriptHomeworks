/*
    1. Írjunk egy "prim" nevezetű függvényt, mely beneti paraméternek megkap egy számot, és kimenetként
       visszatér egy boolean típussal (true, ha a bemeneti érték primszám , false, ha nem)
*/
function prim(num) {
    if (num < 2)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

/* ************************************************************
                Egyszerű gyakorlatok ciklusokkal
************************************************************* */
/*
    2. Írj függvényt, mely az első feladatban megírt "prim" függvény segítségével, előállítja az első n prímászot.
*/
function getPrim(int) {
    if (int < 1)
        return "Only positive numbers allowed";
    let i = 2;
    let counter = 0;
    while (counter !== int) {
        prim(i) === true ? counter++ : null;
        i++;
    }
    return i - 1;
}

/*
    3. Írjatok egy szorzótábla generátor függvényt, mely paraméterként megkap egy számot, és egy selectort.
       A függvény generálja le a paraméterként megkapott szám 10-es szorzótábláját, és jelenítse meg, a második paraméterként
       kapott selector innerHTML-jébe.
        pl:
            szorzotablaGenerator(8, "#content");
            // az alábbi kimenetet adja:
            // 1 * 8 = 8
            // 2 * 8 = 16
            // 3 * 8 = 24
            //   .
            //   .
            //   .
            // 10 * 8 = 80
*/
//szorzotabla(8, '#content');

function multTable(num, selector) {
    let array = [];
    for (let i = 1; i < 11; i++) {
        array.push(`${i} * ${num} = ${i * num}`);
    }
    document.querySelector(`${selector}`).innerHTML = `<p><br>${array.join('<br></br>')}</br></p>`;
    return array;
}


/* ***********************************************************
                  Műveletek tömbökkel
************************************************************ */

/*
    4. Írj JavaScript függvényt annak ellenőrzésére, hogy egy adott egész számok tömbjének első vagy utolsó pozíciójában 1 szerepel-e. 
    A tömb hosszának nagyobbnak vagy egyenlőnek kell lennie 1-nél.
*/
const oneCheck = array => array.length > 1 && (array[0] === 1 || array[array.length - 1] === 1) ? true : false;

/*
    5. Írj függvényt, mely leellenőrzi, hogy egy adott tömb első és utolsó eleme egyforma-e
*/
const endsCheck = array => array[0] === array[array.length - 1] ? true : false;

/*
    6. Írj függvényt, mely összehasonlít 2 tömböt, és true értékkel tér vissza, ha a 2 tömb egyforma.
    Két tömb akkor egyforma, ha minden azonos indexen levő elemük egyforma.
*/
function copycat(array1, array2) {
    if (array1.length !== array2.length)
        return false;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i])
            return false;
    }
    return true;
}

/*
    7. Írjunk függvényt, mely egy tömb forgatását végzi el. A forgatást úgy képzeljétek el, mintha egy tömb két végét összeillesztenénk, tehát
    mintha egy gyűrűt formálnánk belőle és a gyűrűt forgatnánk.
    pl: ha a tümbünk 
        [1, 2, 3, 4, 5, 6] és ezt elfogatjuk jobbra három lépést, akkor az eredmény forgatás után a következő
        [4, 5, 6, 1, 2, 3] ha ezután balra forgatjuk kettőt, az eredmény 
        [6, 1, 2, 3, 4, 5] (valójában ez ugyan az az eredményt adja, mintha egyet forgattuk volna jobbra)
    A függvény 3 paramétert kajon meg: forgatas(array, hanyszor, irany)
*/
function roulette(array, turns, clockwise = true) {
    let newArray = [...array];
    array.forEach((n, i) => array.splice([(eval(`${i} ${clockwise ? '+' : '-'} ${turns}`)) % array.length], 1, newArray[i]));
    return array;
}

/*
    8. Írjunk programot, mely visszaadja két halmaz(programozásban tömb) különbségeit. Tehát A\B és B\A 
     Az A és B halmaz különbsége (jelölése A"backslash"B) az a halmaz, mely az A halmaz összes olyan elemét tartalmazza, amelyet B nem tartalmaz.
     Rövidítve: A függvény megkap 2 tömböt, és visszatér egy olyan tömbbel, ami nem tartalmazza a két tömb közös elemeit.

    9. Írjuk egy metszet függvényt, mely 2 halmaz metszetével, (A ∩ B) azaz közös elemivel tér vissza.

    10. Írj függvényt mely 2 halmaz egyesítését (A∪B) végzi el. Azaz visszatér egy olyan tömbbel, ami mindkét "halmaz" elemeit tartalmazza,
    de csak egyszer.
*/
function compare(array1, array2, diffSameJoined = 0) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        if (!result.includes(array1[i])) {
            if (diffSameJoined > 0 && array2.includes(array1[i]))
                result.push(array1[i]);
            else if (diffSameJoined !== 1 && !array2.includes(array1[i]))
                result.push(array1[i]);
        }
    }
    return result;
}

const diffs = (array1, array2) => [compare(array1, array2), compare(array2, array1)];

function joined(array1, array2) {
    let final = [];
    compare(array1, array2, 2).concat(compare(array2, array1, 2)).forEach((n) => final.includes(n) ? null : final.push(n));
    return final;
}

/*
    11. Írjatok egy függvényt, mely egy string tömb (tehát a tömb minden eleme string) minden elemét camelCase stílusuvá alakítja.
    pl: ha a bemeneti tömb: 
        ["cica farka", "esik az eső", "zimankó", "camel case"]
    akkor az eredmény:
        ["cicaFarka", "esikAzEso", "zimanko", "camelCase"] legyen. 

    Ez egy összetetteb feladat, hiszen az ékezetes karakterek is át lettek alakítva.
*/
function camel(array) {
    let vowels = [{ letter: 'á', number: 1 }, { letter: 'é', number: 2 }, { letter: 'í', number: 3 },
    { letter: 'ó', number: 4 }, { letter: 'ö', number: 4 }, { letter: 'ő', number: 4 },
    { letter: 'ú', number: 5 }, { letter: 'ü', number: 5 }, { letter: 'ű', number: 5 }];

    let newVowels = [{ letter: 'a', number: 1 }, { letter: 'e', number: 2 }, { letter: 'i', number: 3 },
    { letter: 'o', number: 4 }, { letter: 'u', number: 5 }];

    for (let i = 0; i < vowels.length; i++) {
        array.forEach((n, e) => array[e] = n.replaceAll(vowels[i].letter, newVowels.find(v => v.number === vowels[i].number).letter));
    }
    array.forEach((n, i) => array[i] = n.toLowerCase().replace(/(?<=[a-z])\s[a-z]/g, result => result.trim().toUpperCase()));
    return array;
}

/*
    Jó munkát :)
*/