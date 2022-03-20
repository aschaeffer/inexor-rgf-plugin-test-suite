import {Component, EntityInstance, PropertyInstance, RelationInstance} from "../inexor-rgf-graphql";
import {Accordion} from "@mantine/core";
import ComponentPropertyInstanceTable from "./ComponentPropertyInstanceTable";

interface ComponentsPropertyInstancesAccordionProperties {
  instance: EntityInstance | RelationInstance;
  components?: Array<Component>;
  properties?: PropertyInstance[];
  children?: JSX.Element;
}

function ComponentsPropertyInstancesAccordion({instance, components, properties, children}: ComponentsPropertyInstancesAccordionProperties) {
  const componentPropertyInstancesAccordionItems = components?.map((component) => {
    return (
      <Accordion.Item key={component.name} label={component.name}>
        <ComponentPropertyInstanceTable instance={instance} component={component} properties={properties} />
      </Accordion.Item>
    )
  });
  return (
    <Accordion
      initialItem={0}
      styles={{ content: { paddingLeft: 0, paddingRight: 0 } }}
    >
      {children}
      {componentPropertyInstancesAccordionItems}
    </Accordion>
  )
}

export default ComponentsPropertyInstancesAccordion;
