import { GadgetWhereUniqueInput } from "../gadget/GadgetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InventoryWhereInput = {
  gadget?: GadgetWhereUniqueInput;
  id?: StringFilter;
  lastChecked?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
};
