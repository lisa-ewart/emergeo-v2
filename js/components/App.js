import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import Auth from '../firebase/auth';
import Home from './home';
import DrawerExample from './drawer';
import {
  StackNavigator,
} from 'react-navigation';


const screens = StackNavigator({
  Welcome: { screen: Home },
  SignIn: { screen: Auth },
});


export default class App extends React.Component {
    static navigationOptions = {
    title: 'Welcome',
  };

  render() {
     const { navigate } = navigation.navigate;
    return (
        <Welcome {...this.props}/>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
