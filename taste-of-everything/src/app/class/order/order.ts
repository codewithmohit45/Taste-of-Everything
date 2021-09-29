import { Address } from "../address/address";
import { Customer } from "../customer/customer";
import { Item } from "../item/item";

export class Order {
    orderId: number;
    customer: Customer;
    item: Item;
    quantity: number;
    orderStatus: string;
    address: Address;
}
