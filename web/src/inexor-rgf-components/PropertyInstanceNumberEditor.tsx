import {PropertyInstance} from "../inexor-rgf-graphql";
import {NumberInput} from "@mantine/core";
import Instance from "./Instance";

interface PropertyInstanceNumberEditorProperties {
  instance: Instance;
  property: PropertyInstance;
  doUpdateInstance: (instance: Instance, name: string, value: any) => Promise<Instance>;
}

function PropertyInstanceNumberEditor({instance, property, doUpdateInstance}: PropertyInstanceNumberEditorProperties) {
  const updateInstance = async (value: number | undefined) => {
    await doUpdateInstance(instance, property.name, value);
  }

  return (
    <NumberInput
      required={true}
      value={property.value}
      onChange={(value) => updateInstance(value)}
    />
  )
}

export default PropertyInstanceNumberEditor;
