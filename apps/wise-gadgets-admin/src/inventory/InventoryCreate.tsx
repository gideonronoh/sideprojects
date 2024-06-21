import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { GadgetTitle } from "../gadget/GadgetTitle";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="gadget.id" reference="Gadget" label="Gadget">
          <SelectInput optionText={GadgetTitle} />
        </ReferenceInput>
        <DateTimeInput label="lastChecked" source="lastChecked" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
