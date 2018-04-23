import React, { Component, PureComponent } from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';

export default class ListItem extends PureComponent {
  render() {
    const { text, completed, id } = this.props.task;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.onPress(this.props.index)}
      >
        <View style={styles.container}>
          <Text
            style={{
              textDecorationLine: completed ? 'line-through' : 'none',
              color: completed ? '#c4c4c4' : 'black'
            }}
          >
            {text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderColor: '#c3c3c3'
  },
  button: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#8AFFC4',
    backgroundColor: '#28D47E',
    borderWidth: 1,
    alignSelf: 'flex-end'
  },
  buttonLabel: {
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  }
});
