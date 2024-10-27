/*
    1. Gyakorlatozzatok a mult órán vett DOM index.html-jén. Próbálgassatok minnél több pozicíóba beszúrni új HTML elemet.
       Úgy értem, az első elem elé, a második elé, avégére, bárhová.
*/
let insertInto = document.querySelector('h2');
const node = document.createTextNode(' ˛(˘°×°) ');

insertInto.insertBefore(node.cloneNode(), insertInto.firstChild);
insertInto.insertBefore(node.cloneNode(), null);

insertInto = document.querySelector('#content1');
insertInto.insertBefore(node.cloneNode(), insertInto.lastChild);
insertInto.insertBefore(node.cloneNode(), insertInto.firstElementChild.nextElementSibling.nextElementSibling);

insertInto = insertInto.lastElementChild;
insertInto.insertBefore(node.cloneNode(), insertInto.lastChild);
insertInto.textContent = insertInto.textContent.replace(/\s/g, s => ' \\_(˙^˙)_/ ');

insertInto = document.querySelector('span');
insertInto.insertBefore(node, insertInto.firstChild);
insertInto.insertBefore(node.cloneNode(), node);


/*
    2. Írjatok egy egyszerű számológép programot, mely két operandus között végzi el az alapműveleteket.
    A HTML oldalon készítsétek el az ürlapot, mely áll 2 input mezőből a két oprtandus számára.
    A 2 operandus mező közt egy select-option serzkezetet, melyben kliválaszthatjuk a négy alapművelet valamelyikét.
    Majd a második operandus mező után egy "=" gombot, melyre kattintva megmutatjuk a HTML oldalon az eredményt.
    A html szerkezet tehát a következő:
    [input, operandus1] [select, operátor] [input, operandus2] [buttun, =]
*/
const contentDiv = document.querySelector('#content2');

const num1 = document.createElement('input');
num1.type = 'text';
contentDiv.appendChild(num1);

const operator = document.createElement('select');
contentDiv.appendChild(operator);
const ops = ['+', '-', '/', '*'];
for (let i = 0; i < ops.length; i++) {
  const options = document.createElement('option');
  options.value = ops[i];
  options.text = ops[i];
  operator.appendChild(options);
}

const num2 = document.createElement('input');
num2.type = 'text';
contentDiv.appendChild(num2);

const countBtn = document.createElement('button');
countBtn.textContent = '=';
contentDiv.appendChild(countBtn);

const numResult = document.createElement('input');
numResult.readOnly = true;
contentDiv.appendChild(numResult);

countBtn.addEventListener('click', function () {
  let a = Number(num1.value);
  let b = Number(num2.value);
  switch (operator.value) {
    case '+':
      numResult.value = a + b;
      break;
    case '-':
      numResult.value = a - b;
      break;
    case '/':
      numResult.value = a / b;
      break;
    case '*':
      numResult.value = a * b;
      break;
  }
})


/*
    3. Fejlesszétek tovább a kuruzon készített bevásárlólistát.
    
      Készítsetek egy szerkesztés mechanizmust
        - Egy listaelemen Shift+Click kombinációval, jelöljük szerkesztésre az elemet. Ami a következő képpen működjön
        - Egy hozzáadaott css osztályal láttassuk a felhasználóval, hogy épp m it szerkeszt.
        - Amikor szerkesztésre jelöltük, a szerkesztendő listaelem tartalmát jelenítsük megt az input mezőben, 
        - majd módosítás után, a "Hozzáad" gomb megnyomásával, (vagy keydow-Enter, ez mindegy nekünk, láttáok kurzuson)
          ne egy új listaelemként hozzuk létre a modosítandó listaelemet, hanem a meglévő tartalmát írjuk felül. Tehát, hogy valóban
          létrejöjjön a módosítás.
*/


//lásd bevLista (33-ik és 59-ik sortól)


/*
    4. Írjatok egy sakktábla generátor függvényt, mely lerenderel, egy n * n - es sakktáblát, ahol n >= 4 és < 26.
        Ha n < 4-nél, akkor állítsátok be 4-re, illetve, ha > 25, akkor állítsátok be 25-re
*/

function chessboard(gameSize, gameScaleVw = 2) {
  gameSize < 4 ? gameSize = 4 : gameSize > 25 ? gameSize = 25 : gameSize;
  const container = document.getElementById("content4");
  let grid = document.createElement('div');

  grid.className = 'gridSquare';
  grid.style.width = `${gameScaleVw}vw`;
  grid.style.height = `${gameScaleVw}vw`;
  grid.style.float = 'left';
  container.style.width = `${gameScaleVw * gameSize}vw`;
  container.style.height = `${gameScaleVw * gameSize}vw`;
  container.style.backgroundColor = 'black';
  container.style.border = '20px solid #664a1e';

  for (let i = 0; i < Math.pow(gameSize, 2); i++) {
    let clone = grid.cloneNode();
    if (gameSize % 2 != 0 || Math.floor(i / gameSize) % 2 == 0)
      i % 2 == 0 ? clone.style.backgroundColor = 'white' : null;
    else
      i % 2 != 0 ? clone.style.backgroundColor = 'white' : null;
    container.appendChild(clone);
  }

  let gridSquares = document.querySelectorAll(".gridSquare");
  gridSquares[0].classList.add("containsPlayer");
  let playerX = 0;
  let playerY = 0;

  addEventListener('keydown', function (event) {
    document.querySelector(".containsPlayer").classList.remove("containsPlayer");
    switch (event.key) {
      case "ArrowLeft": event.preventDefault(); if(playerX > 0) playerX--; break;
      case "ArrowUp": event.preventDefault(); if(playerY > 0) playerY--; break;
      case "ArrowRight": event.preventDefault(); if(playerX < gameSize-1) playerX++; break;
      case "ArrowDown": event.preventDefault(); if(playerY < gameSize-1) playerY++; break;
      case "End": event.preventDefault(); if(playerX > 0 && playerY < gameSize-1) {playerX--; playerY++;} break;
      case "Home": event.preventDefault(); if(playerX > 0 && playerY > 0) {playerX--; playerY--;} break;
      case "PageUp": event.preventDefault(); if(playerX < gameSize-1 && playerY > 0) {playerX++; playerY--;} break;
      case "PageDown": event.preventDefault(); if(playerX < gameSize-1 && playerY < gameSize-1) {playerX++; playerY++;} break;
    }
    gridSquares[(playerY * gameSize) + playerX].classList.add("containsPlayer");
  });
}

chessboard(7);