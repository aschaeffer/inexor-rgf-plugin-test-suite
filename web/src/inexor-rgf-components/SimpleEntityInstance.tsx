import {Component, EntityInstance, PropertyInstance, SocketType} from "../inexor-rgf-graphql";
import {Accordion, Badge, Card, Center, Divider, Group, Text, Title} from "@mantine/core";
import ComponentsPropertyInstancesAccordion from "./ComponentsPropertyInstancesAccordion";
import PropertyInstanceTable from "./PropertyInstanceTable";
import ComponentPropertyInstanceTable from "./ComponentPropertyInstanceTable";

interface SimpleEntityInstanceProperties {
  entityInstance: EntityInstance;
  filterSocketType?: Array<SocketType>;
  children?: JSX.Element;
}

function SimpleEntityInstance({entityInstance, filterSocketType, children}: SimpleEntityInstanceProperties) {

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

  const ownPropertiesAccordionItem = ownProperties.length > 0 ? (
    <Accordion.Item label="Own Properties" >
      <PropertyInstanceTable instance={entityInstance} properties={ownProperties} />
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
      <ComponentsPropertyInstancesAccordion instance={entityInstance} components={components} properties={properties}>
        {ownPropertiesAccordionItem}
        {/*<Accordion.Item label="Own Properties" >*/}
        {/*  <PropertyInstanceTable properties={ownProperties} />*/}
        {/*</Accordion.Item>*/}
      </ComponentsPropertyInstancesAccordion>
    </Card>
  )
}

export default SimpleEntityInstance;
