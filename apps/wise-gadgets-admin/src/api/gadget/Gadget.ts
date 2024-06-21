import { Category } from "../category/Category";
import { Inventory } from "../inventory/Inventory";
import { Order } from "../order/Order";

export type Gadget = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  stockQuantity: number | null;
  updatedAt: Date;
};
