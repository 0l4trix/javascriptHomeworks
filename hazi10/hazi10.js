import * as alert from "./alert.js";

let text = 'Ez az ablak, minden körülmények között a képernyő közepén jelenik meg, akkor is, ha a body scrollozható, és el van görgetve a top pozícióhoz képest!';

let p = 10;

try {
    if (p != 11) {
        alert.show(text);
    }
} catch (error) {
}