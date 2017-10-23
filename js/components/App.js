import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import Auth from '../firebase/auth';
import Home from './home';
import DrawerExample from './drawer';

import {
  StackNavigator,
} from 'react-navigation';
import Profile from './profile';
import Sidebar from './sidebar';
import SimpleApp2 from './sidebar';





export default class App extends React.Component {
    render(){    
        return(
          <Home />


          
        )
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
