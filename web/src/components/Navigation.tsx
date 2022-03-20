import {Accordion, Group, Text, ThemeIcon, UnstyledButton} from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import DynamicIcon from "./DynamicIcon";

interface NavigationItemProps {
  icon: string;
  color: string;
  label: string;
  route: string;
}

interface Plugin {
  name: string;
  tests: Array<NavigationItemProps>;
}

const plugins: Array<Plugin> = [
  {
    name: "Arithmetic",
    tests: [
      { icon: "fa/FaPlus", color: 'teal', label: 'Add', route: '/playground/arithmetic/add' },
      { icon: "fa/FaMinus", color: 'teal', label: 'Sub', route: '/playground/arithmetic/sub' },
      { icon: "fa/FaDiaspora", color: 'teal', label: 'Mul', route: '/playground/arithmetic/mul' },
      { icon: "fa/FaDivide", color: 'teal', label: 'Div', route: '/playground/arithmetic/div' },
      { icon: "md/MdCompareArrows", color: 'violet', label: 'Min', route: '/playground/arithmetic/min' },
      { icon: "md/MdCompareArrows", color: 'violet', label: 'Max', route: '/playground/arithmetic/max' },
    ]
  },
  {
    name: "Comparison",
    tests: []
  },
  {
    name: "JSON",
    tests: []
  },
  {
    name: "Logical",
    tests: [
      { icon: "Plus", color: 'teal', label: 'NOT', route: '/playground/logical/not' },
      { icon: "Plus", color: 'teal', label: 'AND', route: '/playground/logical/and' },
      { icon: "Plus", color: 'teal', label: 'NAND', route: '/playground/logical/nand' },
      { icon: "Minimize", color: 'violet', label: 'NOR', route: '/playground/logical/nor' },
      { icon: "Minimize", color: 'violet', label: 'OR', route: '/playground/logical/or' },
      { icon: "Plus", color: 'teal', label: 'XOR', route: '/playground/logical/xor' },
      { icon: "Plus", color: 'teal', label: 'XNOR', route: '/playground/logical/xnor' },
      { icon: "Plus", color: 'teal', label: 'IfThenElse', route: '/playground/logical/if_then_else' },
      { icon: "Plus", color: 'teal', label: 'Trigger', route: '/playground/logical/trigger' },
    ]
  },
  {
    name: "Numeric",
    tests: [
      { icon: "Plus", color: 'teal', label: 'And', route: '/playground/numeric/and' },
      { icon: "Minimize", color: 'violet', label: 'Or', route: '/playground/numeric/or' },
    ]
  },
  {
    name: "Random",
    tests: [
      { icon: "Clock", color: 'grape', label: 'Pseudo Random Number', route: '/playground/scheduler/pseudo_random_number' },
      { icon: "Clock", color: 'grape', label: 'Random Bool', route: '/playground/scheduler/random_bool' },
      { icon: "Clock", color: 'grape', label: 'Random Number', route: '/playground/scheduler/random_number' },
      { icon: "Clock", color: 'grape', label: 'Random Int Within Range', route: '/playground/scheduler/random_integer_within_range' },
      { icon: "Clock", color: 'grape', label: 'Random String', route: '/playground/scheduler/random_string' },
      { icon: "Clock", color: 'grape', label: 'Random UUID', route: '/playground/scheduler/random_uuid' },
    ]
  },
  {
    name: "Scheduler",
    tests: [
      { icon: "fa/FaClock", color: 'grape', label: 'Timer', route: '/playground/scheduler/timer' },
      { icon: "fa/FaCalendar", color: 'grape', label: 'Scheduled Job', route: '/playground/scheduler/scheduled_job' },
    ]
  },
  {
    name: "String",
    tests: []
  },
];

function NavigationItem({ icon, color, label, route }: NavigationItemProps) {
  return (
    <Link to={route}>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}

      >
        <Group>
          <ThemeIcon color={color} variant="light">
            <DynamicIcon icon={icon} size="16em" />
          </ThemeIcon>
          <Text>
            {label}
          </Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

function Navigation() {
  const pluginsAccordions = plugins.map((plugin) => {
    const links = plugin.tests.map((link) => <NavigationItem {...link} key={`${plugin.name}-${link.label}`} />);
    return (
      <Accordion.Item
        label={plugin.name}
        key={plugin.name}
        style={{paddingLeft: 0}}
      >
        {links}
      </Accordion.Item>
    );
  });
  return (
    <>
      <NavigationItem icon="AccessPoint" color="blue" label="Overview" route="/" />
      <Accordion styles={{ content: { paddingLeft: 0 } }}>
        {pluginsAccordions}
      </Accordion>
    </>
  );
}

export default Navigation;
