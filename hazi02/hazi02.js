//let num1 = 14;
//let num2 = 1404;
let result = document.querySelector("#content");
let num1 = parseFloat(prompt("Kérem adjon meg egy számot:"));
let num2 = parseFloat(prompt("Kérem adjon meg még egy számot:"));
//Ha nembaj a többi feladathoz csak simán változóban adom meg a paramétereket, mert kicsit sok van belőlük

let num3 = 4; //3

let int1 = parseInt(num1); //6
let int2 = parseInt(num2); //6
let divisor = 5; //6

let operand1 = 10; //7
let operand2 = 2; //7
let mathResult = 6; //7

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //8

let int3 = parseInt(num3); //extra1

let param1 = -200; //extra2
let param2 = 200; //extra2

let doubleNum = 25; //extra4



//1. Írj Javascript függvényt, mely bemenetként megkap 2 számot, és igazat ad vissza, ha a két szám ellenkező előjelű, hamisat, ha nem.

function posNeg(num1, num2) {
    switch (true) {
        case num1 < 0 && num2 >= 0:
            result.innerHTML = "1. Igaz";
            break;
        case num1 >= 0 && num2 < 0:
            result.innerHTML = "1. Igaz";
            break;
        default:
            result.innerHTML = "1. Hamis";
    }
}
posNeg(num1, num2);

//2. Írj egy függvényt, mely egy számról eldönti, hogy egy másik szám többszöröse-e.
function mult(num1) {
    if (num2 % num1 === 0)
        result.innerHTML += "<br>2. Többszöröse";
    else
        result.innerHTML += "<br>2. Nem többszöröse";
}
mult();

//3. Írj függvényt, mely 3 számról eldönti, hogy az utolsó számjegyük egyforma-e.
function lastNum(num) {
    num = num + "";
    let last;
    for (let i = 0; i < num.length; i++) {
        last = num[i];
    }
    return last;
}
function lastNumCheck(num1, num2, num3) {
    if (lastNum(num1) === lastNum(num2) && lastNum(num2) === lastNum(num3))
        result.innerHTML += "<br>3. Utolsó számjegy egyforma";
    else
        result.innerHTML += "<br>3. Utolsó számjegy nem egyforma";
}
lastNumCheck(num1, num2, num3);

//4. Írj függvényt, mely két megadott szám közül eldönti, hogy melyik van közelebb a 100-hoz, és térjen vissza ezzel a számmal.
function hundredDist(num) {
    if (num >= 100)
        return num - 100;
    else if (num >= 0)
        return 100 - num;
    else
        return -num + 100;
}
function hundredCheck(num1, num2) {
    if (hundredDist(num1) > hundredDist(num2))
        result.innerHTML += `<br>4. ${num2}`;
    else if (hundredDist(num1) < hundredDist(num2))
        result.innerHTML += `<br>4. ${num1}`;
    else
        result.innerHTML += `<br>4. Egyenlő távolságra vannak 100-tól`;
}
hundredCheck(num1, num2);

/*
    5. Írj függvényt, mely pontszámok alapján minősítést ad.
        - Ha a pontszámok elérik a 100-at, a minősítés "Tökéletes"
        - Ha a pontszámok 90-99 közt vannak, akkor "Kiválló"
        - Ha a pontszámok 75-89 közt vannak, akkor "Jó"
        - Ha a pontszámok 50-74 közt vannak, akkor "Elégséges"
        - 50-alatt pedig "Elégtelen"
    minpősítéssel tér vissza.
*/

function grade(num) {
    switch (true) {
        case num = 100:
            result.innerHTML += "<br>5. Tökéletes";
            break;
        case num >= 90:
            result.innerHTML += "<br>5. Kiváló";
            break;
        case num >= 75:
            result.innerHTML += "<br>5. Jó";
            break;
        case num >= 50:
            result.innerHTML += "<br>5. Elégséges";
            break;
        case num < 50:
            result.innerHTML += "<br>5. Elégtelen";
            break;
        default:
            result.innerHTML += "<br>5. Nem minősíthető";
    }
}
grade(num1);

