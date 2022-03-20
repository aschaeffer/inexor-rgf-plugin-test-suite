import {Component, PropertyInstance} from "../inexor-rgf-graphql";
import {Accordion} from "@mantine/core";
import ComponentPropertyInstanceTable from "./ComponentPropertyInstanceTable";
import Instance from "./Instance";

interface ComponentsPropertyInstancesAccordionProperties {
  instance: Instance;
  components?: Array<Component>;
  properties?: PropertyInstance[];
  children?: JSX.Element;
  doUpdateInstance: (instance: Instance, name: string, value: any) => Promise<Instance>;
}

function ComponentsPropertyInstancesAccordion({instance, components, properties, children, doUpdateInstance}: ComponentsPropertyInstancesAccordionProperties) {
  const componentPropertyInstancesAccordionItems = components?.map((component) => {
    return (
      <Accordion.Item key={component.name} label={component.name}>
        <ComponentPropertyInstanceTable instance={instance} component={component} properties={properties} doUpdateInstance={doUpdateInstance} />
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
