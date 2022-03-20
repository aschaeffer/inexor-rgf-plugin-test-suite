import {EntityInstance, PropertyInstance, RelationInstance, SocketType} from "../inexor-rgf-graphql";
import {Table, Text} from "@mantine/core";
import SocketBadge from "./SocketBadge";
import DataTypeBadge from "./DataTypeBadge";
import PropertyInstanceEditor from "./PropertyInstanceEditor";

interface PropertyInstanceTableProperties {
  instance: EntityInstance | RelationInstance;
  properties?: PropertyInstance[];
}

function PropertyInstanceTable({instance, properties}: PropertyInstanceTableProperties) {
  const property_instance_rows = properties?.map((property) => (
    <tr key={property.name}>
      <td>
        <Text weight={700}>
          {property.name}
        </Text>
      </td>
      <td>
        <PropertyInstanceEditor instance={instance} property={property} />
      </td>
      <td>
        <DataTypeBadge dataType={property.type?.dataType} />
      </td>
      <td>
        <SocketBadge socketType={property.type?.socketType} />
      </td>
    </tr>
  ));
  if (property_instance_rows === undefined || property_instance_rows.length === 0) {
    return (<></>)
  }
  return (
    <Table>
      <thead>
      <tr>
        <th>Property</th>
        <th>Value</th>
        <th>Data Type</th>
        <th>Socket Type</th>
      </tr>
      </thead>
      <tbody>
      {property_instance_rows}
      </tbody>
    </Table>
  );
}

export default PropertyInstanceTable;
