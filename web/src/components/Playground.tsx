import {Box} from '@mantine/core';
import React from "react";
import {useParams} from "react-router-dom";
import EntityInstancesGrid from "../inexor-rgf-components/EntityInstancesGrid";

type TestProps = {
  plugin: string;
  test: string;
}

function Playground(props: any) {
  let testProps = useParams<TestProps>();

  return (
    <Box
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      })}
    >
      <EntityInstancesGrid entityTypeName={testProps.test as string} />
    </Box>
  )
}

export default Playground;
