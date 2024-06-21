import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryUpdateManyWithoutGadgetsInput } from "./InventoryUpdateManyWithoutGadgetsInput";
import { OrderUpdateManyWithoutGadgetsInput } from "./OrderUpdateManyWithoutGadgetsInput";

export type GadgetUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  inventories?: InventoryUpdateManyWithoutGadgetsInput;
  name?: string | null;
  orders?: OrderUpdateManyWithoutGadgetsInput;
  price?: number | null;
  stockQuantity?: number | null;
};
