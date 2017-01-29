import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from '../Home'

export default class Login extends Component {

  constructor(){
      super();
      this.state = {pass:'fail'}
    }

loginScreen(){
  this.setState({pass:'authed'})
}

  render() {
    switch(this.state.pass){
    case 'authed':
    return (
        <Home/>
      );
      default:
      return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login page
        </Text>
        <TouchableOpacity
          onPress={() => { this.loginScreen() }}>
          <Text style={styles.description}>
          Login
          </Text>
          </TouchableOpacity>
      </View>
    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
