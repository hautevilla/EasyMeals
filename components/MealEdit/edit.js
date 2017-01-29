import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  AlertIOS,
  ImagePickerIOS,
  Image,
  Text,
  TextInput,
  NavigatorIOS,
  View,ScrollView,TouchableHighlight, Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js'
import fireApp from '../../firebase.js'
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  Select,
  FormGroup,
  Input,
  Label,
  Switch
} from 'react-native-clean-form'


export default class MealEdits extends Component{



  constructor(props){

    super(props);
    var rowData = this.props.rowData;
    var title = (typeof rowData.title !== 'undefined') ? rowData.title : '';
    var imageUri = (typeof rowData.image !== 'undefined') ? rowData.image : '';
    var day = (typeof rowData.day!== 'undefined') ? rowData.day : '';
    this.itemsRef = this.getRef().child('recipes');
    this.state = {
      formData:{
        mealName: title,
        day: day
      },
      image: imageUri,
      text: "Pasta"
    }
  }
  getRef() {
    return fireApp.ref();
  }


  render(){
    const countryOptions = [
      {label: '', value: ''},
      {label: 'Denmark', value: 'DK'},
      {label: 'Germany', value: 'DE'},
      {label: 'United State', value: 'US'}
    ]


    return (<ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200}}>
    <Form>
   <FieldsContainer>
     <Fieldset style={styles.description} label="Contact details">
       <FormGroup>
         <Label style={styles.description}>Meal</Label>
         <Input
         placeholder="Esben"
         onChangeText={this.onFirstNameChange}
         value="fsd"/>
       </FormGroup>
       <FormGroup>
         <Label>Day</Label>
         <Input placeholder="esbenspetersen@gmail.com" onChangeText={this.onEmailChange} />
       </FormGroup>
       <FormGroup>
          <Label>Country</Label>
          <Select
              name="country"
              label="Country"
              options={countryOptions}
              placeholder="Denmark"
          />
        </FormGroup>
     </Fieldset>
   </FieldsContainer>
   <View>
       <Image style={styles.image} source={{ uri: this.state.image }} />
   </View>
   <ActionsContainer>
     <Button icon="md-checkmark" iconPlacement="right" onPress={this.save}>Save</Button>
   </ActionsContainer>
 </Form>
        <Text>{JSON.stringify(this.state.formData)}</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </ScrollView>);
    }
  }
