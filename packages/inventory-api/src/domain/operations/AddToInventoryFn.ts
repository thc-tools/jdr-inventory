import { Inventory } from "../entities/Inventory";
import { Item } from "../entities/Item";

export type AddToInventoryFn = (inventory: Inventory, item: Item) => Inventory;
