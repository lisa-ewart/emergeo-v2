import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import Auth from '../firebase/auth';
import Home from './home';
import DrawerExample from './drawer';


import {ViewNames} from '../flux/store';


export default class App extends React.Component {
    // state = Store

  render() {
     switch(this.props.currentView){
       case ViewNames.HOME:
        return <Home {...this.props}/>
      case ViewNames.SIGN_IN:
        return <Auth {...this.props}/>
      default:
        return <Home {...this.props}/>

     }
    return (
        this.props.currentView
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
