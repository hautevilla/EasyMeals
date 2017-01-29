import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  NavigatorIOS,
  ListView,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import styles from './styles.js'
import MealDetail from '../Common/MealDetail.js'
import fireApp from '../../firebase.js'
import MealForm from '../MealForm'
import Swipeout from 'react-native-swipeout'
import MealEdit from '../MealEdit'
import MealEdits from '../MealEdit/edit.js'
export default class MealList extends Component {
constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
          sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        })
      };
      this.itemsRef = this.getRef().child('recipes');
    }

    getRef() {
      return fireApp.ref();
    }

listenForItems(itemsRef) {
      itemsRef.on('value', (snap) => {
        // get children as an array
        var meals = [];
        snap.forEach((child) => {
          meals.push({
            title: child.val().title,
            day: child.val().day,
            image: child.val().image,
            cuisine: child.val().cuisine,
            _key: child.key
          });
        });

        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dayMeal(meals))
        });
      });
    }

componentDidMount() {
      this.listenForItems(this.itemsRef);
    }

editMeal(rowData) {
      this.props.navigator.push({
       component: MealEdit,
       title: 'Edit',
       backButtonTitle: 'Custom Back',
       passProps:{rowData}
     });
    }

deleteMeal(rowData) {
      this.itemsRef.child(rowData._key).remove()
    }

showMealDetail(rowData){
  this.props.navigator.push({
    component: MealDetail,
    title: 'Details',
    rightButtonTitle: 'Edit',
    onRightButtonPress:() => this.editMeal(rowData),
    passProps: {rowData}
  });
}

dayMeal(meals){
  var dayMap = {Monday:[],Tuesday:[],Wednesday:[], Thursday:[], Friday:[], Saturday:[], Sunday:[]};
  meals.forEach(function(mealItem) {
    if (!dayMap[mealItem.day]) {
      dayMap[mealItem.day] = [];
    }
    dayMap[mealItem.day].push(mealItem);
  });
  console.log(dayMap);
  return dayMap;
}

renderSectionHeader(sectionData,day){
    return(
      <Text style={styles.daySection}>
      {day}
      </Text>
    )
  }
renderRow(rowData, sectionID, rowID){
    var swipeBtns = [{
      text:'Delete',
      backgroundColor: 'red',
      underlayColor: 'transparent',
      onPress: () => {this.deleteMeal(rowData)}
    }]
    return(
      <Swipeout right={swipeBtns}
        autoClose= {false}
        backgroundColor= 'transparent'>
      <TouchableHighlight onPress={() => this.showMealDetail(rowData)} underlayColor='#dddddd'>
      <View>
      <Text style={styles.day}>
             {rowData.title}
      </Text>
      <View style={styles.container}>

      <Image source={{uri: rowData.image}}
             style={styles.thumbnail}/>
      </View>
      <View style={styles.separator}>
      </View>

      </View>
      </TouchableHighlight>
      </Swipeout>
    )
  }
  render() {
    return (
    <ListView
    dataSource={this.state.dataSource}
    renderRow={this.renderRow.bind(this)}
    renderSectionHeader={this.renderSectionHeader.bind(this)}
    />
    );
  }
}
