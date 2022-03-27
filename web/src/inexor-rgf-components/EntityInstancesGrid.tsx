import {
  EntityInstance,
  useCreateEntityInstanceWithIdMutation, useDeleteEntityInstanceMutation,
  useGetEntityInstancesByTypeQuery, useUpdateEntityInstanceMutation
} from '../inexor-rgf-graphql';
import {Box, Button, Grid, Group} from '@mantine/core';
import SimpleEntityInstance from './SimpleEntityInstance';
import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {CirclePlus, TrashX} from 'tabler-icons-react';

interface EntityInstancesGridProperties {
  entityTypeName: string;
}

function EntityInstancesGrid({entityTypeName} : EntityInstancesGridProperties) {

  const [ entityInstances, setEntityInstances ] = useState<Array<EntityInstance>>([]);

  const [ createEntityInstanceOfType ] = useCreateEntityInstanceWithIdMutation({
    onCompleted: (data) => {
      const createdEntityInstance = data.instances.entities.create as EntityInstance;
      setEntityInstances([...entityInstances, createdEntityInstance]);
    }
  })

  const [ deleteEntityInstance ] = useDeleteEntityInstanceMutation()

  useGetEntityInstancesByTypeQuery({
    variables: {
      type: entityTypeName
    },
    onCompleted: (data) => {
      const entityInstances = data?.instances.entities as Array<EntityInstance>;
      setEntityInstances(entityInstances);
    }
  });

  const deleteEntityInstanceAndUpdate = async (id: string) => {
    await deleteEntityInstance({
      variables: {
        id
      },
    })
    setEntityInstances(entityInstances.filter(entityInstance => entityInstance.id !== id));
  }

  const [updateEntityInstance] = useUpdateEntityInstanceMutation({
  })

  const doUpdateEntityInstance = async (instance: EntityInstance, name: string, value: any) => {
    return (await updateEntityInstance({
      variables: {
        id: instance.id,
        properties: [
          {
            name,
            value
          }
        ]
      }
    })).data?.instances.entities.update as EntityInstance;
  }

  const columns = entityInstances?.map((entityInstance) => (
    <Grid.Col key={entityInstance.id} sm={12} md={12} lg={12} xl={6}>
      <SimpleEntityInstance entityInstance={entityInstance} doUpdateEntityInstance={doUpdateEntityInstance}>
        <Group>
          <Button
            color="red"
            onClick={async () => await deleteEntityInstanceAndUpdate(entityInstance.id)}
          >
            <TrashX size={24} />
          </Button>
        </Group>
      </SimpleEntityInstance>
    </Grid.Col>
  ));

  return (
    <Box>
      <Group mb={10} align={'right'}>
      </Group>
      <Grid>
        <Grid.Col>
          <Button onClick={async () => {
            await createEntityInstanceOfType({
              variables: {
                type: entityTypeName,
                id: uuidv4()
              }
            })
          }}>
            <CirclePlus size={24} />
            Create
          </Button>
        </Grid.Col>
      </Grid>
      <Grid>
        {columns}
      </Grid>
    </Box>
  );
}

export default EntityInstancesGrid;
