import React from "react";
import {ActionIcon, MediaQuery, Tooltip} from "@mantine/core";
import {Icon} from "tabler-icons-react";

interface SocialLinkProperties {
  url: string;
  icon: Icon;
  label: string;
}

function SocialLink({url, icon, label}: SocialLinkProperties) {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Tooltip label={label} withArrow>
        <ActionIcon<'a'> component="a" href={url} target="_blank" variant="default" size={32}>
          {React.createElement(icon, { size: 24 })}
        </ActionIcon>
      </Tooltip>
    </MediaQuery>
  )
}

export default SocialLink;
