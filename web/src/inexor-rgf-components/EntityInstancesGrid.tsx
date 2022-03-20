import {
  EntityInstance,
  useCreateEntityInstanceWithIdMutation, useDeleteEntityInstanceMutation,
  useGetEntityInstancesByTypeQuery
} from "../inexor-rgf-graphql";
import {Box, Button, Grid, Group} from "@mantine/core";
import SimpleEntityInstance from "./SimpleEntityInstance";
import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {CirclePlus, TrashX} from "tabler-icons-react";

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

  const columns = entityInstances?.map((entityInstance) => (
    <Grid.Col key={entityInstance.id} sm={12} md={12} lg={6}>
      <SimpleEntityInstance entityInstance={entityInstance}>
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
      <Group mb={10}>
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
      </Group>
      <Grid>
        {columns}
      </Grid>
    </Box>
  );
}

export default EntityInstancesGrid;
