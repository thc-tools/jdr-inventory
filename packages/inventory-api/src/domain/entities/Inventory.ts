import { Bulk, Id } from "../types";

import { Character } from "./Character";
import { ItemQuantity } from "./ItemQuantity";

export interface Inventory {
    id: Id;
    owner: Character;
    size: Bulk;
    upb: number;
    credits: number;
    items: ItemQuantity[];
}
