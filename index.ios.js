/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './components/Home'
console.disableYellowBox = true;
export default class EasyMeals extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

AppRegistry.registerComponent('EasyMeals', () => EasyMeals);
