import { Book, Cathegories } from "../models/book";
import { User } from "../services/user";

interface ILibrary {
    borrowBooks(userId: string, books: Book[]): void;
    listBorrowedBooks(): Map<string, Book[]>;
    addBooks(books: Book[]): void;
    removeBooks(ids: string[]): void;
    findBookById(id: string): Book | undefined;
    listAllFromCathegory(cathegory: Cathegories): Book[];
    listAllBooks(): Book[];
}

export class Library implements ILibrary {
    private _books: Book[] = [];
    private _borrowedBooks: Map<string, Book[]> = new Map();
    private _allUsers: User[] = [];

    addUser(user: User){
        this._allUsers.push(user);
    }

    getAllUsers(){
        return this._allUsers;
    }

    findUserById(id: string): User | undefined {
        return this._allUsers.find(n => n.userId == id);
    }

    borrowBooks(userId: string, books: Book[]): void {
        this._borrowedBooks.set(userId, books);
    }

    listBorrowedBooks(): Map<string, Book[]> {
        return this._borrowedBooks;
    }

    addBooks(books: Book[]) {
        books.forEach(n => this._books.push(n));
    }

    removeBooks(ids: string[]) {
        ids.forEach(n => this._books.splice(this._books.findIndex(m => m.id == n), 1));
    }

    findBookById(id: string): Book | undefined {
        return this._books.find(n => n.id == id);
    }

    listAllFromCathegory(cathegory: Cathegories): Book[] {
        return this._books.filter(n => n.cathegories?.find(n => n === cathegory));
    }

    listAllBooks(): Book[] {
        return this._books;
    }
}