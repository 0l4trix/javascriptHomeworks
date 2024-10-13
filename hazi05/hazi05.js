/*
    Adott az alábbi számtömb:
*/

let numbers = [10, 25, 34, 56, 3, 12, 9, 8, 11, 42, 17, 58, 2, 6, 22, 14];

/*
    1. Írj programot, mely kiszűri, a "numbers" tömbből, a 20, és 50 közé eső számokat.
        - lehetőleg használjatok tömbkezelő függvényeket.
*/
const filteredNums = numbers.filter(num => num > 20 && num < 50);


/*
    2. Írjatok egy multiDelete függvényt, mely bemenetként megkap egy tömböt, melyből elemeket szeretnénk törölni, és egy másik tömbben
       azokat az elemeket, amelyeket törölni szeretnénk. A függvény törölje az első paraméterként megadott tömbből, a második paraméterként
       megadott tömb elemeit. A függvény végül térjen vissza a sikeresen törölt elemek tömbjével.
*/
function multiDelete(deleteFrom, toDelete) {
    let deleted = [];
    for (let i = 0; i < toDelete.length; i++) {
        if (deleteFrom.findIndex(n => toDelete[i] === n) != -1) {
            deleteFrom.splice(deleteFrom.findIndex(n => toDelete[i] === n), 1);
            deleted.push(toDelete[i]);
        }
    }
    return deleted;
}

/*
    3. Adott az alábbi tömb 
*/
const emberek = [
    {
        id: 1,
        firstName: "Almási",
        lastName: "Nóémi",  //biztos hosszú ó-val?
        position: "vezető",
        age: 32
    },
    {
        id: 2,
        firstName: "Kovács",
        lastName: "Gábor",
        position: "dolgozó",
        age: 40
    },
    {
        id: 3,
        firstName: "Jakab",
        lastName: "Orsolya",
        position: "dolgozó",
        age: 28
    },
    {
        id: 4,
        firstName: "Mátyás",
        lastName: "Norbert",
        position: "vezető",
        age: 30
    },
    {
        id: 5,
        firstName: "Herceg",
        lastName: "Ferenc",
        position: "dolgozó",
        age: 41
    },
    {
        id: 6,
        firstName: "Ivácsony",
        lastName: "Gabriella",
        position: "vezető",
        age: 32
    },
    {
        id: 7,
        firstName: "Dusinszki",
        lastName: "Levente",
        position: "dolgozó",
        age: 32
    },
    {
        id: 8,
        firstName: "Gábor",
        lastName: "Irén",
        position: "dolgozó",
        age: 25
    },
    {
        id: 9,
        firstName: "Osváth",
        lastName: "Pongrác",
        position: "dolgozó",
        age: 45
    },
    {
        id: 10,
        firstName: "Fülöp",
        lastName: "Eszter",
        position: "vezető",
        age: 33
    }
];

/*
     Valósítsunk meg egy egyszerű CRUD apit a fenti tömbön. A CRUD egy rövídítés: A Create, Read, Update és Delete szavak kezdőbetűi.
    3.a. -"Create" címszó alatt egy olyan függvényt valósítsatok meg, mely hozzáad egy új embert az emberek tömbhöz.
           Nehézség, hogy az id-t a program kell autómatikusan hozzáadja. Az id legyen AutoIncrement, ami azt jelenti, hogy az újonnan bevitt adat,
           az utolsó id-nál egyel nagyobb értéket kapja. 
*/
let newValues = ['Teszt', 'Elek', 'dolgozó', 22];

function newLine(array, newValues, keys = Object.keys(array[array.length - 1]), id = -1) {
    let worker = {};
    worker['id'] = id === -1 ? array[array.length - 1].id + 1 : id;
    newValues.forEach((data, i) => worker[keys[i + 1]] = data);
    return worker;
}
const createLine = (array, newValues) => array[array.push(newLine(array, newValues))-1];

/*
    3.b. -"Read" címszó alatt egy olyan függvényt valósítsatok meg, mely segítségével le tudunk kérdezni id alapján egy embert az emberek
          tömbből.
*/
const readLine = (array, id) => array.find(n => id === n.id);

/*
    3.c. -"Update" címszó alatt egy olyan függvényt valósítsatok meg, mely id alapján módosítást hajt végre az adott id-val rendelkező 
           bejegyzésen
           minta: updteEmber(3, {position: "vezető", age: 29, vegzettseg: "főiskola"});
           Amint látjátok, itt már új adatokkal is bővítethetjük az adott embert.
*/
let newValues1 = ['Teszt', 'Elek András', 'dolgozó', 22, 'főiskola']
let newKeys = [...Object.keys(emberek[0]), 'vegzettseg']; //why put hu into en though?

const updateLine = (array, newValues, newKeys, id) => array[array.findIndex(n => n.id === id)] = newLine(array, newValues, newKeys, id);

/*
    3.d. - "Delete" címszó alatt pedig egy ember törlését valósítsátok meg. Amelyben a függvény megkapja a törlendő ember id-ját.
            és ha létezik ilyen id-jú elem a tömbben, akkor, azt törli az emberek-ből.
*/
const deleteLine = (array, id) => array.findIndex(n => n.id === id) === -1 ? "Id doesn't exist" : array.splice(array.findIndex(n => n.id === id), 1);

/*
    3.e. Írj programot, mely az emberek tömből külön válogatja a dolgozókat a vezetőktől.
*/
const isLeader = array => [array.filter(n => n.position == 'vezető'), array.filter(n => n.position == 'dolgozó')];

/*
    4. Írj függvényt annak ellenőrzésére, hogy egy adott egész számok tömbje szigorúan növekvő vagy csökkenő sorozatot képvisel-e.
*/
const backAndForth = (array, backwards = false) => array.every((n, i) => n === array.map(x => x).sort((a, b) => backwards ? b - a : a - b)[i]);
const ordered = array => backAndForth(array) || backAndForth(array, true);

/*
    5. Írj függvényt, mely egy szöveg felsorolás tagjait ABC szerint sorba rendezi. (Tehát a bemenet egy string, vagyis szövegfelsorolás)
*/
const alphabetical = string => [...string.match(/[a-zöüóőúéáűí]+/gi)].sort((a, b) => a.localeCompare(b)).join(' ');