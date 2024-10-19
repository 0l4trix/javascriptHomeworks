/*
    Gyakorlatok Dátumokkal
*/
let date1 = new Date(1899, 12, 31, 23, 59, 59);
let date2 = '2044. 10.19'

function toDate(date) {
    if (typeof date === 'string')
        date = new Date(date);
    //if(date == 'Invalid Date') - tell user to redo input properly
    return date;
}

date1 = toDate(date1);
date2 = toDate(date2);


/*
    1. Írj egy compareDate(date1, date2) függvényt, mely összehasonlít 2 dátumot, és visszatér a rendezéshez szükséges értékekkel
        - date1 > date2 esetén: 1
        - date1 == date2 esetén: 0
        - date1 < date2 esetén: -1

        Ennek a segégdfüggvénynek a segítségével dátum alapján isrendezni tudjuk egy tömb elemeit.
*/
const compareDate = (date1, date2) => date1 > date2 ? 1 : (date1 < date2 ? -1 : 0);

/*
    2. Írj egy isEqualsDate(date1, date2) függvényt, mely az előző compareDate függvényt felhasználva true értéket ad vissza, ha a bementi 2 dátum egyenlő. false, ha nem.
*/
const isEqualsDate = (date1, date2) => compareDate(date1, date2) == 0 ? true : false;

/*
    3. Írj függvényt, mely egy időbélyeget nappá konvertál.
*/
const getTheDay = timestamp => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(timestamp).getDay()];

/*
    4. Írj függvényt, mely visszaadja, hogy hány nap telt el 2 dátum közt.
*/
const daysPassed = (date1, date2) => Math.floor(Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24));

/*
    5. Írj függvényt, mely egy objectbe adja vissza, hogy hány év, hány hónap, hány nap, hány óra, és hány perc telt el 2 dátum közt.
*/
function timePassed(date1, date2) {
    let diff = daysPassed(date1, date2);
    return { Minutes: diff * 24 * 60, Hours: diff * 24, Days: diff, Months: Math.floor(diff / 12), Years: Math.floor(diff / 365) };
}

/*
    6. Írj egy isFuture(date) függvényt, mely egy dátumról eldönti, hogy az egy jövőbeli dátum-e. true értékkel tér vissza, ha igen.
        false, ha nem.
*/
const isFuture = date => compareDate(date, new Date()) == 1 ? true : false;

/*
    7. Írj függvényt, mely egy dátumhoz paraméter lista alapján hozzá addja egy dátumidő paramétereit. A paraméterlista a következő
        dateIncremnet(date, year, month, date, hours, minutes, secounds);
        ha a date-hez 5 napot akarok hozzáadni, akkor úgy hívom meg a függvényt, hogy 
        dateIncrement(date, 0, 0, 5); Tehát a paraméterek, jobbról balra elhagyhatóak legyenek, vagyis opcionálisak.
*/
const dateIncrement = (date, year=0, month=0, day=0, hours=0, minutes=0, seconds=0) => new Date(new Date(date.getYear()+year+1900+Math.floor((date.getMonth()+month+1)/12), (date.getMonth()+month+1)%12).getTime()+day*24*60*60*1000+hours*60*60*1000+minutes*60*1000+seconds*1000);

/*
    8. Írj howOld(birthDate) függvényt, mely paraméterként megkapja egy személy születési évét, és visszatér az illető korával. (vagyis, hogy hány éves)
*/
const howOld = birthDate => isFuture(birthDate) ? 'Not born yet' : timePassed(birthDate, new Date()).Years;

/*
    9. Írj egy isExpire(date) függvényt, ami tru értékkel tér vissza, ha lejárt a bemenetként kapott dátumidő.
*/
const isExpire = date => isFuture(date) == false ? true : false;

/*
    !!! A függvényeket úgy valósítsátok meg, hogy bementi dátum, egyárant lehessen egy Date object és akár egy dátum string is.

    Jó munkát!
*/