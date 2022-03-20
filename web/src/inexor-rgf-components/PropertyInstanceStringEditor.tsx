import {PropertyInstance} from "../inexor-rgf-graphql";
import {TextInput} from "@mantine/core";
import Instance from "./Instance";

interface PropertyInstanceStringEditorProperties {
  instance: Instance;
  property: PropertyInstance;
  doUpdateInstance: (instance: Instance, name: string, value: any) => Promise<Instance>;
}

function PropertyInstanceStringEditor({instance, property, doUpdateInstance}: PropertyInstanceStringEditorProperties) {
  const updateInstance = async (value: string | undefined) => {
    await doUpdateInstance(instance, property.name, value);
  }

  return (
    <TextInput
      required={true}
      value={property.value}
      onChange={(event) => updateInstance(event.currentTarget.value)}
    />
  )
}

export default PropertyInstanceStringEditor;
