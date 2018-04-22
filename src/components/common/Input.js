import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default (Input = props => {
  return (
    <TextInput
      onChangeText={props.onChangeText}
      value={props.value}
      style={[styles.input, props.style]}
      placeholder={props.placeholder}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f1f1f1'
  }
});
