import Firebase from 'firebase';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Card, } from 'native-base';


import {Drawer, Icon} from 'native-base';
import { StackNavigator } from 'react-navigation';


import SideBar from '../components/sidebar';
import Profile from '../components/profile';
import MapSearch from '../components/map';

import {Button} from '../components/Button';



const config = {
    apiKey: "AIzaSyC0eVfyQE_wiC-mZ_bfpJdjlax_xJ8Tv_E",
    authDomain: "emergeo-4496e.firebaseapp.com",
    databaseURL: "https://emergeo-4496e.firebaseio.com",
    projectId: "emergeo-4496e",
    storageBucket: "emergeo-4496e.appspot.com",
    messagingSenderId: "613936575014"
};

const app = Firebase.initializeApp(config);
const auth = Firebase.auth();


export default class Auth extends Component{

    state = {
        email:'',
        password:'',
        btnContent: null,
    };

    handleUserEmail(text){
        this.setState({
            email: text
        })
    }

    handleUserPassword(text){
        this.setState({
            password: text
        })
    }



    

    render(){
        const { navigate } = this.props.navigation;    
        return(
            <View style={styles.container}>
                <Content>
                
                <Card style={styles.card}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input onChangeText={(text)=> this.handleUserEmail(text)} />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(text)=>this.handleUserPassword(text)} />
                        </Item>
                       


                    </Form>


                    </Card>
                     <Button onPress={()=>this.toggleSignIn()}>
                            Sign In
                            </Button>
                            </Content>
               
            </View>
        )
    }

    // changeView() {
    //     this.props.dispatch('SWITCH_VIEW', {
    //         viewNumber: 1
    //     })
    // }
    
    //THIS FUNCTION WILL CREATE A USER ACCOUNT AND SIGN THEM IN
     createUser() {
        const { navigate } = this.props.navigation;    
        const email = this.state.email
        const password = this.state.password
        console.log('i was pressed!');
        //VERIFY IF EMAIL IS VALID
        if(email.length < 4) {
            alert('Please enter a valid email address');
        }
        //VERIFY IF PASSWORD LENGTH IS VALID
        if(password.length < 4){
            alert('Please enter password');
        }
        //FIREBASE FUNCTION TO CREATE A NEW USER AND SIGN THEM IN
        auth.createUserWithEmailAndPassword(email, password)
        .then(res => navigate('Prof')).catch( function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            //CHECKS IF PASSWORD IS TOO WEAK AND ALERTS USER
            if(errorCode === 'auth/weak-password'){
                alert('Password is too weak!')
            }else{
                alert(errorMessage)
            }
            
            console.log(error);
        });
    }




//THIS FUNCTION WILL HANDLE USER SIGN IN AND SIGN OUT
toggleSignIn(){
     const { navigate } = this.props.navigation;    
        const email = this.state.email
        const password = this.state.password
    //CHECKS IF CURRENT USER IS SIGNED IN AND BEGINS SIGN OUT
    if(auth.currentUser){
        auth.signOut()
    }
    else{
        // const email = // attach email element
        // const password = // attach password element field
        if(email.length < 4){
            alert('Please enter a valid email address!')
        }
        if(password.length < 4){
            alert('Please enter a valid password!')
        }

        auth.signInWithEmailAndPassword(email, password)
        .then(res => navigate('Map'))
        .catch(() => auth.createUserWithEmailAndPassword(email, password))
            .then(res => navigate('Prof')).catch(error =>{
                alert('Some Error!')
            })
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,


    },
    content:{
        alignContent:'center',
        justifyContent:'center',
    },

    card: {
        alignContent:'center',
        justifyContent:'center',
        borderRadius: 5,
        borderColor:'black',
       backgroundColor:'#9DBFC8',
    },

    btntext:{
        color:'#9DBFC8',
    },
});




class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Search Map',
  };
  render() {
    return (
      <View>
        <Text>Search the map.</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile Page',
  };
  render() {
    return (
      <View>
        <Text>View your profile</Text>
      </View>
    );
  }
}


class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };
  render() {
    return (
      <View>
        <Text>Sign Up!</Text>
      </View>
    );
  }
}

class SignOut extends React.Component {
  static navigationOptions = {
    title: 'Sign Out',
  };
  render() {
    return (
      <View>
        <Text>Sign Out</Text>
      </View>
    );
  }
}


export const SimpleApp2 = StackNavigator({

  
  Sign: { screen: Auth },
  Prof: { screen: Profile},
  Map: { screen: MapSearch},
});

