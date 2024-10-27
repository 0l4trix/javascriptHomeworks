const listaCt = document.querySelector("#lista-ct");

const inputElement = document.createElement('input');
inputElement.type = 'text';

listaCt.appendChild(inputElement);

const addBtn = document.createElement('button');
addBtn.textContent = "Mentés";
listaCt.appendChild(addBtn);


/*
    Hozzunk létre egy törlés gombot a hozzáad gomb után, és erre klikkelve töröljük a listából azokat az elemeket, melyek ki vannak húzva.
*/

const delBtn = document.createElement("button");
listaCt.appendChild(delBtn);
delBtn.textContent = "Törlés";

const list = document.createElement('ul');
listaCt.appendChild(list);
list.className = "lista";

function createLi(text) {
    const li = document.createElement("li");
    li.textContent = text;
    li.style.cursor = 'pointer';
    //li.contentEditable = true;
    li.addEventListener('click', function (event) {
        if (document.querySelector('.modify') == null) {
            if (event.shiftKey && !this.classList.contains('inactive')) {
                this.classList.add('modify');
                inputElement.value = this.textContent;
            }
            else
                this.classList.toggle('inactive');
        }
    });

    return li;
}

function listContains(lista, text) {
    for (const li of lista.children)
        if (li.textContent.toLowerCase() == text.toLowerCase())
            return true;

    return false;
}

addBtn.addEventListener('click', function () {
    let text = inputElement.value.trim();

    if (text != '' && !listContains(list, text)) {
        if (document.querySelector('.modify') != null) {
            let modLi = document.querySelector('.modify');
            modLi.textContent = text;
            modLi.classList.remove('modify');
        }
        else
            list.appendChild(createLi(text));
        inputElement.value = '';
    }
});

inputElement.addEventListener('keydown', function (event) {
    if (event.key == "Enter")
        addBtn.click();
});

delBtn.addEventListener('click', function () {
    list.querySelectorAll('li.inactive').forEach(li => li.remove());
});

/*
    GYakorlásként, valósítsuk a lista inicializálást.
    Legyen adott egy tömb, amiben a bevésérló lista tételei vannak.
    Írjunk egy függvényt, mely egy ilyen lista alapján, feltölt egy HTML listát.
*/

const bevLista = ["Kenyér", "Cukor", "Saláta", "Sonka", "Vaj", "Só", "Olaj"];

function listInit(lista, data) {
    data.forEach(item => lista.appendChild(createLi(item)));
}

listInit(list, bevLista);