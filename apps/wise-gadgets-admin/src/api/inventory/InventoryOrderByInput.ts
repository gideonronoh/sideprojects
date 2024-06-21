import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  gadgetId?: SortOrder;
  id?: SortOrder;
  lastChecked?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
