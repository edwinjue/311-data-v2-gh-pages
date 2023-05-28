import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme, { darkTheme } from '@theme/theme';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Desktop from '@components/main/Desktop';
import Dashboard from '@components/main/Dashboard';
import Privacy from '@components/main/Privacy';
import Faqs from '@components/main/Faqs';
import About from '@components/main/About';
import Research from '@components/main/Research';
import Contact from '@components/contact/Contact';
import ContentBottom from '@components/common/ContentBottom';
import queryString from 'query-string';

export default function Routes() {
  const { pathname, search } = useLocation();
  const values = queryString.parse(search);

  return (
    <>
      {/* Dark Theme - Map. */}
      <ThemeProvider theme={darkTheme}>
        <Paper elevation={0}>
          <Box visibility={pathname !== '/map' ? 'hidden' : 'visible'}>
            <Desktop
              initialState={values}
            />
          </Box>
        </Paper>
      </ThemeProvider>

      {/* Default theme - Everything else. */}
      <ThemeProvider theme={theme}>
        <Paper elevation={0}>
          <Switch>
            <Route path="/311-data-v2-gh-pages/dashboard" component={Dashboard} />
            <Route path="/311-data-v2-gh-pages/privacy" component={Privacy} />
            <Route path="/311-data-v2-gh-pages/faqs" component={Faqs} />
            <Route path="/311-data-v2-gh-pages/research" component={Research} />
            <Route path="/311-data-v2-gh-pages/about" component={About} />
            <Route path="/311-data-v2-gh-pages/contact" component={Contact} />
            <Route path="/311-data-v2-gh-pages/">
              <Redirect to={`map${search}`} />
            </Route>
          </Switch>
          <ContentBottom />
        </Paper>
      </ThemeProvider>
    </>
  );
}
