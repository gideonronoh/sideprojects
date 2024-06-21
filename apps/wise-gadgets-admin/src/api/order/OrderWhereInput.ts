import { GadgetWhereUniqueInput } from "../gadget/GadgetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  gadget?: GadgetWhereUniqueInput;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
  totalPrice?: FloatNullableFilter;
};
