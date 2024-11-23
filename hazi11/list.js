const insertInto = '#first';
const data = 'https://jsonplaceholder.typicode.com/users';

const listContainer = document.createElement('ul');
let list = [];
let button = document.createElement('button');
button.textContent = 'Fordítva';
button.addEventListener('click', function () {
    listContainer.innerHTML = `${String(list.reverse()).replace(/,/g, '')}`;
})

fetch(data)
    .then(response => response.json())
    .then(users => {
        for (let i = 0; i < Object.values(users).length; i++) {
            list.push(`<li>${users[i].id} ${users[i].name}</li>`);
        }
        listContainer.innerHTML = `${String(list).replace(/,/g, '')}`;
        document.querySelector(insertInto).insertAdjacentElement('afterbegin', button);
        document.querySelector(insertInto).insertAdjacentElement('afterbegin', listContainer);
    })
    .catch(err => console.log(err));