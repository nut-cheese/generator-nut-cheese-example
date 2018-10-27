import React, { Component } from 'react';
import { browserHistory, Router } from 'react-router';
import routerConfig from './router.config';

import './style/core.scss';

class Container extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={routerConfig} />
    );
  }
}

export default Container;

