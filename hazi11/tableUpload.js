const insertInto = '#second';
let columnNames = ['Név', 'Cím', 'Telefonszám'];
let rowDatas;

function inputUpload() {
    let form = document.createElement('div');
    for (let i = 0; i < columnNames.length; i++) {
        let input = document.createElement('input');
        input.style.type = 'text';
        input.placeholder = columnNames[i];
        input.setAttribute('id', columnNames[i]);
        form.appendChild(input);
    }
    let button = document.createElement('button');
    button.textContent = 'Hozzáad';
    button.addEventListener('click', function () {
        rowDatas = [];
        Array.from(form.querySelectorAll(":not(:last-child)")).forEach(n => { rowDatas.push(n.value); n.value = "" });
        addRow();
    })
    form.appendChild(button);
    document.querySelector(insertInto).appendChild(form);
}
inputUpload();

function createRow([...dataStrings], head = false) {
    let datas = "";
    for (const data of dataStrings) {
        datas += head ? `<th>${data}</th>` : `<td>${data}</td>`;
    }
    return `<tr>${datas}</tr>`;
}

function createTable() {
    let table = `<table><thead>${createRow(columnNames, true)}</thead><tbody id="thisBody"></tbody></table>`;
    document.querySelector(insertInto).insertAdjacentHTML('beforeend', table);
}
createTable();

function addRow () {
    if (!rowDatas.every(n => n == ""))
        document.querySelector('#thisBody').insertAdjacentHTML('beforeend', createRow(rowDatas));
}