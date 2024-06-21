import { JsonValue } from "type-fest";

export type Supplier = {
  contactInfo: JsonValue;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
