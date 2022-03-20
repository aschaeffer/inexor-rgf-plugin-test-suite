import {Component, EntityInstance, PropertyInstance, RelationInstance} from "../inexor-rgf-graphql";
import PropertyInstanceTable from "./PropertyInstanceTable";
import {Group, Paper, Text, useMantineColorScheme} from "@mantine/core";
import {InfoCircle} from "tabler-icons-react";

interface ComponentPropertyInstanceTableProperties {
  instance: EntityInstance | RelationInstance;
  component: Component;
  properties?: PropertyInstance[];
}

function ComponentPropertyInstanceTable({instance, component, properties}: ComponentPropertyInstanceTableProperties) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const componentPropertyNames = component?.properties?.map((propertyType) => propertyType.name);
  const componentProperties = properties?.filter((propertyInstance) => componentPropertyNames?.includes(propertyInstance.name));
  const description = component.description ? (
    <Paper
      p="xs"
      radius="lg"
      mb="lg"
      sx={(theme) => ({
        backgroundColor: dark ? theme.colors.indigo[9] : theme.colors.indigo[0],
      })}
    >
      <Group>
        <InfoCircle size={24} />
        <Text weight={900}>
          {component.description}
        </Text>
      </Group>
    </Paper>
  ) : '';
  return (
    <>
      {description}
      <PropertyInstanceTable instance={instance} properties={componentProperties} />
    </>
  )
}

export default ComponentPropertyInstanceTable;
