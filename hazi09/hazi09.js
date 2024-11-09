/*
    1. Készíts egy olyan osztályt, mely egy tömbö tárolására alkalmas, és
        - Képes kiszamolni az elemek összegét, átlagát, minimumát, maximumát (ezek egy-egy külön függvény legyenek)
        - Egy másik ugyanilyen példány tömbjének elemeiből képes átvenni azokat az elemeket, amelyek még nem szerepelnek saját
        magában
*/
class ArrayHandler {
    array;
    #copiedArray = [];

    constructor(array) {
        this.array = array;
    }

    set copiedArray(copiedArray) {
        if (ArrayHandler.prototype.isPrototypeOf(this))
            this.#copiedArray = copiedArray.array;
    }
    get copiedArray() {
        return this.#copiedArray;
    }

    sum() {
        let sum = 0;
        this.array.forEach(n => sum += n);
        return sum;
    }

    average() {
        return this.sum() / this.array.length;
    }

    min() {
        return this.array.sort((a, b) => a - b)[0];
    }

    max() {
        return this.array.sort((a, b) => a - b)[this.array.length - 1];
    }

    copyArray() {
        this.#copiedArray.forEach(n => !this.array.includes(n) ? this.array.push(n) : null);
        return this.array;
    }
}

/*
    2. Valósíts meg egy cica osztályt:
        - a következő adatokkal: neve, súlya, és hogy éhes-e (az éhes legyen boolean típusú)
        - Az osztálynak legyen egy eszik metódusa, ami egy float értéket vár (étel mennyisége), 
        és egy boolean-al tér vissza (sikeres volt -e az etetés). Ha a macska éhes, az etetés
        sikeres, és a súlya nőjön az étel mennyiségével. A macska ezután ne legyen éhes. Ha a
        macska nem éhes, az etetés nem sikeres.
        -Az osztálynak legyen egy futkos metódusa, ami nem vár paramétert. A macska
        súlya csökkenjen 0.1-el, és ha nem volt éhes, akkor éhezzen meg.
*/
class Kitten {
    name;
    weight;
    hungry;
    #dead = false;

    constructor(name, weight, hungry) {
        this.name = name;
        this.weight = parseFloat(weight) || 0.1;
        this.hungry = Boolean(hungry) || true;
    }

    eat(foodAmount) {
        if (!isNaN(parseFloat(foodAmount)) && this.hungry && !this.#dead) {
            this.weight += parseFloat(foodAmount);
            this.hungry = false;
            return true;
        }
        return false;
    }

    run() {
        this.weight -= 0.1;
        this.hungry = true;
        if (this.weight > 0)
            return this.weight;
        this.#dead = true;
        return 'A macskád belehalt az éhségbe...';
    }
}

/*
    3. Hasonlóan a Cica osztályhoz, írjunk egy Auto osztályt!

    - Az Auto osztály konstruktorában állítsuk be az autó rendszámát, az üzemanyagtartály méretét literben,
      az autó átlagfogyasztását (Hány litert fogyaszt 100km-en), és azt, hogy az auto eddig hány km-et tett meg.

    - rendelkezzen a egy tankol metódussal, ami paraméterként megkapja, hogy hány litret szeretnénk tankolni.
        - A tankolás sikeres, ha a tartályba belefér még a tankolni kívánt mennyiség
        - A tankolás sikertelen, ha nem fér bele a kívánt mennyiség.
        - A metódus visszatér a tankolás sikerével vagy sikertelenségével, azaz egy logikai típussal.

    - rendelkezzen egy szervíz (szerviz) metódussal, ami lefut előszőr a konstruktorban.
        - Ez a 10 000 km-enkénti kötelező szervízet jelenti.
        - ha megtettünk vele 10 000 km tvolságot, kötelezően szervízelni kell, anékül ne indulhasson el az autó.
          szervíz után természetesen ez a számláló nullázódik.

    - rendekezzen egy száguld (szaguld) metódussal, ami paraméterben megkapja az utazás távolságát km-ben.
        - az üzemanyag fogyjon annyival, amennyi szükséges a megtenni kívánt távolság megtételéhez.
        - a megtett km-ek növekedjen a megtett út hosszával.
        - ha nincs elegendő üzemanyag, az autó ne induljon es térjen vissza "tankolj" üzenettel.
        - ha eljött a kötelező szervíz ideje, az autó ne induljon el és térjen vissza "szerviz" üzenettel.
        - ha sikeresen megtette a távot, térjen vissza "siker" üzenettel.
*/
class Car {
    licencePlateNum;
    maxFuel;
    fuelConsumption;
    kmsTravelled;
    #lastService;
    #fuel = 0;

