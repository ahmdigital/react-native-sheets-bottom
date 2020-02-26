/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const CloseStyles = StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
    borderRadius: 15,
    display: 'flex',
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    top: 20,
    width: 30,
    zIndex: 3,
  },
  iconLine: {
    backgroundColor: 'white',
    borderRadius: 2,
    height: 2,
    position: 'absolute',
    width: 18,
  },
});

export const Close = ({ onPress, rootStyle, iconStyle }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[CloseStyles.closeButton, rootStyle]}>
      <View
        style={[
          CloseStyles.iconLine,
          iconStyle,
          { transform: [{ rotateZ: '45deg' }] },
        ]}
      />
      <View
        style={[
          CloseStyles.iconLine,
          iconStyle,
          { transform: [{ rotateZ: '135deg' }] },
        ]}
      />
    </TouchableOpacity>
);
