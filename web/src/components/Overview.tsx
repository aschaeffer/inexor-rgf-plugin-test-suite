import {Box, Center, Text, Title} from '@mantine/core';

function Overview() {
  return (
    <Box
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        // padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Title>Play with me!</Title>
      <Text>
        The Inexor Playground let you play around with the Reactive Entity Component System.
      </Text>
    </Box>
  )
}

export default Overview;