    /**
     * 
     * @param {number} licencePlateNum 
     * @param {number} maxFuel in litre
     * @param {number} fuelConsumption ? litre/100kms
     * @param {number} kmsTravelled 
     */
    constructor(licencePlateNum, maxFuel, fuelConsumption, kmsTravelled) {
        this.licencePlateNum = licencePlateNum;
        this.maxFuel = maxFuel; //won't write defaults cause I don't know a thing about cars
        this.fuelConsumption = fuelConsumption;
        this.kmsTravelled = Number(kmsTravelled) || 0;
        this.service();
    }

    refuel(litres) {
        if (this.#fuel + litres <= this.maxFuel) {
            this.#fuel += litres;
            return true;
        }
        return false;
    }

    service() {
        this.#lastService = 0 + this.kmsTravelled;
        return 'Szervíz befejezve!'; //put it into log to show up even when the constructor invites
    }

    race(kms) {
        if (kms / 100 * this.fuelConsumption > this.#fuel)
            return 'Tankolj!';
        if (this.#lastService + 10000 <= this.kmsTravelled)
            return 'Kötelező szervíz idő!';
        this.kmsTravelled += kms;
        this.#fuel -= kms / 100 * this.fuelConsumption;
        return 'Siker!';
    }
}

/*
    4. OOP + DOM

        Készíts egy kör osztályt, mely konstruktora megkapja a kör
            - sugarát
            - x, y, koordinátáit. Ezen a pozición jelenik meg a képernyőn.
            - szinét (ezzel a színnel legyen kitöltve a kör)

            Példáonyisításkor jöjjön létre egy div, melyből kört csinálunk, Adjuyk hozzá a body-hoz, és állítsuk be a pozicióját x, y
            koordinátákra.

            Az osztály rendelkezzen egy .moveToXY(x, y) metódussal, mely a kört az új pozicióba helyezi.
            Hogy látványos legyen a mozgás, adjatok hozzá egy css animációt, mely 1 másodperc alatt mozgatja át a kört az új koordinátákra.

            A sugár beállításához, írjatok egy setter/getter függvényt, amelyel utólag is lehet módosítani a kör sugarát.
*/
class Circle {
    #radius;
    xCoordinate;
    yCoordinate;
    colour;
    #div = document.createElement('div');
    #divStyle;
    #createDiv() {
        this.#divStyle = {
            'width': `${this.#radius}px`,
            'height': `${this.#radius}px`,
            'background-color': `${this.colour}`,
            'border-radius': '50%',
            'position': 'absolute',
            'top': `${this.yCoordinate}px`,
            'left': `${this.xCoordinate}px`,
        };
        Object.keys(this.#divStyle).forEach((n, i) => this.#div.style.cssText += `${n}: ${Object.values(this.#divStyle)[i]}; `);
        document.querySelector('body').appendChild(this.#div);
    };

    constructor(radius, xCoordinate, yCoordinate, colour) {
        this.#radius = radius;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.colour = colour;
        this.#createDiv();
    }

    set radius(r){
        this.#radius = r;
    }

    get radius(){
        return this.#radius;
    }

    moveToXY(x, y) {
        let xDif = (this.xCoordinate - x) / 100;
        let yDif = (this.yCoordinate - y) / 100;
        const update =
            setInterval(() => {
                this.xCoordinate -= xDif;
                this.yCoordinate -= yDif;
                this.#createDiv();
            }, 10);
        setTimeout(function () { clearInterval(update) }, 1000);
    }
}