import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import {observer} from "mobx-react";

@observer
class Home extends React.Component {
  static navigationOptions = {
    title: '',
    header: null,
    headerTransparent: true
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <View style={styles.header}>
          <Image source={require('../static/img/weixin.png')} style={styles.headerImg}/>
          <Text style={styles.username}>名称</Text>
        </View>
        <View style={styles.tips}>
          <Text>消息</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(0,11,3,.5)'
  },
  headerImg: {
    width: 50,
    height: 50
  },
  username: {
    height: 50,
    lineHeight: 50
  },
  tips: {
    height: 40
  }
})

export default Home
