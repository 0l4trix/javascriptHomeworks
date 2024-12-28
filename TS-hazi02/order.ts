import { Product } from './product.ts';

enum allOrderStates {
    New = 'Új',
    Processing = 'Feldolgozás alatt',
    Delivered = 'kiszállítva'
};

export class Order {
    private _orderId: string;
    public productList: Product[] = [];
    public orderState: allOrderStates;

    constructor(orderId: string, productList: Product[]) {
        this._orderId = orderId;
        this.productList = productList;
        this.orderState = allOrderStates.New;
    }

    refreshOrderState(newOrderState: allOrderStates): void {
        this.orderState = newOrderState;
    }

    costOfOrder(): number {
        let cost: number = 0;
        this.productList.forEach(n => cost += n.price);
        return cost;
    }
}