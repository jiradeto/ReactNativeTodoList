import React, { Component } from 'react';
import { Platform } from 'react-native';

import TodoApp from './components/TodoApp';

export default class App extends Component {
  componentWillMount() {
    console.ignoredYellowBox = ['Remote debugger'];
  }
  render() {
    return <TodoApp />;
  }
}
