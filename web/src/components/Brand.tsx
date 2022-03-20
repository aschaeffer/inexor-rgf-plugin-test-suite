import React from "react";
import {ActionIcon, Box, Center, Group, MediaQuery, Tooltip, useMantineColorScheme} from "@mantine/core";
import {useFullscreen} from "@mantine/hooks";
import {BrandDiscord, BrandGithub, Maximize, Minimize, MoonStars, Sun} from "tabler-icons-react";
import logo from "../inexor.svg";
import "./Brand.css";
import SocialLink from "./SocialLink";
import HeaderTitle from "./HeaderTitle";


function SocialLinks() {
  return (
    <>
      <SocialLink url="https://github.com/aschaeffer/inexor-rgf-application" icon={BrandGithub} label="GitHub" />
      <SocialLink url="https://discord.com/invite/acUW8k7" icon={BrandDiscord} label="Discord" />
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
function Brand() {
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
        <Group>
          <img src={logo} {...dark ? {className: "app-logo"} : {className: "app-logo-invert"}} alt="logo" />
        </Group>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Group>
            <Center>
              <HeaderTitle />
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
