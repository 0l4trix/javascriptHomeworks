export class Product {
    
    private _id: string;
    public name: string;
    public price: number;
    public desc: string | undefined = undefined;

    constructor(id: string, name: string, price: number, desc?: string) {
        this._id = id;
        this.name = name;
        this.price = price;
        if(desc) this.desc = desc;
    }

    get id(): string{
        return this._id;
    }
}