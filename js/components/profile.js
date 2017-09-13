import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image, resizeMode,StyleSheet,Button } from 'react-native';
import SubmitButton from 'react-native-submit-button';

export default class Profile extends Component {
  

  render() {
    const resizeMode = 'contain';
    return (
      <View style={{padding: 50,
        backgroundColor:'#94B9E1',  
        }}>
        
        <Button
          onPress={() => {alert('Profile Page!')}}
          title="Profile"
          color='green'
          accessibilityLabel="Learn more about this button"
         />
       
      </View>
    );
  }
}