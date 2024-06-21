import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { GADGET_TITLE_FIELD } from "./GadgetTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const GadgetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="stockQuantity" source="stockQuantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Inventory"
          target="gadgetId"
          label="Inventories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Gadget"
              source="gadget.id"
              reference="Gadget"
            >
              <TextField source={GADGET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="lastChecked" source="lastChecked" />
            <TextField label="quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Order" target="gadgetId" label="Orders">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Gadget"
              source="gadget.id"
              reference="Gadget"
            >
              <TextField source={GADGET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="orderDate" source="orderDate" />
            <TextField label="quantity" source="quantity" />
            <TextField label="totalPrice" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
