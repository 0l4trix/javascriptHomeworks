import { Product } from './product.ts';
import { Inventory } from './inventory.ts';
import { Order } from './order.ts';

interface IUser{
    order(inventoryName: Inventory, productIds: string[]):void;
}

export class User implements IUser{
    private _userId: string;
    public name: string;
    public email: string;
    public allOrders: Order[] = [];

    constructor(userId: string, name: string, email: string) {
        this._userId = userId;
        this.name = name;
        this.email = email;
    }

    order(inventoryName: Inventory, productIds: string[]): void {
        let productList: Product[] = [];
        for (let i = 0; i < productIds.length; i++) {
            if(inventoryName.searchProduct<string>(productIds[i]) !== undefined){
                productList.push(inventoryName.searchProduct(productIds[i]));
                inventoryName.removeProduct(productIds[i]);
            }
        }
        this.allOrders.push(new Order('3', productList)); //needs ID generation
    }
}