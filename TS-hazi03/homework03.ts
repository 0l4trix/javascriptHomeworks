import { todoItem } from "./models/todoItem";
import { todoList, listOptions } from "./services/todoList";

let newList = new todoList();

let newItem = new todoItem(1, 'Finish this homework');
newList.addItem(newItem);
let newItem2 = new todoItem(2, ["Testing", new Date(2025, 0, 4)]);
newList.addItem(newItem2);
let newItem3 = new todoItem(3, ["Finish testing", new Date(2025, 0, 5)]);
newList.addItem(newItem3);

console.log(newList.listItems(listOptions.Alphabetical));
console.log(newList.listItems(listOptions.Date));
console.log(newList.filterItems(listOptions.Date));
console.log(newList.deleteItem(newItem2));
console.log(newList.items);