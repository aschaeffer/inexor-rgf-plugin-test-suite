import {EntityInstance, RelationInstance} from "../inexor-rgf-graphql";
import InstanceType from "./InstanceType";

interface Instance {
  instanceType: InstanceType;
  instance: EntityInstance | RelationInstance;
}

export default Instance;
