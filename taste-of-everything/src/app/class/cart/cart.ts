import { Customer } from "../customer/customer";
import { Item } from "../item/item";

export class Cart {
    cartId: number;
    customer: Customer;
    item: Item;
    quantity: number;

    constructor(customer: Customer, item: Item, quantity: number) {
        this.customer = customer;
        this.item = item;
        this.quantity = quantity;
    }
}
