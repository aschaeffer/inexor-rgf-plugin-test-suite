import {PropertyInstance} from "../inexor-rgf-graphql";
import {Checkbox} from "@mantine/core";
import Instance from "./Instance";

interface PropertyInstanceBoolEditorProperties {
  instance: Instance;
  property: PropertyInstance;
  doUpdateInstance: (instance: Instance, name: string, value: any) => Promise<Instance>;
}

function PropertyInstanceBoolEditor({instance, property, doUpdateInstance}: PropertyInstanceBoolEditorProperties) {
  const updateInstance = async (value: boolean | undefined) => {
    await doUpdateInstance(instance, property.name, value);
  }

  return (
    <Checkbox
      required={true}
      checked={property.value}
      onChange={(event) => updateInstance(event.currentTarget.checked)}
    />
  )
}

export default PropertyInstanceBoolEditor;
