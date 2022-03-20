import {EntityInstance, PropertyInstance, RelationInstance} from "../inexor-rgf-graphql";
import {Text, TextInput} from "@mantine/core";
import PropertyInstanceNumberEditor from "./PropertyInstanceNumberEditor";

interface PropertyInstanceEditorProperties {
  instance: EntityInstance | RelationInstance;
  property: PropertyInstance;
}

function PropertyInstanceEditor({instance, property}: PropertyInstanceEditorProperties) {
  if (property?.type?.socketType !== "INPUT") {
    return (
      <Text>
        {property?.value}
      </Text>
    )
  }
  const extension = property.type.extensions.filter(extension => extension.name === 'widgetType').at(0);
  switch (extension?.extension) {
    case 'NumberInput':
      return (
        <PropertyInstanceNumberEditor instance={instance} property={property} />
      )
    case 'TextInput':
      return (
        <TextInput
          required={true}
          value={property.value}
          onChange={(value) => console.log(value)}
        />
      )
    default:
      return (
        <Text>
          {property?.value}
        </Text>
      )
  }
}

export default PropertyInstanceEditor;
