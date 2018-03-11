/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';

 import Login from './views/Login'
 import Home from './views/Home'
 import WelCome from './views/Welcome'

const App = StackNavigator({
    WelCome: {screen: WelCome},
    Login: {screen: Login},
    Home: {screen: Home}
    },
    {
        initialRouteName: 'WelCome',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);
export default App
