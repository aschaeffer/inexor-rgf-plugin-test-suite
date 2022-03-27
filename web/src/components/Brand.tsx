import React from 'react';
import {
  ActionIcon,
  Box,
  Center,
  Divider,
  Group,
  MediaQuery,
  Tooltip,
  useMantineColorScheme
} from '@mantine/core';
import {useFullscreen} from '@mantine/hooks';
import {
  BrandDiscord,
  BrandGithub,
  Edit,
  Eye,
  Maximize,
  Minimize,
  MoonStars,
  Polygon,
  Sun,
  Terminal2,
} from 'tabler-icons-react';
import logo from '../inexor.svg';
import './Brand.css';
import SocialLink from './SocialLink';
import HeaderTitle from './HeaderTitle';

function SocialLinks() {
  return (
    <>
      <SocialLink url="https://github.com/aschaeffer/inexor-rgf-application" icon={BrandGithub} label="GitHub" />
      <SocialLink url="https://discord.com/invite/acUW8k7" icon={BrandDiscord} label="Discord" />
      <Divider variant="dashed" />
      <SocialLink url="/graphql-client/" icon={Terminal2} label="GraphQL Client" />
      <Divider variant="dashed" />
      <SocialLink url="/graphql-schema-visualization/query" icon={Polygon} label="GraphQL Queries" />
      <SocialLink url="/graphql-schema-visualization/mutation" icon={Edit} label="GraphQL Mutations" />
      <SocialLink url="/graphql-schema-visualization/subscription" icon={Eye} label="GraphQL Subscriptions" />
      <Divider variant="dashed" />
    </>
  )
}

function HeaderActions() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const { toggle, fullscreen } = useFullscreen();
  return (
    <>
      <Tooltip label="Fullscreen" withArrow>
        <ActionIcon variant="default" onClick={toggle} size={32}>
          {fullscreen ? <Maximize size={32} /> : <Minimize size={32} />}
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Dark Mode" withArrow>
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={32}>
          {dark ? <Sun size={24} /> : <MoonStars size={24} />}
        </ActionIcon>
      </Tooltip>
    </>
  )
}

interface BrandProperties {
  children?: JSX.Element;
}

function Brand({children}: BrandProperties) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position="apart">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Group>
            {children}
          </Group>
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Group>
            <img src={logo} {...dark ? {className: "app-logo"} : {className: "app-logo-invert"}} alt="logo" />
          </Group>
        </MediaQuery>
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Group>
            <Center>
              <HeaderTitle />
            </Center>
          </Group>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Group>
            <Center>
              <img src={logo} {...dark ? {className: "app-logo"} : {className: "app-logo-invert"}} alt="logo" />
            </Center>
          </Group>
        </MediaQuery>
        <Group>
          <SocialLinks />
          <HeaderActions />
        </Group>
      </Group>
    </Box>
  );
}

export default Brand;
