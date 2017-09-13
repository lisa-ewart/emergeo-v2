import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image, resizeMode,StyleSheet,Button } from 'react-native';
import SubmitButton from 'react-native-submit-button';


const remote = 'http://www.whosdrivingyou.org/wp-content/uploads/2016/06/chicago-image-1.jpg';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',
    password: ''
    };
  }

  render() {
    const resizeMode = 'contain';
    return (
      <View style={{padding: 50,
        backgroundColor:'none',
          
          
        }}>

        
        <TextInput
          style={{height: 40,
            marginTop:25,
            backgroundColor: '#fff',
          }}
          placeholder="Username Here"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{height: 40,
          backgroundColor: '#fff',
          marginTop: 10,
          marginBottom:15,
          }}
          placeholder="Enter Password Here"
          onChangeText={(password) => this.setState({password})}
        />
        <Button
          onPress={() => {alert('You are signing in!')}}
          title="Sign In"
          color='green'
          accessibilityLabel="Learn more about this button"
         />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  button:{
    fontSize: 10,
    height: 25,
    fontWeight: 'bold',
    width: 100,
    marginTop:5,
  }
});
