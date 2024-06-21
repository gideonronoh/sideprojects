import { GadgetCreateNestedManyWithoutCategoriesInput } from "./GadgetCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  gadgets?: GadgetCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
