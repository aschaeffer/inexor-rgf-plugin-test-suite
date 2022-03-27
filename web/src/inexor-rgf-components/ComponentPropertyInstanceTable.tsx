import {Component, PropertyInstance} from '../inexor-rgf-graphql';
import PropertyInstanceTable from './PropertyInstanceTable';
import {Group, Paper, Text, useMantineColorScheme} from '@mantine/core';
import {InfoCircle} from 'tabler-icons-react';
import Instance from './Instance';
import {useMediaQuery} from '@mantine/hooks';

interface ComponentPropertyInstanceTableProperties {
  instance: Instance;
  component: Component;
  properties?: PropertyInstance[];
  doUpdateInstance: (instance: Instance, name: string, value: any) => Promise<Instance>;
}

function ComponentPropertyInstanceTable({instance, component, properties, doUpdateInstance}: ComponentPropertyInstanceTableProperties) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const componentPropertyNames = component?.properties?.map((propertyType) => propertyType.name);
  const componentProperties = properties?.filter((propertyInstance) => componentPropertyNames?.includes(propertyInstance.name));
  const largeScreen = useMediaQuery('(min-width: 900px)');
  const description = largeScreen && component.description ? (
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
      <PropertyInstanceTable instance={instance} properties={componentProperties} doUpdateInstance={doUpdateInstance} />
    </>
  )
}

export default ComponentPropertyInstanceTable;
