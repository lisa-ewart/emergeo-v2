import Firebase from 'firebase';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';


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
        password:''
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
        return(
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input onChangeText={(text)=> this.handleUserEmail(text)} />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(text)=>this.handleUserPassword(text)} />
                        </Item>
                        <Button block onPress={()=> this.createUser()}>
                            <Text>Sign In</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
    
    //THIS FUNCTION WILL CREATE A USER ACCOUNT AND SIGN THEM IN
     createUser() {
        const email = this.state.email
        const password = this.state.password
        console.log('i was pressed!');
        //VERIFY IF EMAIL IS VALID
        if(email.length < 4){
            alert('Please enter a valid email address');
        }
        //VERIFY IF PASSWORD LENGTH IS VALID
        if(password.length < 4){
            alert('Please enter password');
        }
        //FIREBASE FUNCTION TO CREATE A NEW USER AND SIGN THEM IN
        auth.createUserWithEmailAndPassword(email, password).catch( function (error) {
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
}

//THIS FUNCTION WILL HANDLE USER SIGN IN AND SIGN OUT
export function toggleSignIn(){
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
        auth.signInWithEmailAndPassword(email, password).catch(function (error){
            const errorCode = error.code;
            const errorMessage = error.message;

            //CHECKS IF PASSWORD IS CORRECT
            if (errorCode === 'auth/wrong-password') {
                alert('You entered the worng password!')
            } else {
                alert(errorMessage)
            }

            console.log(error);
        })
     }
}

