import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from '@theme/theme';
import store from '@root/redux/store';
import App from '@root/App';
import DbProvider from '@db/DbProvider';

// import HelloWorldWorker from './components/HelloWorldWorker';
// import DuckDBHelloWorld from './components/DuckDbHelloWorld';
// import DbConsumerHelloWorld from '@components/DbConsumerHelloWorld';

Sentry.init({
  dsn: process.env.SENTRY_CLIENT_DSN,
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// Expose theme to debugging console like on mui.com.
// https://v4.mui.com/customization/typography/#default-values
window.theme = theme;

ReactDOM.render(
  <Provider store={store}>
    <DbProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <App />
        {/* <HelloWorldWorker /> */}
        {/* <<DuckDBHelloWorld /> */}
        {/* <DbConsumerHelloWorld /> */}
      </ThemeProvider>
    </DbProvider>
  </Provider>,
  document.getElementById('root'),
);

// hot module replacement during development
if (module.hot) module.hot.accept();
