import {Component, EntityInstance, PropertyInstance, SocketType} from "../inexor-rgf-graphql";
import {Accordion, Card, Center, Divider, Group, Text, Title} from "@mantine/core";
import ComponentsPropertyInstancesAccordion from "./ComponentsPropertyInstancesAccordion";
import PropertyInstanceTable from "./PropertyInstanceTable";
import InstanceType from "./InstanceType";
import Instance from "./Instance";

interface SimpleEntityInstanceProperties {
  entityInstance: EntityInstance;
  filterSocketType?: Array<SocketType>;
  children?: JSX.Element;
  doUpdateEntityInstance: (instance: EntityInstance, name: string, value: any) => Promise<EntityInstance>;
}

function SimpleEntityInstance({entityInstance, filterSocketType, doUpdateEntityInstance, children}: SimpleEntityInstanceProperties) {

  const components = entityInstance?.type?.components as Array<Component>;

  const properties = entityInstance?.properties.filter((property) => {
    if (filterSocketType === undefined) {
      return true;
    }
    return filterSocketType.includes(property.type?.socketType as SocketType);
  }) as PropertyInstance[];

  const ownProperties = entityInstance?.properties.filter(property => {
    return !components
      .map(component => component.properties)
      .map(propertyTypes => propertyTypes.map(propertyType => propertyType.name))
      .flat(1)
      .includes(property.name);
  }) as PropertyInstance[]

  const instance = {
    instanceType: InstanceType.EntityInstance,
    instance: entityInstance,
  };

  const doUpdateInstance = async (instance: Instance, name: string, value: any) => {
    const entityInstance = (await doUpdateEntityInstance(instance.instance as EntityInstance, name, value));
    return {
      instanceType: InstanceType.EntityInstance,
      instance: entityInstance,
    } as Instance;
  }

  const ownPropertiesAccordionItem = ownProperties.length > 0 ? (
    <Accordion.Item label="Own Properties" >
      <PropertyInstanceTable instance={instance} properties={ownProperties} doUpdateInstance={doUpdateInstance} />
    </Accordion.Item>
  ) : (
    <></>
  );

  return (
    <Card
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      })}

    >
      <Group position="apart">
        <Title>
          {entityInstance?.type?.name}
        </Title>
        {children}
      </Group>
      <Divider my="sm" label={entityInstance?.id} labelPosition="center" />
      <Center>
        <Text>
          {entityInstance?.label}
        </Text>
      </Center>
      <ComponentsPropertyInstancesAccordion instance={instance} components={components} properties={properties} doUpdateInstance={doUpdateInstance}>
        {ownPropertiesAccordionItem}
        {/*<Accordion.Item label="Own Properties" >*/}
        {/*  <PropertyInstanceTable properties={ownProperties} />*/}
        {/*</Accordion.Item>*/}
      </ComponentsPropertyInstancesAccordion>
    </Card>
  )
}

export default SimpleEntityInstance;
