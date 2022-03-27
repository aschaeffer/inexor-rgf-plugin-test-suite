import {Text} from '@mantine/core';
import {PropertyInstance} from '../inexor-rgf-graphql';
import PropertyInstanceNumberEditor from './PropertyInstanceNumberEditor';
import PropertyInstanceStringEditor from './PropertyInstanceStringEditor';
import PropertyInstanceBoolEditor from './PropertyInstanceBoolEditor';
import PropertyInstanceTriggerEditor from './PropertyInstanceTriggerEditor';
import Instance from './Instance';
import PropertyInstanceNumber from "./PropertyInstanceNumber";

interface PropertyInstanceEditorProperties {
  instance: Instance;
  property: PropertyInstance;
  doUpdateInstance: (instance: Instance, name: string, value: any) => Promise<Instance>;
}

function PropertyInstanceEditor({instance, property, doUpdateInstance}: PropertyInstanceEditorProperties) {
  const extension = property?.type?.extensions.filter(extension => extension.name === "widgetType").at(0);
  switch (extension?.extension) {
    case 'Trigger':
      return (
        <PropertyInstanceTriggerEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
      )
    case 'Checkbox':
      return (
        <PropertyInstanceNumberEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
      )
    case 'NumberInput':
      return (
        <PropertyInstanceNumberEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
      )
    case 'NumberOutput':
      return (
        <PropertyInstanceNumber instance={instance} property={property} />
      )
    case 'TextInput':
      return (
        <PropertyInstanceStringEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
      )
    default:
      switch (property?.type?.dataType) {
        case 'BOOL':
          return (
            <PropertyInstanceBoolEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
          )
        case 'NUMBER':
          return (
            <PropertyInstanceNumberEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
          )
        case 'STRING':
          return (
            <PropertyInstanceStringEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
          )
        default:
          return (
            <Text>
              {property?.value}
            </Text>
          )
      }
  }
}

export default PropertyInstanceEditor;
