class Book{
    public id: string;
    public title: string;
    public author: string;
    public price: number;

    constructor(options){ //??? or options: { id: string; title: string; author: string; price: number }
        this.id = options.id;
        this.title = options.title;
        this.author = options.author;
        this.price = options.price;
    }
}

let newBook = new Book({id: '1', title: 'Rand', author: 'Teszt', price: 123});
console.log(newBook);

interface ILibrary{
    addBook(book: Book): void;
    removeBook(id: string): void;
    findBookById(id: string): Book | undefined;
    listAllBooks(): Book[];

}

class Library implements ILibrary{
    books: Book[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }

    removeBook(id: string) {
        this.books.splice(this.books.findIndex(n => n.id == id), 1);
    }

    findBookById(id: string){
        return this.books.find(n => n.id == id);
    }

    listAllBooks(){
        return this.books;
    }
}

let newLibrary = new Library();
newLibrary.addBook(newBook);
console.log(newLibrary.books);


class User{
    public userId: string;
    public name: string;
    private _email: string;
    private _borrowedBooks: Book[] = [];

    constructor(options){
        this.userId = options.userId;
        this.name = options.name;
        this._email = options.email;
    }

    set email(m: string){
        if (m.match(/^\S+@\S+\.\S+$/gi)) //I know it's not a 100% solution
            this._email = m;
    }

    get email(): string{
        return this._email;
    }

    borrowBook(library: Library, bookId: string): void{
        if(library.findBookById(bookId) !== undefined)
            this._borrowedBooks.push(library.findBookById(bookId)); //how do I deal with this Book | undefined problem ???
        library.removeBook(bookId);
    }

    get borrowedBooks(){
        return this._borrowedBooks;
    }
}

let newUser = new User({userId: '2', name: 'Elek', email: 'rand@rand.com'});
newUser.borrowBook(newLibrary, '1');
console.log(newUser.borrowedBooks);

