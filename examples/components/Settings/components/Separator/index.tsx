import { StyleSheet, View } from 'react-native';
import React from 'react';

type SeparatorProps = {
  noLine: boolean;
};

export const Separator = ({ noLine }: SeparatorProps) => {
  return (
    <View style={Styles.separatorContainer}>
      <View style={[Styles.separator, { backgroundColor: noLine ? 'rgba(0,0,0,0)' : '#e2e2e2' }]} />
    </View>
  );
};

const Styles = StyleSheet.create({
  separatorContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    marginBottom: 5,
    marginTop: 5,
    width: '90%',
  },
});
