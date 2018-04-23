import React, { Component } from 'react';
import { View, AsyncStorage, ActivityIndicator, Alert } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import TodoApp from './components/Todo';
import Auth from './components/Auth';

export const USER_TOKEN = 'user_token';

export default class App extends Component {
  state = {
    isLoaded: false,
    logined: false
  };

  componentDidMount() {
    AsyncStorage.getItem(USER_TOKEN).then(token => {
      console.log('componentDidMount getToken', token);
      this.setState({ logined: token !== null, isLoaded: true });
    });
  }
  async onLogout() {
    try {
      await AsyncStorage.removeItem(USER_TOKEN);
      Alert.alert('Logout Success');
      Actions.auth({ type: 'reset' });
    } catch (e) {
      console.log('onLogout error: ', e);
    }
  }
  render() {
    if (!this.state.isLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />;
        </View>
      );
    } else {
      return (
        <Router>
          <Scene key="root">
            <Scene
              component={Auth}
              key="auth"
              title="Authentication"
              initial={this.state.logined}
            />
            <Scene
              initial={this.state.logined}
              component={TodoApp}
              key="todoApp"
              title="Home"
              rightTitle="Logout"
              onRight={() => this.onLogout()}
            />
          </Scene>
        </Router>
      );
    }
  }
}
