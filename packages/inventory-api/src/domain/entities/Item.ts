import { Bulk, Name, Level, Quantity } from "../types";

export interface Item {
    name: Name;
    level: Level;
    bulk: Bulk;
    price: Quantity;
}
