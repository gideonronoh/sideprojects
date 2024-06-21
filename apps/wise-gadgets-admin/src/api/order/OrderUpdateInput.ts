import { GadgetWhereUniqueInput } from "../gadget/GadgetWhereUniqueInput";

export type OrderUpdateInput = {
  gadget?: GadgetWhereUniqueInput | null;
  orderDate?: Date | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
