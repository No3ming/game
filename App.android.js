/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import {Color} from './theme/thme'

import Login from './views/Login'
import Home from './views/Home'
import WelCome from './views/Welcome'

const App = StackNavigator({
    WelCome: {screen: WelCome},
    Login: {screen: Login},
    Home: {screen: Home}
  },
  {
    initialRouteName: 'Login',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: Color.dangerColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
export default App