/*
    6. Írj függvényt, amely két egész számot és egy osztót vesz fel, és eldönti, hogy a 2 egész szám hasonló-e az osztó függvényében. 
       Ha az adott osztó mindkét egész számot osztja, vagy egyiket sem osztja, akkor a két megadott egész szám hasonló. 
       Ha a 2 szám hasonló, a függvény térjen vissza true értékkel, különben hamissal.
*/
function divide(int1, int2, divisor) {
    if (int1 % divisor === int2 % divisor) {
        result.innerHTML += "<br>6. Hasonlóak";
        return true;
    } else {
        result.innerHTML += "<br>6. Nem hasonlóak";
        return false;
    }
}
divide(int1, int2, divisor);

/*
    7. Írj függvényt mely felveszi (megkapja paraméterként) egy művelet 2 operandusát, és az eredményt.
       A függvény döntse el, hogy a 4 alapművelet közül (*, /, +, -), melyiket kell elvégeznünk a 2 operandus közt, hogy megkapjuk
       a harmadik paraméterként írt eredményt. Térjen vissza, a helyes operátorral (stringként), vagy ha egyik művelet sem
       adja a megadott eredményt, a függvény térjen vissza null értékkel.
*/
function math(op1, op2, res) {
    let signs = ['*', '/', '+', '-'];
    let operator = null;
    for (let i = 0; i < signs.length; i++) {
        if (eval(`${op1} ${signs[i]} ${op2}`) === res)
            operator = signs[i];
    }
    result.innerHTML += `<br>7. ${operator}`;
    return operator;
}
math(operand1, operand2, mathResult);

//8. Írj függvényt, mely bemenetként megkap egy számtömböt, és visszatér, a tömben levő páratlan számok összegével.
function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1)
            sum += array[i];
    }
    result.innerHTML += `<br>8. ${sum}`;
}
arraySum(array);


/********************************************************
 *                      Szorgalmi
 ********************************************************/

//Írj függvényt mely, három megadott egész szám közül visszaadja a legnagyobbat.  
let numArray = [int1, int2, int3]; //so more can be added
function maxNum(array) {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num)
            num = array[i];
    }
    result.innerHTML += `<br>Extra 1. ${num}`;
    return num;
}
maxNum(numArray);


/*
    Írj programot, mely eldönti egy számról, hogy egy adott inervallumba van-e.
    Az intervallum, a függvény paraméterei
*/
function interval(num, param1, param2) {
    if ((num > param1 && num < param2) || (num < param1 && num > param2)) {
        result.innerHTML += "<br>Extra 2. Az adott intervallumba esik";
        return true;
    }
    else {
        result.innerHTML += "<br>Extra 2. Nem esik az adott intervallumba";
        return false;
    }
}
interval(num1, param1, param2);

/*
    Írj függvényt, mely meghatározza egy adott szög típusát.  

    A szögek típusai:
        Hegyesszög: 0 és 90 fok közötti szög.
        Derékszög: 90 fokos szög.
        Tompaszög: 90 és 180 fok közötti szög.
        Egyenes szög: 180 fokos szög.
*/

function degree(num) {
    switch (true) {
        case 0 < num < 90:
            result.innerHTML += "<br>Extra 3. Hegyesszög";
            break;
        case num === 90:
            result.innerHTML += "<br>Extra 3. Derékszög";
            break;
        case 90 < num < 180:
            result.innerHTML += "<br>Extra 3. Tompaszög";
            break;
        case num === 180:
            result.innerHTML += "<br>Extra 3. Egyenes szög";
            break;
        default:
            result.innerHTML += "<br>Extra 3. Nem minősíthető";
    }
}
degree(num1);

/*
    Írj függvényt, mely visszatér egy 2 jegyű szám tagjainak összegével.
    25 esetén 2+5, vagyis 7-el
*/

function add(num) {
    num = num + "";
    sum = eval(`${num[0]} + ${num[1]}`);
    result.innerHTML += `<br>Extra 4. ${sum}`;
    return sum;
}
add(doubleNum);