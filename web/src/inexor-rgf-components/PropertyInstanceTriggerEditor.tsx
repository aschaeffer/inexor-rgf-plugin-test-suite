import {PropertyInstance} from '../inexor-rgf-graphql';
import {Button} from '@mantine/core';
import Instance from './Instance';
import {Run} from "tabler-icons-react";

interface PropertyInstanceTriggerEditorProperties {
  instance: Instance;
  property: PropertyInstance;
  doUpdateInstance: (instance: Instance, name: string, value: any) => Promise<Instance>;
}

function PropertyInstanceTriggerEditor({instance, property, doUpdateInstance}: PropertyInstanceTriggerEditorProperties) {
  const triggerPropertyInstance = async () => {
    await doUpdateInstance(instance, property.name, true);
  }

  return (
    <Button onClick={triggerPropertyInstance}>
      <Run size={24} />
    </Button>
  )
}

export default PropertyInstanceTriggerEditor;
