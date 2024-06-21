import { GadgetWhereUniqueInput } from "../gadget/GadgetWhereUniqueInput";

export type InventoryCreateInput = {
  gadget?: GadgetWhereUniqueInput | null;
  lastChecked?: Date | null;
  quantity?: number | null;
};
