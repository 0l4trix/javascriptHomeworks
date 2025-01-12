export enum Cathegories{
    Fantasy = "Fantasy",
    Textbook = "Textbook",
    Children = "Childrens' Book",
    Scientific = "Scientific"
}

export class Book{
    readonly id: string;
    private _title: string;
    private _author: string;
    private _price: number;
    public cathegories?: Cathegories[] = [];

    constructor(id: string, title: string, author: string, price: number, cathegories?: Cathegories[]){
        this.id = id;
        this._title = title;
        this._author = author;
        this._price = price;
        if(cathegories)
            this.cathegories = cathegories;
    }

    set title(title: string) {
        this._title = title;
    }
    
    get title(): string {
        return this._title;
    }

    set author(author: string) {
        this._author = author;
    }
    
    get author(): string {
        return this._author;
    }

    set price(price: number) {
        this._price = price;
    }
    
    get price(): number {
        return this._price;
    }

    addCathegory(cathegory: Cathegories) {
        this.cathegories?.push(cathegory);
    }

    removeCathegory(cathegory: Cathegories) {
        this.cathegories?.splice(this.cathegories.findIndex(n => n === cathegory), 1);
    }
    
}

export class Magazine extends Book{
    private _issueNumber: string;
    constructor(id: string, title: string, issueNumber: string, author: string, price: number, cathegories?: Cathegories[]){
        super(id, title, author, price, cathegories);
        this._issueNumber = issueNumber;
    }

    set issueNumber(issueNumber: string) {
        this._issueNumber = issueNumber;
    }
    
    get issueNumber(): string {
        return this._issueNumber;
    }
}