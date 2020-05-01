import { View } from 'react-native';
import React from 'react';

import { Separator } from './components/Separator';
import { SettingItem } from './components/SettingItem';

type SettingsProps = {};

export const Settings = ({  }: SettingsProps) => {
  return (
    <View>
      <SettingItem title={'Settings'} isHeader />
      <SettingItem title={'Add To Favorites'} />
      <Separator noLine={false} />
      <SettingItem title={'Remove'} isLast isRed />
    </View>
  );
};
