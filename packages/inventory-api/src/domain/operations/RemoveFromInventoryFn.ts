import { Inventory } from "../entities/Inventory";
import { Item } from "../entities/Item";

export type RemoveFromInventoryFn = (inventory: Inventory, item: Item) => Inventory;
