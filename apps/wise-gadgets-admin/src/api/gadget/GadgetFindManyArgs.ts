import { GadgetWhereInput } from "./GadgetWhereInput";
import { GadgetOrderByInput } from "./GadgetOrderByInput";

export type GadgetFindManyArgs = {
  where?: GadgetWhereInput;
  orderBy?: Array<GadgetOrderByInput>;
  skip?: number;
  take?: number;
};
