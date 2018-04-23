import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Input from './common/Input';
import Button from './common/Button';

export default class Auth extends Component {
  state = {
    username: '',
    password: '',
    loading: false
  };

  onLogin() {
    this.setState({
      loading: true
    });

    setTimeout(() => {
      const { username, password } = this.state;
      console.log(username, password);

      if (username.toLowerCase() === 'user' && password === '1234') {
        Actions.todoApp({ type: 'reset' });
      } else {
        Alert.alert(
          'Error',
          'Incorrect Username or Password',
          [{ text: 'Close', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );

        this.setState({
          loading: false
        });
      }
    }, 1000);
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" style={styles.spinner} />;
    }

    return (
      <Button style={styles.button} onPress={this.onLogin.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          style={styles.input}
          onChangeText={txt => this.setState({ username: txt })}
          value={this.state.username}
          placeholder="Username"
        />
        <Input
          style={styles.input}
          secureTextEntry
          onChangeText={txt => this.setState({ password: txt })}
          value={this.state.password}
          placeholder="Password"
        />
        {this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    paddingTop: 50
  },
  button: {
    marginTop: 10,
    padding: 20,
    alignSelf: 'stretch'
  },
  container: {
    padding: 20
  },
  input: {
    padding: 20,
    marginTop: 10
  }
});
