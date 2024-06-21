import { GadgetWhereUniqueInput } from "../gadget/GadgetWhereUniqueInput";

export type OrderCreateInput = {
  gadget?: GadgetWhereUniqueInput | null;
  orderDate?: Date | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
