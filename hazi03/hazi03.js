
/*
    1. Írj egy függvényt, mely visszaadja egy fájl kiterjeszétést. (bemenetként megkapja a fájl nevét, vagy egy teljes elérési útvonalat.)
*/
const fileType = file => file.match(/(?=\.).+$/g);

/*
    2. Írj egy "dr(name)" függvényt, mely doktorrá nevezi ki azokat a neveket, amelyek előtt nincs ott a "dr." és visszatér az új névvel.
       Ha a bemenetként kapott név nem már rendelkezik a "dr." előtaggal, akkor simán a bemeneti névvel térjen vissza.
*/
const doctorize = string => string.replace(/(?<!dr\.)\b[A-ZÖÜÓŐÚÉÁŰÍ][a-zöüóőúéáűí]+([ ][A-ZÖÜÓŐÚÉÁŰÍ][a-zöüóőúéáűí]+)+\b/g, result => 'dr. '+result);

/*
    3. Írj függvényt, amely megszámolja egy adott karakterlánc magánhangzóinak számát!  
*/
function vowelCount(string) {
    let vowels = [...string.matchAll(/[öüóeuioőúaéáűí]/gi)];
    return vowels.length;
}

/*
    4. Írj függvényt annak tesztelésére, hogy egy karakterlánc "Script"-re végződik-e. 
       A karakterlánc hosszának 6-nál nagyobbnak vagy egyenlőnek kell lennie.  
*/
const isScript = string => string.match(/.{6,}(?=Script$)/gi) !== null ? true : false;

/*
    5. Írj függvényt, mely megnézi, hogy egy karakterláncban kis vagy nagy betűből van-e több, és az egész stringet, olyanná alakítja.
*/
function caseTransform(string) {
    let lower = [...string.matchAll(/[a-zöüóőúéáűí]/g)];
    let upper = [...string.matchAll(/[A-ZÖÜÓŐÚÉÁŰÍ]/g)];
    if (lower.length > upper.length)
        return string.toLowerCase();
    else if (upper.length > lower.length)
        return string.toUpperCase();
    else
        return string;
}

/*
    6. Írj függvényt, mely eldönti, hogy egy karakerlánc lehet-e mondat, vagy sem. 
        Egy karakterlánc akkor tekinhető mondatnak, ha nagy betűvel kezdődik, és ponttal végződik.
*/
//what if it starts with number though?
const isSentence = string => string.match(/^[A-ZÖÜÓŐÚÉÁŰÍ].*(?<=[.!?])$/gi) !== null ? true : false; //used * on purpose (exclamation, surprise)

/*
    7. Írj függvényt, mely eldönti egy szövegről, számról, tömbről, hogy palindróma-e vagy sem.
*/
function isPalindrom(input) {
    Array.isArray(input) ? null : input = Array.from(String(input));
    let tupni = [];
    for (let i = input.length - 1; i >= 0; i--) {
        tupni.push(input[i]);
    }
    console.log(input);
    console.log(tupni);
    return input === tupni ? true : false; //why false???????
}
console.log(isPalindrom('kellek'));

/*
    8. Írj függvényt, mely egy névből előállít egy monogrammot. 
       (Az ügyesebbek térjenek ki a magyar nevekre is, tehát az én nevem monogrammja nem F.Z, hanem ugye F.Zs.) 
*/
function monogram(string, double = []) {
    let doubleCheck = 1;
    return string.replace(/([A-ZÖÜÓŐÚÉÁŰÍ])[a-zöüóőúéáűí]+/g, function (result) {
        if (double.includes(doubleCheck)) {
            doubleCheck += 1;
            return result[0] + result[1] + '.';
        } else {
            doubleCheck += 1;
            return result[0] + '.';
        }
    });
}

/************************************************************
 * 
 *          Gyakorlatok reguláris kifejezésekkel
 * 
 ************************************************************/

/*

    9. Adott az alábbi string
*/
var cicus = "Cirmi délben eszik majd alszik egy nagyot. Aztán ha felkelt játszik egyet.";

