/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar, KeyboardAvoidingView } from 'react-native';
import {SafeAreaView} from 'react-navigation';

import {Header} from './components/Header';
import List from './scenes/List';

import {Settings} from './components/Settings';
import {About} from './components/About';
import {Configurations} from './components/Configurations';

// import SwipeablePanel from "rn-swipeable-panel";

// For developement I use
// import SwipeablePanel from './components/Panel/Panel';
import SwipeablePanel from './actualComponents/Panel.js';

type AppState = {
  content: Function;
  isActive: Boolean;
  openLarge: Boolean;
  onlyLarge: Boolean;
  fullWidth: Boolean;
  noBar: Boolean;
  showCloseButton: Boolean;
  noBackgroundOpacity: Boolean;
  bounceAnimation: Boolean;
  closeOnTouchOutside: Boolean;
};


const screenStyles =  StyleSheet.create({
  screenView: {
    flex: 1,
    // backgroundColor: 'white',
  },
  container: {
    flexGrow: 1,
  },
  safeAreaView: {
    flex: 1,
    // backgroundColor: 'grey',
    backgroundColor: 'grey',
  },
});

const Screen = ({ scrollEnabled, children, ...props }) =>
<SafeAreaView style={screenStyles.safeAreaView}>
  <KeyboardAvoidingView
    behavior={'padding'}
    keyboardVerticalOffset={50}
    style={screenStyles.screenView}
  >
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    {scrollEnabled ? (
      <ScrollView
      contentContainerStyle={screenStyles.container}
        keyboardDismissMode="on-drag"
      >
        {children}
      </ScrollView>
    ) : (
      <View style={screenStyles.container}>
        {children}
      </View>
    )}
  </KeyboardAvoidingView>
</SafeAreaView>

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      content: () => null,
      isActive: false,
      openLarge: false,
      onlyLarge: false,
      fullWidth: false,
      noBackgroundOpacity: false,
      bounceAnimation: false,
      closeOnTouchOutside: true,
      noBar: false,
      showCloseButton: false,
    };
  }

  openAboutPanel = () => {
    this.setState({
      isActive: true,
      openLarge: true,
      fullWidth: true,
      showCloseButton: true,
      content: () => <About />,
    });
  };

  openSettingsPanel = () => {
    this.setState({
      isActive: true,
      openLarge: false,
      fullWidth: true,
      showCloseButton: true,
      content: () => <Settings />,
    });
  };

  openConfigurationsPanel = () => {
    this.setState({
      isActive: true,
      openLarge: false,
      fullWidth: false,
      showCloseButton: false,
      noBar: false,
      content: () => (
        <Configurations state={this.state} changeState={this.changeState} />
      ),
    });
  };

  changeState = (state: any) => {
    this.setState(state);
  };

  openDefaultPanel = () => {
    this.setState({isActive: true, openLarge: false, content: () => null});
  };

  closePanel = () => {
    this.setState({
      isActive: false,
      fullWidth: false,
      openLarge: false,
      showCloseButton: false,
      noBackgroundOpacity: false,
      closeOnTouchOutside: false,
      noBar: false,
    });
  };

  render() {
    const {
      isActive,
      showCloseButton,
      closeOnTouchOutside,
      fullWidth,
      noBackgroundOpacity,
      openLarge,
      noBar,
    } = this.state;

    return (
      <React.Fragment>
        <Screen scrollEnabled={true}>

        {/* <SafeAreaView style={Styles.container}> */}
          <Header title={'Examples'} />
          <List
            openDefaultPanel={this.openDefaultPanel}
            openSettingsPanel={this.openSettingsPanel}
            openAboutPanel={this.openAboutPanel}
            openConfigurationsPanel={this.openConfigurationsPanel}
          />

        </Screen>

        <SwipeablePanel
          fullWidth={fullWidth}
          noBar={noBar}
          openLarge={openLarge}
          showCloseButton={showCloseButton}
          noBackgroundOpacity={noBackgroundOpacity}
          isActive={isActive}
          closeOnTouchOutside={closeOnTouchOutside}
          onClose={() => {
            this.setState({isActive: false});
          }}>
          {this.state.content()}
        </SwipeablePanel>

        {/* </SafeAreaView> */}
      </React.Fragment>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#82B7E9',
  },
});
