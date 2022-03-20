import {PropertyInstance} from "../inexor-rgf-graphql";
import {Text, TextInput} from "@mantine/core";
import PropertyInstanceNumberEditor from "./PropertyInstanceNumberEditor";
import Instance from "./Instance";

interface PropertyInstanceEditorProperties {
  instance: Instance;
  property: PropertyInstance;
  doUpdateInstance: (instance: Instance, name: string, value: any) => Promise<Instance>;
}

function PropertyInstanceEditor({instance, property, doUpdateInstance}: PropertyInstanceEditorProperties) {
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
        <PropertyInstanceNumberEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
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
