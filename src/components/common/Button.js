import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default (Button = props => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      <Text style={styles.buttonLabel}>{props.children}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
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
