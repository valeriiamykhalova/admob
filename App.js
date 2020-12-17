/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';

import AdmobBanner from './AdmobBanner';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 200}} />
      <AdmobBanner />
    </View>
  );
};

export default App;
