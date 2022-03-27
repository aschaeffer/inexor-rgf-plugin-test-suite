import {SocketType} from '../inexor-rgf-graphql';
import {Badge} from '@mantine/core';
import {ArrowRight} from 'tabler-icons-react';
import { useMediaQuery } from '@mantine/hooks';

function getSocketTypeShortcut(socketType: SocketType | undefined) {
  switch (socketType) {
    case 'INPUT':
      return 'I';
    case 'OUTPUT':
      return 'O';
    default:
    case 'NONE':
      return '-'
  }
}

function getSocketGradient(socketType: SocketType | undefined) {
  switch (socketType) {
    case 'INPUT':
      return { from: 'teal', to: 'lime', deg: 90 };
    case 'OUTPUT':
      return { from: 'orange', to: 'red', deg: 90 };
    case 'NONE':
    default:
      return { from: 'gray', to: 'gray', deg: 90 };
  }
}

function LeftSocket({socketType}: SocketBadgeProperties) {
  switch (socketType) {
    case 'INPUT':
      return (
        <ArrowRight size={16} />
      );
    case 'OUTPUT':
    case 'NONE':
    default:
      return <></>
  }
}

function RightSocket({socketType}: SocketBadgeProperties) {
  switch (socketType) {
    case 'OUTPUT':
      return (
        <ArrowRight size={16} />
      );
    case 'INPUT':
    case 'NONE':
    default:
      return <></>
  }
}

interface SocketBadgeProperties {
  socketType: SocketType | undefined;
}

function SocketBadge({socketType} : SocketBadgeProperties) {
  const largeScreen = useMediaQuery('(min-width: 900px)');
  const label = largeScreen ? socketType : getSocketTypeShortcut(socketType);
  const leftSection = largeScreen ? (<LeftSocket socketType={socketType} />) : null;
  const rightSection = largeScreen ? (<RightSocket socketType={socketType} />) : null;
  return (
    <Badge
      variant="gradient"
      gradient={getSocketGradient(socketType)}
      leftSection={leftSection}
      rightSection={rightSection}
    >
      {label}
    </Badge>
  )
}

export default SocketBadge;
