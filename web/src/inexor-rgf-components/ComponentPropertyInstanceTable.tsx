import {Component, PropertyInstance} from '../inexor-rgf-graphql';
import PropertyInstanceTable from './PropertyInstanceTable';
import Instance from './Instance';

interface ComponentPropertyInstanceTableProperties {
  instance: Instance;
  component: Component;
  properties?: PropertyInstance[];
  doUpdateInstance: (instance: Instance, name: string, value: any) => Promise<Instance>;
}

function ComponentPropertyInstanceTable({instance, component, properties, doUpdateInstance}: ComponentPropertyInstanceTableProperties) {
  const componentPropertyNames = component?.properties?.map((propertyType) => propertyType.name);
  const componentProperties = properties?.filter((propertyInstance) => componentPropertyNames?.includes(propertyInstance.name));
  return (
    <PropertyInstanceTable instance={instance} properties={componentProperties} doUpdateInstance={doUpdateInstance} />
  )
}

export default ComponentPropertyInstanceTable;
