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
    tests: [
      { icon: "Plus", color: 'grape', label: 'Equals', route: '/playground/comparison/equals' },
      { icon: "Plus", color: 'grape', label: 'Greater Than', route: '/playground/comparison/greater_than' },
      { icon: "Plus", color: 'grape', label: 'Greater Than Or Equals', route: '/playground/comparison/greater_than_or_equals' },
      { icon: "Plus", color: 'grape', label: 'Lower Than', route: '/playground/comparison/lower_than' },
      { icon: "Plus", color: 'grape', label: 'Lower Than Or Equals', route: '/playground/comparison/lower_than_or_equals' },
      { icon: "Plus", color: 'grape', label: 'Not Equals', route: '/playground/comparison/not_equals' },
    ]
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
      { icon: "Plus", color: 'teal', label: 'abs', route: '/playground/numeric/abs' },
      { icon: "Plus", color: 'violet', label: 'acosh', route: '/playground/numeric/acosh' },
      { icon: "Plus", color: 'violet', label: 'asin', route: '/playground/numeric/asin' },
      { icon: "Plus", color: 'violet', label: 'asinh', route: '/playground/numeric/asinh' },
      { icon: "Plus", color: 'violet', label: 'atan', route: '/playground/numeric/atan' },
      { icon: "Plus", color: 'violet', label: 'atan2', route: '/playground/numeric/atan2' },
      { icon: "Plus", color: 'violet', label: 'atanh', route: '/playground/numeric/atanh' },
      { icon: "Plus", color: 'violet', label: 'cbrt', route: '/playground/numeric/cbrt' },
      { icon: "Plus", color: 'violet', label: 'ceil', route: '/playground/numeric/ceil' },
      { icon: "Plus", color: 'violet', label: 'cos', route: '/playground/numeric/cos' },
      { icon: "Plus", color: 'violet', label: 'cosh', route: '/playground/numeric/cosh' },
      { icon: "Plus", color: 'violet', label: 'exp', route: '/playground/numeric/exp' },
      { icon: "Plus", color: 'violet', label: 'exp2', route: '/playground/numeric/exp2' },
      { icon: "Plus", color: 'violet', label: 'floor', route: '/playground/numeric/floor' },
      { icon: "Plus", color: 'violet', label: 'fract', route: '/playground/numeric/fract' },
      { icon: "Plus", color: 'violet', label: 'hypot', route: '/playground/numeric/hypot' },
      { icon: "Plus", color: 'violet', label: 'ln', route: '/playground/numeric/ln' },
      { icon: "Plus", color: 'violet', label: 'log', route: '/playground/numeric/log' },
      { icon: "Plus", color: 'violet', label: 'log2', route: '/playground/numeric/log2' },
      { icon: "Plus", color: 'violet', label: 'log10', route: '/playground/numeric/log10' },
      { icon: "Plus", color: 'violet', label: 'pow', route: '/playground/numeric/pow' },
      { icon: "Plus", color: 'violet', label: 'recip', route: '/playground/numeric/recip' },
      { icon: "Plus", color: 'violet', label: 'round', route: '/playground/numeric/round' },
      { icon: "Plus", color: 'violet', label: 'signum', route: '/playground/numeric/signum' },
      { icon: "Plus", color: 'violet', label: 'sin', route: '/playground/numeric/sin' },
      { icon: "Plus", color: 'violet', label: 'sinh', route: '/playground/numeric/sinh' },
      { icon: "Plus", color: 'violet', label: 'sqrt', route: '/playground/numeric/sqrt' },
      { icon: "Plus", color: 'violet', label: 'tan', route: '/playground/numeric/tan' },
      { icon: "Plus", color: 'violet', label: 'tanh', route: '/playground/numeric/tanh' },
      { icon: "Plus", color: 'violet', label: 'to_degrees', route: '/playground/numeric/to_degrees' },
      { icon: "Plus", color: 'violet', label: 'to_radians', route: '/playground/numeric/to_radians' },
      { icon: "Plus", color: 'violet', label: 'trunc', route: '/playground/numeric/trunc' },
    ]
  },
  {
    name: "Random",
    tests: [
      { icon: "Clock", color: 'grape', label: 'Pseudo Random Number', route: '/playground/random/pseudo_random_number' },
      { icon: "Clock", color: 'grape', label: 'Random Bool', route: '/playground/random/random_bool' },
      { icon: "Clock", color: 'grape', label: 'Random Number', route: '/playground/random/random_number' },
      { icon: "Clock", color: 'grape', label: 'Random Int Within Range', route: '/playground/random/random_integer_within_range' },
      { icon: "Clock", color: 'grape', label: 'Random String', route: '/playground/random/random_string' },
      { icon: "Clock", color: 'grape', label: 'Random UUID', route: '/playground/random/random_uuid' },
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
    tests: [
      { icon: "Plus", color: 'grape', label: 'Trim', route: '/playground/string/trim' },
      { icon: "Plus", color: 'grape', label: 'TrimStart', route: '/playground/string/trim_start' },
      { icon: "Plus", color: 'grape', label: 'TrimEnd', route: '/playground/string/trim_end' },
      { icon: "Plus", color: 'grape', label: 'Uppercase', route: '/playground/string/uppercase' },
      { icon: "Plus", color: 'grape', label: 'Lowercase', route: '/playground/string/lowercase' },
      { icon: "Plus", color: 'grape', label: 'StartsWith', route: '/playground/string/starts_with' },
      { icon: "Plus", color: 'grape', label: 'EndsWith', route: '/playground/string/ends_with' },
      { icon: "Plus", color: 'grape', label: 'Contains', route: '/playground/string/contains' },
    ]
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
