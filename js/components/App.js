import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

import Auth from '../firebase/auth';

export default class App extends React.Component {



  render() {
    return (
        <Auth {...this.props}/>
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
