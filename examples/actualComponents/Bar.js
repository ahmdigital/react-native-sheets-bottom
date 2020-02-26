/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { StyleSheet, View } from 'react-native';

const BarStyles = StyleSheet.create({
  bar: {
    backgroundColor: '#e2e2e2',
    borderRadius: 5,
    height: 6,
    marginBottom: 10,
    marginTop: 10,
    width: '40%',
  },
  barContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

export const Bar = ({ barStyle }) => (
    <View style={BarStyles.barContainer}>
      <View style={[BarStyles.bar, barStyle]} />
    </View>
);
