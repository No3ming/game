import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import Button from 'apsl-react-native-button'
import {Theme, Color} from '../theme/thme'

console.log(Theme)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  static navigationOptions = {
    title: '注册',
    gesturesEnabled: false
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput style={styles.userName}
                     placeholder="手机号"
                     underlineColorAndroid={'transparent'}
                     selectionColor={Color.waringColor}
                     onChangeText={(username) => this.setState({username})}/>
          <TextInput style={styles.password}
                     placeholder="密码"
                     value={this.state.password}
                     secureTextEntry={true}
                     clearTextOnFocus={true}
                     underlineColorAndroid={'transparent'}
                     onChangeText={(password) => this.setState({password})}/>
          <View style={styles.loginBtn}>
            <Button style={Theme.btnDanger}
                    onPress={() => navigate('Login')}
                    textStyle={Theme.btnText}>登录</Button>

          </View>
          <View style={styles.linkView}>
            <Text style={styles.registered} onPress={() => navigate('Registered')}>注册</Text>
            <View style={{flex: 1}}></View>
            <Text style={styles.forget} onPress={() => navigate('Forget')}>忘记密码？</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputBox: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    width: '100%',
    paddingTop: 10
  },
  userName: {height: 40, width: '100%',  borderWidth: 1, paddingLeft: 10, borderColor: Color.borderColor},
  password: {height: 40, width: "100%",  borderWidth: 1, paddingLeft: 10, borderTopWidth: 0, borderColor: Color.borderColor},
  linkView: {
    width: '100%',
    flexDirection: 'row',
    padding: 10
  },
  registered: {
    width: 100,
    textAlign: 'left'
  },
  forget: {
    width: 120,
    textAlign: 'right'
  }
});

export default Login
