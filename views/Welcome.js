import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import Button from 'apsl-react-native-button'

class WelCome extends React.Component {
  static navigationOptions = {
    title: '开始'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30, color: 'red'}}>欢迎XXX</Text>
        <View style={{padding: 10, width: "100%"}}>
          <Button style={{backgroundColor: 'red', borderColor: 'rgba(0,0,0,0)'}}
                  onPress={() => navigate('Login')}
                  textStyle={{fontSize: 18, color: "#fff"}}>已有账号</Button>
          <Button  textStyle={{fontSize: 18}}>注册</Button>
        </View>
      </View>
    );
  }
}

export default WelCome
