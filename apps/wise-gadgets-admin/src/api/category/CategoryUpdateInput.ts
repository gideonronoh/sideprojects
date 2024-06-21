import { GadgetUpdateManyWithoutCategoriesInput } from "./GadgetUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  gadgets?: GadgetUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