/*
    Reguláris kifejezés segítségével szedjük ki a "cicus" változó tartalomból az ik-es igéket.
*/
cicus.match(/\b[a-zöüóőúéáűí]+(ik)\b/gi);

/*
    10. irjatok regularis kifejezest, mely egy szovegbol kiveszi a datumido karakterlancokat pl 2021.09.28 09:59 (UTC)
*/
let string = "This is just here to get rid of error";
string.match(/\b\d{4}([-.:])\d{2}\1\d{2}[ ]\d{2}[.:]\d{2}[ ][(]\S+[)]/g);

/*
    11. Irjunk regularis kifejezest mely kiveszi egy sztringbol az aritmetikai muveleteket. (nem csak a muveletjeleket, hanem a a muveletsort)
*/
string.match(/((\d+(([ ]?)[+-/*]+\4\d+)+)|([√]\d+))([ =]+\d+)?/g); //how to solve square???

/*
    12. Írjunk reguláris kifejezést, amely a teljes nevekre illeszkedik (Csaladnev Keresztnev)
*/

let nevek = "Pataki Ede, kirándulni ment Sándor Dalma és Kovács Endre István barátaival.";
nevek.match(/[A-ZÖÜÓŐÚÉÁŰÍ][a-zöüóőúéáűí]+([ ][A-ZÖÜÓŐÚÉÁŰÍ][a-zöüóőúéáűí]+)+/g); //finds things like name of building too...

/*
    13. Adott az alábbi szöveg:
*/
let szoveg = "Márton március 25-én indul diplomáciai útra, mert 26-án fontos tárgyalása van, ahol 13 ügyféllel találkozik. Utána siet haza, hogy elérje a 28-án rendezett konferenciát.";
/*
    Írjunk reguláris kifejezéseket, mely kiveszi azokat a számokat, melyeket kötőjeles toldalék követ. Ám az eredményben, csak a számok legyenek.
    tehát a szoveg.match kimenete Array(3) [ "25", "26", "28" ] kell legyen. A 13 nem szerepeljen benne.

    13.a. Ha ez megvan, akkor próbáljátok úgy átalakítani ezt a reguláris kifejezést, hogy akkor is müködjön, ha némely hónap napja,
       még régiesen van meghatározva, tehát, hogy pont is van a szám után.
*/
szoveg.match(/\d+(?=-|.-)/g);

/*
    14. Írjatok reguláris kifejezést, mely egy valós óra:perc-re illeszkedik. 
        - A formátum tehát: hh:mm
        - ha véletlenül valaki nem tudná olvasni a dátum idő formátumokat: a "hh" azt jelenti, hogy a hours 2 karakteren, míg az "mm", hogy a minutes 2 karakteren
       !Hogy valós óra:perc, azt jelenti, hogy csak akkor illeszkedik, ha a string 00:00 és 23:59 tartományban mozog.
*/
let vop = "valós óra:perc, azt jelenti, hogy csak akkor illeszkedik, ha a string 00:00 és 23:59 tartományban mozog. A 25:55 percre nem.";
vop.match(/(([01][0-9])|([2][0-4]))[:.][0-5][0-9]/g);

/*
    15. Adott az alábbi templét
*/

const tpl = `
    <div id="{{productId}}" class="product-box">
        <div class="product-image">
            <img src="{{productImageUrl}}">
        </div>
        <div class="product-name">
            <span>Termék: </span><span>{{productName}}</span>
        </div>
        <div class = "product-price">
            <span class="akarmi">{{productPrice}}</span><span>HUF</span>
        </div>
    </div>
`;
/*
    15.a.) Reguláris kifejezésekkel, szedjük ki a template változókat. (template változók, a: {{templateVariable}}  )
*/
tpl.match(/[{]{2}\w+[}]{2}/g);

/*
    15.b.) Reguláris kifejezések segítségével, a fenti templétből, szedjük ki a class attributumok értékeit, azaz a css osztályok neveit.
*/
tpl.match(/(?<=(class[ ]?=[ ]?\"))[\w-]+/g);
