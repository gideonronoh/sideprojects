import { SortOrder } from "../../util/SortOrder";

export type GadgetOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  stockQuantity?: SortOrder;
  updatedAt?: SortOrder;
};
