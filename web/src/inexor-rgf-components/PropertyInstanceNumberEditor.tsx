import {EntityInstance, PropertyInstance, RelationInstance} from "../inexor-rgf-graphql";
import {NumberInput} from "@mantine/core";

interface PropertyInstanceNumberEditorProperties {
  instance: EntityInstance | RelationInstance;
  property: PropertyInstance;
}

function PropertyInstanceNumberEditor({instance, property}: PropertyInstanceNumberEditorProperties) {
  return (
    <NumberInput
      required={true}
      value={property.value}
      onChange={(value) => console.log(value)}
    />
  )
}

export default PropertyInstanceNumberEditor;
