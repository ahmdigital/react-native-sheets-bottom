import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export const Title = ({ title }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{title}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
  },
});
