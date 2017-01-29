
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  NavigatorIOS,
  View,
} from 'react-native';
import fireApp from '../../firebase.js'

export default class MealDetail extends Component {
  constructor(props) {
      super(props)
      var key = props.rowData._key;

      this.itemsRef = this.getRef().child('recipes/'+key);
      this.state = {
        formData:{
          mealName:props.rowData.title,
          day: props.rowData.day
        },
        image: props.rowData.image
      }
    }

    getRef() {
      return fireApp.ref();
    }

    componentDidMount() {
              this.listenForItem(this.itemsRef);
            }

    listenForItem(itemsRef) {
      itemsRef.on('value', (snap) => {

        this.setState({
            formData:{
              mealName: snap.val().title,
              day: snap.val().day,
            },
            image: snap.val().image,
          });
      });
            }


  render() {

      return(
        <View style={styles.container}>
        <Text style={styles.title}>
        Title: {this.state.formData.mealName}
        </Text>
          <Text style={styles.ingredientsTitle}>
          Day: {this.state.formData.day}

          </Text>
<Image style={styles.image} source={{uri: this.state.image}}/>
        </View>
      )
}
}
const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: 'center'
  },
  title:{
    fontSize: 30,
  },
  ingredientsTitle:{
    fontSize: 20,
  },
  image: {
    width: 107,
    height: 165,
    padding: 10
  },
  description: {
    padding: 10,
    fontSize: 15,
    color: '#656565'
  }
});
