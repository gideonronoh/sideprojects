import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { GadgetTitle } from "../gadget/GadgetTitle";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="gadget.id" reference="Gadget" label="Gadget">
          <SelectInput optionText={GadgetTitle} />
        </ReferenceInput>
        <DateTimeInput label="lastChecked" source="lastChecked" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
