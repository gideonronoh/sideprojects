import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GadgetListRelationFilter } from "../gadget/GadgetListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  description?: StringNullableFilter;
  gadgets?: GadgetListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
