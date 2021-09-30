import { Category } from "../category/category";

export class Item {
    itemId: number;
    itemName: string;
    itemPrice: number;
    itemImage: string;
    category: Category;
}
