import { Gadget as TGadget } from "../api/gadget/Gadget";

export const GADGET_TITLE_FIELD = "name";

export const GadgetTitle = (record: TGadget): string => {
  return record.name?.toString() || String(record.id);
};
