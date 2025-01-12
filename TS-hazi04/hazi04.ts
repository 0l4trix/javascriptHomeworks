import { Magazine, Book, Cathegories } from "./models/book";
import { Library } from "./models/library";
import { User } from "./services/user";

let newBook = new Book('1', 'Rand', 'Teszt', 123);
let newBook2 = new Book('2', 'Rand1', 'Teszt1', 321, [Cathegories.Fantasy, Cathegories.Children]);
let newBook3 = new Book('3', 'Rand2', 'Teszt3', 3);
let newMagazine = new Magazine('4', 'Rand4', '12A', 'Teszt4', 444)

let newLibrary = new Library();
newLibrary.addBooks([newBook, newBook2, newBook3, newMagazine]);
console.log(newLibrary.listAllFromCathegory(Cathegories.Fantasy));
newLibrary.removeBooks(['2', '3']);

let newUser = new User('1999', 'Elek', 'rand@rand.com', newLibrary);
console.log(newLibrary.findUserById('1999'));
newUser.borrowBooks(['1', '4']);
/*console.log(newUser.borrowedBooks);
console.log(newLibrary.listAllBooks());
console.log(newLibrary.listBorrowedBooks());*/

newUser.returnBooks(['1']);
console.log(newLibrary.listBorrowedBooks());