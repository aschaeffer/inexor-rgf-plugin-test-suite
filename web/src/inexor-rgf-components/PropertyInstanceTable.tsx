import {PropertyInstance} from '../inexor-rgf-graphql';
import {Table, Text} from '@mantine/core';
import SocketBadge from './SocketBadge';
import DataTypeBadge from './DataTypeBadge';
import PropertyInstanceEditor from './PropertyInstanceEditor';
import Instance, {getInstanceKey} from './Instance';
import './PropertyInstanceTable.css';
import {useMediaQuery} from '@mantine/hooks';

const HEADER_COLUMN_NAMES = [
  'Property',
  'Value',
  'Data Type',
  'Socket Type'
];


interface PropertyInstanceTableHeaderColumnProperties {
  title: string;
}

function PropertyInstanceTableHeaderColumn({title}: PropertyInstanceTableHeaderColumnProperties) {
  const largeScreen = useMediaQuery('(min-width: 900px)');
  return largeScreen ? (
    <th>{title}</th>
  ) :  (
    <th className="rotate"><div><span>{title}</span></div></th>
  );
}

interface PropertyInstanceTableProperties {
  instance: Instance;
  properties?: PropertyInstance[];
  doUpdateInstance: (instance: Instance, name: string, value: any) => Promise<Instance>;
}

function sortProperty(p1: PropertyInstance, p2: PropertyInstance){
  return p1.name >= p2.name ? 1 : -1
}

function PropertyInstanceTable({instance, properties, doUpdateInstance}: PropertyInstanceTableProperties) {
  const instanceKey = getInstanceKey(instance);
  const headerColumns = HEADER_COLUMN_NAMES.map((headerColumn) => {
    const headerColumnKey = `${instanceKey}--${headerColumn}`;
    return (
      <PropertyInstanceTableHeaderColumn key={headerColumnKey} title={headerColumn} />
    )
  });
  const property_instance_rows = properties?.sort(sortProperty).map((property) => {
    const propertyKey = `${instanceKey}--${property.name}`;
    return (
      <tr key={propertyKey}>
        <td>
          <Text weight={700}>
            {property.name}
          </Text>
        </td>
        <td>
          <PropertyInstanceEditor key={propertyKey} instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
        </td>
        <td>
          <DataTypeBadge dataType={property.type?.dataType} />
        </td>
        <td>
          <SocketBadge socketType={property.type?.socketType} />
        </td>
      </tr>
    )
  });
  if (property_instance_rows === undefined || property_instance_rows.length === 0) {
    return (<></>)
  }
  return (
    <Table className="property-instance-table">
      <thead>
        <tr>
          {headerColumns}
        </tr>
      </thead>
      <tbody>
        {property_instance_rows}
      </tbody>
    </Table>
  );
}

export default PropertyInstanceTable;
