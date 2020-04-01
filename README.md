<div align="center">

<img style="margin-right:1em" src="./rn-swipeable-panel.png" width="150" height="150">

<h1>React Native Sheets Bottom</h1>

**react-native-sheets-bottom** ise swipeable, easy to use bottom panel for your React Native projects. You can extend panel by swiping up, make it small or close by swiping down with pan gestures. Feel free to redesign inside of the panel.

NOTE: IT currentlt supports pattern the [modal-bottom-sheet](https://material.io/components/sheets-bottom/#modal-bottom-sheet). Roadmap is to support expand to full screen.

[![npm version](https://img.shields.io/npm/v/react-native-swipeable-panel.svg)](https://www.npmjs.com/package/react-native-swipeable-panel)

</div>

<br/>

<div align="center" style="margin-bottom:1em">
  <img src="rn-swipeable-panel.gif" width="auto" height="600"/>
</div>

<br/>

## ⚙️ Installation

```
$ npm i react-native-sheets-bottom
```

<!-- ## Usage -->

## 🚀 How to use

```javascript
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SwipeablePanel from "react-native-sheets-bottom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipeablePanelActive: false
    };
  }

  componentDidMount = () => {
    this.openPanel();
  };

  openPanel = () => {
    this.setState({ swipeablePanelActive: true });
  };

  closePanel = () => {
    this.setState({ swipeablePanelActive: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <SwipeablePanel
          fullWidth
          isActive={this.state.swipeablePanelActive}
          onClose={this.closePanel}
          onPressCloseButton={this.closePanel}
        >
          <PanelContent /> {/* Your Content Here */}
        </SwipeablePanel>
      </View>
    );
  }
}
```

## ☝️ Options

<br/>

| Properties              | Type       | Description                                              | Default |
| ----------------------- | ---------- | -------------------------------------------------------- | ------- |
| **barStyle**            | `Object`   | Use this prop to override bar style                      | `{}`    |
| **closeIconStyle**      | `Object`   | Use this prop to override close button icon style        | `{}`    |
| **closeOnTouchOutside** | `bool`     | Set true if you want to close panel by touching outside  | `false` |
| **closeOnTouchOutside** | `bool`     | Set true if you want to close panel by touching outside  | `false` |
| **closeRootStyle**      | `Object`   | Use this prop to override close button background style  | `{}`    |
| **fullWidth**           | `bool`     | Set true if you want to make full with panel             | `false` |
| **gestureThreshold**    | `Number`   | Top bar pan gesture threshold                            | `100`   |
| **isActive**            | `bool`     | Show/Hide the panel                                      | `false` |
| **noBackgroundOpacity** | `bool`     | Set true if you want to disable black background opacity | `false` |
| **noBar**               | `bool`     | Set true if you want to remove gray bar                  | `false` |
| **onClose**             | `Function` | Fired when the panel is closed                           |         |
| **onlyLarge**           | `bool`     | Set true if you want to let panel open just large mode   | `false` |
| **openLarge**           | `bool`     | Set true if you want to open panel large by default      | `false` |
| **showCloseButton**     | `bool`     | Set true if you want to show close button                |         |
| **style**               | `Object`   | Use this prop to override panel style                    | `{}`    |

#### TODO list since fork
* (DONE) create `gestureThreshold` new prop
* (DONE) Configure `Travis CI` and `semantic-release` so we automatically release new version up on code merge into master
* (In progress) Configure `Prettier` and `Eslint` so new contributors have a better dev experience
* Update README with the new sample UI
* Create animation prop to customize speed and behaviour
* Swipe to full screen mode like https://material.io/components/sheets-bottom/# (far in the roadmap)

#### Developer set up
* `npm i` - in root directory
* `cd examples`
* `npm i`
* `npm start`
* in another tab: `cd ios && pod install && cd ..`
* `react-native run-ios`  or `react-native run-android`

##### Commit messasages and release

This repo is sutomatically release by semantic-release. The type of bump (patch, minor, major) is determined by your commit message. For exmaple: `fix: full screen display mode`. This will be automatically released as a `patch`. You don't have to decide the bump. All you have to do is write your commit message according to this patter here: 
https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits

**Note:** the first line of your commit message is displayed in the release notes. Make sure the message is aligned with the changes you are making. 

**Tip:** make one PR for one problem. If you need to fix a but, don't add a new feature at the same time. Create two PR's.

This is a fork from: https://github.com/enesozturk/rn-swipeable-panel - all credits to original package creator https://github.com/enesozturk

