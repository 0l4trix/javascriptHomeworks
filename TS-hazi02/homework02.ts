import { Product } from './product.ts';
import { Inventory } from './inventory.ts';
import { Order } from './order.ts';
import { User } from './user.ts';

let newProduct = new Product('1', 'Cipő', 8000);
console.log(newProduct);

let newInventory = new Inventory();
newInventory.addProduct(newProduct);
console.log(newInventory.listProducts());

let newUser = new User('3', 'Rand', 'aaa');
console.log(newUser.order(newInventory, [newProduct.id]));
console.log(newUser.allOrders[0].costOfOrder);