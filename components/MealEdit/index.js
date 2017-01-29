import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  AlertIOS,
  TextInput,
  ImagePickerIOS,
  Image,
  Text,
  NavigatorIOS,
  View,ScrollView,TouchableHighlight, Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js'
import fireApp from '../../firebase.js'

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

export default class MealEdit extends Component{



  constructor(props){

    super(props);
    var rowData = this.props.rowData;
    var title = (typeof rowData.title !== 'undefined') ? rowData.title : '';
    var imageUri = (typeof rowData.image !== 'undefined') ? rowData.image : '';
    var day = (typeof rowData.day!== 'undefined') ? rowData.day : '';
    var description = (typeof rowData.day!== 'undefined') ? rowData.day : '';

    this.itemsRef = this.getRef().child('recipes');
    this.state = {
      formData:{
        mealName: title,
        day: day
      },
      image: imageUri,
      key: rowData._key
    }

  }
  getRef() {
    return fireApp.ref();
  }
  addImage() {
    this.pickImage();
  }

  pickImage() {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ image: imageUri });
    }, error => console.error(error));
  }

  editMeal(){
    var value = this.state.formData
    var rowData = this.state.formData
    fireApp.ref('recipes/' + this.state.key).set({
      title: value.mealName,
      day: value.day,
      image: this.state.image
  });

    this.clearForm(this)
    this.props.navigator.pop({passProps: {rowData}});
  }

  handleFormChange(formData){

    var title = (typeof formData.mealName !== 'undefined') ? formData.mealName : this.state.formData.mealName;
    var day = (typeof formData.day!== 'undefined') ? formData.day : this.state.formData.day;
    this.setState({formData:{
      mealName: title,
      day: day
    }})
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }
  openTermsAndConditionsURL(){

  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  clearForm(){
    this.setState({
      formData:{
        mealName:"",
        day: ""
      },
      image: ""
    })}


  render(){
    var formData = this.state.formData
    return (<ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200}}>
      <Form
        ref='registrationForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        label="Personal Information">
        <Separator />
        <InputField
          ref='mealName'
          label='Meal Name'
          value={this.state.formData.mealName}
          />

        <PickerField ref='day'
          label='Day'
          value={this.state.formData.day}
          options={{
            "": '',
            Monday: 'Monday',
            Tuesday: 'Tuesday',
            Wednesday: 'Wednesday',
            Thursday: 'Thursday',
            Friday: 'Friday',
            Saturday: 'Saturday',
            Sunday: 'Sunday',
          }}/>

        </Form>
        <Text>{JSON.stringify(this.state.formData)}</Text>
          <View>
              <Image style={styles.image} source={{ uri: this.state.image }} />
          </View>

        <TouchableHighlight style={styles.button} onPress={this.addImage.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Add Images</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={this.editMeal.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>

      </ScrollView>);
    }
  }
