import {PropertyInstance} from '../inexor-rgf-graphql';
import Instance from './Instance';

interface PropertyInstanceNumberProperties {
  instance: Instance;
  property: PropertyInstance;
}

function PropertyInstanceNumber({instance, property}: PropertyInstanceNumberProperties) {
  return (
    <div>
      {property.value}
    </div>
  )
}

export default PropertyInstanceNumber;
