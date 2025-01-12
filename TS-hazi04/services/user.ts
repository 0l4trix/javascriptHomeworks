import { Book } from "../models/book";
import { Library } from "../models/library";

export class User {
    readonly userId: string;
    private _name: string;
    private _email: string;
    private _library: Library;
    private _borrowedBooks: Book[] = [];

    constructor(userId: string, name: string, email: string, library: Library) {
        this.userId = userId;
        this._name = name;
        this._email = email;
        this._library = library;
        this._library.addUser(this);
    }

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set email(mail: string) {
        if (mail.match(/^\S+@\S+\.\S+$/gi))
            this._email = mail;
    }

    get email(): string {
        return this._email;
    }

    borrowBooks(bookIds: string[]): void {
        const books = [];
        for (let i = 0; i < bookIds.length; i++) {
            let book = this._library.findBookById(bookIds[i]);
            if (book !== undefined)
                books.push(book);
        }

        this._library.borrowBooks(this.userId, books);
        books.forEach(n => this._borrowedBooks.push(n));
        books.forEach(n => this._library.removeBooks([n.id]));
    }

    returnBooks(bookIds: string[]): boolean {
        const user = this._library.listBorrowedBooks().get(this.userId);
        if (user !== undefined) {
            for (const bookId of bookIds) {
                let book = user.find(n => n.id == bookId);
                if (book !== undefined)
                    user.splice(user.findIndex(n => n === book), 1);
            }
            this._library.borrowBooks(this.userId, user);
            return true;
        }
        return false;
    }

    get borrowedBooks(): Book[] {
        return this._borrowedBooks;
    }
}