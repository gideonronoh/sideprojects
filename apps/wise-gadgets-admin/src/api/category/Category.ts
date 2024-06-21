import { Gadget } from "../gadget/Gadget";

export type Category = {
  createdAt: Date;
  description: string | null;
  gadgets?: Array<Gadget>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
