import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';

type SettingItemProps = {
  isHeader?: Boolean;
  isLast?: Boolean;
  isRed?: Boolean;
  item?: Object;
  onPress?: Function;
  title: string;
};

export const SettingItem = ({ title, item, isHeader, isLast, isRed, onPress }: SettingItemProps) => {
  return (
    <TouchableOpacity
      onPress={
        onPress
          ? () => onPress(item)
          : () => {
              return false;
            }
      }
      activeOpacity={isHeader ? 1.0 : 0.6}
      style={[Styles.itemContainer, { borderTopWidth: isHeader ? 0 : 1, borderBottomWidth: isLast ? 1 : 0 }]}
    >
      <View style={[Styles.item, { justifyContent: isHeader ? 'center' : 'flex-start' }]}>
        <Text
          style={[
            Styles.title,
            {
              color: isRed ? 'red' : 'black',
              fontWeight: isHeader ? 'bold' : 'normal',
            },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#e6eced',
    borderTopColor: '#e6eced',
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    width: '100%',
  },
  item: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
  },
  title: {
    fontSize: 16,
  },
});
