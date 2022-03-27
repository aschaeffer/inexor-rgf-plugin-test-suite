import {EntityInstance, RelationInstance} from "../inexor-rgf-graphql";
import InstanceType from "./InstanceType";

interface Instance {
  instanceType: InstanceType;
  instance: EntityInstance | RelationInstance;
}

export function getInstanceKey(instance: Instance) {
  switch (instance.instanceType) {
    case InstanceType.EntityInstance:
      const ei = instance.instance as EntityInstance;
      return ei.id;
    case InstanceType.RelationInstance:
      const ri = instance.instance as RelationInstance;
      return `${ri.outbound.id}--${ri.type?.fullName}--${ri.inbound.id}`
    default:
      return null;
  }
}

export default Instance;
