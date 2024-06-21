import { GadgetWhereUniqueInput } from "../gadget/GadgetWhereUniqueInput";

export type InventoryUpdateInput = {
  gadget?: GadgetWhereUniqueInput | null;
  lastChecked?: Date | null;
  quantity?: number | null;
};
