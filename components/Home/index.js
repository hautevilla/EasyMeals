import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import styles from './styles.js'
import Icon from 'react-native-vector-icons/Ionicons';
import GroceryList from '../GroceryList'
import WeekMeals from '../WeekMeals'
import MealLibrary from '../MealLibrary'

export default class Landing extends Component{
constructor(){
  super();
  this.state = {
    selectedTab: 'WeekMeals'
  }
}
  render() {
    return (

    <TabBarIOS>

    <Icon.TabBarItemIOS
    selected={this.state.selectedTab === 'WeekMeals'}
    title="Week's Meals"
    iconName="ios-nutrition"
    onPress={()=> {
      this.setState({
          selectedTab: 'WeekMeals'
        });
    }}>
    <WeekMeals/>
    </Icon.TabBarItemIOS>

    <Icon.TabBarItemIOS
    selected={this.state.selectedTab === 'GroceryList'}
    title="Grocery List"
    iconName="ios-cart"
    onPress={()=> {
      this.setState({
          selectedTab: 'GroceryList'
        });
    }}>
    <GroceryList/>
    </Icon.TabBarItemIOS>

    <Icon.TabBarItemIOS
    selected={this.state.selectedTab === 'MealLibrary'}
    title="Meal Library"
    iconName="ios-book"
    onPress={()=> {
      this.setState({
          selectedTab: 'MealLibrary'
        });
    }}>
    <MealLibrary/>
    </Icon.TabBarItemIOS>

    </TabBarIOS>
    );
  }}
