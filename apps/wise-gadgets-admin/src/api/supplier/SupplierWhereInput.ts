import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SupplierWhereInput = {
  contactInfo?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
