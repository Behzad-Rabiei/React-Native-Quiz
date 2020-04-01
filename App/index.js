import React from 'react';
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import store from './config/store';
import Home from './Screens/Quiz';

EStyleSheet.build({
  $deepskyblue: '#00bfff',
  $white: '#ffffff',
  $answer: 'rgba(255,255,255,.3)',
});

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
