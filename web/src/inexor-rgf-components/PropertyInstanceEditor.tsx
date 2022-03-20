import {PropertyInstance} from "../inexor-rgf-graphql";
import {Text} from "@mantine/core";
import PropertyInstanceNumberEditor from "./PropertyInstanceNumberEditor";
import Instance from "./Instance";
import PropertyInstanceStringEditor from "./PropertyInstanceStringEditor";
import PropertyInstanceBoolEditor from "./PropertyInstanceBoolEditor";

interface PropertyInstanceEditorProperties {
  instance: Instance;
  property: PropertyInstance;
  doUpdateInstance: (instance: Instance, name: string, value: any) => Promise<Instance>;
}

function PropertyInstanceEditor({instance, property, doUpdateInstance}: PropertyInstanceEditorProperties) {
  const extension = property?.type?.extensions.filter(extension => extension.name === "widgetType").at(0);
  switch (extension?.extension) {
    case "Checkbox":
      return (
        <PropertyInstanceNumberEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
      )
    case "NumberInput":
      return (
        <PropertyInstanceNumberEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
      )
    case "TextInput":
      return (
        <PropertyInstanceStringEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
      )
    default:
      switch (property?.type?.dataType) {
        case "BOOL":
          return (
            <PropertyInstanceBoolEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
          )
        case "NUMBER":
          return (
            <PropertyInstanceNumberEditor instance={instance} property={property} doUpdateInstance={doUpdateInstance} />
          )
        case "STRING":
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
