import { View, FlatList } from 'react-native';
import React from 'react';

import { ListItem } from './components/ListItem';
import { Styles } from './styles';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const ItemList = [
  { id: 1, name: 'About', open: 'about' },
  { id: 2, name: 'Settings', open: 'settings' },
  { id: 3, name: 'Configurations', open: 'configurations' },
  { id: 4, name: text, open: 'about' },
  { id: 5, name: text, open: 'about' },
  { id: 6, name: text, open: 'about' },
  { id: 7, name: 'Last item', open: 'about' },
];

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 1,
      isDeleteActive: false,
      selectedItems: [],
    };
  }

  onItemPress = item => {};

  switchOnPress = open => {
    switch (open) {
      case 'about':
        return this.props.openAboutPanel;
      case 'settings':
        return this.props.openSettingsPanel;
      case 'configurations':
        return this.props.openConfigurationsPanel;
      default:
        return this.props.openDefaultPanel;
    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <FlatList
          contentContainerStyle={Styles.flatList}
          data={ItemList}
          renderItem={({ item }) => <ListItem item={item} onPress={this.switchOnPress(item.open)} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}
