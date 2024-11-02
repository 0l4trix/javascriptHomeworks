/*
    Építsetek egy egyszerű "Kvíz" játékot ;)

    Adott hozzá az alábbi egyszerű "adatbázis" melyet természetesen bővíthettek is:
*/

const kerdesek = [
    {
        kerdes: "Mit mond a tehén?",
        valasz: "mu"
    },
    {
        kerdes: "Mit mond a cica?",
        valasz: "miau"
    },
    {
        kerdes: "Mit mond a kutya?",
        valasz: "vau"
    },
    {
        kerdes: "Mit mond a kacsa?",
        valasz: "hap"
    },
    {
        kerdes: "Mit mond a csibe?",
        valasz: "csip"
    }
];

/*
    Rendereljétek le a kérdéseket, a fenti "kerdesek" adattömb alapján.
        - Minden kérdés alatt véletlenszerűen jelenítsetek meg 3 lehetséges választ. (a válaszokat is a tömbből vegyétek.)
          természetesen a 3-ból egy a sajátja. 
        - Minden kérdés esetében, amikor ráklikkelünk egy válaszra, zölldel szinezzük ki, ha helyes a válasz, pirossal, ha nem.
          Ebben az esetben, (tehát, ha rosszul válaszoltunk) zölddel szinezzük a helyes választ.
        - Az utolsó kérdésre válaszolva, jelenítsük meg, hogy hány válaszból, hányra válaszoltunk helyesen.

*/
const noname = {
    quiz: function (insertInto, data, answerOptNum) {
        let container = document.querySelector(insertInto);

        for (let i = 0; i < data.length; i++) {
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            li.textContent = Object.values(data[i])[0];

            ul.appendChild(li);
            noname.questionHandler(data, i, answerOptNum).sort(() => Math.random() - 0.5).forEach(li => ul.appendChild(li));
            ul.appendChild(noname.buttonHandler(container, data, i, ul));
            container.appendChild(ul);
        }
    },

    questionHandler: function (data, i, answerOptNum) {
        let answerLis = [];
        let nums = [];

        for (let j = 0; j < answerOptNum; j++) {
            let li = document.createElement('li');

            if (j == 0) {
                li.textContent = Object.values(data[i])[1];
                li.dataset.answer = Object.values(data[i])[1];
                nums.push(i);
            }
            else {
                let rand = Math.floor(Math.random() * data.length);

                while (nums.includes(rand))
                    rand = Math.floor(Math.random() * data.length);

                li.textContent = Object.values(data[rand])[1];
                li.dataset.answer = Object.values(data[rand])[1];
                nums.push(rand);
            }

            li.addEventListener('click', function () {
                Array.from(this.parentElement.querySelectorAll(":not(:first-child):not(:last-child)")).forEach(n => n.dataset.answer == Object.values(data[i])[1] ? n.classList.add('correct') : n.classList.add('incorrect'));
                this.classList.add('answer');
                let button = this.parentElement.querySelector('button');
                button.style.cursor = "pointer";
            })
            answerLis.push(li);
        }
        return answerLis;
    },

    buttonHandler: function (container, data, i, lastUl) {

        let button = document.createElement('button');
        if (i == 0)
            lastUl.classList.add('active');

        if (i == data.length - 1) {
            button.textContent = "Küldés";
            button.addEventListener('click', function () {
                this.parentElement.classList.remove('active');
                let ul = document.createElement('ul');
                ul.classList.add('active');
                ul.style = "color: white";
                ul.textContent = "Helyes válaszok száma: " + document.querySelectorAll('.answer.correct').length + "/" + data.length;

                let restart = document.createElement("button");
                restart.id = "restart";
                restart.textContent = "Újrakezdés";
                restart.onclick = noname.restart;

                ul.appendChild(restart);
                container.appendChild(ul);
            })
        } else {
            button.textContent = "Tovább";
            button.addEventListener('click', function () {
                if (this.parentElement.querySelector('.answer')) {
                    container.children[i].classList.remove('active');
                    container.children[i + 1].classList.add('active');
                }
            })
        }
        return button;
    },

    restart: function () {
        sessionStorage.setItem('reloaded', true);
        window.location.reload();
    }
}

noname.quiz('#container', kerdesek, 3);



/*
    Jó munkát! :)
*/