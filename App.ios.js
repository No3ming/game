/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import store from './stores'
import {Color} from './theme/thme'
import SplashScreen from 'react-native-splash-screen'

import Login from './views/Login'
import Home from './views/Home'
import WelCome from './views/Welcome'
import Forget from './views/Forget'
import Registered from './views/Registered'

const RootStack = StackNavigator({
    WelCome: {
      screen: WelCome
    },
    Login: {
      screen: Login
    },
    Registered: {
      screen: Registered
    },
    Forget: {screen: Forget},
    Home: {screen: Home}
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: Color.dangerColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    },
  }
)

@observer
class App extends React.Component {
  @observable passed = 0

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <RootStack store={store}/>
    );
  }
}

export default App
