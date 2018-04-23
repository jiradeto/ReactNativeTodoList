import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import TodoApp from './components/Todo';
import Auth from './components/Auth';

export default class App extends Component {
  componentWillMount() {
    console.ignoredYellowBox = ['Remote debugger'];
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene component={Auth} key="auth" title="Authentication" initial />
          <Scene component={TodoApp} key="todoApp" title="Home" />
        </Scene>
      </Router>
    );
  }
}
