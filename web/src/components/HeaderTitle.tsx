import {Title, useMantineTheme} from "@mantine/core";
import {useMatch} from "react-router-dom";
import React from "react";

function HeaderTitle() {
  const theme = useMantineTheme();
  const match = useMatch(`/playground/:plugin/:test`);
  return (
    <Title order={2} sx={{
      display: 'block',
      width: '100%',
      padding: theme.spacing.xs,
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
    }}>
      Inexor Playground
      {match ? ` / ${match.params.plugin} / ${match.params.test}` : ''}
    </Title>
  )
}

export default HeaderTitle;
