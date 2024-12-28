import { Product } from './product.ts';

export class Inventory {
    private _products: Product[] = [];

    addProduct(product: Product): void {
        this._products.push(product);
    }

    removeProduct(id: string): void {
        this._products.splice(this._products.findIndex(n => n.id == id), 1);
    }
    
    searchProduct<ElementType>(idOrName: ElementType): Product | undefined {
        if (this._products.find(n => n.id == idOrName) !== undefined)
            return this._products.find(n => n.id == idOrName);
        return this._products.find(n => n.name == idOrName);
    }
    
    listProducts(): Product[] {
        return this._products;
    }
}