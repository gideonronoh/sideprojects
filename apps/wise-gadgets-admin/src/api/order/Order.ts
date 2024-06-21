import { Gadget } from "../gadget/Gadget";

export type Order = {
  createdAt: Date;
  gadget?: Gadget | null;
  id: string;
  orderDate: Date | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
