import { Quantity } from "../types";

import { Item } from "./Item";

export interface ItemQuantity {
    quantity: Quantity;
    item: Item;
}
