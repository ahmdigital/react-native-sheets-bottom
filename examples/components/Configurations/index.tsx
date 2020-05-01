import { StyleSheet, View, Text, Switch } from 'react-native';
import React from 'react';

type ConfigurationsProps = {
  state: Object;
  changeState: Function;
};

export const Configurations = ({ state, changeState }: ConfigurationsProps) => {
  return (
    <React.Fragment>
      <View
        style={[
          Styles.configurationItem,
          {
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.1)',
          },
        ]}
      >
        <Text style={[{ fontWeight: 'bold' }]}>Configurations</Text>
      </View>
      <View style={Styles.configurationItem}>
        <Text>Is Open</Text>
        <Switch value={state.isActive} disabled />
      </View>
      <View style={Styles.configurationItem}>
        <Text>Full Width</Text>
        <Switch value={state.fullWidth} onValueChange={value => changeState({ ...state, fullWidth: value })} />
      </View>
      <View style={Styles.configurationItem}>
        <Text>Close Button</Text>
        <Switch
          value={state.showCloseButton}
          onValueChange={value =>
            changeState({
              ...state,
              showCloseButton: value,
            })
          }
        />
      </View>
      <View style={Styles.configurationItem}>
        <Text>No Background Opacity</Text>
        <Switch
          value={state.noBackdropOpacity}
          onValueChange={value => changeState({ ...state, noBackdropOpacity: value })}
        />
      </View>
      <View style={Styles.configurationItem}>
        <Text>Close on touch outside</Text>
        <Switch
          value={state.closeOnTouchOutside}
          onValueChange={value => changeState({ ...state, closeOnTouchOutside: value })}
        />
      </View>
    </React.Fragment>
  );
};

export const Styles = StyleSheet.create({
  configurationItem: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
