import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './root';

const { NODE_ENV } = process.env;

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>
    ,document.getElementById('app'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  const App = require('./root').default;
  module.hot.accept('./root', () => { render(App); });
}