import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight, 
    Image, Container,
    // BackgroundImage
} from 'react-native';

import {Drawer, Icon, Button,} from 'native-base';
import { StackNavigator } from 'react-navigation';


import SideBar from './sidebar';
import Auth from '../firebase/auth';
import Profile from './profile';
import MapSearch from './map';




class BackgroundImage extends Component {
    render() {
        return (
            <Image source={require('../../assets/images/chicago.jpg')}
                style={styles.backgroundImage}>
                {this.props.children}
            </Image>
        )
    }
}



class Home extends Component{


    render(){
        const { navigate } = this.props.navigation;    
        return(
        <View style={styles.container}>
            <BackgroundImage>
               
                <Text style={styles.text}><Image source={require('../../assets/images/emergeologo.png')} style={{height: 150,
                    width: 160,marginTop:25, marginLeft:0, }}>
                   </Image>

                   </Text>



                   <View>
                   <Button style={styles.btn}>
                    <Text style={styles.whitetext} onPress={() => {
                        navigate('Sign')

                    }}>Get Started!</Text>
                    </Button>  
                    </View>


                <Text style={styles.text2}>Have an account?</Text>
                <TouchableHighlight onPress={() => {
                    navigate('Sign')
            }}>
                <Text style={styles.text3}>Login here.</Text>
                </TouchableHighlight>
            </BackgroundImage>     
      </View>  
        )
    }
}




        // <TouchableHighlight style={styles.menu}  onPress={()=> this.openDrawer()}>
        //  <Icon name= "menu"/>

        //   </TouchableHighlight>



// <TouchableHighlight
//                     style={styles.btn}
//                     onPress={() => navigate(SimpleApp.Sign)}>
//                     <Text style={styles.btnText}>Get Started!</Text>
//                 </TouchableHighlight>




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


const SimpleApp2 = StackNavigator({

  Home: { screen: Home }, 
  Sign: { screen: Auth },
  Prof: { screen: Profile},
  Map: { screen: MapSearch},
});
export default SimpleApp2;

const styles = StyleSheet.create({
    drawer:{
        width: 320,
        backgroundColor: 'rgba(0,0,0,0)',
        color:'white',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    
    btn:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        borderWidth:1,
        borderColor:'#fff',
        borderRadius: 5,
        backgroundColor:'#2D5669',
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        flex: 1,
        marginTop: 5,
    },
    heading: {
        color: '#ccc',
        fontWeight: 'bold',
        fontSize: 25,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: 400,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor:'rgba(0,0,0,0.6)',
        fontSize: 45,
        fontWeight: 'bold',
        borderWidth: 1, 
        borderColor:'#fff',
        borderRadius: 5,
        padding:0,
        paddingBottom:20,
        paddingRight:0,
        paddingLeft:0,
        marginRight: 0,
        marginBottom:30,
       

    },
    whitetext:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    text2: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10,
        marginTop:10,
        fontSize: 17,
    },
    text3: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    btnText:{
        color:'white',
        fontWeight: 'bold',
    },
    logo: {

    },
    menu:{
        marginLeft: 25,
        marginTop: 25,
    }
});
