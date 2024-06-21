import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryCreateNestedManyWithoutGadgetsInput } from "./InventoryCreateNestedManyWithoutGadgetsInput";
import { OrderCreateNestedManyWithoutGadgetsInput } from "./OrderCreateNestedManyWithoutGadgetsInput";

export type GadgetCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  inventories?: InventoryCreateNestedManyWithoutGadgetsInput;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutGadgetsInput;
  price?: number | null;
  stockQuantity?: number | null;
};
