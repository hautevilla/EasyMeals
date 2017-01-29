import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Modal,
  NavigatorIOS,
  View,
  TouchableHighlight
} from 'react-native';
import styles from './styles.js'
import MealList from './MealList.js'
import MealForm from '../MealForm'
import Login from '../Login'
export default class WeekMeals extends Component {

addItem() {
  this.refs.nav.push({
   component: MealForm,
   title: 'Add',
   backButtonTitle: 'Custom Back',
   passProps: { myProp: 'genius',
   onRightButtonPress: this.addItem.bind(this), },
 });
}

logOut() {
  this.refs.nav.push({
   component: Login,
   title: 'Add',
   backButtonTitle: 'Custom Back',
   passProps: { myProp: 'genius',
   onRightButtonPress: this.addItem.bind(this), },
 });
}
  render() {


    return (
      <NavigatorIOS
      ref="nav"
      style={styles.nav}
      initialRoute={{
        title: 'Meals for the Week',
        component: MealList,
        rightButtonTitle: 'Add',
        backButtonTitle: 'back',
        onRightButtonPress: this.addItem.bind(this),
        onLeftButtonPress: this.logOut.bind(this),
        
      }}
      />

    );
  }
}
