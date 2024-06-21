import { Gadget } from "../gadget/Gadget";

export type Inventory = {
  createdAt: Date;
  gadget?: Gadget | null;
  id: string;
  lastChecked: Date | null;
  quantity: number | null;
  updatedAt: Date;
};
