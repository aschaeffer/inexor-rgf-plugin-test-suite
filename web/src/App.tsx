import React, {useState} from 'react';
import './App.css';
import {
  AppShell,
  Header,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Navbar,
  ScrollArea,
  MediaQuery,
  Burger, useMantineTheme
} from "@mantine/core";
import Brand from "./components/Brand";
import {useHotkeys, useLocalStorage} from "@mantine/hooks";
import Navigation from "./components/Navigation";
import {User} from "./components/User";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Overview from "./components/Overview";
import Playground from "./components/Playground";
import {HttpLink, from, InMemoryCache, ApolloClient, ApolloProvider,} from "@apollo/client"
import {onError} from "@apollo/client/link/error"

function App() {
  const theme = useMantineTheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['ctrl+J', () => toggleColorScheme()]]);

  const [opened, setOpened] = useState(false);

  const errorLink = onError(({ graphQLErrors, networkError}) => {
    if (graphQLErrors) {
      graphQLErrors.map(({message, locations, path}) => {
        console.error(`GraphQL error: ${message}`);
      })
    }
  })

  const link = from([
    errorLink,
    new HttpLink({uri: '/graphql'})
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
  })

  return (
    <ApolloProvider client={client}>
      <Router>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{colorScheme}}>
            <AppShell
              padding="md"
              navbarOffsetBreakpoint="sm"
              navbar={
                <Navbar
                  width={{ base: 300 }}
                  hiddenBreakpoint="sm"
                  hidden={!opened}
                  p="xs"
                >
                  <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
                    <Navigation />
                  </Navbar.Section>
                  <Navbar.Section>
                    <User />
                  </Navbar.Section>
                </Navbar>
              }
              header={
                <Header height={80} p="xs">
                  <Brand />
                  <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
                </Header>
              }
              styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
              })}
            >
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/playground/:plugin/:test" element={<Playground />} />
              </Routes>
            </AppShell>
          </MantineProvider>
        </ColorSchemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
